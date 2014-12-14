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
}
];

// Sort by ID
_.sortBy(states,'id');

// Constants for different states
HOME_STATE   = 0;
SUCCESS_STATE  = 1;
CREATE_ACCOUNT_STATE  = 2;
