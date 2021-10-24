//  Import utils.

//  Icons.
import { BsFillMoonStarsFill } from "react-icons/bs";
import { FaSun } from "react-icons/fa";

//  togglePlugins: check mode for plugins and return
//  icon mode.
const togglePlugins = (mode, style) => {
    return !mode ? (
        <FaSun size={25} />
    ) : (
        <BsFillMoonStarsFill size={25} className={`${style}`}/>
    );
};


//  Export plugins.
export { togglePlugins }