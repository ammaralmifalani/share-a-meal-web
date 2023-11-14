import {  IUser, UserRole } from '@avans-nx-workshop/shared/api';
import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { BehaviorSubject } from 'rxjs';


@Injectable()
export class UserService {
    TAG = 'UserService';

    private users$ = new BehaviorSubject<IUser[]>([
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
    ]);

    getAll(): IUser[] {
        Logger.log('getAll', this.TAG);
        return this.users$.value;
    }
   
    getOne(id: number): IUser {
        Logger.log(`getOne(${id})`, this.TAG);
        const user = this.users$.value.find((td) => td.id === id);
        if (!user) {
            throw new NotFoundException(`Meal could not be found!`);
        }
        return user;
    }

    /**
     * Update the arg signature to match the DTO, but keep the
     * return signature - we still want to respond with the complete
     * object
     */
    create(user: Pick<IUser, 'firstName' | 'lastName' | 'emailAddress' | 'role'>): IUser {
        Logger.log('create', this.TAG);
        const current = this.users$.value;
        // Use the incoming data, a randomized ID, and a default value of `false` to create the new to-do
        const newUser: IUser = {
            ...user,
            id: Math.floor(Math.random() * 10000),
            firstName: '',
            lastName: '',
            emailAddress: '',
            role:UserRole.Member
        };
        this.users$.next([...current, newUser]);
        return newUser;
    }
}
