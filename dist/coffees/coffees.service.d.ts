import { Connection, Model } from 'mongoose';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto';
import { Event } from 'src/events/entities/event.entity';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { Coffee } from './entities/coffee.entity';
export declare class CoffeesService {
    private readonly coffeeModel;
    private readonly connection;
    private readonly eventModel;
    constructor(coffeeModel: Model<Coffee>, connection: Connection, eventModel: Model<Event>);
    findAll(paginationQuery: PaginationQueryDto): Promise<(Coffee & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findOne(id: string): Promise<Coffee & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    create(createCoffeeDto: CreateCoffeeDto): Promise<Coffee & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    update(id: string, updateCoffeeDto: UpdateCoffeeDto): Promise<Coffee & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    remove(id: string): Promise<Coffee & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    recommendCoffee(coffee: Coffee): Promise<void>;
}
