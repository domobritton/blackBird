import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from '../../ui/App';
import { SignIn } from '../../ui/components/SignIn';

export const renderRoutes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={App} />
                <Route exact path='/booking/signIn' component={SignIn} />
            </Switch>
        </BrowserRouter>
    );
};
