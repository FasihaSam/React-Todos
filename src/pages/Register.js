import classes from "./Register.module.css";
import Button from "../UI/Button";
import { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
    confirmPassword: "",
  });
  const onChangeHandler = (event) => {
    const { id, value } = event.target;
    setFormData({ ...formData, [id]: value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(formData.userName, "register");
    try {
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: formData.userName,
          password: formData.password,
          confirmPassword: formData.confirmPassword,
        }),
      });
      if (response.ok) {
        console.log('Registration successful!');
    }
    else {
        console.error('Registration failed');
    }
    } catch (error) {
      console.error("ERROR:", error);
    }
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <div className={classes.register}>
          <h4 className={classes.heading}>Register for free</h4>
          <input
            type="text"
            id="userName"
            className={classes.input}
            placeholder="        UserName"
            value={formData.userName}
            onChange={onChangeHandler}
            autoComplete = "off"
            required
          />

          <input
            type="password"
            id="password"
            className={classes.input}
            placeholder="        Password"
            value={formData.password}
            onChange={onChangeHandler}
            autoComplete = "off"
            required
          />

          <input
            type="password"
            id="confirmPassword"
            className={classes.input}
            placeholder="        Confirm Password"
            value={formData.confirmPassword}
            onChange={onChangeHandler}
            autoComplete="off"
            required
          />

          <Button type="submit" className="buttonAuth">
            Register
          </Button>
        </div>
      </form>
      <Link to="/" className={classes.link}>
        Have an account? Login now
      </Link>
    </>
  );
}
export default Register;
