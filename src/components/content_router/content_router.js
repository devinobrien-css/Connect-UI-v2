import { useRecoilState } from "recoil";
import { pageState } from '../../atoms.js'
import Dashboard from "../../pages/dashboard/dashboard.js";

/** Renders the requested page
 * 
 * @param {str} args.page specifies the page to route to
 * @returns the requested page
 */
const GeneratePage = (args) => {
    if(args.page === 'dashboard'){
        return <Dashboard />
    }
    else if(args.page === 'explore'){
        return <p>explore</p>
    }
    else {
        return <p>no page specified</p>
    }
}

/** Container for the selected page's content
 * 
 * @returns a container holding the selected page
 */
const ContentRouter = () => {
    const [page,setPage] = useRecoilState(pageState)

    return (
        <div className='absolute right-0 w-8/12 mr-10 md:w-10/12 lg:w-11/12 lg:mr-4 md:mr-8 p-2 transition-all'>
            <GeneratePage page={page}/>
        </div>
    )
}

export default ContentRouter;