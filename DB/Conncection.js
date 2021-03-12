const mongoose = require('mongoose');

const URI ="mongodb+srv://utd:utd123456@cluster0.15vyw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const connectDB = async () => {
  await mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  });
  console.log('conexion exitosa');
};

module.exports = connectDB;
