import MD5 from 'crypto-js/md5';

const GET_GRAVATAR = (email) => {
  // const cleanEmail = email.trim().toLowercase();
  const hashEmail = MD5(email);
  console.log(hashEmail);
  return `https://www.gravatar.com/avatar/${hashEmail}`;
};
export default GET_GRAVATAR;
