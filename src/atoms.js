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
export const user = atom({
    key: 'user',
    default: {
        first:'Devin',
        last:'OBrien'
    },
    effects_UNSTABLE: [persistAtom],
});