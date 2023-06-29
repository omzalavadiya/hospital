function Contact_home()
{
    return(
        <>
        <div className="wrapper">
  {/* start loading */}
  <div id="loading">
    <p>pleas wait page loading ...</p>
  </div>
  <div className="main_header">
    <section id="top-nav">
      <div className="container">
        <div className="top">
          <div className="row">
            <div className="col-lg-6 col-md-7">
              <div className="left">
                <ul className="list-unstyled m-b-0">
                  <li><a href="#" className="btn btn-link"><i className="zmdi zmdi-email m-r-5" />info@example.com</a>
                    <a href="#" className="btn btn-link"><i className="zmdi zmdi-phone m-r-5" />+
                      202-555-0191</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-5">
              <div className="text-right d-none d-md-block">
                <ul className="list-unstyled m-b-0">
                  <li><a href="/login" className="btn btn-link">Sign in</a> <a href="/register" className="btn btn-link">sign
                      up</a></li>
                </ul>
              </div>
      </div>
            </div>
          </div>
        </div>
    </section>
    <header id="header">
      <div className="container">
        <div className="head">
          <div className="row">
            <div className="col-lg-5 col-sm-5">
              <a href="index.html" className="navbar-brand"><img src="assets/images/logo.svg" alt="logo" /></a>
            </div>
            <div className="col-lg-7 col-sm-7">
              <div className="text-right d-none d-md-block">
                <p className="col-white m-b-0 p-t-5"><i className="zmdi zmdi-time" /> Mon - Sat: 9:00 - 18:00
                  Sunday CLOSED </p>
                <p className="col-white m-b-0"><i className="zmdi zmdi-pin" /> 1422 1st St. Santa Rosa CA
                  94559. United States </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div id="navbar" data-aos="fade-down">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarMenu" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
          <div className="collapse navbar-collapse" id="navbarMenu">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item"><a className="nav-link" href="/service">Services</a></li>
              <li className="nav-item"><a className="nav-link" href="/department">Departments</a></li>
              <li className="nav-item"><a className="nav-link" href="/doctor">Doctors</a></li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="javascript:void(0);" id="pageMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Blog</a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="blog.html">Blog</a>
                  <a className="dropdown-item" href="blog-detail.html">Blog Detail</a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="javascript:void(0);" id="pageMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pages</a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="about.html">About Us</a>
                  <a className="dropdown-item" href="faq.html">FAQs</a>
                  <a className="dropdown-item" href="galary.html">Galary</a>
                  <a className="dropdown-item" href="price-list.html">Price list</a>
                </div>
              </li>
              <li className="nav-item"><a className="nav-link" href="/contact">Contact Us</a></li>
              <li className="nav-item d-md-none d-lg-none d-xl-none"><a className="nav-link" href="javascript:void(0);">Sign in</a></li>
              <li className="nav-item d-md-none d-lg-none d-xl-none"><a className="nav-link" href="javascript:void(0);">Sign up</a></li>
            </ul>
            <form className="form-inline my-2 my-lg-0 d-none d-lg-inline-block">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            </form>
          </div>
        </nav>
      </div>
    </div>
  </div>
  {/* start hero */}
  <section id="hero">
    <div className="inner-banner" style={{backgroundImage: 'url(assets/images/banner-contactus.jpg)'}}>
      <div className="container">
        <h3 className="title">Oreo <br /><big><strong>Contact Us</strong></big></h3>
      </div>
    </div>
  </section>
  {/* Content Area */}
  <section className="main-section">
    {/* Contact Section */}
    <div className="contact-section">
      <div className="container">
        <div className="row">
          <div className="section-title col-12" data-aos="fade-right">
            <h2><span>Get Touch </span>With Us</h2>
            <p>Description text here...</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 col-sm-6">
            <div className="contact-form">
              <div className="row">
                <div className="col-sm-12 appoitntment-title">Make an Appointment</div>
                <div className="col-md-6 col-sm-12">
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Enter Name" />
                  </div>
                </div>
                <div className="col-md-6 col-sm-12">
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Enter Email" />
                  </div>
                </div>
                <div className="col-md-6 col-sm-12">
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Enter Phone" />
                  </div>
                </div>
                <div className="col-md-6 col-sm-12">
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Subject" />
                  </div>
                </div>
                <div className="col-sm-12 textarea">
                  <div className="form-group">
                    <textarea className="form-control" placeholder="Your Message.." defaultValue={""} />
                  </div>
                </div>
                <div className="col-sm-12">
                  <button className="btn btn-primary btn-round">Submit</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="contact-sidebar">
              <h4>Quick Contact</h4>
              <p>If you have any questions simply use the following contact details.</p>
              <ul className="list-unstyled add-grp">
                <li>
                  <i className="zmdi zmdi-pin" />
                  <p>121, Park Drive, Varick Str<br />New York, NY 10012, USA</p>
                </li>
                <li>
                  <i className="zmdi zmdi-phone" />
                  <p>+ (123) 0200 12345,<br />+ 1800-45-678-9012</p>
                </li>
                <li>
                  <i className="zmdi zmdi-email" />
                  <p>Mailus@hospitalteam.com</p>
                </li>
              </ul>
              <ul className="list-unstyled social-icon clearfix">
                <li>
                  <a href="javascript:void(0);"><i className="zmdi zmdi-facebook-box" /></a>
                </li>
                <li>
                  <a href="javascript:void(0);"><i className="zmdi zmdi-google-plus-box" /></a>
                </li>
                <li>
                  <a href="javascript:void(0);"><i className="zmdi zmdi-linkedin-box" /></a>
                </li>
                <li>
                  <a href="javascript:void(0);"><i className="zmdi zmdi-twitter-box" /></a>
                </li>
                <li>
                  <a href="javascript:void(0);"><i className="zmdi zmdi-pinterest-box" /></a>
                </li>
                <li>
                  <a href="javascript:void(0);"><i className="zmdi zmdi-instagram" /></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Contact Section */}
    {/* Contact Map */}
    <div className="map-main">
      <img src="assets/images/map.jpg" alt />
    </div>
    {/* Contact Map */}
    {/* Our Partner */}
    <div className="our-partner">
      <div className="container">
        <div className="row">
          <div className="section-title col-12" data-aos="fade-right">
            <h2><span>Our </span>Partners</h2>
            <p>Description text here...</p>
          </div>
        </div>
        <div className="row out-partner-logo">
          <div className="col-lg-2 col-md-6 col-sm-6"><a href="javascript:void(0);"><img src="assets/images/partner-logo-1.png" alt /></a></div>
          <div className="col-lg-2 col-md-6 col-sm-6"><a href="javascript:void(0);"><img src="assets/images/partner-logo-2.png" alt /></a></div>
          <div className="col-lg-2 col-md-6 col-sm-6"><a href="javascript:void(0);"><img src="assets/images/partner-logo-3.png" alt /></a></div>
          <div className="col-lg-2 col-md-6 col-sm-6"><a href="javascript:void(0);"><img src="assets/images/partner-logo-4.png" alt /></a></div>
          <div className="col-lg-2 col-md-6 col-sm-6"><a href="javascript:void(0);"><img src="assets/images/partner-logo-1.png" alt /></a></div>
          <div className="col-lg-2 col-md-6 col-sm-6"><a href="javascript:void(0);"><img src="assets/images/partner-logo-5.png" alt /></a></div>
        </div>
      </div>
    </div>
    {/* Contact Map */}
  </section>
  {/* start footer */}
  <footer id="footer">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="form" data-aos="fade-up" data-aos-duration={3000}>
            <div className="row">
              <div className="col-lg-4 col-md-4">
                <div className="form-group m-b-0">
                  <input type="text" defaultValue placeholder="your name" className="form-control" />
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="form-group m-b-0">
                  <input type="text" defaultValue placeholder="your email" className="form-control" />
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <button className="btn btn-primary btn-round btn-block margin-0">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row" data-aos="fade-up">
        <div className="col-lg-4 col-md-12">
          <div className="fcard about">
            <h5 className="title">About Hospitals</h5>
            <p>The relentless service of Hospitals in the past 25 years taken health care to the most modern
              levels in the region catering to urban &amp; rural.</p>
            <p>A Health Care Provider of Western Approach, Hospitals is the most trusted multispecialty
              hospital.</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="fcard links">
            <h5 className="title">Usefull Links</h5>
            <div className="row">
              <div className="col-6">
                <ul className="list-unstyled">
                  <li><a href="about.html">About Us</a></li>
                  <li><a href="javascript:void(0);">Consultants</a></li>
                  <li><a href="javascript:void(0);">Working Hours</a></li>
                  <li><a href="javascript:void(0);">Procedures</a></li>
                  <li><a href="javascript:void(0);">Special Offers</a></li>
                </ul>
              </div>
              <div className="col-6">
                <ul className="list-unstyled">
                  <li><a href="javascript:void(0);">Services</a></li>
                  <li><a href="javascript:void(0);">Healthy Foods</a></li>
                  <li><a href="javascript:void(0);">Appointments</a></li>
                  <li><a href="javascript:void(0);">Latest News</a></li>
                  <li><a href="javascript:void(0);">Certificates</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="fcard contact links">
            <h5 className="title">Contact Details</h5>
            <ul className="list-unstyled">
              <li><i className="zmdi zmdi-pin" />Park Drive, Varick Str NY 10012, USA</li>
              <li><i className="zmdi zmdi-email" />Getwell@Hospitals.com</li>
              <li><i className="zmdi zmdi-phone" />(123) 0200 12345 &amp; 7890</li>
              <li><i className="zmdi zmdi-time" />Mon-Friday: 9am to 18pm</li>
              <li><i className="zmdi zmdi-time" />Sat-Sunday: 10am to 16pm</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="copyright">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <small>Copyright © 2018 Oreo Theme by <a href="http://thememakker.com/" target="_blank">ThemeMakker</a>
            </small>
          </div>
          <div className="col-lg-2 col-md-2">
            <div className="up"><a href="#header"><i className="zmdi zmdi-caret-up-circle" /></a></div>
          </div>
          <div className="col-lg-4 col-md-4">
            <div className="social float-md-right"><a href="#"><i className="zmdi zmdi-facebook m-r-10" /></a> <a href="#"><i className="zmdi zmdi-twitter m-r-10" /></a> <a href="#"><i className="zmdi zmdi-dribbble m-r-10" /></a> <a href="#"><i className="zmdi zmdi-behance m-r-10" /></a></div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</div>

        </>
    )
}
export default Contact_home