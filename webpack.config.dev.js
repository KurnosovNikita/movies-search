/*
* Webpack dev config
* */

import { WEBPACK_MODE_DEV } from './environment';

const devConfig = {
    mode: WEBPACK_MODE_DEV,
    watch: true
};

export default devConfig;
