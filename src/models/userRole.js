import mongoose from 'mongoose';

const userRoleSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

export default mongoose.model('UserRole', userRoleSchema);
