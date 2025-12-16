# Sage N Salt - Content Completion Checklist

## ✅ Completed

- [x] Homepage with all sections
- [x] Menu page with categories, spice indicators, veg/non-veg badges
- [x] Gallery page (Food, Ambience, Kitchen sections)
- [x] Catering page with quantity-based framing
- [x] About page with origin story
- [x] Contact page with Google Maps embed
- [x] All navigation links working
- [x] WhatsApp floating button
- [x] Vertical social icon bar
- [x] Footer with trust elements
- [x] FSSAI certification display
- [x] Mobile-first responsive design

## 📝 Content to Replace

### Footer & Contact Page
```
[ENTER_FULL_ADDRESS_LINE_1] - Your complete street address
[ENTER_FULL_ADDRESS_LINE_2] - City, State, PIN code
[ENTER_EMAIL] - Restaurant email address
[ENTER_WEEKDAY_HOURS] - e.g., "Mon-Fri: 11:00 AM - 10:00 PM"
[ENTER_WEEKEND_HOURS] - e.g., "Sat-Sun: 11:00 AM - 11:00 PM"
[ENTER_WEEKLY_OFF_DAY] - e.g., "Closed on Tuesdays"
```

### Homepage - SignatureDishes.tsx
```
[DISH_NAME_1] - Your signature dish name
[DISH_NAME_2] - Second signature dish
[DISH_NAME_3] - Third signature dish
[DISH_NAME_4] - Fourth signature dish
[Brief description of signature dish] - Short description for each
```

### Reviews Component
```
[REVIEWER_NAME_1] - Customer name
[REVIEWER_NAME_2] - Customer name
[REVIEWER_NAME_3] - Customer name
[Customer review text placeholder] - Actual review content
```

## 🖼️ Images to Add

### Homepage
- Hero background or logo image (if desired)
- 4 signature dish images in SignatureDishes component
- 6 gallery preview images

### Gallery Page
- 8 food images (`[FOOD 1-8]`)
- 6 ambience images (`[AMBIENCE 1-6]`)
- 4 kitchen/hygiene images (`[KITCHEN 1-4]`)

### Menu Page
- Optional: Add dish images to menu items

## 🚀 Quick Start

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Open http://localhost:3000

## 📱 Test Checklist

- [ ] Test all navigation links (Home, Menu, Gallery, Catering, About, Contact)
- [ ] Test WhatsApp button click
- [ ] Test phone number click-to-call
- [ ] Test Zomato/Swiggy links
- [ ] Test Instagram link
- [ ] Test Google Maps embed loads correctly
- [ ] Test hamburger menu opens/closes
- [ ] Test on mobile viewport (320px, 375px, 768px)
- [ ] Verify all CTAs are visible and clickable
- [ ] Check FSSAI number displays correctly

## 🎨 Design Notes

- **Color System**: Dark green (#0d3b2f) + Gold (#d4af37) + Off-white (#f5f3ee)
- **Fonts**: Playfair Display (headings) + Inter (body)
- **Navigation**: Fixed navbar, centered logo, right hamburger
- **Social Bar**: Left vertical icons (desktop only)
- **CTAs**: Every page has clear call-to-action

## 📊 Conversion Points

1. **Homepage**: Order Now buttons → Zomato/Swiggy
2. **Menu**: Order CTAs at bottom → Zomato/Swiggy/Phone
3. **Gallery**: Visit Us CTA → Call/Directions
4. **Catering**: Call/WhatsApp CTAs
5. **About**: Call/Visit CTAs
6. **Contact**: Multiple CTAs (Call, WhatsApp, Order Online)
7. **Floating**: WhatsApp button on all pages

## 🔧 Performance

- Mobile-first design
- Optimized for mid-range Android devices
- Minimal animations (opacity + transform only)
- No heavy libraries
- Lazy loading for images (when added)

## 📦 Next Steps

1. Replace all content placeholders
2. Add all images
3. Test on real devices
4. Deploy to Vercel: `vercel`
5. Add analytics (Vercel Analytics or Plausible)
6. Submit to Google Search Console
7. Set up Google My Business
