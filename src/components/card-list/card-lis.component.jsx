import {Component} from "react";
import './card-list.style.css'
import Card from "./CardComponent.component";
class CardList extends Component{

    render() {
        const {monsters } = this.props;
        //console.log(this.props)
        return (
            <div className='card-list'>
                {monsters.map((monster) => {
                    const {name, id, email} = monster
                    return (
                        <div key={id} className='card-container' >
                            <Card
                                srcImg={`https://robohash.org/${id}?set=set2&size=180x180`}
                                nameMonster={`${name}`}
                                emailMonster={`${email}`}
                                altName={`name ${name}`}
                            />
                        </div>
                    )
                }) }
            </div>
        )
    }
}
export default CardList;