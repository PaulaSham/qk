// import logo from './logo.svg'
import './App.css'
// import CusCop from './components/index.jsx'
import MainRouter from './router/index'
import { useEffect } from 'react'

function App(props: any) {
  console.log('props', props)
  useEffect(() => {
    setTimeout(() => {
      props.props.setGlobalState({
        info: 1000,
      })
    }, 10)
  }, [props.setGlobalState])
  return <MainRouter />
}

export default App
