import ShowIonIcon from "./ShowIonIcon"


export default function Navbar(){
    return (
    <div class="navbar">
        <div class="container">
          <Logo />
          <LogoMobile/>
          <SearchBar />
          <Icones />
          <IconesMobile />
        </div>
      </div>
    )
}

function Logo(){
  return (
    <>
      <div class="logo">
              <ion-icon name="logo-instagram"></ion-icon>
              <div class="separador"></div>
              <img src="assets/img/logo.png" />
      </div>
    </>
  )
}

function LogoMobile(){
  return (
    <>
    <div class="logo-mobile">
      <ShowIonIcon name="logo-instagram"/>
    </div>
    <div class="instagram-mobile">
      <img src="assets/img/logo.png" />
    </div>
    </>
    
  )
}

function SearchBar(){
  return (
    <>
      <div class="pesquisa">
              <input type="text" placeholder="Pesquisar" />
      </div>
    </>
  )
}

function Icones(){
  return (
    <>
    <div class="icones">
      <ShowIonIcon name="paper-plane-outline"/>
      <ShowIonIcon name="compass-outline"/>
      <ShowIonIcon name="heart-outline"/>
      <ShowIonIcon name="person-outline"/>
    </div>
    </>
  )
}

function IconesMobile(){
  return (
    <div class="icones-mobile">
      <ShowIonIcon name="paper-plane-outline"/>
    </div>
  )
}



