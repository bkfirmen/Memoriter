import Footer from "../components/Footer";
import Logo from './Logo.png';
import { Link } from 'react-router-dom';


function PrivacyPage() {

    let lastPage = localStorage.getItem('lastPage');

    return(
        <div>
            <Link to='/'>
                <img className="Logo-oben" src={Logo} alt="site-logo" style={{top: '-2.5px', zIndex: '10'}}></img>
            </Link>
            <Link to={lastPage}>
                <div className="Zurückbutton_Body" style={{top: '90px', left: '8px', zIndex: '10'}}>
                    <div className="Zurückbutton_Arrow"/>
                </div>
            </Link>
            
            <h1 className='Legal_Header'>Privacy Policy</h1>
            <article className="Legal_Text">
                <p>
                    Last Changed: 27/05/2022
                </p>
                <p>
                    We are happy that you decided to use our app Memoriter.
                    The collection of user data is crucial for the app to work, therefore the collection of personal data is unavoidable,
                    but we are interested in informing you about for you to feel save while visiting our website and app.
                    In the following, it will be explained how and why we process personal and user data.
                </p>
            </article>
            <p className="Legal-SubHeader">1. Reasons for Collecting Data</p>
            <article className="Legal_Text">
               <p>
                   When using Memoriter, user data is not saved localy on your device,
                   but at a database in order to use the app on different devices and locations.
                   Collecting the user data is therefore important for the app to work,
                   because it will request reading from and writing to a database.
                   Otherwise, no content could be displayed nor changed in the app.
               </p>
               <p>
                   We also might collect data regarding the use of the website/app for analyzing how much the app is used,
                   this is important to provide a fast and stable connection to the online services.
               </p>
            </article>
            <p className="Legal-SubHeader">2. What Data Is Being Collected</p>
            <article className="Legal_Text">
                <p>
                    The user data, such as the flashacards, folders etc. are collected inside of a databse. Furthermore you also need to provide user information like  email adress and a password for signing up and logging in,
                    but the password in securely encrypted and cannot be observed.
                </p>
                <p>
                    We might also collect data about accessing the database, like your ip adress and time and of access to our app and reading and writing from or to the database.
                </p>
            </article>
            <p className="Legal-SubHeader">3. How Personal Data Is Used</p>
            <article className="Legal_Text">
                <p>
                    All user data is stored at a Firebase database, a service provided by Google. For storing data, the privacy policies of Google apply.
                    If you have concerns about how Google might be process the data, the privacy policies can be viewed <a href="https://policies.google.com/u/0/privacy" target='_blank' rel="noreferrer" style={{color: '#274b65'}}>here</a>.
                </p>
                <p>
                    All of the data regarding the user such as passwords are being stored inside the firebase authorisation database.
                    All of the user data except passwords, which are securely encrypted, might be visible to the us during development.
                </p>
                <p>
                    We do not share the user data with third parties except for the reasons and parties named above.
                </p>
                
            </article>
            <p className="Legal-SubHeader">4. Storage Period</p>
            <article className="Legal_Text">The data will be stored until the account is deleted. Unfortunately it is curently not possible to delete an account,
                but it will added later alongside other account management features.
            </article>
            <div style={{height: '100px'}}/>
            
            <Footer/>
        </div>
    );
}
export default PrivacyPage;