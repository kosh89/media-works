import {ieFix} from './utils/ie-fix';
import {iosVhFix} from './utils/ios-vh-fix';
import './modules/modal';
import {modal} from './modules/modal';

// Utils
// ---------------------------------

ieFix();
iosVhFix();

// Modules
// ---------------------------------
modal();
