import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen from "../features/SplashScreen"
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion
import NotificationList217576Navigator from '../features/NotificationList217576/navigator';
import Settings217575Navigator from '../features/Settings217575/navigator';
import Settings217567Navigator from '../features/Settings217567/navigator';
import UserProfile217565Navigator from '../features/UserProfile217565/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
  //@BlueprintNavigationInsertion
NotificationList217576: { screen: NotificationList217576Navigator },
Settings217575: { screen: Settings217575Navigator },
Settings217567: { screen: Settings217567Navigator },
UserProfile217565: { screen: UserProfile217565Navigator },

  /** new navigators can be added here */
  SplashScreen: {
    screen: SplashScreen
  }
}

const Drawer = createDrawerNavigator()

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <SideMenu {...props} />}>
        {Object.keys(AppNavigator).map(s => (
          <Drawer.Screen name={s} component={AppNavigator[s].screen} />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default AppContainer
