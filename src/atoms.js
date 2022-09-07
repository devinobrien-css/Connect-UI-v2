import { atom } from "recoil";
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

/* Controls current page
 */
const pageState = atom({
    key: 'pageState',
    default: "profile",
    effects_UNSTABLE: [persistAtom],
});