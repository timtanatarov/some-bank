import { setupWorker } from 'msw';

import { userServiceHandlers } from './userServiceHandlers';
import { infoHandlers } from './infoHandlers';
import { creditHandlers } from './creditHandlers';
import { depositHandlers } from './depositHandlers';

export const worker = setupWorker(...userServiceHandlers, ...infoHandlers, ...creditHandlers, ...depositHandlers);
