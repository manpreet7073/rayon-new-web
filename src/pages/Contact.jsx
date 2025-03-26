import React, { useState, useEffect } from "react";
import "../css/ContactForm.css"; // Import external CSS
import { Helmet } from 'react-helmet-async';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [file, setFile] = useState(null);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Clear error when user types
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setErrors({ ...errors, file: "" }); // Clear file error if exists
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty";
    if (!file) newErrors.file = "Please attach a file (resume/offers)";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Returns true if no errors
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return; // Stop submission if errors exist

    setIsSubmitting(true);
    setStatus("Sending...");

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("subject", formData.subject);
    formDataToSend.append("message", formData.message);
    formDataToSend.append("file", file);

    try {
      const response = await fetch("https://api.rayonweb.com/api/send-email", {
        method: "POST",
        body: formDataToSend,
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setFile(null);
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
    <>
    
    <Helmet>
        <title>Contact Us - RayonWeb</title>
        <meta name="description" content="Get in touch with RayonWeb for inquiries, support, or partnership opportunities. We are here to help you with your digital needs." />
        <meta name="keywords" content="contact, RayonWeb, contact us, digital solutions, web development, customer support" />
      </Helmet>

    <div className="contact-us section stylish-contact" id="contact">
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-lg-12">
            <div className="contact-us-content mt-5 mb-5">
              <div className="col-lg-12">
                <div className="section-heading">
                  <h2>
                    <em>Contact Us</em> &amp; Get In <span>Touch</span>
                  </h2>
                  <p className="slogan fancy-text">"Bringing Ideas to Life, One Message at a Time!"</p>
                </div>
                <form id="contact-form" onSubmit={handleSubmit} className="animated-form" encType="multipart/form-data">
                  <div className="row">
                    <div className="col-lg-6">
                      <fieldset>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          placeholder="Your Name..."
                          autoComplete="on"
                          className={errors.name ? "error-input shake" : "input-field"}
                          value={formData.name}
                          onChange={handleChange}
                        />
                        {errors.name && <span className="error-text fade-in">{errors.name}</span>}
                      </fieldset>
                    </div>
                    <div className="col-lg-6">
                      <fieldset>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          placeholder="Your E-mail..."
                          className={errors.email ? "error-input shake" : "input-field"}
                          value={formData.email}
                          onChange={handleChange}
                        />
                        {errors.email && <span className="error-text fade-in">{errors.email}</span>}
                      </fieldset>
                    </div>
                    <div className="col-lg-12">
                      <fieldset>
                        <input
                          type="text"
                          name="subject"
                          id="subject"
                          placeholder="Subject..."
                          className={errors.subject ? "error-input shake" : "input-field"}
                          value={formData.subject}
                          onChange={handleChange}
                        />
                        {errors.subject && <span className="error-text fade-in">{errors.subject}</span>}
                      </fieldset>
                    </div>
                    <div className="col-lg-12">
                      <fieldset>
                        <textarea
                          name="message"
                          id="message"
                          placeholder="Your Message"
                          className={errors.message ? "error-input shake" : "input-field"}
                          value={formData.message}
                          onChange={handleChange}
                        />
                        {errors.message && <span className="error-text fade-in">{errors.message}</span>}
                      </fieldset>
                    </div>
                    <div className="col-lg-12">
                    <fieldset>
                      <div className="file-upload-container">
                        <label htmlFor="file" className="file-label">
                          Upload Resume / Offer
                        </label>
                        <input
                          type="file"
                          name="file"
                          id="file"
                          accept=".pdf,.doc,.docx"
                          className="file-input"
                          onChange={handleFileChange}
                        />
                        {file && <p className="file-name">{file.name}</p>}
                      </div>
                      {errors.file && <span className="error-text fade-in">{errors.file}</span>}
                    </fieldset>
                    </div>
                    <div className="col-lg-12">
                      <fieldset>
                        <button type="submit" id="form-submit" className="orange-button stylish-button" disabled={isSubmitting}>
                          {isSubmitting ? "Sending..." : "Send Message Now"}
                        </button>
                      </fieldset>
                    </div>
                    {status && <p className="status-message fade-in highlight-text">{status}</p>}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Contact;
