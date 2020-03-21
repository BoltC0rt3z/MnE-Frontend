const apiErrorHandler = (error: any) => {
  let errorMessage;
  let validationErrors;
  let validationKeys;
  // if server gets an error response, handle it
  if (error.response) {
    switch (typeof error.response.data.message) {
    case 'string':
      errorMessage = error.response.data.message;
      break;
    case 'object':
      validationErrors = Object.values(error.response.data.message).join(', ');
      validationKeys = Object.keys(error.response.data.message).join(', ');
      errorMessage = `${validationKeys}: ${validationErrors}`;
      break;
    default:

      errorMessage = error.response.data.error || error.response.data.message
    }
  } else {
    //  if server is down, client won't get a response
    errorMessage = 'Possible network error, please reload the page';
  }
  return errorMessage || 'Possible server error';
};

export default apiErrorHandler;
