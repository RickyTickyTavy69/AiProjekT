import {IconName} from "./assets.types.ts";
import SVG from 'react-inlinesvg';

const DynamicIconImport = (name? : IconName) => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const url = new URL(`./icons/${name}.svg`, import.meta.url).href;
    // const dynamicIconImport = require(`./${props.name}.svg`);
    return <SVG height={20} width={20} src={url} />;
}

export default DynamicIconImport;