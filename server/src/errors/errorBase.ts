export default abstract class ErrorBase extends Error {
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
