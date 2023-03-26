import {Schema, Types, model, Model } from 'mongoose';
import { IStudent } from '../interfaces/student.interface';

const StudentSchema = new Schema<IStudent>
(
    {
        Id:{
            type:Number,
            required:true
        },
        Name:{
            type:String,
            required:true
        },
        LastName:{
            type:String,
            required:true
        },
        Age:{
            type:Number,
            required:true
        },
        Genre:{
            type:String,
            enum:['HOMBRE', 'MUJER'],
            required:true
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
)

const StudentModel = model('Students', StudentSchema);

export default StudentModel;