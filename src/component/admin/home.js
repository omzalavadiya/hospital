import { useRef, useState, useEffect } from "react"
import axios from 'axios'
// import '../../css/assets/plugins/bootstrap/css/bootstrap.min.css'
// import '../../css/assets/plugins/aos/aos.min.css'
// import '../../css/assets/css/main.css'


function Home() {

    var status = 0
    const [fname, setfname] = useState('')
    const [lname, setlname] = useState('')
    const [phone, setphone] = useState('')
    const [email, setemail] = useState('')
    const [date, setdate] = useState('')
    const [age, setage] = useState('')
    const [gender, setgender] = useState('male')
    const [doctor, setdoctor] = useState([])
    const [sel_doctor, set_sel_doctor] = useState('Dr.Rbi')

    const [loader, setloader] = useState(false)
    const [spinner, setspinner] = useState(false)
    useEffect(() => {
        axios.post('http://localhost/doctor/user/view-doctor.php')
            .then(function (response) {
                setdoctor(response.data)
                console.log(response)
                setloader(true)
                // console.log(doctor);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [])

    useEffect(() => {
        axios.post('http://localhost/doctor/user/view-doctor.php')
            .then(function (response) {
                // console.log(response.data)
                setdoctor(response.data)
                // console.log(doctor)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, []);


    function demo(i) {
        console.log(i);
        setgender(i)
    }

    const image = useRef();

    function submit(e) {
        e.preventDefault()
        const data = new FormData()
        data.append('image', image.current.files[0])
        data.append('fname', fname)
        data.append('lname', lname)
        data.append('email', email)
        data.append('date', date)
        data.append('age', age)
        data.append('phone', phone)
        data.append('status', status)
        data.append('gender', gender)
        data.append('doctor', sel_doctor)


        axios.post('http://localhost/doctor/user/addpatient.php',
            data)
            .then(function (response) {
                console.log(response)
                window.location.reload()
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }

    return (
        <>
            <div>
                {/* <div id="loading" className="page-loader-wrapper">
                    <div className="loader">
                        <div className="m-t-30"><img className="zmdi-hc-spin" src="assets/images/loader.svg" width={48} height={48} alt="Oreo" /></div>
                        <p>Please wait...</p>
                    </div>
                </div> */}
                <div className="wrapper">
                    {/* start loading */}
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
                                            <div className="left">
                                                <a href="index.html" className="navbar-brand"><img src="assets/images/logo.svg" alt="logo" /></a>
                                            </div>
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
                                <nav className="navbar navbar-expand-lg navbar-light bg-light" id="nav2" style={{ position: 'unset' }}>
                                    <button className="navbar-toggler navbar-toggler-right collapsed" type="button" data-toggle="collapse" data-target="#navbarMenu" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" />
                                    </button>
                                    <div className="collapse navbar-collapse" id="navbarMenu">
                                        <ul className="navbar-nav mr-auto " id="nav">
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
                                        <form className="form-inline my-2 my-lg-0 d-none d-lg-inline-block" id="search">
                                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                        </form>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                    {/* start hero */}
                    <section id="hero">
                        <div className="slider" style={{ backgroundImage: 'url(assets/images/slider1.jpg)' }}>
                            <form method="post" encType="multipart/form-data" onSubmit={submit}>
                                <div className="container">
                                    <div className="slider_text">
                                        <h3 className="title"><span>Welcome to</span> <br />
                                            Oreo <strong>Hospital</strong></h3>
                                        <p className="sub-title">Contrary to popular belief, Lorem Ipsum is not simply random text.</p><br />
                                        <button className="btn btn-primary btn-round">View More</button>
                                    </div>
                                    <div className="slider_form row">
                                        <p className="col-12">Make an Appointment</p>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="form-group">
                                                <input type="text" placeholder="First Name" className="form-control m-b-15" onChange={(i) => setfname(i.target.value)} />
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="form-group">
                                                <input type="text" placeholder="Last Name" className="form-control m-b-15" onChange={(i) => setlname(i.target.value)} />
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="form-group">
                                                <input type="text" placeholder="Age" className="form-control m-b-15" onChange={(i) => setage(i.target.value)} />
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-6">
                                            <div className="form-group">
                                                <input type="text" placeholder="Enter Mobile" className="form-control m-b-15" onChange={(i) => setphone(i.target.value)} />
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-6">
                                            <div className="form-group">
                                                <input type="date" placeholder="Enter Date" className="form-control m-b-15" onChange={(i) => setdate(i.target.value)} />
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-6">
                                            <div className="form-group">
                                                <input type="text" placeholder="Enter Email" className="form-control m-b-15" onChange={(i) => setemail(i.target.value)} />
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-6">
                                            <div className="form-group">
                                                <input type="file" ref={image} name='file' className="form-control m-b-15" />
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-6">
                                            <select className="form-control m-b-15" onChange={(i) => demo(i.target.value)}>
                                                <option selected disabled>Select Gender</option>
                                                <option value='male'>Male</option>
                                                <option value='female'>Female</option>
                                            </select>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-6">
                                            <select className="form-control m-b-15" onChange={(i) => set_sel_doctor(i.target.value)}>
                                                <option selected disabled>Select Doctor</option>
                                                {
                                                    doctor.map((i) => {
                                                        return (
                                                            <>
                                                                <option value={i.fname}>{i.fname}</option>

                                                            </>
                                                        )
                                                    })
                                                }
                                            </select>
                                        </div>

                                        <div className="col-lg-3 col-md-6 ">
                                            <button className="btn btn-primary btn-round btn-block m-t-0 m-b-0">Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </section>
                    {/* Content Area */}
                    <section className="main-section">
                        {/* Home About Us Section */}
                        <div className="about-us-section">
                            <div className="container">
                                <div className="row">
                                    <div className="section-title col-12" data-aos="fade-up">
                                        <h2><span>About </span>Us</h2>
                                        <p>Description text here...</p>
                                    </div>
                                </div>
                                <div className="row justify-content-between">
                                    <div className="col-lg-4 col-sm-4">
                                        <div className="box-img box-shadow" data-aos="fade-up">
                                            <img src="assets/images/about-img.jpg" alt />
                                            <span className="section-line" data-aos="fade-up" />
                                        </div>
                                    </div>
                                    <div className="col-lg-7 col-sm-8">
                                        <div className="common-cnt" data-aos="fade-up">
                                            <div className="section-top">
                                                <p><strong>Oreo Hospital</strong> isIt is a long established fact that a reader will be
                                                    distracted by the readable content.</p>
                                            </div>
                                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
                                                piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard
                                                McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of
                                                the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and goingered the
                                                undoubtable source.</p>
                                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                                                suffered alteration in some form, by injected humour</p>
                                            <p>
                                                <a className="btn btn-primary btn-simple btn-round margin-0" data-aos="flip-up">View More</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Home About Us Section */}
                        {/* Home About Us Section */}
                        <div className="our-best-service xl-slategray section-65-100">
                            <div className="container">
                                <div className="row">
                                    <div className="section-title col-12" data-aos="fade-up">
                                        <h2><span>Our </span>Best Services</h2>
                                        <p>Description text here...</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4 col-sm-6">
                                        <div className="service-box" data-aos="fade-up" data-aos-duration={3000}>
                                            <div className="service-icon"><img src="assets/images/icon-cardio-monitoring.png" alt="Cardio Monitoring" /></div>
                                            <div className="service-cnt">
                                                <div className="service-name">Cardio Monitoring</div>
                                                <div className="service-dep">
                                                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
                                                        in a piece[...]</p>
                                                    <a href="javascript:void(0);">View More</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-6">
                                        <div className="service-box" data-aos="fade-up" data-aos-duration={3000}>
                                            <div className="service-icon"><img src="assets/images/icon-orthodontics.png" alt="Orthodontics" />
                                            </div>
                                            <div className="service-cnt">
                                                <div className="service-name">Orthodontics</div>
                                                <div className="service-dep">
                                                    <p>It has roots in a piece of classical Latin literature from 45 BC, making it over
                                                        2000 years old [...]</p>
                                                    <a href="javascript:void(0);">View More</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-6">
                                        <div className="service-box" data-aos="fade-up" data-aos-duration={3000}>
                                            <div className="service-icon"><img src="assets/images/icon-traumatology.png" alt="Traumatology" />
                                            </div>
                                            <div className="service-cnt">
                                                <div className="service-name">Traumatology</div>
                                                <div className="service-dep">
                                                    <p>Contrary to popular belief,literature from 45 BC, making it over 2000 years old
                                                        [...]</p>
                                                    <a href="javascript:void(0);">View More</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-6">
                                        <div className="service-box" data-aos="fade-up" data-aos-duration={3000}>
                                            <div className="service-icon"><img src="assets/images/icon-cardiology.png" alt="Cardiology" />
                                            </div>
                                            <div className="service-cnt">
                                                <div className="service-name">Cardiology</div>
                                                <div className="service-dep">
                                                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
                                                        in a piece[...]</p>
                                                    <a href="javascript:void(0);">View More</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-6">
                                        <div className="service-box" data-aos="fade-up" data-aos-duration={3000}>
                                            <div className="service-icon"><img src="assets/images/icon-prostheses.png" alt="Prostheses" />
                                            </div>
                                            <div className="service-cnt">
                                                <div className="service-name">Prostheses</div>
                                                <div className="service-dep">
                                                    <p>It has roots in a piece of classical Latin literature from 45 BC, making it over
                                                        2000 years old [...]</p>
                                                    <a href="javascript:void(0);">View More</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-6">
                                        <div className="service-box" data-aos="fade-up" data-aos-duration={3000}>
                                            <div className="service-icon"><img src="assets/images/icon-pulmonary.png" alt="Pulmonary" /></div>
                                            <div className="service-cnt">
                                                <div className="service-name">Pulmonary</div>
                                                <div className="service-dep">
                                                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
                                                        in a piece[...]</p>
                                                    <a href="javascript:void(0);">View More</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Home About Us Section */}
                        {/* Home Fun Fact */}
                        <div className="fun-fact">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-3 col-md-6 col-sm-6">
                                        <div className="fun-fact-box text-center">
                                            <i className="zmdi zmdi-account" />
                                            <span className="counter timer" data-from={0} data-to={652} data-speed={2500} data-fresh-interval={700}>652</span>
                                            <p>Happy Clients</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6">
                                        <div className="fun-fact-box text-center">
                                            <i className="zmdi zmdi-favorite" />
                                            <span className="counter timer" data-from={0} data-to={7652} data-speed={2500} data-fresh-interval={700}>7652</span>
                                            <p>Heart Transplant</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6">
                                        <div className="fun-fact-box text-center">
                                            <i className="zmdi zmdi-thumb-up" />
                                            <span className="counter timer" data-from={0} data-to={52} data-speed={2500} data-fresh-interval={700}>52</span>
                                            <p>Years Of Experience</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6">
                                        <div className="fun-fact-box text-center">
                                            <i className="zmdi zmdi-mood" />
                                            <span className="counter timer" data-from={0} data-to={7652} data-speed={2500} data-fresh-interval={700}>7652</span>
                                            <p>Well Smiley Faces</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Home Fun Fact */}
                        {/* Home Our Team */}
                        <div className="our-team">
                            <div className="container">
                                <div className="row justify-content-between">
                                    <div className="section-title left col-lg-4" data-aos="fade-up">
                                        <h2><span>Meet </span>Our Team</h2>
                                        <p>Description text here...</p>
                                    </div>
                                    <div className="section-title right col-lg-8" data-aos="fade-up">
                                        <p><span className="color-212121">Oreo Hospital</span> The wise man therefore always holds in these
                                            matters to this principle of selection: he rejects pleasures to secure.</p>
                                    </div>
                                </div>
                                <div className="row">
                                    {
                                        doctor.slice(0, 4).map((i) => {
                                            return (
                                                <>
                                                    <div className="col-lg-3 col-md-6 col-sm-12">
                                                        <div className="team-box text-center" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration={5000}>
                                                            <div className="doctor-pic"><img src={`http://localhost/doctor/user/image/${i.image}`} alt="Dr. John" /></div>
                                                            <div className="doctor-info">
                                                                <h4>Dr. {i.fname} <span>{i.specialist}</span></h4>
                                                                <ul className="clearfix">
                                                                    <li><a href="javascript:void(0);"><i className="zmdi zmdi-facebook" /></a></li>
                                                                    <li><a href="javascript:void(0);"><i className="zmdi zmdi-twitter" /></a></li>
                                                                    <li><a href="javascript:void(0);"><i className="zmdi zmdi-instagram" /></a></li>
                                                                </ul>
                                                                <a className="btn btn-simple btn-primary btn-round" href={`viewprofile/${i.id}`}>View More</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                            )
                                        })
                                    }

                                </div>
                            </div>
                        </div>
                        {/* Home Our Team */}
                        {/* Home Why choose us */}
                        <div className="why-choose-us">
                            <div className="container">
                                <div className="row">
                                    <div className="section-title col-12" data-aos="fade-up">
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
                                        <div className="box-img" data-aos="fade-up" data-aos-duration={3000}>
                                            <img src="assets/images/why-choose-img.png" alt />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Home Why choose us */}
                        {/* Home Support */}
                        <div className="support-home text-center xl-slategray">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12">
                                        <h4>We provide 24/7 customer support.</h4>
                                        <p>Please feel free to contact us at (01) 234 5678 for emergency case.</p>
                                        <a className="btn btn-primary btn-simple btn-round" href="javascript:void(0);">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Home Support */}
                        {/* Home Blog */}
                        <div className="home-blog">
                            <div className="container">
                                <div className="row">
                                    <div className="section-title col-12" data-aos="fade-up">
                                        <h2><span>Latest </span>From Blog</h2>
                                        <p>Description text here...</p>
                                    </div>
                                </div>
                                <div className="row" data-aos="flip-up">
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
                                    <div className="col-lg-4 d-none d-lg-block">
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
                        {/* Home Blog */}
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
            </div>


        </>
    )
    return (
        <>
            <div className="spinner-taker d-flex  justify-content-center align-items-center">
                <div className="row ">
                    <div className="col-auto">
                        <span class="loader"></span>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Home