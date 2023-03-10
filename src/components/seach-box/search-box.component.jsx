import {Component} from "react";
import './search-box.style.css'
class SearchBox extends Component{
    render() {
        const {className, placeholder} = this.props
        const {onChangeHandler} = this.props
        return (
            <input
                className={`search ${className}`}
                type="search"
                placeholder={placeholder}
                onChange={onChangeHandler}/>
        )
    }
}
export default SearchBox