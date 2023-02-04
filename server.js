const express = require('express')
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

app.use(cors());
app.use(express.json());

//conect to mongoose
// mongodb connection and notif 
mongoose.connect('mongodb+srv://jaspervillarosa:weelspargo@villarosacluster.pcl70ke.mongodb.net/capstone-database',
{useNewUrlParser: true, useUnifiedTopology: true});

// require route 
app.use('/', require("./routes/addDataRoute"));
app.use('/', require("./routes/addFarmerRoute"));

app.listen(3001, function(){
    console.log("Express is running at port 3001")
})