import { ICreateUser, IUser } from '@avans-nx-workshop/shared/api';
import { UserService } from './user.service';
import { Controller } from '@nestjs/common';
import { Get, Param, Post, Body } from '@nestjs/common';


@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

    @Get('')
    getAll(): IUser[] {
        return this.userService.getAll();
    }

    @Get(':id')
    getOne(@Param('id') id: number): IUser {
        return this.userService.getOne(id);
    }

    @Post('')
    create(@Body() data: ICreateUser): IUser {
        return this.userService.create(data);
    }
}
