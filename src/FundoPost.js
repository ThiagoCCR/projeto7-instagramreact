import React,{useState} from "react";
import ShowIonIcon from "./ShowIonIcon";


export default function FundoPost(props) {

  const [corBotao, setCorBotao] = useState("");
  const [nameBotao, setNameBotao] = useState("heart-outline")

  function toggleBotao() {
    if (nameBotao === "heart-outline"){
      setNameBotao("heart");
      setCorBotao("red");
    } else {
      setNameBotao("heart-outline");
      setCorBotao("");
    }
  }

  return (
    <div class="fundo">
      <div class="acoes">
        <div>
          <ShowIonIcon color={corBotao} 
          name={nameBotao}
          onClick={toggleBotao} />
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
