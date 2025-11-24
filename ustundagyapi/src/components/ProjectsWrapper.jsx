import HeaderContent from "../components/HeaderContent";
import Header from "../components/Header";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import ProjectsCarousel from "./ProjectsCarousel";

export default function ProjectsWrapper() {
  const { scrollY } = useScroll();
  const windowHeight = typeof window !== "undefined" ? window.innerHeight : 0;
  const isScrolling = useRef(false);

  const heroOpacity = useTransform(scrollY, [0, windowHeight * 0.3], [1, 0]);

  const sheetY = useTransform(scrollY, [0, windowHeight * 0.5], [100, 0]);

  const scrollToTarget = (target) => {
    const start = window.scrollY;
    const distance = target - start;
    const duration = 800;
    let startTime = null;

    const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4);

    const initialJump = start + distance * 0.4;
    window.scrollTo(0, initialJump);
    setTimeout(() => requestAnimationFrame(step), 50);

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      let progress = elapsed / duration;
      if (progress > 1) progress = 1;

      const easeProgress = easeOutQuart(progress);
      window.scrollTo(0, start + distance * easeProgress);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        isScrolling.current = false;
      }
    };

    requestAnimationFrame(step);
  };

  useEffect(() => {
    const handleWheel = (e) => {
      if (isScrolling.current) return;

      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      let target = scrollTop;

      if (e.deltaY > 0) {
        // SCROLL DOWN
        if (scrollTop < windowHeight) {
          // Auto-scroll from HERO → PROJECTS
          target = windowHeight;
          isScrolling.current = true;
          scrollToTarget(target);
          e.preventDefault();
        }
      } else {
        if (scrollTop >= windowHeight) {
          target = 0;
          isScrolling.current = true;
          scrollToTarget(target);
          e.preventDefault();
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <div className="projects-wrapper">
      <motion.div className="hero" style={{ opacity: heroOpacity }}>
        <Header />
        <HeaderContent />
      </motion.div>

      <motion.section
        className="projects-sheet"
        style={{ y: sheetY }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      >
        <div className="projects-inner">
          <h2>Projelerimiz</h2>
          <ProjectsCarousel />
        </div>
      </motion.section>
    </div>
  );
}
