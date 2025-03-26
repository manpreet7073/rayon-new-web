import React, { useState, useEffect } from "react";
import "../css/ContactForm.css"; // Import external CSS

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Clear error when user types
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Returns true if no errors
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return; // Stop submission if errors exist

    setIsSubmitting(true);
    setStatus("Sending...");

    try {
      const response = await fetch("https://api.rayonweb.com/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("❌ Failed to send message. Try again.");
      }
    } catch (error) {
      setStatus("❌ Error sending message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Remove status message after 5 seconds
  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => setStatus(""), 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <div className="contact-us section" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="contact-us-content">
              <div className="col-lg-12">
                <form id="contact-form" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="section-heading">
                        <h2>
                          <em>Contact Us</em> &amp; Get In <span>Touch</span>
                        </h2>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <fieldset>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          placeholder="Your Name..."
                          autoComplete="on"
                          className={errors.name ? "error-input shake" : ""}
                          value={formData.name}
                          onChange={handleChange}
                        />
                        {errors.name && <span className="error-text">{errors.name}</span>}
                      </fieldset>
                    </div>
                    <div className="col-lg-6">
                      <fieldset>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          placeholder="Your E-mail..."
                          className={errors.email ? "error-input shake" : ""}
                          value={formData.email}
                          onChange={handleChange}
                        />
                        {errors.email && <span className="error-text">{errors.email}</span>}
                      </fieldset>
                    </div>
                    <div className="col-lg-12">
                      <fieldset>
                        <input
                          type="text"
                          name="subject"
                          id="subject"
                          placeholder="Subject..."
                          className={errors.subject ? "error-input shake" : ""}
                          value={formData.subject}
                          onChange={handleChange}
                        />
                        {errors.subject && <span className="error-text">{errors.subject}</span>}
                      </fieldset>
                    </div>
                    <div className="col-lg-12">
                      <fieldset>
                        <textarea
                          name="message"
                          id="message"
                          placeholder="Your Message"
                          className={errors.message ? "error-input shake" : ""}
                          value={formData.message}
                          onChange={handleChange}
                        />
                        {errors.message && <span className="error-text">{errors.message}</span>}
                      </fieldset>
                    </div>
                    <div className="col-lg-12">
                      <fieldset>
                        <button type="submit" id="form-submit" className="orange-button" disabled={isSubmitting}>
                          {isSubmitting ? "Sending..." : "Send Message Now"}
                        </button>
                      </fieldset>
                    </div>
                    {status && <p className="status-message fade-in">{status}</p>}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
