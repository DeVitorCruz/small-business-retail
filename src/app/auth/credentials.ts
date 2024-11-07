export type Credentials = {
  name?:string;
  email: string;
  password: string;
  password_confirmation?: string;
  role?: number        
};