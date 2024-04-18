import React from "react";
import "./Work.css";
import Card from "../card/Card";
import { motion } from "framer-motion";

export default function Work() {
  return (
    <div id="" className="workcontainer">
      <div className="taglinecontainer">
        <p className="worktagline">My Work</p>
        <p className="seconderyline">Get a glimpse of my work</p>
      </div>

      <div className="cardcontainer">
        <motion.div>
          <Card
            data-aos="fade-up"
            data-aos-duration="3000"
            image={"images/card1.png"}
            cardtitle="Travellog App"
            description="Education platform that connects tutors and student online "
            backgroundColor="#171919"
            chipone="UI/UX design "
            chiptwo="App Design"
            chipthree="Userresearch"
            color="#ffffff"
          />
        </motion.div>

        <Card
          image={"images/card2.png"}
          cardtitle="Eduffierm Webapp"
          description="Education platform that connects tutors and student online  "
          backgroundColor="#171919"
          chipone="UI/UX design "
          chiptwo="App Design"
          chipthree="Userresearch"
          color="#ffffff"
        />

        <Card
          image={"images/card3.png"}
          cardtitle="App landingpage"
          description="diskuss app landing page for mobile app for task menagment "
          backgroundColor="#171919"
          chipone="UI/UX design "
          chiptwo="Web Design"
          chipthree="Userresearch"
          color="#ffffff"
        />
        <Card
          image={"images/card4.png"}
          cardtitle="Sportsingo App"
          description="Online sports community app  for sports enthusiasts "
          backgroundColor="#171919"
          chipone="UI/UX design "
          chiptwo="App Design"
          chipthree="Userresearch"
          color="#ffffff"
        />
        <Card
          image={"images/menu.png"}
          cardtitle="Meu-ware website"
          description="Cloud kitchen website that helps restaurant owner and foodies "
          backgroundColor="#171919"
          chipone="UI/UX design "
          chiptwo="Web Design"
          chipthree="Userresearch"
          color="#ffffff"
        />
        <Card
          image={"images/card6.png"}
          cardtitle="Diskuss App"
          description="Diskuss mobile app that help non techi user to manage theair tasks easely "
          backgroundColor="#171919"
          chipone="UI/UX design "
          chiptwo="App Design"
          chipthree="Userresearch"
          color="#ffffff"
        />
      </div>
    </div>
  );
}
