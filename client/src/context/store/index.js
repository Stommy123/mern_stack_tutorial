import models from "./models";

export const initialState = Object.keys(models).reduce(
  (acc, model) => ({
    ...acc,
    [model]: models[model].initialState
  }),
  Object()
);

export const rootReducer = (state, { type: { model, action }, payload }) => ({
  ...state,
  [model]: { ...models[model].reducers[action](state[model], payload) }
});

export const rematchify = dispatch =>
  Object.keys(models).reduce(
    (acc, model) => ({
      ...acc,
      [model]: Object.keys(models[model].reducers).reduce(
        (acc, action) => ({
          ...acc,
          [action]: payload => dispatch({ type: { model, action }, payload })
        }),
        Object()
      )
    }),
    Object()
  );
