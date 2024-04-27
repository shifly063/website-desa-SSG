export default function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow-lg fixed-top">
        <div class="container">
          <a href="index.html" class="logo d-flex align-items-center">
            <img src="image/logo.png" />
          </a>
          <a class="navbar-brand" href="index.html">PESONA DESA</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse text-right" id="navbarText">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" href="index.html">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="organisasi.html">Organisasi</a>
              </li>
  
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"> Khas </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="makanan.html">Makanan</a></li>
                  <li><a class="dropdown-item" href="tradisi.html">Tradisi</a></li>
                  <li><a class="dropdown-item" href="sejarah.html">Sejarah</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }