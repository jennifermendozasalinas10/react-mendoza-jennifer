import 'bootstrap/dist/css/bootstrap.min.css';
import Contador from './components/Contador';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './Navbar/Navbar';
function App() {
  return (
    
<div className="...">
<Navbar/>
<ItemListContainer greeting={"Hola Solange"}/>
<Contador initial={1} stock={10}/>
</div>

  );
}

export default App;
