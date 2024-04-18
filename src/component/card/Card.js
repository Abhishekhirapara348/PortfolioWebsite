import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer"; // Import useInView from react-intersection-observer
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import "./card.css";

export default function Card({
  cardtitle,
  description,
  backgroundColor,
  image,
  chipone,
  chiptwo,
  chipthree,
  color,
}) {
  const { ref: titleRef, inView: titleInView } = useInView(); // Use useInView from react-intersection-observer
  const { ref: descRef, inView: descInView } = useInView();

  return (
    <ParallaxProvider>
      <div data-aos="fade-up" className="card">
        <div className="thumbnsilcontsiner">
          <Parallax speed={-4}>
            <img className="thumbnail" loading="lazy" src={image} alt="" />
          </Parallax>
        </div>
        <div
          style={{
            display: "flex",
            paddingBlock: "1.5rem",
            margin: "0%",
            gap: "clamp(0.5rem, -0.0017rem + 2.6756vw, 1rem)",
          }}
        >
          <div className="chips" style={{ backgroundColor, color }}>
            <p> {chipone} </p>
          </div>
          <div className="chips" style={{ backgroundColor, color }}>
            <p>{chiptwo}</p>
          </div>
          <div className="chips" style={{ backgroundColor, color }}>
            <p>{chipthree}</p>
          </div>
        </div>
        <div className="cardinfo">
          <motion.p
            ref={titleRef}
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="title"
          >
            {cardtitle}
          </motion.p>
          <motion.p
            ref={descRef}
            initial={{ opacity: 0, y: 20 }}
            animate={descInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="discription"
          >
            {description}
          </motion.p>
        </div>
      </div>
    </ParallaxProvider>
  );
}
