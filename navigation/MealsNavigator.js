import React from 'react';
import { Platform, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import SearchScreen from '../screens/SearchScreen';
import Colors from '../constants/Colors';

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
};

const MealsStack = createStackNavigator();

function MealsStackNavigator({ orientation }) {
  return (
    <MealsStack.Navigator screenOptions={defaultStackNavOptions}>
      <MealsStack.Screen 
        name="Categories" 
        children={({ navigation }) => <CategoriesScreen navigation={navigation} orientation={orientation} />}
        options={{ title: 'Danh mục món ăn' }}
      />
      <MealsStack.Screen 
        name="CategoryMeals" 
        children={({ navigation, route }) => <CategoryMealsScreen navigation={navigation} route={route} orientation={orientation} />}
      />
      <MealsStack.Screen 
        name="MealDetail" 
        children={({ navigation, route }) => <MealDetailScreen navigation={navigation} route={route} orientation={orientation} />}
      />
    </MealsStack.Navigator>
  );
}

const FavStack = createStackNavigator();

function FavoritesStackNavigator({ orientation }) {
  return (
    <FavStack.Navigator screenOptions={defaultStackNavOptions}>
      <FavStack.Screen 
        name="FavoritesList" 
        children={({ navigation }) => <FavoritesScreen navigation={navigation} orientation={orientation} />}
        options={{ title: 'Món ăn ưa thích' }}
      />
      <FavStack.Screen 
        name="FavoriteMealDetail" 
        children={({ navigation, route }) => <MealDetailScreen navigation={navigation} route={route} orientation={orientation} />}
      />
    </FavStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export function MealsNavigator({ orientation }) {
  if (orientation === 'LANDSCAPE') {
    return (
      <View style={{ flexDirection: 'row', flex: 1 }}>
        <View style={{ width: '30%' }}>
          <MealsStackNavigator orientation={orientation} />
        </View>
        <View style={{ width: '70%' }}>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                if (route.name === 'Search') {
                  iconName = focused ? 'search' : 'search-outline';
                } else if (route.name === 'FavoritesTab') {
                  iconName = focused ? 'star' : 'star-outline';
                }
                return <Ionicons name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: Colors.accentColor,
              tabBarInactiveTintColor: 'gray',
            })}
          >
            <Tab.Screen name="Search" children={({ navigation }) => <SearchScreen navigation={navigation} orientation={orientation} />} options={{ headerShown: false }} />
            <Tab.Screen name="FavoritesTab" component={FavoritesStackNavigator} options={{ headerShown: false, title: 'Favorites' }} />
          </Tab.Navigator>
        </View>
      </View>
    );
  } else {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'MealsTab') {
              iconName = focused ? 'restaurant' : 'restaurant-outline';
            } else if (route.name === 'Search') {
              iconName = focused ? 'search' : 'search-outline';
            } else if (route.name === 'FavoritesTab') {
              iconName = focused ? 'star' : 'star-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: Colors.accentColor,
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="MealsTab" children={({ navigation }) => <MealsStackNavigator navigation={navigation} orientation={orientation} />} options={{ headerShown: false, title: 'Món ăn' }} />
        <Tab.Screen name="Search" children={({ navigation }) => <SearchScreen navigation={navigation} orientation={orientation} />} options={{ headerShown: false , title: 'Tìm kiếm'}} />
        <Tab.Screen name="FavoritesTab" component={FavoritesStackNavigator} options={{ headerShown: false, title: 'Ưa thích' }} />
      </Tab.Navigator>
    );
  }
}