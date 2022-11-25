import React from 'react';
import {View, Text, Button} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {connectToDevice} from '../redux/reducers/connectionReducer';
import {RootState} from '../redux/store';
import {styles} from '../CSS';

export function LandingScreen({navigation}: {navigation: any}) {
  const isConnected = useSelector(
    (state: RootState) => state.connection.isConnected,
  );
  const dispatch = useDispatch();
  return (
    <View style={styles.body}>
      <Text>LandingScreen</Text>
      <Button
        onPress={() => {
          dispatch(connectToDevice());
          if (isConnected) {
            navigation.navigate('HomeScreen');
          }
        }}
        title="connectToDevice"
      />
    </View>
  );
}
