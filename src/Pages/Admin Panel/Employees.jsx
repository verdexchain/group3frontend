import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaAlignLeft, FaSignOutAlt, FaTimes, FaUserAlt,FaTrash, FaPlus } from 'react-icons/fa';

import AdminConfirm from './AdminConfirm';
import { Link } from 'react-router-dom';
import AdminSidebar from './AdminSideBar';
import Loader from '../../Components/Loader/Loader'; // Import your Loader component
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../hooks/UseAuthContext';
// import loginLogo from '../../resources/images/verdex-bgremove.png';
import logo from '../../resources/images/logo.png'
import { toast } from 'react-toastify';
import { useLogout } from '../../hooks/UseLogout';
function Employees() {
    const navigate = useNavigate();
    const { user, dispatch } = useAuthContext();
    const {logout}=useLogout()
    const [sidemenu, setSideMenu] = useState(false);
    const [coinAmount,setCoinAmount]=useState(null)
    const [data, setData] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [userId, setUserId] = useState(null);
    const [confirm, setConfirm] = useState(false);
    const [updateTrigger, setUpdateTrigger] = useState(false);
    const [dashUser, setDashUser] = useState(false);
    const [cryptoData, setCryptoData] = useState([]);
    const [singleCrypto,setSingleCrypto]=useState(null)
    const [formData, setFormData] = useState({
        token: '',
        amount: '',
        msg: '',
        coinAmount:'',
        depoType:'',
    });

    const [loading, setLoading] = useState(true); // Loading state

    // Fetch users when component mounts and whenever updateTrigger or user token changes
    useEffect(() => {
        fetchUsers();
    }, [user.token, updateTrigger]);

    const fetchUsers = async () => {
        setLoading(true); // Start loading
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/employee/get-all-employees`, {
                headers: {
                    Authorization: `Bearer ${user.token}`,
                },
            });
            setData(response.data);
            console.log(response.data)
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false); // Stop loading
        }
    };

    const handleChange = (e) => {
        console.log(e.target.value)
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const handleEditClick = (id, balances) => {
        setUserId(id);
        setFormData({
            token: balances[0]?.token || '', // Default to the first token
            amount: balances[0]?.balance || 0,
            msg: ''
        });
        setEditMode(true);
    };

    const handleDelete = (id) => {
        setUserId(id);
        setConfirm(true);
    };

    const onConfirmDelete = async () => {
        try {
            await axios.delete(`${process.env.REACT_APP_API_URL}/employee/delete/${userId}`, {
                headers: {
                    Authorization: `Bearer ${user.token}`,
                },
            });
            toast.success('User deleted successfully');
            setConfirm(false);
            setUpdateTrigger((prev) => !prev);
        } catch (error) {
            console.error(error);
        }
    };

    const handleSubmit = async (e) => {
        
    };

    // const logout = () => {
    //     dispatch({ type: 'LOGOUT' });
    //     localStorage.setItem('user', null);
        
    //     navigate('/login-admin');
 
    // };

    useEffect(()=>{
        if(!user){
            navigate('/admin/login')
        }
    },[user])

    return (
        <div className="admin dashboard">
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

            <div className="main-admin-dash loan-container">
                <div className="table-head">
                    <h2>Employees</h2>
                    {/* <Link to={'/admin/create/customer/'} style={{textDecoration:"none"}}><button><FaPlus />Add New</button></Link> */}
                    
                </div>
                {loading ? (
                    <Loader /> // Show loader while loading
                ) : (
                    <div className="loan-table">
                        <table className="equal-table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Department</th>
                                    <th>Role</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.length > 0 ? (
                                    data.map((user) => (
                                        <tr key={user._id}>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td>{user.departmentId.name}</td>
                                            <td>{user.roleId.title}</td>
                                         
                                            
                                           
                                            <td className="action-tb">
                                                {/* <button onClick={() => handleEditClick(user._id, user.balances)}>Edit</button> */}
                                                <button onClick={() => handleDelete(user._id)} className='admin-delete'><p>Delete </p><FaTrash size={15}/></button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="8" className="no-loan-message">No Employees</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>

            {editMode && (
                <div className="deposits-form">
                    <div className="cancel-depo">
                        <FaTimes onClick={() => setEditMode(false)} />
                    </div>
                    <div className="send-money-container">
                        <form className="send-money-form" onSubmit={handleSubmit}>
                            <h2>Edit Balance</h2>
                            <div className="send-money-form-group">
                                <label htmlFor="token">Token <span>*</span></label>
                                <select
                                    id="token"
                                    value={formData.token}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="" disabled>Select a token</option>
                                    {data[0]?.balances.map((coin) => (
                                        <option key={coin.token} value={coin.token}>{coin.token}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="send-money-form-group">
                                <label htmlFor="depoType">Select Deposit Action<span>*</span></label>
                                <select
                                    id="depoType"
                                    value={formData.depoType}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Select </option>
                                    <option value="yes" >Add Balance</option>
                                    <option value="no" >Change Balance</option>
                                  
                                    
                                </select>
                            </div>
                            <div className="send-money-form-group">
                                <label htmlFor="amount">Amount <span>*</span></label>
                                <input
                                    type="number"
                                    id="amount"
                                    placeholder="Enter amount"
                                    value={formData.amount || ''}
                                    onChange={(e) => setFormData((prev) => ({
                                        ...prev,
                                        amount: e.target.value,
                                    }))}
                                    required
                                />
                            </div>
                            <button type="submit" className="send-money-send-btn">Change User Balance</button>
                        </form>
                    </div>
                </div>
            )}

            {confirm && (
                <AdminConfirm
                    message="Are you sure you want to delete?"
                    onConfirm={onConfirmDelete}
                    onCancel={() => setConfirm(false)}
                />
            )}
        </div>
    );
}

export default Employees;
