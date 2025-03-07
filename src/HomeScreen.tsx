// src/HomeScreen.tsx
import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import { useCart } from './CartContext';
import ProductItem from './ProductItem';
import { HomeScreenNavigationProp } from './types';
import Toast from 'react-native-simple-toast';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import Icon

interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
}

const products = [
  {
    id: 1,
    name: 'Mango Bravo',
    price: 1685.00,
    image: require('../assets/Mango_bravo.png'),
  },
  {
    id: 2,
    name: 'Almond Choco Sans Rival',
    price: 995.00,
    image: require('../assets/Almond_Choco_Sans_Rival.png'),
  },
  {
    id: 3,
    name: 'Black Velvet',
    price: 795.00,
    image: require('../assets/Black_Velvet.png'),
  },
  {
    id: 4,
    name: 'Chocolate Obsession',
    price: 4000.00,
    image: require('../assets/Chocolate_Obsession.png'),
  },
  {
    id: 5,
    name: 'Choco Overload',
    price: 1285.00,
    image: require('../assets/Choco_Overload.png'),
  },
];

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const { dispatch } = useCart();

  const handleAddToCart = (product: { id: number; name: string; price: number }) => {
    dispatch({ type: 'ADD_TO_CART', product });
    Toast.show(`${product.name} has been added to your cart.`, Toast.SHORT);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.productContainer}>
            <Image source={item.image} style={styles.productImage} />
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>Php {item.price}</Text>
            <TouchableOpacity
              style={styles.addToCartButton}
              onPress={() => handleAddToCart(item)}
            >
              <Text style={styles.addToCartButtonText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      <TouchableOpacity
        style={styles.cartButtonContainer}
        onPress={() => navigation.navigate('Cart')}
      >
        <Icon name="shopping-cart" size={25} style={styles.cartButtonIcon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  productContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  productImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 8,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 14,
    color: '#888',
    marginBottom: 8,
  },
  addToCartButton: {
    backgroundColor: '#4CAF50', // Changed to green
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
  },
  addToCartButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cartButtonContainer: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#4CAF50', // Changed to green
    borderRadius: 30,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cartButtonIcon: {
    color: '#fff',
  },
});

export default HomeScreen;