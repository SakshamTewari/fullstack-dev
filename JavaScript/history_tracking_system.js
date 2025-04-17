/*
Concurrent history tracking system where an entity and its different services can be registered
and changes being made to them can be tracked.

    - like Google drive, where entity like google docs and multiple services(docs) inside that.
      and each service will have its own historical record.

    - use map
    - singleton design to make sure that one instance is used for tracking.

*/

class HistoryTrackingSystem {
  constructor() {
    this.entities = new Map(); // track unique entities and their services
  }

  registerEntity(entity) {
    this.entities.set(entity, {});
  }

  registerService(entity, service) {
    // register service to the entity
    const existingServices = this.entities.get(entity);
    if (!existingServices) {
      // if entity is not present, create a new entity with a service
      this.entities.set(entity, { [service]: [] });
    } else {
      // else add the servuce to existing entity
      this.entities.set(entity, { ...existingServices, [service]: [] });
    }
  }
  // track history of entity and its service
  trackChange(entity, service, newData) {
    const services = this.entities.get(entity); // get services of entity
    const history = services[service]; // get histories of that service
    const last = history[history.length - 1]; // get last history of that service

    if (!last) {
      // if no previous history, add new data
      const serviceWithNewHistory = { ...services, [service]: [newData] };
      this.entities.set(entity, serviceWithNewHistory);
    } else {
      // else compare new one with last one, if both different, make a new entry
      const lastStr = JSON.stringify(last);
      const newDataStr = JSON.stringify(newData);

      if (lastStr !== newDataStr) {
        const serviceWithNewHistory = {
          ...services,
          [service]: [...history, newData],
        };
        this.entities.set(entity, serviceWithNewHistory);
      }
    }
  }
  // get complete history
  getHistory(entity, service) {
    const services = this.entities.get(entity);
    return services[service];
  }
}

//Create single instance of the tracking using singleton design pattern
const HistoryTracking = (function () {
  let instance;

  return function () {
    if (!instance) {
      instance = new HistoryTrackingSystem();
    }
    return instance;
  };
})();

//Test
const historyTracking = HistoryTracking();
historyTracking.registerEntity('document');
historyTracking.registerService('document', 'JavaScript Test');
historyTracking.trackChange('document', 'JavaScript Test', 'Problem 1');
historyTracking.trackChange('document', 'JavaScript Test', 'Problem 2');
historyTracking.trackChange('document', 'JavaScript Test', 'Problem 3');

console.log(historyTracking.getHistory('document', 'JavaScript Test'));
