//import { model, Schema } from 'mongoose';
import mongoose from 'mongoose';
import Schema from 'mongoose';

//TODO: Add types for schema



interface ITodo{

    name: string,
    description:string,
    status :boolean,
    user:  mongoose.Types.ObjectId,
}

const todoSchema = new mongoose.Schema<ITodo>({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, { timestamps: true })

/*
const hider =
  (props: (keyof ITodo)[]) =>
  (doc: ITodo, ret: Partial<ITodo>, options: any) => {
    props.forEach((prop: keyof ITodo) => {
      if (ret.hasOwnProperty(prop)) delete ret[prop];
    });
    return ret;
  };

todoSchema.set('toObject', {
  virtuals: true,
  transform: hider(['user', 'user']),
});
todoSchema.set('toJSON', { virtuals: true, transform: hider(['user']) });

*/


export default mongoose.model<ITodo>('Todo', todoSchema);