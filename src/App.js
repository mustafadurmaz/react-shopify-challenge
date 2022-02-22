import "./App.css";
import MovieList from "./components/MovieList";
import SearchMovie from "./components/SearchMovie";
import { MovieProvider } from "./store/MovieStore";
import "bootstrap/dist/css/bootstrap.min.css";
import Nominate from "./components/Nominate";

function App() {
  return (
    <div>
      <MovieProvider>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <SearchMovie />
              <MovieList />
            </div>
            <div className="col-md-6 bg-secondary">
              <Nominate />
            </div>
          </div>
        </div>
      </MovieProvider>
    </div>
  );
}

export default App;
