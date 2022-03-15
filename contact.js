
import { Outlet, Link, useHistory } from "react-router-dom";
import './index.css';
  
function Contact() {
  let history = useHistory();

  return (
    <div className='main-page'>
     
       <nav>
    <ul className='nav-links'>
    <li>
        <Link to="/About">about</Link> |{" "}
          </li>
        <li>
        <Link to="/Contact">contact</Link> |{" "}
          </li>
          <li>
        <Link to="/Home">home</Link> |{" "}
          </li>
    </ul>
    <h1>welcome. (project on react router)</h1>
    </nav>
    <div className='form-page'>
        <div className='form-header'>
<h3>You Can Contact Us By Simply</h3>
<br />
<div className='top-page'>
 <ol>
     <li>Filling your name in the name field</li>
     <li>Filling email</li>
     <li>Filling message</li>
 </ol>
 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT52WGXkKDrU21sfxN84wQKnElWYj5PzINq7A&usqp=CAU" alt='logo' height={'100'} width={"100px"}/>
</div>
 <br />
 <h3>So We Can Get Back To You If There Is Any Need Too.</h3>
        </div>
    <form className="form">
   <h1>contact form </h1>

   <label>Name</label>
   <br />
   <input placeholder="Name"  />
<br />
<br />
   <label>Email</label>
   <br />
   <input placeholder="Email"  />
<br />
<br />
   <label>Message</label>
   <br />
   <textarea placeholder="Message" columns={'10'} rows={'10'}  ></textarea>
<br />
<br />
<button onClick ={() => {history.push('/Home')}} > Submit!</button>
    </form>
    </div>
    <Outlet />
    </div>
  );
}

export default Contact;
