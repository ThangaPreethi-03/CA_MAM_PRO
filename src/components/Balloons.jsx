export default function Balloons() {
  const balloons = Array.from({ length: 8 });

  return (
    <>
      {balloons.map((_, i) => (
        <div
          key={i}
          style={{
            position: "fixed",
            left: `${Math.random() * 100}%`,
            bottom: "-120px",
            width: "50px",
            height: "70px",
            background: `radial-gradient(circle at 30% 30%, #fff, ${
              ["#ff4fd8", "#00f5ff", "#ffd93d", "#8b5cf6"][i % 4]
            })`,
            borderRadius: "50%",
            animation: `floatBalloon ${18 + i * 2}s infinite ease-in`,
            opacity: 0.7,
            zIndex: -1,
          }}
        />
      ))}
    </>
  );
}
