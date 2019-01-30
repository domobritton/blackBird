import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import './index.css';
import 'normalize.css';
import { renderRoutes } from './routes';

Meteor.startup(() => {
    render(renderRoutes(), document.getElementById('app'));
});