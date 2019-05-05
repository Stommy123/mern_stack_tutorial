export const schema = {
  id: "registerForm",
  formHeading: "Sign Up",
  submitText: "Sign Up",
  fields: [
    {
      label: "Name",
      type: "text",
      id: "name",
      placeholder: "name",
      required: true
    },
    {
      label: "Email",
      type: "email",
      id: "email",
      placeholder: "name@email.com",
      required: true
    },
    {
      label: "Favorite Book",
      type: "text",
      id: "favoriteBook",
      placeholder: "title of book",
      required: true
    },
    {
      label: "Password",
      type: "password",
      id: "password",
      required: true
    },
    {
      label: "Confirm Password",
      type: "password",
      id: "confirmPassword",
      required: true
    }
  ]
};
