export class CustomError extends Error {
  constructor(code, message) {
    super(message);
    this.code = code;
  }
}

export const errorHandler = (err, req, res, next) => {
  console.log(err);
  if (err instanceof CustomError) {
    return res.status(err.code).json({ success: false, message: err.message });
  }
  res.status(500).json({ success: false, message: "Internal server error" });
};
