import http from "utils/http";
import { sessions } from "constants/endpoints";
import mapValues from "utils/mapValues";

const postUserSession = ({
  prtUpload,
  optimisationConstraintId,
  machineBrand,
  machineModel,
  spindleName,
  spindleSpeed,
  maxTorque,
  maxPower,
  dimensionalTolerance,
  surfaceRoughness,
  controllerBrand,
  controllerModel,
  materialName,
  stdUpload,
  materialDimensions = {},
  fixturingInfo,
  notes,
  sessionType,
  cuttingToolIds,
}) => {
  const POST_USER_ENDPOINT = sessions.postUserSession();
  const { REACT_APP_API_BASE_URL: API_BASE_URL } = process.env;
  return http.post(`${API_BASE_URL}${POST_USER_ENDPOINT}`, {
    data: {
      prtUpload,
      optimisationConstraintId,
      machineBrand,
      machineModel,
      spindleName,
      spindleSpeed,
      maxTorque,
      maxPower,
      dimensionalTolerance,
      surfaceRoughness,
      controllerBrand,
      controllerModel,
      materialName,
      stdUpload,
      materialDimensions: mapValues(materialDimensions, (v) => v || null),
      fixturingInfo,
      notes,
      sessionType,
      cuttingToolIds,
    },
  });
};

export default postUserSession;
