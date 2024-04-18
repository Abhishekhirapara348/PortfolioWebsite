import React from "react";
import "./feedback.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Feedback() {
  const controls1 = useAnimation();
  const [ref1, inView1] = useInView();
  const controls2 = useAnimation();
  const [ref2, inView2] = useInView();

  React.useEffect(() => {
    if (inView1) {
      controls1.start({ opacity: 1, y: 0 });
    }
  }, [controls1, inView1]);

  React.useEffect(() => {
    if (inView2) {
      controls2.start({ opacity: 1, y: 0 });
    }
  }, [controls2, inView2]);
  return (
    <div id="feedback" className="feedbackcontainer">
      <div className="feedback">
        <p className="feedbacktitle">What Clients Say</p>
        <p className="feedbacktitle2">
          Don't just take My word for it. Take theirs.{" "}
        </p>
      </div>

      <div className="twocardcontainer">
        <motion.div
          className="messagecontainer box2"
          ref={ref1}
          animate={controls1}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <img className="quatsvg" src="images/bi_quote.svg" alt="" />

          <div className="containertwo">
            <p className="clientmessage">
              Abhishek is a great listener and he understood the project
              requirements and objectives. After understanding the requirements
              he built prototypes and changed the designs based on discussions
              we had regularly. The whole process was super smooth and he
              delivered the project on time. It was really a great experience
              working with him. I recommend him strongly.
            </p>
          </div>

          <div>
            <motion.p className="clientname">Sheetal arora </motion.p>
            <motion.p className="clientocupation">
              Founder of soprtsingo
            </motion.p>
          </div>
        </motion.div>

        <motion.div
          className="messagecontainer2 box2"
          ref={ref2}
          animate={controls2}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <img className="quatsvg" src="images/2quat.svg" alt="" />

          <div className="containertwo">
            <p className="clientmessage">
              Most of the things was handled by my Product owner, but I have to
              thank you Abhishek for being patient with us and getting the pages
              complete. Of course there were situations where u didn’t agree
              with our requirements but I understand it was coming from your
              experience of end user mindset.
            </p>
          </div>

          <div>
            <motion.p className="clientname">Praveen Reddy </motion.p>
            <motion.p className="clientocupation">Founder of Diskuss</motion.p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
