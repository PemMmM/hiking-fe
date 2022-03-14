import React from "react";
import useAPI from "../effects/useAPI";
import { useLocation } from "react-router-dom";
import getPathById from "../services/paths/getPathById";

const PathDetails = () => {
  const location = useLocation();

  const [pathLoading, pathError, pathResponse] = useAPI(() => getPathById({}));

  if (pathLoading) {
    return <p>LOADING...</p>;
  }
  if (pathError) {
    return <p>Something went wrong.. Try again</p>;
  }

  return <div>PathDetails</div>;
};

export default PathDetails;
