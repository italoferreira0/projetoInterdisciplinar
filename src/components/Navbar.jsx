import '../components/Navbar.css'

function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary " data-bs-theme="dark">
            <div class="container-fluid ">
                <div class="collapse navbar-collapse Navbar" id="navbarNavAltMarkup">
                    <div class="navbar-nav">    
                        <a class="nav-link" href="#">Cursos</a>
                        <a class="nav-link" href="#">Teste Vocacional</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar