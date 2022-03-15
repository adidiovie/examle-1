import { Outlet, Link } from "react-router-dom";
import './index.css';

function About() {
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
    <div className='about-body'>
   <div className='about-pic'>
   <h2>Matt Biondi</h2>
<img src='https://swimjim.com/wp-content/uploads/2018/01/Matt-Biondi1.jpg' alt='pic of guy' height={'350px'} width= {'350px'}/>
</div>
   <div className='about-write-up'>
<p>Amazingly, Biondi did not start</p>
<p>swimming year-round until he entered</p>
<p>high school. By the end of high school,</p>
<p>he had the national high school record</p>
<p>in the 50-yard freestyle. He’s an 11-time</p>
<p>Olympic medalist who is remembered</p>
<p>for pushing the era of true professional</p>
<p>swimming at the 1984, 1988, and 1992</p>
<p>games. He is a member of the United</p>
<p>States Olympic Hall of Fame and the</p>
<p>International Swimming Hall of Fame.</p>
   </div>
    </div>
    <Outlet />
    </div>
  );
}

export default About;
