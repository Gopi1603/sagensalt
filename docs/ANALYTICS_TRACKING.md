# Analytics & Conversion Tracking Setup
## Sage N Salt Performance Monitoring

## 📊 Implemented Tracking

### Event Tracking (Lightweight)

The website tracks the following user actions:

#### 1. Order Platform Clicks
**Event:** `order_zomato` | `order_swiggy`  
**Triggers when:** User clicks "Order on Zomato" or "Order on Swiggy"  
**Location:** Homepage, Menu page, Contact page

#### 2. Phone Call Clicks
**Event:** `call_click`  
**Triggers when:** User clicks any phone number link  
**Location:** All pages with call CTA

#### 3. WhatsApp Button Clicks
**Event:** `whatsapp_click`  
**Triggers when:** User clicks WhatsApp floating button or WhatsApp CTA  
**Location:** All pages (floating button + specific CTAs)

#### 4. Instagram Link Clicks
**Event:** `instagram_click`  
**Triggers when:** User clicks Instagram icon in vertical bar  
**Location:** All pages (left sidebar)

#### 5. Page Views
**Event:** `menu_view` | `gallery_view` | `catering_inquiry` | `contact_view`  
**Triggers when:** User lands on respective page  
**Location:** Auto-tracked on all main pages

---

## 🔧 Analytics Implementation

### Option 1: Vercel Analytics (Recommended)

**Why Vercel Analytics:**
- ✅ Lightweight (< 1KB)
- ✅ Privacy-friendly (no cookies)
- ✅ No GDPR consent needed
- ✅ Built-in with Vercel hosting
- ✅ Free tier available

**Setup:**

```bash
npm install @vercel/analytics
```

Update `app/layout.tsx`:
```typescript
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

**View data:**
- Go to Vercel dashboard → Analytics
- See page views, top pages, conversion events

---

### Option 2: Plausible Analytics

**Why Plausible:**
- ✅ Privacy-focused
- ✅ Simple dashboard
- ✅ GDPR compliant
- ✅ Lightweight script
- ✅ Event tracking built-in

**Setup:**

1. Sign up at https://plausible.io
2. Add script to `app/layout.tsx`:

```html
<script defer data-domain="sagensalt.com" src="https://plausible.io/js/script.js"></script>
```

3. Track custom events:
```javascript
window.plausible('Order', { props: { platform: 'zomato' } })
```

**Cost:** $9/month for 10k pageviews

---

### Option 3: Google Analytics 4 (Not Recommended)

**Cons:**
- Heavy script (impacts performance)
- Complex setup
- Cookie consent required
- Overkill for restaurant website

**Only use if:**
- You need detailed funnel analysis
- Integration with Google Ads
- Complex attribution tracking

---

## 📈 Key Metrics to Track

### Daily Monitoring
- [ ] Total page views
- [ ] Order button clicks (Zomato + Swiggy)
- [ ] Phone call clicks
- [ ] WhatsApp clicks
- [ ] Top pages visited

### Weekly Review
- [ ] Traffic sources (Google, Direct, Social)
- [ ] Menu page views (interest in offerings)
- [ ] Contact page views (intent to visit)
- [ ] Catering page views (bulk order interest)
- [ ] Mobile vs Desktop traffic

### Monthly Goals
- **Target:** 500-1000 unique visitors/month (Month 1)
- **Order clicks:** 50-100/month
- **Call clicks:** 30-50/month
- **WhatsApp inquiries:** 20-40/month

**Growth:** Aim for 20% month-over-month increase

---

## 🎯 Conversion Funnel

### Primary Conversion Path
```
Website Visit
    ↓
View Menu → Order Click (Zomato/Swiggy) → Conversion
    ↓
    OR
    ↓
Call Click → Phone Order → Conversion
    ↓
    OR
    ↓
WhatsApp Click → Chat Order → Conversion
```

### Track Conversion Rate
```
Conversion Rate = (Order Clicks + Call Clicks) / Total Visits × 100
```

**Benchmark:** Aim for 5-10% conversion rate

---

## 📞 Call Tracking (Optional)

### Basic Call Tracking

**Method 1: Unique Phone Numbers**
- Use different numbers for different marketing channels
- Track which channel drives more calls

**Method 2: Call Tracking Software**
- Services: CallRail, Dialpad, Exotel (India)
- Provides call recording, source tracking, call duration
- Cost: ₹2000-5000/month

**Method 3: Manual Tracking**
- Train staff to ask: "How did you hear about us?"
- Log in spreadsheet daily
- Free but less accurate

---

## 💬 WhatsApp Analytics

### Track WhatsApp Inquiries

**Using WhatsApp Business:**
- Free app with basic analytics
- Shows message volume by day
- Response time metrics
- Can't track conversion source

**Using WhatsApp Business API:**
- Advanced tracking
- Integration with CRM
- Automated messages
- Cost: ₹1000-3000/month
- Providers: Gupshup, Interakt, WATI

---

## 📊 Dashboard Setup

### Simple Weekly Report Template

```
Week: [Date Range]

TRAFFIC
- Total Visitors: [X]
- Page Views: [X]
- Top Page: [Page name]

ENGAGEMENT
- Order Clicks (Zomato): [X]
- Order Clicks (Swiggy): [X]
- Call Clicks: [X]
- WhatsApp Clicks: [X]

CONVERSION
- Estimated Orders: [X]
- Conversion Rate: [X]%

SOURCES
- Google Search: [X]%
- Direct: [X]%
- Instagram: [X]%
- Other: [X]%
```

**Update this weekly in a Google Sheet**

---

## 🎯 Goal Tracking

### Set Up Goals in Analytics

**Goal 1: Order Intent**
- Event: order_zomato OR order_swiggy
- Value: High (direct revenue)

**Goal 2: Contact Intent**
- Event: call_click OR whatsapp_click
- Value: High (direct conversation)

**Goal 3: Menu Interest**
- Event: menu_view
- Value: Medium (research phase)

**Goal 4: Catering Lead**
- Event: catering_inquiry
- Value: High (bulk order potential)

---

## 🔗 UTM Parameter Strategy

### Track Marketing Campaigns

**Use UTM parameters for:**
- Instagram bio link
- Google Business posts
- Facebook ads (if running)
- Printed QR codes

**UTM Builder:**
```
Homepage: https://sagensalt.com/
Instagram: https://sagensalt.com/?utm_source=instagram&utm_medium=bio&utm_campaign=profile

Menu from Google Post:
https://sagensalt.com/menu?utm_source=google&utm_medium=post&utm_campaign=weekly_special
```

**Track in analytics:** See which campaigns drive most traffic

---

## 🎨 Heatmap & User Behavior (Optional)

### Tools for Understanding User Behavior

**Hotjar (Free tier available):**
- Heatmaps showing where users click
- Session recordings
- Feedback polls
- See what confuses visitors

**Microsoft Clarity (Free):**
- Similar to Hotjar
- Completely free
- Privacy-friendly
- Easy setup

**When to use:**
- If conversion rate is low (<3%)
- To understand why users don't order
- To optimize CTA placement

---

## 📱 Instagram Insights

### Native Instagram Analytics

**Available on Instagram Business Account:**
- Reach and impressions
- Profile visits
- Website clicks
- Top posts
- Follower demographics
- Best posting times

**Track weekly:**
- [ ] Profile visits
- [ ] Website clicks (clicks to sagensalt.com)
- [ ] Post engagement rate
- [ ] Story views
- [ ] New followers

**Link tracking:**
Use bit.ly or similar to create trackable Instagram bio link

---

## 🎪 QR Code Tracking

### In-Store QR Codes

**Create trackable QR codes for:**

1. **Review Request QR (on table tents)**
   - Links to: Google review page
   - URL: Add UTM parameter
   ```
   https://g.page/r/[PLACE_ID]/review?utm_source=qr&utm_medium=table&utm_campaign=reviews
   ```

2. **Menu QR (on tables)**
   - Links to: https://sagensalt.com/menu
   - URL with UTM:
   ```
   https://sagensalt.com/menu?utm_source=qr&utm_medium=table&utm_campaign=dine_in
   ```

3. **Order QR (takeout packaging)**
   - Links to: Order page or Instagram
   - URL with UTM:
   ```
   https://sagensalt.com/?utm_source=qr&utm_medium=packaging&utm_campaign=repeat_order
   ```

**QR Generator:** Use qr-code-generator.com (supports tracking)

---

## 📋 Daily Checklist

### Morning (9-10 AM)
- [ ] Check analytics dashboard (yesterday's numbers)
- [ ] Note order clicks and call clicks
- [ ] Check for any technical issues
- [ ] Review WhatsApp inquiries from overnight

### Evening (6-7 PM)
- [ ] Quick analytics check
- [ ] Respond to any pending WhatsApp messages
- [ ] Update daily tracker if maintaining manual log

---

## 📅 Weekly Review Template

**Every Monday:**

```
WEEK REVIEW: [Date]

HIGHLIGHTS
- Best performing page:
- Most clicked CTA:
- Traffic increase/decrease:

ORDERS
- Zomato clicks: [X]
- Swiggy clicks: [X]
- Call clicks: [X]
- Estimated conversion: [X orders]

TRAFFIC SOURCES
- Google: [X]%
- Direct: [X]%
- Instagram: [X]%

ACTION ITEMS
1. [What to improve this week]
2. [What to test/try]
3. [Content to post]
```

---

## 🚀 A/B Testing Ideas

### Test These Elements

**Homepage:**
- Test: "Order Now" vs "View Menu" as primary CTA
- Measure: Click-through rate

**Menu Page:**
- Test: Order buttons at top vs bottom
- Measure: Clicks per page view

**Contact Page:**
- Test: Call button vs WhatsApp button prominence
- Measure: Click rate on each

**Images:**
- Test: Different hero images on homepage
- Measure: Time on site, bounce rate

---

## 📊 ROI Calculation

### Track Marketing Spend vs Returns

```
Monthly Marketing Spend
├── Website hosting: ₹500 (Vercel)
├── Analytics: ₹750 (Plausible, optional)
├── Instagram posts: ₹0 (organic)
└── TOTAL: ₹1250/month

Revenue Attribution
├── Orders from website: [X orders]
├── Avg order value: ₹[Y]
├── Total revenue: ₹[X × Y]
└── ROI: [(Revenue - Cost) / Cost] × 100
```

**Goal:** 10x ROI (₹12,500 revenue from ₹1,250 spend)

---

## 🎯 Success Indicators

### Month 1
- ✅ 200+ unique visitors
- ✅ 20+ order clicks
- ✅ 10+ call clicks
- ✅ Analytics properly tracking

### Month 3
- ✅ 500+ unique visitors
- ✅ 50+ order clicks
- ✅ 25+ call clicks
- ✅ 5% conversion rate

### Month 6
- ✅ 1000+ unique visitors
- ✅ 100+ order clicks
- ✅ 50+ call clicks
- ✅ 10% conversion rate
- ✅ Positive ROI

---

## 🔐 Privacy & Compliance

### India-Specific Requirements

**Not Required (for current setup):**
- Cookie consent banner (no cookies used)
- GDPR compliance (targeting Indian users)
- Data processing agreement

**Good to Have:**
- Privacy policy page (basic)
- Terms of service
- Mention data collection in footer

**If you add Google Analytics:**
- Cookie consent required
- Privacy policy must mention GA
- Option to opt-out

---

## 🛠️ Tools Summary

### Free Tools
- Vercel Analytics (basic)
- Google Search Console
- Instagram Insights
- WhatsApp Business (basic)
- Microsoft Clarity (heatmaps)

### Paid Tools (Optional)
- Plausible Analytics (₹750/month)
- Call tracking (₹2000+/month)
- WhatsApp Business API (₹1000+/month)
- Hotjar (₹2500+/month)

**Recommendation:** Start with free tools, upgrade as you grow

---

## 📞 Support & Questions

**Need help with setup?**
- Vercel support: https://vercel.com/support
- Plausible docs: https://plausible.io/docs
- Analytics best practices: https://web.dev/analytics

**Analytics showing unexpected data?**
- Check if ad blockers are affecting tracking
- Verify UTM parameters are correct
- Ensure events are firing (check console in dev mode)
