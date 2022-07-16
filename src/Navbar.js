import ShowIonIcon from "./ShowIonIcon";

export default function Navbar() {
  return (
    <div class="navbar">
      <div class="container">
        <div class="logo">
          <ion-icon name="logo-instagram"></ion-icon>
          <div class="separador"></div>
          <img src="assets/img/logo.png" />
        </div>
        <div class="logo-mobile">
          <ShowIonIcon name="logo-instagram" />
        </div>
        <div class="instagram-mobile">
          <img src="assets/img/logo.png" />
        </div>
        <div class="pesquisa">
          <input type="text" placeholder="Pesquisar" />
        </div>
        <div class="icones">
          <ShowIonIcon name="paper-plane-outline" />
          <ShowIonIcon name="compass-outline" />
          <ShowIonIcon name="heart-outline" />
          <ShowIonIcon name="person-outline" />
        </div>
        <div class="icones-mobile">
          <ShowIonIcon name="paper-plane-outline" />
        </div>
      </div>
    </div>
  );
}
