
import { Outlet, Link } from "react-router-dom";
import './index.css';

function Home() {
  return (
    <div className='main-page'>
    <nav>
    <ul className='nav-links'>
        <li>
       <p><Link to="/About">about</Link> |{" "}</p> 
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
    <div className='guns'>
   <img  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCFBmX5q7woM6BVo0gK_xai5zcdH5Mie7Tfg&usqp=CAU' alt='pictuer of guns' height={"400px"} width={"420px"}/> 
    <img  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR381pYvxjdd-avuJ259w7kRS2lJNw2mRdDkg&usqp=CAU' alt='pictuer of guns' height={"400px"} width={"420px"}/>
    <img  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq0vx_AifjCsixTBurgvUAySQFTEuKF8Z8og&usqp=CAU' alt='pictuer of guns' height={"400px"} width={"420px"}/>
    </div>
    <Outlet />
    </div>
  );
}

export default Home;
