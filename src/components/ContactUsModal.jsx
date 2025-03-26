import React, { useState } from "react";
import "../css/ContactUsModal.css";

const ContactUsModal = ({ showModal, setShowModal }) => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [errors, setErrors] = useState({ name: false, email: false, message: false });
  const [shake, setShake] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: false }); // Remove error on change
  };

  // Validate form
  const validateForm = () => {
    let newErrors = { name: false, email: false, message: false };
    let valid = true;

    if (!formData.name.trim()) {
      newErrors.name = true;
      valid = false;
    }
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = true;
      valid = false;
    }
    if (!formData.message.trim()) {
      newErrors.message = true;
      valid = false;
    }

    setErrors(newErrors);

    if (!valid) {
      setShake(true);
      setTimeout(() => setShake(false), 300); // Remove shake effect after animation
    }

    return valid;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);
    setResponseMessage("");

    try {
      const response = await fetch("https://api.rayonweb.com/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          subject: "Training Inquiry",
          name: formData.name,
          email: formData.email,
          message: formData.message
        }),
      });

      const data = await response.json();
      if (response.ok) {
        setResponseMessage("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });

        // Close modal automatically after 2 seconds
        setTimeout(() => {
          setShowModal(false);
          setResponseMessage(""); // Clear the response message
        }, 2000);
      } else {
        setResponseMessage("❌ Failed to send message. Try again.");
      }
    } catch (error) {
      setResponseMessage("❌ Error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  if (!showModal) return null;

  return (
    <div className="modal-overlay">
      <div className={`modal-content ${shake ? "shake" : ""}`}>
        <button className="close-btn" onClick={() => setShowModal(false)}>✖</button>
        <h2 className="fff">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="name" 
            placeholder="Your Name" 
            value={formData.name} 
            onChange={handleChange} 
            className={errors.name ? "error-input" : ""}
          />
          {errors.name && <span className="error-text">Name is required.</span>}

          <input 
            type="email" 
            name="email" 
            placeholder="Your Email" 
            value={formData.email} 
            onChange={handleChange} 
            className={errors.email ? "error-input" : ""}
          />
          {errors.email && <span className="error-text">Enter a valid email.</span>}

          <textarea 
            name="message" 
            placeholder="Your Message" 
            rows="4" 
            value={formData.message} 
            onChange={handleChange} 
            className={errors.message ? "error-input" : ""}
          />
          {errors.message && <span className="error-text">Message is required.</span>}

          <button type="submit" className="btn-main" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        {responseMessage && <p className="status-message fade-in">{responseMessage}</p>}
      </div>
    </div>
  );
};

export default ContactUsModal;
