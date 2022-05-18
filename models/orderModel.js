import mongoose from 'mongoose';

const orderSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,

      ref: 'User',
    },
    orderItems: [
      {
        name: String,
        qty: Number,
        image: String,
        price: Number,
        food: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Food',
        },
      },
    ],
    deliveryOption: String,
    deliveryAddress: {
      address: String,
      city: String,
      postalCode: String,
    },
    paymentMethod: {
      type: String,
    },
    paymentResult: {
      id: String,
      status: String,
      update_time: String,
      email_address: String,
    },
    taxPrice: {
      type: Number,
      default: 0.0,
    },
    deliveryPrice: {
      type: Number,
      default: 0.0,
    },
    totalPrice: {
      type: Number,
      default: 0.0,
    },
    isPaid: {
      type: Boolean,
      default: false,
    },
    paidAt: {
      type: Date,
    },
    isHanded: {
      type: Boolean,
      default: false,
    },
    handedAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.models.Order
  ? mongoose.models.Order
  : mongoose.model('Order', orderSchema);

export default Order;
