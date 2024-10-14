function Button({className, children}) {
    return(
        <>
            <button
                    className= { `${className} mt-[17rem] absolute inline-flex h-10 active:scale-95 transistion overflow-hidden rounded-lg p-[1px] focus:outline-none min-w-max`}
                  >
                    <span
                      className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e7029a_0%,#f472b6_50%,#bd5fff_100%)]"
                    >
                    </span>
                    <span
                      className="font-spaced inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-md font-medium text-white backdrop-blur-3xl gap-2 undefined"
                    >
                      {children}
                    </span>
            </button>
        </>
    )
}

export default Button


