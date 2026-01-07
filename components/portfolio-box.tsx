
import Image from "next/image";


interface PortfolioBoxProps {
    data: {
        id: number,
        title: string,
        image: string,
        urlGithub: string,
        urlDemo: string
    }
}

const PortfolioBox = (props: PortfolioBoxProps)=>{
    const { data} = props
    const {id, title, image, urlGithub, urlDemo} = data
    return (
        <div className="p-4 border border-teal-50 rounded-xl">
            <h3 className="mb-4 text-xl">
            {title}
            </h3>
            <Image src={image} alt="image product" width={200} height={200}
            className="w-full md:w-[200px] rounded-2xl h-auto"/>

            <div className="flex gap-5 mt-5">

            </div>
        </div>
    )
}

export default PortfolioBox