import { useState } from 'react';

export const useFormInputs = () => {
  const [input, setInput] = useState({});
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };
  return [input, handleInputChange];
};
