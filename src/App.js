import './App.css';
import PersonCard from './components/personcard';

const App = () => { //Con función de flecha function = App()
  return (
    <div className="personal-card">
        <PersonCard
        lastName = "Doe" 
        firstName="Jane"
        age ={45} // valor numérico escribir entre llaves
        hairColor="Black"
        />
        <PersonCard
        lastName = "Smith" 
        firstName="John"
        age = {88}
        hairColor="Brown"
        />
        <PersonCard
        lastName = "Fillmore" 
        firstName= "Millard"
        age = {50}
        hairColor="Brown"
        />
        <PersonCard
        lastName = "Smith" 
        firstName="Maria"
        age = {62}
        hairColor="Brown"
        />
    </div>
  );
}
export default App;