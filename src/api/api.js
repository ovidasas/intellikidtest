import { parseJSON, checkStatus } from "@/api/apiHelpers";

export const fetchGetApi = (url) => {
  const data = fetch(url, {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(checkStatus)
    .then(parseJSON);

  return data;
};
