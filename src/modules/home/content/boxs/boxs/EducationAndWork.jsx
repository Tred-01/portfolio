import styles from '@styles/Boxs.module.scss'
import IconEdu from '@assets/icons/IconEdu'

const EducationAndWork = () => {
    return (
        <div className={styles.box}>
            <div className="p-8">
                <div className=" w-max border border-slate-500/[.2] py-3 px-7 flex items-center gap-3 rounded-full ">
                    <IconEdu />
                    <span className='text-sm'>Resume</span>
                </div>
                <p className='py-8 text-3xl'>Навчання та робота</p>
                <div className="mt-5">
                    
                    <div className="flex max-xl:block">
                        <div className="job text-center w-1/2 max-xl:w-full max-xl:mb-10">
                            <div className='text-2xl text-green-500 mb-4 max-xl:text-lg'>
                                2021-2024
                            </div>
                            <h6 className='py-4 border-t max-xl:text-sm'>[ HTML-верстальщик / Веб-розробник ]</h6>
                            <p className='max-xl:text-sm'>
                                Працював в компанії <span className='text-green-500'>StarWayMedia.</span> 
                                HTML-верстальщик - верстка сайту, лендінги. 
                                Доробка існуючих сайтів, лендінгів.
                                Front-end - працював на внутрішніх проектах компанії, взаємодіяв з back-end`ом.
                            </p>
                        </div>
                        <div className="education text-center w-1/2 max-xl:w-full">
                            <div className='text-2xl text-green-500 mb-4 max-xl:text-lg'>
                                2014-2020
                            </div>
                            <h6 className='py-4 border-t max-xl:text-sm'>[ Київський державний університет телекомунікацій ]</h6>
                            <p className='max-xl:text-sm'>
                                Навчально-науковий інститут захисту інформації - <span className='text-green-500'>безпека інформаційно-телекомунікаційних систем.</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EducationAndWork;