import React from "react";
import { useNavigate } from "react-router-dom";
import { InputWrapper, Input } from "./style";

const InputSearch = ({ id, placeholder, value }) => {
  const navigate = useNavigate();
  const handleSubmit = ({ target, key }) => {
    if (key === "Enter" && target.value !== "") {
      navigate(`/search/${target.value}`);
      target.value = ""; // After search, we reset the input value
    }
    return null;
  };
  return (
    <>
    <InputWrapper>
     <Input
        id={id}
        placeholder={placeholder}
        onKeyUp={handleSubmit}
        value={value}
      >
      </Input> 
    </InputWrapper>
    </>
  );
};

export default InputSearch;
