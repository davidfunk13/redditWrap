import axios from "axios";

export default {
  snooScrape: function(searchQuery) {
    return axios.get("/api/snoo/" + searchQuery).then(res => {
      let response = res.data;
      return response;
    });
  }
};
