import React from "react";
import Card from "../components/shared/Card";

function Contact() {
  return (
    <Card reverse={true}>
      <form>
        <div className="input-group">
          <input type="text" id="text" placeholder="Your Name" />
          <input type="email" id="email" placeholder="Your Mail" />
        </div>
      </form>
    </Card>
  );
}

export default Contact;
