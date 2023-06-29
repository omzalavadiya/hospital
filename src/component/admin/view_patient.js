import Header from "./header"
import Sidebar from "./sidebar"
import { useState, useEffect } from "react"
import axios from 'axios'

function View_patient() {
    const [patient, setpatient] = useState([])
    const [loader, setloader] = useState(false)
    useEffect(() => {
        axios.post('http://localhost/doctor/user/view-patient.php')
            .then(function (response) {
                console.log(response.data)
                setpatient(response.data.phpresult)
                setloader(true)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, []);


    const handleSwitch = (id, e) => {
        if (e === true) {
            axios.post('http://localhost/doctor/user/edit_patient.php', {
                id: id,
                status: 1

            })
                .then(function (res) {
                    console.log(res)
                    window.location.reload()
                })
        } else {
            axios.post('http://localhost/doctor/user/edit_patient.php', {
                id: id,
                status: 0

            })
            window.location.reload()

        }
    }


    useEffect(() => {
        patient.map((i, k) => {
            document.getElementById('custom-switch' + k).checked = (i.status == 1) ? true : false;
        })
    }, [patient])

    return (
        <>
            <div classname="theme-cyan">
                {/* <div className="page-loader-wrapper">
    <div className="loader">
      <div className="m-t-30"><img className="zmdi-hc-spin" src="https://thememakker.com/templates/oreo/hospital/html/assets/images/logo.svg" width={48} height={48} alt="Oreo" /></div>
      <p>Please wait...</p>
    </div>
  </div> */}
                {/* Overlay For Sidebars */}
                <div className="overlay" />
                <Header />
                <Sidebar />
                {/* Chat-launcher */}
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
                                <h2>All Patients
                                    <small className="text-muted">Welcome to Oreo</small>
                                </h2>
                            </div>
                            <div className="col-lg-5 col-md-7 col-sm-12">
                                <button className="btn btn-primary btn-icon btn-round d-none d-md-inline-block float-right m-l-10" type="button">
                                    <i className="zmdi zmdi-plus" />
                                </button>
                                <ul className="breadcrumb float-md-right">
                                    <li className="breadcrumb-item"><a href="index.html"><i className="zmdi zmdi-home" /> Oreo</a></li>
                                    <li className="breadcrumb-item"><a href="javascript:void(0);">Patients</a></li>
                                    <li className="breadcrumb-item active">All Patients</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="row clearfix">
                            <div className="col-md-12">
                                <div className="card patients-list">
                                    <div className="header">
                                        <h2><strong>Patients</strong> List</h2>
                                        <ul className="header-dropdown">
                                            <li className="dropdown"> <a href="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> <i className="zmdi zmdi-more" /> </a>
                                                <ul className="dropdown-menu dropdown-menu-right slideUp">
                                                    <li><a href="javascript:void(0);">Action</a></li>
                                                    <li><a href="javascript:void(0);">Another action</a></li>
                                                    <li><a href="javascript:void(0);">Something else</a></li>
                                                </ul>
                                            </li>
                                            <li className="remove">
                                                <a role="button" className="boxs-close"><i className="zmdi zmdi-close" /></a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="body">
                                        {/* Nav tabs */}
                                        <ul className="nav nav-tabs padding-0">
                                            <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#All">All</a></li>
                                            <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#week">1 Week Ago</a></li>
                                            <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#month">1 Month Ago</a></li>
                                        </ul>
                                        {/* Tab panes */}
                                        <div className="tab-content m-t-10">
                                            <div className="tab-pane table-responsive active" id="All">
                                                <table className="table m-b-0 table-hover">
                                                    <thead>
                                                        <tr>
                                                            <th>Media</th>
                                                            <th>Patients ID</th>
                                                            <th>Name</th>
                                                            <th>Age</th>
                                                            <th>Gender</th>
                                                            <th>Number</th>
                                                            <th>Date</th>
                                                            <th>Status</th>
                                                            {/* <th>Permission</th> */}
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {
                                                            patient.map((i, q) => {
                                                                if (i.status == 0) {

                                                                    return (
                                                                        <>
                                                                            <tr>
                                                                                <td ><span className="list-icon patient-img"><img className="patients-img" src={`http://localhost/doctor/user/patient/${i.image}`} alt /></span></td>
                                                                                <td><span className="list-name">{i.id}</span></td>
                                                                                <td>{i.fname}</td>
                                                                                <td>{i.age}</td>
                                                                                <td>{i.date}</td>
                                                                                <td>{i.gender}</td>
                                                                                <td>{i.phone}</td>
                                                                                <td>
                                                                                    <span class="badge badge-warning">Pending</span>

                                                                                </td>
                                                                                <td>

                                                                                    <div class="custom-control custom-switch">
                                                                                        <input type="checkbox" style={{ color: 'red', backgroundColor: 'blue' }} id={"custom-switch" + q}
                                                                                            onChange={(j) => {
                                                                                                handleSwitch(i.id, j.target.checked)
                                                                                            }} className="custom-control-input" />
                                                                                        {/* <label class="custom-control-label" htmlFor={"custom-switch" + q}></label> */}
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                        </>
                                                                    )
                                                                }
                                                                else {
                                                                    return (
                                                                        <>
                                                                            <tr>
                                                                                <td ><span className="list-icon patient-img"><img className="patients-img" src={`http://localhost/doctor/user/patient/${i.image}`} alt /></span></td>
                                                                                <td><span className="list-name">{i.id}</span></td>
                                                                                <td>{i.fname}</td>
                                                                                <td>{i.age}</td>
                                                                                <td>{i.gender}</td>
                                                                                <td>{i.phone}</td>
                                                                                <td>{i.date}</td>

                                                                                <td>
                                                                                    <span class="badge badge-success">Approved</span>
                                                                                </td>
                                                                                <td>

                                                                                    <div class="custom-control custom-switch">
                                                                                        <input type="checkbox" style={{ color: 'red', backgroundColor: 'blue' }} id={"custom-switch" + q}
                                                                                            onChange={(j) => {
                                                                                                handleSwitch(i.id, j.target.checked)
                                                                                            }} className="custom-control-input" />
                                                                                        <label class="custom-control-label" htmlFor={"custom-switch" + q}></label>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                        </>
                                                                    )
                                                                }
                                                            })
                                                        }


                                                    </tbody>
                                                </table>
                                            </div>
                                            {/* <div className="tab-pane table-responsive" id="week">
                                                    <table className="table m-b-0 table-hover">
                                                        <thead>
                                                            <tr>
                                                                <th>Media</th>
                                                                <th>Patients ID</th>
                                                                <th>Name</th>
                                                                <th>Age</th>
                                                                <th>Gender</th>
                                                                <th>Number</th>
                                                                <th> Date</th>
                                                                <th>Status</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {
                                                                patient.map((i) => {
                                                                    if (i.status == 0) {
                                                                        return (
                                                                            <>
                                                                                <tr>
                                                                                    <td><span className="list-icon"><img className="patients-img" src={`http://localhost/doctor/user/patient/${i.image}`} alt /></span></td>
                                                                                    <td><span className="list-name">{i.id}</span></td>
                                                                                    <td>{i.name}</td>
                                                                                    <td>{i.age}</td>
                                                                                    <td>{i.gender}</td>
                                                                                    <td>{i.phone}</td>
                                                                                    <td>{i.date}</td>
                                                                                    <td><span className="badge badge-warning">Pending</span></td>
                                                                                </tr>
                                                                            </>
                                                                        )
                                                                    }
                                                                    else {
                                                                        return (
                                                                            <>
                                                                                <tr>
                                                                                    <td><span className="list-icon"><img className="patients-img" src={`http://localhost/doctor/user/patient/${i.image}`} alt /></span></td>
                                                                                    <td><span className="list-name">{i.id}</span></td>
                                                                                    <td>{i.name}</td>
                                                                                    <td>{i.age}</td>
                                                                                    <td>{i.gender}</td>
                                                                                    <td>{i.phone}</td>
                                                                                    <td>{i.date}</td>
                                                                                    <td><span className="badge badge-success">Approved</span></td>
                                                                                </tr>
                                                                            </>
                                                                        )
                                                                    }
                                                                })
                                                            }

                                                        </tbody>
                                                    </table>
                                                </div> */}
                                            {/* <div className="tab-pane table-responsive" id="month">
                                                    <table className="table m-b-0 table-hover">
                                                        <thead>
                                                            <tr>
                                                                <th>Media</th>
                                                                <th>Patients ID</th>
                                                                <th>Name</th>
                                                                <th>Age</th>
                                                                <th>Address</th>
                                                                <th>Number</th>
                                                                <th>Last Visit</th>
                                                                <th>Status</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td><span className="list-icon"><img className="patients-img" src="../assets/images/xs/avatar1.jpg" alt /></span></td>
                                                                <td><span className="list-name">KU 00598</span></td>
                                                                <td>Daniel</td>
                                                                <td>32</td>
                                                                <td>71 Pilgrim Avenue Chevy Chase, MD 20815</td>
                                                                <td>404-447-6013</td>
                                                                <td>11 Jan 2018</td>
                                                                <td><span className="badge badge-success">Approved</span></td>
                                                            </tr>

                                                        </tbody>
                                                    </table>
                                                </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>


        </>
    )


}
export default View_patient