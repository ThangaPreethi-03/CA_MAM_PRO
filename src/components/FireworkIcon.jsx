export default function FireworkIcon({ delay = 0 }) {
  return (
    <svg
      width="60"
      height="60"
      viewBox="0 0 100 100"
      style={{
        animation: `firework 2.5s ease-out infinite`,
        animationDelay: `${delay}s`,
      }}
    >
      {[...Array(12)].map((_, i) => (
        <line
          key={i}
          x1="50"
          y1="50"
          x2="50"
          y2="10"
          stroke={["#FFD93D", "#FF4FD8", "#00F5FF"][i % 3]}
          strokeWidth="3"
          transform={`rotate(${i * 30} 50 50)`}
        />
      ))}
    </svg>
  );
}
