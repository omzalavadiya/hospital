import logo from './logo.svg';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom"
import Login from './component/admin/Login';



import Register from './component/admin/register';
import Dashboard from './component/admin/dashboard';
import Contact from './component/admin/contact';
import Adddoctor from './component/admin/add_doctor';
import Addpatient from './component/admin/addpatient';
import Inbox from './component/admin/inbox';
import Home from './component/admin/home';
import Service from './component/admin/service';
import Department from './component/admin/department';
import Doctor from './component/admin/doctor';
import Blog from './component/admin/blog';
import Contact_home from './component/admin/contact_home';
import View_doctor from './component/admin/view_doctor';
import View_patient from './component/admin/view_patient';
import View_profile from './component/admin/view_profile';

function App() {
  return (
    <div className="App theme-cyan">
      <Routes>
        <Route path="/register" element={window.localStorage.getItem('id') != null ? <Dashboard /> : <Register />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={window.localStorage.getItem('id') == null ? <Login /> : <Dashboard />} />
        <Route path="/dashboard" element={window.localStorage.getItem("id") !== null ? <Dashboard /> : <Login />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/adddoctor' element={<Adddoctor />} />
        <Route path='/addpatient' element={<Addpatient />} />
        <Route path='/inbox' element={<Inbox />} />
        <Route path='/home' element={<Home />} />
        <Route path='/service' element={<Service />} />
        <Route path='/department' element={<Department />} />
        <Route path='/doctor' element={<Doctor />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact_home' element={<Contact_home />} />
        <Route path='/viewdoctor' element={<View_doctor />} />
        <Route path='/viewpatient' element={<View_patient />} />
        <Route path='/viewprofile/:id' element={<View_profile />} />
      </Routes>
    </div>
  );
}

export default App;
