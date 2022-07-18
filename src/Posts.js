import Post from "./Post"
import TopoPost from "./TopoPost";
import ConteudoPost from "./ConteudoPost";

let allPosts = [
    { 
        name: "ellipsis-horizontal",
        imgUrlProf: "assets/img/meowed.svg",
        User: "meowed",
        imgUrl: "assets/img/gato-telefone.svg", 
        userImg: "assets/img/respondeai.svg", 
        userName: "respondeai", 
        likes: "outras 101.523 pessoas"
    },
    {
        name: "ellipsis-horizontal",
        imgUrlProf: "assets/img/barked.svg",
        User: "barked", 
        imgUrl: "assets/img/dog.svg", 
        userImg: "assets/img/adorable_animals.svg", 
        userName: "adorable_animals", 
        likes: "outras 99.159 pessoas",
    }
];

export default function Posts (){

    return (
        <div class="posts">
            {allPosts.map((post) => <Post {...post} />)}
        </div>
    )
}