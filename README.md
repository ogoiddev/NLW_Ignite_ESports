*** em desenvolvimento ***

# Steps to config project

# BackEnd

## To init Backend we need NodeJs

## starting backend server

#### To init package.json (-y to confirm all questions)
```
$ npm init -y
```
#### To help on API functions
```
$ npm install express 
```
```
$ npm install @types/express -D
```
#### To help reload node instance when save new code
```
$ npm install ts-node-dev -D
```
#### To config TypeScript
```
$ npx tsc --init
```
#### To run the code (use Script = "tsc")
```
$ npm run build
```

## ORM - Prisma
```
$ npm install prisma -D
```
#### To see options
```
$ npx prisma init -h
```
### To init with
```
$ npx prisma init --datasource-provider SQLite
```

#### To create migration asking name
```
$ npx prisma migrate dev
```

#### Client
```
$ npm install @prisma/client
```

#### Cors
```
$ npm install cors 
```
```
$ nmp install --save-dev @types/cors
```




# FrontEnd - Desktop

# Steps to config project

## starting frontend web
```
$ npm create vite@latest
```

// Need to install the following packages:
// create-vite@3.1.0
// Ok to proceed? (y) y
// ✔ Project name: … web
// ✔ Select a framework: › React
// ✔ Select a variant: › TypeScript


## [Tailwind](https://tailwindcss.com/docs/installation/using-postcss)

#### To install with Vite application
```
$ npm install -D tailwindcss postcss autoprefixer
```
```
$ npx tailwindcss init
```

## [Phosphor Icons](https://phosphoricons.com/)

#### To install
```
$ npm install phosphor-react
```

#### [Radix-ui](https://www.radix-ui.com/docs/primitives/components/dialog)
```
$ npm install @radix-ui/react-dialog
```



# FrontEnd - Mobile

# Steps to build project

## FrontEnd mobile

#### [Expo](https://docs.expo.dev/)
```
$ npm i -g expo-cli
```
```
$ npx create-expo-app my-app
```

#### [Expo google fonts](https://docs.expo.dev/guides/using-custom-fonts/#using-a-google-font)
```
$ expo install expo-font @expo-google-fonts/inter
```

#### [Expo linear gradient](https://docs.expo.dev/versions/latest/sdk/linear-gradient/)
```
$ expo install expo install expo-linear-gradient
```

#### [Expor SVG](https://docs.expo.dev/versions/latest/sdk/svg/)
```
$$ expo install react-native-svg
```

#### [React Navigation](https://reactnavigation.org/docs/getting-started/)
#### To keep area save in different types of phone
```
$ expo install react-native-safe-area-context
```
#### To navigate
```
$ npm install @react-navigation/native
```
##### dependence's
```
$ expo install react-native-screens
```
#### strategy of navigate
```
$ npm install @react-navigation/native-stack
```

## [Phosphor for Native](https://github.com/duongdev/phosphor-react-native)
```
$ npm install --save phosphor-react-native
```