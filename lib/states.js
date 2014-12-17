states = [
{
  id: 0,
  name: "AUTH Home",
  templateName: "home",
},
{
  id: 1,
  name: "AUTH, by pascuaalvi",
  templateName: "success",
},
{
  id: 2,
  name: "AUTH Register",
  templateName: "createAccount",
},
{
  id: 3,
  name: "AUTH Password Recovery",
  templateName: "recovery",
},
{
  id: 4,
  name: "AUTH Reset Email Sent",
  templateName: "emailSent",
},
{
  id: 5,
  name: "AUTH Profile",
  templateName: "editProfile",
}
];

// Sort by ID
_.sortBy(states,'id');

// Constants for different states
HOME_STATE   = 0;
SUCCESS_STATE  = 1;
CREATE_ACCOUNT_STATE  = 2;
RECOVERY_STATE = 3;
EMAIL_SENT_STATE = 4;
EDIT_PROFILE_STATE = 5;