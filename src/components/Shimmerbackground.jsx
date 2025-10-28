import { useEffect, useState } from "react";

export const Shimmerbackground = () => {
  const [shimmer, setShimmer] = useState([]);
  const [orbs, setOrbs] = useState([]);

  useEffect(() => {
    generateShimmer();
    generateOrbs();

    const handleResize = () => {
      generateShimmer();
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const generateShimmer = () => {
    const numberOfShimmer = Math.floor(
      (window.innerWidth * window.innerHeight) / 4000
    );

    const newShimmer = [];
    for (let i = 0; i < numberOfShimmer; i++) {
      newShimmer.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
      });
    }

    setShimmer(newShimmer);
  };

  const generateOrbs = () => {
    const numberOfOrbs = 4;
    const newOrbs = [];

    for (let i = 0; i < numberOfOrbs; i++) {
      newOrbs.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 20,
        opacity: Math.random() * 15,
        animationDuration: Math.random() * 3 + 3,
      });
    }

    setOrbs(newOrbs);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {shimmer.map((shimmer) => (
        <div
          key={shimmer.id}
          className="shimmer animate-pulse-subtle"
          style={{
            width: shimmer.size + "px",
            height: shimmer.size + "px",
            left: shimmer.x + "%",
            top: shimmer.y + "%",
            opacity: shimmer.opacity,
            animationDuration: shimmer.animationDuration + "s",
          }}
        />
      ))}
      {orbs.map((orbs) => (
        <div
          key={orbs.id}
          className="orb animate-orb"
          style={{
            width: orbs.size * 50 + "px",
            height: orbs.size + "px",
            left: orbs.x + "%",
            top: orbs.y + "%",
            animationDelay: orbs.delay,
            animationDuration: orbs.animationDuration + "s",
          }}
        />
      ))}
    </div>
  );
};
