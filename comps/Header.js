import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
const Header = () => {
    return ( 
        <div>
            <header>
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div class="container">
                    <a class="navbar-brand" href="/"><span>RAMEN</span></a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav ml-auto">
                            <li><a class="fas fa-home nav-link text-light" href="/"> Home</a></li>
                            <li><a class="fas fa-link nav-link text-light" href="/about"> Send</a></li>
                            <li><a class="fas fa-link nav-link text-light" href="/about"> Receive</a></li>
                        </ul>
                    </div>
                    </div>
                </nav>
                </header>
        </div>
    );
}
 
export default Header;
