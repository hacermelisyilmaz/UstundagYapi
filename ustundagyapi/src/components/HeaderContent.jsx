import { motion } from "framer-motion";

export default function HeaderContent() {
  return (
    <div className="header-content">
      <motion.div
        className="slogan"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div>Güvenin Temelinde</div>
        <div>Üstündağ Yapı</div>
      </motion.div>
      <motion.div
        className="subtitle"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
      >
        Üç kuşaktır İstanbul’un geleceğini sağlam temeller üzerine inşa
        ediyoruz.
      </motion.div>
    </div>
  );
}
