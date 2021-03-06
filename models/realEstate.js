const mongoose = require("mongoose");

const { Schema } = mongoose;

const realEstateSchema = Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    agreePrivacy: {
      type: Boolean,
      required: true,
    },
    createdAt: {
      type: Date,
      required: true,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      required: true,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = realEstateSchema;
