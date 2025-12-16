'use client'

type EventType = 
  | 'order_zomato'
  | 'order_swiggy'
  | 'call_click'
  | 'whatsapp_click'
  | 'menu_view'
  | 'gallery_view'
  | 'catering_inquiry'
  | 'contact_view'
  | 'instagram_click'

interface AnalyticsEvent {
  event: EventType
  page?: string
  label?: string
}

class Analytics {
  private static instance: Analytics
  private events: AnalyticsEvent[] = []

  private constructor() {
    // Initialize analytics
    if (typeof window !== 'undefined') {
      this.loadAnalytics()
    }
  }

  static getInstance(): Analytics {
    if (!Analytics.instance) {
      Analytics.instance = new Analytics()
    }
    return Analytics.instance
  }

  private loadAnalytics() {
    // Lightweight tracking - just console in dev, can be replaced with Vercel Analytics
    if (process.env.NODE_ENV === 'development') {
      console.log('Analytics initialized')
    }
  }

  track(eventData: AnalyticsEvent) {
    const event = {
      ...eventData,
      timestamp: new Date().toISOString(),
      page: eventData.page || window.location.pathname,
    }

    this.events.push(event)

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log('📊 Analytics Event:', event)
    }

    // Send to analytics service (Vercel Analytics, Plausible, etc.)
    if (typeof window !== 'undefined' && (window as any).va) {
      (window as any).va('track', eventData.event, {
        page: event.page,
        label: eventData.label,
      })
    }
  }

  getEvents() {
    return this.events
  }
}

export const analytics = Analytics.getInstance()

// Helper functions for common events
export const trackOrderClick = (platform: 'zomato' | 'swiggy') => {
  analytics.track({
    event: platform === 'zomato' ? 'order_zomato' : 'order_swiggy',
    label: platform,
  })
}

export const trackCallClick = (source?: string) => {
  analytics.track({
    event: 'call_click',
    label: source,
  })
}

export const trackWhatsAppClick = (source?: string) => {
  analytics.track({
    event: 'whatsapp_click',
    label: source,
  })
}

export const trackInstagramClick = () => {
  analytics.track({
    event: 'instagram_click',
  })
}

export const trackPageView = (page: string) => {
  analytics.track({
    event: page.includes('menu') ? 'menu_view' :
          page.includes('gallery') ? 'gallery_view' :
          page.includes('catering') ? 'catering_inquiry' :
          page.includes('contact') ? 'contact_view' :
          'menu_view',
    page,
  })
}
