import * as actions from './actionTypes';

export const bugAdded = description => ({
    type: actions.BUG_ADDED,
    payload: {
      description,
    }
});

export const bugRemoved = description => ({
  type: actions.BUG_REMOVED,
  payload: {
    id: 1,
    description,
  }
})

export const bugResolved = id => ({
  type: actions.BUG_RESOLVED,
  payload: {
    id,
  }
})

// export function bugAdded(description) {
//   return {
//     type: actions.BUG_ADDED,
//     payload: {
//       description: "Bug1"
//     }
//   }
// }