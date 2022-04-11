const mongoose = require('mongoose');
// mongosh "mongodb+srv://cluster0.wkvuo.mongodb.net/myFirstDatabase" --apiVersion 1 --username leonsuarez

const connectDB = async () => {
  await mongoose.connect(`mongodb+srv://leonsuarez:${process.env.MONGO_ATLAS_PSW}@cluster0.wkvuo.mongodb.net/movies-auth?retryWrites=true&w=majority`, {
    useNewUrlParser: true
  });
  console.log('MongoDB connected');
}


module.exports = connectDB;