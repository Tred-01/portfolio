import {Routes, Route} from 'react-router-dom'
import Home from '@modules/home/Home'
import ExchangeApp from '@modules/exchangeApp/ExchangeApp'
export default function RoutesPages () {
    return (
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path="/exchange" element={<ExchangeApp />}></Route>
        </Routes>
    )
}