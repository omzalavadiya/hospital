import Header from "../admin/header"
import Sidebar from "../admin/sidebar"
import { useEffect, useRef, useState } from "react"
import axios from 'axios'
import React, { useCallback } from 'react'
// import { useDropzone } from 'react-dropzone'

function Addpatient() {

    var status = 0
    const [loader , setloader] = useState(false)
    const [fname, setfname] = useState('')
    const [lname, setlname] = useState('')
    const [phone, setphone] = useState('')
    const [email, setemail] = useState('')
    const [date, setdate] = useState('')
    const [age, setage] = useState('')
    const [doctor, setdoctor] = useState([])
    const [sel_doctor , set_sel_doctor] = useState('Dr.Rbi')

    const image = useRef();

    const [gender, setgender] = useState('male')
    function demo(i) {
        // console.log(i);
        setgender(i)
    }
    function doctor_sel(i)
    {
            // alert(i)
            set_sel_doctor(i)
    }
    // view doctor
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
    // const onDrop = useCallback(acceptedFiles => {
    // }, [])
    // const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })


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
        data.append('doctor' , sel_doctor)
        axios.post('http://localhost/doctor/user/addpatient.php',
            data)
            .then(function (response) {
                console.log(response)
                window.location.href='/viewpatient'
            })
            .catch(function (error) {
                console.log(error);
            })
    }
// if(loader)
// {

    return (
        <>
            <div classname="theme-cyan">

                
                <Header />
                <Sidebar />
                {
                     loader ? 
                     (
                        <>
                        <div className="overlay" />
                <div className="chat-launcher" />
                <div className="chat-wrapper">
                    <div className="card">
                        <div className="header">
                            <ul className="list-unstyled team-info margin-0">
                                <li className="m-r-15"><h2>Doctor Team</h2></li>
                                <li>
                                    <img src="../assets/images/xs/avatar2.jpg" alt="Avatar" />
                                </li>
                                <li>
                                    <img src="../assets/images/xs/avatar3.jpg" alt="Avatar" />
                                </li>
                                <li>
                                    <img src="../assets/images/xs/avatar4.jpg" alt="Avatar" />
                                </li>
                                <li>
                                    <img src="../assets/images/xs/avatar6.jpg" alt="Avatar" />
                                </li>
                                <li>
                                    <a href="javascript:void(0);" title="Add Member"><i className="zmdi zmdi-plus-circle" /></a>
                                </li>
                            </ul>
                        </div>
                        <div className="body">
                            <div className="chat-widget">
                                <ul className="chat-scroll-list clearfix">
                                    <li className="left float-left">
                                        <img src="../assets/images/xs/avatar3.jpg" className="rounded-circle" alt />
                                        <div className="chat-info">
                                            <a className="name" href="#">Alexander</a>
                                            <span className="datetime">6:12</span>
                                            <span className="message">Hello, John </span>
                                        </div>
                                    </li>
                                    <li className="right">
                                        <div className="chat-info"><span className="datetime">6:15</span> <span className="message">Hi, Alexander<br /> How are you!</span> </div>
                                    </li>
                                    <li className="right">
                                        <div className="chat-info"><span className="datetime">6:16</span> <span className="message">There are many variations of passages of Lorem Ipsum available</span> </div>
                                    </li>
                                    <li className="left float-left"> <img src="../assets/images/xs/avatar2.jpg" className="rounded-circle" alt />
                                        <div className="chat-info"> <a className="name" href="#">Elizabeth</a> <span className="datetime">6:25</span> <span className="message">Hi, Alexander,<br /> John <br /> What are you doing?</span> </div>
                                    </li>
                                    <li className="left float-left"> <img src="../assets/images/xs/avatar1.jpg" className="rounded-circle" alt />
                                        <div className="chat-info"> <a className="name" href="#">Michael</a> <span className="datetime">6:28</span> <span className="message">I would love to join the team.</span> </div>
                                    </li>
                                    <li className="right">
                                        <div className="chat-info"><span className="datetime">7:02</span> <span className="message">Hello, <br />Michael</span> </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="input-group p-t-15">
                                <input type="text" className="form-control" placeholder="Enter text here..." />
                                <span className="input-group-addon">
                                    <i className="zmdi zmdi-mail-send" />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="content">
                    <div className="block-header">
                        <div className="row">
                            <div className="col-lg-7 col-md-5 col-sm-12">
                                <h2>Add Patient
                                    <small className="text-muted">Welcome to Oreo</small>
                                </h2>
                            </div>
                            <div className="col-lg-5 col-md-7 col-sm-12">
                                <ul className="breadcrumb float-md-right">
                                    <li className="breadcrumb-item"><a href="index.html"><i className="zmdi zmdi-home" /> Oreo</a></li>
                                    <li className="breadcrumb-item"><a href="javascript:void(0);">Patient</a></li>
                                    <li className="breadcrumb-item active">Add Patient</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="row clearfix">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="card">
                                    <form method="post" encType="multipart/form-data" onSubmit={submit}>
                                        <div className="header">
                                            <h2><strong>Basic</strong> Information <small>Description text here...</small> </h2>
                                            <ul className="header-dropdown">
                                                <li className="dropdown"> <a href="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> <i className="zmdi zmdi-more" /> </a>
                                                    <ul className="dropdown-menu dropdown-menu-right slideUp float-right">
                                                        <li><a href="javascript:void(0);">Edit</a></li>
                                                        <li><a href="javascript:void(0);">Delete</a></li>
                                                        <li><a href="javascript:void(0);">Report</a></li>
                                                    </ul>
                                                </li>
                                                <li className="remove">
                                                    <a role="button" className="boxs-close"><i className="zmdi zmdi-close" /></a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="body">
                                            <div className="row clearfix">
                                                <div className="col-sm-3">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" placeholder="First Name" onChange={(i) => setfname(i.target.value)} />
                                                    </div>
                                                </div>
                                                <div className="col-sm-3">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" placeholder="Last Name" onChange={(i) => setlname(i.target.value)} />
                                                    </div>
                                                </div>
                                                <div className="col-sm-3">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" placeholder="Phone No." onChange={(i) => setphone(i.target.value)} />
                                                    </div>
                                                </div>
                                                <div className="col-sm-3">
                                                    <select className="form-control show-tick" onChange={(i)=> doctor_sel(i.target.value)}>
                                                        <option value disabled>- Doctor -</option>
                                                        {
                                                            doctor.map((i) => {
                                                                return (
                                                                    <>
                                                                        <option value={i.fname} style={{textTransform:'capitalize'}}>Dr . {i.fname}</option>
                                                                    </>
                                                                )
                                                            })
                                                        }
                                                    </select>
                                                </div>

                                            </div>
                                            <div className="row clearfix">
                                                <div className="col-sm-3">
                                                    <div className="input-group">
                                                        <span className="input-group-addon">
                                                            {/* <i className="zmdi zmdi-calendar" /> */}
                                                        </span>
                                                        <input type="date" className="form-control" placeholder="Enter date" onChange={(i) => setdate(i.target.value)} />
                                                    </div>
                                                </div>
                                                <div className="col-sm-3">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" placeholder="Age" onChange={(i) => setage(i.target.value)} />
                                                    </div>
                                                </div>
                                                <div className="col-sm-3">
                                                    <select className="form-control show-tick" onChange={(i) => demo(i.target.value)}>
                                                        <option value disabled>- Gender -</option>
                                                        <option value='male'>Male</option>
                                                        <option value='female'>Female</option>
                                                    </select>
                                                </div>
                                                <div className="col-sm-3">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" placeholder="Enter Your Email" onChange={(i) => setemail(i.target.value)} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row clearfix">
                                                <div className="col-lg-12 col-md-12 col-sm-12">
                                                    <form action="https://thememakker.com/" id="frmFileUpload" className="dropzone" method="post" encType="multipart/form-data">
                                                        <div className="dz-message">
                                                            <div className="drag-icon-cph"> <i className="material-icons">touch_app</i> </div>
                                                            <h3>Drop files here or click to upload.</h3>
                                                            <em>(This is just a demo dropzone. Selected files are <strong>not</strong> actually uploaded.)</em> </div>
                                                        <div className="fallback">
                                                            <input name="file" type="file" multiple ref={image} />
                                                        </div>
                                                    </form>
                                                    {/* <div {...getRootProps()}  className="dropzone">
                                                    <div className="dz-message">
                                                            <div className="drag-icon-cph"> <i className="material-icons">touch_app</i> </div>
                                                            <h3>Drop files here or click to upload.</h3>
                                                            <em></em> </div>
                                                        <input {...getInputProps()} />
                                                        {
                                                            isDragActive ?
                                                                <p>Drop the files here ...</p> :
                                                                <p></p>
                                                        }
                                                            <input name="file" type="file" multiple  ref={image}/>

                                                    </div> */}
                                                </div>
                                            </div>
                                            <div className="row clearfix">
                                                <div className="col-sm-12">
                                                    <div className="form-group">
                                                        <textarea rows={4} className="form-control no-resize" placeholder="Description" defaultValue={""} />
                                                    </div>
                                                </div>
                                                <div className="col-sm-12">
                                                    {/* <button type="submit" >Submit</button> */}
                                                    <input type="submit" value="submit" className="btn btn-primary btn-round" />
                                                    <button type="submit" className="btn btn-default btn-round btn-simple">Cancel</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="row clearfix">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="header">
                                        <h2><strong>Registration</strong> Information <small>Description text here...</small> </h2>
                                        <ul className="header-dropdown">
                                            <li className="dropdown"> <a href="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> <i className="zmdi zmdi-more" /> </a>
                                                <ul className="dropdown-menu dropdown-menu-right slideUp float-right">
                                                    <li><a href="javascript:void(0);">Edit</a></li>
                                                    <li><a href="javascript:void(0);">Delete</a></li>
                                                    <li><a href="javascript:void(0);">Report</a></li>
                                                </ul>
                                            </li>
                                            <li className="remove">
                                                <a role="button" className="boxs-close"><i className="zmdi zmdi-close" /></a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="body">
                                        <div className="row clearfix">
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="Doctor Name" />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="Staff on Duty" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row clearfix">
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="Ward No." />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="input-group">
                                                    <span className="input-group-addon">
                                                        <i className="zmdi zmdi-calendar" />
                                                    </span>
                                                    <input type="text" className="datetimepicker form-control" placeholder="Please choose date & time..." />
                                                </div>
                                            </div>
                                            <div className="col-sm-12">
                                                <button type="submit" className="btn btn-primary btn-round">Submit</button>
                                                <button type="submit" className="btn btn-default btn-round btn-simple">Cancel</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                        </>
                     ): <>
                     <div className="spinner-taker d-flex  justify-content-center align-items-center">
                    <div className="row ">
                        <div className="col-auto">
                            <span class="loader"></span>
                        </div>
                    </div>
                </div>
                     </>
                }
                
            </div>


        </>
    )
// }

// else 
// {
//     <>
//     </>
// }
    
    
}

export default Addpatient