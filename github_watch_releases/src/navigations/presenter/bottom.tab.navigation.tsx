import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

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
      <BottomTab.Screen name="dashboard" component={Dashboard} />
      <BottomTab.Screen name="search" component={SearchScreen} />
    </BottomTab.Navigator>
  );
};
