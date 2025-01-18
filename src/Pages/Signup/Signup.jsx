import React, { useEffect, useState } from 'react';
import './signup.css';
import loginLogo from '../../resources/images/verdex-bgremove.png';
import blocklogo from '../../resources/images/verdexblock-removebg.png';
import { FaUser } from 'react-icons/fa';
import { useAuthContext } from '../../hooks/UseAuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'wc-toast';
import axios from 'axios';

function Signup() {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    role: '',
    department: ''
  });
  const [roles, setRoles] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [disabled, setDisabled] = useState(true);
  const { user, dispatch } = useAuthContext();
  const [btnState, setBtnState] = useState('Sign up');
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch roles
    axios.get(`${process.env.REACT_APP_API_URL}/role/get-roles`)
      .then((response) => {
        console.log(response.data)
        setRoles(response.data);
      })
      .catch((error) => {
        console.error('Error fetching roles:', error);
        toast.error('Failed to load roles');
      });

    // Fetch departments
    axios.get(`${process.env.REACT_APP_API_URL}/department/get`)
      .then((response) => {
        setDepartments(response.data || []);
      })
      .catch((error) => {
        console.error('Error fetching departments:', error);
        toast.error('Failed to load departments');
      });
  }, []);

  useEffect(() => {
    console.log(data)
    if (data.name && data.email && data.password && data.role && data.department) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [data]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setBtnState('Processing...');
    axios.post(`${process.env.REACT_APP_API_URL}/employee/create-employee`, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => {
        setData({
          name: '',
          email: '',
          password: '',
          role: '',
          department: ''
        });
        toast.success('You have successfully signed up');
        localStorage.setItem('user', JSON.stringify(response.data));
        dispatch({ type: 'LOGIN', payload: response.data });
        setBtnState('Sign up');
        navigate('/dashboard');
      })
      .catch((error) => {
        console.error('Error during signup:', error);
        setBtnState('Sign up');
        toast.error(error.response?.data?.error || 'Signup failed');
      });
  };

  return (
    <div className='signup'>
      <div className="signup-form">
        <form onSubmit={handleSubmit}>
          <div className="form-head">
            <span><FaUser size={50} /></span>
            <h3>Let's get started</h3>
            <p>Signup as an Employee</p>
          </div>

          <div className="form-input">
            <label>Name</label>
            <input
              type="text"
              onChange={(e) => setData({ ...data, name: e.target.value })}
              value={data.name}
              placeholder='Your Name'
              required
            />
          </div>
          <div className="form-input">
            <label>Email</label>
            <input
              type="text"
              onChange={(e) => setData({ ...data, email: e.target.value })}
              value={data.email}
              placeholder='your@email'
              required
            />
          </div>
          <div className="form-input">
            <label>Password</label>
            <input
              type="password"
              onChange={(e) => setData({ ...data, password: e.target.value })}
              value={data.password}
              placeholder='Minimum of 8 Characters'
              required
            />
          </div>
        
          <div className="form-input">
            <label>Role</label>
            <select
                onChange={(e) => setData({ ...data, role: e.target.value })}
                value={data.role}
                required
            >
                <option value="" disabled>
                    Select a Role
                </option>
                {roles?.length > 0 ? (
                    roles.map((role) => (
                        <option key={role._id} value={role._id}>
                            {role.title}
                        </option>
                    ))
                ) : (
                    <option disabled>Loading roles...</option>
                )}
            </select>
        </div>
          <div className="form-input">
            <label>Department</label>
            <select
              onChange={(e) => setData({ ...data, department: e.target.value })}
              value={data.department}
              required
            >
              <option value="" disabled>Select a Department</option>
              {departments.map((department) => (
                <option key={department._id} value={department._id} >
                  {department.name}
                </option>
              ))}
            </select>
          </div>

          <button type='submit' disabled={disabled} className={disabled ? 'disabled' : 'enable'}>
            {btnState}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
