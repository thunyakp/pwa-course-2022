import './App.css';

function Userlist () {
  return (
    <div className="userlist">
    </div>
  )
}

function Chat () {
  return (
    <div className="chat">
    </div>
  )
}

function Inputbox () {
  return (
    <div className="inputbox">
    </div>
  )
}

function App() {
  return (
    <div className="App col-2 col-4 col-1">
      <Userlist/>
      <Chat/>
      <Inputbox/>
    </div>
  );
}

export default App;
