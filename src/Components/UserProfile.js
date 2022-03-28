import { Button, Card } from "react-bootstrap";
import AddStory from "./stories/AddStory";
import StoryList from "./stories/StoryList";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const UserProfile = (props) => {
  const [stories, setStories] = useState([]);
  const [title, setTitle] = useState("");

  const handleAdd = (newStory) => {
    setStories([...stories, newStory]);
  };

  const StoriesList = () => {
    return (
      <div>
        <AddStory handleAdd={handleAdd} />
        <StoryList
          stories={stories.filter((story) =>
            story.title.toUpperCase().includes(title.toUpperCase())
          )}
        />
      </div>
    );
  };

  return (
    <div
      style={{
        textAlign: "center",
        display: "inline-block",
      }}
    >
      <StoriesList />
    </div>
  );
};
export default UserProfile;
