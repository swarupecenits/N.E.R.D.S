import React, { useState } from 'react';

function FormToSheet() {
  const [isNITS, setIsNITS] = useState("Yes");
  const [wantName, setWantName] = useState("Yes");

  const url = "https://script.google.com/macros/s/AKfycbw5p3omtAO6t1MPeTFP9kL0ruKR4lyjxhwWhnw9VG42O-ts8-SxYk-sjMVycqKV0vU3gw/exec";

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    // Create a timestamp (you can customize format)
    const timestamp = new Date().toISOString(); // e.g., "2025-08-29T12:34:56.789Z"

    const formData = new URLSearchParams();
    formData.append("Timestamp", timestamp);
    formData.append("Name", form.name.value);
    formData.append("IsNITS", isNITS);
    formData.append("ScholarId", isNITS === "Yes" ? form.scholarId.value : "0000000");
    formData.append("Type", form.type.value);
    formData.append("Size", form.size.value);
    formData.append("WantName", wantName);
    formData.append("NameOnTShirt", wantName === "Yes" ? form.nameOnTShirt.value : "");
    formData.append("Address", form.address.value);
    formData.append("Phone", form.phone.value);
    formData.append("ScreenshotLink", form.screenshotLink.value);

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: formData.toString()
    })
      .then(res => res.text())
      .then(response => alert(response))
      .catch(err => alert("Error submitting form"));
  };

  return (
    <div>
      <h1>React to Sheet</h1>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" required /><br />

        <label>Is NITS:</label><br />
        <select name="isNITS" value={isNITS} onChange={(e) => setIsNITS(e.target.value)} required>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select><br />

       {isNITS === "Yes" && (
  <>
    <input name="scholarId" placeholder="Scholar ID" required /><br />
  </>
)}

        <input name="type" placeholder="Type" required /><br />
        <input name="size" placeholder="Size (e.g., M, L, XL)" required /><br />

        <label>Want Name on T-Shirt:</label><br />
        <select name="wantName" value={wantName} onChange={(e) => setWantName(e.target.value)} required>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select><br />

        {wantName === "Yes" && (
  <>
    <input name="nameOnTShirt" placeholder="Name on T-Shirt" required /><br />
  </>
)}

        <input name="address" placeholder="Address" required /><br />
        <input name="phone" placeholder="Phone Number" required /><br />
        <input name="screenshotLink" placeholder="Screenshot Drive Link" required /><br />

        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default FormToSheet;
