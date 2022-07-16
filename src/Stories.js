import Story from "./Story";
import ShowIonIcon from "./ShowIonIcon";

let storiesArr =[
      <Story Url="assets/img/9gag.svg" User="9gag" />,
      <Story Url="assets/img/meowed.svg" User="meowed" />,
      <Story Url="assets/img/barked.svg" User="barked" />,
      <Story
        Url="assets/img/nathanwpylestrangeplanet.svg"
        User="nathanwpylestrangeplanet"
      />,
      <Story Url="assets/img/wawawicomics.svg" User="wawawicomics" />,
      <Story Url="assets/img/respondeai.svg" User="respondeai" />,
      <Story Url="assets/img/filomoderna.svg" User="filomoderna" />,
      <Story Url="assets/img/memeriagourmet.svg" User="memeriagourmet" />,
      <Story Url="assets/img/9gag.svg" User="9gag" />

]

export default function Stories() {
  return (
    <div class="stories">
      {storiesArr.map((value)=> value)}
      <div class="setinha">
        <ShowIonIcon name="chevron-forward-circle" />
      </div>
    </div>
  );
}
