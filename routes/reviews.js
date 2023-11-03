const express = require("express");
const router = express.Router();
const reviewsCtrl = require("../controllers/reviews");

router.post("/games/:id/reviews", reviewsCtrl.create);
router.delete("/reviews/:id", reviewsCtrl.deleteReview);
router.put("/reviews/:id", reviewsCtrl.editReview);

module.exports = router;