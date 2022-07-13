/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
export declare class CoffeesController {
    private readonly coffeesService;
    constructor(coffeesService: CoffeesService);
    findAll(paginationQuery: PaginationQueryDto): Promise<(import("./entities/coffee.entity").Coffee & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findOne(id: string): Promise<import("./entities/coffee.entity").Coffee & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    create(createCoffeeDto: CreateCoffeeDto): Promise<import("./entities/coffee.entity").Coffee & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    update(id: string, updateCoffeeDto: UpdateCoffeeDto): Promise<import("./entities/coffee.entity").Coffee & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    remove(id: string): Promise<import("./entities/coffee.entity").Coffee & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
