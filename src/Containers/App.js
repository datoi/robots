import {Component} from "react";
import CardList from "../Components/CardList";
import './App.css'
import SearchBox from "../Components/SearchBox";
import Scroll from "../Components/Scroll";

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({robots: users}))


    }

    OnSearchChange = (event) => {
        this.setState({searchField: event.target.value})
    }


    render() {
        const {robots, searchField} = this.state
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })

        // this is same as if() else{}
        return robots.length === 0 ?
             <h1>Loading</h1> :

            (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                        <SearchBox searchChange={this.OnSearchChange}/>
                    <Scroll>
                        <CardList robots={filteredRobots}/>
                    </Scroll>
                </div>
            )



    }
}

export default App