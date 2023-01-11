export interface Product {
    barcode?:string;
    company?:Company;
    id?:number;
    img?:string;
    name?:string;
    price?:number;
    producttype?:Producttype;
    quantity?:number;
}

export interface Company {
    name?:string;   
}

export interface Producttype {
    name?:string; 
}
