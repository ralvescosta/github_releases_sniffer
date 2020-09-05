import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const BottomTab = createMaterialBottomTabNavigator();

// type Props = {
//   dashboardScreen: React.FC<any>;
//   searchScreen: React.FC<any>;
// };

import {Dashboard} from '../../dashboard/presenter/dashboard.screen';
import {SearchScreen} from '../../search/presenter/search.screen';

export const BottomTabNavigation: React.FC = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name="dashboard"
        component={Dashboard}
        options={{
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({color}) => <MaterialCommunityIcons name="page-next" color={color} size={26} />,
        }}
      />
      <BottomTab.Screen
        name="search"
        component={SearchScreen}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({color}) => <MaterialCommunityIcons name="page-next" color={color} size={26} />,
        }}
      />
    </BottomTab.Navigator>
  );
};
