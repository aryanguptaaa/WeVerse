const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    title:{type:String, required: true,unique: true },
    description: {type:String},
    img: {type:String},
    imgTitle: {type:String},
    imgSmall: {type:String},
    trailer: {type:String},
    video: {type:String},
    year: {type: String},
    limit: {type: Number},
    genre: {type: String},
    isSeries: {type: Boolean, default: false},
    access: {type: String, default: "Public"},
},
{timestamps:true}
);

module.exports = mongoose.model('Movie', MovieSchema);