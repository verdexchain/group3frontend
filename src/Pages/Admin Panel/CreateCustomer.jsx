import React, { useState, useCallback } from 'react';
import { FaAlignLeft, FaSignOutAlt, FaUserAlt } from 'react-icons/fa';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';

import { toast } from 'wc-toast';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../hooks/UseAuthContext';
import AdminSidebar from './AdminSideBar';
import logo from '../../resources/images/logo.png'
function CreateCustomer() {
  const [dashUser, setDashUser] = useState(false);
  const { user, dispatch } = useAuthContext();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    document: null,
  });
  const [sidemenu, setSideMenu] = useState(false);
  const [btnState, setBtnState] = useState("Submit");
  const [shouldMenuSlide, setShouldMenuSlide] = useState(false);

  const onDrop = useCallback((acceptedFiles) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      document: acceptedFiles[0], // assuming one document per customer
    }));
    console.log(acceptedFiles);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: 'application/pdf, image/*', // Accept PDFs and images
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setBtnState("Processing...");
    const customerData = new FormData();
    customerData.append('name', formData.name);
    customerData.append('email', formData.email);
    customerData.append('phone', formData.phone);
    customerData.append('address', formData.address);
    if (formData.document) {
      customerData.append('media', formData.document);
    }

    axios.post(`${process.env.REACT_APP_API_URL}/customer/create`, customerData, {
      headers: {
        Authorization: `Bearer ${user.token}`,
        'Content-Type': 'multipart/form-data',
      },
    }).then(response => {
      setBtnState("Submit");
      setFormData({
        name: '',
        email: '',
        phone: '',
        address: '',
        document: null,
      });
      toast.success("Customer created successfully!");
    }).catch(error => {
      setBtnState("Submit");
      toast.error(error.response?.data?.error || "Failed to create customer");
      console.log(error.response);
    });
  };

  const logout = () => {
    dispatch({ type: 'LOGOUT', payload: null });
  };

  return (
    <div className='admin dashboard'>
       <div className="dashboard-header">
                <div className="rights-side">
                    <FaAlignLeft onClick={() => setSideMenu(!sidemenu)} />
                </div>
                <div className="mid-side">
                <Link to="/" style={{ textDecoration: 'none', color: 'white', cursor: 'pointer' }}>
                    <img src={logo} alt="bill bit logo" />
                    </Link>

                </div>

                <div className="left-side">
                    <FaUserAlt onClick={() => setDashUser((prev) => !prev)} />
                </div>
                {dashUser && (
                    <div className="user-menu">
                        <p className="logout" onClick={logout}><FaSignOutAlt />Logout</p>
                    </div>
                )}
            </div>

            {sidemenu && <AdminSidebar />}
      <div className="dashboard-main-section">
       
        <div className="send-money-container">
          <form className="send-money-form" onSubmit={handleSubmit}>
            <h2>Create New Customer</h2>

            {/* Name Field */}
            <div className="send-money-form-group">
              <label htmlFor="name">Name <span>*</span></label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            {/* Email Field */}
            <div className="send-money-form-group">
              <label htmlFor="email">Email <span>*</span></label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Phone Field */}
            <div className="send-money-form-group">
              <label htmlFor="phone">Phone <span>*</span></label>
              <input
                type="text"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            {/* Address Field */}
            <div className="send-money-form-group">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                value={formData.address}
                onChange={handleChange}
              />
            </div>

            {/* File Upload Field */}
            <div className="send-money-form-group">
              <label htmlFor="document">Document</label>
              <div
                {...getRootProps()}
                style={{
                  border: '2px dashed #007bff',
                  padding: '20px',
                  textAlign: 'center',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  margin: '1rem 0',
                  backgroundColor: isDragActive ? '#e0f7fa' : '#f9f9f9',
                }}
              >
                <input {...getInputProps()} />
                {isDragActive ? (
                  <p>Drop the document here...</p>
                ) : (
                  <>
                    <p>Drag & drop a document here, or click to select a document</p>
                    <span>{formData.document?.name}</span>
                  </>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className={`send-money-send-btn ${btnState === 'Processing...' ? 'disabled' : ''}`}
              disabled={btnState === 'Processing...'}
            >
              {btnState}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateCustomer;
