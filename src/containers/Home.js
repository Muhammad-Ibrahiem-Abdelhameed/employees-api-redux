import React from 'react';
import NavbarBootstrap from "./Navbar/Navbar";
import TableEmployees from "../components/TableEmployees/TableEmployees";
import CreateEmployee from '../components/CreateEmployee/CreateElements';
import { Switch, Route} from 'react-router-dom';

const Home = () => (
    <div>
        <NavbarBootstrap/>
        <div className="container">
            <Switch>
                <Route exact path="/" component={TableEmployees}/>
                <Route path="/create-new" component={CreateEmployee} />
                <Route path="/edit" />
            </Switch>
        </div>
    </div>

);

export default Home;