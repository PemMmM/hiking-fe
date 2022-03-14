import React from "react";
function Path(props) {
  const { city, difficulty, averageLength, category, image, pathId } = props;
  return (
    <div className="paths">
      <button type="button" onClick={() => onSelect()}>
        <div className="city">{city}</div>
        <div className="difficulty">{difficulty}</div>
        <div className="averageLength">{averageLength}</div>
        <div className="category">{category}</div>
        <div className="image">{image}</div>
      </button>
    </div>
  );
}
export default Path;