function Department()
{
    return(
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
    <div className="inner-banner" style={{backgroundImage: 'url(assets/images/banner-department.jpg)'}}>
      <div className="container">
        <h3 className="title">Oreo Hospital<br /><big><strong>Departments</strong></big></h3>
      </div>
    </div>
  </section>
  {/* Content Area */}
  <section className="main-section">
    {/* Departments List */}
    <div className="department-list">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-6">
            <div className="department-box box-img-cnt" data-aos="fade-up" data-aos-duration={6000}>
              <div className="box-img"><img src="assets/images/department-1.jpg" alt /></div>
              <div className="box-cnt">
                <h4>CARDIOLOGY</h4>
                <p>How all this mistaken al idea of denouncing pleasure praisings pain [...]</p>
                <a className="btn btn-primary btn-simple btn-round" href="javascript:void(0);">View More</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="department-box box-img-cnt" data-aos="fade-up" data-aos-duration={5000}>
              <div className="box-img"><img src="assets/images/department-2.jpg" alt /></div>
              <div className="box-cnt">
                <h4>PULMONOLOGY</h4>
                <p>How all this mistaken al idea of denouncing pleasure praisings pain [...]</p>
                <a className="btn btn-primary btn-simple btn-round" href="javascript:void(0);">View More</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="department-box box-img-cnt" data-aos="fade-up" data-aos-duration={3000}>
              <div className="box-img"><img src="assets/images/department-3.jpg" alt /></div>
              <div className="box-cnt">
                <h4>GYNECOLOGY</h4>
                <p>How all this mistaken al idea of denouncing pleasure praisings pain [...]</p>
                <a className="btn btn-primary btn-simple btn-round" href="javascript:void(0);">View More</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="department-box box-img-cnt" data-aos="fade-up" data-aos-duration={4000}>
              <div className="box-img"><img src="assets/images/department-4.jpg" alt /></div>
              <div className="box-cnt">
                <h4>NEUROLOGY</h4>
                <p>How all this mistaken al idea of denouncing pleasure praisings pain [...]</p>
                <a className="btn btn-primary btn-simple btn-round" href="javascript:void(0);">View More</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="department-box box-img-cnt" data-aos="fade-up" data-aos-duration={4000}>
              <div className="box-img"><img src="assets/images/department-5.jpg" alt /></div>
              <div className="box-cnt">
                <h4>UROLOGY</h4>
                <p>How all this mistaken al idea of denouncing pleasure praisings pain [...]</p>
                <a className="btn btn-primary btn-simple btn-round" href="javascript:void(0);">View More</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="department-box box-img-cnt" data-aos="fade-up" data-aos-duration={3000}>
              <div className="box-img"><img src="assets/images/department-6.jpg" alt /></div>
              <div className="box-cnt">
                <h4>Detal</h4>
                <p>How all this mistaken al idea of denouncing pleasure praisings pain [...]</p>
                <a className="btn btn-primary btn-simple btn-round" href="javascript:void(0);">View More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Departments List */}
    {/* Home Why choose us */}
    <div className="why-choose-us">
      <div className="container">
        <div className="row">
          <div className="section-title col-12" data-aos="fade-right">
            <h2><span>Why </span>Choose Us</h2>
            <p>Description text here...</p>
          </div>
        </div>
        <div className="row justify-content-between">
          <div className="col-lg-6 col-md-12">
            <div className="common-cnt">
              <div className="section-top" data-aos="fade-down">
                <p>Our goal is to make sure<br />
                  with advances in <br />
                  technology</p>
              </div>
              <p data-aos="fade-down" data-aos-duration={3000}>Professional dental clinic 32roDent offers the whole range of dentistry services:
                treatment of caries, gum diseases, tooth whitening, implantation, dentures (crowns
                installation), surgery, correction (braces) etc.</p>
              <p>
                <a className="btn btn-primary btn-round" data-aos="flip-up">More about practice</a>
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="box-img" data-aos="fade-left" data-aos-duration={3000}>
              <img src="assets/images/why-choose-img.png" alt />
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Home Why choose us */}
    {/* Blog */}
    <div className="home-blog">
      <div className="container">
        <div className="row">
          <div className="section-title col-12" data-aos="fade-right">
            <h2><span>Latest </span>From Blog</h2>
            <p>Description text here...</p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="blog-box">
              <div className="blog-img">
                <img src="assets/images/blog-1.png" alt />
              </div>
              <div className="blog-cnt">
                <h5><a href="javascript:void(0);">How to handle your kids’ from Lorem ipsum dolor sit amet</a></h5>
                <p>The great explorer of the truth, master builder of human happiness one rejects,
                  dislikes[...]</p>
              </div>
              <div className="blog-info">
                <span className="blog-date"><i className="zmdi zmdi-calendar" /> 02 Feb 2018</span>
                <span className="blog-comment"><i className="zmdi zmdi-comments" /> Comment ( 25 )</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="blog-box">
              <div className="blog-img">
                <img src="assets/images/blog-2.png" alt />
              </div>
              <div className="blog-cnt">
                <h5><a href="javascript:void(0);">How to handle your kids’ from Lorem ipsum dolor sit amet</a></h5>
                <p>The great explorer of the truth, master builder of human happiness one rejects,
                  dislikes[...]</p>
              </div>
              <div className="blog-info">
                <span className="blog-date"><i className="zmdi zmdi-calendar" /> 02 Feb 2018</span>
                <span className="blog-comment"><i className="zmdi zmdi-comments" /> Comment ( 25 )</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="blog-box">
              <div className="blog-img">
                <img src="assets/images/blog-3.png" alt />
              </div>
              <div className="blog-cnt">
                <h5><a href="javascript:void(0);">How to handle your kids’ from Lorem ipsum dolor sit amet</a></h5>
                <p>The great explorer of the truth, master builder of human happiness one rejects,
                  dislikes[...]</p>
              </div>
              <div className="blog-info">
                <span className="blog-date"><i className="zmdi zmdi-calendar" /> 02 Feb 2018</span>
                <span className="blog-comment"><i className="zmdi zmdi-comments" /> Comment ( 25 )</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Blog */}
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
export default Department