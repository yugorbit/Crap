function roomSourceEnergyCount() {

  return 1;
}

export function roomManager(roomName: string) {
  const terrain = Game.map.getRoomTerrain(roomName);
  let resource = Game.rooms[roomName].find(FIND_SOURCES);
  let countAvailableResource = 0;
  resource.forEach((element) => {
    let resourcePosX = element.pos.x;
    let resourcePosY = element.pos.y;
    for (let x = resourcePosX - 1; x <= resourcePosX + 1; x++) {
      for (let y = resourcePosY - 1; y <= resourcePosY + 1; y++) {
        if (terrain.get(x, y) != TERRAIN_MASK_WALL) {
          countAvailableResource++;
        }
      }
    }
  });
  if(typeof Memory.rooms === "undefined") {
    Memory.rooms = {};
  }
  if(typeof Memory.rooms[roomName] === "undefined") {
    Memory.rooms[roomName] = {};
    Memory.rooms[roomName].availableResource = countAvailableResource;
  }

}
