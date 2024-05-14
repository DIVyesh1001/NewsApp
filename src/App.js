import './App.css';
import Navbar from './components/Navbar';
import News from  './components/News'
function App() {
  return (
    <>
    <Navbar titleName="My Website"/>
    <News pageSize="5"/>
    </>
  );
}

export default App;
