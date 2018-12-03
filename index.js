import { Navigation } from "react-native-navigation";
import App from "./App";
import App2 from "./App2";

Navigation.registerComponent(`navigation.playground.WelcomeScreen`, () => App);
Navigation.registerComponent(`navigation.playground.WelcomeScreen2`, () => App2);


const bottomTabs = {
    children: [
      {
        stack: {
          children: [
              {
                  component: {
                      name: "navigation.playground.WelcomeScreen"
                  }
              }
          ],
          options: {
            bottomTab: {
              text: 'Tab 1',
              icon: require('./1.png')
            }
          }
        }
      },
      {
        component: {
          name: 'navigation.playground.WelcomeScreen2',
          options: {
            bottomTab: {
              text: 'Tab 2',
              icon: require('./1.png')
            }
          }
        }
      }
    ],
    options: {}
  }

Navigation.events().registerAppLaunchedListener(() => {


Navigation.setRoot({
    root: {
        bottomTabs: bottomTabs
    }
  });

});


//   Navigation.setRoot({
//     root: {
//       sideMenu: {
//         left: {
//           component: {
//             name: 'navigation.playground.WelcomeScreen',
//             passProps: {
//               text: 'This is a left side menu screen'
//             }
//           }
//         },
//         center: {
//           component: {
//             name: 'navigation.playground.WelcomeScreen'
//           },
//         },
//         right: {
//           component: {
//             name: 'navigation.playground.WelcomeScreen2',
//             passProps: {
//               text: 'This is a right side menu screen'
//             }
//           }
//         }
//       }
//     }
//   });