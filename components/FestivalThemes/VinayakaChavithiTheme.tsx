'use client';

export default function VinayakaChavithiTheme() {
  return (
    <div className="festival-theme vinayaka-theme">
      {/* Greeting text */}
      <div className="festival-greeting">
        Ganesh Chavithi Greetings
      </div>

      {/* Abstract Ganesh outline watermark */}
      <div className="ganesh-watermark" />

      {/* Marigold petals */}
      <div className="marigold-petals">
        {[...Array(12)].map((_, i) => (
          <div 
            key={i} 
            className="marigold" 
            style={{ 
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`
            }} 
          />
        ))}
      </div>
    </div>
  );
}
