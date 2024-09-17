import React, { useCallback, useEffect } from 'react';
import { ScrollView, View, Image, Text, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { CustomHeaderButton, CustomHeaderButtons } from '../components/CustomHeaderButton';
import { toggleFavorite } from '../store/actions/meals';

const ListItem = props => {
  return (
    <View style={styles.listItem}>
      <Text>{props.children}</Text>
    </View>
  );
};

function MealDetailScreen({ route, navigation }) {
  const { mealId } = route.params;
  const availableMeals = useSelector(state => state.meals.meals);
  const currentMealIsFavorite = useSelector(state =>
    state.meals.favoriteMeals.some(meal => meal.id === mealId)
  );
  const selectedMeal = availableMeals.find(meal => meal.id === mealId);

  const dispatch = useDispatch();

  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(mealId));
  }, [dispatch, mealId]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <CustomHeaderButtons>
          <CustomHeaderButton
            iconName={currentMealIsFavorite ? 'star' : 'star-outline'}
            onPress={toggleFavoriteHandler}
          />
        </CustomHeaderButtons>
      ),
    });
  }, [navigation, toggleFavoriteHandler, currentMealIsFavorite]);

  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <Text>{selectedMeal.duration}m</Text>
        <Text>{selectedMeal.complexity.toUpperCase()}</Text>
        <Text>{selectedMeal.affordability.toUpperCase()}</Text>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {selectedMeal.ingredients.map(ingredient => (
        <ListItem key={ingredient}>{ingredient}</ListItem>
      ))}
      <Text style={styles.title}>Steps</Text>
      {selectedMeal.steps.map(step => (
        <ListItem key={step}>{step}</ListItem>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  details: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-around',
  },
  title: {
    fontFamily: 'Roboto',
    fontSize: 22,
    textAlign: 'center',
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
  },
});

export default MealDetailScreen;