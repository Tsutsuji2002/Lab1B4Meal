import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
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
        orientation={orientation}
      />
    );
  }

  const columnCount = orientation === 'LANDSCAPE' ? 3 : 2;

  return (
    <View style={styles.container}>
      <FlatList
        data={CATEGORIES}
        renderItem={renderGridItem}
        numColumns={columnCount}
        key={orientation}
        columnWrapperStyle={
          columnCount === 3 ? styles.landscapeColumn : styles.portraitColumn
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  landscapeColumn: {
    justifyContent: 'space-between',
  },
  portraitColumn: {
    justifyContent: 'space-around', 
  },
});

export default CategoriesScreen;
