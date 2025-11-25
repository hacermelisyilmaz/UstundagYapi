import { motion, useMotionValue, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";

import { existingProjects } from "../data/projectsdata.js";

export default function ProjectsCarousel() {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const x = useMotionValue(0);
  const [maxX, setMaxX] = useState(0);

  const cardWidth = 320;
  const containerPadding = 50;

  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (container && track) {
      const visibleWidth = container.offsetWidth - containerPadding * 2;
      const maxScroll = track.scrollWidth - visibleWidth;
      setMaxX(maxScroll);
    }
  }, []);

  const slide = (direction) => {
    const current = x.get();
    const distance = direction === "next" ? -cardWidth : cardWidth;
    let nextX = current + distance;

    if (nextX > 0) nextX = 0;
    if (nextX < -maxX) nextX = -maxX;

    animate(x, nextX, { type: "spring", stiffness: 120, damping: 20 });
  };

  return (
    <div className="carousel-container" ref={containerRef}>
      <button className="carousel-btn prev" onClick={() => slide("prev")}>
        ‹
      </button>

      <motion.div
        className="carousel-track"
        ref={trackRef}
        style={{ x }}
        drag="x"
        dragConstraints={{ left: -maxX, right: 0 }}
      >
        {existingProjects.map((project) => (
          <div key={project.id} className="carousel-item">
            <img src={project.img} alt={project.title || "Project"} />
            {project.title && <h3>{project.title}</h3>}
          </div>
        ))}
      </motion.div>

      <button className="carousel-btn next" onClick={() => slide("next")}>
        ›
      </button>
    </div>
  );
}
