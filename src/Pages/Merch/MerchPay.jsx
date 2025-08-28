import { useState } from "react";
import { useNavigate } from "react-router-dom";
import qrImage from "../../assets/upi-qr.png";
import oversizeChart from "../../assets/Oversize_chart.jpg";
import regularChart from "../../assets/Regular_chart.jpg";

const TShirtForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    fromNITSilchar: "",
    scholarId: "",
    size: "",
    type: "",
    wantNameInTShirt: "",
    nameInTShirt: "",
    address: "",
    phone: "",
    screenshot: null,
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validate = () => {
    if (!formData.name) return "Name is required";
    if (!formData.fromNITSilchar) return "Select NIT Silchar option";
    if (formData.fromNITSilchar === "Yes" && !formData.scholarId)
      return "Scholar ID required for NIT Silchar students";
    if (!formData.type) return "Select T-Shirt type";
    if (!formData.size) return "Select T-Shirt size";
    if (!formData.wantNameInTShirt) return "Select if you want name on T-Shirt";
    if (
      formData.wantNameInTShirt === "Yes" &&
      (!formData.nameInTShirt || formData.nameInTShirt.length > 7)
    )
      return "Enter valid name (max 7 letters)";
    if (!formData.address) return "Enter address";
    if (!formData.phone || !/^\d{10}$/.test(formData.phone))
      return "Enter valid 10-digit phone number";
    if (!formData.screenshot) return "Upload payment screenshot";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const error = validate();
    if (error) {
      setStatus("❌ " + error);
      return;
    }

    try {
      setStatus("Submitting...");
      const form = new FormData();
      for (let key in formData) {
        form.append(key, formData[key]);
      }

      const response = await fetch("YOUR_GOOGLE_SCRIPT_URL", {
        method: "POST",
        body: form,
      });

      if (response.ok) {
        setStatus("✅ Submitted successfully!");
        setTimeout(() => navigate("/thank-you"), 1000);
      } else {
        setStatus("❌ Error submitting form");
      }
    } catch (err) {
      setStatus("❌ Network error");
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">T-Shirt Order Form</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />

        {/* NIT Silchar option */}
        <select
          name="fromNITSilchar"
          value={formData.fromNITSilchar}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        >
          <option value="">Are you from NIT Silchar?</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>

        {formData.fromNITSilchar === "Yes" && (
          <input
            type="text"
            name="scholarId"
            placeholder="Scholar ID"
            value={formData.scholarId}
            onChange={handleChange}
            className="border p-2 rounded"
            required
          />
        )}

        {/* Move Type BEFORE Size */}
        <select
          name="type"
          value={formData.type}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        >
          <option value="">T-Shirt Type</option>
          <option value="Oversize">Oversize</option>
          <option value="Regular">Regular</option>
        </select>

        {/* Conditional Size Chart */}
        {formData.type === "Oversize" && (
          <img
            src={oversizeChart}
            alt="Oversize Size Chart"
            className="w-full max-w-md mx-auto rounded shadow"
          />
        )}
        {formData.type === "Regular" && (
          <img
            src={regularChart}
            alt="Regular Size Chart"
            className="w-full max-w-md mx-auto rounded shadow"
          />
        )}

        {/* Size */}
        <select
          name="size"
          value={formData.size}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        >
          <option value="">Select T-Shirt Size</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
          <option value="XXL">XXL</option>
        </select>

        {/* Name in T-Shirt */}
        <select
          name="wantNameInTShirt"
          value={formData.wantNameInTShirt}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        >
          <option value="">Do you want your name on T-Shirt?</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>

        {formData.wantNameInTShirt === "Yes" && (
          <input
            type="text"
            name="nameInTShirt"
            placeholder="Name on T-Shirt (max 7 letters)"
            value={formData.nameInTShirt}
            onChange={handleChange}
            className="border p-2 rounded"
            maxLength={7}
            required
          />
        )}

        {/* Address */}
        <input
          type="text"
          name="address"
          placeholder={
            formData.fromNITSilchar === "Yes" ? "Hostel No." : "Full Address"
          }
          value={formData.address}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />

        {/* Phone */}
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number (10 digits)"
          value={formData.phone}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />

        {/* Payment Section */}
        <div className="border p-4 rounded bg-gray-50">
          <h3 className="font-bold mb-2">Payment</h3>
          <a
            href="upi://pay?pa=your-upi-id@upi&pn=RoboticsClub&am=499&cu=INR"
            target="_blank"
            rel="noreferrer"
            className="bg-green-600 text-white px-4 py-2 rounded inline-block mb-3"
          >
            Pay Now (UPI Link)
          </a>

          <p className="text-sm text-gray-600 mb-2">
            If link doesn’t work, scan this QR:
          </p>
          <img src={qrImage} alt="UPI QR" className="w-48 mx-auto mb-3" />

          <label className="block text-sm font-medium mb-1">
            Upload Payment Screenshot
          </label>
          <input
            type="file"
            name="screenshot"
            accept="image/*"
            onChange={handleChange}
            className="border p-2 rounded"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 disabled:bg-gray-400"
          disabled={!formData.screenshot}
        >
          Final Submit
        </button>
      </form>

      <p className="mt-2 text-sm">{status}</p>
    </div>
  );
};

export default TShirtForm;
