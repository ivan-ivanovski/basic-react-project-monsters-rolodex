import {Component} from "react";
class Card extends Component{
    render() {
        const {altName, nameMonster,emailMonster, srcImg} = this.props
        return(
            <div>
                <img alt={altName} src={srcImg}/>
                <h3>{nameMonster}</h3>
                <p>{emailMonster}</p>
            </div>
        )
    }
}
export default Card;