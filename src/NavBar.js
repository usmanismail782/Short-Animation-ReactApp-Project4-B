import logo from './images/logo-junto-main.png';

export const NavBar = () => {


    return(

        <nav class="navbar navbar-expand-lg " style= {{ background: "linear-gradient(90deg,  rgba(206,2,189,1)10%,  rgba(75,6,193,1) 90%)",  boxShadow: "0px 1px 10px 1px #000000" }}>
      
 
        <div class="collapse navbar-collapse" id="navbarNav">
    
    <a class="navbar-brand" href="#">
      <img src={logo} alt="" width="150" height="45" />
    </a>
 
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="" style= {{ color: "black"}}>Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="" style= {{ color: "black"}}>Services</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="" style= {{ color: "black"}}>About</a>
            </li>
          </ul>
      
          
        </div>
      </nav>
    )


}  


