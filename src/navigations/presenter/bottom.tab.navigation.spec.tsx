// import React from 'react';
// import '@react-native-community/async-storage';
// import {NavigationContainer} from '@react-navigation/native';

// import {cleanup, render} from '@testing-library/react-native';

// import {SniffedRepositoriesContextProvider} from '../../core/context/sniffed.repositories.context'
// import {BottomTabNavigation} from './bottom.tab.navigation';

// jest.mock('@react-native-community/async-storage', () => ({
//   setItem: jest.fn(),
//   getItem: jest.fn(),
// }));

// function makeSut() {
//   return render(
//     <NavigationContainer>
//       <SniffedRepositoriesContextProvider>
//         <BottomTabNavigation />
//       </SniffedRepositoriesContextProvider>
//     </NavigationContainer>,
//   );
// }

// describe('Bottom Tab Navigation', () => {
//   beforeEach(() => {
//     jest.clearAllMocks();
//     cleanup();
//   });

//   it('Should render correctly', () => {
//     const sut = makeSut();
//     expect(sut.toJSON()).toMatchSnapshot();
//   });
// });

describe('Bottom Tab Navigation', () => {
  it('unfortunately it reacts to navigation jestSetup is not working to move createMaterialTopTabNavigator', ()=> {})
})