import { useState } from "react"
import axios from 'axios'
import '../../css/hospital management Admin/assets/plugins/bootstrap/css/bootstrap.min.css'
import '../../css/hospital management Admin/light/assets/css/main.css'
import '../../css/hospital management Admin/light/assets/css/authentication.css'
import '../../css/hospital management Admin/light/assets/css/color_skins.css'
function Register()
{

    const [email , setemail] = useState('')
    const [password , setpassword] = useState('')
    const [name , setname] = useState('')
    function submit()
    {
        // if(name =='')
        // {
        //     alert('enter your name')
        // }
        // else if(password = '')
        // {
        //     alert('enter your passwrod')
        // }
        // else if(email == '')
        // {
        //     alert('enter your email')
        // }
        // else
        // {
            axios.post('http://localhost/doctor/user/register.php',{
                email:email,
                password:password,
                name:name
              })
            .then(function (response) {
              console.log(response);
              window.location.href='/'
            })
            .catch(function (error) {
              console.log(error);
            })
        // }
     
   
    }
    return(
        <>
     <div classname="theme-cyan authentication sidebar-collapse">
  <nav className="navbar navbar-expand-lg fixed-top navbar-transparent">
    <div className="container">        
      <div className="navbar-translate n_logo">
        <a className="navbar-brand" href="javascript:void(0);" title target="_blank">Oreo</a>
        <button className="navbar-toggler" type="button">
          <span className="navbar-toggler-bar bar1" />
          <span className="navbar-toggler-bar bar2" />
          <span className="navbar-toggler-bar bar3" />
        </button>
      </div>
      <div className="navbar-collapse">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="index.html">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="javascript:void(0);">Search Result</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" title="Follow us on Twitter" href="javascript:void(0);" target="_blank">
              <i className="zmdi zmdi-twitter" />
              <p className="d-lg-none d-xl-none">Twitter</p>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" title="Like us on Facebook" href="javascript:void(0);" target="_blank">
              <i className="zmdi zmdi-facebook" />
              <p className="d-lg-none d-xl-none">Facebook</p>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" title="Follow us on Instagram" href="javascript:void(0);" target="_blank">                        
              <i className="zmdi zmdi-instagram" />
              <p className="d-lg-none d-xl-none">Instagram</p>
            </a>
          </li>                
          <li className="nav-item">
            <a className="nav-link btn btn-white btn-round btn2" href="/login">SIGN IN</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  {/* End Navbar */}
  <div className="page-header">
    <div className="page-header-image"  />
    <div className="container">
      <div className="col-md-12 content-center">
        <div className="card-plain">
          <form className="form" method action="#">
            <div className="header">
              <div className="logo-container">
                <img src="https://thememakker.com/templates/oreo/hospital/html/assets/images/logo.svg" alt  style={{height:'100px' , width:'100px'}}/>
              </div >
              <h5>Sign Up</h5>
              <span>Register a new membership</span>
            </div>
            <div className="content">                                                
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Enter User Name" name="name" onChange={(i)=> setname(i.target.value)}/>
                <span className="input-group-addon">
                  <i className="zmdi zmdi-account-circle" />
                </span>
              </div>
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Enter Email"  name="email" onChange={(i)=> setemail(i.target.value)}/>
                <span className="input-group-addon">
                  <i className="zmdi zmdi-email" />
                </span>
              </div>
              <div className="input-group">
                <input type="password" placeholder="Password" className="form-control" name="password" onChange={(i)=> setpassword(i.target.value)}/>
                <span className="input-group-addon">
                  <i className="zmdi zmdi-lock" />
                </span>
              </div>                        
            </div>
            <div className="checkbox">
              <input id="terms" type="checkbox" />
              <label htmlFor="terms">
                I read and agree to the <a href="javascript:void(0);">terms of usage</a>
              </label>
            </div>
            <div className="footer text-center">
              <a href="/" >
              <button type="button" onClick={submit} className="btn btn-primary btn-round btn-block  waves-effect waves-light" id="btn1">SIGN UP</button></a>
              <h5><a className="link" href="sign-in.html">You already have a membership?</a></h5>
            </div>
          </form>
        </div>
      </div>
    </div>
    <footer className="footer">
      <div className="container">
        <nav>
          <ul>
            <li><a href="http://thememakker.com/contact/" target="_blank">Contact Us</a></li>
            <li><a href="http://thememakker.com/about/" target="_blank">About Us</a></li>
            <li><a href="javascript:void(0);">FAQ</a></li>
          </ul>
        </nav>
        <div className="copyright">
          ©
          ,
          <span>Designed by <a href="http://thememakker.com/" target="_blank">ThemeMakker</a></span>
        </div>
      </div>
    </footer>
  </div>
</div>

        </>
    )
}
export default Register