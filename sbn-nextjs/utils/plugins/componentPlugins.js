//  Import utils.

//  Icons.
import { BsSun, BsFillMoonStarsFill } from "react-icons/bs";


//  togglePlugins: check mode for plugins and return
//  icon mode.
const togglePlugins = (mode, style) => {
    return !mode ? (
        <BsSun size={25} />
    ) : (
        <BsFillMoonStarsFill size={25} className={`${style}`}/>
    );
};


//  Export plugins.
export { togglePlugins }