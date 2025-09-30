import { RouterProvider } from 'react-router-dom'
import { router } from './router/router'
import { AuthProvider } from './context/auth-context'
import './i18next/index'

function App() {

  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  )
}

export default App
