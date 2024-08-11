import React from 'react'
import CustomerRouter from './Routers/CustomerRouter'
import { Route, Routes} from 'react-router-dom'

const App = () => {
  return (
    <div className=''>
     
       <Routes>
        <Route path='/*' element={<CustomerRouter/>}/>
      </Routes>
     
     
  </div>
    
  )
}

export default App