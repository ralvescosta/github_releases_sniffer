import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Tab = createMaterialTopTabNavigator();

import {Dashboard} from '../../dashboard/presenter/dashboard.screen';
import {SearchScreenModule} from '../../search/search.module';
import {SettingsScreen} from '../../settings/presenter/settings.screen';
import { primary } from '../../core/themes/colors';

export const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      style={{
        backgroundColor: '#fff',
        elevation: 5,
        margin: 0,
        padding: 0,
      }}
      tabBarPosition="bottom"
      tabBarOptions={{
        showIcon: true,
        indicatorStyle: {
          backgroundColor: primary,
        },
        labelStyle: {
          padding: 0,
          margin: 0
        }
      }}

      >
      <Tab.Screen
        name="dashboard"
        component={Dashboard}
        options={{
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({color}) => <MaterialIcons name="dashboard" color={color} size={24} />,
        }}
      />
      <Tab.Screen
        name="search"
        component={SearchScreenModule}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({color}) => <MaterialIcons name="search" color={color} size={24} />,
        }}
      />

      <Tab.Screen
        name="settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({color}) => <MaterialIcons name="unfold-more" color={color} size={24} />,
        }}
      />
    </Tab.Navigator>
  );
};
