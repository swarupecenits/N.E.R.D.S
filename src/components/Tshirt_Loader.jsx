
const Tshirt_Loader = () => (
    <div className="flex items-center justify-center w-full h-full">
        <div className="relative w-24 h-24">
            <div
                className="absolute w-full h-full rounded-full border-4 border-t-[#0ff] border-gray-100/10 animate-spin"
                style={{ animationDuration: '1.2s' }}
            ></div>
            <div
                className="absolute w-full h-full rounded-full border-4 border-b-[#0ff] border-gray-100/10 animate-spin"
                style={{ animationDuration: '2s', animationDirection: 'reverse' }}
            ></div>
            <div
                className="absolute inset-0 bg-gradient-to-tr from-[#0ff]/10 via-transparent to-[#0ff]/5 animate-pulse rounded-full blur-sm"
            ></div>
        </div>
    </div>
);

export default Tshirt_Loader;