import env from '../helpers/environment';

const resolveBaseUrl = () => {
  const appUrl = env.REACT_APP_API_URL;
  return `${appUrl}/api/v1`;
};

export default resolveBaseUrl;
