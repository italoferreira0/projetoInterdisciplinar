import '../components/Navbar.css'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link" href="#">Cursos</a>
                        <a className="nav-link" href="#">Teste Vocacional</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
