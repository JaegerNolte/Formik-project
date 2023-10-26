import React from "react";
import {useFormik} from "formik";

function App() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: values =>{
      alert("Login Successful");
    },
    validate: values => {
      let errors = {};
      if(!values.name) errors.name = 'Field required';
      if(!values.password) errors.password = 'Field required';
      if(!values.email) { errors.email= 'Field required'; } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
      }
      return errors;
    }
  });

  return (
    <div>
    <form onSubmit={formik.handleSubmit}>
      <div>Username</div>
      <input id="name" name="name" type="text" onChange={formik.handleChange} value={formik.values.name}/>
      {formik.errors.name ? <div style={{color:'red'}}>{formik.errors.name}</div>: null}

      <div>Email</div>
      <input id="EmailField" name="email" type="text" onChange={formik.handleChange} value={formik.values.email}/>
      {formik.errors.email ? <div style={{color:'red'}}>{formik.errors.email}</div>: null}

      <div>Password</div>
      <input id="pswField" name="password" type="text" onChange={formik.handleChange} value={formik.values.password}/>
      {formik.errors.password ? <div style={{color:'red'}}>{formik.errors.password}</div>: null}
      <button id="submitBtn" type="submit">Submit</button>
    </form>
    </div>
  );
}

export default App;
