import {IconName} from "./assets.types.ts";
import SVG from 'react-inlinesvg';

const DynamicIconImport = (name? : IconName) => {
    const url = new URL(`./icons/${name}.svg`, import.meta.url).href;
    return <SVG height={20} width={20} src={url} />;
}

export default DynamicIconImport;