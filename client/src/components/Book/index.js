import React from "react";

const Book = ({ _id, title, author, rowId }) => (
  <tr data={_id}>
    <th className="text-info" scope="row">
      {rowId}
    </th>
    <td className="text-info">{title}</td>
    <td className="text-info">{author}</td>
  </tr>
);

export default Book;
