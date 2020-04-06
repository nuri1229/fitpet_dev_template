export interface RouteModel {

  name: string;
  exact?: boolean;
  href?: string;
  redirect?: string;
  path: string;
  component: React.ComponentClass | React.FC | any;
  guard?: () => Promise<boolean>;
  
}