'use client';

export default function DeepavaliTheme() {
  return (
    <div className="festival-theme deepavali-theme">
      {/* Greeting text */}
      <div className="festival-greeting">
        Happy Deepavali ✨
      </div>

      {/* Diyas lighting near footer */}
      <div className="diyas-container">
        {[...Array(5)].map((_, i) => (
          <div 
            key={i} 
            className="diya" 
            style={{ 
              left: `${20 + i * 15}%`,
              animationDelay: `${i * 0.3}s`
            }} 
          />
        ))}
      </div>

      {/* Soft upward sparkles */}
      <div className="sparkles">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i} 
            className="sparkle" 
            style={{ 
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`
            }} 
          />
        ))}
      </div>
    </div>
  );
}
