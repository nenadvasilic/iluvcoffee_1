import * as mongoose from 'mongoose';
export declare class Event extends mongoose.Document {
    type: string;
    name: string;
}
export declare const EventSchema: mongoose.Schema<Event, mongoose.Model<Event, any, any, any, any>, {}, {}, any, {}, "type", Event>;
