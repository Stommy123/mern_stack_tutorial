export const schema = {
  id: 'bookForm',
  formHeading: 'Create a new book',
  submitText: 'Create Book',
  fields: [
    {
      label: 'Title',
      type: 'text',
      placeholder: 'book',
      required: true
    },
    {
      label: 'Author',
      type: 'text',
      placeholder: 'author',
      required: true
    }
  ]
};
