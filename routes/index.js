const path = require("path");
const router = require("express").Router();



const applicationController = require("../controllers/applicationController");

router.route('/api/snoo/:sub'  )
  .get(applicationController.snooScrape)

router.route('/api/save')
.post(applicationController.save)


router.route('/api/savedposts')
.get(applicationController.getSaved)

  // If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});


module.exports = router;

