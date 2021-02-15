const httpCodes = {
  NOT_FOUND: 404,
  BAD_REQUEST: 400,
  SERVER_ERROR: 500,
  OK: 200
};

const handleError = (err, res) => {
  const { statusCode, message } = err;
  res.status(statusCode).json({
    status: "error",
    statusCode,
    message
  });
};

const handleSuccess = (msg, res) => {
  const { statusCode, message } = msg;
  res.status(statusCode).json({
    status: "success",
    statusCode,
    message
  });
};

const errorList = {
  NOT_FOUND: {
    statusCode: httpCodes.NOT_FOUND,
    message: "No Records Found !!!"
  },
  DUPLICATE: {
    statusCode: httpCodes.BAD_REQUEST,
    message: "Duplicate Book Entry Not Allowed!!!!"
  },
  SERVER_ERROR: {
    statusCode: httpCodes.SERVER_ERROR,
    message: "Backend Service Error"
  },

  WRONG_UPDATE: {
    statusCode: httpCodes.BAD_REQUEST,
    message: "Cannot Update Name and author field !!!"
  }
};

const successList = {
  INSERTED: {
    statusCode: httpCodes.OK,
    message: "Book Inserted Successfully"
  },
  UPDATED: {
    statusCode: httpCodes.OK,
    message: "Book updated Successfully"
  },
  DELETED: {
    statusCode: httpCodes.OK,
    message: "Book deleted Successfully"
  }
};
module.exports = {
  handleError,
  errorList,
  successList,
  handleSuccess
};
