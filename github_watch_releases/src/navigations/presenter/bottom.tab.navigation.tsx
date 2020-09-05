import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const BottomTab = createMaterialBottomTabNavigator();

import {Dashboard} from '../../dashboard/presenter/dashboard.screen';
import {SearchScreen} from '../../search/presenter/search.screen';
import {primary} from '../../core/themes/colors';

export const BottomTabNavigation: React.FC = () => {
  return (
    <BottomTab.Navigator
      barStyle={{
        backgroundColor: primary,
      }}>
      <BottomTab.Screen
        name="dashboard"
        component={Dashboard}
        options={{
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({color}) => <MaterialIcons name="dashboard" color={color} size={24} />,
        }}
      />
      <BottomTab.Screen
        name="search"
        component={SearchScreen}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({color}) => <MaterialIcons name="search" color={color} size={24} />,
        }}
      />
    </BottomTab.Navigator>
  );
};
