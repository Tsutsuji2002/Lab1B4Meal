import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import Colors from '../constants/Colors';

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
};

const MealsStack = createStackNavigator();

function MealsStackNavigator() {
  return (
    <MealsStack.Navigator screenOptions={defaultStackNavOptions}>
      <MealsStack.Screen 
        name="Categories" 
        component={CategoriesScreen} 
        options={{ title: 'Danh mục món ăn' }}
      />
      <MealsStack.Screen 
        name="CategoryMeals" 
        component={CategoryMealsScreen} 
      />
      <MealsStack.Screen 
        name="MealDetail" 
        component={MealDetailScreen} 
      />
    </MealsStack.Navigator>
  );
}

const FavStack = createStackNavigator();

function FavoritesStackNavigator() {
  return (
    <FavStack.Navigator screenOptions={defaultStackNavOptions}>
      <FavStack.Screen 
        name="Favorites" 
        component={FavoritesScreen} 
        options={{ title: 'Món ăn ưa thích' }}
      />
      <FavStack.Screen 
        name="MealDetail" 
        component={MealDetailScreen} 
      />
    </FavStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export function MealsNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Meals') {
            iconName = focused ? 'restaurant' : 'restaurant-outline';
          } else if (route.name === 'Favorites') {
            iconName = focused ? 'star' : 'star-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: Colors.accentColor,
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Món ăn" component={MealsStackNavigator} options={{ headerShown: false }} />
      <Tab.Screen name="Ưa thích" component={FavoritesStackNavigator} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}