import TopoPost from "./TopoPost";
import ConteudoPost from "./ConteudoPost";
import Posts from "./Posts";


export default function Post(props) {
  return (
    <>
    <div class="post">
    <TopoPost
      name= {props.name}
      imgUrl= {props.imgUrlProf}
      User= {props.User}
    />
    <ConteudoPost 
    imgUrl={props.imgUrl} 
    userImg={props.userImg} 
    userName={props.userName} 
    likes={props.likes}/>
    </div>
    </>
  )
}
