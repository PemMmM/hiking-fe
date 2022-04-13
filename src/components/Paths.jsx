import React from "react";
import getAllPaths from "../services/paths/getAllPaths";
import useAPI from "../effects/useAPI";
import { useNavigate } from "react-router-dom";
import "../styles/paths.css";

const Paths = () => {
  let navigate = useNavigate();

  const [pathsLoading, pathsError, pathsResponse] = useAPI(() => getAllPaths());

  if (pathsLoading) {
    return <p>LOADING...</p>;
  }
  if (pathsError) {
    return <p>Something went wrong.. Try again</p>;
  }
  const { paths } = pathsResponse;

  // console.log(paths);

  return (
    <div className="paths">
      {paths.map((path) => (
        <div className="path-details">
          <button
            id="path-button"
            type="button"
            onClick={() => navigate(`/paths/${path.pathId}`, { replace: true })}
          >
            <div className="city">{path.city}</div>
            <div className="difficulty">{path.difficulty}</div>
            <div className="averageLength">{path.avLength}</div>
            <div className="category">{path.category}</div>
            <img className="image" src={path.image} alt="" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default Paths;
