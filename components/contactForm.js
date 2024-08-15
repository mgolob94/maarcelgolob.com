import React, { useState } from "react";
import { useTranslations } from "next-intl";

const ContactForm = () => {
  const t = useTranslations();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formMessage, setFormMessage] = useState("");
  const [errors, setErrors] = useState({}); // State to keep track of errors

  // Function to validate form fields
  const validate = (name, email, message) => {
    const errors = {};
    if (!name) errors.name = "Name is required";
    if (!email) errors.email = "Email is required";
    if (!message) errors.message = "Message is required";
    return errors;
  };

  async function handleSubmit(event) {
    event.preventDefault();

    // Clear previous errors
    setErrors({});

    const formData = {
      name: event.target.name.value,
      email: event.target.email.value,
      message: event.target.message.value,
    };

    const formErrors = validate(
      formData.name,
      formData.email,
      formData.message
    );
    if (Object.keys(formErrors).length) {
      setErrors(formErrors); // Update state with errors
      return; // Stop form submission
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSubmitted(true); // Set the submission status to true
        setFormMessage(data.message); // Set the success message from server response
      } else {
        throw new Error(data.message || "Something went wrong");
      }
    } catch (error) {
      setFormMessage(error.toString()); // Set error message
    }
  }

  if (isSubmitted) {
    return (
      <div className="thank-you-message text-center mt-5">
        <p className="text-center">{formMessage}</p>
        <button className="btn-primary" onClick={() => setIsSubmitted(false)}>
          Send another message
        </button>
      </div>
    );
  }

  return (
    <section className="section contactForm">
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <h2 className="mainTitle mb-4">  {t("contact")}</h2>
            <form onSubmit={handleSubmit} noValidate>
              <div>
                <input
                  className="w-100"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                />
                {errors.name && <p className="error text-danger">{errors.name}</p>}
              </div>
              <div>
                <input
                  className="w-100"
                  type="text"
                  name="email"
                  id="email"
                  placeholder="E-mail"
                />
                {errors.name && <p className="error text-danger">{errors.email}</p>}
              </div>
              <div>
                <textarea
                  className="w-100"
                  id="message"
                  name="message"
                  placeholder="Message"
                ></textarea>
                {errors.name && <p className="error text-danger">{errors.message}</p>}
              </div>
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactForm;
