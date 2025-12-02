import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import { existingProjects, continuedProjects } from "../data/projectsdata";
import Line from "../components/Line";
import "../styles/projects.css";

export default function ProjectsPage() {
  const [allImages, setAllImages] = useState([]);
  const [openIndex, setOpenIndex] = useState(null);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    setAllImages([...existingProjects, ...continuedProjects]);
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll(".fade-left, .fade-up");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));
  }, []);

  useEffect(() => {
    if (openIndex === null) return;

    const handleKey = (e) => {
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") setOpenIndex(null);
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [openIndex]);

  const nextImage = () => {
    setDirection(1);
    setOpenIndex((i) => (i + 1) % allImages.length);
  };

  const prevImage = () => {
    setDirection(-1);
    setOpenIndex((i) => (i - 1 + allImages.length) % allImages.length);
  };

  return (
    <div className="projects">
      <Header />

      <div className="projects-content">
        <Line className="fade-left" />
        <h2 className="fade-left" style={{ animationDelay: "0.15s" }}>
          Projelerimiz
        </h2>
        <section className="section-block fade-up">
          <h3>Devam Eden Projeler</h3>

          <div className="projects-grid">
            {continuedProjects.map((p, index) => (
              <div
                key={p.id}
                className="project-card"
                onClick={() => setOpenIndex(existingProjects.length + index)}
              >
                <img src={p.img} alt={p.title || "project"} />
                <h4>{p.title}</h4>
              </div>
            ))}
          </div>
        </section>

        <section className="section-block fade-up">
          <h3>Mevcut Projeler</h3>

          <div className="projects-grid">
            {existingProjects.map((p, index) => (
              <div
                key={p.id}
                className="project-card"
                onClick={() => setOpenIndex(index)}
              >
                <img src={p.img} alt={p.title || "project"} />
                <h4>{p.title}</h4>
              </div>
            ))}
          </div>
        </section>

        {openIndex !== null && (
          <div className="modal-overlay" onClick={() => setOpenIndex(null)}>
            <div className="modal-content">
              <div
                className={`modal-image-wrapper slide-${direction}`}
                onClick={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = e.clientX - rect.left;

                  if (x < rect.width / 2) prevImage();
                  else nextImage();

                  e.stopPropagation();
                }}
              >
                <img
                  key={openIndex}
                  src={allImages[openIndex].img}
                  alt=""
                  className="modal-image"
                />
              </div>

              <button
                className="modal-close"
                onClick={() => setOpenIndex(null)}
              >
                ✕
              </button>

              <button
                className="modal-prev"
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
              >
                ‹
              </button>

              <button
                className="modal-next"
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
              >
                ›
              </button>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
