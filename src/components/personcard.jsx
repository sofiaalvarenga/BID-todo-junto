import { Component } from "react";

class PersonCard extends Component {
    constructor(props){
        super(props);
        this.state ={
            age: this.props.age,
        }
    }
    
    render() { 
        const {lastName, firstName, hairColor}= this.props;
        const increaseAge = ()=>{
            this.setState({ age: this.state.age + 1});
        }
        const {age} = this.state;

        return (
        <div className="person">
            <h1>{lastName}, {firstName}</h1>
            <p>Age: {age}</p>
            <p>Hair color: {hairColor}</p>
            <button onClick={increaseAge}>Birthday button for {firstName} {lastName}</button>
        </div>
        );
    }
}
export default PersonCard;