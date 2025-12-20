import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function Fireworks({ show }) {
  if (!show) return null;

  return (
    <Particles
      init={loadFull}
      options={{
        particles: {
          number: { value: 120 },
          color: { value: ["#ff4fd8", "#00f5ff", "#ffd93d"] },
          size: { value: 3 },
          move: { speed: 6 },
          opacity: { value: 1 },
        },
      }}
    />
  );
}
