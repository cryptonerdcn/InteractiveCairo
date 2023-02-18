import {promiseHandler} from './promise-handler';


const path = "https://vu00h9m96c.execute-api.us-east-2.amazonaws.com/staging/cairo-staging";
const DEFAULT_HEADERS = {
  'Content-Type': 'application/json'
};

const apiRequest = async apiObj => {
  const [response, error] = await promiseHandler(apiHandler(apiObj));
  if (error) {
    return [null, error];
  }
  if (response.error || response.errorMessage) {
    return [null, new Error(extractErrorMsg(response))];
  }
  return [response, null];
};

const apiHandler = async ({
  path,
  method = 'GET',
  data,
  headers = {}
}) => {
  const [response, error] = await promiseHandler(
    window.fetch(
      `${path}?random_seed=${encodeURIComponent(
        new Date().getTime()
      )}`,
      {
        method,
        body: JSON.stringify(data || {}),
        headers: Object.assign({}, DEFAULT_HEADERS, headers)
      }
    )
  );
  if (error) {
    return Promise.reject(error);
  }
  return await response.json();
};

const extractErrorMsg = data => {
  let errorMsg = data.error
    ? data.error
    : data.errorMessage.replace(/^[0-9A-Z:.-]+ [0-9a-f-]+ /g, '');
  try {
    const msg = JSON.parse(errorMsg.replace(/.*Text: /, ''))[
      'message'
    ];
    if (msg) {
      errorMsg = msg;
    }
  } catch (e) {
    return errorMsg;
  }
  return errorMsg;
};

const runCode = async code => {
  const data = {code, action: "run"};
  const [response, error] = await apiRequest({
    path,
    method: 'POST',
    data
  });
  if (error) {
    return Promise.reject(error);
  }
  return {output: response.output};
};

export {apiRequest, runCode};
