import React from "react";
import Card from "../components/shared/Card";
import { Link } from "react-router-dom";

function About() {
  return (
    <Card>
      <div className="about">
        <h4>this is about page</h4>
        <p>vokkorchokkor sdkddkdkjs sjsjdndk sjhdkdnkdj sjhdkdn</p>
        <Link
          to={{
            pathname: "/",
            // hash: "#hello",
          }}
        >
          back to the home
        </Link>
      </div>
    </Card>
  );
}

export default About;
