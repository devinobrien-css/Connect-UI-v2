import { useRecoilState } from "recoil"
import { userState } from '../../atoms.js'
import DashboardPortal from './dashboard_portal'

/** Header of Dashboard
 * 
 * @returns 
 */
const DashboardHeader = () => {
    const [user,setUser] = useRecoilState(userState)

    console.log(user)
    return (
        <div className='bg-gray-900 rounded-xl w-full py-3 px-2'>
            <p className='text-gray-100 text-2xl'>Hello there, {user.first}</p>
        </div>
    )
}

/** Launches the dashboard
 * 
 * @returns the content of the dashboard page
 */
const Dashboard = () => {

    return (
        <>
            <DashboardHeader />
            <DashboardPortal />
        </>
    )
}




export default Dashboard;