const express = require("express");
const {
  getAllcourses,
  createcourse,
  updatecourse,
  deletecourse,
  getcourseDetails,
  createcourseReview,
  getcourseReviews,
  deleteReview,
  getAdmincourses,
} = require("../controllers/courseController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

router.route("/courses").get(getAllcourses);

router
  .route("/admin/courses")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getAdmincourses);

router
  .route("/admin/course/new")
  .post(isAuthenticatedUser, authorizeRoles("admin"), createcourse);

router
  .route("/admin/course/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), updatecourse)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deletecourse);

router.route("/course/:id").get(getcourseDetails);

router.route("/review").put(isAuthenticatedUser, createcourseReview);

router
  .route("/reviews")
  .get(getcourseReviews)
  .delete(isAuthenticatedUser, deleteReview);

module.exports = router;
