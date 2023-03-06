import './App.css';
import Form from './components/Form';
import { useState, useEffect } from 'react';
import * as yup from 'yup';
import axios from 'axios';

const schema = yup.object().shape({
  firstName: yup.string().required('first name is required'),
  lastName: yup.string().required('last name is required'),
  email: yup.string().email(),
  password: yup.string().required('last name is required').min(8, 'password must be at least eight characters...'),
  terms: yup.boolean().oneOf([true], "you MUST agree to the terms...")
})

const defaultData = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  terms: ""
}

function App() {
  // state
  const [form, setForm] = useState(defaultData);
  const [disabled, setDisabled] = useState(true);
  const [errors, setErrors] = useState(defaultData);

  // use schema to identify errors
  const setFormErrors = (name, value) => {
    yup.reach(schema, name).validate(value)
    // for an asynchronous promise, use then.()
      .then(() => {
        setErrors({ ...errors, [name]: '' })
      })
      .catch(err => {
        setErrors({ ...errors, [name]: err.errors[0] })
      })
  }

  // use onChange events to update the form or identify errors
  const handleChange = event => {
    const { checked, value, name, type } = event.target;
    // if checkbox type, then use "checked" from event.target, else use "value" from event.target
    const valueToUse = type === "checkbox" ? checked : value;
    setFormErrors(name, valueToUse);
    setForm({ ...form, [name]: valueToUse});
  }

  // use schema to validate button status - effect runs every time the "form" is updated
  useEffect(() => {
    schema.isValid(form)
    .then(valid => setDisabled(!valid))
    .catch(err => console.error(err))
  }, [form])

  return (
    <div className="App">
      <Form disabled={disabled} setDisabled={setDisabled} handleChange={handleChange} form={form} errors={errors} />
    </div>
  );
}

export default App;
