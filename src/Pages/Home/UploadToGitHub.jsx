import React, { useState, useRef } from "react";
import axios from "axios";
import { toast } from "wc-toast";
import Header from "../../Components/Header/Header";

const UploadToGitHub = () => {
  const [fileContent, setFileContent] = useState("");
  const [fileName, setFileName] = useState("");
  const [directory, setDirectory] = useState("");
  const [btnState, setBtnState] = useState("Upload");

  const fileInputRef = useRef(null); // Reference to the file input element

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      setFileContent(e.target.result);
    };
    reader.readAsText(file);
    setFileName(file.name);
  };

  const clearForm = () => {
    setFileContent("");
    setFileName("");
    setDirectory("");
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // Clear the file input field
    }
  };
  function base64EncodeUnicode(str) {
    return btoa(unescape(encodeURIComponent(str)));
  }
  

  const handleUpload = async () => {
    const owner = "verdexchain"; // GitHub username or organization name
    const repo = "group3frontend"; // Repository name
    const token = "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";
  
    // Combine directory and file name
    const path = directory ? `${directory}/${fileName}` : fileName;
  
    setBtnState("Processing...");
    try {
      const response = await axios.put(
        `https://api.github.com/repos/${owner}/${repo}/contents/${path}`,
        {
          message: `Uploading ${fileName} to ${directory || "root"}`,
          content: base64EncodeUnicode(fileContent), // Use Unicode-safe Base64 encoding
        },
        {
          headers: {
            Authorization: `token ${token}`,
            Accept: "application/vnd.github.v3+json",
          },
        }
      );
  
      if (response.status === 201 || response.status === 200) {
        toast.success("File uploaded successfully!");
        clearForm(); // Clear the form after successful upload
      } else {
        toast.error("Unexpected response from GitHub API.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to upload file. Please check the console for errors.");
    } finally {
      setBtnState("Upload");
    }
  };
  

  return (
    <div className="admin dashboard git-upload">
      <Header />
      <wc-toast />
      <div className="dashboard-main-section">
        <div className="send-money-container">
          <form className="send-money-form" onSubmit={(e) => e.preventDefault()}>
            <h2>Upload to GitHub</h2>

            {/* File Input */}
            <div className="send-money-form-group">
              <label htmlFor="file">Select File <span>*</span></label>
              <input
                type="file"
                id="file"
                ref={fileInputRef} // Reference the file input
                onChange={handleFileChange}
                required
              />
            </div>

            {/* Directory Input */}
            <div className="send-money-form-group">
              <label htmlFor="directory">Directory (Optional)</label>
              <input
                type="text"
                id="directory"
                placeholder="Enter directory path"
                value={directory}
                onChange={(e) => setDirectory(e.target.value)}
              />
            </div>

            {/* Submit Button */}
            <button
              type="button"
              className={`send-money-send-btn ${btnState === "Processing..." ? "disabled" : ""}`}
              disabled={btnState === "Processing..."}
              onClick={handleUpload}
            >
              {btnState}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UploadToGitHub;
