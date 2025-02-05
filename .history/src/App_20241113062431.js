
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { MovieCard } from './components/MovieCard/MovieCard';

function App() {

  const [movies, setMovies] = useState([]);

  const getMovies = async() =>{
try {
const {data} = await axios.get('51def6820408da94d7df01a357112de5') 
setMovies

}
catch(error){
  console.log(error)
  }}



useEffect(()=>{
  getMovies()
},[])



  return (
    <div className="App">
      <h1>Movies</h1>
      <MovieCard/>
    </div>
  );
}

export default App;
