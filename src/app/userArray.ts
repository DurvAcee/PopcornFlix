export class Users {
    constructor(
    public email: string,
    public pwd: string,
    public name: string,
    public phone: string){}
}

export const UserVerification: Users[] = [
      { email: "aniket@gmail.com", pwd: 'aniket' ,name:"Aniket Gawade",phone:'7777777777'},
      { email: "durvesh.danve@gmail.com", pwd: 'password',name:"Durvesh Danve",phone:'5555555555'},
      { email: "deep@gmail.com", pwd: 'deep' ,name:"Deep Trivedi",phone:'1111111111'},
    ];
