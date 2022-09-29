"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DBIEvent = void 0;
class DBIEvent {
    type;
    other;
    id;
    name;
    onExecute;
    ordered;
    dbi;
    constructor(dbi, cfg) {
        this.dbi = dbi;
        this.type = "Event";
        this.id = cfg.id;
        this.other = cfg.other;
        this.name = cfg.name;
        this.onExecute = cfg.onExecute;
        this.ordered = cfg.ordered ?? false;
    }
}
exports.DBIEvent = DBIEvent;
//# sourceMappingURL=Event.js.map