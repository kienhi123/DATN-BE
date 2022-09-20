import mongoose, { Schema } from 'mongoose';

const { ObjectId } = mongoose.Types;

const serviceSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    status: {
      type: Number,
      required: true,
    },
    ServiceStep_id: {
      type: ObjectId,
      ref: 'ServiceStep',
    },
    store_id: {
      type: ObjectId,
      ref: 'Store',
    },
  },
  { timestamps: true }
);

export default mongoose.model('Service', serviceSchema);
