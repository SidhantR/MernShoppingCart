require("dotenv").config();

const productsData = require("./data/products");
const connectDB = require("./config/db");
const Product = require("./models/Product");

connectDB() // to connect to our mongo db instance

const importData = async () => {
    try{
        await Product.deleteMany({}) // delete all the product that is in the database
        await Product.insertMany(productsData) // insert everthing that is in our product data
        console.log("Data Imported");
        process.exit()
    } catch (error) {
        console.error("Error with data import ");
        process.exit(1);
    }
};

importData()// run the function immediately