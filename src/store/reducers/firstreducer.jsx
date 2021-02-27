import {GET_IMAGES,SORT_VIWES,SORT_SIZE,LOAD_IMAGES,CLEAR_IMAGES} from "./actionTypes"
import axios from "axios"

let initState = {
    loading: true,
  };
  let newState = [];
  const firstreducer = (state = {}, action) => {
    switch (action.type) {
    case GET_IMAGES:
        newState = [
            // ...state,
            ...action.data,
      ];
          return newState;
      case LOAD_IMAGES:
          console.log(action.data)
        newState = [
          ...state,
          ...action.data,
    ];
        return newState;
      case SORT_SIZE:
          console.log(action.data)
          let sortData=action.data.sort((a, b) => a.imageSize < b.imageSize ? 1 : -1)
          console.log(sortData)
        newState = [
            // ...state,
            ...sortData
        ];
        return newState
        case SORT_VIWES:
            console.log(action.data)
            let sortViewData=action.data.sort((a, b) => a.views < b.views ? 1 : -1)
            console.log(sortViewData)
          newState = [
              // ...state,
              ...sortViewData
          ];
          return newState

        case CLEAR_IMAGES:
            newState=[]
            return newState
      default:
        return newState;
    }
  };
  
  export default firstreducer;
