import React, {Component} from 'react'
import styled from 'styled-components'
import '../styles/Home.css'
import '../styles/Styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLock, faUnlock, faBars } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import '../styles/About.css'
import Accordion from 'react-bootstrap/Accordion';
import Dropdown from 'react-bootstrap/Dropdown';
import { slide as Menu } from 'react-burger-menu'

class About extends Component {
 
    constructor (props) {
        super(props)
        this.state = {
          menuOpen: false
        }
      }

handleStateChange (state) {
    this.setState({menuOpen: state.isOpen})  
      }

closeMenu () {
    this.setState({menuOpen: false})
      }

toggleMenu () {
    this.setState(state => ({menuOpen: !state.menuOpen}))
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
        
        {/* for mobile menu  */}
         <Menu>  
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
        </Menu>
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
       <section class = 'main-section-about'>
        <div class="about-us-section">
            <h2>History</h2>
            <Accordion defaultActiveKey="0" flush>
            <Accordion.Item eventKey="0">
                <Accordion.Header> HISTORY OF PCA</Accordion.Header>
                <Accordion.Body>
                <p>
                        The Philippine Coconut Authority was created pursuant to Presidential Decree 232 on June 30, 1973. It absorbed and assumed the powers and functions of the then Coconut Coordinating Council (CCC), the Philippine Coconut Administration (PHILCOA) and the Philippine Coconut Research Institute (PHILCORIN).
                    </p>
                    <p>
                        Today, it is the sole government agency that is tasked to develop the industry to its full potential in line with the new vision of a united, globally competitive and efficient coconut industry.
                    </p>
                    <h2>PCA THROUGH THE YEARS</h2>
                    <p>
                        <strong>1940. </strong> National Coconut Corporation (NACOCO) was created to promote the growth and development of the coconut industry.
                    </p>
                    <p>
                        <strong>1954. </strong> NACOCO became the Philippine Coconut Administration (PHILCOA) with the same function and responsibilities. Ten years later, it expanded its scope of operations and renamed as Philippine Coconut Research Institute (PHILCORIN) an agency created to monitor, evaluate and conduct researches on the coconut.
                    </p>
                    <p>
                        <strong>1971. </strong> NAt the height of the Period of Expansion, the Coconut Coordinating Council (CCC) was created in lieu of PHILCORIN and was tasked to supervise, coordinate and evaluate the implementation of the coconut self-sufficiency program of the government.
                    </p>
                    <p>
                        <strong>1973. </strong> Agencies lacked singleness in its purpose and the framework upon which they operated did not revolve around the total development of the coconut industry where coconut farmers stood at the focal point. In view of this, Government deemed it necessary to create an agency that would address that situation, thus, the Philippine Coconut Authority was created in June 30, 1973 by virtue of P.D. No. 232. It absorbed and assumed the powers and functions, including the personnel and assets of the then defunct CCC, PHILCOA, and the PHILCORIN.
                    </p>
                    <p>
                        <strong>1976. </strong>Philippine Coconut Authority became an independent public corporation on July 14, 1976 pursuant to P.D. No. 961, reporting directly and supervised solely by the Office of the President. This Decree was the first codification of the laws dealing with the development of the coconut and other palm oil industry.
                    </p>
                    <p>
                        <strong>1978.</strong> The Code was later revised on June 11, 1978 by P.D. No. 1468 ("Revised Coconut Industry Code") which eventually became the charter of PCA as a public corporation.
                    </p>
                    <p>
                        <strong>1987. </strong>On January 30, 1987, pursuant to Executive Order No. 116, the Philippine Coconut Authority was officially declared as an attached Agency of the Department of Agriculture (DA). The declaration of transfer to DA from the Office of the President was enacted to provide overall coordination and monitoring of policies and programs of various sectors in agriculture. The attachment was confirmed and incorporated in the Administrative Code of 1987.
                    </p>
                    <p>
                        <strong>2014. </strong> By virtue of Executive Order No. 165 issued on May 15, 2014, the Philippine Coconut Authority, National Food Authority, National Irrigation Administration, and Fertilizer and Pesticide Authority were transferred from the Department of Agriculture to the Office of the President. The declaration of transfer of these agencies to the Office of the President was enacted to enhance and coordinate the efforts of the PCA, NFA, NIA and FPA in fulfilling their respective mandates.
                    </p>
                    <p>
                        <strong>2016. </strong> On June 30, 2016, pursuant to Executive Order No. 01, the Philippine Coconut Authority was one of the 12 agencies placed under the supervision of the Office of the Cabinet Secretary. The declaration of supervision of the agency was enacted to develop and evaluate poverty reduction programs to reduce both the incidence and magnitude of poverty.
                    </p>
                    <p>
                        <strong>2018. </strong> On September 17, 2018, pursuant to Executive Order No. 62, the Philippine Coconut Authority was one of the three (3) agencies transferred to the Department of Agriculture.
                    </p>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>HISTORICAL PERSPECTIVE</Accordion.Header>
                <Accordion.Body>
                <h2>HISTORICAL PERSPECTIVE</h2>
                    <p>
                        The state of the coconut industry is better understood if we look at the web of its history. What started as a colonial crop forced on the natives by gubernatorial edict in 1642, coconut began to be an important commercial agricultural crop by the turn of the 20th century. Here are some historical milesto
                    </p>
                    <ul>
                        <li>
                            <p>Since 1840, coconut products in the Philippines were traded in small quantities with Chinese/Malay traders. Coconut fibers and coconut oil were likewise used by the Spaniards in rigging the Galleon and as food for sailors plying the Manila-Acapulco Galleon trade.</p>
                        </li>
                        <li>
                            <p>In 1898, with the increasing demand for soap and the invention of margarine, copra and coconut oil were exported to Europe as raw material ingredient of said products. Margarine was also a cheaper substitute for butter. By then, copra export comprised 5% of the total commodity export of the Philippines.</p>
                        </li>
                        <li>
                            <p>The US market came in after the transfer of the Philippines from Spain. By 1926, more than 90% of US demand for desiccated coconut was supplied by the Philippines.</p>
                        </li>
                        <li>
                            <p>The earliest account disclosed that in 1905, Philippines had only 210,000 hectares of cocal area with 42 million coconut trees.</p>
                        </li>
                        <li>
                            <p>US preferential treatment for coconut export and the duty-free entry of coconut in Europe encouraged further growth of the coconut industry. By 1935, some US$221.22 million was invested in land and improvements in coconut plantations, coconut oil milling, refining and product processing. About this period, there were six big coconut oil mills, with 46.5% American capitalization, 29% British, 11.8% Chinese, 7.6% Filipino and 4.6% Spanish (Guerrero. Sylvia, 1985).</p>
                        </li>
                        <li>
                            <p>Early in 1930, the US imposed a US$ 0.03 per pound processing tax and an additional US$0.02 excise tax on all copra and coconut oil imported to the US. The excise tax collected from Philippine coconut products were returned to the Philippines Commonwealth treasury on condition that it shall not be used to develop or subsidize the production of copra, coconut oil and other allied coconut products.</p>
                        </li>
                        <li>
                            <p>During the Presidency of Manuel L. Quezon, an average of P21 million per month of coconut excise money was remitted and provided a large source of the annual national budget. It was spent to build roads in Mindanao, to acquire lands for home lots, assistance in agrarian reform, agriculture, public health, public works and promotion of Philippine commerce and trade. After World War II, some P80 million more was used for post war rehabilitation. The refund ended after Philippines gained independence in 1946 (Guerrero).</p>
                        </li>
                        <li>
                            <p>During and after World War II the US continued to buy more copra and coconut oil to extract glycerin needed in the production of explosives. Various fractions of oleo chemicals were also derived for the manufacture of cosmetics, pharmaceuticals, emulsifiers, propellants, paints, and insecticides.</p>
                        </li>
                        <li>
                            <p>The heightened demand for copra and coconut oil established the foundation of the coconut manufacturing and export economy as it stood by during the early golden years of industrialization in the Philippines.
                            </p>
                        </li>
                        <li>
                            <p>By 1960, the area planted to coconuts expanded to 1.60 million hectares, increasing to 2.283 million or 42% in 1975. Copra production doubled from 1.60 MMT to 2.216 MMT.</p>
                        </li>
                        <li>
                            <p>In the same period, coconut export increased by 39.56% from 1.34 MMT to 1.86 MMT boasting hefty export revenue of US$ 483.80 million, increasing by 79% from US$ 270 million.</p>
                        </li>
                        <li>
                            <p>The '70s and the next decade that followed marked a new era of development with the imposition of the coconut stabilization levy to harness the inflationary effect brought by the high prices of copra and coconut oil in the world market. The levy was utilized to finance several development programs like coconut replanting, fertilization, scholarship program for deserving children of coconut farmers, acquisition and rationalization of coconut oil mills for the benefit of the coconut farmers, research and development, establishment of a coconut farmers' bank and investments.
                            </p>
                        </li>
                        <li>
                            <p>The stabilization levy ended & indefinitely suspended in 1982.</p>
                        </li>
                    </ul>
                </Accordion.Body>
            </Accordion.Item>
            </Accordion>
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

export default About