import React, { useState, useMemo, useCallback } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import MealItem from '../components/MealItem';
import { Ionicons } from '@expo/vector-icons';

const SearchScreen = props => {
  const [searchTerm, setSearchTerm] = useState('');

  const availableMeals = useSelector(state => state.meals.filteredMeals);
  const appliedFilters = useSelector(state => state.meals.filters) || {};

  const filterMeals = useCallback((meals, term, filters) => {
    return meals.filter(meal => {
      if (term && !meal.title.toLowerCase().includes(term.toLowerCase())) {
        return false;
      }
      if (filters.glutenFree && !meal.isGlutenFree) {
        return false;
      }
      if (filters.lactoseFree && !meal.isLactoseFree) {
        return false;
      }
      if (filters.vegan && !meal.isVegan) {
        return false;
      }
      if (filters.vegetarian && !meal.isVegetarian) {
        return false;
      }
      return true;
    });
  }, []);

  const filteredMeals = useMemo(() => {
    return filterMeals(availableMeals, searchTerm, appliedFilters);
  }, [availableMeals, searchTerm, appliedFilters, filterMeals]);

  const renderMealItem = useCallback(({ item }) => {
    return (
      <MealItem
        title={item.title}
        image={item.imageUrl}
        duration={item.duration}
        complexity={item.complexity}
        affordability={item.affordability}
        onSelectMeal={() => {
          props.navigation.navigate('MealDetail', {
            mealId: item.id,
            mealTitle: item.title
          });
        }}
      />
    );
  }, [props.navigation]);

  const clearSearch = useCallback(() => {
    setSearchTerm('');
  }, []);

  return (
    <View style={styles.screen}>
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={24} color="grey" style={styles.searchIcon} />
        <TextInput
          style={styles.input}
          onChangeText={setSearchTerm}
          value={searchTerm}
          placeholder="Tìm kiếm món ăn..."
        />
        {searchTerm !== '' && (
          <TouchableOpacity onPress={clearSearch}>
            <Ionicons name="close-circle" size={24} color="grey" style={styles.clearIcon} />
          </TouchableOpacity>
        )}
      </View>
      {filteredMeals.length === 0 ? (
        <Text style={styles.noResultsText}>Không tìm thấy món ăn phù hợp.</Text>
      ) : (
        <FlatList
          data={filteredMeals}
          keyExtractor={(item) => item.id}
          renderItem={renderMealItem}
          style={{ width: '100%' }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    marginBottom: 10,
    paddingHorizontal: 10
  },
  searchIcon: {
    marginRight: 10
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    fontSize: 16
  },
  clearIcon: {
    marginLeft: 10
  },
  noResultsText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: 'gray'
  }
});

export default React.memo(SearchScreen);