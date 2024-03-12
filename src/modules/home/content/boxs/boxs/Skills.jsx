import skillBoxs from '../skillBoxs'
import IconSkill from '@assets/icons/IconSkill'
import styles from '@styles/Boxs.module.scss'


const Skills = () => {
    return (
        <div className={styles.box}>
            <div className='p-8'>
                <div className=" w-max border border-slate-500/[.2] py-3 px-7 flex items-center gap-3 rounded-full ">
                    <IconSkill />
                    <span className='text-sm'>Знання</span>
                </div>
            </div>
            <div className={styles.skillList}>
                <ul className='p-8 flex flex-wrap gap-4'>
                    {Object.keys(skillBoxs).map((item, i) => (
                        <li key={i} className={styles.skillBox}>
                            <img src={skillBoxs[item]?.img} alt="" className='w-10'/>
                            <span>{skillBoxs[item]?.name}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Skills;