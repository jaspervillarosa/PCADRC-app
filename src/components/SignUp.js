import React, {useState} from 'react'
import styled from 'styled-components';
import '../styles/Home.css'
import '../styles/Styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLock, faUnlock, faBars } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import '../styles/Contact.css'
import Dropdown from 'react-bootstrap/Dropdown';
import axios from 'axios';


function SignUp() {
  
  
const [input, setInput] = useState({
    firstName: '',
    lastName: '',
    email:'',
    password:'',
    confirmPassword:''
})

function handleChange(event){
    const {name, value} = event.target;
   
    setInput(prevInput => {
        return {
            ...prevInput,
            [name]: value
        }
    })
}

function handleClick(event){
    event.preventDefault();
    // console.log(input);

    const newSignup = {
        firstName: input.firstName,
        lastName: input.lastName,
        email:input.email,
        password: input.password,
        confirmPassword: input.confirmPassword
    }

    axios.post('http://localhost:3001/signup', newSignup);
}

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
                    {/* <div class="hamburger-Container"> */}
                        <button class="hamburger-container-btn">
                            <i><FontAwesomeIcon icon={faBars} className="faBars" color='rgb(245,245,245' size='lg'></FontAwesomeIcon></i>
                         {/* <div onChange={handleChange} class="bars"></div> */}
                        </button>
                    {/* </div>  */}
                </div>   
            </div>
        </header>
        <nav class=" primary-nav-Mobile">
                <ul>
                    <li><a href="http://localhost:3000/">Home</a></li>
                    <li><a href="http://localhost:3000/admin">Resources</a></li>
                    <li><a href="http://localhost:3000/about">About</a></li>
                    <li><a href="http://localhost:3000/contact">Contact</a></li>
                </ul>
        </nav>
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
            <h1>Create your PCA government Account</h1>
            </Logo>
            <BigContainer>
                    <InputContainer>
                        <input onChange={handleChange} value={input.email} name="email"  type={'email'} placeholder='Username email' />
                    </InputContainer>
                    <InputContainer>
                        <input onChange={handleChange} value={input.firstName} name="firstName" type={'txt'} placeholder='First name' />
                        <input onChange={handleChange} value={input.lastName} name="lastName" type={'txt'} placeholder='Last name' />
                    </InputContainer>
                    <InputContainer class="password-container">
                        <input onChange={handleChange} value={input.password} name="password"  type={'password'} placeholder='Password' />
                        <input onChange={handleChange} value={input.confirmPassword} name="confirmPassword"  type={'password'} placeholder='Confirm' />
                    </InputContainer>
                    <SignupContainer>
                    <p>Use 8 or more characters with a mix of letters, numbers & symbols</p>
                    </SignupContainer>
                    <InputContainer>
                        <button class="primary-btn"><a href="http://localhost:3000/admin">Log in instead</a></button>
                        <button  onClick={handleClick}  class="sec-btn"><a href="#">Signup</a></button>
                    </InputContainer>

                <SignupContainer>
                    {/* <p>Don't have an account ? <span>Sign Up</span> </p> */}
                </SignupContainer>
            </BigContainer>
        </Form>
            
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
    diplay: flex;
    margin-top: 3rem;
    margin-bottom: 4rem;
    width: 90%;
    margin-left: auto;
    margin-right: auto;


    btn{
        margin-top: 3rem;
    }
    .primary-btn{
 
        height: 33px;
        width: 250px;
        background-color: var(--clr-neutral-300);
        display:flex;
        padding-top: 0.5rem;
        justify-content: left;
        border: none;
        outline: none;
        border-radius: 5px;
        margin-top: 30px;
        font-size: 14px;
        color: #fff;
        cursor: pointer;
        a{
            text-decoration: none;
            color: var(--clr-accent-400);
            font-weight: var(--fw-bold);
        }
    }
    .sec-btn{
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


    .sec-btn:hover{
        background-color: var(--clr-icon-400);
    }
`;

const BigContainer = styled.div`

    margin-top: 1rem;
    
`;

const Logo = styled.div`
    width: 100%;
    text-align:center;
    display: flex;
    img {
        width: 100%;
    }
    h1{
        width: 100%;  
        font-size: var(--fs-200);
        font-weight: var(--fw-sem-bold);
    }
`;
const InputContainer = styled.div`

    height: 25px;
    width:  450px;
    margin-top: 20px;
    display:flex;
    gap: 2rem;

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
    margin-top: 10px;
    margin-left: 5px;
    display: flex;
    align-items: center;
    justify-content: left;
    margin-bottom: 0rem;
    word-wrap: break-word;

    p{
        font-size: 14px;
        span{
            color: #18a4f8;
            font-weight: 600;
            cursor: pointer;
        }
    }
`;

export default SignUp