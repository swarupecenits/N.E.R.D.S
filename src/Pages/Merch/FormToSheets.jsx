import React, { useState } from 'react';

function FormToSheet() {
  const [isNITS, setIsNITS] = useState("Yes");
  const [wantName, setWantName] = useState("Yes");
  const [fileUrl, setFileUrl] = useState("");
  const [uploading, setUploading] = useState(false);

  const url = "https://script.google.com/macros/s/AKfycbw5p3omtAO6t1MPeTFP9kL0ruKR4lyjxhwWhnw9VG42O-ts8-SxYk-sjMVycqKV0vU3gw/exec";

  // File upload logic (from DriveUpload)
  function uploader(e) {
    const file = e.target.files[0];
    if (!file) return;
    setUploading(true);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      const rawLog = reader.result.split(",")[1];
      const dataSend = {
        dataReq: { data: rawLog, name: file.name, type: file.type },
        fname: "uploadFilesToGoogleDrive",
      };
      fetch(
        "https://script.google.com/macros/s/AKfycbyhMyvbLwGEqCjVGC0gJCwvAOS_KyJnfVleU4h3iUUG88VeUXoWyujKKjRxMSuzT9AoHA/exec",
        {
          method: "POST",
          body: JSON.stringify(dataSend),
        }
      )
        .then((res) => res.json())
        .then((a) => {
          setFileUrl(a.url || a.fileUrl || "");
          setUploading(false);
        })
        .catch((err) => {
          setUploading(false);
          alert("Upload error");
        });
    };
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fileUrl) {
      alert("Please upload payment proof before submitting.");
      return;
    }
    const form = e.target;
    const timestamp = new Date().toISOString();
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
    formData.append("ScreenshotLink", fileUrl);
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: formData.toString()
    })
      .then(res => res.text())
      .then(response => {
        alert(response);
        setFileUrl("");
      })
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
        <label>Upload Payment Proof:</label><br />
        <input
          type="file"
          accept="application/pdf,image/*"
          onChange={uploader}
          required={!fileUrl}
        /><br />
        {uploading && <span style={{ color: 'blue' }}>Uploading...</span>}
        {fileUrl && (
          <span style={{ color: 'green' }}>
            Uploaded! <a href={fileUrl} target="_blank" rel="noopener noreferrer">View File</a>
          </span>
        )}<br />

        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default FormToSheet;
