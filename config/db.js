const mongoose=require("mongoose");
const connection=mongoose.connect("mongodb+srv://vipul:vatsa@cluster0.1rrdslm.mongodb.net/blog?retryWrites=true&w=majority")

module.exports={
    connection
}