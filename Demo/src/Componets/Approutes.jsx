import { Routes, Route } from 'react-router-dom'
import Design from './Design'
import Home from './Home'
import Contact from './Contact'
import Project from './Project'
import Education from './Education'


const Approutes = () => {
  return (
    <Routes>
      <Route element={<Design />}>
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="projects" element={<Project/>}/>
        <Route path='education' element={<Education/>}/>
      </Route>
    </Routes>
  )
}

export default Approutes