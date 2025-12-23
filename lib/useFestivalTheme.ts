'use client';

import { useState, useEffect } from 'react';
import { getActiveFestival, Festival, FestivalType } from './festivalConfig';

export interface ThemeState {
  activeFestival: Festival | null;
  hasPlayed: boolean;
  isEnabled: boolean;
}

/**
 * Hook to manage festival theme state
 * Handles session-based playback control and performance checks
 */
export function useFestivalTheme(overrideFestival?: FestivalType) {
  const [themeState, setThemeState] = useState<ThemeState>({
    activeFestival: null,
    hasPlayed: false,
    isEnabled: true,
  });

  useEffect(() => {
    // Check if we should disable themes based on performance/accessibility
    const shouldDisable = 
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      isLowEndDevice();

    if (shouldDisable) {
      setThemeState((prev) => ({ ...prev, isEnabled: false }));
      return;
    }

    // Get active festival
    const festival = overrideFestival 
      ? getFestivalById(overrideFestival)
      : getActiveFestival();

    setThemeState({
      activeFestival: festival,
      hasPlayed: false,
      isEnabled: true,
    });

    // Hide theme after animation completes (10 seconds)
    if (festival) {
      const timer = setTimeout(() => {
        setThemeState((prev) => ({ ...prev, hasPlayed: true }));
      }, 10000);

      return () => clearTimeout(timer);
    }
  }, [overrideFestival]);

  return themeState;
}

/**
 * Detect low-end devices to disable animations
 * Based on device memory and hardware concurrency
 */
function isLowEndDevice(): boolean {
  // Check device memory (if available)
  const nav = navigator as any;
  if (nav.deviceMemory && nav.deviceMemory < 4) {
    return true;
  }

  // Check hardware concurrency
  if (nav.hardwareConcurrency && nav.hardwareConcurrency < 4) {
    return true;
  }

  // Check connection type (if available)
  const connection = nav.connection || nav.mozConnection || nav.webkitConnection;
  if (connection && (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g')) {
    return true;
  }

  return false;
}

/**
 * Get a specific festival by ID
 */
function getFestivalById(id: FestivalType): Festival | null {
  const { FESTIVALS_2025_2026 } = require('./festivalConfig');
  return FESTIVALS_2025_2026.find((f: Festival) => f.id === id) || null;
}

/**
 * Reset the session flag to allow theme to play again
 * Used in the test page
 */
export function resetThemeSession() {
  sessionStorage.removeItem('festival_theme_played');
}
