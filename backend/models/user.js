const mongoose=require("mongoose")

const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true
    },
    email: {
      type: String,
      required: true
    }
 }, { timestamps: true })

 modules.exports=mongoose.model("User",userSchema)