import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, increase , toggle} from "../store";
import classes from "./Counter.module.css";



const Counter = () => {
  const counter = useSelector((state) => state.counter.counter); // Seleciona o valor do contador no estado global
  const dispatch = useDispatch();
  const show = useSelector((state) => state.counter.showCounter);

  const incrementHandler = () => {
    dispatch(increment());
  };

  const increaseHandler = () => {
    dispatch(increase(5));
  }

  const decrementHandler = () => {
    dispatch(decrement());
  };

  const toggleCounterHandler = () => { 
    dispatch(toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler.bind(this)}>Increment</button>
        <button onClick={increaseHandler.bind(this)}>Increase by 5</button>
        <button onClick={decrementHandler.bind(this)}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};


export default Counter;

// class Counter extends Component {
//   incrementHandler() {
//     this.props.increment();
//   }

//   decrementHandler() {
//     this.props.decrement();
//   }

//   toggleCounterHandler() {}

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return{
//     counter: state.counter.counter, //referencia do estado
//   };
// }

// const mapDispatchToProps =  {
//   increment,
//   decrement,
// };

// export default connect(mapStateToProps, mapDispatchToProps) (Counter);

