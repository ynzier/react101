import React, { useState, useEffect } from "react";

const Form = (props) => {
  const [values, setValue] = useState({ email: "", number1: 0, number2: 0 });
  const [cal, setCal] = useState(0);
  const onChange = (event) => {
    const { name, value } = event.target;
    setValue((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  console.log("values", values);
  // componentMount 1Function
  useEffect(() => {
    alert("mount");
    setValue((prev) => {
      return {
        ...prev,
        number1: 10,
        number2: 2,
      };
    });
  }, []);

  //componentUnMount
  useEffect(() => {
    return () => {
      alert("unmount");
    };
  }, []);

  // componentUpdate
  useEffect(() => {
    setCal(Number(values.number1) + Number(values.number2));
  }, [values.number1, values.number2]);

  return (
    <form className="form">
      <input type="email" id="email" name="number1" onChange={onChange} />
      <input
        type="number"
        style={{ marginBottom: "1rem" }}
        name="number2"
        onChange={onChange}
      />
      <h2>{cal}</h2>
      <button type="submit">onSubmit</button>
    </form>
  );
};

export default Form;
