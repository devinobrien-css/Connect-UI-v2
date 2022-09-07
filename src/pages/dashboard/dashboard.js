






const DashboardHeader = () => {
    //will change to getAuth function 
    const user = {
        first:'Devin',
        last:'OBrien'
    }


    return (
        <div className='bg-gray-900 rounded-xl w-full py-3 px-2'>
            <p className='text-gray-100 text-2xl'>Hello there, {user.first}</p>

        </div>
    )
}


const DashboardPortal = () => {
    return (
        <></>
    )
}


/** Launches the dashboard
 * 
 * @returns the content of the dashboard page
 */
const Dashboard = () => {
    
    


    return (
        <DashboardHeader />
    )
}




export default Dashboard;