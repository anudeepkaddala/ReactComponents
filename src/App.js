import Counter from './components/Counter';
import './App.css';
import Welcome from './components/Welcome'
import Parent from './components/Parent';
import Factorial from './components/Factorial';
import Users from './components/Users';
import Greeting from './components/Greeting';
import LikeButton from './components/LikeButton';
import ShowHide from './components/ShowHide';
import ToDo from './components/ToDo';
import LoginForm from './components/LoginForm';
import UserInfoGit from './components/UserInfoGit';
import FetchingData from './components/FetchingData';
import Card from './components/Card';
import Parents from './components/Parents';
import CounterReducer from './components/CounterReducer';
import TaskReducer from './components/TaskReducer';
import Score from './components/Score';

function App() {
  let isLoggedIn =false;

  return (
    <div>
      {/* <LoginForm /> */}
      {/* <Counter />
      {isLoggedIn && <Welcome />}
      <br />
      <br />
      <Greeting username="Anudeep" /> 
      <ShowHide />
      <ToDo />
      <Greeting username="Karthik" />
      <LikeButton />
      <Parent />
      <Factorial />
      <Users/> */}
      {/* <UserInfoGit /> */}
      {/* <FetchingData /> */}
      {/* <Card>
      <h2>Title</h2>
      <p>Some content</p>
      </Card> */}
      {/* <Parents /> */}
      {/* <CounterReducer /> */}
      <TaskReducer />
      <Score />

    </div>
  );
}

export default App;
