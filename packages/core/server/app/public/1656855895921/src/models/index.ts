
    export default {

      namespace: 'app',
      state: {
        titleColor: 'black'
      },
      reducers: {
        changeTitle(state, { payload: { titleColor } }) {
          return {...state, titleColor}
        }
      }
    }
  