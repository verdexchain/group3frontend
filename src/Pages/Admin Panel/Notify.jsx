import React, { useState, useEffect } from 'react';
import { FaAlignLeft, FaSignOutAlt, FaUserAlt } from 'react-icons/fa';
import axios from 'axios';
import { toast } from 'wc-toast';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../hooks/UseAuthContext';
import AdminSidebar from './AdminSideBar';
import './adminAdditional.css';
import logo from '../../resources/images/logo.png'
import { useLogout } from '../../hooks/UseLogout';

function Notify() {
  const [dashUser, setDashUser] = useState(false);
  const [data, setData] = useState([]); // Employee data for performer and creator
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    description: '',
    creator: '',
    performer: '',
    dueDate: '',
    status: 'Unassigned',
  });
  const [sideMenu, setSideMenu] = useState(false);
  const [btnState, setBtnState] = useState('Submit');
  const [shouldMenuSlide, setShouldMenuSlide] = useState(false);

  const handleChange = (e) => {
    
    setFormData({ ...formData, [e.target.id]: e.target.value });
    console.log(formData)
  };

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/employee/get-employee`, {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    if (user && user.token) {
      fetchEmployees();
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setBtnState('Processing...');

    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/task/create`, formData, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      setBtnState('Submit');
      setFormData({
        description: '',
        creator: '',
        performer: '',
        dueDate: '',
        status: 'Unassigned',
      });

      toast.success('Task Created Successfully');
    } catch (error) {
      setBtnState('Submit');
      toast.error(error.response?.data?.error || 'Error creating task');
    }
  };

  useEffect(() => {
    if (!user) {
      navigate('/admin/login');
    }
  }, [user, navigate]);

  return (
    <div className='admin dashboard create-task'>
      <div className="dashboard-header">
        <div className="rights-side">
          <Link to='/' style={{ textDecoration: 'none', color: 'white', cursor: 'pointer' }}>
            <p>{process.env.REACT_APP_APP_NAME}</p>
          </Link>
          <FaAlignLeft onClick={() => {
            setShouldMenuSlide(true);
            setSideMenu(!sideMenu);
          }} />
        </div>
        <div className="mid-side">
          <Link to="/" style={{ textDecoration: 'none', color: 'white', cursor: 'pointer' }}>
            <img src={logo} alt="bill bit logo" />
          </Link>
        </div>
        <div className="left-side">
          <FaUserAlt onClick={() => setDashUser(!dashUser)} />
        </div>
        {dashUser && (
          <div className="user-menu">
            <Link to='/user-profile' style={{ textDecoration: 'none', color: '#6e6e6e', marginTop: '.8rem' }}>
              <p>Profile Overview</p>
            </Link>
            <Link to='/profile-setting' style={{ textDecoration: 'none', color: '#6e6e6e', marginTop: '.8rem' }}>
              <p>Profile Settings</p>
            </Link>
            <p className='logout' onClick={logout}><FaSignOutAlt />Logout</p>
          </div>
        )}
      </div>

      <div className="dashboard-main-section">
        {sideMenu && (
          <AdminSidebar shouldMenuSlide={shouldMenuSlide} />
        )}
        <div className="send-money-container">
          <form className="send-money-form" onSubmit={handleSubmit}>
            <h2>Create Task</h2>

            {/* Creator Field */}
            {/* <div className="send-money-form-group">
              <label htmlFor="creator">Creator<span>*</span></label>
              <select
                id="creator"
                value={formData.creator}
                onChange={handleChange}
                required
              >
                <option value="" disabled>Select Creator</option>
                {data.length > 0 && data.map((employee) => (
                  <option key={employee._id} value={employee._id}>{employee.name} ({employee.email})</option>
                ))}
              </select>
            </div> */}

            {/* Performer Field */}
            <div className="send-money-form-group">
              <label htmlFor="performer">Task Performer</label>
              <select
                id="performer"
                value={formData.performer}
                onChange={handleChange}
              >
                <option value="" disabled>Select Performer</option>
                {data.length > 0 && data.map((employee) => (
                  <option key={employee._id} value={employee._id} id={employee._id}>Employee {employee.name} ({employee.email})</option>
                ))}
              </select>
            </div>

            {/* Description Field */}
            <div className="send-money-form-group">
              <label htmlFor="description">Description<span>*</span></label>
              <textarea
                id="description"
                rows="3"
                placeholder="Enter task description"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </div>

            {/* Due Date Field */}
            <div className="send-money-form-group">
              <label htmlFor="dueDate">Due Date</label>
              <input
                type="date"
                id="dueDate"
                value={formData.dueDate}
                onChange={handleChange}
              />
            </div>

            {/* Status Field */}
            <div className="send-money-form-group">
              <label htmlFor="status">Status</label>
              <select
                id="status"
                value={formData.status}
                onChange={handleChange}
              >
                <option value="Unassigned">Unassigned</option>
                <option value="Assigned">Assigned</option>
                <option value="Completed">Completed</option>
              </select>
            </div>

            <button type="submit" className="send-money-send-btn" disabled={btnState === 'Processing...'}>
              {btnState}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Notify;
