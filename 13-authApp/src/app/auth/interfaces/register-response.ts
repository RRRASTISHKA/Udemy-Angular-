import { Register } from "./register.interface";
import { User } from "./user.interface";


export interface RegisterResponse {
  user:  Register;
  token: string;
}


