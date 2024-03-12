import React from "react";
import styles from '@styles/Exchangeapp.module.scss'
import axios from "axios";
import Select from "react-select";
import {selectOptions, colorsOptions} from "./optionsSelect";
import moment from "moment";
import IconArrow from '@assets/icons/IconArrow'

const ExchangeApp = () => {
    const [amount, setAmount] = React.useState(0)
    const [result, setResult] = React.useState()
    const [sell, setSell] = React.useState('GBP')
    const [buy, setBuy] = React.useState('EUR')
    const [isFetching, setIsFetching] = React.useState(false)
    const ref = React.useRef(0)

    const params = {
        from: sell,
        to: buy,
        amount: amount,
        date: moment().format('YYYY-MM-DD')
    }

    const searchProps = new URLSearchParams(Object.entries(params))

    const url = new URL(`https://api.fxratesapi.com/convert?${searchProps.toString()}`)

    React.useEffect(() => {
        setIsFetching(false)
        axios.get(url).then(res => {
            setResult(res.data)
            setIsFetching(true)
        })
    }, [amount, buy, sell])

    return (
        <div className={styles.container} id="exchange">

            <div className={styles.box}>
                <header className={styles.head}>
                    <h2>Обмін валют</h2>
                </header>
                <main className={styles.content}>
                    <div className={styles.selectExchange}>
                       <div className={styles.sell}>
                            <span>{sell}</span>
                            <Select 
                                options={selectOptions} 
                                defaultValue={{value: sell, label: sell}}
                                onChange={e => setSell(e.value)} 
                                styles={colorsOptions}
                            />
                       </div>
                       <div className={styles.icon}>
                        <IconArrow />
                       </div>
                       <div className={styles.buy}>
                            <span>EUR</span>
                            <Select 
                                options={selectOptions}
                                defaultValue={{value: buy, label: buy}}
                                onChange={e => setBuy(e.value)} 
                                styles={colorsOptions}
                            />
                       </div>
                    </div>
                    <div className={styles.exchangeInpt}>
                        <span>Введіть сумму</span>
                        <input type="number" onChange={e => ref.current = e.target.value}/>
                        <button onClick={() => setAmount(ref.current)}>Обміняти</button>
                    </div>
                    <div className={styles.exchangeResult}>
                        <div className={styles.resultInfo}>
                            <span>Курс обміну - {!isFetching ? <span>Loading...</span> : result.info.rate} </span>
                            <span>Сумма обміну - {amount} {sell}</span>
                            <span>Результат обміну - {!isFetching ? <span>Loading...</span> : result.result} {buy}</span>
                        </div>
                        <div className={styles.result}></div>

                    </div>
                </main>
            </div>
        </div>
    )
}
export default ExchangeApp;