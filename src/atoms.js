import { atom } from "recoil";
import { recoilPersist } from 'recoil-persist'
const { persistAtom } = recoilPersist()

/** Page state atom - specifies the current page to route to
 */
export const pageState = atom({
    key: 'pageState',
    default: "dashboard",
    effects_UNSTABLE: [persistAtom],
});

/** Dark mode atom - toggles the dark mode state
 */
export const darkMode = atom({
    key: 'darkMode',
    default: "light",
    effects_UNSTABLE: [persistAtom],
});

/** User Atom - holds credentials of currently logged in user
 */
export const userState = atom({
    key: 'userState',
    default: {
        "first":"Devin",
        "last":"O'Brien"
    },
    effects_UNSTABLE: [persistAtom],
});


/** Dashboard Post State Atom - holds currently viewed posts
 */
 export const dashboardPostState = atom({
    key: 'postState',
    default: 'recents',
    effects_UNSTABLE: [persistAtom],
});
