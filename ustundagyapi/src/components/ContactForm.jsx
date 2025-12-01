import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [touched, setTouched] = useState({
    phone: false,
    email: false,
  });

  const [accepted, setAccepted] = useState(false);

  const validateEmail = (email) => {
    const r = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return r.test(email);
  };

  const validatePhone = (phoneRaw) => {
    const digits = phoneRaw.replace(/\D/g, "");

    return digits.length === 10 && digits.startsWith("5");
  };

  const formatPhone = (value) => {
    const digits = value.replace(/\D/g, "").slice(0, 10);

    let formatted = digits;

    if (digits.length > 0) {
      formatted = `(${digits.slice(0, 3)}`;
      if (digits.length >= 3) formatted += ") ";
      if (digits.length >= 4) formatted += digits.slice(3, 6);
      if (digits.length >= 6) formatted += " " + digits.slice(6, 8);
      if (digits.length >= 8) formatted += " " + digits.slice(8, 10);
    }

    return formatted;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      setForm({ ...form, phone: formatPhone(value) });
      return;
    }

    setForm({ ...form, [name]: value });
  };

  const handleBlur = (e) => {
    setTouched({ ...touched, [e.target.name]: true });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!accepted) return;

    console.log("Form submitted:", form);
  };

  const emailError = touched.email && !validateEmail(form.email);
  const phoneError = touched.phone && !validatePhone(form.phone);

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <div className="contact-form-line">
        {/* Name */}
        <div>
          <label htmlFor="name">Ad Soyad</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Adınızı ve soyadınızı giriniz"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone">Telefon Numarası</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="(5xx) xxx xx xx"
            value={form.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            className={phoneError ? "input-error" : ""}
            required
          />
        </div>
      </div>

      <div className="contact-form-line">
        {/* Email */}
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="ornek@mail.com"
            value={form.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={emailError ? "input-error" : ""}
            required
          />
        </div>

        {/* Subject */}
        <div>
          <label htmlFor="subject">Konu</label>
          <input
            id="subject"
            name="subject"
            type="text"
            placeholder="Konu başlığı"
            value={form.subject}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message">Mesaj</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          placeholder="Mesajınızı yazın"
          value={form.message}
          onChange={handleChange}
          required
        />
      </div>

      {/* Checkbox */}
      <div className="checkbox contact-form-line">
        <input
          type="checkbox"
          id="consent"
          checked={accepted}
          onChange={() => setAccepted(!accepted)}
        />
        <label htmlFor="consent">
          <a href="/kisisel-verilerin-korunmasi-politikasi" target="_blank">
            Kişisel Verilerin Korunması Politikasını
          </a>{" "}
          okudum, onaylıyorum.
        </label>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="submit-btn"
        disabled={!accepted || emailError || phoneError}
        style={{
          opacity: !accepted || emailError || phoneError ? 0.5 : 1,
          cursor:
            !accepted || emailError || phoneError ? "not-allowed" : "pointer",
        }}
      >
        Gönder
      </button>
    </form>
  );
}
