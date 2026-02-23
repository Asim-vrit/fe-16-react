import { useRef, useState } from "react";

function Contact() {
  const emailRef = useRef();
  const phoneRef = useRef();
  const descRef = useRef();
  const [formErrors, setFormErrors] = useState({
    email: "",
    phone: "",
    desc: "",
  });
  function onSubmit() {
    const data = {
      email: emailRef.current.value,
      phone: phoneRef.current.value,
      desc: descRef.current.value,
    };
    if (!data.email) {
      setFormErrors((prev) => {
        return { ...prev, email: "Please enter email" };
      });
    }
    if (!data.phone) {
      setFormErrors((prev) => {
        return { ...prev, phone: "Please enter a phone number" };
      });
    }
    console.log(data);
  }
  console.log("hello i am being re-rendered");
  return (
    <div>
      <div>
        <label htmlFor="email">
          Email:
          <input ref={emailRef} name="email" />
        </label>
      </div>{" "}
      {formErrors.email && (
        <div style={{ color: "red" }}>{formErrors.email}</div>
      )}
      <br />
      <div>
        <label htmlFor="phone-number">
          Phone Number:
          <input ref={phoneRef} name="phone-number" />
        </label>
      </div>
      {formErrors.phone && (
        <div style={{ color: "red" }}>{formErrors.phone}</div>
      )}
      <br />
      <div>
        <label htmlFor="desc">
          Description:
          <textarea ref={descRef} name="desc" />
        </label>
      </div>
      <button onClick={onSubmit}>Submit</button>
    </div>
  );
}

export default Contact;
