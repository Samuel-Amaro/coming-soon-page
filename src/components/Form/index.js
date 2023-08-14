import React, { useState } from "react";
import Warning from "../Warning";

const REGEXP_EMAIL = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

export default function Form() {
  const [datas, setDatas] = useState({
    email: "",
    isValidEmail: false,
    message: ""
  });

  function handleSubmitForm(e) {
    e.preventDefault();
    
    if(datas.email === "" || datas.email.trim() === '') {
      setDatas({...datas, isValidEmail: false, message: "Whoops! It looks like you forgot to add your email"})
    }

    if(datas.email !== "" && !REGEXP_EMAIL.test(datas.email)) {
      setDatas({ ...datas, isValidEmail: false, message: "Please provide a valid email address" });
    }

    if (REGEXP_EMAIL.test(datas.email)) {
      setDatas({...datas, isValidEmail: true, message: "Good!"});
    }
  }

  function handleChangeInput(e) {
    setDatas({...datas, email: e.target.value});
  }

  return (
      <form
        name="form"
        className={datas.validEmail ? "form" : "form form_mg"}
        aria-label="Form subscribe notifications"
      onSubmit={handleSubmitForm}
      data-testid="form"
      >
        <div className="form__group">
          <div className="form__group-input">
            <input
              type="text"
              name="email"
              value={datas.email}
              className= "input"
              placeholder="Your email address..."
              aria-label="Your email address..."
              onChange={handleChangeInput}
              id="email"
            />
            {(datas.message && !datas.isValidEmail) && <Warning warning={datas.message} />}
             {datas.message && datas.isValidEmail && <span className="sucess">Good!</span>} 
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