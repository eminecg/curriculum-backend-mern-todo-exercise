import {model, Schema} from 'mongoose'

interface IUser{

    fullName?: string,
    email?:string,
    pasword :string,
    timestamps:boolean,
}


//TODO: Add types for schema
const userSchema = new Schema <IUser>({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }

}, {timestamps: true})

export default model('User', userSchema)