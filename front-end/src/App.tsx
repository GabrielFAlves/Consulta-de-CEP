import NavBar from './components/custom/navBar'
import Router from './routes'

function App() {
  return (
    <>
      <div className='flex items-center justify-end'>
        <NavBar />
      </div>
      <Router />
    </>
  )
}

export default App
