import ShowIonIcon from "./ShowIonIcon";


export default function FundoPost(props) {
  return (
    <div class="fundo">
      <div class="acoes">
        <div>
          <ShowIonIcon name="heart-outline" />
          <ShowIonIcon name="chatbubble-outline" />
          <ShowIonIcon name="paper-plane-outline" />
        </div>
        <div>
          <ShowIonIcon name="bookmark-outline" />
        </div>
      </div>

      <div class="curtidas">
        <img src={props.userImg} />
        <div class="texto">
          Curtido por <strong>{props.Username}</strong> e{" "}
          <strong>{props.likes}</strong>
        </div>
      </div>
    </div>
  );
}
