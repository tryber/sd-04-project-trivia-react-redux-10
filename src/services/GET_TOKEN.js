const URL = 'https://opentdb.com/api_token.php?command=request';

const GET_TOKEN = async () => {
  const response = await fetch(URL);
  const json = response.json();
  return (response.ok ? Promise.resolve(json) : Promise.reject(json));
};

export default GET_TOKEN;
