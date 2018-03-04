'use strict';

import React from 'react';

import Feed from './Components/Feed';
import {registerScreens, registerScreenVisibilityListener} from "./Components/index";
import {Navigation} from 'react-native-navigation';

registerScreens();
registerScreenVisibilityListener();

// this will start our app
Navigation.startSingleScreenApp({
    screen: {
        screen: 'Feed',
        title: 'Feed',
        navigatorStyle: {},
        navigatorButtons: {},
    },
});