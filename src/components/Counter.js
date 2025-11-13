import { useState } from 'react';
function Counter() {
    const [count, setCount]= useState(0);

    return (
        <center>
            <button onClick={() => setCount(prev => prev+2)}>Increment by 2</button>
            <p>Count: {count}</p>
            <button onClick={() => setCount(prev => prev-2)}>Decrement by 2</button>
        </center>
    );
}

// function Counter() {
//   const [count, setCount] = useState(0);

//   const incrementByTwo = () => {
//     setCount(prev => prev + 1);
//     setCount(prev => prev + 1);
//   };

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h1>Count: {count}</h1>
//       <button onClick={incrementByTwo}>Increment by 2</button>
//     </div>
//   );
// }


// class Counter extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             count: 0
//         };
//     }
//     increment = () => {
//         this.setState({ count: this.state.count + 1 });
//     }
//     decrement = () => {
//         this.setState({count : this.state.count -1});
//     }

//     render() {
//         return (
//             <center>
//                 <button onClick={this.increment}>Increment</button>
//                 <p>Count: {this.state.count}</p>
//                 <button onClick={this.decrement}>Decrement</button>
//             </center>
//         )
//     }
// }


export default Counter;