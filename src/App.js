import logo from './logo.svg';
import './App.css';

function App() {
  const links = ["Services", "Projects", "About"];

  return (
    <div className="App">
      <div id="header"><div>LogoBakery</div>
        <div id="links-flex" >
          {links.map((e) => {
            return <Links type={e} />
          })}
        </div>
        <div><button>contact</button></div>

      </div >
    </div >
  );
}
function Links(obj) {

  return <div>{obj.type}</div>
}

export default App;
