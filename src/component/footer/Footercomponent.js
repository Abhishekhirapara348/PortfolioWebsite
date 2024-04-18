import React from "react";

import "./footer.css";

export default function Footercomponent() {
  const openLinkInNewTab = () => {
    window.open("https://cal.com/abhishek-design/15min");
  };

  const recipientEmail = "abhishekhirapara348@gmail.com";

  const handleComposeEmail = () => {
    window.location.href = `mailto:${recipientEmail}`;
  };
  return (
    <div className="footercontainer">
      <div className="alllinecontainer">
        <p className="lets">Let’s connect</p>
        <p className="bookcallline">
          Book a Free 15-minute consultation with me to kick off your new
          project and let's discuss how we can bring your vision to life.
        </p>
        <div className="btncontainer2">
          <button onClick={openLinkInNewTab} className="callbtn">
            Book call
          </button>
          <button onClick={handleComposeEmail} className="emailbtn">
            Write email
          </button>
        </div>
      </div>
      <div className="copyright">
        <p className="copytext">
          Copyright ©2023 Abhishek Hirapara. All right reserved
        </p>
      </div>
    </div>
  );
}
