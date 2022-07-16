import ShowIonIcon from "./ShowIonIcon"


let lista = [
    <ShowIonIcon name="home"/>,
    <ShowIonIcon name="search-outline"/>,
    <ShowIonIcon name="add-circle-outline"/>,
    <ShowIonIcon name="heart-outline"/>,
    <ShowIonIcon name="person-outline"/>
];


export default function FundoMobile(){

return (
    <div class="fundo-mobile">
        {lista.map((icon)=>icon)}
    </div>
    )
}