import mongoose from 'mongoose'
const Schema = mongoose.Schema

export {
  Taco
}

const tacoSchema = mongoose.Schema({
 }, {
  timestamps: true
})

const Taco = mongoose.model("Taco", tacoSchema)