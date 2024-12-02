import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://food:<password>@cluster0.wdni7.mongodb.net/Food_Ordering').then(()=>{
       console.log('DB connected') ;
    })
}