import React, { useRef, useState } from 'react'

const useUploader = (value) => {
  const inputRef = useRef(null);
  const [file, setFile] = useState();

  const handleChange = (event) => {
    setFile(event.target.files[0]);
  };

  return {inputRef, handleChange};
};

export default useUploader
