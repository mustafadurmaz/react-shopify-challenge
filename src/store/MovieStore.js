import React, { createContext, useReducer } from "react";


const MovieContext = createContext();

const initialState = {
  loading: true,
  error: "",
  movies: []
};

const reducer = (state, action) => {
  switch (action.type) {
    case "movie_list":
      return {
        loading: false,
        movies: action.payload,
        error: ""
      };
    case "user_add":
      return {
        ...state,
        post: [...state.post, action.payload]
      };

    case "user_delete":
      return {
        ...state,
        post: state.post.filter((user) => {
          return user.id !== action.payload;
        })
      };
   

    default:
      return state;
  }
};

export const MovieProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <MovieContext.Provider value={{ state, dispatch }}>
      {children}
      
    </MovieContext.Provider>
  );
};

export default MovieContext;
