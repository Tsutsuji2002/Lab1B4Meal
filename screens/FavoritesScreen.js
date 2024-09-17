import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import MealList from '../components/MealList';
import { CustomHeaderButton, CustomHeaderButtons } from '../components/CustomHeaderButton';
import DefaultText from '../components/DefaultText';

function FavoritesScreen({ navigation }) {
  const favMeals = useSelector(state => state.meals.favoriteMeals);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <CustomHeaderButtons>
          <CustomHeaderButton
            iconName="menu"
            onPress={() => {
              navigation.toggleDrawer();
            }}
          />
        </CustomHeaderButtons>
      ),
    });
    
  }, [navigation]);

  if (favMeals.length === 0 || !favMeals) {
    return (
      <View style={styles.content}>
        <DefaultText>Không tìm thấy món ăn yêu thích. </DefaultText>
        <DefaultText>Hãy bắt đầu thêm một số món!</DefaultText>
      </View>
    );
  }

  return <MealList listData={favMeals} navigation={navigation} />;
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FavoritesScreen;