import React, {Component} from 'react'
import styled from 'styled-components'
import '../styles/Home.css'
import '../styles/Styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLock, faUnlock } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import '../styles/Contact.css'
import Dropdown from 'react-bootstrap/Dropdown';

class Contact extends Component {
    constructor(props){
        super(props);
    } 
    componentDidMount(){
            (function(d, m){
                var kommunicateSettings =
                    {"appId":"fde63e6fc4a64dee640357d630a378f","popupWidget":true,"automaticChatOpenOnNavigation":true};
                var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
                s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
                var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
                window.kommunicate = m; m._globals = kommunicateSettings;
            })(document, window.kommunicate || {});
         }
    
           
    
render(){

  return (
    <div className='Contact-page'>
        <header class="primary-header">
            <div class="wrapper-header">
                <nav class="secondary-nav">
                    <ul class="secondary-nav-contact">
                        <li><i><FontAwesomeIcon icon={faPhone} className="fa-solid" color='rgb(245,245,245' size='lg'></FontAwesomeIcon></i><a href="https://www.viber.com/en/?utm_source=des_w&utm_medium=w8&utm_term=4226&utm_content=dlg">Text/Viber: 09263524939</a></li>
                        <li><i><FontAwesomeIcon icon={faEnvelope} className="fa-solid" color='rgb(245,245,245' size='lg'></FontAwesomeIcon></i><a href="https://mail.google.com/mail/u/0/#inbox">pcadrchelpdesk@mail.pca.gov.ph</a></li>
                    </ul>
                    <ul class="secondary-nav-login">
                        <li><i><FontAwesomeIcon icon={faLock} className="fa-solid" color='rgb(245,245,245' size='lg'></FontAwesomeIcon></i><a href="http://localhost:3000/login">LOGIN</a></li>
                    </ul>
                </nav>
                <div class="primary-nav-wrapper">
                     <h1 class="logo"><a href=""><img src="" alt=""></img>GOV.PH</a></h1>
                <nav class="primary-nav">
                    <ul>
                        <li><a href="http://localhost:3000/">Home</a></li>
                        <li>
                        <Dropdown>
                        <Dropdown.Toggle class="dropdown" id="dropdown">
                        Resources
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                        <Dropdown.Item href="http://localhost:3000/admin">Coconut Pests</Dropdown.Item>
                        <Dropdown.Item href="#">Coconut</Dropdown.Item>
                        <Dropdown.Item href="#">Diseases</Dropdown.Item>
                        <Dropdown.Item href="#">Management</Dropdown.Item>
                        </Dropdown.Menu>
                        </Dropdown>
                        </li>
                        <li><a href="http://localhost:3000/about">About</a></li>
                        <li><a href="http://localhost:3000/contact">Contact</a></li>
                    </ul>
                </nav>
                </div>
            </div>
        </header>
        <section class="pca-logo-section">
            <div class="wrapper-pca-logo">
                <h1 class="pcaLogo"><a href="#"><img src="./pcalogo.png" alt=""></img></a></h1>
                <div class="pca-logo-txt">
                    <h4>Department of Agriculture</h4>
                    <h1 class="primaryHeader">PHILIPPINE COCONUT AUTHORITY</h1>
                    <h4>PCA-DRC Compound, Bago Oshiro Tugbok, Davao City</h4>
                </div>
            </div>

            <div class="philippineTime-wrapper">
                <h5>Philippine Standard Time</h5>
                <h5>Sunday, January 29, 2023</h5>
                <div class="social-media-logos">
                    <h1><a href=""><img src="./fb.png" alt=""></img></a></h1>
                    <h1><a href=""><img src="./yt.png" alt=""></img></a></h1>
                </div>
            </div>
        </section>
        <section class="main-section-contact">
            <div class="big-container">
                <h2>CONTACT US</h2>
                <div class="container">
                    <div class="contact-wrapper">
                        <i class="fa-sharp fa-solid fa-mobile-screen-button"></i>
                        <h5>Reach us through our COVID-19 Hotlines (Viber/SMS only):</h5>
                        <h4>PCA DRC Officer of the Day</h4>
                        <h5>Response Team</h5>
                        <h5>0926.612.672</h5>
                        <h4>PCA DRC Command Center</h4>
                        <h5>0956.091.6570</h5>
    
                    </div>
                    <div class="contact-wrapper">
                        <i class="fa-sharp fa-solid fa-phone"></i>
                        <h5>Questions? Get in touch with our</h5>
                        <h5><a href="">Customer Contact Center:</a></h5>
                        <h5>Monday-Sunday: 8:00 a.m. – 5:00 pm.</h5>
                        <h5>(except holidays)</h5>
                        <h5>Telephone: 1-DTI (384)</h5>
                        <h5>Email: ask@dti.gov.ph</h5>
                        <h5>Mobile: 0917.834.3330</h5>
    
                    </div>
                    <div class="contact-wrapper">
                        <i class="fa-sharp fa-solid fa-comments"></i>
                        <h5>Any suggestions on how to improve our website?</h5>
                        <h5>We would like to hear from you.</h5>
                        <h5><a href="">Fill out our Feedback Form.</a></h5>
                    </div>
                </div>
            </div>
        </section>
        <section class="map-location-wrapper">
            <div class="wrapper-location">
            <iframe width="599" height="374" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=599&amp;height=374&amp;hl=en&amp;q=bago%20oshiro%20philippine%20coconut%20authority%20davao+(philippine%20coconut%20authority)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                <div>
                    <h4>DEPARTMENT OF TRADE & INDUSTRY</h4>
                    <h5>PCA DRC Compound</h5>
                    <h5>Bago Oshiro.,</h5>
                    <h5>8700 Davao City, Philippines</h5>
                    <h5>Trunk Line: (632) 7791.3100 | (632) 7751.0384</h5>
                    <h5>Email:<a href=""> ask@pcadrc.gov.ph</a></h5>
                </div>
            </div>
        </section>
       
        <section class="logos">
            <ul>
                <li><a href=""><img src="./TS.jpg" alt=""/></a></li>
                <li><a href=""><img src="./FS.png" alt=""/></a></li>
                <li><a href=""><img src="./CS.png" alt=""/></a></li>
            </ul>
        </section>
        <section class="accordion-pcadrc">
            <div class="pca-drc-accordionetc-wrapper">
                <div class="davao-research-center-wrapper">
                    <h3>DAVAO RESEARCH CENTER</h3>
                    <div class="loc-wrapper">
                        <h2><a href=""><i class="fa-solid fa-location-dot"></i></a></h2>
                        <h4>Trade & Industry Building <br/>
                            361 Senator Gil J. Puyat Avenue, <br/>
                            Makati City, Metro Manila <br/>
                            Philippines 1200
                        </h4>    
                    </div>   
                    <ul>
                    <li><a href=""><i><FontAwesomeIcon icon={faFacebook}  className="fa-solid" color='rgb(245,245,245' size='lg'></FontAwesomeIcon></i></a></li>
                        <li><a href=""><i><FontAwesomeIcon icon={faInstagram} className="fa-solid" color='rgb(245,245,245' size='lg'></FontAwesomeIcon></i></a></li>
                        <li><a href=""><i><FontAwesomeIcon icon={faTwitter} className="fa-solid" color='rgb(245,245,245' size='lg'></FontAwesomeIcon></i></a></li>
                    </ul> 
                </div>
                <div class="quick-links-wrapper">
                    <h3>Quick Links</h3>
                    <div class="accordion-wrapper">
                        <ul>
                            <li><a href=""><span>{'>'}</span> Home</a></li>
                            <li><a href=""><span>{'>'}</span> Search Coconut Damages</a></li>
                            <li><a href=""><span>{'>'}</span> Add New Pest and Diseases</a></li>
                            <li><a href=""><span>{'>'}</span> Contact Inquiry</a></li>
                        </ul>
                    </div>
                   
                </div>
                <div class="trunkline-wrapper">
                    <h3>Trunkline</h3>
                    <h4>Telephone: <span> Text/Viber: 09175953930</span></h4>
                    <h4>Mobile Phone: <span> Calls: 09171402936/09171465759</span></h4>
                    <h4>Email Address: <span><a href="">pcadrc@mail.pca.gov.ph</a></span></h4>
                </div>
            </div>
            <div class="copyright-wrapper">
                <h4>Copyright &copy; 2023 PCA DRC. All Rights Reserved</h4>
            </div>
        </section>
        <footer>  
            <div class="footer-wrapper">
                <div class="logo-gov-seal">
                    <img src="./GS.png" alt=""/>
                </div>
                <div>
                    <h4>REPUBLIC OF THE PHILIPPINES</h4>
                    <h5>All content is in the public domain unless <br/>otherwise stated.</h5>
                </div>
                <div>
                    <h4 class="indent-h4">REPUBLIC OF THE PHILIPPINES</h4>
                    <h5>Learn more about the Philippine government, its <br/> structure, how government works and the people behind it.</h5>
                    <ul>
                        <li><a href="">GOV.PH</a></li>
                        <li><a href="">Open Data Portal</a></li>
                        <li><a href="">Official Gazzete</a></li>
                    </ul>
                </div>
                <div>
                    <h4>GOVERNMENT LINKS</h4>
                    <ul>
                        <li><a href="">Office of the President</a></li>
                        <li><a href="">Office of the Vice President</a></li>
                        <li><a href="">Senate of the Philippines</a></li>
                        <li><a href="">House of Representatives</a></li>
                        <li><a href="">Supreme Court</a></li>
                        <li><a href="">Court of Appeals</a></li>
                        <li><a href="">Sandiganbayan</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    </div>
  )
}
}

export default Contact