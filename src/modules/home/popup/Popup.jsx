import IconEmail from "@assets/icons/IconEmail";
import IconTelegram from "@assets/icons/IconTelegram";
import IconLocation from "@assets/icons/IconLocation"

const Popup = ({onChange = () => {}}) => {
    return (
        <div className="fixed top-0 left-0 right-0 h-full bg-slate-900/[.8] max-lg:px-8">
            <div className="bg-black/[0.8]  m-auto w-1/2 relative top-1/2 translate-y-[-50%] rounded-2xl p-12 max-lg:w-full">
                <div className="mb-5 border border-slate-500/[.6] p-5 rounded-lg flex items-center justify-between max-lg:flex-col">
                    <IconEmail width={'4em'} color={'rgb(34,197,94)'}/>
                    <a href="mailto: za.bussiness@gmail.com" target="_blank" className="block text-2xl hover:text-blue-600 max-lg:text-base max-lg:mt-4 max-lg:text-blue-600"> zx.bussiness@gmail.com</a>
                </div>
                <div className="border mb-5 border-slate-500/[.6] p-5 rounded-lg flex items-center justify-between max-lg:flex-col">
                    <IconTelegram width={'4em'} color={'rgb(34,197,94)'}/>
                    <a href="https://t.me/zxvova" target="_blank" className="block text-2xl hover:text-blue-600 max-lg:text-base max-lg:mt-4 max-lg:text-blue-600"> Печений Володимир</a>
                </div>
                <div className="border mb-5 border-slate-500/[.6] p-5 rounded-lg flex items-center justify-between max-lg:flex-col">
                    <IconLocation width={'1.75em'} color={'rgb(34,197,94)'}/>
                    <p className="text-2xl max-lg:text-base max-lg:mt-4">Україна</p>
                </div>
                <button onClick={onChange} className="block  m-auto py-2 px-12 text-xl border border-slate-500/[.5] 
                    rounded-full bg-[#1d1d1d]/[.4] font-normal  
                    transition hover:text-black  hover:bg-white">
                        Закрити
                </button>                
            </div>
        </div>
    )
}

export default Popup;