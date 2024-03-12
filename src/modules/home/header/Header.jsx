const Header = ({onChange = () => {}}) => {
    return (
        <div className="mb-8 flex justify-end items-center gap-x-4">
            <a className="text-lg text-blue-600" href="#exchange">Обмін валют</a>
            <button onClick={onChange} className="block py-2 px-8 text-lg border border-slate-500/[.5] 
                rounded-2xl bg-[#1d1d1d]/[.4] font-normal  
                transition hover:bg-white/[.2] hover:text-[#2a2a2a];">
                    Контакти
            </button>
        </div>
    )
}

export default Header;  