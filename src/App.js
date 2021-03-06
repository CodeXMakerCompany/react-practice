import logo from "./logo.svg";
import "./App.css";

//Exercises
import ParentComponent from "./exercises/componentsCallback/ParentComponent";

import { CardContent } from "./components/card/cardContent.js";
import ContextExercise from "./exercises/useContext";

import ReactListButton from "./interviewExercises/reactListButton";
import ReactFileUpload from "./interviewExercises/reactFileUpload";

const CardTitle = ({ title }) => <span>{title}</span>;

const Card = ({ object }) => {
  return (
    <h3>
      <CardTitle title={object.title} />
      <CardContent initialValue={5} />
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
      <hr />
      <ReactFileUpload />
      <hr />
      <ParentComponent />
      <hr />
      <hr />
      <ContextExercise />
      <hr />
      <ReactListButton />
      <hr />
      {/* <Card object={item} /> */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
};

export default App;
