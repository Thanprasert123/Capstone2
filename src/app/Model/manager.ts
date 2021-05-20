export class Manager {
     ManagerID : Number | undefined;
     UserID : number | undefined;
     ManagerName : String | undefined;

}

export interface    ManagerAll{
        result : Manager[],
        message:string

}
