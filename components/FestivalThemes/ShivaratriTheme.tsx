'use client';

export default function ShivaratriTheme() {
  return (
    <div className="festival-theme shivaratri-theme">
      {/* Greeting text */}
      <div className="festival-greeting">
        Maha Shivaratri
      </div>

      {/* Vertical smoke/mist */}
      <div className="smoke-mist">
        {[...Array(3)].map((_, i) => (
          <div 
            key={i} 
            className="smoke" 
            style={{ 
              left: `${30 + i * 20}%`,
              animationDelay: `${i * 1}s`
            }} 
          />
        ))}
      </div>

      {/* Crescent moon icon near logo */}
      <div className="crescent-moon" />
    </div>
  );
}
