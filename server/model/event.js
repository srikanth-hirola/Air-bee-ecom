const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  draft: Boolean,
  name: {
    type: String,
    // required: [true, 'Please enter your event product name!'],
  },
  description: {
    type: String,
    // required: [true, 'Please enter your event product description!'],
  },
  productArray: Array,
  // category:{
  //     type: String,
  //     required:[true,"Please enter your event product category!"],
  // },
  start_Date: {
    type: Date,
    // required: [true, 'Please Start Date of event !'],
  },
  Finish_Date: {
    type: Date,
    // required: [true, 'Please End Date of event !'],
  },
  status: {
    type: String,
    // default: 'Running',
  },
  // tags:{
  //     type: String,
  // },
  // originalPrice:{
  //     type: Number,
  // },
  // discountPrice:{
  //     type: Number,
  //     required: [true,"Please enter your event product price!"],
  // },
  // stock:{
  //     type: Number,
  //     required: [true,"Please enter your event product stock!"],
  // },
  images: [
    {
      public_id: {
        type: String,
        // required: true,
      },
      url: {
        type: String,
        // required: true,
      },
    },
  ],
  shopId: {
    type: String,
    required: true,
  },
  shop: {
    type: Object,
    required: true,
  },
  sold_out: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model('Event', eventSchema);
