## Important Links

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

To learn React, check out the [React documentation](https://reactjs.org/).

## Packages

#### Bootstrap [link](https://react-bootstrap.github.io/)

```
npm install react-bootstrap bootstrap
npm install --save @types/react-bootstrap
npm install --save @types/bootstrap
```

#### Supporting IE

```
npm install react-app-polyfill
```

#### Styled components [link](https://www.styled-components.com/)

```
npm install --save styled-components
npm install @types/styled-components
```

#### Styled icons [link](https://styled-icons.js.org/)

```
npm install --save styled-icons
```

#### React router [link](https://reacttraining.com/react-router/web/guides/quick-start)

```
npm install react-router-dom
npm install @types/react-router-dom
```

#### Axios [link](https://github.com/axios/axios)

```
npm install axios
```

#### React notifications [link](https://www.npmjs.com/package/react-notifications)

```
npm install react-notifications
```

#### Jest [link](https://jestjs.io/)

```
npm install --save-dev jest
```

## Setup and useful commands

#### Create app

> ```
> npx create-react-app sample-react-app --template typescript
> ```

#### Change port

package.json

> ```javascript
> "start": "set PORT=3100 && react-scripts start"
> ```

#### Imports using absolute path

tsconfig.json

> ```javascript
> {
>  "compilerOptions": {
>    "baseUrl": "src"
>  },
>  "include": ["src"]
> }
> ```

#### Prevent use implicit any

tsconfig.json

> ```javascript
> "noImplicitAny": true,
> ```

## Other useful resources

https://github.com/Lemoncode/react-promise-tracker
