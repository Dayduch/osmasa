import Logo from "./../assets/logo-osis.png";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-dark">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="/" className="nav-link text-white">
              <img src={Logo} width="45px" />
            </a>
          </li>
        </ul>
        <ul className="navbar-nav">
          <li className="nav-item text-white">
            <h3>OSMASA</h3>
          </li>
        </ul>
        <ul>
        </ul>
        <div className=" container-fluid container">
          <ul className="navbar-nav">
          <li className="nav-item">
                <a href="/" className="nav-link text-white">Beranda</a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle text-white"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                Infaq
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="/infaq-jumat">
                    Infaq Jumat
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/infaq-kamis">
                    Infaq Kamis
                  </a>
                </li>

              </ul>
            </li>
            <li className="nav-item">
                <a href="/proker" className="nav-link text-white">Program Kerja</a>
            </li>
            <li className="nav-item">
                <a href="/kritik-saran" className="nav-link text-white">Kritik & Saran</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
