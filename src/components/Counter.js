import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';
// import { Component } from 'react';
// import { connect } from 'react-redux';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  const toggle = useSelector(state => state.showCounter) 

   const toggleCounterHandler = () => {
    dispatch({type:'TOGGLE'})
  };

 const handleIncrement = () => {
    dispatch({type:'INCR'})
  }

  const handleIncrementByFive = () => {
    dispatch({type:'FIVE',value:5})
  }

 const handleDecrement = () => {
    dispatch({type:'DECR'})
  }

  return (
          <main className={classes.counter}>
            <h1>Redux Counter</h1>
            {toggle && <div className={classes.value}>{counter}</div>}
            <div>
              <button onClick={handleIncrement}>Increment</button>
              <button onClick={handleIncrementByFive}>Increment by 5</button>
              <button onClick={handleDecrement}>Decrement</button>
            </div>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
          </main>
        );
}

export default Counter;

// class Counter extends Component{
//   toggleCounterHandler = () => {
//   };

//   handleIncrement = () => {
//     this.props.increment();
//   }

//    handleDecrement = () => {
//     this.props.decrement();
//   }
//   render(){
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.handleIncrement.bind(this)}>Increment</button>
//           <button onClick={this.handleDecrement.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler.bind(this)}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return{
//     counter : state.counter,
//   }
// }

// const mapDispatchToProps = dispatch =>{
//   return {
//     increment:()=>dispatch({type:'INCR'}),
//     decrement:()=>dispatch({type:'DECR'})
//   }
// }

// export default connect(mapStateToProps,mapDispatchToProps) (Counter);
