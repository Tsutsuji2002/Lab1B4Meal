import React from 'react';
import { FlatList, View } from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';
import { CATEGORIES } from '../data/dummy-data';

function CategoriesScreen({ navigation, orientation }) {
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
    <View style={{ flex: 1 }}>
      <FlatList
        data={CATEGORIES}
        renderItem={renderGridItem}
        numColumns={orientation === 'LANDSCAPE' ? 3 : 2}
        key={orientation === 'LANDSCAPE' ? 'landscape' : 'portrait'}
      />
    </View>
  );
}

export default CategoriesScreen;