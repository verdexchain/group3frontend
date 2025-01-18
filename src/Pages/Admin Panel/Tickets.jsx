import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { FaAlignLeft, FaSignOutAlt, FaTimes, FaUserAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';
import AdminConfirm from './AdminConfirm';
import { Link } from 'react-router-dom';
import AdminSidebar from './AdminSideBar';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../hooks/UseAuthContext';
import logo from '../../resources/images/logo.png'
import Loader from '../../Components/Loader/Loader';
function Tickets() {
    const navigate=useNavigate()
    const { user,dispatch } = useAuthContext();
    const [sidemenu, setSideMenu] = useState(false);
    const [data, setData] = useState([]);
    const [btnState, setBtnState] = useState("Change User Balance");
    const [edit, setEdit] = useState(false);
    const [ticketId, setTicketId] = useState(null);
    const [confirm, setConfirm] = useState(false);
    const [updateDelete, setUpdateDelete] = useState(null);
    const [shouldMenuSlide, setShouldMenuSlide] = useState(false);
    const [dashUser, setDashUser] = useState(false);
    const [formData, setFormData] = useState({
        message: null,
        name: null,
        email: null,
        registeredEmail: null
    });
    const [loading, setLoading] = useState(true); // Loading state

    function formatMongoDate(mongoDate) {
        const date = new Date(mongoDate);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = String(date.getFullYear()).slice(-2);
        const hour = String(date.getHours());
        const minute = String(date.getMinutes());
        return `${day}/${month}/${year} ${hour}:${minute}`;
    }
    // useEffect(()=>{

    //   axios.get(`${process.env.REACT_APP_BACKEND_URL}/admin/isadmin`,{
    //       headers:{
    //           Authorization:`Bearer ${user.token}`
    //       }  
    //   }).then(response=>{
    //       console.log(response.data)
    //      if(response.data.admin){
    //       console.log("OK")
    //      }else if(response.data.user){
    //       navigate(`/admin-panel`)
    //      }else{
    //       navigate('/')
    //      }

    //   }).catch(error=>{
    //       console.log(error)
    //   })
    //  },[user.token])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/task/get-user-tasks`, {
                    headers: {
                        Authorization: `Bearer ${user.token}`
                    }
                });
                setData(response.data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false); // Stop loading
            }
        };

        fetchData();
    }, [user.token, updateDelete]);

    const onConfirm = async () => {
        try {
            await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/admin/delete-ticket/${ticketId}`, {
                headers: {
                    Authorization: `Bearer ${user.token}`
                }
            });
            toast.success("Deleted Successfully");
            setConfirm(false);
            setUpdateDelete(ticketId);
        } catch (error) {
            console.log(error);
        }
    };

    const onCancel = () => {
        setConfirm(false);
    };

    const handleDelete = (id) => {
        setTicketId(id);
        setConfirm(true);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleEditClick = (data) => {
        setEdit(true);
        setFormData({
            registeredEmail: data.registeredEmail,
            message: data.message,
            name: data.name,
            email: data.email
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Implement your submit logic here, e.g., update the ticket
    };
    const logout=()=>{
      dispatch({type:'LOGOUT',payload:null})
      setTimeout(()=>{
          navigate('/rf-admin')

      },3000)
  }
    return (
        <div className='admin dashboard'>
            <div className="dashboard-header">
                <div className="rights-side">
                    <p>{process.env.REACT_APP_APP_NAME}</p>
                    <FaAlignLeft onClick={() => {
                        setShouldMenuSlide(true);
                        setSideMenu(!sidemenu);
                    }} />
                </div>
                <div className="left-side">
                    <FaUserAlt onClick={() => {
                        setDashUser(!dashUser);
                    }} />
                </div>
                {dashUser && (
                    <div className="user-menu">
                     
                        <p className='logout' onClick={() => {
                            logout()
                        }}>
                            <FaSignOutAlt />Logout
                        </p>
                    </div>
                )}
            </div>
            {sidemenu && (
                <AdminSidebar shouldMenuSlide={shouldMenuSlide} />
            )}
            <div className="main-admin-dash loan-container">
                <div className="table-head">
                    <h2>Tasks</h2>
                </div>
                {loading ? ( // Show loader while loading
                    <Loader /> // Replace with your loader component
                ) : (
                    <div className="loan-table">
                        <table className='equal-table'>
                            <thead>
                                <tr>
                                    <th>Creator</th>
                                    <th>Performant</th>
                                    <th>Description</th>
                                    <th>Status</th>
                                    <th>Due Date</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                {data.length > 0 ? (
                                    data.map((ticket) => (
                                        <tr key={ticket._id}>
                                            <td>{ticket.creator?.name}</td>
                                            <td>{ticket.performer?.name}</td>
                                            <td>{ticket.status}</td>
                                            <td>{ticket.description}</td>
                                            <td>{formatMongoDate(ticket.createdAt)}</td>
                                            
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="4" className="no-ticket-message">No Tickets</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
            {edit && (
                <div className='deposits-form'>
                    <div className="cancel-depo">
                        <FaTimes onClick={() => setEdit(false)} />
                    </div>
                    <div className="send-money-container">
                        <form className="send-money-form" onSubmit={handleSubmit}>
                            <h2>Ticket</h2>
                            <div className="send-money-grid">
                                <div className="send-money-form-group">
                                    <label htmlFor="name">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        placeholder="Enter Name"
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="send-money-grid">
                                <div className="send-money-form-group">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="text"
                                        id="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="send-money-grid">
                                <div className="send-money-form-group">
                                    <label htmlFor="email">Registered Email</label>
                                    <input
                                        type="text"
                                        id="registered-email"
                                        value={formData.registeredEmail}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="send-money-grid">
                                <div className="send-money-form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea
                                        id="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <button type="submit" className="send-money-send-btn">Submit</button>
                        </form>
                    </div>
                </div>
            )}
            {confirm && (
                <AdminConfirm message='Are you sure you want to delete?' onConfirm={onConfirm} onCancel={onCancel} />
            )}
        </div>
    );
}

export default Tickets;
