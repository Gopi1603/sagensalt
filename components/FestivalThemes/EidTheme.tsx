'use client';

export default function EidTheme() {
  return (
    <div className="festival-theme eid-theme">
      {/* Greeting text */}
      <div className="festival-greeting">
        Eid Mubarak
      </div>

      {/* Crescent + star glow */}
      <div className="crescent-star" />

      {/* Hanging lantern sway */}
      <div className="lanterns">
        {[...Array(4)].map((_, i) => (
          <div 
            key={i} 
            className="lantern" 
            style={{ 
              left: `${20 + i * 20}%`,
              animationDelay: `${i * 0.3}s`
            }} 
          />
        ))}
      </div>
    </div>
  );
}
