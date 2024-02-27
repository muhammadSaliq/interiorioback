import mongoose from 'mongoose';
const mongodbURI = process.env.mongodbURI || "mongodb://shaikhahsanali0303:interiordesigning@ac-3d3rb0h-shard-00-00.35agjm7.mongodb.net:27017,ac-3d3rb0h-shard-00-01.35agjm7.mongodb.net:27017,ac-3d3rb0h-shard-00-02.35agjm7.mongodb.net:27017/?ssl=true&replicaSet=atlas-48khdj-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0";
/////////////////////////////////////////////////////////////////////////////////////////////////

//const mongodbURI = process.env.mongodbURI || "mongodb+srv://shaikhahsanali0303:interiordesigning@cluster0.35agjm7.mongodb.net/?retryWrites=true&w=majority";


const imageSchema = new mongoose.Schema({
  service: { type: String  ,  required: true },
  project: { type: String  ,  required: true },
  description: { type: String  ,  required: true },
    imageUrl: { type: String  ,  required: true },
    createdOn: { type: Date, default: Date.now },
  });
  export const imageModel = mongoose.model('ImageAll', imageSchema);

  const shopSchema = new mongoose.Schema({
    name: { type: String  ,  required: true },
    price: { type: String  ,  required: true },
  
      imageUrl: { type: String  ,  required: true },
      createdOn: { type: Date, default: Date.now },
    });
    export const shopModel = mongoose.model('shop', shopSchema);
  
mongoose.connect(mongodbURI);
////////////////mongodb connected disconnected events///////////////////////////////////////////////
mongoose.connection.on('connected', function () {//connected
    console.log("Mongoose is connected");
});

mongoose.connection.on('disconnected', function () {//disconnected
    console.log("Mongoose is disconnected");
    process.exit(1);
});

mongoose.connection.on('error', function (err) {//any error
    console.log('Mongoose connection error: ', err);
    process.exit(1);
});

process.on('SIGINT', function () {/////this function will run jst before app is closing
    console.log("app is terminating");
    mongoose.connection.close(function () {
        console.log('Mongoose default connection closed');
        process.exit(0);
    });
});
////////////////mongodb connected disconnected events///////////////////////////////////////////////

export default imageModel;
