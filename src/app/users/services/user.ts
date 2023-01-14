export interface User {
    name?:string;
    username?:string;
    password?:string
    role?:Role;
    company?:Company;        
}
export interface EditUser {
    name?:string;
    password?:string
}
export interface Role {
    name?:string;   
}
export interface Company {
    name?:string;   
}
