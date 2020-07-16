const GET_QUESTIONS = async (token) => {
  const response = await fetch(`https://opentdb.com/api.php?amount=5&token=${token}`);
  const json = response.json();
  return response.ok ? Promise.resolve(json) : Promise.reject(json);
};

export default GET_QUESTIONS;
