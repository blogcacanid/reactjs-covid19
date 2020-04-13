import React,{Component} from 'react';
import Sidebar from './components/Sidebar'
import Indonesia from './components/Indonesia'
import Dunia from './components/Dunia'
import { BrowserRouter as Router,Route,Link } from "react-router-dom";
import $ from 'jquery';
window.jQuery = $;
window.$ = $;
global.jQuery = $;

class App extends Component {
    render(){
      return(
        <Router>
            <div className="wrapper d-flex align-items-stretch">
            <Sidebar />
                <Route path="/" exact component={Indonesia}/>
                <Route path="/indonesia"  component={Indonesia}/>
                <Route path="/Dunia"  component={Dunia}/>
            </div>
        </Router>
      )
    }
}

export default App;

