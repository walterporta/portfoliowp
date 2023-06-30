import PiCountryCard from "../projects/cards/PiCountryCard"
import CoderGameCard from "../projects/cards/CoderGameCard"

const ProjectsSections = () => {
    return(
        <div className=" bg-emerald-500">
            <h1 className="text-lg font-bold">PROYECTOS:</h1>
            <div className="flex items-center justify-center">
            <PiCountryCard />
            <CoderGameCard />
            </div>





        </div>
    )
}
 export default ProjectsSections