import logo from "./logo.svg";
import "./App.css";

//Exercises
import ParentComponent from './exercises/componentsCallback/ParentComponent';

import { CardContent } from './components/card/cardContent.js';

const CardTitle = ({ title }) => <span>{title}</span>;

const Card = ({ object }) => {
  return (
    <h3>
      <CardTitle title={object.title} />
      <CardContent initialValue={5}/>
    </h3>
  );
};

const App = () => {
  // const item = {
  //   title: "🚀",
  //   subtitle: "b",
  // };
  return (
    <div className="App">
      <ParentComponent />
      {/* <Card object={item} /> */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>lorem ipsum dolor sit amet, consectetur adip</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
