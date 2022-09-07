import { useRecoilState } from "recoil";
import { pageState } from '../../atoms.js'
import { jahnelLogo,dashboardLogo,exploreLogo } from "./logos";

/** Holds redundant styling for navigation components
 */
const styles = {
    'nav-button':'text-white hover:bg-gray-600 p-1 rounded h-fit  p-3',
    'nav-tooltip':'shadow-lg inline-block absolute invisible z-10 py-2 transform-x-4 px-3 text-sm font-medium text-white bg-gray-700 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-600'
}

/** Controls page routing
 * 
 * @returns the main navigation bar
 */
const Nav = () => {
    const [page,setPage] = useRecoilState(pageState)

    /** Sets styles for selected page
     * 
     * @param {str} checkPage value to compare against current page
     * @returns the styles of a selected tab clicked
     */
    function isSelected(checkPage){
        if(checkPage === page)
            return ' bg-gray-600 dark:bg-gray-900 '
        return ''
    }

    return (
        <nav className="absolute left-0 bg-gray-800 flex flex-col min-h-screen p-4">
            <div className='mx-auto'>
                {jahnelLogo}
            </div>

            <button 
                onClick={() => setPage('dashboard')}
                data-tooltip-target="dashboard" 
                data-tooltip-placement="right" 
                type="button" 
                className={styles['nav-button'] + isSelected('dashboard')}
            >
                {dashboardLogo}
            </button>
            <div id="dashboard" role="tooltip" className={styles['nav-tooltip']}>
                Dashboard
                <div className="tooltip-arrow" data-popper-arrow></div>
            </div>

            <button 
                onClick={() => setPage('explore')}
                data-tooltip-target="explore" 
                data-tooltip-placement="right" 
                type="button" 
                className={styles['nav-button'] + isSelected('explore')}
            >
                {exploreLogo}
            </button>
            <div id="explore" role="tooltip"  className={styles['nav-tooltip']}>
                Explore
                <div className="tooltip-arrow" data-popper-arrow></div>
            </div>
        </nav>
    )
}

export default Nav;