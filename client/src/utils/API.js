import axios from "axios";

export default {
  getSaved: function() {
    return axios.get("/api/savedposts");
  },
  // // Gets  with the given id
  // getBook: function(id) {
  //   return axios.get("/api/savedpost/" + id);
  // },
  // // Deletes with the given id
  // deleteBook: function(id) {
  //   return axios.delete("/api/savedpost/" + id);
  // },
  // Saves to the database
  savePost: function(savedPostData) {
    return axios.post("/api/save", savedPostData);
  }
};
