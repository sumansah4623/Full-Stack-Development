const initialState = {
  list: [], 
};

export const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_BOOK":
      return {
        ...state,
        list: [
          ...state.list,
          {
            ...action.payload,
            id: action.payload.id || Date.now(),
          },
        ],
      };

    case "UPDATE_BOOK":
      return {
        ...state,
        list: state.list.map((book) =>
          book.id === action.payload.id ? action.payload : book
        ),
      };

    case "DELETE_BOOK":
      return {
        ...state,
        list: state.list.filter((book) => book.id !== action.payload),
      };

    default:
      return state;
  }
};
