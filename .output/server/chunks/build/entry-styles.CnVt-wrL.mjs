import { a as buildAssetsURL } from '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'devalue';
import 'vue/server-renderer';
import '@unhead/ssr';
import 'vue';
import 'unhead';
import '@unhead/shared';

const resetCss = "*{border:none;margin:0;padding:0}*,:after,:before{box-sizing:border-box}a,a:hover,a:link,a:visited{text-decoration:none}aside,footer,header,main,nav,section{display:block}h1,h2,h3,h4,h5,h6,p{font-size:inherit;font-weight:inherit}ul,ul li{list-style:none}img{vertical-align:top}img,svg{height:auto;max-width:100%}address{font-style:normal}button,input,select,textarea{background-color:transparent;color:inherit;font-family:inherit;font-size:inherit}input::-ms-clear{display:none}button,input[type=submit]{background:transparent none;box-shadow:none;cursor:pointer;display:inline-block}button:active,button:focus,input:active,input:focus{outline:none}button::-moz-focus-inner{border:0;padding:0}label{cursor:pointer}legend{display:block}";

const fonts = "@font-face{font-family:Comfortaa;font-style:normal;font-weight:400;src:url(" + buildAssetsURL("Comfortaa-VariableFont_wght.BH_kBfim.ttf") + ') format("truetype")}@font-face{font-family:Geologica;font-style:normal;font-weight:400;src:url(' + buildAssetsURL("Manrope-VariableFont_wght.CZfUxJDf.ttf") + ') format("truetype")}@font-face{font-family:Manrope;font-style:normal;font-weight:400;src:url(' + buildAssetsURL("Manrope-VariableFont_wght.CZfUxJDf.ttf") + ') format("truetype")}@font-face{font-family:Manrope-Light;font-style:normal;font-weight:400;src:url(' + buildAssetsURL("Manrope-VariableFont_wght.CZfUxJDf.ttf") + ') format("truetype")}';

const entryStyles_CnVtWrL = [resetCss, fonts];

export { entryStyles_CnVtWrL as default };
//# sourceMappingURL=entry-styles.CnVt-wrL.mjs.map
