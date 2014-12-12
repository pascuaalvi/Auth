// Schema for form
userSchema = new SimpleSchema ({
  username:{
    type: String,
    label: "Username",
    max: 50,
    min: 5
  },
  password:{
    type: String,
    label: "Password",
    min: 8
  },
  passwordConfirm:{
    type: String,
    label: "Confirm Password",
    min: 8,
    custom: function () {
      if (this.value !== this.field('password').value) {
        return "passwordMismatch";
      }
    }
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
    label: "Subscribe to Newsletter",
    optional: true
  }
});

SimpleSchema.messages({
  "passwordMismatch": "Passwords do not match."
});

