import React, { Component, useState, useContext } from 'react'
import styled from 'styled-components';
import '../styles/Home.css'
import '../styles/Styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLock, faUnlock, faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import '../styles/Contact.css'
import Dropdown from 'react-bootstrap/Dropdown';
import {slide as Menu} from 'react-burger-menu'

class Login extends Component {
    
    constructor (props) {
            super(props)
            this.state = {
              menuOpen: false
            }
          }
    
    // handleStateChange (state) {
    //     this.setState({menuOpen: state.isOpen})  
    //       }
    
    // closeMenu () {
    //     this.setState({menuOpen: false})
    //       }
    
    // toggleMenu () {
    //     this.setState(state => ({menuOpen: !state.menuOpen}))
    //       }
    
    
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
        <Container>
            <Main>
            <header class="primary-header">
            <div class="wrapper-header">
                <div class="secondary-nav-wrapper">
                    <nav class="secondary-nav">
                        <ul class="secondary-nav-contact">
                            <li><i><FontAwesomeIcon icon={faPhone} className="fa-solid" color='rgb(245,245,245' size='lg'></FontAwesomeIcon></i><a href="https://www.viber.com/en/?utm_source=des_w&utm_medium=w8&utm_term=4226&utm_content=dlg">Text/Viber: 09263524939</a></li>
                            <li><i><FontAwesomeIcon icon={faEnvelope} className="fa-solid" color='rgb(245,245,245' size='lg'></FontAwesomeIcon></i><a href="https://mail.google.com/mail/u/0/#inbox">pcadrchelpdesk@mail.pca.gov.ph</a></li>
                        </ul>
                        <ul class="secondary-nav-login">
                            <li><i><FontAwesomeIcon icon={faLock} className="fa-solid" color='rgb(245,245,245' size='lg'></FontAwesomeIcon></i><a href="http://localhost:3000/login">LOGIN</a></li>
                        </ul>
                    </nav>
        
                </div>
               
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
                        
                        <button onClick={() => this.toggleMenu()} class="hamburger-container-btn">
                            <i><FontAwesomeIcon icon={faBars} className="faBars" color='rgb(245,245,245' size='lg'></FontAwesomeIcon></i> 
                        </button>
                </div>   
            </div>
        </header>
        
        {/* for mobile menu 
         <Menu  right >  
            <div 
                isOpen={this.state.menuOpen}
                onStateChange={(state) => this.handleStateChange(state)}
                >
                <ul>
                    <li><a href="http://localhost:3000/" onClick={() => this.closeMenu()}>Home</a></li> 
                    <li> <a  href="http://localhost:3000/admin" onClick={() => this.closeMenu()}>Resources</a></li>
                    <li><a href="http://localhost:3000/about" onClick={() => this.closeMenu()}>About</a></li> 
                    <li><a href="http://localhost:3000/contact" onClick={() => this.closeMenu()}>Contact</a></li> 
                </ul>
            </div>
        </Menu> */}
                        
            <section class="pca-logo-section">
                <div class="wrapper-pca-logo">
                    <h1 class="pcaLogo"><a href="#"><img src="./pcalogo.png" alt=""></img></a></h1>
                    <div class="pca-logo-txt">
                        <h4>Department of Agriculture</h4>
                        <h4 class="primaryHeader">PHILIPPINE COCONUT AUTHORITY</h4>
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
                <div>
                <Form>
                    <Logo>
                        {/* <img src='./PCA.png'></img> */}
                        <h1>LOGIN</h1>
                    </Logo>
                    <InputContainer>
                        <input type={'email'} placeholder='Username' />
                    </InputContainer>
                    <InputContainer>
                        <input type={'password'} placeholder='Password' />
                    </InputContainer>
                    <InputContainer>
                        <button><a href="http://localhost:3000/admin">Login</a></button>
                    </InputContainer>
                </Form>
                <SignupContainer>
                    <p> Don't have an account ? <a href="http://localhost:3000/signup"><span>Sign Up</span></a> </p>
                </SignupContainer>
                </div>
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
               
            </Main>
        </Container>
      )
}
 
}

const Container  = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
    // align-items: center;
    // justify-content: center;

`;
const Main = styled.main`
    
    display: flex;
    flex-direction: column;
    width: 100%;
`;


const Form = styled.form`
    background: #fff;
    padding: 20px;
    min-width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 400px;
    padding-top: 2rem;

    button{
        height: 33px;
        width: 250px;
        background-color: var(--clr-accent-400);
        border: none;
        outline: none;
        border-radius: 5px;
        margin-top: 30px;
        font-size: 14px;
        color: #fff;
        cursor: pointer;
        a{
            text-decoration: none;
            color: var(--clr-neutral-200);
        }

    }

    button:hover{
        background-color: var(--clr-accent-500);
    }
`;
const Logo = styled.div`
    width: 120px;
    img {
        width: 100%;
    }
`;
const InputContainer = styled.div`

    height: 25px;
    width:  250px;
    margin-top: 20px;
    input {
       height : 100%;
       width: 100%;
       background-color: #fafafa;
       border: 1px solid;
       padding: 1rem;
       border: 1px solid lightgray;
    }

`;

const SignupContainer = styled.div`
    
    padding-top: 10px;
    background-color: #fff;
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 12rem;

    p{
        font-size: 14px;
        a{
            text-decoration: none;
            
            span{
            color: #18a4f8;
            font-weight: 600;
            cursor: pointer;
            }
        }
        a:hover{
            color: red;
            font-weight: 600;
            cursor: pointer;
        }
    }

`;

export default Login