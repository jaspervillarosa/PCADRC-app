import React, { Component } from "react";
import styled from 'styled-components'
import '../styles/Home.css'
import '../styles/Styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLock } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Dropdown from 'react-bootstrap/Dropdown';


// function Home() {
class Home extends Component {
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
    <div className='Main'>
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
                        <Dropdown.Item href="http://localhost:3000/admin">Management</Dropdown.Item>
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
        <section className="main-section-home">
            <div class="side-nav-wrapper">
                <nav class="side-nav-bar">
                    <h1>RESOURCES</h1>
                    <ul>
                        <li><a href="http://localhost:3000/admin">COCONUT PESTS</a></li>
                        <li><a href="">COCONUT DISEASES</a></li>
                        <li><a href="http://localhost:3000/admin">MANAGEMENT</a></li>
                        <li><a href="">STATISTICS</a></li>
                    </ul>
                </nav>
            </div>
            <div class="main-section-data">
                <h2>Search Coconut Damages</h2>
                <h5>Pest and or Disease name</h5>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                </div>
                <h5>Category</h5>
                <div class="input-group mb-3">
                    <select class="form-select" id="inputGroupSelect03" aria-label="Example select with button addon">
                      <option value="0"></option>
                      <option value="1">Coconut Diseases</option>
                      <option value="2">Coconut Pests</option>
                    </select>
                  </div>
                  <button type="button" class="btn btn-success">SEARCH</button>
            
                <div class="data-types-section">
                <Card >
                <Card.Body class='wrapper'>
                    <div class ="col1">
                    <Card.Img class= 'img' variant="top" src="./rhinoB.jpg" />
                    </div>
                    <div class="col2">
                    <Card.Title>Integrated Management of Rhinoceros Beetle (Orycetes rhinoceros L.)</Card.Title>
                    <Card.Text>
                    Pest and Disease Management
                    </Card.Text>
                    <Card.Text class='small-txt'><a href=''>
                    read more..
                    </a>
                    </Card.Text>
                    </div>
                </Card.Body>
                </Card>
                <Card >
                <Card.Body class='wrapper'>
                    <div class ="col1">
                    <Card.Img class= 'img' variant="top" src="./coconutE.jpg" />
                    </div>
                    <div class="col2">
                    <Card.Title>91.4B PHP Average Export Earnings</Card.Title>
                    <Card.Text>
                    Philippine Cocout Industry
                    </Card.Text>
                    <Card.Text class='small-txt'><a href=''>
                    read more..
                    </a>
                    </Card.Text>
                    </div>
                </Card.Body>
                </Card>
                <Card >
                <Card.Body class='wrapper'>
                    <div class ="col1">
                    <Card.Img class= 'img' variant="top" src="./asiaticPW.jpg" />
                    </div>
                    <div class="col2">
                    <Card.Title>Asiatic Palm Weevil</Card.Title>
                    <Card.Text>
                    Coconut Pests
                    </Card.Text>
                    <Card.Text class='small-txt'><a href=''>
                    read more..
                    </a>
                    </Card.Text>
                    </div>
                </Card.Body>
                </Card>
                <Card >
                <Card.Body class='wrapper'>
                    <div class ="col1">
                    <Card.Img class= 'img' variant="top" src="./budRot.jpg" />
                    </div>
                    <div class="col2">
                    <Card.Title>Bud and Nut Rot in Coconut</Card.Title>
                    <Card.Text>
                    Coconut Diseases and Damages
                    </Card.Text>
                    <Card.Text class='small-txt'><a href=''>
                    read more..
                    </a>
                    </Card.Text>
                    </div>
                </Card.Body>
                </Card>
                
                </div>
            </div>
        </section>
        <section class="logos">
            <ul>
                <li><a href=""><img src="./TS.jpg" alt=""></img></a></li>
                <li><a href=""><img src="./FS.png" alt=""></img></a></li>
                <li><a href=""><img src="./CS.png" alt=""></img></a></li>
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

// const Container = styled.div``;
// const Main = styled.main``;

// export default Home
export default Home;