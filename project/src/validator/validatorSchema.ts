const validatorSchema = (schema: any, dataToValidate: any) => {
  try {
    const dataValidated = schema.parse(dataToValidate);
    return dataValidated;
  } catch (error) {
    const message = error.flatten().fieldErrors;
    return { error: true, message: formatErrorObject(message) };
  }
};

function formatErrorObject(errorObj) {
  let errorMessage = "";

  for (let key in errorObj) {
    if (errorObj.hasOwnProperty(key)) {
      errorMessage += `${key}: ${errorObj[key].join(". ")} | `;
    }
  }

  return errorMessage.trim().replace(/\\/g, "");
}

export default validatorSchema;
