export const schema = {
  id: "loginForm",
  formHeading: "Log In",
  submitText: "Log In",
  fields: [
    {
      label: "Email",
      type: "text",
      id: "email",
      placeholder: "email",
      widget: 'input',
    },
    {
      label: "Password",
      type: "password",
      id: "password",
      placeholder: "password",
      widget: 'input',
    }
  ]
};
