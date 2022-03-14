import React from "react";
import getAllPaths from "../services/paths/getAllPaths";
import useAPI from "../effects/useAPI";
import Path from "./Path";

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
      <div className="paths">
        {paths.map((path) => (
          <Path
            key={path.pathId}
            city={path.city}
            difficulty={path.difficulty}
            averageLength={path.averageLength}
            category={path.category}
            image={path.image}
            onSelect={}
          />
        ))}
      </div>
  );
};

export default Paths;
