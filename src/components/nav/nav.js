import { useState } from "react";
import { useRecoilState } from "recoil";

const styles = {
    'nav-button':''

}
    
const Nav = () => {
    const [textVisible,setTextVisible] = useState(false)
    const [page,setPage] = useRecoilState()


    return (
        <div className="absolute left-0 bg-gray-800 flex no-wrap">
            <div className={styles['nav-button']}>
                <p>LOGO</p>
                <p className={textVisible ? '' : 'hidden'}>{args.title}</p>
            </div> 

        </div>


    )
}