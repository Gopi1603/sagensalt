'use client';

export default function NewYearTheme() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="festival-theme new-year-theme">
      {/* Greeting text */}
      <div className="festival-greeting">
        Happy New Year 🎉
      </div>

      {/* Year text scales in */}
      <div className="year-text">{currentYear}</div>

      {/* Single confetti burst */}
      <div className="confetti-burst">
        {[...Array(50)].map((_, i) => (
          <div 
            key={i} 
            className="confetti" 
            style={{ 
              left: `${50}%`,
              '--angle': `${(360 / 50) * i}deg`,
              '--color': ['#FF6B6B', '#4ECDC4', '#FFD93D', '#6BCF7F', '#C77DFF'][i % 5],
              animationDelay: `${Math.random() * 0.5}s`
            } as React.CSSProperties} 
          />
        ))}
      </div>
    </div>
  );
}
