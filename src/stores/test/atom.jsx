import { atom } from "recoil";

const textState = atom({
    key: "textState",
    default: ["atom", "babel", "caches", "debugger", "effects"],
});

export default textState;
