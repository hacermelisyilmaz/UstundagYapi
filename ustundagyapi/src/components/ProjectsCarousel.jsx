import { motion, useMotionValue, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";

import image01 from "../assets/1.jpg";
import image02 from "../assets/2.jpg";
import image03 from "../assets/3.jpg";
import image04 from "../assets/4.jpg";
import image05 from "../assets/5.jpg";
import image06 from "../assets/6.jpg";
import image07 from "../assets/7.jpg";
import image08 from "../assets/8.jpg";
import image09 from "../assets/9.jpg";
import image10 from "../assets/10.jpg";

const projects = [
  { id: 1, title: "Kalem Tekstil", img: image01 },
  { id: 2, title: "Reymo A.Ş.", img: image02 },
  { id: 3, title: "Finansbank", img: image03 },
  { id: 4, title: "Beşikler Deri", img: image04 },
  { id: 5, title: "", img: image05 },
  { id: 6, title: "", img: image06 },
  { id: 7, title: "Akkaya A.Ş. Tekstil", img: image07 },
  { id: 8, title: "Volvo Grup", img: image08 },
  { id: 9, title: "", img: image09 },
  { id: 10, title: "", img: image10 },
];

export default function ProjectsCarousel() {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const x = useMotionValue(0);
  const [maxX, setMaxX] = useState(0);

  const cardWidth = 320; // card width + gap
  const containerPadding = 50; // match CSS padding

  // Calculate max scrollable distance
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

    // Clamp between first and last card
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
        {projects.map((project) => (
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
