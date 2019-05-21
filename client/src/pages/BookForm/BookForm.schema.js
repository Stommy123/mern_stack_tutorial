export const schema = {
  id: 'bookForm',
  formHeading: 'Create a new book',
  submitText: 'Create Book',
  fields: [
    {
      id: 'book',
      label: 'Title',
      type: 'text',
      placeholder: 'book',
      required: true
    },
    {
      id: 'author',
      label: 'Author',
      type: 'text',
      placeholder: 'author',
      required: true
    }
  ]
};
