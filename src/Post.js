import TopoPost from "./TopoPost";
import ConteudoPost from "./ConteudoPost";


let allPosts = [
    <div class="post">
    <TopoPost
      name="ellipsis-horizontal"
      imgUrl="assets/img/meowed.svg"
      User="meowed"
    />
    <ConteudoPost imgUrl="assets/img/gato-telefone.svg" userImg="assets/img/respondeai.svg" userName="respondeai" likes="outras 101.523 pessoas"/>
    </div>,
  <div class="post">
    <TopoPost
      name="ellipsis-horizontal"
      imgUrl="assets/img/barked.svg"
      User="barked"
    />
    <ConteudoPost imgUrl="assets/img/dog.svg" userImg="assets/img/adorable_animals.svg" userName="adorable_animals" likes="outras 99.159 pessoas"/>
  </div>
];


export default function Post() {
  return (
   allPosts.map((value) => value)
  );
}
