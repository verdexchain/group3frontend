import React, { useState, useCallback } from 'react';
import { FaAlignLeft, FaSignOutAlt, FaUserAlt } from 'react-icons/fa';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';

import { toast } from 'wc-toast';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../hooks/UseAuthContext';
import AdminSidebar from './AdminSideBar';
import logo from '../../resources/images/logo.png'

function CreateProduct() {
  const [dashUser, setDashUser] = useState(false);
  const { user, dispatch } = useAuthContext();
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    quantityAvailable: '',
    unitPrice: '',
    supplier: '',
    expirationDate: '',
    document: null,
  });
  const [sidemenu, setSideMenu] = useState(false);
  const [btnState, setBtnState] = useState("Submit");
  const [shouldMenuSlide, setShouldMenuSlide] = useState(false);

  const onDrop = useCallback((acceptedFiles) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      document: acceptedFiles[0], // assuming one document per product
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
    const productData = new FormData();
    productData.append('name', formData.name);
    productData.append('category', formData.category);
    productData.append('quantityAvailable', formData.quantityAvailable);
    productData.append('unitPrice', formData.unitPrice);
    productData.append('supplier', formData.supplier);
    productData.append('expirationDate', formData.expirationDate);
    if (formData.document) {
      productData.append('media', formData.document);
    }

    axios.post(`${process.env.REACT_APP_API_URL}/product/create`, productData, {
      headers: {
        Authorization: `Bearer ${user.token}`,
        'Content-Type': 'multipart/form-data',
      },
    }).then(response => {
      setBtnState("Submit");
      setFormData({
        name: '',
        category: '',
        quantityAvailable: '',
        unitPrice: '',
        supplier: '',
        expirationDate: '',
        document: null,
      });
      toast.success("Product created successfully!");
    }).catch(error => {
      setBtnState("Submit");
      toast.error(error.response?.data?.error || "Failed to create product");
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
            <h2>Create New Product</h2>

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

            {/* Category Field */}
            <div className="send-money-form-group">
              <label htmlFor="category">Category <span>*</span></label>
              <input
                type="text"
                id="category"
                value={formData.category}
                onChange={handleChange}
                required
              />
            </div>

            {/* Quantity Available Field */}
            <div className="send-money-form-group">
              <label htmlFor="quantityAvailable">Quantity Available <span>*</span></label>
              <input
                type="number"
                id="quantityAvailable"
                value={formData.quantityAvailable}
                onChange={handleChange}
                required
              />
            </div>

            {/* Unit Price Field */}
            <div className="send-money-form-group">
              <label htmlFor="unitPrice">Unit Price <span>*</span></label>
              <input
                type="number"
                id="unitPrice"
                value={formData.unitPrice}
                onChange={handleChange}
                required
              />
            </div>

            {/* Supplier Field */}
            <div className="send-money-form-group">
              <label htmlFor="supplier">Supplier</label>
              <input
                type="text"
                id="supplier"
                value={formData.supplier}
                onChange={handleChange}
              />
            </div>

            {/* Expiration Date Field */}
            <div className="send-money-form-group">
              <label htmlFor="expirationDate">Expiration Date</label>
              <input
                type="date"
                id="expirationDate"
                value={formData.expirationDate}
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

export default CreateProduct;
