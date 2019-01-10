/**
 * Inspiré de la progressive app de Paul, mais adapté pour les films
 */
import React, { Component } from 'react';
import { connect } from 'react-redux'
import {loadUpcomingItems} from '../reducers/movie';


class UpcomingMovies extends Component {
  
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(loadUpcomingItems());
    }

    componentWillUpdate() {
        const { dispatch } = this.props;
        dispatch(loadUpcomingItems());
    } 
    
    


  render() {
    const {items, loading } = this.props;
    if (loading) {
      return 'Loading...'
    }

    return (
        <div>
        {items.map(item => (
          <div className="UpcomingMoviesItem" key={item.id}>
          <h3>{item.title}</h3>
          vote: {item.vote_average} 
          
            <div className="UpcomingMoviesItem-secondary">
              
            </div>
            <img src={'https://image.tmdb.org/t/p/w500/'+ item.poster_path} alt={item.title} height={200} width='auto'/>
            <br/>
              {item.overview}
            <br/> 
            <i>date de sortie : </i> {item.release_date}
          </div>
        ))}
      </div>
    );
  }
}

export default connect(
  state => ({
    items: state.movie.items,
    loading: state.movie.loading,
  }),
)(UpcomingMovies);