import React from "react";
import useAPI from "../effects/useAPI";
import { useParams } from "react-router-dom";
import getPathById from "../services/paths/getPathById";

const PathDetails = () => {
  
  const params = useParams();

  const [pathLoading, pathError, pathResponse] = useAPI(() => getPathById(params.pathId));

  if (pathLoading) {
    return <p>LOADING...</p>;
  }
  if (pathError) {
    return <p>Something went wrong.. Try again</p>;
  }

  return <div>PathDetails</div>;
};

export default PathDetails;
