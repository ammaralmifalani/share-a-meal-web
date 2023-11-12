export enum UserRole {
  Admin = 'admin',
  Member = 'member',
  Guest = 'guest',
  }
  
  export class IUser {
    readonly id: number;
    firstName: string;
    lastName: string;
    emailAddress: string;
    role: UserRole;
  
    constructor(firstName = '', lastName = '', emailAddress = '', role: UserRole = UserRole.Guest)  {
      this.id = 0; // Assuming id is generated elsewhere
      this.firstName = firstName;
      this.lastName = lastName;
      this.emailAddress = emailAddress;
      this.role = role;
    }  
  }
  
  export type ICreateUser = Pick<
    IUser,
    'firstName' | 'lastName' | 'emailAddress' | 'role'
>;
export type IUpdateUser = Partial<Omit<IUser, 'id'>>;
export type IUpsertUser = IUser;
