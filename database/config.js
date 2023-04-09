const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    mongoose.connect(process.env.MONGODB_CNN);
    console.log(process.env.MONGODB_CNN);
    // await mongoose.connect(process.env.MONGODB_CNN, {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    //   useCreateIndex: true,
    //   useFindAndModify: false,
    // });
    console.log('Base de datos online');
  } catch (error) {
    console.log();
    throw new Error("Error en conexión a BD");
  }
};

module.exports = {
  dbConnection,
};
