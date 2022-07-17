export default function ShowIonIcon(props){
    return (
<ion-icon onClick ={props.onClick} class={`md hydrated ${props.color}`} name={props.name}></ion-icon>
  )
  }