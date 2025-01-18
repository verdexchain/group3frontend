import React, { useState } from 'react';
import { FaTachometerAlt, FaUserFriends, FaPlus, FaCreditCard, FaTasks, FaUsers, FaBox, FaCogs, FaClipboardList } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function AdminSidebar({ shouldMenuSlide }) {
  const [paymentDrop, setPaymentDrop] = useState(false);
  const [specific, setSpecific] = useState('');

  return (
    <div className={shouldMenuSlide ? "dashboard-menu slide-in-left" : "dashboard-menu"}>
      <div className="sidebar">
        <div className="sidebar-header">
          <h3 className="profile-name">{process.env.REACT_APP_SITE_NAME}</h3>
        </div>

        <nav className="sidebar-navigation">
          <ul>
            {/* Dashboard */}
            <Link style={{ textDecoration: 'none', color: '#6e6e6e' }} to={'/dashboard'}>
              <li>
                <FaTachometerAlt /> <p>Dashboard</p>
              </li>
            </Link>


            {/* Customers */}
            <Link style={{ textDecoration: 'none', color: '#6e6e6e', marginTop: '.8rem' }} to={'/admin/customers/'}>
              <li>
                <FaUserFriends /> <p>Customers</p>
              </li>
            </Link>

            {/* Suppliers */}
            <Link style={{ textDecoration: 'none', color: '#6e6e6e', marginTop: '.8rem' }} to={'/admin/suppliers/'}>
              <li>
                <FaCogs /> <p>Suppliers</p>
              </li>
            </Link>

            {/* Products */}
            <Link style={{ textDecoration: 'none', color: '#6e6e6e', marginTop: '.8rem' }} to={'/admin/products/'}>
              <li>
                <FaBox /> <p>Products</p>
              </li>
            </Link>

            {/* Transactions */}
            <Link style={{ textDecoration: 'none', color: '#6e6e6e', marginTop: '.8rem' }} to={'/admin/transactions/'}>
              <li>
                <FaCreditCard /> <p>Transactions</p>
              </li>
            </Link>

            {/* Tasks */}
            <Link style={{ textDecoration: 'none', color: '#6e6e6e', marginTop: '.8rem' }} to={'/admin/tasks/'}>
              <li>
                <FaTasks /> <p>Tasks</p>
              </li>
            </Link>

            {/* Create Task */}
            <Link style={{ textDecoration: 'none', color: '#6e6e6e', marginTop: '.8rem' }} to={'/admin/create/tasks/'}>
              <li>
                <FaClipboardList /> <p>Schedule Tasks</p>
              </li>
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default AdminSidebar;
