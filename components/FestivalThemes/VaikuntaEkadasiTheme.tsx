'use client';

export default function VaikuntaEkadasiTheme() {
  return (
    <div className="festival-theme vaikunta-ekadasi-theme">
      {/* Greeting text */}
      <div className="festival-greeting">
        Vaikunta Ekadasi
      </div>

      {/* Temple arch outline */}
      <div className="temple-arch" />

      {/* White light rays from top */}
      <div className="light-rays">
        {[...Array(7)].map((_, i) => (
          <div 
            key={i} 
            className="ray" 
            style={{ 
              left: `${10 + i * 13}%`,
              animationDelay: `${i * 0.2}s`
            }} 
          />
        ))}
      </div>
    </div>
  );
}
