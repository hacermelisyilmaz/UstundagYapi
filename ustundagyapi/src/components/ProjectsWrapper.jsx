import HeaderContent from "../components/HeaderContent";
import Header from "../components/Header";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ProjectsWrapper() {
  const { scrollY } = useScroll();

  const heroOpacity = useTransform(scrollY, [0, 200], [1, 0]);

  const sheetY = useTransform(scrollY, [0, 300], [100, 0]);

  return (
    <div className="projects-wrapper">
      <motion.div className="hero" style={{ opacity: heroOpacity }}>
        <Header />
        <HeaderContent />
      </motion.div>

      <motion.section className="projects-sheet" style={{ y: sheetY }}>
        <div className="projects-inner">
          <h2>Projelerimiz</h2>

          {/* TODO: Insert carousel or grid here */}
        </div>
      </motion.section>
    </div>
  );
}
