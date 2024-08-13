import ErrorBase from "./errorBase";
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
