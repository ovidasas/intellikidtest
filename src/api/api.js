import { parseJSON, checkStatus } from "@/api/apiHelpers";

export const fetchGetApi = (url, configOptions) => {
  const data = fetch(url, {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    ...configOptions,
  })
    .then(checkStatus)
    .then(parseJSON);

  return data;
};
