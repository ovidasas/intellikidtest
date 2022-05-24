export function parseJSON(resp) {
  return resp.json ? resp.json() : resp;
}

export function checkStatus(resp) {
  if (resp.status >= 200 && resp.status < 300) {
    return resp;
  }
  return parseJSON(resp).then(() => {
    throw resp;
  });
}
