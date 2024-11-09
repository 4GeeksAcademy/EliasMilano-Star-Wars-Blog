import React, { useContext } from "react";
import { Context } from "../store/appContext";

const CardStarships = (props) => {

    const { store, actions } = useContext(Context);

    const url = (props.uid) == 2 ? ("https://m.gadzetomania.pl/cc-3f5e9be6cec2aa45edf491d723c12,750,470,0,0.jpg") :
    
        (props.uid) == 3 ? ("https://i.pinimg.com/originals/f4/d9/7a/f4d97afd77c37ead846e8e8c9dc58bd3.jpg") :

        (props.uid) == 17 ? ("https://th.bing.com/th/id/OIP.JcvxWswPAc1_N8lwZSwnYAHaFL?rs=1&pid=ImgDetMain") :

        (props.uid) == 32 ? ("https://i.pinimg.com/736x/9c/7a/02/9c7a02d817523f9d8461f03f61415efa--star-wars-tribute.jpg") : ("https://starwars-visualguide.com/assets/img/starships/" + props.uid + ".jpg")

        
    let randomColor = () => {
        const colorBase = "0123456789ABCDEF";
        let newColor = "#";
    
        for (let i=0; i<6; i++) {
            newColor = newColor + colorBase[Math.floor(Math.random()*colorBase.length)];
        }
        return newColor;
    }
    const color = randomColor();

    return (
            <div className="card p-0 rounded bg-dark text-white" style={{width: "15rem", borderColor: `${color}`, borderWidth: "3px"}}>
                <img src={url} 
                    className="card-img-top" alt={props.name} 
                    style={{height:"233px"}}
                />
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text"></p>
                    <div className="d-flex justify-content-between pb-0 mb-0">
                        <div></div>
                        <button type="button" className="btn btn-outline-warning"
                            onClick={() => actions.addToFavorites({
                                name: props.name})
                            }                        
                        ><i class="fa-regular fa-heart"/><i class="fa-solid fa-heart"/></button>
                    </div>
                </div>
            </div>
    )
}

export default CardStarships;















