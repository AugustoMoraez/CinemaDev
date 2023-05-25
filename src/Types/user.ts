export type user = {
    nickname:string,
    email:string
    password:string,
    firstName:string,
    lastName:string,
    birth:string
}

export type currentUser =  user | null; 