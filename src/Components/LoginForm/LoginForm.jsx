import React from "react";
import { useFormik } from 'formik';
import "./LoginForm.css";
function RegisterForm() {
    
  const formik = useFormik({
    initialValues: {
      email: "",
      username: "",
      password: "",
      repassword: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="register">
      <h1>Register</h1>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          onChange={formik.handleChange}
          value={formik.values.email}
          id="email"
          name="email"
        />
        <label htmlFor="username">Username</label>
        <input
          onChange={formik.handleChange}
          value={formik.values.username}
          id="username"
          name="username"
        />
        <label htmlFor="password">Password</label>
        <input
          onChange={formik.handleChange}
          value={formik.values.password}
          id="password"
          name="password"
        />
        <label htmlFor="repassword">Re-enter Password</label>
        <input
          onChange={formik.handleChange}
          value={formik.values.repassword}
          id="repassword"
          name="repassword"
        />

        <button className="submit" type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegisterForm;