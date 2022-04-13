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
    <div className="container">
    <div className="paths-details">
      <h1 className="user-title"> Path Details: </h1>
      <div className="group city">{path.city}</div>
      <div className="group title">{path.pathTitle}</div>
      <div className="group length">{path.avLength}</div>
      {/* <div className="group category">{path.pathCategory}</div> */}
      <div className="group difficulty">Difficulty: {path.pathDifficultyId}</div>
      <div className="group description">{path.pathDescription}</div>
      <img className="group image" src={path.image} alt="" />
    </div>
    </div>
  );
};

export default PathDetails;
