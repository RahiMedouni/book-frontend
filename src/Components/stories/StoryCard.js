import "./Story.css";

const StoryCard = (props) => {
  return (
    <div
      style={{
        width: 600,
        height: 300,
        color: "black",
        background: "rgb(115, 147, 179, 0.2)",
        border: "1px solid rgb(0, 0, 0, 0.2)",
        margin: 5,
        overflowY: "scroll",
        textAlign: "justify",
        padding: 20,
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h2 className="storytext">{props.story.title}</h2>
      </div>
      <p className="storytitle">{props.story.thoughts}</p>
    </div>
  );
};

export default StoryCard;
