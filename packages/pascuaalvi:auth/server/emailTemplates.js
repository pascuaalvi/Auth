Accounts.emailTemplates.siteName = "AUTH System";
// Not a real email!!!
Accounts.emailTemplates.from = "Alvin Pascual <pascuaalvi@auth.com>";

Accounts.emailTemplates.verifyEmail.subject = function (user) {
  return "AUTH Verify Email for "+user.username+".";
}

Accounts.emailTemplates.verifyEmail.text = function (user, url) {
   return "Thank you for using AUTH, the best Authentication System in the whole wide room.\n\n"
     + " To activate your account, simply click the link below:\n\n"
     + url;
}

Accounts.emailTemplates.resetPassword.subject = function (user) {
  return "AUTH Reset Password for "+user.username+".";
}

Accounts.emailTemplates.resetPassword.text = function (user, url) {
   return "Thank you  for using AUTH, the best Authentication System in the whole wide room.\n\n"
     + " To reset your password, simply click the link below:\n\n"
     + url;
}