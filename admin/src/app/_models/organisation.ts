export class Organisation {
    name: string;
    type: string;
    website:string;
    contact: contact[];
    address: address[];
}
export interface contact {
    name: string;
    email:string;
    phone1:number;
    phone2:number;
    fax:string;
    remarks:string;

}
export interface address {
    address1:string;
    address2:string;
    city:string;
    landmark :string;   
    pincode:string;

}

