import styles from '@styles/Author.module.scss'
const Author = ({onChange = () => {}}) => {
    return (
        <div className={styles.profile}>
            <div className={styles.profileBox}>
                <div className={styles.profileImg}>
                    <img src="" alt="" />
                </div>
                <div className={styles.profileInfo}>
                    <span className='text-green-500 font-light text-sm uppercase'>Web Developer</span>
                    <h4 className='text-2xl mt-3'>Печений Володимир</h4>
                </div>
            </div>
            <div className={styles.profileBtn}>
                <button className={styles.btn} onClick={onChange}>Контакти</button>
            </div>
        </div>
    )
}
export default Author;