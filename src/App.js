import './App.css';
import data from './data';
import Cards from './Components/Cards';


function App() {
  
  return (
    <div>
      {data.map((elem,index) => {
        return (
          <Cards elem={data[index]}/>
        )
      })}
    </div>
  );
}

export default App;
