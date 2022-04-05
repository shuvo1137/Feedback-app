import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "ti amo",
      rating: 8,
    },
  ]);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });
  const deletef = (id) => {
    if (window.confirm("are u sure")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  const addf = (feedbackk) => {
    feedbackk.id = uuidv4();
    setFeedback([feedbackk, ...feedback]);
  };
  const editf = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
    console.log(item);
  };
  const updatef = (id, updated) => {
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...updated } : item))
    );
  };
  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deletef,
        addf,
        editf,
        updatef,
        feedbackEdit,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
