import React from 'react';
import { FlatList } from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';
import { CATEGORIES } from '../data/dummy-data';

function CategoriesScreen({ navigation }) {
  function renderGridItem(itemData) {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
          navigation.navigate('CategoryMeals', {
            categoryId: itemData.item.id,
            categoryTitle: itemData.item.title,
          });
        }}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;