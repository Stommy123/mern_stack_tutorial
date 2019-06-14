import React from 'react';
import classNames from 'classnames';

const FileInput = ({ label, placeholder, id, onUpload, required, classes = [] }) => (
  <div className="custom-file">
    <input
      id={id}
      className={classNames('custom-file-input', ...classes)}
      required={required}
      type="file"
      placeholder={placeholder}
      onChange={e => onUpload({ id, value: e.target.files[0] })}
    />
    <label className="custom-file-label" for="customFile">
      {label}
    </label>
  </div>
);

export default FileInput;