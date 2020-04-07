import { AxiosResponse } from "axios";

export interface RouteModel {

  name: string;
  exact?: boolean;
  href?: string;
  redirect?: string;
  path: string;
  component: React.ComponentClass | React.FC | any;
  guard?: () => Promise<boolean>;
  
}

export interface RequestPendingPayload {
  callService: () => Promise<AxiosResponse<any>>,
  successAction: string,
  errorAction: string
}

export type Test = {
  payload: RequestPendingPayload
}

