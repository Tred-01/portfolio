import styles from '@styles/Boxs.module.scss'

const About = () => {
    return (
        <div className={styles.box}>
            <div className="px-8 py-16">
                <h6 className='text-2xl max-xl:text-xl'>Привіт, Я <span className='text-green-500'>Веб-розробник</span> з України.</h6>
                <div className="my-8 text-green-500">
                    [ Верстка, Веб-розробка ]
                </div>
                <p className='tracking-wider max-xl:text-base'>
                    Працював над різникими проектами, в більшості це <span className='text-green-500'>верстка сайту</span>, <span className='text-green-500'>ленгінги</span>, 
                    доробка існуючих <span className='text-green-500'>сайтів/лендінгів</span>, також внутрішні проекти компанії на технології <span className='text-green-500'>React.</span>
                    Працював в команді з талановитими розробниками, веб-дизайнерами, проджект-менеджерами, аналітиками. 
                    Взаємодіяв з back-end`ом <span className='text-green-500'>[ API ].</span> Планування та поставлення задач робилась в <span className='text-green-500'>Jira</span>.
                </p>
            </div>
        </div>
    )
}
export default About;