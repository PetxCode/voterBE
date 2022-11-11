import mongoose from "mongoose";

const url: string = "mongodb://localhost/votersDB";
const newURL: string =
  "mongodb+srv://AuthClass:AuthClass@codelab.u4drr.mongodb.net/VotersDB?retryWrites=true&w=majority";
const urlOnline: string =
  "mongodb+srv://OneChurch:<OneChurch@cluster0.q3zol.mongodb.net/youthCouncil?retryWrites=true&w=majority";

mongoose.connect(newURL, () => {
  console.log("database is now connected...!");
});

export default mongoose;
