import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function Stars() {
  const init = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      init={init}
      options={{
        fullScreen: { enable: true },
        particles: {
          number: { value: 90 },
          color: { value: "#ffffff" },
          opacity: { value: 0.35 },
          size: { value: 1.5 },
          move: { enable: true, speed: 0.3 },
        },
      }}
    />
  );
}
