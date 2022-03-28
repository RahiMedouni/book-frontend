import StoryCard from "./StoryCard";

const StoryList = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 250,
      }}
    >
      {props.stories.map((story, index) => (
        <StoryCard key={index} story={story} />
      ))}
    </div>
  );
};

export default StoryList;
