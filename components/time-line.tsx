import { dataAboutPage } from "@/data";

const TimeLine = () => {
    return (
        <div className="relative w-full max-w-3xl mx-auto md:pb-40 md:pt-20">

            <div className="absolute left-6 top-0 h-full w-1 bg-slate-300 -translate-x-1/2"></div>

            <div className="flex flex-col">
                {dataAboutPage.map((data) => (
                    <div key={data.id} className="relative pl-12 mb-8 last:mb-0">

                     
                        <div className="absolute left-6 top-2 w-4 h-4 bg-indigo-600 border-2 border-slate-50 rounded-full -translate-x-1/2"></div>

                        <time className="absolute left-0 top-2 -translate-x-full text-sm text-emerald-600 bg-emerald-100 px-2 py-1 rounded-full font-bold">
                            {data.date}
                        </time>  
                       
                        <h3 className="text-2xl font-bold mb-1">{data.title}</h3>
                        <p className="text-xl font-bold text-gray-400">{data.subtitle}</p>
                        <p className="text-slate-400 mx-w-md">{data.description}</p>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default TimeLine;

