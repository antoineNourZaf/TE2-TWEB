import React, { Component } from 'react';
import { connect } from 'react-redux'
import { loadItems } from '../reducers/movie';


class FilmGrid extends Component {
  
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(loadItems());
    }
  


  render() {
    const {items, loading } = this.props;
    if (loading) {
      return 'Loading...'
    }

    return (
      <div>
        {items.map(item => (
          <div className="FilmGridItem" key={item.id}>
            <img src={'https://image.tmdb.org/t/p/w500/'+ item.poster_path} alt={item.title} height={200} width='auto'/>
              <h3>{item.title}</h3>
            <div className="FilmGridItem-secondary">
              vote: {item.vote_average} 
            </div>
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
)(FilmGrid);