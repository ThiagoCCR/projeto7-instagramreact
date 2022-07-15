export default function Story(props){

    return (
        <div class="story">
                <div class="imagem">
                    <img src={props.Url} />
                </div>
                <div class="usuario">
                    {props.User}
                </div>
        </div>
    )

}