import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Movie';
import Movie from './Movie';

class App extends Component {
  state ={
    greeting :'Hello'
}
componentDidMount(){
  setTimeout(()=>{1
    this.setState({
      movies: 
      [
      {
        title:"Matrix",
        poster:"https://www.google.co.kr/search?client=safari&sa=X&channel=ipad_bm&q=신과함께:+인과+연&stick=H4sIAAAAAAAAAOPgVeLVT9c3NEwzLkqJz0vL3sDIuIuJyy0zJzckMzk7tQQA4skjiSEAAAA&npsic=0&ved=0ahUKEwjAnNSEz8ncAhUIfd4KHRkoANwQ-BYIMQ"
      },
      
      {
        title:"Trix",
        poster:"https://www.google.co.kr/search?client=safari&sa=X&channel=ipad_bm&q=미션+임파서블+6&stick=H4sIAAAAAAAAAOPgVeLVT9c3NEw2Ny2vSjYr2cDIuIuJyy0zJzckMzk7tQQAeoiRvSEAAAA&npsic=0&ved=0ahUKEwjAnNSEz8ncAhUIfd4KHRkoANwQ-BYINA"
      },
      
      {
        title:"Recycle",
        poster:"https://www.google.co.kr/search?client=safari&sa=X&channel=ipad_bm&q=인크레더블+2&stick=H4sIAAAAAAAAAOPgVeLSz9U3iK-sqMop28DIuIuJyy0zJzckMzk7tQQAK7csmh4AAAA&npsic=0&ved=0ahUKEwjAnNSEz8ncAhUIfd4KHRkoANwQ-BYINw"
      },
      
      
      {
        title:"Rle",
        poster:"https://www.google.co.kr/search?client=safari&sa=X&channel=ipad_bm&q=극장판+헬로카봇+:+백악기+시대&stick=H4sIAAAAAAAAAOPgVeLVT9c3NEwzT0rJLUgp38DIuIuJyy0zJzckMzk7tQQAoRjeECEAAAA&npsic=0&ved=0ahUKEwjAnNSEz8ncAhUIfd4KHRkoANwQ-BYIOg"
      },
     { 
      title:"Trans",
      poster:"https://www.google.co.kr/search?client=safari&sa=X&channel=ipad_bm&q=극장판+헬로카봇+:+백악기+시대&stick=H4sIAAAAAAAAAOPgVeLVT9c3NEwzT0rJLUgp38DIuIuJyy0zJzckMzk7tQQAoRjeECEAAAA&npsic=0&ved=0ahUKEwjAnNSEz8ncAhUIfd4KHRkoANwQ-BYIOg"
    }
  ]
    })
  },5000)
}



_renderMovies=()=>{
  const movies =this.state.movies.map((movies, index)=>{
    return <Movie title={movies.title} poster={movies.poster} key={index}/>
   })
   return movies
}


render() {
    return (
      <div className="App">
      {

        this.state.movies?this._renderMovies():'Loading'
      }

      </div>
    );
  }
}

export default App;
