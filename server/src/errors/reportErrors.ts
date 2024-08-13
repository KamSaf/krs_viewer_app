abstract class ErrorBase extends Error {
  public name: string;
  public message: string;
  public cause: Error;

  constructor(message: string, cause: Error) {
    super(message);
    this.name = this.constructor.name;
    this.message = message;
    this.cause = cause;
  }
}

export class FileReadingError extends ErrorBase {
  constructor(cause: Error) {
    super("Error occured while trying to read report file.", cause);
  }
}

export class FileProcessingError extends ErrorBase {
  constructor(cause: Error) {
    super("Error occured while processing report file", cause);
  }
}
