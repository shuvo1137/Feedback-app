import React from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import { useState } from "react";
import { useContext, useEffect } from "react";
import FeedbackContext from "./context/FeedbackContext";

function FeedbackForm() {
  const { addf, feedbackEdit, updatef } = useContext(FeedbackContext);

  const [text, setText] = useState("");
  const [rating, setRating] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [messege, setMessege] = useState("");
  const handleText = function (e) {
    if (text === "") {
      setBtnDisabled(true);
      setMessege(null);
    } else if (text !== "" && text.trim().length < 10) {
      setBtnDisabled(true);
      setMessege("At least 10 characters");
    } else {
      setBtnDisabled(false);
      setMessege(null);
    }
    setText(e.target.value);
  };
  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setBtnDisabled(false);
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newfeedback = {
        rating,
        text,
      };
      if (feedbackEdit.edit === true) {
        updatef(feedbackEdit.item.id, newfeedback);
      } else {
        addf(newfeedback);
      }
      setText(null);
    }
  };
  return (
    <Card reverse={true}>
      <form onSubmit={handleSubmit}>
        <RatingSelect select={(rating) => setRating(rating)} />
        <h2>Rate your service with us</h2>
        <div className="input-group">
          <input
            onChange={handleText}
            type="text"
            placeholder="write a review"
          />
          <Button version="primary" type="submit" isDisabled={btnDisabled}>
            send
          </Button>
        </div>
        <div>
          <h4>{messege}</h4>
        </div>
      </form>
    </Card>
  );
}

export default FeedbackForm;
