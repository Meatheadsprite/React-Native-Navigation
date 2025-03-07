import React from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import CartScreen from './CartScreen';
import CheckoutScreen from './CheckoutScreen';

const Stack = createStackNavigator();

// Custom Logo Component
const LogoTitle = () => {
  return (
    <View style={styles.logoContainer}>
      <Image
        source={require('../assets/logo.png')} // Update the path to your logo
        style={styles.logo} // Larger logo size
        resizeMode="contain"
      />
    </View>
  );
};

// Custom Header Right Component
const HeaderRight = ({ title }) => {
  return (
    <View style={styles.headerRight}>
      <Text style={styles.headerRightText}>{title}</Text>
    </View>
  );
};

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="KakaiBake">
      <Stack.Screen
        name="KakaiBake"
        component={HomeScreen}
        options={{
          headerTitle: props => <LogoTitle {...props} />,
          headerTitleAlign: 'center', // Center the header title
          headerRight: () => null, // No text on the HomeScreen header right
        }}
      />
      <Stack.Screen
        name="Cart"
        component={CartScreen}
        options={{
          headerTitle: props => <LogoTitle {...props} />,
          headerTitleAlign: 'center', // Center the header title
          headerRight: () => <HeaderRight title="Cart" />, // "Cart" text in the upper right
        }}
      />
      <Stack.Screen
        name="Checkout"
        component={CheckoutScreen}
        options={{
          headerTitle: props => <LogoTitle {...props} />,
          headerTitleAlign: 'center', // Center the header title
          headerRight: () => <HeaderRight title="Check-out" />, // "Checkout" text in the upper right
        }}
      />
    </Stack.Navigator>
  );
};

// Styles
const styles = StyleSheet.create({
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 250, // Increased width for a larger logo
    height: 60, // Increased height for a larger logo
  },
  headerRight: {
    marginRight: 15, // Add some spacing from the right edge
    minWidth: 60, // Ensure enough space for the text
    alignItems: 'flex-end', // Align text to the right
  },
  headerRightText: {
    fontSize: 16, // Adjust the font size
    fontWeight: 'bold', // Make the text bold
    textAlign: 'right', // Align text to the right
  },
});

export default AppNavigator;