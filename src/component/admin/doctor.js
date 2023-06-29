function Doctor() {
    return (
        <>
            <div className="wrapper">
  {/* start loading */}
  {/* <div id="loading">
    <p>pleas wait page loading ...</p>
  </div> */}
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
                <a className="nav-link dropdown-toggle" href="/blog" id="pageMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Blog</a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="blog.html">Blog</a>
                  <a className="dropdown-item" href="blog-detail.html">Blog Detail</a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/page" id="pageMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pages</a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="about.html">About Us</a>
                  <a className="dropdown-item" href="faq.html">FAQs</a>
                  <a className="dropdown-item" href="galary.html">Galary</a>
                  <a className="dropdown-item" href="price-list.html">Price list</a>
                </div>
              </li>
              <li className="nav-item"><a className="nav-link" href="/contact_home">Contact Us</a></li>
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
    <div className="inner-banner" style={{backgroundImage: 'url(assets/images/banner-doctors.jpg)'}}>
      <div className="container">
        <h3 className="title">Our <br /><big><strong>Specialist</strong></big></h3>
      </div>
    </div>
  </section>
  {/* Content Area */}
  <section className="main-section">
    {/* Our Team */}
    <div className="our-team doctors-team">
      <div className="container">
        <div className="row justify-content-between">
          <div className="section-title left col-lg-4" data-aos="fade-right">
            <h2><span>Meet </span>Our Team</h2>
            <p>Description text here...</p>
          </div>
          <div className="section-title right col-lg-8" data-aos="fade-left">
            <p><span className="color-212121">Oreo Hospital</span> The wise man therefore always holds in these
              matters to this principle of selection: he rejects pleasures to secure.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 col-sm-6">
            <div className="team-box text-center" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration={5000}>
              <div className="doctor-pic"><img src="assets/images/team-member-01.png" alt="Dr. John" /></div>
              <div className="doctor-info">
                <h4>Dr. John <span>Dentist</span></h4>
                <ul className="clearfix">
                  <li><a href="javascript:void(0);"><i className="zmdi zmdi-facebook" /></a></li>
                  <li><a href="javascript:void(0);"><i className="zmdi zmdi-twitter" /></a></li>
                  <li><a href="javascript:void(0);"><i className="zmdi zmdi-instagram" /></a></li>
                </ul>
                <a className="btn btn-simple btn-primary btn-round" href="doctors-detail.html">View More</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="team-box text-center" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration={4000}>
              <div className="doctor-pic"><img src="assets/images/team-member-02.png" alt="Dr. Amelia" /></div>
              <div className="doctor-info">
                <h4>Dr. Amelia <span>Gynecologist</span></h4>
                <ul className="clearfix">
                  <li><a href="javascript:void(0);"><i className="zmdi zmdi-twitter" /></a></li>
                  <li><a href="javascript:void(0);"><i className="zmdi zmdi-instagram" /></a></li>
                </ul>
                <a className="btn btn-simple btn-primary btn-round" href="doctors-detail.html">View More</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="team-box text-center" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration={3000}>
              <div className="doctor-pic"><img src="assets/images/team-member-03.png" alt="Dr. Jack" /></div>
              <div className="doctor-info">
                <h4>Dr. Jack <span>Audiology</span></h4>
                <ul className="clearfix">
                  <li><a href="javascript:void(0);"><i className="zmdi zmdi-facebook" /></a></li>
                  <li><a href="javascript:void(0);"><i className="zmdi zmdi-twitter" /></a></li>
                  <li><a href="javascript:void(0);"><i className="zmdi zmdi-instagram" /></a></li>
                  <li><a href="javascript:void(0);"><i className="zmdi zmdi-google-plus" /></a></li>
                </ul>
                <a className="btn btn-simple btn-primary btn-round" href="doctors-detail.html">View More</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="team-box text-center" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration={3000}>
              <div className="doctor-pic"><img src="assets/images/team-member-04.png" alt="Dr. Charlie" /></div>
              <div className="doctor-info">
                <h4>Dr. Charlie<span>Dentist</span></h4>
                <ul className="clearfix">
                  <li><a href="javascript:void(0);"><i className="zmdi zmdi-facebook" /></a></li>
                  <li><a href="javascript:void(0);"><i className="zmdi zmdi-twitter" /></a></li>
                  <li><a href="javascript:void(0);"><i className="zmdi zmdi-instagram" /></a></li>
                </ul>
                <a className="btn btn-simple btn-primary btn-round" href="doctors-detail.html">View More</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="team-box text-center" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration={5000}>
              <div className="doctor-pic"><img src="assets/images/team-member-05.png" alt="Dr. John" /></div>
              <div className="doctor-info">
                <h4>Dr. Joseph <span>Dentist</span></h4>
                <ul className="clearfix">
                  <li><a href="javascript:void(0);"><i className="zmdi zmdi-facebook" /></a></li>
                  <li><a href="javascript:void(0);"><i className="zmdi zmdi-twitter" /></a></li>
                  <li><a href="javascript:void(0);"><i className="zmdi zmdi-instagram" /></a></li>
                </ul>
                <a className="btn btn-simple btn-primary btn-round" href="doctors-detail.html">View More</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="team-box text-center" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration={4000}>
              <div className="doctor-pic"><img src="assets/images/team-member-06.png" alt="Dr. Amelia" /></div>
              <div className="doctor-info">
                <h4>Dr. Sophie <span>Gynecologist</span></h4>
                <ul className="clearfix">
                  <li><a href="javascript:void(0);"><i className="zmdi zmdi-twitter" /></a></li>
                  <li><a href="javascript:void(0);"><i className="zmdi zmdi-instagram" /></a></li>
                </ul>
                <a className="btn btn-simple btn-primary btn-round" href="doctors-detail.html">View More</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="team-box text-center" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration={3000}>
              <div className="doctor-pic"><img src="assets/images/team-member-07.png" alt="Dr. Jack" /></div>
              <div className="doctor-info">
                <h4>Dr. William <span>Audiology</span></h4>
                <ul className="clearfix">
                  <li><a href="javascript:void(0);"><i className="zmdi zmdi-facebook" /></a></li>
                  <li><a href="javascript:void(0);"><i className="zmdi zmdi-twitter" /></a></li>
                  <li><a href="javascript:void(0);"><i className="zmdi zmdi-instagram" /></a></li>
                  <li><a href="javascript:void(0);"><i className="zmdi zmdi-google-plus" /></a></li>
                </ul>
                <a className="btn btn-simple btn-primary btn-round" href="doctors-detail.html">View More</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="team-box text-center" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration={3000}>
              <div className="doctor-pic"><img src="assets/images/team-member-08.png" alt="Dr. Charlie" /></div>
              <div className="doctor-info">
                <h4>Dr. Jessica<span>Dentist</span></h4>
                <ul className="clearfix">
                  <li><a href="javascript:void(0);"><i className="zmdi zmdi-facebook" /></a></li>
                  <li><a href="javascript:void(0);"><i className="zmdi zmdi-twitter" /></a></li>
                  <li><a href="javascript:void(0);"><i className="zmdi zmdi-instagram" /></a></li>
                </ul>
                <a className="btn btn-simple btn-primary btn-round" href="doctors-detail.html">View More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Our Team */}
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
export default Doctor