import mongoose, { Schema  } from "mongoose";

enum role{
    Admin = "Admin",
    Editor = "Editor",
    Viewer = "Viewer"
}

const userSchema = new Schema({
    user_id : {type : String, unique : true, require: true},
    email : {type : String ,unique: true, require: true},
    password : {type: String , require: true},
    role : {type:String , enum:Object.values(role) ,default:"Viewer"}
})


const artistSchema = new Schema({
    artist_id : {type: String, unique: true, require : true},
    artist_name : {type: String , require: true},
    grammy : {type: Boolean , require : true},
    hidden : {type : Boolean , require : true}
})

const albumSchema = new Schema({
    album_id : {type: String, unique: true, require : true},
    album_name : {type: String , require: true},
    year : {type: Number , require : true},
    hidden : {type : Boolean , require : true},
    artist_id : {type : mongoose.Types.ObjectId , require: true , ref:"artists"}
})

const trackSchema = new Schema({
    track_id : {type: String, unique: true, require: true},
    name : {type: String, require: true},
    duration : {type : Number, require: true},
    hidden : {type: Boolean , require: true} ,
    album_id : {type:mongoose.Types.ObjectId , require: true, ref:"albums"},
    artist_id : {type:mongoose.Types.ObjectId, require: true, ref:"artists"}
})

const likeSchema = new Schema({
    favorite_id : {type: mongoose.Types.ObjectId , require: true, ref:"tracks"}
})


const userModel = mongoose.model("users",userSchema);
const artistModel = mongoose.model("artists",artistSchema);
const albumModel = mongoose.model("albums",albumSchema);
const trackModel = mongoose.model("tracks",trackSchema);
const likeModel = mongoose.model("like", likeSchema);


export {userModel,artistModel,albumModel,trackModel,likeModel};