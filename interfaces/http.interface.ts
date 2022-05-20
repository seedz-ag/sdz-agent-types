export interface HttpConfigRequest {
  body?: string;
  dataPath?: string;
  headers: { [key: string] : string };
  method: string;
  scope?: { [key: string] : string };
  url: string;
  }

export interface  HttpConfig {
  [key: string] :  HttpConfigRequest;
}
