import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Pages/HomePage/Home'
import Footer from './Components/Pages/Footer/Footer'
import Services from './Components/Pages/Services/Services';
import Products from './Components/Pages/Products/Products';
import SignUp from './Components/Pages/SignUp/SignUp';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/Services" component={Services}/>
        <Route path="/products" component={Products}/>
        <Route path="/sign-up" component={SignUp}/>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
