# Festival Theming System Documentation

## Overview

This document describes the festival-based visual micro-theming system implemented for the Sage N Salt restaurant website. The system provides culturally respectful, lightweight, and date-driven animations that enhance the homepage experience during South Indian festivals and special occasions.

## System Architecture

### Core Components

1. **Festival Configuration** (`lib/festivalConfig.ts`)
   - Contains all festival definitions with hardcoded dates
   - Manages priority logic when multiple festivals overlap
   - Provides utility functions to detect active festivals

2. **Theme Detection Hook** (`lib/useFestivalTheme.ts`)
   - Custom React hook that manages theme state
   - Handles session-based playback control
   - Implements performance and accessibility checks

3. **Festival Theme Components** (`components/FestivalThemes/`)
   - Individual components for each festival theme
   - Dynamically imported for code splitting
   - Contains visual elements specific to each celebration

4. **Main Theme Wrapper** (`components/FestivalTheme.tsx`)
   - Renders the appropriate theme based on current date
   - Handles component routing and lazy loading

5. **Test Page** (`app/themes/page.tsx`)
   - Internal testing interface at `/themes`
   - Allows previewing all festival themes
   - Not indexed by search engines

## Features

### Core Principles

✅ **Date-Driven**: Themes automatically activate based on hardcoded date ranges
✅ **Priority-Based**: Handles overlapping festivals with clear priority order
✅ **Always Visible**: Animations play on every page load/refresh (10 seconds)
✅ **Performance-Aware**: Automatically disables on low-end devices
✅ **Accessible**: Respects `prefers-reduced-motion` setting
✅ **Mobile-First**: Optimized for mobile devices with reduced particle counts
✅ **Homepage Only**: Themes only appear on the main page

### Automatic Disabling

Themes automatically disable when:
- Device memory < 4GB
- Hardware concurrency < 4 cores
- Connection type is 2G or slow-2G
- User has `prefers-reduced-motion: reduce` enabled

## Festivals Included

### Major Festivals (Priority 1)
- **Sankranti** - Sugarcane leaves, kites, warm wash, rangoli footer
- **Dasara** - Golden diya glow, temple bell swing
- **Deepavali** - Diyas lighting, upward sparkles

### Regional Festivals (Priority 2)
- **Bathukamma** - Circular floral stack rotation
- **Bonalu** - Kalash glow, accent pulse

### Religious Festivals (Priority 3)
- **Ugadi** - Mango leaf toran, green petal fall
- **Vinayaka Chavithi** - Ganesh watermark, marigold petals
- **Maha Shivaratri** - Vertical smoke/mist, crescent moon
- **Sri Rama Navami** - Lotus bloom, gold underline
- **Vaikunta Ekadasi** - Temple arch, white light rays
- **Eid-ul-Fitr / Eid-ul-Adha** - Crescent star glow, lanterns
- **Muharram** - Static banner (no animation)

### National Holidays (Priority 4)
- **Independence Day** - Tricolor ribbon, Ashoka Chakra
- **Republic Day** - Tricolor underline

### International Holidays (Priority 5)
- **New Year** - Confetti burst, year text
- **Christmas** - Snowflakes, optional Santa hat
- **Women's Day** - Purple accent glow

## Configuration

### Updating Festival Dates

To update festival dates for a new year, edit `lib/festivalConfig.ts`:

```typescript
{
  id: 'christmas',
  name: 'Christmas',
  startDate: new Date('2025-12-20'), // Dec 20
  mainDate: new Date('2025-12-25'),  // Dec 25
  endDate: new Date('2025-12-31'),   // Dec 31
  priority: 5,
  text: 'Merry Christmas 🎄',
  category: 'international',
}
```

### Display Windows

Standard durations to follow:
- Sankranti: 7-10 days
- Dasara: Full Navratri + Vijayadashami
- Deepavali: 5 days before + 2 days after
- Bathukamma: Full 9 days
- Bonalu: Full festival duration
- Ugadi: 3 days
- Shivaratri / Rama Navami / Ekadasi: 3 days
- Eid (both): 5-7 days
- Muharram: 3-5 days (static only)
- Christmas: Dec 20 – Dec 31
- New Year: Jan 1 only
- Independence / Republic Day: 3 days
- Women's Day: 1 day

### Priority Order

When multiple festivals overlap, the system follows this priority:

1. Major festivals (Sankranti, Dasara, Deepavali)
2. Regional festivals (Bathukamma, Bonalu)
3. Religious festivals
4. National holidays
5. International holidays

## Testing

### Test Page Access

Navigate to `/themes` to access the internal testing page. This page:
- Is NOT linked anywhere on the site
- Requires manual URL entry
- Has `noindex, nofollow` meta tags
- Allows previewing each festival theme individually

### Testing Guidelines

1. Only one theme can be previewed at a time
2. Themes automatically reset after 6 seconds
3. Check for cultural accuracy and respectfulness
4. Verify animations don't interfere with content readability
5. Test on mobile devices for responsive behavior
6. Ensure animations respect `prefers-reduced-motion` settings

## Performance Optimization

### Code Splitting

All festival theme components are dynamically imported:

```typescript
const ChristmasTheme = dynamic(() => import('./FestivalThemes/ChristmasTheme'));
```

This ensures:
- Only active themes are loaded
- Minimal impact on initial page load
- Reduced bundle size

### Mobile Optimization

On devices with screen width < 768px:
- Reduced particle counts (CSS `:nth-child()` hiding)
- Smaller greeting text
- Simplified animations
- Fewer visual elements

### Page Load Control

- Themes play on every page load or refresh
- Animation duration: 10 seconds
- Automatic cleanup after completion
- Can be tested via /themes page

## File Structure

```
app/
  page.tsx                    # Homepage (includes FestivalTheme)
  themes/
    page.tsx                  # Test page for previewing themes
  globals.css                 # Festival theme CSS animations

components/
  FestivalTheme.tsx           # Main theme wrapper
  FestivalThemes/
    SankrantiTheme.tsx
    UgadiTheme.tsx
    DasaraTheme.tsx
    DeepavaliTheme.tsx
    VinayakaChavithiTheme.tsx
    ShivaratriTheme.tsx
    RamaNavami Theme.tsx
    VaikuntaEkadasiTheme.tsx
    BonuluTheme.tsx
    BathukammaTheme.tsx
    NewYearTheme.tsx
    ChristmasTheme.tsx
    EidTheme.tsx
    MuharramTheme.tsx
    IndependenceDayTheme.tsx
    RepublicDayTheme.tsx
    WomensDayTheme.tsx

lib/
  festivalConfig.ts           # Festival dates and configuration
  useFestivalTheme.ts         # Theme detection hook
```

## CSS Classes

All festival themes use these base classes:
- `.festival-theme` - Fixed overlay container
- `.festival-greeting` - Greeting text banner
- Theme-specific classes for each festival

## Browser Support

- Modern browsers with ES6+ support
- CSS animations and transforms
- `sessionStorage` API
- Media query support for `prefers-reduced-motion`

## Maintenance

### Annual Updates Required

1. Update festival dates in `lib/festivalConfig.ts` (typically done in January)
2. Test each theme using the `/themes` page
3. Verify dates align with lunar/solar calendars
4. Ensure cultural accuracy of new year dates

### Adding New Festivals

1. Add festival configuration to `FESTIVALS_2025_2026` array
2. Create new theme component in `components/FestivalThemes/`
3. Add dynamic import in `FestivalTheme.tsx`
4. Add case in `ThemeRenderer` switch statement
5. Add CSS animations in `app/globals.css`
6. Test on `/themes` page

## Current Active Theme

As of December 23, 2025, the **Christmas theme** is active (Dec 20 - Dec 31).

## Notes

- Themes never interfere with food discovery or ordering functionality
- No sound effects are used in any theme
- No full-screen takeovers
- All animations complete within 3-6 seconds
- System follows Indian festival calendars (lunar/solar)

## Support

For questions or issues with the festival theming system, refer to:
- `theme.md` - Original requirements document
- Test page at `/themes` - Visual preview tool
- This README - Implementation documentation
