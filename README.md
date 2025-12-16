# Sage N Salt Restaurant Website

Premium Next.js restaurant website with mobile-first design, conversion-focused content, and modern UI.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Playfair Display (headings) + Inter (body)
- **Hosting**: Vercel

## Color System

- Primary: Dark forest green `#0d3b2f`
- Accent: Gold `#d4af37`
- Text: Warm off-white `#f5f3ee`

## Pages Structure

- **/** - Homepage with Hero, Signature Dishes, Menu Highlights, Gallery Preview, Reviews, Instagram Feed, Location
- **/menu** - Full menu with veg/non-veg indicators, spice levels, badges (Chef Special, Most Ordered)
- **/gallery** - Organized gallery (Food, Ambience, Kitchen/Hygiene)
- **/reviews** - Customer reviews hub with Google/Zomato embeds, review request CTAs, QR flow
- **/catering** - Catering services with quantity-based framing
- **/about** - Origin story emphasizing fresh prep, quality, consistency
- **/contact** - Google Maps embed, contact info, operating hours, parking

## Key Features

- Fixed navbar with centered logo, right hamburger menu
- Left vertical social icon bar (Zomato, Swiggy, Instagram)
- WhatsApp floating button
- Mobile-first responsive design
- Conversion-focused CTAs throughout
- FSSAI certification display
- Trust elements in footer
- **Local SEO optimized** with Restaurant schema markup
- **Analytics tracking** for orders, calls, WhatsApp clicks
- **Instagram feed integration**
- **Review management system**

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Placeholders to Replace

Before going live, replace these placeholders:

### Contact Information
- `[ENTER_FULL_ADDRESS_LINE_1]` - Complete street address
- `[ENTER_FULL_ADDRESS_LINE_2]` - City, state, PIN
- `[ENTER_EMAIL]` - Restaurant email
- `[ENTER_WEEKDAY_HOURS]` - e.g., "Mon-Fri: 11:00 AM - 10:00 PM"
- `[ENTER_WEEKEND_HOURS]` - e.g., "Sat-Sun: 11:00 AM - 11:00 PM"
- `[ENTER_WEEKLY_OFF_DAY]` - e.g., "Closed on Tuesdays"

### Menu Items
- Replace dish names in `/app/menu/page.tsx` with actual menu
- Update `[DISH_NAME_1-4]` in SignatureDishes component

### Images
- Replace all `[IMAGE]`, `[FOOD X]`, `[AMBIENCE X]`, `[KITCHEN X]` placeholders with actual images
- Optimize images using Next.js Image component for better performance

## Existing Links (Already Configured)

- **Phone**: 6300591870
- **WhatsApp**: 6300591870
- **Zomato**: https://zoma.to/r/22394794
- **Swiggy**: https://www.swiggy.com/menu/1286711?source=sharing
- **Instagram**: https://www.instagram.com/sage.nsalt?igsh=bXYwNGVrOWl4YXFt
- **Google Maps**: Embedded
- **FSSAI**: 13625003000281

## SEO & Analytics

### Implemented Features
- ✅ Restaurant schema markup (JSON-LD)
- ✅ Menu schema without prices
- ✅ Review schema for social proof
- ✅ Meta tags optimized for local search
- ✅ Event tracking (lightweight, no cookies)
- ✅ Instagram feed integration
- ✅ Google Maps embed

### Analytics Tracking
The website tracks:
- Order button clicks (Zomato/Swiggy)
- Phone call clicks
- WhatsApp button clicks
- Instagram link clicks
- Page views per section

### Local SEO Ready
- Structured data for Google Business Profile
- Geo-coordinates embedded
- NAP (Name, Address, Phone) consistency
- India-specific keywords and content

## 📚 Documentation

### 🚀 Launch & Growth Guides (in `/docs`)

- **[MASTER_CHECKLIST.md](docs/MASTER_CHECKLIST.md)** - Complete launch & growth roadmap (100+ items, 4-week plan, monthly tasks, 3-month goals)
- **[GOOGLE_BUSINESS_PROFILE.md](docs/GOOGLE_BUSINESS_PROFILE.md)** - GBP setup, photos, reviews, posts, Q&A strategy
- **[INSTAGRAM_STRATEGY.md](docs/INSTAGRAM_STRATEGY.md)** - Content calendar, posting schedule, highlights, Reel ideas
- **[LOCAL_SEO_GUIDE.md](docs/LOCAL_SEO_GUIDE.md)** - Technical SEO, schema, citations, India-specific tips
- **[ANALYTICS_TRACKING.md](docs/ANALYTICS_TRACKING.md)** - Tracking setup, metrics, dashboards, ROI calculation

### 🎨 Design Documentation

- **[DESIGN_COMPLIANCE.md](DESIGN_COMPLIANCE.md)** - Complete design system reference showing 100% compliance with premium UI/UX specifications (colors, typography, layouts, animations, accessibility)

## Deployment

```bash
npm run build
```

Deploy to Vercel:
```bash
vercel
```

## Constraints

- Mobile-first
- High performance on mid-range Android
- No heavy libraries
- No CMS
- No prices in menu
- Clean file-based routing
- AI-friendly, predictable structure
