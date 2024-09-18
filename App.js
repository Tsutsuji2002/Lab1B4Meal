import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerNavigator } from './navigation/DrawerNavigator';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { useOrientation } from './hooks/useOrientation';

export default function App() {
  const orientation = useOrientation();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <DrawerNavigator orientation={orientation} />
      </NavigationContainer>
    </Provider>
  );
}