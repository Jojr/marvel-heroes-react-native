![](https://i.imgur.com/wr5fQrE.png)
# Marvel Heroes
Mobile application built using **React Native** and **Redux**.

## Description
The application consumes data from the Marvel Character API and returns it alphabetically in a list using infinite scroll.

It can store the information of the favorite characters in the internal memory of the device.

## Functionalities
- Multi languages with automatic selection at startup.
- Data persistence.
- Fluid transition of elements between screens.
- Friendly handling to handle runtime exceptions.

## Architecture and standards used
#### Stylization:

The components were developed using the **[Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/ "Atomic Design")** standard, favoring the reuse, maintenance and standardization of visual elements.

I base spacing and typography patterns on the platform guidelines.

The units of measurement are based on the dimensions and pixel density of the screens, providing homogeneous elements in different devices.

#### React Native patterns:
I developed the code using Typescript, and I structured the components with the Functional Components standard.

| Functionality | Library                    |
| ------------- | ------------------------------ |
| Internationalization      | aws-amplify/core       |
| State management  | Redux     |
| Data persistence  | Redux Persist    |
| Navigation  | React Navigation V4*     |
| E2E Tests | Detox / Mocha     |

**React I maintained Navigation V4 because of compatibility with the library, which provides smooth screen transitions.*

### Automated testing
I perform e2E tests using the Detox library and the Mocha test runner.

## Installation
![](https://img.shields.io/static/v1?label=Node.js&message=Atenção&color=orange) You must have Node.Js installed on your machine.

1) Install project dependencies:
```
yarn install
```
2) Build for the platform:
```
npx react-native run-ios // IOS ou
npx react-native run-android // Android
```

## Preview

### Fluid transitions
![Transição fluida](https://i.imgur.com/rHJif81.gif "Transição fluida")

### Favorites
![Favoritos](https://i.imgur.com/E6vNaxC.gif "Favoritos")

### Infinite scroll:
![Infinite Scroll](https://i.imgur.com/dvMNSX5.gif "Infinite Scroll")

### Character search:
![Busca de personagens](https://i.imgur.com/ZdEg4S7.gif "Busca de personagens")

