
StructureSpawn.prototype.spawnCreepsIfNecessary = function() {
  const room = this.room;
  const creepsInRoom = room.find(FIND_MY_CREEPS);
  let numberOfCreeps = {};

  let resource = this.room.find(FIND_SOURCES);
  let terrain = new Room.Terrain(this.room.name);
  resource.forEach((element, index) => {
    let resourcePosX = element.pos.x;
    let resourcePosY = element.pos.y;
    let countAvailableResource = 0;
    for (let x = resourcePosX - 1; x <= resourcePosX + 1; x++) {
      for (let y = resourcePosY - 1; y <= resourcePosY + 1; y++) {
        if (terrain.get(x, y) != TERRAIN_MASK_WALL) {
          countAvailableResource++;
        }
      }
    }
    this.memory.RoomMemory.AvailableResources.add(countAvailableResource);
  });
}
