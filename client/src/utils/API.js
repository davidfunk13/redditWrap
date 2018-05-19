import axios from "axios";

export default {
  getSaved: function () {
    return axios.get("/api/savedposts");
  },
  // Saves to the database
  savePost: function (savedPostData) {
    return axios.post("/api/save", savedPostData);
  }
};
