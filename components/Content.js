import Thumbnail from "./Thumbnail";

export default function Content({results}) {

    return (
        <div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 
        3xl:flex flex-wrap justify-center">
            {results.map(res=><Thumbnail key={res.id} result={res}/>)}
        </div>
    )
}
