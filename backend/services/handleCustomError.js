class HandleCustomError extends Error {
  constructor(statusCode, message) {
    super();
    this.statusCode = statusCode;
    this.message = message;
  }

  static handlingCustomError(
    statusCode = 401,
    message = "Internal Server Error."
  ) {
    return new HandleCustomError(statusCode, message);
  }
}

export default HandleCustomError;
