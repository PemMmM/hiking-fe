import React from "react";
import useAPI from "../effects/useAPI";
import { useParams } from "react-router-dom";
import getPathById from "../services/paths/getPathById";
import "../styles/pathDetails.css";

const PathDetails = () => {
  const params = useParams();

  const [pathLoading, pathError, pathResponse] = useAPI(() =>
    getPathById(params.pathId)
  );

  const { path } = pathResponse;

  console.log(path);
  if (pathLoading) {
    return <p>LOADING...</p>;
  }
  if (pathError) {
    return <p>Something went wrong.. Try again</p>;
  }

  return (
    <div>
      PathDetails:
      <div className="city">{path.city}</div>
      <div className="title">{path.pathTitle}</div>
      <div className="length">{path.avLength}</div>
      <div className="category">{path.pathCategory}</div>
      <div className="image">{path.image}</div>
      <div className="difficulty">{path.pathDifficulty}</div>
      <div className="description">{path.pathDescription}</div>
    </div>
  );
};

export default PathDetails;
