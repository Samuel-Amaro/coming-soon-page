import React from "react";
import Warning from "./Warning";

class Form extends React.Component{
  constructor(props) {
    super(props);

    this.REGEXP_EMAIL = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

    this.handleSubmitForm = this.handleSubmitForm.bind(this);
    this.handleChangeInput = this.handleChangeInput.bind(this);

    this.state = {
      email: '',
      isValidEmail: true,
      message: ''
    };
  }

  handleSubmitForm(event) {
    event.preventDefault();

    if(this.state.email === "" || this.state.email.trim() === '') {
      this.setState({
        isValidEmail: false,
        message: "Whoops! It looks like you forgot to add your email"
      });
    }

    if(this.state.email !== "" && !this.REGEXP_EMAIL.test(this.state.email)) {
      this.setState({
        isValidEmail: false,
        message: "Please provide a valid email address"
      });
    }
  }

  handleChangeInput(event) {
    this.setState({email: event.target.value});
  }

  render() {
    let warning, validEmail = this.state.isValidEmail;
    
    if(!this.state.isValidEmail) {
      warning = <Warning warning={this.state.message} />;
    }

    return (
      <form
        name="form"
        className="form"
        aria-label="Form subscribe notifications"
        onSubmit={this.handleSubmitForm}
      >
        <div className="form__group">
          <div className="form__group-input">
            <input
              type="text"
              name="email"
              value={this.state.email}
              className={
                validEmail
                  ? "input input__email"
                  : "input input__email input__email_invalid"
              }
              placeholder="Your email address..."
              aria-label="Your email address..."
              onChange={this.handleChangeInput}
              id="email"
            />
            {warning}
          </div>
          <button
            type="submit"
            className="button button__submit"
            value="Notify Me"
            aria-pressed="true"
            aria-label="Notify Me"
          >
            Notify Me
          </button>
        </div>
      </form>
    );
  }
}

export default Form;