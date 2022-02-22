import React, { useState, useContext, useEffect } from "react";
import MovieContext from "../store/MovieStore";
import axios from "axios";
import { FormControl, Form, Card } from "react-bootstrap";
import "./SearchMovie.css";

const SearchMovie = ({ search }) => {
  const [searchValue, setSearchValue] = useState("");
  const { state, dispatch } = useContext(MovieContext);

  useEffect(() => {
    axios
      .get(`https://www.omdbapi.com/?s=${searchValue}&apikey=5fa70004`)
      .then((response) => {
        dispatch({ type: "movie_list", payload: response.data });
      });
  }, [searchValue]);

  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div>
      <div className="row">
        <div className="col-md-6">
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search movie titles"
              className="me-2"
              aria-label="Search"
              value={searchValue}
              onChange={handleSearchInputChanges}
            />
          </Form>
          {searchValue && (
            <span className="text-dark">
              Movie results for:{" "}
              <span className="fw-bold text-secondary"> "{searchValue}"</span>
            </span>
          )}
          {!state.movies.Search && searchValue && (
            <Card border="danger" style={{ width: "22rem" }}>
              <Card.Body>
                <Card.Text>
                Too many results.
                <br/>
                Please adjust your search.
                </Card.Text>
              </Card.Body>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchMovie;
