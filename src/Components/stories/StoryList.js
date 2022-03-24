import StoryCard from "./StoryCard";

const StoryList = (props) => {
  return (
    <div className="fixFlow">
      {props.stories.map((story, index) => (
        <StoryCard key={index} story={story} />
      ))}
    </div>
  );
};

export default StoryList;
