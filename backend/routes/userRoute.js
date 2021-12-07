const express = require('express');
const { registerUser,loginUser,logout, forgotPassword, resetPassword, getUserDetails, updatePassword, updateProfile, getAllUser, getSingleUser ,updateUserRole, deleteUser} = require('../controllers/userCoontroller');
const { isAuthenticatedUser,authorizeRoles } = require('../middleware/authentication');

const router = express.Router();

router.route("/register").post(registerUser);

router.route("/login").post(loginUser);


router.route("/password/forgotPassword").post(forgotPassword);


router.route("/password/reset/:token").put(resetPassword);

router.route("/logout").get(logout);

router.route("/me").get(isAuthenticatedUser,getUserDetails)


router.route("/password/update").put(isAuthenticatedUser,updatePassword);

router.route("/me/update").put(isAuthenticatedUser,updateProfile);


router
  .route("/admin/users")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getAllUser);

router
  .route("/admin/users/:id")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getSingleUser)
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateUserRole)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteUser);




module.exports = router;