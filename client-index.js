import React from 'react';
import { hydrate } from 'react-dom';
import Menu from './src/components/Menu';

window.React = React;
alert('bundle loaded');
hydrate(<Menu recipes={__DATA__} />, document.getElementById('react-container'));
alert('hydrated');