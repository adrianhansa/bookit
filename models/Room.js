import mongoose from 'mongoose';

const roomSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please enter the room name.'],
      trim: true,
      maxlength: [100, 'The room name cannot exceed 100 characters.'],
    },
    price: {
      type: Number,
      required: [true, 'Please enter the room price.'],
      trim: true,
      maxLength: [4, 'The room name cannot exceed 4 figures.'],
    },
    description: {
      type: String,
      required: [true, 'Please enter the description.'],
    },
    address: {
      type: String,
      required: [true, 'Please enter the address.'],
    },
    guestCapacity: {
      type: Number,
      required: [true, 'Please enter the room capacity.'],
    },
    numOfBeds: {
      type: Number,
      required: [true, 'Please enter the number of beds in room.'],
    },
    internet: { type: Boolean, default: false },
    breakfast: { type: Boolean, default: false },
    airConditioned: { type: Boolean, default: false },
    petsAllowed: { type: Boolean, default: false },
    roomdCleaning: { type: Boolean, default: false },
    ratings: { type: Number, default: 0 },
    numOfReviews: { type: Number, default: 0 },
    images: [
      {
        public_id: { type: String, required: true },
        url: { type: String, required: true },
      },
    ],
    category: {
      type: String,
      required: [true, 'Please select the room category.'],
      enum: {
        values: ['King', 'Single', 'Twin'],
        message: 'Please select the correct category for room.',
      },
    },
    reviews: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: 'users',
        },
        name: { type: String, required: true },
        rating: { type: Number, required: true },
        comment: { type: String, required: true },
      },
    ],
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users',
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.rooms || mongoose.model('rooms', roomSchema);
