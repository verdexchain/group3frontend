import {Route,Routes} from 'react-router-dom'
import Signup from './Pages/Signup/Signup';
import Signin from './Pages/Signin/Signin'
import AdminPanel from './Pages/Admin Panel/AdminPanel';
import  Users from './Pages/Admin Panel/Users'
import Administrators from './Pages/Admin Panel/Administrators';
import  Transaction from './Pages/Admin Panel/Transaction'
import Notify from './Pages/Admin Panel/Notify'
import Tickets from './Pages/Admin Panel/Tickets'
import Customers from './Pages/Admin Panel/Customers';
import CreateCustomer from './Pages/Admin Panel/CreateCustomer';
import CreateProduct from './Pages/Admin Panel/CreateProduct';
import CreateSupplier from './Pages/Admin Panel/CreateSupplier';
import Supplier from './Pages/Admin Panel/Supplier';
import Products from './Pages/Admin Panel/Products';
import Employees from './Pages/Admin Panel/Employees';
import Home from './Pages/Home/Home';
import BlogPostsSection from './Pages/Home/BlogPostsSection';
import UploadToGitHub from './Pages/Home/UploadToGitHub';


function App() {
  return (
   <div className='App'>
     <wc-toast />
    <Routes>

      <Route path='/signup' element={<Signup />} />
      <Route path='/' element={<Home />} />
      <Route path='/upload' element={<UploadToGitHub/>} />
      <Route path='/news' element={<BlogPostsSection />} />
      
      <Route path='/signin' element={<Signin />} />
      <Route path='/dashboard' element={<AdminPanel />}/>
      {/* <Route path='/admin/login/' element={<AdminLogin/>}/> */}
        
        <Route path='/admin/users/' element={<Users/>}/>
        <Route path='/admin/customers/' element={<Customers/>}/>
        <Route path='/admin/suppliers/' element={<Supplier/>}/>
        <Route path='/admin/products/' element={<Products/>}/>
        <Route path='/admin/admins/' element={<Administrators/>}/>
        <Route path='/admin/transactions/' element={<Transaction/>}/>
        <Route path='/admin/create/tasks/' element={<Notify/>}/>
        <Route path='/admin/create/customer/' element={<CreateCustomer/>}/>
        <Route path='/admin/tasks' element={<Tickets />}/>
        <Route path='/admin/employee' element={<Employees />}/>
        <Route path='/admin/create/product/' element={<CreateProduct/>}/>
        <Route path='/admin/create/supplier/' element={<CreateSupplier/>}/>


    </Routes>
   </div>
    

  );
}

export default App;
