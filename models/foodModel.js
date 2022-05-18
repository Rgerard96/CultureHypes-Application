import mongoose from 'mongoose';

const reviewSchema = mongoose.Schema(
  {
    name: String,
    rating: Number,
    comment: String,
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
);

const foodSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    name: String,
    description: String,
    category: String,
    options: [
      {
        optionName: String,
        optionList: [
          {
            optionType: String,
            optionPrice: {
              type: Number,
              default: 0.0,
            },
          },
        ],
      },
    ],
    image: String,
    reviews: [reviewSchema],
    rating: {
      type: Number,
      default: 0,
    },
    numReviews: {
      type: Number,
      default: 0,
    },
    price: {
      type: Number,
      default: 0.0,
    },
    countInStock: {
      type: Number,
      default: 0,
    },
    available: Boolean,
  },
  {
    timestamps: true,
  }
);

const Food = mongoose.models.Food
  ? mongoose.models.Food
  : mongoose.model('Food', foodSchema);

export default Food;
