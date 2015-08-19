import React from 'react';
import App from './components/App/App.react.js';
import _ from 'underscore';

window.startApp = () => {
    React.render(
        <App />,
        document.querySelector('[data-role="react-app"]')
    );
};
