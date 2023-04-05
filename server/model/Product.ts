import mongoose, { Schema } from "mongoose";

interface Product {
  name: string;
  status: string;
  quantity: number;
  price: number;
  description: string | null;
  createdAt?: Date | null;
  updatedAt?: Date | null;
}

const Product = new Schema<Product>({
  name: { type: String, default: "", maxlength: 255 },
  status: { type: String, default: "active", required: true },
  quantity: { type: Number, default: 0, max: 10 ^ 5 },
  price: { type: Number, default: 0, max: 10 ^ 5 },
  description: { type: String, default: "", maxlength: 1000 },
  createdAt: { type: Date, default: Date.now(), required: true },
  updatedAt: { type: Date, default: Date.now(), required: true },
});

export default mongoose.model('Product', Product);