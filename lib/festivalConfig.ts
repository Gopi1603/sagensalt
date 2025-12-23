export type FestivalType = 
  | 'sankranti'
  | 'ugadi'
  | 'dasara'
  | 'deepavali'
  | 'vinayaka-chavithi'
  | 'shivaratri'
  | 'rama-navami'
  | 'vaikunta-ekadasi'
  | 'bonalu'
  | 'bathukamma'
  | 'new-year'
  | 'christmas'
  | 'eid-ul-fitr'
  | 'eid-ul-adha'
  | 'muharram'
  | 'independence-day'
  | 'republic-day'
  | 'womens-day';

export interface Festival {
  id: FestivalType;
  name: string;
  startDate: Date;
  mainDate: Date;
  endDate: Date;
  priority: number; // Lower number = higher priority
  text: string;
  category: 'major' | 'regional' | 'religious' | 'national' | 'international';
}

/**
 * Festival configurations for 2025-2026
 * Owner must update these dates annually
 * 
 * Priority levels:
 * 1 = Major festivals (Sankranti, Dasara, Deepavali)
 * 2 = Regional festivals (Bathukamma, Bonalu)
 * 3 = Religious festivals
 * 4 = National holidays
 * 5 = International holidays
 */
export const FESTIVALS_2025_2026: Festival[] = [
  // MAJOR FESTIVALS (Priority 1)
  {
    id: 'sankranti',
    name: 'Sankranti',
    startDate: new Date('2026-01-07'), // 7 days before
    mainDate: new Date('2026-01-14'),
    endDate: new Date('2026-01-16'), // 10 days total
    priority: 1,
    text: 'Happy Sankranti 🌾',
    category: 'major',
  },
  {
    id: 'dasara',
    name: 'Dasara (Navratri)',
    startDate: new Date('2025-09-22'), // Full Navratri
    mainDate: new Date('2025-10-01'), // Vijayadashami
    endDate: new Date('2025-10-02'),
    priority: 1,
    text: 'Dasara Special Menu',
    category: 'major',
  },
  {
    id: 'deepavali',
    name: 'Deepavali',
    startDate: new Date('2025-10-15'), // 5 days before
    mainDate: new Date('2025-10-20'),
    endDate: new Date('2025-10-22'), // 2 days after
    priority: 1,
    text: 'Happy Deepavali ✨',
    category: 'major',
  },

  // REGIONAL FESTIVALS (Priority 2)
  {
    id: 'bathukamma',
    name: 'Bathukamma',
    startDate: new Date('2025-09-22'), // Full 9 days
    mainDate: new Date('2025-09-27'),
    endDate: new Date('2025-09-30'),
    priority: 2,
    text: 'Bathukamma Subhakankshalu',
    category: 'regional',
  },
  {
    id: 'bonalu',
    name: 'Bonalu',
    startDate: new Date('2026-07-12'),
    mainDate: new Date('2026-07-19'),
    endDate: new Date('2026-07-26'),
    priority: 2,
    text: 'Bonalu Jatara',
    category: 'regional',
  },

  // RELIGIOUS FESTIVALS (Priority 3)
  {
    id: 'ugadi',
    name: 'Ugadi',
    startDate: new Date('2026-03-21'), // 3 days
    mainDate: new Date('2026-03-22'),
    endDate: new Date('2026-03-23'),
    priority: 3,
    text: 'Ugadi Subhakankshalu',
    category: 'religious',
  },
  {
    id: 'vinayaka-chavithi',
    name: 'Vinayaka Chavithi',
    startDate: new Date('2025-08-27'),
    mainDate: new Date('2025-08-28'),
    endDate: new Date('2025-08-29'),
    priority: 3,
    text: 'Ganesh Chavithi Greetings',
    category: 'religious',
  },
  {
    id: 'shivaratri',
    name: 'Maha Shivaratri',
    startDate: new Date('2026-02-16'), // 3 days
    mainDate: new Date('2026-02-17'),
    endDate: new Date('2026-02-18'),
    priority: 3,
    text: 'Maha Shivaratri',
    category: 'religious',
  },
  {
    id: 'rama-navami',
    name: 'Sri Rama Navami',
    startDate: new Date('2026-04-01'), // 3 days
    mainDate: new Date('2026-04-02'),
    endDate: new Date('2026-04-03'),
    priority: 3,
    text: 'Sri Rama Navami',
    category: 'religious',
  },
  {
    id: 'vaikunta-ekadasi',
    name: 'Vaikunta Ekadasi',
    startDate: new Date('2025-12-27'), // 3 days
    mainDate: new Date('2025-12-28'),
    endDate: new Date('2025-12-29'),
    priority: 3,
    text: 'Vaikunta Ekadasi',
    category: 'religious',
  },
  {
    id: 'eid-ul-fitr',
    name: 'Eid-ul-Fitr',
    startDate: new Date('2025-03-27'), // 5-7 days
    mainDate: new Date('2025-03-31'),
    endDate: new Date('2025-04-02'),
    priority: 3,
    text: 'Eid Mubarak',
    category: 'religious',
  },
  {
    id: 'eid-ul-adha',
    name: 'Eid-ul-Adha',
    startDate: new Date('2025-06-03'), // 5-7 days
    mainDate: new Date('2025-06-07'),
    endDate: new Date('2025-06-09'),
    priority: 3,
    text: 'Eid Mubarak',
    category: 'religious',
  },
  {
    id: 'muharram',
    name: 'Muharram',
    startDate: new Date('2025-07-02'), // 3-5 days (static only)
    mainDate: new Date('2025-07-04'),
    endDate: new Date('2025-07-06'),
    priority: 3,
    text: 'Muharram',
    category: 'religious',
  },

  // NATIONAL HOLIDAYS (Priority 4)
  {
    id: 'independence-day',
    name: 'Independence Day',
    startDate: new Date('2025-08-14'), // 3 days
    mainDate: new Date('2025-08-15'),
    endDate: new Date('2025-08-16'),
    priority: 4,
    text: 'Happy Independence Day 🇮🇳',
    category: 'national',
  },
  {
    id: 'republic-day',
    name: 'Republic Day',
    startDate: new Date('2026-01-25'), // 3 days
    mainDate: new Date('2026-01-26'),
    endDate: new Date('2026-01-27'),
    priority: 4,
    text: 'Republic Day',
    category: 'national',
  },

  // INTERNATIONAL HOLIDAYS (Priority 5)
  {
    id: 'new-year',
    name: 'New Year',
    startDate: new Date('2026-01-01'), // Jan 1 only
    mainDate: new Date('2026-01-01'),
    endDate: new Date('2026-01-01'),
    priority: 5,
    text: 'Happy New Year 🎉',
    category: 'international',
  },
  {
    id: 'christmas',
    name: 'Christmas',
    startDate: new Date('2025-12-20'), // Dec 20 - Dec 31
    mainDate: new Date('2025-12-25'),
    endDate: new Date('2025-12-31'),
    priority: 5,
    text: 'Merry Christmas 🎄',
    category: 'international',
  },
  {
    id: 'womens-day',
    name: "Women's Day",
    startDate: new Date('2026-03-08'), // 1 day only
    mainDate: new Date('2026-03-08'),
    endDate: new Date('2026-03-08'),
    priority: 5,
    text: "Happy Women's Day",
    category: 'international',
  },
];

/**
 * Get the active festival based on current date
 * Returns the highest priority festival if multiple are active
 */
export function getActiveFestival(currentDate: Date = new Date()): Festival | null {
  const activeFestivals = FESTIVALS_2025_2026.filter((festival) => {
    return currentDate >= festival.startDate && currentDate <= festival.endDate;
  });

  if (activeFestivals.length === 0) {
    return null;
  }

  // Sort by priority (lower number = higher priority) and return the first one
  activeFestivals.sort((a, b) => a.priority - b.priority);
  return activeFestivals[0];
}

/**
 * Check if a specific festival is active
 */
export function isFestivalActive(festivalId: FestivalType, currentDate: Date = new Date()): boolean {
  const festival = FESTIVALS_2025_2026.find((f) => f.id === festivalId);
  if (!festival) return false;
  
  return currentDate >= festival.startDate && currentDate <= festival.endDate;
}
