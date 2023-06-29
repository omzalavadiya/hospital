import Header from "./header"
import Sidebar from "./sidebar"

function Contact() {
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
                {/* Top Bar */}
             <Header/>
                {/* Chat-launcher */}
                <Sidebar/>
                <div className="chat-launcher" />
                <div className="chat-wrapper">
                    <div className="card">
                        <div className="header">
                            <ul className="list-unstyled team-info margin-0">
                                <li className="m-r-15"><h2>Dr. Team</h2></li>
                                <li>
                                    {/* <img src="../assets/images/xs/avatar2.jpg" alt="Avatar" /> */}
                                    <img src={require('../../css/hospital management Admin/assets/images/xs/avatar2.jpg')} alt="Avatar" />
                                </li>
                                <li>
                                    {/* <img src="../assets/images/xs/avatar3.jpg" alt="Avatar" /> */}
                                    <img src={require('../../css/hospital management Admin/assets/images/xs/avatar3.jpg')} alt="Avatar" />
                                </li>
                                <li>
                                    {/* <img src="../assets/images/xs/avatar4.jpg" alt="Avatar" /> */}
                                    <img src={require('../../css/hospital management Admin/assets/images/xs/avatar4.jpg')} alt="Avatar" />
                                </li>
                                <li>
                                    {/* <img src="../assets/images/xs/avatar6.jpg" alt="Avatar" /> */}
                                    <img src={require('../../css/hospital management Admin/assets/images/xs/avatar6.jpg')} alt="Avatar" />
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
                                        {/* <img src="../assets/images/xs/avatar3.jpg" className="rounded-circle" alt /> */}
                                        <img src={require('../../css/hospital management Admin//assets/images/xs/avatar3.jpg')} className="rounded-circle" alt />
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
                                    {/* <li className="left float-left"> <img src="../assets/images/xs/avatar2.jpg" className="rounded-circle" alt /> */}
                                    <li className="left float-left"> <img src={require('../../css/hospital management Admin//assets/images/xs/avatar2.jpg')} className="rounded-circle" alt />
                                        <div className="chat-info"> <a className="name" href="#">Elizabeth</a> <span className="datetime">6:25</span> <span className="message">Hi, Alexander,<br /> John <br /> What are you doing?</span> </div>
                                    </li>
                                    {/* <li className="left float-left"> <img src="../assets/images/xs/avatar1.jpg" className="rounded-circle" alt /> */}
                                    <li className="left float-left"> <img src={require('../../css/hospital management Admin/assets/images/xs/avatar1.jpg')} className="rounded-circle" alt />
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
                <section className="content contact">
                    <div className="block-header">
                        <div className="row">
                            <div className="col-lg-7 col-md-5 col-sm-12">
                                <h2>Contact
                                    <small>Welcome to Oreo</small>
                                </h2>
                            </div>
                            <div className="col-lg-5 col-md-7 col-sm-12">
                                <ul className="breadcrumb float-md-right">
                                    <li className="breadcrumb-item"><a href="/dashboard"><i className="zmdi zmdi-home" /> Oreo</a></li>
                                    <li className="breadcrumb-item"><a href="javascript:void(0);">App</a></li>
                                    <li className="breadcrumb-item active">Contact</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="row clearfix">
                            <div className="col-lg-12">
                                <div className="card">
                                    <div className="body">
                                        <ul className="nav nav-tabs padding-0">
                                            <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#Doctors">Doctors</a></li>
                                            <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#Patients">Patients</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row clearfix">
                            <div className="col-lg-12">
                                <div className="card action_bar">
                                    <div className="body">
                                        <div className="row clearfix">
                                            <div className="col-lg-1 col-md-2 col-3">
                                                <div className="checkbox inlineblock delete_all">
                                                    <input id="deleteall" type="checkbox" />
                                                    <label htmlFor="deleteall">
                                                        All
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-lg-5 col-md-5 col-6">
                                                <div className="input-group search">
                                                    <input type="text" className="form-control" placeholder="Search..." />
                                                    <span className="input-group-addon">
                                                        <i className="zmdi zmdi-search" />
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-5 col-3 text-right">
                                                <div className="btn-group d-none d-md-inline-block" role="group">
                                                    <div className="btn-group">
                                                        <button type="button" className="btn col-black btn-neutral dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                            <i className="zmdi zmdi-label" />
                                                            <span className="caret" />
                                                        </button>
                                                        <ul className="dropdown-menu dropdown-menu-right pullDown">
                                                            <li>
                                                                <a href="javascript:void(0);">Family</a>
                                                            </li>
                                                            <li>
                                                                <a href="javascript:void(0);">Work</a>
                                                            </li>
                                                            <li>
                                                                <a href="javascript:void(0);">Google</a>
                                                            </li>
                                                            <li role="separator" className="divider" />
                                                            <li>
                                                                <a href="javascript:void(0);">Create a Label</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <button type="button" className="btn col-black btn-neutral d-none d-md-inline-block">
                                                    <i className="zmdi zmdi-plus-circle" />
                                                </button>
                                                <button type="button" className="btn col-black btn-neutral d-none d-md-inline-block">
                                                    <i className="zmdi zmdi-archive" />
                                                </button>
                                                <button type="button" className="btn col-black btn-neutral">
                                                    <i className="zmdi zmdi-delete" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="body">
                                        <div className="tab-content">
                                            <div className="tab-pane active" id="Doctors">
                                                <div className="table-responsive">
                                                    <table className="table table-hover m-b-0 c_list">
                                                        <thead>
                                                            <tr>
                                                                <th>#</th>
                                                                <th>Name</th>
                                                                <th>Phone</th>
                                                                <th>Address</th>
                                                                <th>Action</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    <div className="checkbox">
                                                                        <input id="adelete_2" type="checkbox" />
                                                                        <label htmlFor="adelete_2">&nbsp;</label>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    {/* <img src="../assets/images/xs/avatar1.jpg" className="rounded-circle avatar" alt /> */}
                                                                    <img src={require('../../css/hospital management Admin/assets/images/xs/avatar1.jpg')} className="rounded-circle avatar" alt />
                                                                    <p className="c_name">John Smith</p>
                                                                </td>
                                                                <td>
                                                                    <span className="phone"><i className="zmdi zmdi-phone m-r-10" />264-625-2583</span>
                                                                </td>
                                                                <td>
                                                                    <address><i className="zmdi zmdi-pin" />123 6th St. Melbourne, FL 32904</address>
                                                                </td>
                                                                <td>
                                                                    <button className="btn btn-icon btn-neutral btn-icon-mini"><i className="zmdi zmdi-edit" /></button>
                                                                    <button className="btn btn-icon btn-neutral btn-icon-mini"><i className="zmdi zmdi-delete" /></button>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div className="checkbox">
                                                                        <input id="adelete_4" type="checkbox" />
                                                                        <label htmlFor="adelete_4">&nbsp;</label>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    {/* <img src="../assets/images/xs/avatar4.jpg" className="rounded-circle avatar" alt /> */}
                                                                    <img src={require('../../css/hospital management Admin/assets/images/xs/avatar4.jpg')} className="rounded-circle avatar" alt />
                                                                    <p className="c_name">Maryam Amiri</p>
                                                                </td>
                                                                <td>
                                                                    <span className="phone"><i className="zmdi zmdi-phone m-r-10" />264-625-9513</span>
                                                                </td>
                                                                <td>
                                                                    <address><i className="zmdi zmdi-pin" />123 6th St. Melbourne, FL 32904</address>
                                                                </td>
                                                                <td>
                                                                    <button className="btn btn-icon btn-neutral btn-icon-mini"><i className="zmdi zmdi-edit" /></button>
                                                                    <button className="btn btn-icon btn-neutral btn-icon-mini"><i className="zmdi zmdi-delete" /></button>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div className="checkbox">
                                                                        <input id="adelete_5" type="checkbox" />
                                                                        <label htmlFor="adelete_5">&nbsp;</label>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    {/* <img src="../assets/images/xs/avatar6.jpg" className="rounded-circle avatar" alt /> */}
                                                                    <img src={require('../../css/hospital management Admin/assets/images/xs/avatar6.jpg')} className="rounded-circle avatar" alt />
                                                                    <p className="c_name">Tim Hank</p>
                                                                </td>
                                                                <td>
                                                                    <span className="phone"><i className="zmdi zmdi-phone m-r-10" />264-625-1212</span>
                                                                </td>
                                                                <td>
                                                                    <address><i className="zmdi zmdi-pin" />70 Bowman St. South Windsor, CT 06074</address>
                                                                </td>
                                                                <td>
                                                                    <button className="btn btn-icon btn-neutral btn-icon-mini"><i className="zmdi zmdi-edit" /></button>
                                                                    <button className="btn btn-icon btn-neutral btn-icon-mini"><i className="zmdi zmdi-delete" /></button>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div className="checkbox">
                                                                        <input id="adelete_7" type="checkbox" />
                                                                        <label htmlFor="adelete_7">&nbsp;</label>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    {/* <img src="../assets/images/xs/avatar8.jpg" className="rounded-circle avatar" alt /> */}
                                                                    <img src={require('../../css/hospital management Admin/assets/images/xs/avatar8.jpg')} className="rounded-circle avatar" alt />
                                                                    <p className="c_name">Gary Camara</p>
                                                                </td>
                                                                <td>
                                                                    <span className="phone"><i className="zmdi zmdi-phone m-r-10" />264-625-1005</span>
                                                                </td>
                                                                <td>
                                                                    <address><i className="zmdi zmdi-pin" />44 Shirley Ave. West Chicago, IL 60185</address>
                                                                </td>
                                                                <td>
                                                                    <button className="btn btn-icon btn-neutral btn-icon-mini"><i className="zmdi zmdi-edit" /></button>
                                                                    <button className="btn btn-icon btn-neutral btn-icon-mini"><i className="zmdi zmdi-delete" /></button>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div className="checkbox">
                                                                        <input id="adelete_8" type="checkbox" />
                                                                        <label htmlFor="adelete_8">&nbsp;</label>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    {/* <img src="../assets/images/xs/avatar9.jpg" className="rounded-circle avatar" alt /> */}
                                                                    <img src={require('../../css/hospital management Admin/assets/images/xs/avatar9.jpg')} className="rounded-circle avatar" alt />
                                                                    <p className="c_name">Frank Camly</p>
                                                                </td>
                                                                <td>
                                                                    <span className="phone"><i className="zmdi zmdi-phone m-r-10" />264-625-9999</span>
                                                                </td>
                                                                <td>
                                                                    <address><i className="zmdi zmdi-pin" />123 6th St. Melbourne, FL 32904</address>
                                                                </td>
                                                                <td>
                                                                    <button className="btn btn-icon btn-neutral btn-icon-mini"><i className="zmdi zmdi-edit" /></button>
                                                                    <button className="btn btn-icon btn-neutral btn-icon-mini"><i className="zmdi zmdi-delete" /></button>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div className="checkbox">
                                                                        <input id="adelete_9" type="checkbox" />
                                                                        <label htmlFor="adelete_9">&nbsp;</label>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    {/* <img src="../assets/images/xs/avatar10.jpg" className="rounded-circle avatar" alt /> */}
                                                                    <img src={require('../../css/hospital management Admin/assets/images/xs/avatar10.jpg')} className="rounded-circle avatar" alt />
                                                                    <p className="c_name">Tim Hank</p>
                                                                </td>
                                                                <td>
                                                                    <span className="phone"><i className="zmdi zmdi-phone m-r-10" />264-625-1212</span>
                                                                </td>
                                                                <td>
                                                                    <address><i className="zmdi zmdi-pin" />70 Bowman St. South Windsor, CT 06074</address>
                                                                </td>
                                                                <td>
                                                                    <button className="btn btn-icon btn-neutral btn-icon-mini"><i className="zmdi zmdi-edit" /></button>
                                                                    <button className="btn btn-icon btn-neutral btn-icon-mini"><i className="zmdi zmdi-delete" /></button>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <div className="tab-pane" id="Patients">
                                                <div className="table-responsive">
                                                    <table className="table table-hover m-b-0 c_list">
                                                        <thead>
                                                            <tr>
                                                                <th>#</th>
                                                                <th>Name</th>
                                                                <th data-breakpoints="xs">Phone</th>
                                                                <th data-breakpoints="xs sm md">Address</th>
                                                                <th data-breakpoints="xs">Action</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    <div className="checkbox">
                                                                        <input id="delete_4" type="checkbox" />
                                                                        <label htmlFor="delete_4">&nbsp;</label>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    {/* <img src="../assets/images/xs/avatar4.jpg" className="rounded-circle avatar" alt /> */}
                                                                    <img src={require('../../css/hospital management Admin/assets/images/xs/avatar4.jpg')} className="rounded-circle avatar" alt />
                                                                    <p className="c_name">Maryam Amiri</p>
                                                                </td>
                                                                <td>
                                                                    <span className="phone"><i className="zmdi zmdi-phone m-r-10" />264-625-9513</span>
                                                                </td>
                                                                <td>
                                                                    <address><i className="zmdi zmdi-pin" />123 6th St. Melbourne, FL 32904</address>
                                                                </td>
                                                                <td>
                                                                    <button className="btn btn-icon btn-neutral btn-icon-mini"><i className="zmdi zmdi-edit" /></button>
                                                                    <button className="btn btn-icon btn-neutral btn-icon-mini"><i className="zmdi zmdi-delete" /></button>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div className="checkbox">
                                                                        <input id="delete_5" type="checkbox" />
                                                                        <label htmlFor="delete_5">&nbsp;</label>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    {/* <img src="../assets/images/xs/avatar6.jpg" className="rounded-circle avatar" alt /> */}
                                                                    <img src={require('../../css/hospital management Admin/assets/images/xs/avatar6.jpg')} className="rounded-circle avatar" alt />
                                                                    <p className="c_name">Tim Hank</p>
                                                                </td>
                                                                <td>
                                                                    <span className="phone"><i className="zmdi zmdi-phone m-r-10" />264-625-1212</span>
                                                                </td>
                                                                <td>
                                                                    <address><i className="zmdi zmdi-pin" />70 Bowman St. South Windsor, CT 06074</address>
                                                                </td>
                                                                <td>
                                                                    <button className="btn btn-icon btn-neutral btn-icon-mini"><i className="zmdi zmdi-edit" /></button>
                                                                    <button className="btn btn-icon btn-neutral btn-icon-mini"><i className="zmdi zmdi-delete" /></button>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div className="checkbox">
                                                                        <input id="delete_6" type="checkbox" />
                                                                        <label htmlFor="delete_6">&nbsp;</label>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    {/* <img src="../assets/images/xs/avatar7.jpg" className="rounded-circle avatar" alt /> */}
                                                                    <img src={require('../../css/hospital management Admin/assets/images/xs/avatar7.jpg')} className="rounded-circle avatar" alt />
                                                                    <p className="c_name">Fidel Tonn</p>
                                                                </td>
                                                                <td>
                                                                    <span className="phone"><i className="zmdi zmdi-phone m-r-10" />264-625-2323</span>
                                                                </td>
                                                                <td>
                                                                    <address><i className="zmdi zmdi-pin" />514 S. Magnolia St. Orlando, FL 32806</address>
                                                                </td>
                                                                <td>
                                                                    <button className="btn btn-icon btn-neutral btn-icon-mini"><i className="zmdi zmdi-edit" /></button>
                                                                    <button className="btn btn-icon btn-neutral btn-icon-mini"><i className="zmdi zmdi-delete" /></button>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div className="checkbox">
                                                                        <input id="delete_7" type="checkbox" />
                                                                        <label htmlFor="delete_7">&nbsp;</label>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    {/* <img src="../assets/images/xs/avatar8.jpg" className="rounded-circle avatar" alt /> */}
                                                                    <img src={require('../../css/hospital management Admin/assets/images/xs/avatar8.jpg')} className="rounded-circle avatar" alt />
                                                                    <p className="c_name">Gary Camara</p>
                                                                </td>
                                                                <td>
                                                                    <span className="phone"><i className="zmdi zmdi-phone m-r-10" />264-625-1005</span>
                                                                </td>
                                                                <td>
                                                                    <address><i className="zmdi zmdi-pin" />44 Shirley Ave. West Chicago, IL 60185</address>
                                                                </td>
                                                                <td>
                                                                    <button className="btn btn-icon btn-neutral btn-icon-mini"><i className="zmdi zmdi-edit" /></button>
                                                                    <button className="btn btn-icon btn-neutral btn-icon-mini"><i className="zmdi zmdi-delete" /></button>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div className="checkbox">
                                                                        <input id="delete_8" type="checkbox" />
                                                                        <label htmlFor="delete_8">&nbsp;</label>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    {/* <img src="../assets/images/xs/avatar9.jpg" className="rounded-circle avatar" alt /> */}
                                                                    <img src={require('../../css/hospital management Admin/assets/images/xs/avatar9.jpg')} className="rounded-circle avatar" alt />
                                                                    <p className="c_name">Frank Camly</p>
                                                                </td>
                                                                <td>
                                                                    <span className="phone"><i className="zmdi zmdi-phone m-r-10" />264-625-9999</span>
                                                                </td>
                                                                <td>
                                                                    <address><i className="zmdi zmdi-pin" />123 6th St. Melbourne, FL 32904</address>
                                                                </td>
                                                                <td>
                                                                    <button className="btn btn-icon btn-neutral btn-icon-mini"><i className="zmdi zmdi-edit" /></button>
                                                                    <button className="btn btn-icon btn-neutral btn-icon-mini"><i className="zmdi zmdi-delete" /></button>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div className="checkbox">
                                                                        <input id="delete_9" type="checkbox" />
                                                                        <label htmlFor="delete_9">&nbsp;</label>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    {/* <img src="../assets/images/xs/avatar10.jpg" className="rounded-circle avatar" alt /> */}
                                                                    <img src={require('../../css/hospital management Admin/assets/images/xs/avatar10.jpg')} className="rounded-circle avatar" alt />
                                                                    <p className="c_name">Tim Hank</p>
                                                                </td>
                                                                <td>
                                                                    <span className="phone"><i className="zmdi zmdi-phone m-r-10" />264-625-1212</span>
                                                                </td>
                                                                <td>
                                                                    <address><i className="zmdi zmdi-pin" />70 Bowman St. South Windsor, CT 06074</address>
                                                                </td>
                                                                <td>
                                                                    <button className="btn btn-icon btn-neutral btn-icon-mini"><i className="zmdi zmdi-edit" /></button>
                                                                    <button className="btn btn-icon btn-neutral btn-icon-mini"><i className="zmdi zmdi-delete" /></button>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="card">
                                    <div className="body">
                                        <ul className="pagination pagination-primary m-b-0">
                                            <li className="page-item"><a className="page-link" href="#"><i className="zmdi zmdi-arrow-left" /></a></li>
                                            <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                                            <li className="page-item"><a className="page-link" href="#">4</a></li>
                                            <li className="page-item"><a className="page-link" href="#"><i className="zmdi zmdi-arrow-right" /></a></li>
                                        </ul>
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
export default Contact