const GET_QUESTIONS = async (token) => {
  const URL_QUESTIONS = `https://opentdb.com/api.php?amount=5&token=${token}`;
  const response = await fetch(URL_QUESTIONS);
  const json = await response.json();
  const data = await (response.ok ? Promise.resolve(json) : Promise.reject(json));
  return data;
};

export default GET_QUESTIONS;
