// Errors
import NotFound from "./errors/404";

// Auth
import Login from "./auth/login";
import ForgotPassword from "./auth/forgot-password";
import SetNewPassword from "./auth/set-new-password";

// Splash
import Splash from "./splash";

// ADMIN MODULES
import * as ADMIN from "./ADMIN";

export {
  // Errors
  NotFound,

  // Auth
  Login,
  ForgotPassword,
  SetNewPassword,

  // Splash
  Splash,

  // Roles Based
  ADMIN,
};
