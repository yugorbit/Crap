import { ErrorMapper } from "utils/ErrorMapper";
import { isMyRoom } from "@open-screeps/is-my-room";
import { roomManager } from "routines/roomManager";
import { forEach } from "lodash";

declare global {
}

// When compiling TS to JS and bundling with rollup, the line numbers and file names in error messages change
// This utility uses source maps to get the line numbers and file names of the original, TS source code
export const loop = ErrorMapper.wrapLoop(() => {
  console.log(`-----[ ${Game.time} ]-----`);
  Object.keys(Game.rooms).forEach((element) => {
    roomManager(element);
  });
});
