
import mongoose from "mongoose";
async function connect() {
    await mongoose.connect('mongodb+srv://elisheva:Ez286304@cluster0.o62vcrk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
}

export default connect;


