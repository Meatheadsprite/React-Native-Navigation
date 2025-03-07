// src/types.ts
import { StackNavigationProp } from '@react-navigation/stack';

// Define the types for your navigation stack
export type RootStackParamList = {
  KakaiBake: undefined;
  Cart: undefined;
  Checkout: undefined;
};

// Define navigation prop types for each screen
export type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'KakaiBake'>;
export type CartScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Cart'>;
export type CheckoutScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Checkout'>;