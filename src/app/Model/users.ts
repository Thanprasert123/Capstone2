export class User {
    UserID: number | undefined; 
    UserName_By_Email :string | undefined;
    NameUser :string | undefined;
    Position :string | undefined;
    Email :string | undefined;
    PhoneNumber :string | undefined;
    Age :number | undefined;
    Gender :string | undefined;

    
}
export interface UsersAll {
    result: User[],
    message:string
    }
