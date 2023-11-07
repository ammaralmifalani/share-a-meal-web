import { Controller } from '@nestjs/common';
import { MealService } from './meal.service';
import { Get, Param, Post, Body } from '@nestjs/common';
import { IMeal } from '@avans-nx-workshop/shared/api';
import { CreateMealDto } from '@avans-nx-workshop/backend/dto';

@Controller('meal')
export class MealController {
    constructor(private mealService: MealService) {}

    @Get('')
    getAll(): IMeal[] {
        return this.mealService.getAll();
    }

    @Get(':id')
    getOne(@Param('id') id: string): IMeal {
        return this.mealService.getOne(id);
    }

    @Post('')
    create(@Body() data: CreateMealDto): IMeal {
        return this.mealService.create(data);
    }
}
