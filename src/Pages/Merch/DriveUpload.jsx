import { useState } from "react";

function DriveUpload() {
  const [fileUrl, setFileUrl] = useState(""); // state to store uploaded file URL

  function uploader(e) {
    var file = e.target.files[0]; // the file
    var reader = new FileReader(); // convert to Base64
    reader.readAsDataURL(file); // start conversion
    reader.onload = function () {
      var rawLog = reader.result.split(",")[1]; // only file data part
      var dataSend = {
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
          console.log("Response:", a);
          setFileUrl(a.url); // ✅ store URL in state
        })
        .catch((err) => console.error("Upload error:", err));
    };
  }

  return (
    <div className="App">
      <div className="App-header">
        <input
          type="file"
          accept="application/pdf,image/*"
          id="customFile"
          onChange={uploader}
        />
        {fileUrl && (
          <p className="mt-4 text-green-600">
            ✅ File uploaded!{" "}
            <a
              href={fileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-500"
            >
              View File
            </a>
          </p>
        )}
      </div>
    </div>
  );
}

export default DriveUpload;
