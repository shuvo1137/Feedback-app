import React from "react";
import { useContext } from "react";
import FeedbackContext from "./context/FeedbackContext";

function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext);
  const avg = (
    feedback.reduce((acc, curr) => {
      return acc + curr.rating;
    }, 0) / feedback.length
  )
    .toFixed(1)
    .replace();
  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Avrge rating is {avg}</h4>
    </div>
  );
}

export default FeedbackStats;
