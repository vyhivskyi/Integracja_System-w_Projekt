const mongoose = require("mongoose")
module.exports = () => {
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
    try {
        mongoose.connect("mongodb+srv://rushoskey:0419998020Fifa@vyhivskyi.tnhsue8.mongodb.net/?retryWrites=true&w=majority" , {useNewUrlParser: true})
        console.log("Connected to database successfully")
    } catch (error) {
        console.log(error);
        console.log("Could not connect database!")
    } 
}