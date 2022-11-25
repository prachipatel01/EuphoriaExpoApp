import * as React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CartridgeScreen} from '../screens/CartridgeScreen';
import {ShadesScreen} from '../screens/ShadesScreen';
import {RecentsScreen} from '../screens/RecentsScreen';
import {FavouriteScreen} from '../screens/FavouriteScreen';
import {styles, colors} from '../CSS';
import {CreateShadeScreen} from '../screens/CreateShadeScreen';

const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

export function TopTabShop() {
  return (
    <Tab.Navigator
      initialRouteName="ShadesScreen"
      screenOptions={{
        tabBarActiveTintColor: colors.goldLight,
        tabBarLabelStyle: {color: colors.goldLight},
        tabBarStyle: {backgroundColor: colors.black},
        tabBarIndicatorStyle: {backgroundColor: colors.goldLight}
        // tabBarStyle: {height: styles.topTab.height},
      }}>
      <Tab.Screen name="ShadesScreen" component={ShadesScreen} />
      <Tab.Screen name="CartridgeScreen" component={CartridgeScreen} />
    </Tab.Navigator>
  );
}

// function RecentsScreenStack() {
//   return (
//     <Stack.Navigator
//       initialRouteName="RecentsScreen"
//       screenOptions={{
//         headerShown: false,
//       }}>
//       <Stack.Screen name="RecentsScreen" component={RecentsScreen} />
//       <Stack.Screen name="CreateShadeScreen" component={CreateShadeScreen} />
//     </Stack.Navigator>
//   );
// }

// function FavouriteScreenStack() {
//   return (
//     <Stack.Navigator
//       initialRouteName="FavouriteScreen"
//       screenOptions={{
//         headerShown: false,
//       }}>
//       <Stack.Screen name="FavouriteScreen" component={FavouriteScreen} />
//       <Stack.Screen name="CreateShadeScreen" component={CreateShadeScreen} />
//     </Stack.Navigator>
//   );
// }

// export function TopTabCloset() {
//   return (
//     <Tab.Navigator
//       initialRouteName="Home"
//       screenOptions={{
//         tabBarActiveTintColor: colors.goldLight,
//         tabBarLabelStyle: {color: colors.goldLight},
//         tabBarStyle: {backgroundColor: colors.black},
//         tabBarIndicatorStyle: {backgroundColor: colors.goldLight}
//       }}>
//       <Tab.Screen name="RecentsScreenStack" component={RecentsScreenStack} />
//       <Tab.Screen
//         name="FavouriteScreenStack"
//         component={FavouriteScreenStack}
//       />
//     </Tab.Navigator>
//   );
// }


export function TopTabCloset() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: colors.goldLight,
        tabBarLabelStyle: {color: colors.goldLight},
        tabBarStyle: {backgroundColor: colors.black},
        tabBarIndicatorStyle: {backgroundColor: colors.goldLight}
      }}>
      <Tab.Screen name="RecentScreen" component={RecentsScreen} />
      <Tab.Screen
        name="FavouriteScreen"
        component={FavouriteScreen}
      />
    </Tab.Navigator>
  );
}