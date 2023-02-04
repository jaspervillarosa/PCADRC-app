import React, {useEffect, useState} from 'react'
import '../styles/Home.css'
import '../styles/Styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLock, faUnlock, faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import '../styles/Admin.css'
import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/Dropdown';

function Admin() {

    const [pests, setPests] = useState([{
        pestName: '',
        scientificName: '',
        cause:'',
        remark: '',
        management:''
    }]);

    // const [farmers, setFarmers] = useState ([{
    //     farmerName: '',
    //     address: '',
    //     companyName: '',
    //     email: '',
    //     password: '',
    //     mobileNumber: ''
    // }])

    useEffect(()=>{
        fetch("/admin").then(res => {
            if(res.ok){
                return res.json()
            }
        })
        .then(jsonRes => setPests(jsonRes))
        // .then(jsonRes => setFarmers(jsonRes))
    })
    
    

  return (
    <div className='Admin-page'>
        <header class="primary-header">
            <div class="wrapper-header">
                <nav class="secondary-nav">
                    <ul class="secondary-nav-contact">
                        <li><i><FontAwesomeIcon icon={faPhone} className="fa-solid" color='rgb(245,245,245' size='lg'></FontAwesomeIcon></i><a href="#">Text/Viber: 09263524939</a></li>
                        <li><i><FontAwesomeIcon icon={faEnvelope} className="fa-solid" color='rgb(245,245,245' size='lg'></FontAwesomeIcon></i><a href="#">pcadrchelpdesk@mail.pca.gov.ph</a></li>
                    </ul>
                    <ul class="secondary-nav-login">
                        <li><i><FontAwesomeIcon icon={faUnlock} className="fa-solid" color='rgb(245,245,245' size='lg'></FontAwesomeIcon></i><a href="http://localhost:3000">HELLO ADMIN</a></li>
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
                        <Dropdown.Item href="#">Coconut Pests</Dropdown.Item>
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

        <section class="main-section-admin">
                    <div class="database-editor-section">
                            <h1>Manage Database</h1>
                            <ul>
                                <li><a class="active" href="">Coconut Damages</a></li>
                                <li><a href="#farmers">Farmers</a></li>
                            </ul>
                            <div class="database-wrappers">
                                <h4>Management </h4>
                            <div class="search-inputs-database">
                                <h2>Pest and or Disease </h2>
                                <div class="inputs-wrapper">
                                    <div class="inputs-wrapper-inside">
                                        <div class="input-group mb-3" >
                                            <input type="text" placeholder="Name contains.." class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                                        </div>
                                    </div>
                                    <div class="inputs-wrapper-inside">
                                        <input type="text" placeholder="Input scientific name.." class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                                    </div>
                                    <button type="button" class="btn btn-success">SEARCH</button>
                                </div>
                            </div>
                            <div class="add-button-database-wrapper">
                                <button type="button" class="btn btn-success"><a href='http://localhost:3000/add-data'> <span> + </span>Add New Pest and or Disease</a></button>
                            </div>
                            <div class="table-datasets-wrapper">
                            <Table striped >
                            <thead >
                                <tr>
                                <th>Name</th>
                                <th>Scientific Name</th>
                                <th>Cause</th>
                                <th>Remark</th>
                                <th>Management</th>
                                <th>Action</th>
                                </tr>
                            </thead>
                            {pests?.map(pest =>
                            <tbody class="table-group-divider">
                                <tr>
                                <td>{pest.pestName}</td>
                                <td>{pest.scientificName}</td>
                                <td>{pest.cause}</td>
                                <td>{pest.remark}</td>
                                <td>{pest.management}</td>
                                <td><a href=""><i><FontAwesomeIcon icon={faPencil} className="fa-solid" color='rgb(245,245,245' size='lg'></FontAwesomeIcon></i></a><a><i><FontAwesomeIcon icon={faTrash} className="fa-solid" color='rgb(245,245,245' size='lg'></FontAwesomeIcon></i></a></td>
                                </tr>
                            </tbody>
                             )}
                            </Table>
                        </div>
                        {/* <div class="database-wrappers">
                                <h4>Management </h4>
                            <div class="add-button-database-wrapper">
                                <button type="button" class="btn btn-success"><a href='http://localhost:3000/add-data'> <span> + </span>Add New Pest and or Disease</a></button>
                            </div>
                            <Table striped class="table">
                            <thead >
                                <tr>
                                <th>Farmer Name</th>
                                <th>Address</th>
                                <th>Company Name</th>
                                <th>Email</th>
                                <th>Password</th>
                                <th>Mobile Number</th>
                                <th>Action</th>
                                </tr>
                            </thead>
                            {farmers?.map(farmer =>
                            <tbody class="table-group-divider">
                                <tr>
                                <td>{farmer.farmerName}</td>
                                <td>{farmer.address}</td>
                                <td>{farmer.companyName}</td>
                                <td>{farmer.email}</td>
                                <td>{farmer.password}</td>
                                <td>{farmer.mobileNumber}</td>
                                <td><a href=""><i><FontAwesomeIcon icon={faPencil} className="fa-solid" color='rgb(245,245,245' size='lg'></FontAwesomeIcon></i></a><a><i><FontAwesomeIcon icon={faTrash} className="fa-solid" color='rgb(245,245,245' size='lg'></FontAwesomeIcon></i></a></td>
                                </tr>
                            </tbody>
                             )}
                            </Table>
                        </div> */}
                        <div class="database-wrappers">
                    <h4 id='farmers'>Management </h4>
                    <div class="add-button-database-wrapper">
                        <button type="button" class="btn btn-success"> <a href='http://localhost:3000/add-disease'><span> + </span>List a Farmer</a></button>
                    </div>
                    <div class="table-datasets-wrapper">
                        <table class="table">
                            <thead>
                            <tr>
                                <th scope="col">Farmer Name</th>
                                <th scope="col">Address</th>
                                <th scope="col">Company Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Password</th>
                                <th scope="col">Mobile Number</th>
                                <th scope="col">Action</th>
                            </tr>
                            </thead>
                            <tbody class="table-group-divider">
                            <tr>
                                <td>John Paul Dela Cruz</td>
                                <td>Corner Rizal Avenue and Valencia Streets, Puerto Princesa</td>
                                <td>Blackburrow Ranch</td>
                                <td>jpdelacruz@pcadrc.gov.ph</td>
                                <td>000000</td>
                                <td>0908-813-1496</td>
                                <td><a href=""><i><FontAwesomeIcon icon={faPencil} className="fa-solid" color='rgb(245,245,245' size='lg'></FontAwesomeIcon></i></a><a><i><FontAwesomeIcon icon={faTrash} className="fa-solid" color='rgb(245,245,245' size='lg'></FontAwesomeIcon></i></a></td>
                            </tr>
                            <tr>
                                <td>Justine Garcia</td>
                                <td> 709 General Luis Street 1400, Caloocan city</td>
                                <td>Fresh Fields.</td>
                                <td>jgarcia@pcadrc.gov.ph</td>
                                <td>!adkgds@j</td>
                                <td>0926-432-3422</td>
                                <td><a href=""><i><FontAwesomeIcon icon={faPencil} className="fa-solid" color='rgb(245,245,245' size='lg'></FontAwesomeIcon></i></a><a><i><FontAwesomeIcon icon={faTrash} className="fa-solid" color='rgb(245,245,245' size='lg'></FontAwesomeIcon></i></a></td>
                            </tr>
                            <tr>
                                <td>Daniel Santos </td>
                                <td >18/F The Pacific Star Building Makati Avenue Corner Senator Gil Puyat Avenue 1200, Makati city</td>
                                <td>Aggregate Agro</td>
                                <td>danielsantos@pcadrc.gov.ph</td>
                                <td>march282000</td>
                                <td>0935-918-8591</td>
                                <td><a href=""><i><FontAwesomeIcon icon={faPencil} className="fa-solid" color='rgb(245,245,245' size='lg'></FontAwesomeIcon></i></a><a><i><FontAwesomeIcon icon={faTrash} className="fa-solid" color='rgb(245,245,245' size='lg'></FontAwesomeIcon></i></a></td>
                            </tr>
                            <tr>
                                <td >Mark Anthony Bautista</td>
                                <td>54 62 Stanford Street Cubao 1100, Quezon city</td>
                                <td>Agventure</td>
                                <td>mabautista@pcadrc.gov.ph</td>
                                <td>2342joy</td>
                                <td>0917-054-1052</td>
                                <td><a href=""><i><FontAwesomeIcon icon={faPencil} className="fa-solid" color='rgb(245,245,245' size='lg'></FontAwesomeIcon></i></a><a><i><FontAwesomeIcon icon={faTrash} className="fa-solid" color='rgb(245,245,245' size='lg'></FontAwesomeIcon></i></a></td>
                            </tr>
                            
                            </tbody>
                        </table>
                    </div>
                </div>

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

export default Admin