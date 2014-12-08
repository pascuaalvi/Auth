// Schema for form
userSchema = new SimpleSchema ({
  username:{
    type: String,
    label: "Username",
    max: 50
  },
  password:{
    type: String,
    label: "Password",
    max: 50
  },
  passwordConfirm:{
    type: String,
    label: "Confirm Password",
    max: 50
  },
  email: {
    type: String,
    label: "Email",
    max: 50
  },
  name: {
    type: String,
    label: "Name",
    max: 50,
    optional: true
  },
  subscribe: {
    type: Boolean,
    label: "Subscribe to Newsletter"
  }
});