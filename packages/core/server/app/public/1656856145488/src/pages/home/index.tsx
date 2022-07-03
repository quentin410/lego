
    import React from 'react';
    import { connect } from 'dva'

    
    const mapStateToProps = state => {
      return {
        titleColor: state.app.titleColor
      }
    }
    const App = (props) => {

      const handleChangeTitleColor = ()=> {
        props.dispatch({
          type: 'app/changeTitleColor',
          payload: {
            titleColor: 'red'
          }
        })
      }
      
      return <div className='app-wrapper'>
        <div className='title' style={props.titleColor} onClick={handleChangeTitleColor}>{props.title}</div>
      </div>
    }
    export default connect(mapStateToProps)(App)
  