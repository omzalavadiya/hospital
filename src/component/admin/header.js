function Header() {
  function logout() {
    window.localStorage.removeItem('id')
    window.location.href = '/'
  }
  return (
    <>
    <div className='theme-cyan'>
      
      <nav className="navbar p-l-5 p-r-5 pb-0 pt-0">
        <ul className="nav navbar-nav navbar-left">
          <li>
            <div className="navbar-header">
              <a href="javascript:void(0);" className="bars" />
              <a className="navbar-brand" href="index.html"><img src="https://thememakker.com/templates/oreo/hospital/html/assets/images/logo.svg" width={30} alt="Oreo" /><span className="m-l-10">Oreo</span></a>
            </div>
          </li>
          <li><a href="javascript:void(0);" className="ls-toggle-btn" data-close="true"><i className="zmdi zmdi-swap" /></a></li>
          <li className="d-none d-lg-inline-block"><a href="events.html" title="Events"><i className="zmdi zmdi-calendar" /></a></li>
          <li className="d-none d-lg-inline-block"><a href="/inbox" title="Inbox"><i className="zmdi zmdi-email" /></a></li>
          <li><a href="/contact" title="Contact List"><i className="zmdi zmdi-account-box-phone" /></a></li>
          <li className="dropdown"> <a href="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown" role="button"><i className="zmdi zmdi-notifications" />
            <div className="notify"><span className="heartbit" /><span className="point" /></div>
          </a>
            <ul className="dropdown-menu pullDown">
              <li className="body">
                <ul className="menu list-unstyled">
                  <li>
                    <a href="javascript:void(0);">
                      <div className="media">
                        {/* <img className="media-object" src="../assets/images/xs/avatar2.jpg" alt /> */}
                        <img className="media-object" src={require('../../css/hospital management Admin/assets/images/xs/avatar2.jpg')} alt />
                        <div className="media-body">
                          <span className="name">Sophia <span className="time">30min ago</span></span>
                          <span className="message">There are many variations of passages</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0);">
                      <div className="media">
                        {/* <img className="media-object" src="../assets/images/xs/avatar3.jpg" alt /> */}
                        <img className="media-object" src={require('../../css/hospital management Admin/assets/images/xs/avatar3.jpg')} alt />
                        <div className="media-body">
                          <span className="name">Sophia <span className="time">31min ago</span></span>
                          <span className="message">There are many variations of passages of Lorem Ipsum</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0);">
                      <div className="media">
                        {/* <img className="media-object" src="../assets/images/xs/avatar4.jpg" alt /> */}
                        <img className="media-object" src={require('../../css/hospital management Admin/assets/images/xs/avatar4.jpg')} alt />
                        <div className="media-body">
                          <span className="name">Isabella <span className="time">35min ago</span></span>
                          <span className="message">There are many variations of passages</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0);">
                      <div className="media">
                        {/* <img className="media-object" src="../assets/images/xs/avatar5.jpg" alt /> */}
                        <img className="media-object" src={require('../../css/hospital management Admin/assets/images/xs/avatar5.jpg')} alt />
                        <div className="media-body">
                          <span className="name">Alexander <span className="time">35min ago</span></span>
                          <span className="message">Contrary to popular belief, Lorem Ipsum random</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0);">
                      <div className="media">
                        {/* <img className="media-object" src="../assets/images/xs/avatar6.jpg" alt /> */}
                        <img className="media-object" src={require('../../css/hospital management Admin/assets/images/xs/avatar6.jpg')} alt />
                        <div className="media-body">
                          <span className="name">Grayson <span className="time">1hr ago</span></span>
                          <span className="message">There are many variations of passages</span>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="footer"> <a href="javascript:void(0);">View All</a> </li>
            </ul>
          </li>
          <li className="dropdown"> <a href="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown" role="button"><i className="zmdi zmdi-flag" />
            <div className="notify">
              <span className="heartbit" />
              <span className="point" />
            </div>
          </a>
            <ul className="dropdown-menu pullDown">
              <li className="header">Project</li>
              <li className="body">
                <ul className="menu tasks list-unstyled">
                  <li>
                    <a href="javascript:void(0);">
                      <div className="progress-container progress-primary">
                        <span className="progress-badge">Neurology</span>
                        <div className="progress">
                          <div className="progress-bar" role="progressbar" aria-valuenow={86} aria-valuemin={0} aria-valuemax={100} style={{ width: '86%' }}>
                            <span className="progress-value">86%</span>
                          </div>
                        </div>
                        <ul className="list-unstyled team-info">
                          <li className="m-r-15"><small className="text-muted">Team</small></li>
                          <li>
                            {/* <img src="../assets/images/xs/avatar2.jpg" alt="Avatar" /> */}
                            <img src={require('../../css/hospital management Admin/assets/images/xs/avatar2.jpg')} />
                          </li>
                          <li>
                            {/* <img src="../assets/images/xs/avatar3.jpg" alt="Avatar" /> */}
                            <img src={require('../../css/hospital management Admin/assets/images/xs/avatar3.jpg')} />
                          </li>
                          <li>
                            {/* <img src="../assets/images/xs/avatar4.jpg" alt="Avatar" /> */}
                            <img src={require('../../css/hospital management Admin/assets/images/xs/avatar4.jpg')} />
                          </li>
                        </ul>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0);">
                      <div className="progress-container progress-info">
                        <span className="progress-badge">Gynecology</span>
                        <div className="progress">
                          <div className="progress-bar" role="progressbar" aria-valuenow={45} aria-valuemin={0} aria-valuemax={100} style={{ width: '45%' }}>
                            <span className="progress-value">45%</span>
                          </div>
                        </div>
                        <ul className="list-unstyled team-info">
                          <li className="m-r-15"><small className="text-muted">Team</small></li>
                          <li>
                            {/* <img src="../assets/images/xs/avatar10.jpg" alt="Avatar" /> */}
                            <img src={require('../../css/hospital management Admin/assets/images/xs/avatar10.jpg')} alt="Avatar" />
                          </li>
                          <li>
                            {/* <img src="../assets/images/xs/avatar9.jpg" alt="Avatar" /> */}
                            <img src={require('../../css/hospital management Admin/assets/images/xs/avatar9.jpg')} alt="Avatar" />
                          </li>
                          <li>
                            {/* <img src="../assets/images/xs/avatar8.jpg" alt="Avatar" /> */}
                            <img src={require('../../css/hospital management Admin/assets/images/xs/avatar8.jpg')} alt="Avatar" />
                          </li>
                          <li>
                            {/* <img src="../assets/images/xs/avatar7.jpg" alt="Avatar" /> */}
                            <img src={require('../../css/hospital management Admin/assets/images/xs/avatar7.jpg')} alt="Avatar" />
                          </li>
                          <li>
                            {/* <img src="../assets/images/xs/avatar6.jpg" alt="Avatar" /> */}
                            <img src={require('../../css/hospital management Admin/assets/images/xs/avatar6.jpg')} alt="Avatar" />
                          </li>
                        </ul>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0);">
                      <div className="progress-container progress-warning">
                        <span className="progress-badge">Cardio Monitoring</span>
                        <div className="progress">
                          <div className="progress-bar" role="progressbar" aria-valuenow={29} aria-valuemin={0} aria-valuemax={100} style={{ width: '29%' }}>
                            <span className="progress-value">29%</span>
                          </div>
                        </div>
                        <ul className="list-unstyled team-info">
                          <li className="m-r-15"><small className="text-muted">Team</small></li>
                          <li>
                            {/* <img src="../assets/images/xs/avatar5.jpg" alt="Avatar" /> */}
                            <img src={require('../../css/hospital management Admin/assets/images/xs/avatar5.jpg')} alt="Avatar" />
                          </li>
                          <li>
                            {/* <img src="../assets/images/xs/avatar2.jpg" alt="Avatar" /> */}
                            <img src={require('../../css/hospital management Admin/assets/images/xs/avatar2.jpg')} alt="Avatar" />
                          </li>
                          <li>
                            {/* <img src="../assets/images/xs/avatar7.jpg" alt="Avatar" /> */}
                            <img src={require('../../css/hospital management Admin/assets/images/xs/avatar7.jpg')} alt="Avatar" />
                          </li>
                        </ul>
                      </div>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="footer"><a href="javascript:void(0);">View All</a></li>
            </ul>
          </li>
          <li className="d-none d-md-inline-block">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Search..." />
              <span className="input-group-addon">
                <i className="zmdi zmdi-search" />
              </span>
            </div>
          </li>
          <li className="float-right">
            <button style={{border:'none' , backgroundColor:'transparent'}} className="mega-menu" data-close="true">
           <i className="zmdi zmdi-power"  onClick={logout}/></button>
            <a href="javascript:void(0);" className="js-right-sidebar" data-close="true"><i className="zmdi zmdi-settings zmdi-hc-spin" /></a>
          </li>
        </ul>
      </nav>
      </div>
    </>
  )
}
export default Header