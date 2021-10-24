export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "delete":
      return [...state.filter((todo) => todo !== action.payload)];
    case "toggle":
      return [
        ...state.map((todo) => {
          if (todo === action.payload) {
            todo.done = true;
            console.log("Entra If:", todo);
          }
          return todo;
        }),
      ];

    default:
      return state;
  }
};
