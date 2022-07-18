import Story from "./Story";
import ShowIonIcon from "./ShowIonIcon";

let storiesArr =[
      {Url:"assets/img/9gag.svg", User:"9gag"},
      {Url:"assets/img/meowed.svg", User:"meowed"},
      {Url:"assets/img/barked.svg", User:"barked"},
      {        Url:"assets/img/nathanwpylestrangeplanet.svg",
        User:"nathanwpylestrangeplanet"
    },
      {Url:"assets/img/wawawicomics.svg", User:"wawawicomics"},
      {Url:"assets/img/respondeai.svg", User:"respondeai"},
      {Url:"assets/img/filomoderna.svg", User:"filomoderna"},
      {Url:"assets/img/memeriagourmet.svg", User:"memeriagourmet"},
      {Url:"assets/img/9gag.svg", User:"9gag"}

]

export default function Stories() {
  return (
    <div class="stories">
      {storiesArr.map((storie)=> <Story {...storie} />)}
      <div class="setinha">
        <ShowIonIcon name="chevron-forward-circle" />
      </div>
    </div>
  );
}
