import Header from "./shared/Header";
import MoviesList from "./home/MoviesList";
import DetailedMoviesList from "./movies/DetailedMoviesList";
import FullMovie from "./movie/FullMovie";
import TheaterList from "./theaters/TheaterList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Client } from 'rollbar-react-native'
const rollbar = new Client('29853e81cef944b2addfdec3c59e0f31')
rollbar.log('Hello world!')

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <MoviesList />
        </Route>
        <Route exact path="/movies">
          <DetailedMoviesList />
        </Route>
        <Route exact path="/movies/:movieId">
          <FullMovie />
        </Route>
        <Route exact path="/theaters">
          <TheaterList />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
