import ShowIonIcon from "./ShowIonIcon";

export default function TopoPost(props) {
  return (
    <div class="topo">
      <div class="usuario">
        <img src={props.imgUrl} />
        {props.User}
      </div>
      <div class="acoes">
        <ShowIonIcon name={props.name}/>
      </div>
    </div>
  );
}
