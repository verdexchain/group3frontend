import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './adminpanel.css';
import { Link, useNavigate } from 'react-router-dom';

import { FaAlignLeft, FaSignOutAlt, FaUserAlt } from 'react-icons/fa';
import AdminSidebar from './AdminSideBar';
import Loader from '../../Components/Loader/Loader'; // Import your Loader component
import { useAuthContext } from '../../hooks/UseAuthContext';
import logo from '../../resources/images/logo.png'
import { useLogout } from '../../hooks/UseLogout';


function AdminPanel() {
    const [employee,setEmployee]=useState(null)
    const [queryData, setQueryData] = useState({
        users: null,
        transactions: null,
        tickets: null,
        admins:null
    });
    const [shouldMenuSlide, setShouldMenuSlide] = useState(false);
    const [dashUser, setDashUser] = useState(false);
    const [sidemenu, setSideMenu] = useState(false);
    const { user,dispatch } = useAuthContext();
    const {logout}=useLogout()
    const [loading, setLoading] = useState(true); // Loading state
    const navigate=useNavigate()
    // const logout=()=>{
    //     dispatch({type:'LOGOUT',payload:null})
    //     setTimeout(()=>{
    //         navigate('/admin/panel')

    //     },3000)
    // }

    useEffect(()=>{
        if(!user){
            navigate('/admin/login')
        }
    },[user])
    useEffect(()=>{

        axios.get(`${process.env.REACT_APP_API_URL}/employee/get-employee`,{
            headers:{
                Authorization:`Bearer ${user?.token}`
            }  
        }).then(response=>{
            console.log(response.data)
            setEmployee(response.data)

        }).catch(error=>{
            navigate('/signin')
            console.log(error)
        })
       },[user?.token])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [usersResponse, ticketsResponse, transactionResponse, adminResponse] = await Promise.all([
                    axios.get(`${process.env.REACT_APP_API_URL}/admin/users`, {
                        headers: {
                            Authorization: `Bearer ${user?.token}`,
                        },
                    }),
                    axios.get(`${process.env.REACT_APP_API_URL}/admin/get-tickets`, {
                        headers: {
                            Authorization: `Bearer ${user?.token}`,
                        },
                    }),
                    axios.get(`${process.env.REACT_APP_API_URL}/admin/get-transactions`, {
                        headers: {
                            Authorization: `Bearer ${user?.token}`,
                        },
                    }),
                    axios.get(`${process.env.REACT_APP_API_URL}/admin/get-all-admins`, {
                        headers: {
                            Authorization: `Bearer ${user?.token}`,
                        },
                    }),
                ]);
                console.log(usersResponse, ticketsResponse, transactionResponse, adminResponse)

                setQueryData({
                    users: usersResponse.data.length,
                    tickets: ticketsResponse.data.length,
                   transactions: transactionResponse.data.length,
                    admins: adminResponse.data.length,
                });
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false); // Stop loading
            }
        };

        fetchData();
    }, [user?.token]);

    return (
        <div className='admin dashboard'>
            <div className="dashboard-header">
                <div className="rights-side">
                    <Link to='/' style={{ textDecoration: 'none', color: 'white', cursor: 'pointer' }}>
                        <p>{process.env.REACT_APP_APP_NAME}</p>
                    </Link>
                    <FaAlignLeft onClick={() => {
                        setShouldMenuSlide(true);
                        setSideMenu(!sidemenu);
                    }} />
                </div>
                <div className="mid-side">
                <Link to="/" style={{ textDecoration: 'none', color: 'white', cursor: 'pointer' }}>
                    <img src={logo} alt="bill bit logo" />
                    </Link>

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
            <div className="main-admin-dash activities">
                {loading ? ( // Show loader while loading
                    <Loader /> // Replace with your loader component
                ) : (
                    <>
                        <div className="card-body activit1">
                            <p>Customers</p>
                            <span>{queryData.users}</span>
                            <Link style={{ textDecoration: 'none', color: 'white' }} to={'/admin/customers/'}>
                                <h3>Manage &#8594;</h3>
                            </Link>
                        </div>
                        <div className="card-body activit2">
                            <p>Suppliers</p>
                            <span>{queryData.users}</span>
                            <Link style={{ textDecoration: 'none', color: 'white' }} to={'/admin/suppliers'}>
                                <h3>Manage &#8594;</h3>
                            </Link>
                        </div>
                        {
                            employee?.flag=='admin'&&(
                                <div className="card-body activit2">
                            <p>Employees</p>
                            <span>{queryData.admins}</span>
                            <Link style={{ textDecoration: 'none', color: 'white' }} to={'/admin/employee'}>
                                <h3>Manage &#8594;</h3>
                            </Link>
                        </div>
                            )
                        }
                        <div className="card-body activit3">
                            <p>Products</p>
                            <span>{queryData.transactions}</span>
                            <Link style={{ textDecoration: 'none', color: 'white' }} to={'/admin/products'}>
                                <h3>Manage &#8594;</h3>
                            </Link>
                        </div>
                        <div className="card-body activit4">
                            <p>Tasks</p>
                            <span>{queryData.tickets}</span>
                            <Link
  style={{ textDecoration: 'none', color: 'white' }}
  to={
    employee?.flag == 'admin' 
      ? '/admin/create/tasks' 
      : '/admin/tasks'
  }
>
  <h3>Manage &#8594;</h3>
</Link>

                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default AdminPanel;
