import React from 'react'
import { Switch, Route } from 'react-router-dom'
import FilmGrid from '../views/FilmGrid'
import UpcomingMovies from '../views/UpcomingMovies'
 
const Content = () =>{
  return(
    <Switch>
      <Route exact path="/popular" component={FilmGrid}/>
      <Route path="/upcoming" component={UpcomingMovies}/>
    </Switch>
  )
}
 
export default Content