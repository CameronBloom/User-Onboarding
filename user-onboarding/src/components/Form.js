export default function Form(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <label>First Name&nbsp;
        <input 
          type="text"
          id="firstName"
          name="firstName"
          value={props.form["firstName"]}
          onChange={props.handleChange}
        />
      </label>
      <div style={{ color: "red" }}>{props.errors.firstName}</div>
      
      <label>Last Name&nbsp;
        <input 
          type="text"
          id="lastName"
          name="lastName"
          value={props.form["lastName"]}
          onChange={props.handleChange}
        />
      </label>
      <div style={{ color: "red" }}>{props.errors.lastName}</div>
      <label>Email&nbsp;
        <input 
          type="email"
          id="email"
          name="email"
          value={props.form["email"]}
          onChange={props.handleChange}
        />
      </label>
      <div style={{ color: "red" }}>{props.errors.email}</div>
      <label>Password&nbsp;
        <input 
          type="password"
          id="password"
          name="password"
          value={props.form["password"]}
          onChange={props.handleChange}
        />
      </label>
      <div style={{ color: "red" }}>{props.errors.password}</div>
      <label>Terms of Service&nbsp;
        <input 
          type="checkbox"
          id="terms"
          name="terms"
          checked={props.form["terms"]}
          onChange={props.handleChange}
        />
      </label>
      <div style={{ color: "red" }}>{props.errors.terms}</div>
      <button disabled={props.disabled}>Submit</button>
    </form>
  )
}