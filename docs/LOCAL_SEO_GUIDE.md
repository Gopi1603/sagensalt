# Local SEO Implementation Guide
## Sage N Salt Technical SEO Setup

## 🎯 Schema Markup Implementation

### ✅ Already Implemented

The following schema types are already added to the website:

1. **Restaurant Schema** (Homepage)
   - Business name, address, phone
   - Geo coordinates
   - Opening hours
   - Cuisine types
   - Menu link
   - Aggregate rating
   - Social media links

2. **Menu Schema** (Menu Page)
   - Menu sections (Biryani, Starters, Chinese, etc.)
   - Individual menu items
   - Dietary information (Veg/Non-veg)
   - Descriptions
   - *Note: No prices included as per requirement*

3. **Review Schema** (Reviews Page)
   - Aggregate rating
   - Individual reviews
   - Review author
   - Rating value
   - Review text
   - Publication date

### 📋 Schema Testing

**Test your schema markup:**
1. Visit: https://search.google.com/test/rich-results
2. Enter your page URL
3. Verify all schema types appear correctly
4. Fix any errors or warnings

**Alternative Validator:**
- https://validator.schema.org/

---

## 📄 Page-by-Page SEO Setup

### Homepage (/)
**Meta Title:** Modern Artisan Indian Cuisine | Sage N Salt [City]  
**Meta Description:** Fresh biryani, authentic Indian starters, and Chinese dishes. Order online via Zomato/Swiggy or dine-in. FSSAI certified. Call 6300591870.

**Focus Keywords:**
- Best Indian restaurant [City]
- Biryani [City]
- Indian food near me

### Menu Page (/menu)
**Meta Title:** Menu - Biryani, Starters & More | Sage N Salt  
**Meta Description:** Explore our menu: Chicken & Mutton Biryani, Veg/Non-Veg starters, Chinese dishes, beverages. Fresh preparation. Order online or call 6300591870.

**Focus Keywords:**
- Indian restaurant menu
- Biryani menu
- Chicken 65 [City]

### Gallery (/gallery)
**Meta Title:** Gallery - Food, Ambience & Kitchen | Sage N Salt  
**Meta Description:** See our fresh food, comfortable ambience, and clean kitchen. FSSAI certified. Visit us at [Address] or call 6300591870.

**Focus Keywords:**
- Restaurant interior [City]
- Indian restaurant photos
- Clean kitchen restaurant

### Reviews (/reviews)
**Meta Title:** Customer Reviews & Testimonials | Sage N Salt  
**Meta Description:** Read what our customers say about our food and service. Rated [X] stars on Google. Leave your review after dining with us.

**Focus Keywords:**
- Restaurant reviews [City]
- Best rated Indian restaurant
- Customer testimonials

### Catering (/catering)
**Meta Title:** Catering Services - Parties, Events & Bulk Orders | Sage N Salt  
**Meta Description:** Fresh catering for office events, parties, and gatherings. Bulk biryani orders available. Call 6300591870 for quote.

**Focus Keywords:**
- Indian catering [City]
- Bulk biryani order
- Party catering near me

### About (/about)
**Meta Title:** About Us - Fresh Preparation & Quality | Sage N Salt  
**Meta Description:** Sage N Salt serves modern artisan Indian cuisine with focus on fresh preparation, quality ingredients, and consistency. FSSAI: 13625003000281.

**Focus Keywords:**
- About Sage N Salt
- FSSAI certified restaurant
- Quality Indian restaurant

### Contact (/contact)
**Meta Title:** Contact Us - Location, Hours & Reservations | Sage N Salt  
**Meta Description:** Visit us at [Address]. Call 6300591870 for reservations or takeout. Street parking available. Open [Days & Hours].

**Focus Keywords:**
- Sage N Salt location
- Indian restaurant near [Landmark]
- Restaurant contact [City]

---

## 🗺️ Local SEO Citations

### Required Listings

Create/claim profiles on these platforms with **consistent NAP** (Name, Address, Phone):

#### High Priority (Do First)
1. **Google Business Profile** ✓ (Already covered in separate doc)
2. **Zomato** ✓ (Already listed)
3. **Swiggy** ✓ (Already listed)
4. **Facebook Business Page**
   - Create page
   - Add all business info
   - Link to website
   - Post regularly (3x/week)

5. **Justdial** (India-specific)
   - Claim/create listing
   - Add photos
   - Respond to reviews

6. **IndiaMART** (for catering inquiries)
7. **Sulekha**
8. **AskLaila**

#### Medium Priority
9. **Apple Maps**
10. **Bing Places**
11. **MapMyIndia**
12. **MagicPin** (cashback platform)
13. **Dineout** (table reservations)
14. **EazyDiner**

### Citation Consistency Checklist

**Every listing must have:**
- Business Name: **Sage N Salt** (exact spelling, no variations)
- Address: **[Exact format, including landmarks]**
- Phone: **6300591870** (no spaces, dashes, or country code variations)
- Website: **https://sagensalt.com**
- Category: **Indian Restaurant** (primary)
- Description: Same 2-3 sentence description everywhere
- Photos: Same logo and cover image
- Hours: Same format and times

---

## 🔍 On-Page SEO Optimizations

### Image Optimization

**All images should have:**
1. **Descriptive filenames:**
   - ❌ `IMG_1234.jpg`
   - ✅ `sage-n-salt-chicken-biryani.jpg`

2. **Alt text:**
   ```html
   <img src="chicken-biryani.jpg" 
        alt="Sage N Salt Chicken Biryani with raita and garnish" />
   ```

3. **Compressed file size:**
   - Use WebP format
   - Max 200KB per image
   - Next.js Image component handles this automatically

### URL Structure (Already Optimized)
- Clean, descriptive URLs
- No parameters or session IDs
- Logical hierarchy
- Matches page content

### Internal Linking
**Homepage should link to:**
- Menu page (multiple CTAs)
- Gallery page
- Reviews page
- Catering page
- About page
- Contact page

**All pages should link back to:**
- Homepage (logo in navbar)
- Contact page (footer)

### Content Optimization

**Keywords to naturally include on each page:**

**Homepage:**
- Indian restaurant [City]
- Best biryani near me
- Fresh preparation
- FSSAI certified restaurant

**Menu Page:**
- Chicken biryani
- Mutton biryani
- Veg starters
- Non-veg starters
- Chinese food

**Gallery:**
- Restaurant interior
- Food photos
- Clean kitchen
- Dining ambience

**Reviews:**
- Customer reviews
- Restaurant ratings
- Testimonials
- [City] restaurant reviews

---

## 📱 Mobile Optimization Checklist

- [x] Mobile-first design implemented
- [x] Fast loading (target: under 3 seconds)
- [x] Click-to-call buttons
- [x] WhatsApp integration
- [x] Readable text size
- [x] Easy navigation
- [x] Touch-friendly buttons

---

## 🌐 Technical SEO Checklist

### Site Speed
- [ ] Enable Vercel compression
- [ ] Lazy load images
- [ ] Minimize JavaScript
- [ ] Use Next.js Image optimization
- [ ] Monitor Core Web Vitals

**Test at:**
- https://pagespeed.web.dev/
- https://gtmetrix.com/

### Sitemap & Robots.txt

**Create sitemap.xml:**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://sagensalt.com/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://sagensalt.com/menu</loc>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://sagensalt.com/gallery</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://sagensalt.com/reviews</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://sagensalt.com/catering</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://sagensalt.com/about</loc>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>https://sagensalt.com/contact</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>
```

**Create robots.txt:**
```
User-agent: *
Allow: /
Sitemap: https://sagensalt.com/sitemap.xml

# Block admin or private pages if any
# Disallow: /admin/
```

### Google Search Console Setup

1. **Verify ownership:**
   - Add property: https://sagensalt.com
   - Verify via HTML file or DNS

2. **Submit sitemap:**
   - Go to Sitemaps section
   - Submit: https://sagensalt.com/sitemap.xml

3. **Monitor:**
   - Search performance
   - Coverage issues
   - Mobile usability
   - Core Web Vitals

---

## 📊 Analytics Setup

### Vercel Analytics (Recommended)
**Pros:**
- Lightweight
- Privacy-friendly
- No cookie consent needed
- Built into Vercel hosting

**Setup:**
```bash
npm install @vercel/analytics
```

Add to `app/layout.tsx`:
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

### Event Tracking (Already Implemented)

The following events are tracked:
- Order button clicks (Zomato/Swiggy)
- Phone call clicks
- WhatsApp button clicks
- Instagram icon clicks
- Page views

**View events in:**
- Vercel Analytics dashboard
- Console log (development mode)

---

## 🎯 Local SEO Content Strategy

### Blog/Content Ideas (Optional)

Create 1-2 blog posts per month on topics like:

1. **"The Story Behind Our Signature Biryani"**
   - Keywords: Hyderabadi biryani, authentic biryani recipe
   
2. **"5 Things to Look for in a Quality Indian Restaurant"**
   - Keywords: Best Indian restaurant, quality food

3. **"Catering Tips for Office Parties in [City]"**
   - Keywords: Office catering [City], party food

4. **"Veg vs Non-Veg: Understanding Indian Starters"**
   - Keywords: Indian appetizers, starters menu

---

## 📈 Monthly SEO Tasks

### Week 1
- [ ] Update Google Business photos (2-3 new)
- [ ] Post on Instagram (7 posts)
- [ ] Respond to all reviews
- [ ] Check Google Search Console for errors

### Week 2
- [ ] Create Google Business post
- [ ] Monitor website analytics
- [ ] Update any seasonal content
- [ ] Check citation consistency

### Week 3
- [ ] Engage with local food bloggers
- [ ] Post customer testimonials
- [ ] Review competitor listings
- [ ] Update FAQ if needed

### Week 4
- [ ] Monthly performance review
- [ ] Update menu page if items changed
- [ ] Plan next month's content
- [ ] Check backlink profile (basic)

---

## 🚫 SEO Practices to AVOID

- ❌ Keyword stuffing in content
- ❌ Buying fake reviews
- ❌ Spammy link building
- ❌ Hiding text on pages
- ❌ Duplicate content across pages
- ❌ Over-optimization of anchor text
- ❌ Cloaking or deceptive redirects
- ❌ Inconsistent NAP across listings

---

## ✅ India-Specific SEO Tips

1. **Use Indian English spelling:**
   - "Flavour" instead of "flavor"
   - "Centre" instead of "center"

2. **Include local landmarks in content:**
   - "Near [Famous Landmark]"
   - "Close to [Shopping Mall]"

3. **Target hyperlocal keywords:**
   - "[Neighborhood] biryani"
   - "Restaurant near [Area Name]"

4. **Mobile-first approach:**
   - 80%+ Indian users browse on mobile
   - Ensure fast loading on 4G networks

5. **WhatsApp integration:**
   - Primary communication channel in India
   - Make WhatsApp CTA prominent

6. **Payment options mention:**
   - Cash, UPI, cards (if applicable)
   - Helps with local trust

---

## 📊 Success Metrics (Track Monthly)

### Google Analytics / Vercel Analytics
- Unique visitors
- Page views per session
- Bounce rate (aim for <60%)
- Average session duration
- Top traffic sources

### Google Business Profile
- Profile views
- Search queries
- Direction requests
- Phone calls
- Website clicks

### Conversion Metrics
- Orders placed (via tracking)
- Phone calls received
- Reservation requests
- WhatsApp inquiries

**Goal:** 20-30% increase in local discovery within 3 months
