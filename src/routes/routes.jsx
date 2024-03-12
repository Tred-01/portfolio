import {Routes, Route} from 'react-router-dom'
import Home from '../modules/Home'
import About from '../modules/About'
export default function RoutesPages () {
    return (
        <Routes>
            <Route path='/test/' element={<Home />}></Route>
            <Route path="/test/about" element={<About />}></Route>
        </Routes>
    )
}