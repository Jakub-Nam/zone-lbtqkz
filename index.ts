import 'zone.js';

import {a as stack} from './callstack';
stack(); 

import {zoneAC, a as afunc_zone_run} from './zone_run';
zoneAC.run(afunc_zone_run);

import {a as afunc } from './function_zone';
afunc();

import {a as aSetTimeout} from './setTimeout';
aSetTimeout();

import './propagate_context';

import './onHasTask';

import './onHasTask_TaskQueue';

import './onScheduleTask_onInvokeTask';

import './onInvoke';