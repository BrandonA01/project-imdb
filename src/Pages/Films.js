import React from 'react';

class About extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      films: [],
      isLoaded: false,
      page: 0
    };
    this.handle = this.handle.bind(this);
  }
  nextPage(){
    if(this.state.page < 99){
      const pagenum = this.state.page + 1;
    this.setState({
      page: this.state.page + 1
    });
    this.getFilms(pagenum);
    }
  }
  lastPage(){
    if(this.state.page > 0){
      const pagenum = this.state.page - 1;
    this.setState({
      page: this.state.page - 1
    });
    this.getFilms(pagenum);
    }
  }
  componentDidMount(){
    this.getFilms(this.state.page);
  };
  handle = () => {
    console.log('this is:', this);
  };
  createTable(){
    if(!this.state.isLoaded){
      return(
        <div>Loading...</div>
      )
    }
    return(
      this.state.films.map(film => {
        return(
          <tbody>
            <tr>
              <td>{film.title}</td>
              <td>{film.description}</td>
              <td>{film.star_rating}</td>
            </tr>
          </tbody>
        )
      })
    )
  };
  getFilms(page){
    fetch(`http://localhost:8080/Home/allFilms?page=${page}`, {method:'GET'})
    .then(res => res.json())
    .then(films => {
      this.state.films = films.content;
      this.setState({isLoaded: true});
    })
  }
    render(){
      return(
        <div>
          <div id="FilmsHeader">
              <h1>Films</h1>
          </div>
          <table id="Films">
            <tbody>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Rating</th>
              </tr>
            </tbody>
            {this.createTable()}
          </table>
          <button onClick={() => this.lastPage(0)}>Back</button>
          <button onClick={() => this.nextPage(1)}>Next</button>
        </div>
      );
    }
  }

  export default About;