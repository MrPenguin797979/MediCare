Validator({
  form: "#popup",
  rules: {
    required: ["#username", "#email", "#password"],
    email: ["#email"],
    password: {
      selector: ["#password"],
      length: 12,
      letter: { uppercase: 1, lowercase: 1 }, // at least once number in password
    },
  },
});
