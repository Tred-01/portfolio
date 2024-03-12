import IconPortfolio from '@assets/icons/IconPortfolio';
import styles from '@styles/Boxs.module.scss'

const Portfolio = () => {
    return (
        <div className={styles.box}>
            <div className='p-8'>
                <div className=" w-max border border-slate-500/[.2] py-3 px-7 flex items-center gap-3 rounded-full ">
                    <IconPortfolio />
                    <span className='text-sm'>Portfolio</span>
                </div>
                <div className="mt-8 flex max-xl:block">
                    <div className="job w-1/3 text-center max-xl:w-full max-xl:border max-xl:border-slate-500/[.6] max-xl:py-6 max-xl:mb-6">
                        <h6 className='text-2xl'>Gerchik & Co</h6>
                        <p className='max-xl:my-2'>
                            <a href="https://gerchik.co/ru" target='_blank' className='block text-blue-700'>[ Gerchik & Co ]</a>
                        </p>
                        <p className='px-2'>
                            Верстка сайту. Робота в команді. Взяємодія з back-end`ом. Стек - HTML, SCSS, Vanilla JS, Gulp.
                        </p>
                    </div>
                    <div className="job w-1/3 text-center max-xl:w-full max-xl:border max-xl:border-slate-500/[.6] max-xl:py-6 max-xl:mb-6">
                        <h6 className='text-2xl'>Лендінги</h6>
                        <p className='px-2 max-xl:my-2'>
                            [ ]
                        </p> 
                        <ul>
                            <li> <a className='text-blue-700' href="https://perezagruzka.alexgerchik.com/">Лендінг Перезагрузка</a></li>
                            <li><a className='text-blue-700' href="https://risk-manager.gerchikfx.com/ru/">Лендінг Ризик-менеджер</a></li>
                            <li><a className='text-blue-700' href="https://gerchikfx.com/trial-real-market-volume/">Лендінг Real Market Volume</a></li>
                            <li><a className='text-blue-700' href="https://gerchikfx.com/ua/">Лендінг OSN</a></li>
                            <li><a className='text-blue-700' href="https://gerchikco.market/">Лендінг Market</a></li>
                            <li>...</li>
                        </ul>
                    </div>
                    <div className="job w-1/3 text-center max-xl:w-full max-xl:border max-xl:border-slate-500/[.6] max-xl:py-6 max-xl:mb-6">
                        <h6 className='text-2xl'>Внутрішні проекти</h6>
                        <p className='max-xl:my-2'>
                            [ ]
                        </p>
                        <p className='px-2'>
                            Внутрішні проекти компанії. <br /> Стек - <span className='text-green-500'>react, redux, webpack, scss, tailwind, </span> ... 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;