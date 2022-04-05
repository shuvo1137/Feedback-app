import React from "react";
import { useState } from "react";
import { useContext } from "react";
import Card from "./shared/Card";
import { FaTimes, FaEdit } from "react-icons/fa";
import FeedbackContext from "./context/FeedbackContext";

function FeedbackItem({ item }) {
  const { deletef, editf } = useContext(FeedbackContext);

  //   const [rating, setRating] = useState(7);
  //   const [item,setitem]=useState()
  //   const clickme = function () {
  //     setRating((prev) => {
  //       return prev + 1;
  //     });
  //   };
  // const clickme = (id) => {
  //   console.log(id);
  // };

  return (
    <Card reverse={true}>
      <div className="num-display">{item.rating}</div>
      <button className="close" onClick={() => deletef(item.id)}>
        <FaTimes color="orange" />
      </button>
      <button className="edit" onClick={() => editf(item)}>
        <FaEdit color="orange"></FaEdit>
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

export default FeedbackItem;
