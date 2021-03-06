import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom'

/* add scss and bootstrap */
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

/* redux stuff */
import { Provider } from 'react-redux';
import store from './redux/store';
import { CheckAuthentication } from './utils/CheckAuthentication';
import GuestRoute from './utils/GuestRoute';

/* main components */
import Home from './layout/home/index';
import Login from './layout/Auth/Login';
import Register from './layout/Auth/Register';


const App: React.FC = () => {
        useEffect(() => {
        CheckAuthentication();
    }, []);

    return (
        <div className='App'>
            <Provider store={store}>
                <Router>
                    <Switch>
                        <GuestRoute exact  path='/' component={Home} />
                        <GuestRoute exact  path='/login' component={Login} />
                        <GuestRoute exact  path='/register' component={Register} />
                    </Switch>
                </Router>
            </Provider>
        </div>
    )
}
export default App;
