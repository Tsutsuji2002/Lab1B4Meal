import React from 'react';
import { useSelector } from 'react-redux';
import { CATEGORIES } from '../data/dummy-data';
import MealList from '../components/MealList';

function CategoryMealsScreen({ route, navigation }) {
  const { categoryId } = route.params;

  const availableMeals = useSelector(state => state.meals.filteredMeals);

  const displayedMeals = availableMeals.filter(
    meal => meal.categoryIds.indexOf(categoryId) >= 0
  );

  React.useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(cat => cat.id === categoryId).title;
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [navigation, categoryId]);

  return <MealList listData={displayedMeals} navigation={navigation} />;
}

export default CategoryMealsScreen;