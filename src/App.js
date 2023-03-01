import {Component} from 'react';
import CardList from "./components/card-list/card-lis.component";
import SearchBox from "./components/seach-box/search-box.component";
import "./App.css";

class App extends Component {
    constructor() {
        super();

        this.state = {
            monsters: [],
            search: '',
        };
    }

    componentDidMount() {
        //for API request
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((users) => this.setState(() => {
                return {monsters: users}
            }))
    }

    onSearchChange = (eve) => {
        const search = eve.target.value.toLowerCase();
        this.setState(
            () => {
                return {search}
            }
        )
    }

    render() {
        console.log('Render')
        const { monsters, search } = this.state;
        const { onSearchChange } = this;


        const filterMonsters = monsters.filter((monster) => {
            return monster.name.toLowerCase().includes(search);
        })

        return (
            <div className="App">
                <h1>Monster Rolodex</h1>
                <SearchBox
                    className="search-box-for-monsters"
                    onChangeHandler={onSearchChange}
                    placeholder="Search monsters"
                />
                <CardList monsters={filterMonsters} />
            </div>
        );
    }
}

export default App;
