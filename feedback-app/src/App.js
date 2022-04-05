import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import AboutIcon from "./components/AboutIcon";
import { FeedbackProvider } from "./components/context/FeedbackContext";
import FeedbackStats from "./components/FeedbackStats";
import Header from "./components/Header";
import FeedbackItem from "./components/FeedbackItem";
import FeedbackData from "./components/data/FeedbackData";
import FeedbackList from "./components/data/FeedbackList";
import FeedbackForm from "./components/FeedbackForm";

function App() {
  const [feedback, setfeedback] = useState(FeedbackData);

  // return React.createElement(
  //   "div",
  //   { className: "conatiner" },
  //   React.createElement("h1", {}, "By Js")
  // );
  // const comm = "my first comments";
  // const heading = "my 1st heading";
  // const com = [
  //   { id: 1, text: "comments 1" },
  //   { id: 2, text: "comments 2" },
  //   { id: 4, text: "comments 3" },
  // ];
  return (
    <FeedbackProvider>
      <Router>
        <Header text="no feed" />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats feedbackAmount={feedback} />
                  <FeedbackList feedbackk={feedback} />
                </>
              }
            >
              {/* <FeedbackForm handleAdd={addf} />
            <FeedbackStats feedbackAmount={feedback} />
            <FeedbackList feedbackk={feedback} handleDelete={deletef} /> */}
            </Route>
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <AboutIcon />
      </Router>
    </FeedbackProvider>
  );
}

export default App;
