'use client';

export default function ChristmasTheme() {
  return (
    <div className="festival-theme christmas-theme">
      {/* Greeting text */}
      <div className="festival-greeting">
        Merry Christmas 🎄
      </div>

      {/* Snowflake fall (low density) */}
      <div className="snowflakes">
        {[...Array(15)].map((_, i) => (
          <div 
            key={i} 
            className="snowflake" 
            style={{ 
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 3}s`
            }} 
          >
            ❄
          </div>
        ))}
      </div>

      {/* Optional Santa hat on logo - positioned via CSS */}
      <div className="santa-hat" />
    </div>
  );
}
