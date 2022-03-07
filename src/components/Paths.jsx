import React from "react";
import getAllPaths from "../services/paths/getAllPaths";
import useAPI from "../effects/useAPI";

const Paths = () => {
  const [pathsLoading, pathsError, pathsResponse] = useAPI(() => getAllPaths());

  if (pathsLoading) {
    return <p>LOADING...</p>;
  }
  if (pathsError) {
    return <p>Something went wrong.. Try again</p>;
  }
  const { paths } = pathsResponse;

  console.log(paths);

  return (
    <div>
      {paths.map((path) => {
        return (
          <li style={{ color: "white" }}>
            {" "}
            {path.pathDescription} <span> {path.pathId}</span>
          </li>
        );
      })}
    </div>
  );
};

export default Paths;
