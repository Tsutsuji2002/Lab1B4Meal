import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import { MealsNavigator } from './MealsNavigator';
import FiltersScreen from '../screens/FiltersScreen';
import Colors from '../constants/Colors';

const Drawer = createDrawerNavigator();

export function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.primaryColor,
        },
        headerTintColor: 'white',
        drawerActiveTintColor: Colors.accentColor,
      }}
    >
      <Drawer.Screen 
        name="MealsCategories" 
        component={MealsNavigator} 
        options={{
          title: 'Món ăn',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="restaurant" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen 
        name="Filters" 
        component={FiltersScreen} 
        options={{
          title: 'Lọc',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="settings" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}