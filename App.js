
import {Provider, DefaultTheme} from 'react-native-paper';
import RootNavigation from './routes/RootNavigation';



export default function App() {
  const theme = { ...DefaultTheme, colors: { ...DefaultTheme.colors, primary: "#2bb9e4" } }
  return (
    <Provider theme={theme}>
  <RootNavigation/>
    </Provider>


  )
}

