const mongoose = require("mongoose");

const ownerSchema = mongoose.Schema({
    fullname:{
        type: String,
        minlength: 3,
        trim: true
     },
     email: String,
     password: String,
    
     isadmin: Boolean,
     products: {
        type: Array,
        default: []
     },
     picture: Number,
     gstin: String
});

module.exports = mongoose.model("owner", ownerSchema);