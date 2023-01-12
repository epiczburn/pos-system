export interface User {
    name?:string;
    username?:string;
    role?:Role;
    company?:Company;        
}
export interface Role {
    name?:string;   
}
export interface Company {
    name?:string;   
}
