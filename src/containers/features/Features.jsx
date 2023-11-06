import React from "react";
import { Feature } from "../../components";
import "./features.css";

const featureData = [
  {
    title: "Improving end distrust instantly",
    text: "From the fine john he gives of rich he. They age and draw mrs like. Improving the distrusts may instantly be applauded by the household",
  },
  {
    title: "Become the tended active",
    text: "Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable it",
  },
  {
    title: "Message or am nothing",
    text: " It's great to hear that you're open to connecting with developers at all levels. I'd love to be part of your circle here on X. Please let me know how I can join, and I'm looking forward to learning from your experiences and sharing mine.",
  },
  {
    title: "Really boy law county",
    text: "Really boy law county.  It's specifically related to a missing module or file, in this case, logo.svg, and it seems like the import statement is looking for it in the wrong location or it doesn't exist in the specified path.",
  },
];

function Features() {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
          The Future is Now and You Just Need To Realize It. Step into Future
          Today & and Make it Happen
        </h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="gpt3__features-container">
        {featureData.map((item, index) => (
          <Feature
            title={item.title}
            text={item.text}
            key={item.title + index}
          />
        ))}
      </div>
    </div>
  );
}

export default Features;
