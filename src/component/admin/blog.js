function Blog()
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
    <div className="inner-banner" style={{backgroundImage: 'url(assets/images/banner-blog.jpg)'}}>
      <div className="container">
        <h3 className="title">Our <br /><big><strong>Blog</strong></big></h3>
      </div>
    </div>
  </section>
  {/* Content Area */}
  <section className="main-section blog-page">
    {/* Blog */}
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-md-12 left-box">
          <div className="card single_post" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
            <div className="body">
              <h3 className="m-t-0 m-b-5"><a href="blog-detail.html">All photographs are accurate. None of them is the truth</a></h3>
              <ul className="meta">
                <li><a href="javascript:void(0);"><i className="zmdi zmdi-account col-blue" />Posted By: John Smith</a></li>
                <li><a href="javascript:void(0);"><i className="zmdi zmdi-label col-red" />Traumatology</a></li>
                <li><a href="javascript:void(0);"><i className="zmdi zmdi-comment-text col-blue" />Comments: 3</a></li>
              </ul>
            </div>                    
            <div className="body">
              <div className="img-post m-b-15">
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                  <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active">
                      <img className="d-block img-fluid" src="assets/images/blog/blog-page-1.jpg" alt="First slide" />
                    </div>
                    <div className="carousel-item">
                      <img className="d-block img-fluid" src="assets/images/blog/blog-page-2.jpg" alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                      <img className="d-block img-fluid" src="assets/images/blog/blog-page-3.jpg" alt="Third slide" />
                    </div>
                  </div>
                  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="sr-only">Previous</span>
                  </a>
                  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="sr-only">Next</span>
                  </a>
                </div>
                <div className="social_share">                            
                  <button className="btn btn-primary btn-icon btn-icon-mini btn-round"><i className="zmdi zmdi-facebook" /></button>
                  <button className="btn btn-primary btn-icon btn-icon-mini btn-round"><i className="zmdi zmdi-twitter" /></button>
                  <button className="btn btn-primary btn-icon btn-icon-mini btn-round"><i className="zmdi zmdi-instagram" /></button>
                </div>
              </div>
              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal</p>
              <a href="blog-detail.html" title="read more" className="btn btn-round btn-info">Read More</a>                        
            </div>
          </div>
          <div className="card single_post" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
            <div className="body">
              <h3 className="m-t-0 m-b-5"><a href="blog-detail.html">Apple Introduces Search Ads Basic</a></h3>
              <ul className="meta">
                <li><a href="javascript:void(0);"><i className="zmdi zmdi-account col-blue" />Posted By: John Smith</a></li>
                <li><a href="javascript:void(0);"><i className="zmdi zmdi-label col-amber" />Orthodontics</a></li>
                <li><a href="javascript:void(0);"><i className="zmdi zmdi-comment-text col-blue" />Comments: 3</a></li>
              </ul>
            </div>                    
            <div className="body">
              <div className="img-post m-b-15">
                <img src="assets/images/blog/blog-page-2.jpg" alt="Awesome Image" />
                <div className="social_share">                            
                  <button className="btn btn-primary btn-icon btn-icon-mini btn-round"><i className="zmdi zmdi-facebook" /></button>
                  <button className="btn btn-primary btn-icon btn-icon-mini btn-round"><i className="zmdi zmdi-twitter" /></button>
                  <button className="btn btn-primary btn-icon btn-icon-mini btn-round"><i className="zmdi zmdi-instagram" /></button>
                </div>
              </div>
              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal</p>
              <a href="blog-detail.html" title="read more" className="btn btn-round btn-info">Read More</a>                        
            </div>
          </div>
          <div className="card single_post" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
            <div className="body">
              <h3 className="m-t-0 m-b-5"><a href="blog-detail.html">WTCR from 2018: new rules, more cars, more races</a></h3>
              <ul className="meta">
                <li><a href="javascript:void(0);"><i className="zmdi zmdi-account col-blue" />Posted By: John Smith</a></li>
                <li><a href="javascript:void(0);"><i className="zmdi zmdi-label col-lime" />Traumatology</a></li>
                <li><a href="javascript:void(0);"><i className="zmdi zmdi-comment-text col-blue" />Comments: 18</a></li>
              </ul>
            </div>                    
            <div className="body">
              <div className="img-post m-b-15">
                <img src="assets/images/blog/blog-page-3.jpg" alt="Awesome Image" />
                <div className="social_share">                            
                  <button className="btn btn-primary btn-icon btn-icon-mini btn-round"><i className="zmdi zmdi-facebook" /></button>
                  <button className="btn btn-primary btn-icon btn-icon-mini btn-round"><i className="zmdi zmdi-twitter" /></button>
                  <button className="btn btn-primary btn-icon btn-icon-mini btn-round"><i className="zmdi zmdi-instagram" /></button>
                </div>
              </div>
              <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old</p>
              <a href="blog-detail.html" title="read more" className="btn btn-round btn-info">Read More</a>                        
            </div>
          </div>
          <div className="card single_post" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
            <div className="body">
              <h3 className="m-t-0 m-b-5"><a href="blog-detail.html">CSS Timeline Examples from CodePen</a></h3>
              <ul className="meta">
                <li><a href="javascript:void(0);"><i className="zmdi zmdi-account col-blue" />Posted By: John Smith</a></li>
                <li><a href="javascript:void(0);"><i className="zmdi zmdi-label col-green" />Cardiology</a></li>
                <li><a href="javascript:void(0);"><i className="zmdi zmdi-comment-text col-blue" />Comments: 8</a></li>
              </ul>
            </div>                    
            <div className="body">
              <div className="img-post m-b-15">
                <img src="assets/images/blog/blog-page-4.jpg" alt="Awesome Image" />
                <div className="social_share">                            
                  <button className="btn btn-primary btn-icon btn-icon-mini btn-round"><i className="zmdi zmdi-facebook" /></button>
                  <button className="btn btn-primary btn-icon btn-icon-mini btn-round"><i className="zmdi zmdi-twitter" /></button>
                  <button className="btn btn-primary btn-icon btn-icon-mini btn-round"><i className="zmdi zmdi-instagram" /></button>
                </div>
              </div>
              <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words</p>
              <a href="blog-detail.html" title="read more" className="btn btn-round btn-info">Read More</a>                        
            </div>
          </div>                               
          <ul className="pagination pagination-primary" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
            <li className="page-item"><a className="page-link" href="javascript:void(0);">Previous</a></li>
            <li className="page-item active"><a className="page-link" href="javascript:void(0);">1</a></li>
            <li className="page-item"><a className="page-link" href="javascript:void(0);">2</a></li>
            <li className="page-item"><a className="page-link" href="javascript:void(0);">3</a></li>
            <li className="page-item"><a className="page-link" href="javascript:void(0);">Next</a></li>
          </ul>                
        </div>
        <div className="col-lg-4 col-md-12 right-box">
          <div className="card">
            <div className="body search">
              <div className="input-group m-b-0">
                <input type="text" className="form-control" placeholder="Search..." />
                <span className="input-group-addon">
                  <i className="zmdi zmdi-search" />
                </span>
              </div>
            </div>
          </div>
          <div className="card" data-aos="fade-left" data-aos-offset={200} data-aos-duration={2000}>
            <div className="header">
              <h2><strong>Popular</strong> Posts</h2>                        
            </div>
            <div className="body widget popular-post">
              <div className="row">
                <div className="col-xl-12 col-lg-12">
                  <div className="border single_post">                                    
                    <div className="img-post m-b-5">
                      <img src="assets/images/blog/blog-page-2.jpg" alt="Awesome Image" />                                        
                    </div>
                    <p className="m-b-0">Apple Introduces Search Ads Basic</p>
                    <small>Dec 20, 2017</small>
                  </div>
                  <div className="border single_post m-t-20">
                    <div className="img-post m-b-5">
                      <img src="assets/images/blog/blog-page-3.jpg" alt="Awesome Image" />                                            
                    </div>
                    <p className="m-b-0">new rules, more cars, more races</p>
                    <small>Dec 20, 2017</small>
                  </div>
                </div>
              </div>
            </div>
          </div>                
          <div className="card" data-aos="fade-left" data-aos-offset={200} data-aos-duration={2000}>
            <div className="header">
              <h2><strong>Tag</strong> Clouds</h2>                        
            </div>
            <div className="body widget tag-clouds">
              <ul className="list-unstyled m-b-0">
                <li><a href="javascript:void(0);" className="tag badge badge-default">Cardio Monitoring</a></li>
                <li><a href="javascript:void(0);" className="tag badge badge-success">Traumatology</a></li>
                <li><a href="javascript:void(0);" className="tag badge badge-info">Creative UX</a></li>
                <li><a href="javascript:void(0);" className="tag badge badge-success">Pulmonary</a></li>
                <li><a href="javascript:void(0);" className="tag badge badge-warning">Cardiology</a></li>
              </ul>
            </div>
          </div>
          <div className="card" data-aos="fade-left" data-aos-offset={200} data-aos-duration={2000}>
            <div className="header">
              <h2><strong>Instagram</strong> Post</h2>                        
            </div>
            <div className="body widget">
              <ul className="list-unstyled instagram-plugin m-b-0">
                <li><a href="javascript:void(0);"><img src="assets/images/blog/05-img.jpg" alt="image description" /></a></li>
                <li><a href="javascript:void(0);"><img src="assets/images/blog/06-img.jpg" alt="image description" /></a></li>
                <li><a href="javascript:void(0);"><img src="assets/images/blog/07-img.jpg" alt="image description" /></a></li>
                <li><a href="javascript:void(0);"><img src="assets/images/blog/08-img.jpg" alt="image description" /></a></li>
                <li><a href="javascript:void(0);"><img src="assets/images/blog/09-img.jpg" alt="image description" /></a></li>
                <li><a href="javascript:void(0);"><img src="assets/images/blog/10-img.jpg" alt="image description" /></a></li>
                <li><a href="javascript:void(0);"><img src="assets/images/blog/11-img.jpg" alt="image description" /></a></li>
                <li><a href="javascript:void(0);"><img src="assets/images/blog/12-img.jpg" alt="image description" /></a></li>
                <li><a href="javascript:void(0);"><img src="assets/images/blog/13-img.jpg" alt="image description" /></a></li>
              </ul>
            </div>
          </div>
          <div className="card" data-aos="fade-left" data-aos-offset={200} data-aos-duration={2000}>
            <div className="header">
              <h2><strong>Email</strong> Newsletter <small>Get our products/news earlier than others, let’s get in touch.</small></h2>
            </div>
            <div className="body widget newsletter">                        
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Enter Email" />
                <span className="input-group-addon">
                  <i className="zmdi zmdi-mail-send" />
                </span>
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
export default Blog