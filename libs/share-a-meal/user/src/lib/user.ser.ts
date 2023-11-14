import { Injectable } from '@angular/core';
import { IUser, UserRole } from '@avans-nx-workshop/shared/api';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class UserService1 {
  readonly users: IUser[] = [
    {
      id: 0,
      firstName: 'Eerste',
      lastName: 'User',
      emailAddress: 'usereen@host.com',
      role: UserRole.Admin,
    },
    {
      id: 1,
      firstName: 'Tweede',
      lastName: 'User',
      emailAddress: 'usertwee@host.com',
      role: UserRole.Guest,
    },
    {
      id: 2,
      firstName: 'Derde',
      lastName: 'User',
      emailAddress: 'userdrie@host.com',
      role: UserRole.Member,
    },
  ];

  constructor() {
    console.log('Service constructor aangeroepen');
  }

  getUsers(): IUser[] {
    console.log('getUsers aangeroepen');
    return this.users;
  }

  getUsersAsObservable(): Observable<IUser[]> {
    console.log('getUsersAsObservable aangeroepen');
    // 'of' is een rxjs operator die een Observable
    // maakt van de gegeven data.
    return of(this.users);
  }

  getUserById(id: number): IUser {
    console.log('getUserById aangeroepen');
    return this.users.filter((user) => user.id === id)[0];
  }
}