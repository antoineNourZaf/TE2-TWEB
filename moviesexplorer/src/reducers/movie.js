/* **********************
 * Inspiré par la react-pwa sur le repo tweb, sauf qu'à la place de 
 * sélectionner des news, on choisit des films
 ***********************/

import axios from 'axios';

const initialState = {
    items: [],
    loading: false,
}

const START_LOADING = 'START_LOADING';
const ITEMS_LOADED = 'ITEMS_LOADED';

export default function movie(state = initialState, action) {
    switch (action.type) {
        case START_LOADING:
            return {
                ...state,
                loading: true,
            }
        
        case ITEMS_LOADED:
            return {
                ...state,
                items: action.items,
                loading: false,
            }   
            
        default:
            return state;    
    }
}

export const loadItems = () => {
    return async (dispatch, getState) => {
        const state = getState();
        console.log(state);
        if (state.movie.items.length > 0) {
          return;
        }
    
    
        return axios.get('https://api.themoviedb.org/3/movie/popular?page=1&api_key=f1be4bafe6f7cb0cb84f5948c5b75497')
          .then(response => {
            dispatch({ type: ITEMS_LOADED, items: response.data.results})
          });
      }
    }