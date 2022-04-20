const mongoose = require('mongoose');

const connectDB = async () => {
  await mongoose.connect(`mongodb+srv://leonsuarez:${process.env.MONGODB_ATLAS_PSW}@loginsystem.kzabo.mongodb.net/${process.env.MONGODB_ATLAS_DB_NAME}?retryWrites=true&w=majority`, {
    useNewUrlParser: true
  });
  console.log('MongoDB connected');
}

module.exports = connectDB;