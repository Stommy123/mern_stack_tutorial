export const schema = {
  id: 'registerForm',
  formHeading: 'Sign Up',
  submitText: 'Sign Up',
  fields: [
    {
      label: 'Name',
      type: 'text',
      id: 'name',
      placeholder: 'name',
      required: true,
      widget: 'input',
    },
    {
      label: 'Email',
      type: 'email',
      id: 'email',
      placeholder: 'name@email.com',
      required: true,
      widget: 'input',
    },
    {
      label: 'Favorite Book',
      type: 'text',
      id: 'favoriteBook',
      placeholder: 'title of book',
      required: true,
      widget: 'input',
    },
    {
      label: 'Password',
      type: 'password',
      id: 'password',
      required: true,
      widget: 'input',
    },
    {
      label: 'Confirm Password',
      type: 'password',
      id: 'confirmPassword',
      required: true,
      widget: 'input',
    }
  ]
};
