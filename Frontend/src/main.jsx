import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import { routes } from './routes/routes.jsx'
import { FooContextProvider } from './contexts/FoodContext.jsx'
import { FirebaseAuthContextProvider } from './contexts/FirebaseAuthContext.jsx'


createRoot(document.getElementById('root')).render(
 
<FirebaseAuthContextProvider>
<FooContextProvider>
     <RouterProvider router={routes}>

</RouterProvider>
 </FooContextProvider>
</FirebaseAuthContextProvider>
 

)
