import APMDecorator from "./apm";
import ReadFileDecorator from "./read-file";

export const APM = APMDecorator;
export const ReadFile = ReadFileDecorator;

export default {
  APM,
  ReadFile,
};
