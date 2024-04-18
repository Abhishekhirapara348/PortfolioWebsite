import React from "react";
import { motion } from "framer-motion";
import "./home.css";

export default function Home() {
  const openLinkInNewTab = () => {
    window.open("https://cal.com/abhishek-design/15min");
  };

  const recipientEmail = "abhishekhirapara348@gmail.com";

  const handleComposeEmail = () => {
    window.location.href = `mailto:${recipientEmail}`;
  };

  // Define variants for each line of text
  const introVariants = {
    hidden: { opacity: 0, y: 20 }, // Initial position below the bottom
    visible: { opacity: 1, y: 0 }, // Final position at the top
  };

  return (
    <div className="container container2">
      <div className="hero">
        <div className="me">
          <img
            className="heroprofile"
            src="images/profile-pic.png"
            alt="png"
            loading="lazy"
          />
          <div className="avialablecontainer">
            <p className="name">Abhishek hirapara 🤘🏻</p>
            <div className="green-dot-container">
              <div className="text">Avialable for work</div>
              <div className="animation-container">
                <div className="ringring">
                  <div className="circle"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <motion.h1
          className="intro"
          initial="hidden" // Initial state is hidden
          animate="visible" // Animate to visible state
          variants={introVariants} // Use variants for animation
          transition={{ duration: 0.6, delay: 0.1, ease: "easeInOut" }} // Adjust duration, delay, and ease as needed
        >
          <span className="intro2">Hi</span> <span className="emoji">👋🏻</span>{" "}
          <span className="intro2">
            i am Abhishek Hirapara UI/UX Designer And Fullstack Developer Based
            In Surat Gujarat
          </span>{" "}
          <span className="emoji">🇮🇳</span>
        </motion.h1>
        <div className="btncontainer">
          <button onClick={openLinkInNewTab} className="book">
            Book call
          </button>
          <button onClick={handleComposeEmail} className="copyemail">
            {" "}
            email me
          </button>
        </div>
      </div>
    </div>
  );
}
