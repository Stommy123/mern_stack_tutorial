export const schema = {
  id: "bookForm",
  formHeading: "Create a new book",
  submitText: "Create Book",
  fields: [
    {
      id: "title",
      label: "Title",
      type: "text",
      placeholder: "title",
      required: true,
      widget: "input"
    },
    {
      id: "author",
      label: "Author",
      type: "text",
      placeholder: "author",
      required: true,
      widget: "input"
    }
  ]
};
