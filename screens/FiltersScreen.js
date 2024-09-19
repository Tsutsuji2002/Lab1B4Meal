import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, Switch, Button, Platform } from 'react-native';
import { CustomHeaderButton, CustomHeaderButtons } from '../components/CustomHeaderButton';
import { useDispatch } from 'react-redux';
import Colors from '../constants/Colors';
import { setFilters } from '../store/actions/meals';

const FilterSwitch = props => {
  return (
    <View style={styles.filterContainer}>
      <Text>{props.label}</Text>
      <Switch
        trackColor={{ true: Colors.primaryColor }}
        thumbColor={Platform.OS === 'android' ? Colors.primaryColor : ''}
        value={props.state}
        onValueChange={props.onChange}
      />
    </View>
  );
};

function FiltersScreen({ navigation }) {
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  const dispatch = useDispatch();

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      vegetarian: isVegetarian,
    };
    dispatch(setFilters(appliedFilters));
  }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian, dispatch]);

  const resetFilters = () => {
    setIsGlutenFree(false);
    setIsLactoseFree(false);
    setIsVegan(false);
    setIsVegetarian(false);
  };

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <CustomHeaderButtons>
          <CustomHeaderButton
            iconName="save"
            onPress={saveFilters}
            color={Platform.OS === 'android' ? 'white' : Colors.primaryColor}
          />
        </CustomHeaderButtons>
      ),
    });
  }, [saveFilters, navigation]);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Bộ lọc / Hạn chế</Text>
      <FilterSwitch
        label="Không chứa gluten"
        state={isGlutenFree}
        onChange={newValue => setIsGlutenFree(newValue)}
      />
      <FilterSwitch
        label="Không có lactose"
        state={isLactoseFree}
        onChange={newValue => setIsLactoseFree(newValue)}
      />
      <FilterSwitch
        label="Thuần chay"
        state={isVegan}
        onChange={newValue => setIsVegan(newValue)}
      />
      <FilterSwitch
        label="Đồ chay"
        state={isVegetarian}
        onChange={newValue => setIsVegetarian(newValue)}
      />
      <View style={styles.buttonContainer}>
        <Button
          title="Làm mới bộ lọc"
          color={Colors.primaryColor}
          onPress={resetFilters}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontFamily: 'Roboto',
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
    textAlign: 'center',
    color: Colors.primaryColor,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  buttonContainer: {
    marginTop: 30,
    width: '60%',
  }
});

export default FiltersScreen;
