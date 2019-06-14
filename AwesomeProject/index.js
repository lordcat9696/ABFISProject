/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import AppMain from './AppMain';
import {name as appName} from './app.json';
import { Provider as PaperProvider } from 'react-native-paper';
export default function Main() {
    return (
      <PaperProvider>
        <AppMain />
      </PaperProvider>
    );
  }
AppRegistry.registerComponent(appName, () => Main);
