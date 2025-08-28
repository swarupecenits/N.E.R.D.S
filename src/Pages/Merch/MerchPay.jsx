import { useState } from "react";

export default function TshirtForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    fromNITSilchar: "Yes",
    type: "T-Shirt",
    size: "",
    rollNo: "",
    wantNameInTShirt: "No",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        "https://script.google.com/macros/s/YOUR_DEPLOYED_SCRIPT_URL/exec",
        {
          method: "POST",
          body: JSON.stringify(form),
          headers: { "Content-Type": "application/json" },
        }
      );
      if (res.ok) {
        setSubmitted(true);
        setForm({
          name: "",
          email: "",
          fromNITSilchar: "Yes",
          type: "T-Shirt",
          size: "",
          rollNo: "",
          wantNameInTShirt: "No",
        });
      } else {
        alert("Something went wrong!");
      }
    } catch (err) {
      console.error(err);
      alert("Error submitting form!");
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-black text-white">
        <h1 className="text-2xl font-bold">✅ Form Submitted Successfully!</h1>
      </div>
    );
  }

  const inputStyle =
    "w-full p-2 rounded-xl bg-white/10 text-gray-100 placeholder-gray-400 outline-none focus:ring-2 focus:ring-purple-400 transition";
  const labelStyle = "block text-sm font-semibold mb-1";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-black text-white p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white/10 p-8 rounded-2xl shadow-lg space-y-4"
      >
        <h1 className="text-3xl font-bold text-center mb-6">
          T-Shirt Order Form
        </h1>

        {/* Name */}
        <label className={labelStyle}>
          Name
          <input
            className={inputStyle}
            name="name"
            value={form.name}
            onChange={handleInput}
            required
          />
        </label>

        {/* Email */}
        <label className={labelStyle}>
          Email
          <input
            type="email"
            className={inputStyle}
            name="email"
            value={form.email}
            onChange={handleInput}
            required
          />
        </label>

        {/* From NIT Silchar */}
        <label className={labelStyle}>
          From NIT Silchar?
          <select
            className={`${inputStyle} text-gray-900 bg-white`}
            name="fromNITSilchar"
            value={form.fromNITSilchar}
            onChange={handleInput}
          >
            <option className="text-black bg-white">Yes</option>
            <option className="text-black bg-white">No</option>
          </select>
        </label>

        {/* Type */}
        <label className={labelStyle}>
          Type
          <select
            className={`${inputStyle} text-gray-900 bg-white`}
            name="type"
            value={form.type}
            onChange={handleInput}
          >
            <option className="text-black bg-white">T-Shirt</option>
            <option className="text-black bg-white">Hoodie</option>
          </select>
        </label>

        {/* Size */}
        <label className={labelStyle}>
          Size
          <input
            className={inputStyle}
            name="size"
            value={form.size}
            onChange={handleInput}
            required
          />
        </label>

        {/* Roll Number */}
        <label className={labelStyle}>
          Roll No.
          <input
            className={inputStyle}
            name="rollNo"
            value={form.rollNo}
            onChange={handleInput}
            required
          />
        </label>

        {/* Want Name Printed? */}
        <label className={labelStyle}>
          Want Name Printed?
          <select
            className={`${inputStyle} text-gray-900 bg-white`}
            name="wantNameInTShirt"
            value={form.wantNameInTShirt}
            onChange={handleInput}
          >
            <option className="text-black bg-white">No</option>
            <option className="text-black bg-white">Yes</option>
          </select>
        </label>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-xl font-bold transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
