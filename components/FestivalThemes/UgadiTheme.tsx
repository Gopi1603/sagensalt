'use client';

export default function UgadiTheme() {
  return (
    <div className="festival-theme ugadi-theme">
      {/* Greeting text */}
      <div className="festival-greeting">
        Ugadi Subhakankshalu
      </div>

      {/* Mango leaf toran at navbar */}
      <div className="mango-toran" />

      {/* Soft green petal fall */}
      <div className="petal-fall green">
        {[...Array(15)].map((_, i) => (
          <div 
            key={i} 
            className="petal" 
            style={{ 
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${4 + Math.random() * 2}s`
            }} 
          />
        ))}
      </div>
    </div>
  );
}
