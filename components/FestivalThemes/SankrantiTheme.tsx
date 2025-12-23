'use client';

export default function SankrantiTheme() {
  return (
    <div className="festival-theme sankranti-theme">
      {/* Greeting text */}
      <div className="festival-greeting">
        Happy Sankranti 🌾
      </div>

      {/* Sugarcane leaf drift */}
      <div className="sugarcane-leaves">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="leaf" style={{ animationDelay: `${i * 0.8}s` }} />
        ))}
      </div>

      {/* Kite silhouettes */}
      <div className="kites">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="kite" style={{ animationDelay: `${i * 1.2}s` }} />
        ))}
      </div>

      {/* Warm wash overlay */}
      <div className="warm-wash" />

      {/* Rangoli footer texture */}
      <div className="rangoli-footer" />
    </div>
  );
}
