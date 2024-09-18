import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import { MealsNavigator } from './MealsNavigator';
import FiltersScreen from '../screens/FiltersScreen';
import Colors from '../constants/Colors';

const Drawer = createDrawerNavigator();

export function DrawerNavigator({ orientation }) {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.primaryColor,
        },
        headerTintColor: 'white',
        drawerActiveTintColor: Colors.accentColor,
        drawerPosition: orientation === 'LANDSCAPE' ? 'left' : 'left',
        drawerType: orientation === 'LANDSCAPE' ? 'permanent' : 'front',
      }}
    >
      <Drawer.Screen 
        name="MealsDrawer" 
        children={({ navigation }) => <MealsNavigator navigation={navigation} orientation={orientation} />}
        options={{
          title: 'Món ăn',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="restaurant" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen 
        name="FiltersDrawer" 
        children={({ navigation }) => <FiltersScreen navigation={navigation} orientation={orientation} />}
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