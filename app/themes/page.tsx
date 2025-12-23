'use client';

import { useState } from 'react';
import { FESTIVALS_2025_2026, FestivalType } from '@/lib/festivalConfig';
import { resetThemeSession } from '@/lib/useFestivalTheme';
import FestivalTheme from '@/components/FestivalTheme';

export default function ThemesTestPage() {
  const [selectedFestival, setSelectedFestival] = useState<FestivalType | null>(null);
  const [isPreviewActive, setIsPreviewActive] = useState(false);

  const handlePreview = (festivalId: FestivalType) => {
    // Reset any previous preview
    resetThemeSession();
    setSelectedFestival(festivalId);
    setIsPreviewActive(true);

    // Auto-reset after animation duration (10 seconds)
    setTimeout(() => {
      setIsPreviewActive(false);
    }, 10000);
  };

  const handleReset = () => {
    resetThemeSession();
    setSelectedFestival(null);
    setIsPreviewActive(false);
  };

  return (
    <div className="min-h-screen bg-neutral-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-neutral-900 mb-4">
            Festival Theme Preview Panel
          </h1>
          <div className="max-w-3xl mx-auto text-neutral-600 space-y-2">
            <p className="text-lg font-medium">This page is for internal testing only.</p>
            <p>
              Selecting a theme will temporarily apply its visual effects to simulate homepage behavior.
            </p>
            <p>
              Effects play once, respect performance limits, and automatically reset.
            </p>
            <p>
              These previews do not affect live users or production scheduling.
            </p>
            <p className="font-medium text-neutral-700">
              Use this page to verify cultural accuracy, visual balance, and animation restraint.
            </p>
          </div>
        </div>

        {/* Active Preview Indicator */}
        {isPreviewActive && selectedFestival && (
          <div className="mb-8 p-6 bg-green-50 border-2 border-green-500 rounded-lg text-center">
            <p className="text-green-800 font-semibold text-lg">
              🎭 Preview Active: {FESTIVALS_2025_2026.find(f => f.id === selectedFestival)?.name}
            </p>
            <p className="text-green-600 text-sm mt-2">
              Animation will auto-reset in 10 seconds
            </p>
          </div>
        )}

        {/* Festival Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FESTIVALS_2025_2026.map((festival) => (
            <div
              key={festival.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              {/* Festival Info */}
              <div className="mb-4">
                <h3 className="text-xl font-bold text-neutral-900 mb-2">
                  {festival.name}
                </h3>
                <div className="text-sm text-neutral-600 space-y-1">
                  <p>
                    <span className="font-medium">Category:</span>{' '}
                    <span className="capitalize">{festival.category}</span>
                  </p>
                  <p>
                    <span className="font-medium">Priority:</span> {festival.priority}
                  </p>
                  <p>
                    <span className="font-medium">Dates:</span>{' '}
                    {festival.startDate.toLocaleDateString()} -{' '}
                    {festival.endDate.toLocaleDateString()}
                  </p>
                  <p className="text-neutral-800 font-medium mt-2">
                    "{festival.text}"
                  </p>
                </div>
              </div>

              {/* Controls */}
              <div className="flex gap-2">
                <button
                  onClick={() => handlePreview(festival.id)}
                  disabled={isPreviewActive}
                  className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
                    isPreviewActive
                      ? 'bg-neutral-300 text-neutral-500 cursor-not-allowed'
                      : 'bg-teal-600 text-white hover:bg-teal-700'
                  }`}
                >
                  Preview Theme
                </button>
                <button
                  onClick={handleReset}
                  className="px-4 py-2 rounded-lg font-medium bg-neutral-200 text-neutral-700 hover:bg-neutral-300 transition-colors"
                >
                  Reset
                </button>
              </div>

              {/* Active Indicator */}
              {selectedFestival === festival.id && isPreviewActive && (
                <div className="mt-3 text-center">
                  <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                    ✓ Currently Previewing
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Global Reset Button */}
        <div className="mt-12 text-center">
          <button
            onClick={handleReset}
            className="px-8 py-3 bg-red-600 text-white rounded-lg font-bold hover:bg-red-700 transition-colors"
          >
            Reset All Themes
          </button>
        </div>

        {/* Instructions */}
        <div className="mt-12 p-6 bg-blue-50 border border-blue-200 rounded-lg">
          <h2 className="text-xl font-bold text-blue-900 mb-3">Testing Guidelines</h2>
          <ul className="space-y-2 text-blue-800">
            <li>• Only one theme can be previewed at a time</li>
            <li>• Themes automatically reset after 6 seconds</li>
            <li>• Check for cultural accuracy and respectfulness</li>
            <li>• Verify animations don't interfere with content readability</li>
            <li>• Test on mobile devices for responsive behavior</li>
            <li>• Ensure animations respect prefers-reduced-motion settings</li>
          </ul>
        </div>
      </div>

      {/* Render the active theme preview */}
      {isPreviewActive && selectedFestival && (
        <FestivalTheme overrideFestival={selectedFestival} />
      )}
    </div>
  );
}
