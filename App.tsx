import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; // Import NavigationContainer
import { CartProvider } from './src/CartContext'; // Import CartProvider
import AppNavigator from './src/AppNavigator'; // Import AppNavigator

const App = () => {
  return (
    <CartProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </CartProvider>
  );
};

export default App;