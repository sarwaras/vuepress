import "./chunk-NRPQOLJN.js";

// node_modules/tsparticles-engine/esm/Utils/EventDispatcher.js
var __classPrivateFieldSet = function(receiver, state, value, kind, f) {
  if (kind === "m")
    throw new TypeError("Private method is not writable");
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet = function(receiver, state, kind, f) {
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _EventDispatcher_listeners;
var EventDispatcher = class {
  constructor() {
    _EventDispatcher_listeners.set(this, void 0);
    __classPrivateFieldSet(this, _EventDispatcher_listeners, /* @__PURE__ */ new Map(), "f");
  }
  addEventListener(type, listener) {
    var _a;
    this.removeEventListener(type, listener);
    if (!__classPrivateFieldGet(this, _EventDispatcher_listeners, "f").get(type)) {
      __classPrivateFieldGet(this, _EventDispatcher_listeners, "f").set(type, []);
    }
    (_a = __classPrivateFieldGet(this, _EventDispatcher_listeners, "f").get(type)) === null || _a === void 0 ? void 0 : _a.push(listener);
  }
  removeEventListener(type, listener) {
    const arr = __classPrivateFieldGet(this, _EventDispatcher_listeners, "f").get(type);
    if (!arr) {
      return;
    }
    const length = arr.length, idx = arr.indexOf(listener);
    if (idx < 0) {
      return;
    }
    if (length === 1) {
      __classPrivateFieldGet(this, _EventDispatcher_listeners, "f").delete(type);
    } else {
      arr.splice(idx, 1);
    }
  }
  removeAllEventListeners(type) {
    if (!type) {
      __classPrivateFieldSet(this, _EventDispatcher_listeners, /* @__PURE__ */ new Map(), "f");
    } else {
      __classPrivateFieldGet(this, _EventDispatcher_listeners, "f").delete(type);
    }
  }
  dispatchEvent(type, args) {
    var _a;
    (_a = __classPrivateFieldGet(this, _EventDispatcher_listeners, "f").get(type)) === null || _a === void 0 ? void 0 : _a.forEach((handler) => handler(args));
  }
  hasEventListener(type) {
    return !!__classPrivateFieldGet(this, _EventDispatcher_listeners, "f").get(type);
  }
};
_EventDispatcher_listeners = /* @__PURE__ */ new WeakMap();

// node_modules/tsparticles-engine/esm/Core/Utils/Vector.js
var Vector = class {
  constructor(xOrCoords, y) {
    if (typeof xOrCoords !== "number" && xOrCoords) {
      this.x = xOrCoords.x;
      this.y = xOrCoords.y;
    } else if (xOrCoords !== void 0 && y !== void 0) {
      this.x = xOrCoords;
      this.y = y;
    } else {
      throw new Error("tsParticles - Vector not initialized correctly");
    }
  }
  static clone(source) {
    return Vector.create(source.x, source.y);
  }
  static create(x, y) {
    return new Vector(x, y);
  }
  static get origin() {
    return Vector.create(0, 0);
  }
  get angle() {
    return Math.atan2(this.y, this.x);
  }
  set angle(angle) {
    this.updateFromAngle(angle, this.length);
  }
  get length() {
    return Math.sqrt(this.getLengthSq());
  }
  set length(length) {
    this.updateFromAngle(this.angle, length);
  }
  add(v) {
    return Vector.create(this.x + v.x, this.y + v.y);
  }
  addTo(v) {
    this.x += v.x;
    this.y += v.y;
  }
  sub(v) {
    return Vector.create(this.x - v.x, this.y - v.y);
  }
  subFrom(v) {
    this.x -= v.x;
    this.y -= v.y;
  }
  mult(n) {
    return Vector.create(this.x * n, this.y * n);
  }
  multTo(n) {
    this.x *= n;
    this.y *= n;
  }
  div(n) {
    return Vector.create(this.x / n, this.y / n);
  }
  divTo(n) {
    this.x /= n;
    this.y /= n;
  }
  distanceTo(v) {
    return this.sub(v).length;
  }
  getLengthSq() {
    return this.x ** 2 + this.y ** 2;
  }
  distanceToSq(v) {
    return this.sub(v).getLengthSq();
  }
  manhattanDistanceTo(v) {
    return Math.abs(v.x - this.x) + Math.abs(v.y - this.y);
  }
  copy() {
    return Vector.clone(this);
  }
  setTo(v) {
    this.x = v.x;
    this.y = v.y;
  }
  rotate(angle) {
    return Vector.create(this.x * Math.cos(angle) - this.y * Math.sin(angle), this.x * Math.sin(angle) + this.y * Math.cos(angle));
  }
  updateFromAngle(angle, length) {
    this.x = Math.cos(angle) * length;
    this.y = Math.sin(angle) * length;
  }
};

// node_modules/tsparticles-engine/esm/Utils/NumberUtils.js
function clamp(num, min, max) {
  return Math.min(Math.max(num, min), max);
}
function mix(comp1, comp2, weight1, weight2) {
  return Math.floor((comp1 * weight1 + comp2 * weight2) / (weight1 + weight2));
}
function randomInRange(r) {
  const max = getRangeMax(r);
  let min = getRangeMin(r);
  if (max === min) {
    min = 0;
  }
  return Math.random() * (max - min) + min;
}
function getRangeValue(value) {
  return typeof value === "number" ? value : randomInRange(value);
}
function getRangeMin(value) {
  return typeof value === "number" ? value : value.min;
}
function getRangeMax(value) {
  return typeof value === "number" ? value : value.max;
}
function setRangeValue(source, value) {
  if (source === value || value === void 0 && typeof source === "number") {
    return source;
  }
  const min = getRangeMin(source), max = getRangeMax(source);
  return value !== void 0 ? {
    min: Math.min(min, value),
    max: Math.max(max, value)
  } : setRangeValue(min, max);
}
function getValue(options) {
  const random = options.random, { enable, minimumValue } = typeof random === "boolean" ? {
    enable: random,
    minimumValue: 0
  } : random;
  return enable ? getRangeValue(setRangeValue(options.value, minimumValue)) : getRangeValue(options.value);
}
function getDistances(pointA, pointB) {
  const dx = pointA.x - pointB.x, dy = pointA.y - pointB.y;
  return { dx, dy, distance: Math.sqrt(dx * dx + dy * dy) };
}
function getDistance(pointA, pointB) {
  return getDistances(pointA, pointB).distance;
}
function getParticleDirectionAngle(direction, position, center) {
  if (typeof direction === "number") {
    return direction * Math.PI / 180;
  } else {
    switch (direction) {
      case "top":
        return -Math.PI / 2;
      case "top-right":
        return -Math.PI / 4;
      case "right":
        return 0;
      case "bottom-right":
        return Math.PI / 4;
      case "bottom":
        return Math.PI / 2;
      case "bottom-left":
        return 3 * Math.PI / 4;
      case "left":
        return Math.PI;
      case "top-left":
        return -3 * Math.PI / 4;
      case "inside":
        return Math.atan2(center.y - position.y, center.x - position.x);
      case "outside":
        return Math.atan2(position.y - center.y, position.x - center.x);
      case "none":
      default:
        return Math.random() * Math.PI * 2;
    }
  }
}
function getParticleBaseVelocity(direction) {
  const baseVelocity = Vector.origin;
  baseVelocity.length = 1;
  baseVelocity.angle = direction;
  return baseVelocity;
}
function collisionVelocity(v1, v2, m1, m2) {
  return Vector.create(v1.x * (m1 - m2) / (m1 + m2) + v2.x * 2 * m2 / (m1 + m2), v1.y);
}
function calcEasing(value, type) {
  switch (type) {
    case "ease-out-quad":
      return 1 - (1 - value) ** 2;
    case "ease-out-cubic":
      return 1 - (1 - value) ** 3;
    case "ease-out-quart":
      return 1 - (1 - value) ** 4;
    case "ease-out-quint":
      return 1 - (1 - value) ** 5;
    case "ease-out-expo":
      return value === 1 ? 1 : 1 - Math.pow(2, -10 * value);
    case "ease-out-sine":
      return Math.sin(value * Math.PI / 2);
    case "ease-out-back": {
      const c1 = 1.70158, c3 = c1 + 1;
      return 1 + c3 * Math.pow(value - 1, 3) + c1 * Math.pow(value - 1, 2);
    }
    case "ease-out-circ":
      return Math.sqrt(1 - Math.pow(value - 1, 2));
    default:
      return value;
  }
}
function calcPositionFromSize(data) {
  var _a, _b;
  return ((_a = data.position) === null || _a === void 0 ? void 0 : _a.x) !== void 0 && ((_b = data.position) === null || _b === void 0 ? void 0 : _b.y) !== void 0 ? {
    x: data.position.x * data.size.width / 100,
    y: data.position.y * data.size.height / 100
  } : void 0;
}
function calcPositionOrRandomFromSize(data) {
  var _a, _b, _c, _d;
  return {
    x: ((_b = (_a = data.position) === null || _a === void 0 ? void 0 : _a.x) !== null && _b !== void 0 ? _b : Math.random() * 100) * data.size.width / 100,
    y: ((_d = (_c = data.position) === null || _c === void 0 ? void 0 : _c.y) !== null && _d !== void 0 ? _d : Math.random() * 100) * data.size.height / 100
  };
}
function calcPositionOrRandomFromSizeRanged(data) {
  var _a, _b;
  const position = {
    x: ((_a = data.position) === null || _a === void 0 ? void 0 : _a.x) !== void 0 ? getRangeValue(data.position.x) : void 0,
    y: ((_b = data.position) === null || _b === void 0 ? void 0 : _b.y) !== void 0 ? getRangeValue(data.position.y) : void 0
  };
  return calcPositionOrRandomFromSize({ size: data.size, position });
}
function calcExactPositionOrRandomFromSize(data) {
  var _a, _b, _c, _d;
  return {
    x: (_b = (_a = data.position) === null || _a === void 0 ? void 0 : _a.x) !== null && _b !== void 0 ? _b : Math.random() * data.size.width,
    y: (_d = (_c = data.position) === null || _c === void 0 ? void 0 : _c.y) !== null && _d !== void 0 ? _d : Math.random() * data.size.height
  };
}

// node_modules/tsparticles-engine/esm/Options/Classes/OptionsColor.js
var OptionsColor = class {
  constructor() {
    this.value = "";
  }
  static create(source, data) {
    const color = new OptionsColor();
    color.load(source);
    if (data !== void 0) {
      if (typeof data === "string" || data instanceof Array) {
        color.load({ value: data });
      } else {
        color.load(data);
      }
    }
    return color;
  }
  load(data) {
    if ((data === null || data === void 0 ? void 0 : data.value) === void 0) {
      return;
    }
    this.value = data.value;
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/Background/Background.js
var Background = class {
  constructor() {
    this.color = new OptionsColor();
    this.color.value = "";
    this.image = "";
    this.position = "";
    this.repeat = "";
    this.size = "";
    this.opacity = 1;
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.color !== void 0) {
      this.color = OptionsColor.create(this.color, data.color);
    }
    if (data.image !== void 0) {
      this.image = data.image;
    }
    if (data.position !== void 0) {
      this.position = data.position;
    }
    if (data.repeat !== void 0) {
      this.repeat = data.repeat;
    }
    if (data.size !== void 0) {
      this.size = data.size;
    }
    if (data.opacity !== void 0) {
      this.opacity = data.opacity;
    }
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/BackgroundMask/BackgroundMaskCover.js
var BackgroundMaskCover = class {
  constructor() {
    this.color = new OptionsColor();
    this.color.value = "#fff";
    this.opacity = 1;
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.color !== void 0) {
      this.color = OptionsColor.create(this.color, data.color);
    }
    if (data.opacity !== void 0) {
      this.opacity = data.opacity;
    }
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/BackgroundMask/BackgroundMask.js
var BackgroundMask = class {
  constructor() {
    this.composite = "destination-out";
    this.cover = new BackgroundMaskCover();
    this.enable = false;
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.composite !== void 0) {
      this.composite = data.composite;
    }
    if (data.cover !== void 0) {
      const cover = data.cover;
      const color = typeof data.cover === "string" ? { color: data.cover } : data.cover;
      this.cover.load(cover.color !== void 0 ? cover : { color });
    }
    if (data.enable !== void 0) {
      this.enable = data.enable;
    }
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/FullScreen/FullScreen.js
var FullScreen = class {
  constructor() {
    this.enable = true;
    this.zIndex = 0;
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.enable !== void 0) {
      this.enable = data.enable;
    }
    if (data.zIndex !== void 0) {
      this.zIndex = data.zIndex;
    }
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/Interactivity/Events/ClickEvent.js
var ClickEvent = class {
  constructor() {
    this.enable = false;
    this.mode = [];
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.enable !== void 0) {
      this.enable = data.enable;
    }
    if (data.mode !== void 0) {
      this.mode = data.mode;
    }
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/Interactivity/Events/DivEvent.js
var DivEvent = class {
  constructor() {
    this.selectors = [];
    this.enable = false;
    this.mode = [];
    this.type = "circle";
  }
  get elementId() {
    return this.ids;
  }
  set elementId(value) {
    this.ids = value;
  }
  get el() {
    return this.elementId;
  }
  set el(value) {
    this.elementId = value;
  }
  get ids() {
    return this.selectors instanceof Array ? this.selectors.map((t) => t.replace("#", "")) : this.selectors.replace("#", "");
  }
  set ids(value) {
    this.selectors = value instanceof Array ? value.map((t) => `#${t}`) : `#${value}`;
  }
  load(data) {
    var _a, _b;
    if (!data) {
      return;
    }
    const ids = (_b = (_a = data.ids) !== null && _a !== void 0 ? _a : data.elementId) !== null && _b !== void 0 ? _b : data.el;
    if (ids !== void 0) {
      this.ids = ids;
    }
    if (data.selectors !== void 0) {
      this.selectors = data.selectors;
    }
    if (data.enable !== void 0) {
      this.enable = data.enable;
    }
    if (data.mode !== void 0) {
      this.mode = data.mode;
    }
    if (data.type !== void 0) {
      this.type = data.type;
    }
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/Interactivity/Events/Parallax.js
var Parallax = class {
  constructor() {
    this.enable = false;
    this.force = 2;
    this.smooth = 10;
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.enable !== void 0) {
      this.enable = data.enable;
    }
    if (data.force !== void 0) {
      this.force = data.force;
    }
    if (data.smooth !== void 0) {
      this.smooth = data.smooth;
    }
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/Interactivity/Events/HoverEvent.js
var HoverEvent = class {
  constructor() {
    this.enable = false;
    this.mode = [];
    this.parallax = new Parallax();
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.enable !== void 0) {
      this.enable = data.enable;
    }
    if (data.mode !== void 0) {
      this.mode = data.mode;
    }
    this.parallax.load(data.parallax);
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/Interactivity/Events/Events.js
var Events = class {
  constructor() {
    this.onClick = new ClickEvent();
    this.onDiv = new DivEvent();
    this.onHover = new HoverEvent();
    this.resize = true;
  }
  get onclick() {
    return this.onClick;
  }
  set onclick(value) {
    this.onClick = value;
  }
  get ondiv() {
    return this.onDiv;
  }
  set ondiv(value) {
    this.onDiv = value;
  }
  get onhover() {
    return this.onHover;
  }
  set onhover(value) {
    this.onHover = value;
  }
  load(data) {
    var _a, _b, _c;
    if (!data) {
      return;
    }
    this.onClick.load((_a = data.onClick) !== null && _a !== void 0 ? _a : data.onclick);
    const onDiv = (_b = data.onDiv) !== null && _b !== void 0 ? _b : data.ondiv;
    if (onDiv !== void 0) {
      if (onDiv instanceof Array) {
        this.onDiv = onDiv.map((div) => {
          const tmp = new DivEvent();
          tmp.load(div);
          return tmp;
        });
      } else {
        this.onDiv = new DivEvent();
        this.onDiv.load(onDiv);
      }
    }
    this.onHover.load((_c = data.onHover) !== null && _c !== void 0 ? _c : data.onhover);
    if (data.resize !== void 0) {
      this.resize = data.resize;
    }
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/Interactivity/Modes/Attract.js
var Attract = class {
  constructor() {
    this.distance = 200;
    this.duration = 0.4;
    this.easing = "ease-out-quad";
    this.factor = 1;
    this.maxSpeed = 50;
    this.speed = 1;
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.distance !== void 0) {
      this.distance = data.distance;
    }
    if (data.duration !== void 0) {
      this.duration = data.duration;
    }
    if (data.easing !== void 0) {
      this.easing = data.easing;
    }
    if (data.factor !== void 0) {
      this.factor = data.factor;
    }
    if (data.maxSpeed !== void 0) {
      this.maxSpeed = data.maxSpeed;
    }
    if (data.speed !== void 0) {
      this.speed = data.speed;
    }
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/Interactivity/Modes/Bounce.js
var Bounce = class {
  constructor() {
    this.distance = 200;
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.distance !== void 0) {
      this.distance = data.distance;
    }
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/Interactivity/Modes/BubbleBase.js
var BubbleBase = class {
  constructor() {
    this.distance = 200;
    this.duration = 0.4;
    this.mix = false;
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.distance !== void 0) {
      this.distance = data.distance;
    }
    if (data.duration !== void 0) {
      this.duration = data.duration;
    }
    if (data.mix !== void 0) {
      this.mix = data.mix;
    }
    if (data.opacity !== void 0) {
      this.opacity = data.opacity;
    }
    if (data.color !== void 0) {
      if (data.color instanceof Array) {
        this.color = data.color.map((s) => OptionsColor.create(void 0, s));
      } else {
        if (this.color instanceof Array) {
          this.color = new OptionsColor();
        }
        this.color = OptionsColor.create(this.color, data.color);
      }
    }
    if (data.size !== void 0) {
      this.size = data.size;
    }
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/Interactivity/Modes/BubbleDiv.js
var BubbleDiv = class extends BubbleBase {
  constructor() {
    super();
    this.selectors = [];
  }
  get ids() {
    return this.selectors instanceof Array ? this.selectors.map((t) => t.replace("#", "")) : this.selectors.replace("#", "");
  }
  set ids(value) {
    this.selectors = value instanceof Array ? value.map((t) => `#${t}`) : `#${value}`;
  }
  load(data) {
    super.load(data);
    if (!data) {
      return;
    }
    if (data.ids !== void 0) {
      this.ids = data.ids;
    }
    if (data.selectors !== void 0) {
      this.selectors = data.selectors;
    }
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/Interactivity/Modes/Bubble.js
var Bubble = class extends BubbleBase {
  load(data) {
    super.load(data);
    if (!data) {
      return;
    }
    if (data.divs instanceof Array) {
      this.divs = data.divs.map((s) => {
        const tmp = new BubbleDiv();
        tmp.load(s);
        return tmp;
      });
    } else {
      if (this.divs instanceof Array || !this.divs) {
        this.divs = new BubbleDiv();
      }
      this.divs.load(data.divs);
    }
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/Interactivity/Modes/ConnectLinks.js
var ConnectLinks = class {
  constructor() {
    this.opacity = 0.5;
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.opacity !== void 0) {
      this.opacity = data.opacity;
    }
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/Interactivity/Modes/Connect.js
var Connect = class {
  constructor() {
    this.distance = 80;
    this.links = new ConnectLinks();
    this.radius = 60;
  }
  get line_linked() {
    return this.links;
  }
  set line_linked(value) {
    this.links = value;
  }
  get lineLinked() {
    return this.links;
  }
  set lineLinked(value) {
    this.links = value;
  }
  load(data) {
    var _a, _b;
    if (!data) {
      return;
    }
    if (data.distance !== void 0) {
      this.distance = data.distance;
    }
    this.links.load((_b = (_a = data.links) !== null && _a !== void 0 ? _a : data.lineLinked) !== null && _b !== void 0 ? _b : data.line_linked);
    if (data.radius !== void 0) {
      this.radius = data.radius;
    }
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/Interactivity/Modes/GrabLinks.js
var GrabLinks = class {
  constructor() {
    this.blink = false;
    this.consent = false;
    this.opacity = 1;
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.blink !== void 0) {
      this.blink = data.blink;
    }
    if (data.color !== void 0) {
      this.color = OptionsColor.create(this.color, data.color);
    }
    if (data.consent !== void 0) {
      this.consent = data.consent;
    }
    if (data.opacity !== void 0) {
      this.opacity = data.opacity;
    }
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/Interactivity/Modes/Grab.js
var Grab = class {
  constructor() {
    this.distance = 100;
    this.links = new GrabLinks();
  }
  get line_linked() {
    return this.links;
  }
  set line_linked(value) {
    this.links = value;
  }
  get lineLinked() {
    return this.links;
  }
  set lineLinked(value) {
    this.links = value;
  }
  load(data) {
    var _a, _b;
    if (!data) {
      return;
    }
    if (data.distance !== void 0) {
      this.distance = data.distance;
    }
    this.links.load((_b = (_a = data.links) !== null && _a !== void 0 ? _a : data.lineLinked) !== null && _b !== void 0 ? _b : data.line_linked);
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/Interactivity/Modes/LightGradient.js
var LightGradient = class {
  constructor() {
    this.start = new OptionsColor();
    this.stop = new OptionsColor();
    this.start.value = "#ffffff";
    this.stop.value = "#000000";
  }
  load(data) {
    if (!data) {
      return;
    }
    this.start = OptionsColor.create(this.start, data.start);
    this.stop = OptionsColor.create(this.stop, data.stop);
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/Interactivity/Modes/LightArea.js
var LightArea = class {
  constructor() {
    this.gradient = new LightGradient();
    this.radius = 1e3;
  }
  load(data) {
    if (!data) {
      return;
    }
    this.gradient.load(data.gradient);
    if (data.radius !== void 0) {
      this.radius = data.radius;
    }
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/Interactivity/Modes/LightShadow.js
var LightShadow = class {
  constructor() {
    this.color = new OptionsColor();
    this.color.value = "#000000";
    this.length = 2e3;
  }
  load(data) {
    if (!data) {
      return;
    }
    this.color = OptionsColor.create(this.color, data.color);
    if (data.length !== void 0) {
      this.length = data.length;
    }
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/Interactivity/Modes/Light.js
var Light = class {
  constructor() {
    this.area = new LightArea();
    this.shadow = new LightShadow();
  }
  load(data) {
    if (!data) {
      return;
    }
    this.area.load(data.area);
    this.shadow.load(data.shadow);
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/Interactivity/Modes/Push.js
var Push = class {
  constructor() {
    this.default = true;
    this.groups = [];
    this.quantity = 4;
  }
  get particles_nb() {
    return this.quantity;
  }
  set particles_nb(value) {
    this.quantity = value;
  }
  load(data) {
    var _a;
    if (!data) {
      return;
    }
    if (data.default !== void 0) {
      this.default = data.default;
    }
    if (data.groups !== void 0) {
      this.groups = data.groups.map((t) => t);
    }
    if (!this.groups.length) {
      this.default = true;
    }
    const quantity = (_a = data.quantity) !== null && _a !== void 0 ? _a : data.particles_nb;
    if (quantity !== void 0) {
      this.quantity = quantity;
    }
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/Interactivity/Modes/Remove.js
var Remove = class {
  constructor() {
    this.quantity = 2;
  }
  get particles_nb() {
    return this.quantity;
  }
  set particles_nb(value) {
    this.quantity = value;
  }
  load(data) {
    var _a;
    if (!data) {
      return;
    }
    const quantity = (_a = data.quantity) !== null && _a !== void 0 ? _a : data.particles_nb;
    if (quantity !== void 0) {
      this.quantity = quantity;
    }
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/Interactivity/Modes/RepulseBase.js
var RepulseBase = class {
  constructor() {
    this.distance = 200;
    this.duration = 0.4;
    this.factor = 100;
    this.speed = 1;
    this.maxSpeed = 50;
    this.easing = "ease-out-quad";
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.distance !== void 0) {
      this.distance = data.distance;
    }
    if (data.duration !== void 0) {
      this.duration = data.duration;
    }
    if (data.easing !== void 0) {
      this.easing = data.easing;
    }
    if (data.factor !== void 0) {
      this.factor = data.factor;
    }
    if (data.speed !== void 0) {
      this.speed = data.speed;
    }
    if (data.maxSpeed !== void 0) {
      this.maxSpeed = data.maxSpeed;
    }
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/Interactivity/Modes/RepulseDiv.js
var RepulseDiv = class extends RepulseBase {
  constructor() {
    super();
    this.selectors = [];
  }
  get ids() {
    if (this.selectors instanceof Array) {
      return this.selectors.map((t) => t.replace("#", ""));
    } else {
      return this.selectors.replace("#", "");
    }
  }
  set ids(value) {
    if (value instanceof Array) {
      this.selectors = value.map(() => `#${value}`);
    } else {
      this.selectors = `#${value}`;
    }
  }
  load(data) {
    super.load(data);
    if (!data) {
      return;
    }
    if (data.ids !== void 0) {
      this.ids = data.ids;
    }
    if (data.selectors !== void 0) {
      this.selectors = data.selectors;
    }
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/Interactivity/Modes/Repulse.js
var Repulse = class extends RepulseBase {
  load(data) {
    super.load(data);
    if (!data) {
      return;
    }
    if (data.divs instanceof Array) {
      this.divs = data.divs.map((s) => {
        const tmp = new RepulseDiv();
        tmp.load(s);
        return tmp;
      });
    } else {
      if (this.divs instanceof Array || !this.divs) {
        this.divs = new RepulseDiv();
      }
      this.divs.load(data.divs);
    }
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/Interactivity/Modes/Slow.js
var Slow = class {
  constructor() {
    this.factor = 3;
    this.radius = 200;
  }
  get active() {
    return false;
  }
  set active(_value) {
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.factor !== void 0) {
      this.factor = data.factor;
    }
    if (data.radius !== void 0) {
      this.radius = data.radius;
    }
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/Interactivity/Modes/Trail.js
var Trail = class {
  constructor() {
    this.delay = 1;
    this.pauseOnStop = false;
    this.quantity = 1;
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.delay !== void 0) {
      this.delay = data.delay;
    }
    if (data.quantity !== void 0) {
      this.quantity = data.quantity;
    }
    if (data.particles !== void 0) {
      this.particles = deepExtend({}, data.particles);
    }
    if (data.pauseOnStop !== void 0) {
      this.pauseOnStop = data.pauseOnStop;
    }
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/Interactivity/Modes/Modes.js
var Modes = class {
  constructor() {
    this.attract = new Attract();
    this.bounce = new Bounce();
    this.bubble = new Bubble();
    this.connect = new Connect();
    this.grab = new Grab();
    this.light = new Light();
    this.push = new Push();
    this.remove = new Remove();
    this.repulse = new Repulse();
    this.slow = new Slow();
    this.trail = new Trail();
  }
  load(data) {
    if (!data) {
      return;
    }
    this.attract.load(data.attract);
    this.bubble.load(data.bubble);
    this.connect.load(data.connect);
    this.grab.load(data.grab);
    this.light.load(data.light);
    this.push.load(data.push);
    this.remove.load(data.remove);
    this.repulse.load(data.repulse);
    this.slow.load(data.slow);
    this.trail.load(data.trail);
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/Interactivity/Interactivity.js
var Interactivity = class {
  constructor() {
    this.detectsOn = "window";
    this.events = new Events();
    this.modes = new Modes();
  }
  get detect_on() {
    return this.detectsOn;
  }
  set detect_on(value) {
    this.detectsOn = value;
  }
  load(data) {
    var _a, _b, _c;
    if (!data) {
      return;
    }
    const detectsOn = (_a = data.detectsOn) !== null && _a !== void 0 ? _a : data.detect_on;
    if (detectsOn !== void 0) {
      this.detectsOn = detectsOn;
    }
    this.events.load(data.events);
    this.modes.load(data.modes);
    if (((_c = (_b = data.modes) === null || _b === void 0 ? void 0 : _b.slow) === null || _c === void 0 ? void 0 : _c.active) === true) {
      if (this.events.onHover.mode instanceof Array) {
        if (this.events.onHover.mode.indexOf("slow") < 0) {
          this.events.onHover.mode.push("slow");
        }
      } else if (this.events.onHover.mode !== "slow") {
        this.events.onHover.mode = [this.events.onHover.mode, "slow"];
      }
    }
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/ManualParticle.js
var ManualParticle = class {
  load(data) {
    var _a, _b;
    if (!data) {
      return;
    }
    if (data.position !== void 0) {
      this.position = {
        x: (_a = data.position.x) !== null && _a !== void 0 ? _a : 50,
        y: (_b = data.position.y) !== null && _b !== void 0 ? _b : 50
      };
    }
    if (data.options !== void 0) {
      this.options = deepExtend({}, data.options);
    }
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/Motion/MotionReduce.js
var MotionReduce = class {
  constructor() {
    this.factor = 4;
    this.value = true;
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.factor !== void 0) {
      this.factor = data.factor;
    }
    if (data.value !== void 0) {
      this.value = data.value;
    }
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/Motion/Motion.js
var Motion = class {
  constructor() {
    this.disable = false;
    this.reduce = new MotionReduce();
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.disable !== void 0) {
      this.disable = data.disable;
    }
    this.reduce.load(data.reduce);
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/Responsive.js
var Responsive = class {
  constructor() {
    this.maxWidth = Infinity;
    this.options = {};
    this.mode = "canvas";
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.maxWidth !== void 0) {
      this.maxWidth = data.maxWidth;
    }
    if (data.mode !== void 0) {
      if (data.mode === "screen") {
        this.mode = "screen";
      } else {
        this.mode = "canvas";
      }
    }
    if (data.options !== void 0) {
      this.options = deepExtend({}, data.options);
    }
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/Theme/ThemeDefault.js
var ThemeDefault = class {
  constructor() {
    this.auto = false;
    this.mode = "any";
    this.value = false;
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.auto !== void 0) {
      this.auto = data.auto;
    }
    if (data.mode !== void 0) {
      this.mode = data.mode;
    }
    if (data.value !== void 0) {
      this.value = data.value;
    }
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/Theme/Theme.js
var Theme = class {
  constructor() {
    this.name = "";
    this.default = new ThemeDefault();
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.name !== void 0) {
      this.name = data.name;
    }
    this.default.load(data.default);
    if (data.options !== void 0) {
      this.options = deepExtend({}, data.options);
    }
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/Options.js
var __classPrivateFieldSet2 = function(receiver, state, value, kind, f) {
  if (kind === "m")
    throw new TypeError("Private method is not writable");
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet2 = function(receiver, state, kind, f) {
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Options_instances;
var _Options_container;
var _Options_engine;
var _Options_findDefaultTheme;
var Options = class {
  constructor(engine, container) {
    _Options_instances.add(this);
    _Options_container.set(this, void 0);
    _Options_engine.set(this, void 0);
    __classPrivateFieldSet2(this, _Options_engine, engine, "f");
    __classPrivateFieldSet2(this, _Options_container, container, "f");
    this.autoPlay = true;
    this.background = new Background();
    this.backgroundMask = new BackgroundMask();
    this.fullScreen = new FullScreen();
    this.detectRetina = true;
    this.duration = 0;
    this.fpsLimit = 120;
    this.interactivity = new Interactivity();
    this.manualParticles = [];
    this.motion = new Motion();
    this.particles = loadParticlesOptions(__classPrivateFieldGet2(this, _Options_engine, "f"), __classPrivateFieldGet2(this, _Options_container, "f"));
    this.pauseOnBlur = true;
    this.pauseOnOutsideViewport = true;
    this.responsive = [];
    this.style = {};
    this.themes = [];
    this.zLayers = 100;
  }
  get fps_limit() {
    return this.fpsLimit;
  }
  set fps_limit(value) {
    this.fpsLimit = value;
  }
  get retina_detect() {
    return this.detectRetina;
  }
  set retina_detect(value) {
    this.detectRetina = value;
  }
  get backgroundMode() {
    return this.fullScreen;
  }
  set backgroundMode(value) {
    this.fullScreen.load(value);
  }
  load(data) {
    var _a, _b, _c, _d, _e;
    if (!data) {
      return;
    }
    if (data.preset !== void 0) {
      if (data.preset instanceof Array) {
        for (const preset of data.preset) {
          this.importPreset(preset);
        }
      } else {
        this.importPreset(data.preset);
      }
    }
    if (data.autoPlay !== void 0) {
      this.autoPlay = data.autoPlay;
    }
    const detectRetina = (_a = data.detectRetina) !== null && _a !== void 0 ? _a : data.retina_detect;
    if (detectRetina !== void 0) {
      this.detectRetina = detectRetina;
    }
    if (data.duration !== void 0) {
      this.duration = data.duration;
    }
    const fpsLimit = (_b = data.fpsLimit) !== null && _b !== void 0 ? _b : data.fps_limit;
    if (fpsLimit !== void 0) {
      this.fpsLimit = fpsLimit;
    }
    if (data.pauseOnBlur !== void 0) {
      this.pauseOnBlur = data.pauseOnBlur;
    }
    if (data.pauseOnOutsideViewport !== void 0) {
      this.pauseOnOutsideViewport = data.pauseOnOutsideViewport;
    }
    if (data.zLayers !== void 0) {
      this.zLayers = data.zLayers;
    }
    this.background.load(data.background);
    const fullScreen = (_c = data.fullScreen) !== null && _c !== void 0 ? _c : data.backgroundMode;
    if (typeof fullScreen === "boolean") {
      this.fullScreen.enable = fullScreen;
    } else {
      this.fullScreen.load(fullScreen);
    }
    this.backgroundMask.load(data.backgroundMask);
    this.interactivity.load(data.interactivity);
    if (data.manualParticles !== void 0) {
      this.manualParticles = data.manualParticles.map((t) => {
        const tmp = new ManualParticle();
        tmp.load(t);
        return tmp;
      });
    }
    this.motion.load(data.motion);
    this.particles.load(data.particles);
    this.style = deepExtend(this.style, data.style);
    __classPrivateFieldGet2(this, _Options_engine, "f").plugins.loadOptions(this, data);
    if (data.responsive !== void 0) {
      for (const responsive of data.responsive) {
        const optResponsive = new Responsive();
        optResponsive.load(responsive);
        this.responsive.push(optResponsive);
      }
    }
    this.responsive.sort((a, b) => a.maxWidth - b.maxWidth);
    if (data.themes !== void 0) {
      for (const theme of data.themes) {
        const optTheme = new Theme();
        optTheme.load(theme);
        this.themes.push(optTheme);
      }
    }
    this.defaultDarkTheme = (_d = __classPrivateFieldGet2(this, _Options_instances, "m", _Options_findDefaultTheme).call(this, "dark")) === null || _d === void 0 ? void 0 : _d.name;
    this.defaultLightTheme = (_e = __classPrivateFieldGet2(this, _Options_instances, "m", _Options_findDefaultTheme).call(this, "light")) === null || _e === void 0 ? void 0 : _e.name;
  }
  setTheme(name) {
    if (name) {
      const chosenTheme = this.themes.find((theme) => theme.name === name);
      if (chosenTheme) {
        this.load(chosenTheme.options);
      }
    } else {
      const mediaMatch = typeof matchMedia !== "undefined" && matchMedia("(prefers-color-scheme: dark)"), clientDarkMode = mediaMatch && mediaMatch.matches, defaultTheme = __classPrivateFieldGet2(this, _Options_instances, "m", _Options_findDefaultTheme).call(this, clientDarkMode ? "dark" : "light");
      if (defaultTheme) {
        this.load(defaultTheme.options);
      }
    }
  }
  setResponsive(width, pxRatio, defaultOptions) {
    this.load(defaultOptions);
    const responsiveOptions = this.responsive.find((t) => t.mode === "screen" && screen ? t.maxWidth * pxRatio > screen.availWidth : t.maxWidth * pxRatio > width);
    this.load(responsiveOptions === null || responsiveOptions === void 0 ? void 0 : responsiveOptions.options);
    return responsiveOptions === null || responsiveOptions === void 0 ? void 0 : responsiveOptions.maxWidth;
  }
  importPreset(preset) {
    this.load(__classPrivateFieldGet2(this, _Options_engine, "f").plugins.getPreset(preset));
  }
};
_Options_container = /* @__PURE__ */ new WeakMap(), _Options_engine = /* @__PURE__ */ new WeakMap(), _Options_instances = /* @__PURE__ */ new WeakSet(), _Options_findDefaultTheme = function _Options_findDefaultTheme2(mode) {
  var _a;
  return (_a = this.themes.find((theme) => theme.default.value && theme.default.mode === mode)) !== null && _a !== void 0 ? _a : this.themes.find((theme) => theme.default.value && theme.default.mode === "any");
};

// node_modules/tsparticles-engine/esm/Options/Classes/ColorAnimation.js
var ColorAnimation = class {
  constructor() {
    this.count = 0;
    this.enable = false;
    this.offset = 0;
    this.speed = 1;
    this.decay = 0;
    this.sync = true;
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.count !== void 0) {
      this.count = setRangeValue(data.count);
    }
    if (data.enable !== void 0) {
      this.enable = data.enable;
    }
    if (data.offset !== void 0) {
      this.offset = setRangeValue(data.offset);
    }
    if (data.speed !== void 0) {
      this.speed = setRangeValue(data.speed);
    }
    if (data.decay !== void 0) {
      this.decay = setRangeValue(data.decay);
    }
    if (data.sync !== void 0) {
      this.sync = data.sync;
    }
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/HslAnimation.js
var HslAnimation = class {
  constructor() {
    this.h = new ColorAnimation();
    this.s = new ColorAnimation();
    this.l = new ColorAnimation();
  }
  load(data) {
    if (!data) {
      return;
    }
    this.h.load(data.h);
    this.s.load(data.s);
    this.l.load(data.l);
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/AnimatableColor.js
var AnimatableColor = class extends OptionsColor {
  constructor() {
    super();
    this.animation = new HslAnimation();
  }
  static create(source, data) {
    const color = new AnimatableColor();
    color.load(source);
    if (data !== void 0) {
      if (typeof data === "string" || data instanceof Array) {
        color.load({ value: data });
      } else {
        color.load(data);
      }
    }
    return color;
  }
  load(data) {
    super.load(data);
    if (!data) {
      return;
    }
    const colorAnimation = data.animation;
    if (colorAnimation !== void 0) {
      if (colorAnimation.enable !== void 0) {
        this.animation.h.load(colorAnimation);
      } else {
        this.animation.load(data.animation);
      }
    }
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/Gradients/GradientColorOpacityAnimation.js
var GradientColorOpacityAnimation = class {
  constructor() {
    this.count = 0;
    this.enable = false;
    this.speed = 0;
    this.decay = 0;
    this.sync = false;
    this.startValue = "random";
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.count !== void 0) {
      this.count = setRangeValue(data.count);
    }
    if (data.enable !== void 0) {
      this.enable = data.enable;
    }
    if (data.speed !== void 0) {
      this.speed = setRangeValue(data.speed);
    }
    if (data.sync !== void 0) {
      this.sync = data.sync;
    }
    if (data.startValue !== void 0) {
      this.startValue = data.startValue;
    }
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/Gradients/GradientColorOpacity.js
var GradientColorOpacity = class {
  constructor() {
    this.value = 0;
    this.animation = new GradientColorOpacityAnimation();
  }
  load(data) {
    if (!data) {
      return;
    }
    this.animation.load(data.animation);
    if (data.value !== void 0) {
      this.value = setRangeValue(data.value);
    }
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/Gradients/AnimatableGradientColor.js
var AnimatableGradientColor = class {
  constructor() {
    this.stop = 0;
    this.value = new AnimatableColor();
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.stop !== void 0) {
      this.stop = data.stop;
    }
    this.value = AnimatableColor.create(this.value, data.value);
    if (data.opacity !== void 0) {
      this.opacity = new GradientColorOpacity();
      if (typeof data.opacity === "number") {
        this.opacity.value = data.opacity;
      } else {
        this.opacity.load(data.opacity);
      }
    }
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/Gradients/GradientAngleAnimation.js
var GradientAngleAnimation = class {
  constructor() {
    this.count = 0;
    this.enable = false;
    this.speed = 0;
    this.decay = 0;
    this.sync = false;
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.count !== void 0) {
      this.count = setRangeValue(data.count);
    }
    if (data.enable !== void 0) {
      this.enable = data.enable;
    }
    if (data.speed !== void 0) {
      this.speed = setRangeValue(data.speed);
    }
    if (data.decay !== void 0) {
      this.decay = setRangeValue(data.decay);
    }
    if (data.sync !== void 0) {
      this.sync = data.sync;
    }
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/Gradients/GradientAngle.js
var GradientAngle = class {
  constructor() {
    this.value = 0;
    this.animation = new GradientAngleAnimation();
    this.direction = "clockwise";
  }
  load(data) {
    if (!data) {
      return;
    }
    this.animation.load(data.animation);
    if (data.value !== void 0) {
      this.value = data.value;
    }
    if (data.direction !== void 0) {
      this.direction = data.direction;
    }
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/Gradients/AnimatableGradient.js
var AnimatableGradient = class {
  constructor() {
    this.angle = new GradientAngle();
    this.colors = [];
    this.type = "random";
  }
  load(data) {
    if (!data) {
      return;
    }
    this.angle.load(data.angle);
    if (data.colors !== void 0) {
      this.colors = data.colors.map((s) => {
        const tmp = new AnimatableGradientColor();
        tmp.load(s);
        return tmp;
      });
    }
    if (data.type !== void 0) {
      this.type = data.type;
    }
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/Particles/Collisions/CollisionsOverlap.js
var CollisionsOverlap = class {
  constructor() {
    this.enable = true;
    this.retries = 0;
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.enable !== void 0) {
      this.enable = data.enable;
    }
    if (data.retries !== void 0) {
      this.retries = data.retries;
    }
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/Random.js
var Random = class {
  constructor() {
    this.enable = false;
    this.minimumValue = 0;
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.enable !== void 0) {
      this.enable = data.enable;
    }
    if (data.minimumValue !== void 0) {
      this.minimumValue = data.minimumValue;
    }
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/ValueWithRandom.js
var ValueWithRandom = class {
  constructor() {
    this.random = new Random();
    this.value = 0;
  }
  load(data) {
    if (!data) {
      return;
    }
    if (typeof data.random === "boolean") {
      this.random.enable = data.random;
    } else {
      this.random.load(data.random);
    }
    if (data.value !== void 0) {
      this.value = setRangeValue(data.value, this.random.enable ? this.random.minimumValue : void 0);
    }
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/Particles/Bounce/ParticlesBounceFactor.js
var ParticlesBounceFactor = class extends ValueWithRandom {
  constructor() {
    super();
    this.random.minimumValue = 0.1;
    this.value = 1;
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/Particles/Bounce/ParticlesBounce.js
var ParticlesBounce = class {
  constructor() {
    this.horizontal = new ParticlesBounceFactor();
    this.vertical = new ParticlesBounceFactor();
  }
  load(data) {
    if (!data) {
      return;
    }
    this.horizontal.load(data.horizontal);
    this.vertical.load(data.vertical);
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/Particles/Collisions/Collisions.js
var Collisions = class {
  constructor() {
    this.bounce = new ParticlesBounce();
    this.enable = false;
    this.mode = "bounce";
    this.overlap = new CollisionsOverlap();
  }
  load(data) {
    if (!data) {
      return;
    }
    this.bounce.load(data.bounce);
    if (data.enable !== void 0) {
      this.enable = data.enable;
    }
    if (data.mode !== void 0) {
      this.mode = data.mode;
    }
    this.overlap.load(data.overlap);
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/Particles/Destroy/SplitFactor.js
var SplitFactor = class extends ValueWithRandom {
  constructor() {
    super();
    this.value = 3;
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/Particles/Destroy/SplitRate.js
var SplitRate = class extends ValueWithRandom {
  constructor() {
    super();
    this.value = { min: 4, max: 9 };
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/Particles/Destroy/Split.js
var Split = class {
  constructor() {
    this.count = 1;
    this.factor = new SplitFactor();
    this.rate = new SplitRate();
    this.sizeOffset = true;
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.count !== void 0) {
      this.count = data.count;
    }
    this.factor.load(data.factor);
    this.rate.load(data.rate);
    if (data.particles !== void 0) {
      if (data.particles instanceof Array) {
        this.particles = data.particles.map((s) => {
          return deepExtend({}, s);
        });
      } else {
        this.particles = deepExtend({}, data.particles);
      }
    }
    if (data.sizeOffset !== void 0) {
      this.sizeOffset = data.sizeOffset;
    }
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/Particles/Destroy/Destroy.js
var Destroy = class {
  constructor() {
    this.mode = "none";
    this.split = new Split();
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.mode !== void 0) {
      this.mode = data.mode;
    }
    this.split.load(data.split);
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/Particles/Links/LinksShadow.js
var LinksShadow = class {
  constructor() {
    this.blur = 5;
    this.color = new OptionsColor();
    this.color.value = "#000";
    this.enable = false;
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.blur !== void 0) {
      this.blur = data.blur;
    }
    this.color = OptionsColor.create(this.color, data.color);
    if (data.enable !== void 0) {
      this.enable = data.enable;
    }
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/Particles/Links/LinksTriangle.js
var LinksTriangle = class {
  constructor() {
    this.enable = false;
    this.frequency = 1;
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.color !== void 0) {
      this.color = OptionsColor.create(this.color, data.color);
    }
    if (data.enable !== void 0) {
      this.enable = data.enable;
    }
    if (data.frequency !== void 0) {
      this.frequency = data.frequency;
    }
    if (data.opacity !== void 0) {
      this.opacity = data.opacity;
    }
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/Particles/Links/Links.js
var Links = class {
  constructor() {
    this.blink = false;
    this.color = new OptionsColor();
    this.color.value = "#fff";
    this.consent = false;
    this.distance = 100;
    this.enable = false;
    this.frequency = 1;
    this.opacity = 1;
    this.shadow = new LinksShadow();
    this.triangles = new LinksTriangle();
    this.width = 1;
    this.warp = false;
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.id !== void 0) {
      this.id = data.id;
    }
    if (data.blink !== void 0) {
      this.blink = data.blink;
    }
    this.color = OptionsColor.create(this.color, data.color);
    if (data.consent !== void 0) {
      this.consent = data.consent;
    }
    if (data.distance !== void 0) {
      this.distance = data.distance;
    }
    if (data.enable !== void 0) {
      this.enable = data.enable;
    }
    if (data.frequency !== void 0) {
      this.frequency = data.frequency;
    }
    if (data.opacity !== void 0) {
      this.opacity = data.opacity;
    }
    this.shadow.load(data.shadow);
    this.triangles.load(data.triangles);
    if (data.width !== void 0) {
      this.width = data.width;
    }
    if (data.warp !== void 0) {
      this.warp = data.warp;
    }
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/Particles/Move/MoveAngle.js
var MoveAngle = class {
  constructor() {
    this.offset = 0;
    this.value = 90;
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.offset !== void 0) {
      this.offset = setRangeValue(data.offset);
    }
    if (data.value !== void 0) {
      this.value = setRangeValue(data.value);
    }
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/Particles/Move/MoveAttract.js
var MoveAttract = class {
  constructor() {
    this.distance = 200;
    this.enable = false;
    this.rotate = {
      x: 3e3,
      y: 3e3
    };
  }
  get rotateX() {
    return this.rotate.x;
  }
  set rotateX(value) {
    this.rotate.x = value;
  }
  get rotateY() {
    return this.rotate.y;
  }
  set rotateY(value) {
    this.rotate.y = value;
  }
  load(data) {
    var _a, _b, _c, _d;
    if (!data) {
      return;
    }
    if (data.distance !== void 0) {
      this.distance = setRangeValue(data.distance);
    }
    if (data.enable !== void 0) {
      this.enable = data.enable;
    }
    const rotateX = (_b = (_a = data.rotate) === null || _a === void 0 ? void 0 : _a.x) !== null && _b !== void 0 ? _b : data.rotateX;
    if (rotateX !== void 0) {
      this.rotate.x = rotateX;
    }
    const rotateY = (_d = (_c = data.rotate) === null || _c === void 0 ? void 0 : _c.y) !== null && _d !== void 0 ? _d : data.rotateY;
    if (rotateY !== void 0) {
      this.rotate.y = rotateY;
    }
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/Particles/Move/MoveGravity.js
var MoveGravity = class {
  constructor() {
    this.acceleration = 9.81;
    this.enable = false;
    this.inverse = false;
    this.maxSpeed = 50;
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.acceleration !== void 0) {
      this.acceleration = setRangeValue(data.acceleration);
    }
    if (data.enable !== void 0) {
      this.enable = data.enable;
    }
    if (data.inverse !== void 0) {
      this.inverse = data.inverse;
    }
    if (data.maxSpeed !== void 0) {
      this.maxSpeed = setRangeValue(data.maxSpeed);
    }
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/Particles/Move/Path/MovePathDelay.js
var MovePathDelay = class extends ValueWithRandom {
  constructor() {
    super();
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/Particles/Move/Path/MovePath.js
var MovePath = class {
  constructor() {
    this.clamp = true;
    this.delay = new MovePathDelay();
    this.enable = false;
    this.options = {};
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.clamp !== void 0) {
      this.clamp = data.clamp;
    }
    this.delay.load(data.delay);
    if (data.enable !== void 0) {
      this.enable = data.enable;
    }
    this.generator = data.generator;
    if (data.options) {
      this.options = deepExtend(this.options, data.options);
    }
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/Particles/Move/MoveTrail.js
var MoveTrail = class {
  constructor() {
    this.enable = false;
    this.length = 10;
    this.fillColor = new OptionsColor();
    this.fillColor.value = "#000000";
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.enable !== void 0) {
      this.enable = data.enable;
    }
    this.fillColor = OptionsColor.create(this.fillColor, data.fillColor);
    if (data.length !== void 0) {
      this.length = data.length;
    }
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/Particles/Move/OutModes.js
var OutModes = class {
  constructor() {
    this.default = "out";
  }
  load(data) {
    var _a, _b, _c, _d;
    if (!data) {
      return;
    }
    if (data.default !== void 0) {
      this.default = data.default;
    }
    this.bottom = (_a = data.bottom) !== null && _a !== void 0 ? _a : data.default;
    this.left = (_b = data.left) !== null && _b !== void 0 ? _b : data.default;
    this.right = (_c = data.right) !== null && _c !== void 0 ? _c : data.default;
    this.top = (_d = data.top) !== null && _d !== void 0 ? _d : data.default;
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/Particles/Move/Spin.js
var Spin = class {
  constructor() {
    this.acceleration = 0;
    this.enable = false;
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.acceleration !== void 0) {
      this.acceleration = setRangeValue(data.acceleration);
    }
    if (data.enable !== void 0) {
      this.enable = data.enable;
    }
    this.position = data.position ? deepExtend({}, data.position) : void 0;
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/Particles/Move/Move.js
var Move = class {
  constructor() {
    this.angle = new MoveAngle();
    this.attract = new MoveAttract();
    this.center = {
      x: 50,
      y: 50,
      radius: 0
    };
    this.decay = 0;
    this.distance = {};
    this.direction = "none";
    this.drift = 0;
    this.enable = false;
    this.gravity = new MoveGravity();
    this.path = new MovePath();
    this.outModes = new OutModes();
    this.random = false;
    this.size = false;
    this.speed = 2;
    this.spin = new Spin();
    this.straight = false;
    this.trail = new MoveTrail();
    this.vibrate = false;
    this.warp = false;
  }
  get collisions() {
    return false;
  }
  set collisions(value) {
  }
  get bounce() {
    return this.collisions;
  }
  set bounce(value) {
    this.collisions = value;
  }
  get out_mode() {
    return this.outMode;
  }
  set out_mode(value) {
    this.outMode = value;
  }
  get outMode() {
    return this.outModes.default;
  }
  set outMode(value) {
    this.outModes.default = value;
  }
  get noise() {
    return this.path;
  }
  set noise(value) {
    this.path = value;
  }
  load(data) {
    var _a, _b, _c;
    if (!data) {
      return;
    }
    if (data.angle !== void 0) {
      if (typeof data.angle === "number") {
        this.angle.value = data.angle;
      } else {
        this.angle.load(data.angle);
      }
    }
    this.attract.load(data.attract);
    this.center = deepExtend(this.center, data.center);
    if (data.decay !== void 0) {
      this.decay = data.decay;
    }
    if (data.direction !== void 0) {
      this.direction = data.direction;
    }
    if (data.distance !== void 0) {
      this.distance = typeof data.distance === "number" ? {
        horizontal: data.distance,
        vertical: data.distance
      } : deepExtend({}, data.distance);
    }
    if (data.drift !== void 0) {
      this.drift = setRangeValue(data.drift);
    }
    if (data.enable !== void 0) {
      this.enable = data.enable;
    }
    this.gravity.load(data.gravity);
    const outMode = (_a = data.outMode) !== null && _a !== void 0 ? _a : data.out_mode;
    if (data.outModes !== void 0 || outMode !== void 0) {
      if (typeof data.outModes === "string" || data.outModes === void 0 && outMode !== void 0) {
        this.outModes.load({
          default: (_b = data.outModes) !== null && _b !== void 0 ? _b : outMode
        });
      } else {
        this.outModes.load(data.outModes);
      }
    }
    this.path.load((_c = data.path) !== null && _c !== void 0 ? _c : data.noise);
    if (data.random !== void 0) {
      this.random = data.random;
    }
    if (data.size !== void 0) {
      this.size = data.size;
    }
    if (data.speed !== void 0) {
      this.speed = setRangeValue(data.speed);
    }
    this.spin.load(data.spin);
    if (data.straight !== void 0) {
      this.straight = data.straight;
    }
    this.trail.load(data.trail);
    if (data.vibrate !== void 0) {
      this.vibrate = data.vibrate;
    }
    if (data.warp !== void 0) {
      this.warp = data.warp;
    }
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/AnimationOptions.js
var AnimationOptions = class {
  constructor() {
    this.count = 0;
    this.enable = false;
    this.speed = 1;
    this.decay = 0;
    this.sync = false;
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.count !== void 0) {
      this.count = setRangeValue(data.count);
    }
    if (data.enable !== void 0) {
      this.enable = data.enable;
    }
    if (data.speed !== void 0) {
      this.speed = setRangeValue(data.speed);
    }
    if (data.decay !== void 0) {
      this.decay = setRangeValue(data.decay);
    }
    if (data.sync !== void 0) {
      this.sync = data.sync;
    }
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/Particles/Opacity/OpacityAnimation.js
var OpacityAnimation = class extends AnimationOptions {
  constructor() {
    super();
    this.destroy = "none";
    this.enable = false;
    this.speed = 2;
    this.startValue = "random";
    this.sync = false;
  }
  get opacity_min() {
    return this.minimumValue;
  }
  set opacity_min(value) {
    this.minimumValue = value;
  }
  load(data) {
    var _a;
    if (!data) {
      return;
    }
    super.load(data);
    if (data.destroy !== void 0) {
      this.destroy = data.destroy;
    }
    if (data.enable !== void 0) {
      this.enable = data.enable;
    }
    this.minimumValue = (_a = data.minimumValue) !== null && _a !== void 0 ? _a : data.opacity_min;
    if (data.speed !== void 0) {
      this.speed = data.speed;
    }
    if (data.startValue !== void 0) {
      this.startValue = data.startValue;
    }
    if (data.sync !== void 0) {
      this.sync = data.sync;
    }
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/Particles/Opacity/Opacity.js
var Opacity = class extends ValueWithRandom {
  constructor() {
    super();
    this.animation = new OpacityAnimation();
    this.random.minimumValue = 0.1;
    this.value = 1;
  }
  get anim() {
    return this.animation;
  }
  set anim(value) {
    this.animation = value;
  }
  load(data) {
    var _a;
    if (!data) {
      return;
    }
    super.load(data);
    const animation = (_a = data.animation) !== null && _a !== void 0 ? _a : data.anim;
    if (animation !== void 0) {
      this.animation.load(animation);
      this.value = setRangeValue(this.value, this.animation.enable ? this.animation.minimumValue : void 0);
    }
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/Particles/Number/ParticlesDensity.js
var ParticlesDensity = class {
  constructor() {
    this.enable = false;
    this.area = 800;
    this.factor = 1e3;
  }
  get value_area() {
    return this.area;
  }
  set value_area(value) {
    this.area = value;
  }
  load(data) {
    var _a;
    if (!data) {
      return;
    }
    if (data.enable !== void 0) {
      this.enable = data.enable;
    }
    const area = (_a = data.area) !== null && _a !== void 0 ? _a : data.value_area;
    if (area !== void 0) {
      this.area = area;
    }
    if (data.factor !== void 0) {
      this.factor = data.factor;
    }
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/Particles/Number/ParticlesNumber.js
var ParticlesNumber = class {
  constructor() {
    this.density = new ParticlesDensity();
    this.limit = 0;
    this.value = 100;
  }
  get max() {
    return this.limit;
  }
  set max(value) {
    this.limit = value;
  }
  load(data) {
    var _a;
    if (!data) {
      return;
    }
    this.density.load(data.density);
    const limit = (_a = data.limit) !== null && _a !== void 0 ? _a : data.max;
    if (limit !== void 0) {
      this.limit = limit;
    }
    if (data.value !== void 0) {
      this.value = data.value;
    }
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/Particles/Repulse/ParticlesRepulse.js
var ParticlesRepulse = class extends ValueWithRandom {
  constructor() {
    super();
    this.enabled = false;
    this.distance = 1;
    this.duration = 1;
    this.factor = 1;
    this.speed = 1;
  }
  load(data) {
    super.load(data);
    if (!data) {
      return;
    }
    if (data.enabled !== void 0) {
      this.enabled = data.enabled;
    }
    if (data.distance !== void 0) {
      this.distance = setRangeValue(data.distance);
    }
    if (data.duration !== void 0) {
      this.duration = setRangeValue(data.duration);
    }
    if (data.factor !== void 0) {
      this.factor = setRangeValue(data.factor);
    }
    if (data.speed !== void 0) {
      this.speed = setRangeValue(data.speed);
    }
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/Particles/Rotate/RotateAnimation.js
var RotateAnimation = class {
  constructor() {
    this.enable = false;
    this.speed = 0;
    this.decay = 0;
    this.sync = false;
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.enable !== void 0) {
      this.enable = data.enable;
    }
    if (data.speed !== void 0) {
      this.speed = setRangeValue(data.speed);
    }
    if (data.decay !== void 0) {
      this.decay = setRangeValue(data.decay);
    }
    if (data.sync !== void 0) {
      this.sync = data.sync;
    }
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/Particles/Rotate/Rotate.js
var Rotate = class extends ValueWithRandom {
  constructor() {
    super();
    this.animation = new RotateAnimation();
    this.direction = "clockwise";
    this.path = false;
    this.value = 0;
  }
  load(data) {
    if (!data) {
      return;
    }
    super.load(data);
    if (data.direction !== void 0) {
      this.direction = data.direction;
    }
    this.animation.load(data.animation);
    if (data.path !== void 0) {
      this.path = data.path;
    }
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/Particles/Shadow.js
var Shadow = class {
  constructor() {
    this.blur = 0;
    this.color = new OptionsColor();
    this.enable = false;
    this.offset = {
      x: 0,
      y: 0
    };
    this.color.value = "#000";
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.blur !== void 0) {
      this.blur = data.blur;
    }
    this.color = OptionsColor.create(this.color, data.color);
    if (data.enable !== void 0) {
      this.enable = data.enable;
    }
    if (data.offset === void 0) {
      return;
    }
    if (data.offset.x !== void 0) {
      this.offset.x = data.offset.x;
    }
    if (data.offset.y !== void 0) {
      this.offset.y = data.offset.y;
    }
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/Particles/Shape/Shape.js
var Shape = class {
  constructor() {
    this.options = {};
    this.type = "circle";
  }
  get image() {
    var _a;
    return (_a = this.options["image"]) !== null && _a !== void 0 ? _a : this.options["images"];
  }
  set image(value) {
    this.options["image"] = value;
    this.options["images"] = value;
  }
  get custom() {
    return this.options;
  }
  set custom(value) {
    this.options = value;
  }
  get images() {
    return this.image;
  }
  set images(value) {
    this.image = value;
  }
  get stroke() {
    return [];
  }
  set stroke(_value) {
  }
  get character() {
    var _a;
    return (_a = this.options["character"]) !== null && _a !== void 0 ? _a : this.options["char"];
  }
  set character(value) {
    this.options["character"] = value;
    this.options["char"] = value;
  }
  get polygon() {
    var _a;
    return (_a = this.options["polygon"]) !== null && _a !== void 0 ? _a : this.options["star"];
  }
  set polygon(value) {
    this.options["polygon"] = value;
    this.options["star"] = value;
  }
  load(data) {
    var _a, _b, _c;
    if (!data) {
      return;
    }
    const options = (_a = data.options) !== null && _a !== void 0 ? _a : data.custom;
    if (options !== void 0) {
      for (const shape in options) {
        const item = options[shape];
        if (item) {
          this.options[shape] = deepExtend((_b = this.options[shape]) !== null && _b !== void 0 ? _b : {}, item);
        }
      }
    }
    this.loadShape(data.character, "character", "char", true);
    this.loadShape(data.polygon, "polygon", "star", false);
    this.loadShape((_c = data.image) !== null && _c !== void 0 ? _c : data.images, "image", "images", true);
    if (data.type !== void 0) {
      this.type = data.type;
    }
  }
  loadShape(item, mainKey, altKey, altOverride) {
    var _a, _b, _c, _d;
    if (item === void 0) {
      return;
    }
    if (item instanceof Array) {
      if (!(this.options[mainKey] instanceof Array)) {
        this.options[mainKey] = [];
        if (!this.options[altKey] || altOverride) {
          this.options[altKey] = [];
        }
      }
      this.options[mainKey] = deepExtend((_a = this.options[mainKey]) !== null && _a !== void 0 ? _a : [], item);
      if (!this.options[altKey] || altOverride) {
        this.options[altKey] = deepExtend((_b = this.options[altKey]) !== null && _b !== void 0 ? _b : [], item);
      }
    } else {
      if (this.options[mainKey] instanceof Array) {
        this.options[mainKey] = {};
        if (!this.options[altKey] || altOverride) {
          this.options[altKey] = {};
        }
      }
      this.options[mainKey] = deepExtend((_c = this.options[mainKey]) !== null && _c !== void 0 ? _c : {}, item);
      if (!this.options[altKey] || altOverride) {
        this.options[altKey] = deepExtend((_d = this.options[altKey]) !== null && _d !== void 0 ? _d : {}, item);
      }
    }
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/Particles/Size/SizeAnimation.js
var SizeAnimation = class extends AnimationOptions {
  constructor() {
    super();
    this.destroy = "none";
    this.enable = false;
    this.speed = 5;
    this.startValue = "random";
    this.sync = false;
  }
  get size_min() {
    return this.minimumValue;
  }
  set size_min(value) {
    this.minimumValue = value;
  }
  load(data) {
    var _a;
    super.load(data);
    if (!data) {
      return;
    }
    if (data.destroy !== void 0) {
      this.destroy = data.destroy;
    }
    if (data.enable !== void 0) {
      this.enable = data.enable;
    }
    this.minimumValue = (_a = data.minimumValue) !== null && _a !== void 0 ? _a : data.size_min;
    if (data.speed !== void 0) {
      this.speed = data.speed;
    }
    if (data.startValue !== void 0) {
      this.startValue = data.startValue;
    }
    if (data.sync !== void 0) {
      this.sync = data.sync;
    }
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/Particles/Size/Size.js
var Size = class extends ValueWithRandom {
  constructor() {
    super();
    this.animation = new SizeAnimation();
    this.random.minimumValue = 1;
    this.value = 3;
  }
  get anim() {
    return this.animation;
  }
  set anim(value) {
    this.animation = value;
  }
  load(data) {
    var _a;
    super.load(data);
    if (!data) {
      return;
    }
    const animation = (_a = data.animation) !== null && _a !== void 0 ? _a : data.anim;
    if (animation !== void 0) {
      this.animation.load(animation);
      this.value = setRangeValue(this.value, this.animation.enable ? this.animation.minimumValue : void 0);
    }
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/Particles/Stroke.js
var Stroke = class {
  constructor() {
    this.width = 0;
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.color !== void 0) {
      this.color = AnimatableColor.create(this.color, data.color);
    }
    if (data.width !== void 0) {
      this.width = data.width;
    }
    if (data.opacity !== void 0) {
      this.opacity = data.opacity;
    }
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/Particles/ZIndex/ZIndex.js
var ZIndex = class extends ValueWithRandom {
  constructor() {
    super();
    this.opacityRate = 1;
    this.sizeRate = 1;
    this.velocityRate = 1;
  }
  load(data) {
    super.load(data);
    if (!data) {
      return;
    }
    if (data.opacityRate !== void 0) {
      this.opacityRate = data.opacityRate;
    }
    if (data.sizeRate !== void 0) {
      this.sizeRate = data.sizeRate;
    }
    if (data.velocityRate !== void 0) {
      this.velocityRate = data.velocityRate;
    }
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/Particles/ParticlesOptions.js
var __classPrivateFieldSet3 = function(receiver, state, value, kind, f) {
  if (kind === "m")
    throw new TypeError("Private method is not writable");
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet3 = function(receiver, state, kind, f) {
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _ParticlesOptions_engine;
var _ParticlesOptions_container;
var ParticlesOptions = class {
  constructor(engine, container) {
    _ParticlesOptions_engine.set(this, void 0);
    _ParticlesOptions_container.set(this, void 0);
    __classPrivateFieldSet3(this, _ParticlesOptions_engine, engine, "f");
    __classPrivateFieldSet3(this, _ParticlesOptions_container, container, "f");
    this.bounce = new ParticlesBounce();
    this.collisions = new Collisions();
    this.color = new AnimatableColor();
    this.color.value = "#fff";
    this.destroy = new Destroy();
    this.gradient = [];
    this.groups = {};
    this.links = new Links();
    this.move = new Move();
    this.number = new ParticlesNumber();
    this.opacity = new Opacity();
    this.reduceDuplicates = false;
    this.repulse = new ParticlesRepulse();
    this.rotate = new Rotate();
    this.shadow = new Shadow();
    this.shape = new Shape();
    this.size = new Size();
    this.stroke = new Stroke();
    this.zIndex = new ZIndex();
  }
  get line_linked() {
    return this.links;
  }
  set line_linked(value) {
    this.links = value;
  }
  get lineLinked() {
    return this.links;
  }
  set lineLinked(value) {
    this.links = value;
  }
  load(data) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    if (!data) {
      return;
    }
    this.bounce.load(data.bounce);
    this.color.load(AnimatableColor.create(this.color, data.color));
    this.destroy.load(data.destroy);
    const links = (_b = (_a = data.links) !== null && _a !== void 0 ? _a : data.lineLinked) !== null && _b !== void 0 ? _b : data.line_linked;
    if (links !== void 0) {
      this.links.load(links);
    }
    if (data.groups !== void 0) {
      for (const group in data.groups) {
        const item = data.groups[group];
        if (item !== void 0) {
          this.groups[group] = deepExtend((_c = this.groups[group]) !== null && _c !== void 0 ? _c : {}, item);
        }
      }
    }
    this.move.load(data.move);
    this.number.load(data.number);
    this.opacity.load(data.opacity);
    if (data.reduceDuplicates !== void 0) {
      this.reduceDuplicates = data.reduceDuplicates;
    }
    this.repulse.load(data.repulse);
    this.rotate.load(data.rotate);
    this.shape.load(data.shape);
    this.size.load(data.size);
    this.shadow.load(data.shadow);
    this.zIndex.load(data.zIndex);
    const collisions = (_e = (_d = data.move) === null || _d === void 0 ? void 0 : _d.collisions) !== null && _e !== void 0 ? _e : (_f = data.move) === null || _f === void 0 ? void 0 : _f.bounce;
    if (collisions !== void 0) {
      this.collisions.enable = collisions;
    }
    this.collisions.load(data.collisions);
    if (data.interactivity !== void 0) {
      this.interactivity = deepExtend({}, data.interactivity);
    }
    const strokeToLoad = (_g = data.stroke) !== null && _g !== void 0 ? _g : (_h = data.shape) === null || _h === void 0 ? void 0 : _h.stroke;
    if (strokeToLoad) {
      if (strokeToLoad instanceof Array) {
        this.stroke = strokeToLoad.map((s) => {
          const tmp = new Stroke();
          tmp.load(s);
          return tmp;
        });
      } else {
        if (this.stroke instanceof Array) {
          this.stroke = new Stroke();
        }
        this.stroke.load(strokeToLoad);
      }
    }
    const gradientToLoad = data.gradient;
    if (gradientToLoad) {
      if (gradientToLoad instanceof Array) {
        this.gradient = gradientToLoad.map((s) => {
          const tmp = new AnimatableGradient();
          tmp.load(s);
          return tmp;
        });
      } else {
        if (this.gradient instanceof Array) {
          this.gradient = new AnimatableGradient();
        }
        this.gradient.load(gradientToLoad);
      }
    }
    if (__classPrivateFieldGet3(this, _ParticlesOptions_container, "f")) {
      const updaters = __classPrivateFieldGet3(this, _ParticlesOptions_engine, "f").plugins.updaters.get(__classPrivateFieldGet3(this, _ParticlesOptions_container, "f"));
      if (updaters) {
        for (const updater of updaters) {
          if (updater.loadOptions) {
            updater.loadOptions(this, data);
          }
        }
      }
    }
  }
};
_ParticlesOptions_engine = /* @__PURE__ */ new WeakMap(), _ParticlesOptions_container = /* @__PURE__ */ new WeakMap();

// node_modules/tsparticles-engine/esm/Utils/Utils.js
function rectSideBounce(pSide, pOtherSide, rectSide, rectOtherSide, velocity, factor) {
  const res = { bounced: false };
  if (pOtherSide.min < rectOtherSide.min || pOtherSide.min > rectOtherSide.max || pOtherSide.max < rectOtherSide.min || pOtherSide.max > rectOtherSide.max) {
    return res;
  }
  if (pSide.max >= rectSide.min && pSide.max <= (rectSide.max + rectSide.min) / 2 && velocity > 0 || pSide.min <= rectSide.max && pSide.min > (rectSide.max + rectSide.min) / 2 && velocity < 0) {
    res.velocity = velocity * -factor;
    res.bounced = true;
  }
  return res;
}
function checkSelector(element, selectors) {
  if (!(selectors instanceof Array)) {
    return element.matches(selectors);
  }
  for (const selector of selectors) {
    if (element.matches(selector)) {
      return true;
    }
  }
  return false;
}
function isSsr() {
  return typeof window === "undefined" || !window || typeof window.document === "undefined" || !window.document;
}
function animate() {
  return isSsr() ? (callback) => setTimeout(callback) : (callback) => (window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || window.setTimeout)(callback);
}
function cancelAnimation() {
  return isSsr() ? (handle) => clearTimeout(handle) : (handle) => (window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || window.clearTimeout)(handle);
}
function isInArray(value, array) {
  return value === array || array instanceof Array && array.indexOf(value) > -1;
}
async function loadFont(font, weight) {
  try {
    await document.fonts.load(`${weight !== null && weight !== void 0 ? weight : "400"} 36px '${font !== null && font !== void 0 ? font : "Verdana"}'`);
  } catch (_a) {
  }
}
function arrayRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
function itemFromArray(array, index, useIndex = true) {
  const fixedIndex = index !== void 0 && useIndex ? index % array.length : arrayRandomIndex(array);
  return array[fixedIndex];
}
function isPointInside(point, size, offset, radius, direction) {
  return areBoundsInside(calculateBounds(point, radius !== null && radius !== void 0 ? radius : 0), size, offset, direction);
}
function areBoundsInside(bounds, size, offset, direction) {
  let inside = true;
  if (!direction || direction === "bottom") {
    inside = bounds.top < size.height + offset.x;
  }
  if (inside && (!direction || direction === "left")) {
    inside = bounds.right > offset.x;
  }
  if (inside && (!direction || direction === "right")) {
    inside = bounds.left < size.width + offset.y;
  }
  if (inside && (!direction || direction === "top")) {
    inside = bounds.bottom > offset.y;
  }
  return inside;
}
function calculateBounds(point, radius) {
  return {
    bottom: point.y + radius,
    left: point.x - radius,
    right: point.x + radius,
    top: point.y - radius
  };
}
function deepExtend(destination, ...sources) {
  for (const source of sources) {
    if (source === void 0 || source === null) {
      continue;
    }
    if (typeof source !== "object") {
      destination = source;
      continue;
    }
    const sourceIsArray = Array.isArray(source);
    if (sourceIsArray && (typeof destination !== "object" || !destination || !Array.isArray(destination))) {
      destination = [];
    } else if (!sourceIsArray && (typeof destination !== "object" || !destination || Array.isArray(destination))) {
      destination = {};
    }
    for (const key in source) {
      if (key === "__proto__") {
        continue;
      }
      const sourceDict = source, value = sourceDict[key], isObject = typeof value === "object", destDict = destination;
      destDict[key] = isObject && Array.isArray(value) ? value.map((v) => deepExtend(destDict[key], v)) : deepExtend(destDict[key], value);
    }
  }
  return destination;
}
function isDivModeEnabled(mode, divs) {
  return divs instanceof Array ? !!divs.find((t) => t.enable && isInArray(mode, t.mode)) : isInArray(mode, divs.mode);
}
function divModeExecute(mode, divs, callback) {
  if (divs instanceof Array) {
    for (const div of divs) {
      const divMode2 = div.mode, divEnabled = div.enable;
      if (divEnabled && isInArray(mode, divMode2)) {
        singleDivModeExecute(div, callback);
      }
    }
  } else {
    const divMode2 = divs.mode, divEnabled = divs.enable;
    if (divEnabled && isInArray(mode, divMode2)) {
      singleDivModeExecute(divs, callback);
    }
  }
}
function singleDivModeExecute(div, callback) {
  const selectors = div.selectors;
  if (selectors instanceof Array) {
    for (const selector of selectors) {
      callback(selector, div);
    }
  } else {
    callback(selectors, div);
  }
}
function divMode(divs, element) {
  if (!element || !divs) {
    return;
  }
  if (divs instanceof Array) {
    return divs.find((d) => checkSelector(element, d.selectors));
  } else if (checkSelector(element, divs.selectors)) {
    return divs;
  }
}
function circleBounceDataFromParticle(p) {
  return {
    position: p.getPosition(),
    radius: p.getRadius(),
    mass: p.getMass(),
    velocity: p.velocity,
    factor: Vector.create(getValue(p.options.bounce.horizontal), getValue(p.options.bounce.vertical))
  };
}
function circleBounce(p1, p2) {
  const { x: xVelocityDiff, y: yVelocityDiff } = p1.velocity.sub(p2.velocity), [pos1, pos2] = [p1.position, p2.position], { dx: xDist, dy: yDist } = getDistances(pos2, pos1);
  if (xVelocityDiff * xDist + yVelocityDiff * yDist < 0) {
    return;
  }
  const angle = -Math.atan2(yDist, xDist), m1 = p1.mass, m2 = p2.mass, u1 = p1.velocity.rotate(angle), u2 = p2.velocity.rotate(angle), v1 = collisionVelocity(u1, u2, m1, m2), v2 = collisionVelocity(u2, u1, m1, m2), vFinal1 = v1.rotate(-angle), vFinal2 = v2.rotate(-angle);
  p1.velocity.x = vFinal1.x * p1.factor.x;
  p1.velocity.y = vFinal1.y * p1.factor.y;
  p2.velocity.x = vFinal2.x * p2.factor.x;
  p2.velocity.y = vFinal2.y * p2.factor.y;
}
function rectBounce(particle, divBounds) {
  const pPos = particle.getPosition(), size = particle.getRadius(), bounds = calculateBounds(pPos, size);
  const resH = rectSideBounce({
    min: bounds.left,
    max: bounds.right
  }, {
    min: bounds.top,
    max: bounds.bottom
  }, {
    min: divBounds.left,
    max: divBounds.right
  }, {
    min: divBounds.top,
    max: divBounds.bottom
  }, particle.velocity.x, getValue(particle.options.bounce.horizontal));
  if (resH.bounced) {
    if (resH.velocity !== void 0) {
      particle.velocity.x = resH.velocity;
    }
    if (resH.position !== void 0) {
      particle.position.x = resH.position;
    }
  }
  const resV = rectSideBounce({
    min: bounds.top,
    max: bounds.bottom
  }, {
    min: bounds.left,
    max: bounds.right
  }, {
    min: divBounds.top,
    max: divBounds.bottom
  }, {
    min: divBounds.left,
    max: divBounds.right
  }, particle.velocity.y, getValue(particle.options.bounce.vertical));
  if (resV.bounced) {
    if (resV.velocity !== void 0) {
      particle.velocity.y = resV.velocity;
    }
    if (resV.position !== void 0) {
      particle.position.y = resV.position;
    }
  }
}
function loadOptions(options, ...sourceOptionsArr) {
  for (const sourceOptions of sourceOptionsArr) {
    options.load(sourceOptions);
  }
}
function loadContainerOptions(engine, container, ...sourceOptionsArr) {
  const options = new Options(engine, container);
  loadOptions(options, ...sourceOptionsArr);
  return options;
}
function loadParticlesOptions(engine, container, ...sourceOptionsArr) {
  const options = new ParticlesOptions(engine, container);
  loadOptions(options, ...sourceOptionsArr);
  return options;
}

// node_modules/tsparticles-engine/esm/Core/Utils/Constants.js
var generatedAttribute = "generated";
var randomColorValue = "random";
var midColorValue = "mid";
var touchEndEvent = "touchend";
var mouseDownEvent = "mousedown";
var mouseUpEvent = "mouseup";
var mouseMoveEvent = "mousemove";
var touchStartEvent = "touchstart";
var touchMoveEvent = "touchmove";
var mouseLeaveEvent = "mouseleave";
var mouseOutEvent = "mouseout";
var touchCancelEvent = "touchcancel";
var resizeEvent = "resize";
var visibilityChangeEvent = "visibilitychange";
var noPolygonDataLoaded = "No polygon data loaded.";
var noPolygonFound = "No polygon found, you need to specify SVG url in config.";

// node_modules/tsparticles-engine/esm/Utils/ColorUtils.js
function hue2rgb(p, q, t) {
  if (t < 0) {
    t += 1;
  }
  if (t > 1) {
    t -= 1;
  }
  if (t < 1 / 6) {
    return p + (q - p) * 6 * t;
  }
  if (t < 1 / 2) {
    return q;
  }
  if (t < 2 / 3) {
    return p + (q - p) * (2 / 3 - t) * 6;
  }
  return p;
}
function stringToRgba(input) {
  if (input.startsWith("rgb")) {
    const regex = /rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([\d.]+)\s*)?\)/i, result = regex.exec(input);
    return result ? {
      a: result.length > 4 ? parseFloat(result[5]) : 1,
      b: parseInt(result[3], 10),
      g: parseInt(result[2], 10),
      r: parseInt(result[1], 10)
    } : void 0;
  } else if (input.startsWith("hsl")) {
    const regex = /hsla?\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([\d.]+)\s*)?\)/i, result = regex.exec(input);
    return result ? hslaToRgba({
      a: result.length > 4 ? parseFloat(result[5]) : 1,
      h: parseInt(result[1], 10),
      l: parseInt(result[3], 10),
      s: parseInt(result[2], 10)
    }) : void 0;
  } else if (input.startsWith("hsv")) {
    const regex = /hsva?\(\s*(\d+)°\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([\d.]+)\s*)?\)/i, result = regex.exec(input);
    return result ? hsvaToRgba({
      a: result.length > 4 ? parseFloat(result[5]) : 1,
      h: parseInt(result[1], 10),
      s: parseInt(result[2], 10),
      v: parseInt(result[3], 10)
    }) : void 0;
  } else {
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i, hexFixed = input.replace(shorthandRegex, (_, r, g, b, a) => {
      return r + r + g + g + b + b + (a !== void 0 ? a + a : "");
    }), regex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i, result = regex.exec(hexFixed);
    return result ? {
      a: result[4] !== void 0 ? parseInt(result[4], 16) / 255 : 1,
      b: parseInt(result[3], 16),
      g: parseInt(result[2], 16),
      r: parseInt(result[1], 16)
    } : void 0;
  }
}
function rangeColorToRgb(input, index, useIndex = true) {
  var _a, _b, _c;
  if (input === void 0) {
    return void 0;
  }
  const color = typeof input === "string" ? { value: input } : input;
  if (typeof color.value === "string") {
    return colorToRgb(color.value, index, useIndex);
  }
  if (color.value instanceof Array) {
    return rangeColorToRgb({
      value: itemFromArray(color.value, index, useIndex)
    });
  }
  const colorValue = color.value, rgbColor = (_a = colorValue.rgb) !== null && _a !== void 0 ? _a : color.value;
  if (rgbColor.r !== void 0) {
    return {
      r: getRangeValue(rgbColor.r),
      g: getRangeValue(rgbColor.g),
      b: getRangeValue(rgbColor.b)
    };
  }
  const hslColor = (_b = colorValue.hsl) !== null && _b !== void 0 ? _b : color.value;
  if (hslColor.h !== void 0 && hslColor.l !== void 0) {
    return hslToRgb({
      h: getRangeValue(hslColor.h),
      l: getRangeValue(hslColor.l),
      s: getRangeValue(hslColor.s)
    });
  }
  const hsvColor = (_c = colorValue.hsv) !== null && _c !== void 0 ? _c : color.value;
  if (hsvColor.h !== void 0 && hsvColor.v !== void 0) {
    const res = hsvToRgb({
      h: getRangeValue(hsvColor.h),
      s: getRangeValue(hsvColor.s),
      v: getRangeValue(hsvColor.v)
    });
    return res;
  }
  return void 0;
}
function colorToRgb(input, index, useIndex = true) {
  var _a, _b, _c;
  if (input === void 0) {
    return;
  }
  const color = typeof input === "string" ? { value: input } : input;
  if (typeof color.value === "string") {
    return color.value === randomColorValue ? getRandomRgbColor() : stringToRgb(color.value);
  }
  if (color.value instanceof Array) {
    return colorToRgb({
      value: itemFromArray(color.value, index, useIndex)
    });
  }
  const colorValue = color.value, rgbColor = (_a = colorValue.rgb) !== null && _a !== void 0 ? _a : color.value;
  if (rgbColor.r !== void 0) {
    return rgbColor;
  }
  const hslColor = (_b = colorValue.hsl) !== null && _b !== void 0 ? _b : color.value;
  if (hslColor.h !== void 0 && hslColor.l !== void 0) {
    return hslToRgb(hslColor);
  }
  const hsvColor = (_c = colorValue.hsv) !== null && _c !== void 0 ? _c : color.value;
  if (hsvColor.h !== void 0 && hsvColor.v !== void 0) {
    return hsvToRgb(hsvColor);
  }
  return void 0;
}
function rangeColorToHsl(color, index, useIndex = true) {
  const rgb = rangeColorToRgb(color, index, useIndex);
  return rgb !== void 0 ? rgbToHsl(rgb) : void 0;
}
function rgbToHsl(color) {
  const r1 = color.r / 255, g1 = color.g / 255, b1 = color.b / 255, max = Math.max(r1, g1, b1), min = Math.min(r1, g1, b1), res = {
    h: 0,
    l: (max + min) / 2,
    s: 0
  };
  if (max !== min) {
    res.s = res.l < 0.5 ? (max - min) / (max + min) : (max - min) / (2 - max - min);
    res.h = r1 === max ? (g1 - b1) / (max - min) : res.h = g1 === max ? 2 + (b1 - r1) / (max - min) : 4 + (r1 - g1) / (max - min);
  }
  res.l *= 100;
  res.s *= 100;
  res.h *= 60;
  if (res.h < 0) {
    res.h += 360;
  }
  if (res.h >= 360) {
    res.h -= 360;
  }
  return res;
}
function stringToAlpha(input) {
  var _a;
  return (_a = stringToRgba(input)) === null || _a === void 0 ? void 0 : _a.a;
}
function stringToRgb(input) {
  return stringToRgba(input);
}
function hslToRgb(hsl) {
  const result = { b: 0, g: 0, r: 0 }, hslPercent = {
    h: hsl.h / 360,
    l: hsl.l / 100,
    s: hsl.s / 100
  };
  if (!hslPercent.s) {
    result.b = hslPercent.l;
    result.g = hslPercent.l;
    result.r = hslPercent.l;
  } else {
    const q = hslPercent.l < 0.5 ? hslPercent.l * (1 + hslPercent.s) : hslPercent.l + hslPercent.s - hslPercent.l * hslPercent.s, p = 2 * hslPercent.l - q;
    result.r = hue2rgb(p, q, hslPercent.h + 1 / 3);
    result.g = hue2rgb(p, q, hslPercent.h);
    result.b = hue2rgb(p, q, hslPercent.h - 1 / 3);
  }
  result.r = Math.floor(result.r * 255);
  result.g = Math.floor(result.g * 255);
  result.b = Math.floor(result.b * 255);
  return result;
}
function hslaToRgba(hsla) {
  const rgbResult = hslToRgb(hsla);
  return {
    a: hsla.a,
    b: rgbResult.b,
    g: rgbResult.g,
    r: rgbResult.r
  };
}
function hsvToRgb(hsv) {
  const result = { b: 0, g: 0, r: 0 }, hsvPercent = {
    h: hsv.h / 60,
    s: hsv.s / 100,
    v: hsv.v / 100
  }, c = hsvPercent.v * hsvPercent.s, x = c * (1 - Math.abs(hsvPercent.h % 2 - 1));
  let tempRgb;
  if (hsvPercent.h >= 0 && hsvPercent.h <= 1) {
    tempRgb = {
      r: c,
      g: x,
      b: 0
    };
  } else if (hsvPercent.h > 1 && hsvPercent.h <= 2) {
    tempRgb = {
      r: x,
      g: c,
      b: 0
    };
  } else if (hsvPercent.h > 2 && hsvPercent.h <= 3) {
    tempRgb = {
      r: 0,
      g: c,
      b: x
    };
  } else if (hsvPercent.h > 3 && hsvPercent.h <= 4) {
    tempRgb = {
      r: 0,
      g: x,
      b: c
    };
  } else if (hsvPercent.h > 4 && hsvPercent.h <= 5) {
    tempRgb = {
      r: x,
      g: 0,
      b: c
    };
  } else if (hsvPercent.h > 5 && hsvPercent.h <= 6) {
    tempRgb = {
      r: c,
      g: 0,
      b: x
    };
  }
  if (tempRgb) {
    const m = hsvPercent.v - c;
    result.r = Math.floor((tempRgb.r + m) * 255);
    result.g = Math.floor((tempRgb.g + m) * 255);
    result.b = Math.floor((tempRgb.b + m) * 255);
  }
  return result;
}
function hsvaToRgba(hsva) {
  return Object.assign({ a: hsva.a }, hsvToRgb(hsva));
}
function getRandomRgbColor(min) {
  const fixedMin = min !== null && min !== void 0 ? min : 0;
  return {
    b: Math.floor(randomInRange(setRangeValue(fixedMin, 256))),
    g: Math.floor(randomInRange(setRangeValue(fixedMin, 256))),
    r: Math.floor(randomInRange(setRangeValue(fixedMin, 256)))
  };
}
function getStyleFromRgb(color, opacity) {
  return `rgba(${color.r}, ${color.g}, ${color.b}, ${opacity !== null && opacity !== void 0 ? opacity : 1})`;
}
function getStyleFromHsl(color, opacity) {
  return `hsla(${color.h}, ${color.s}%, ${color.l}%, ${opacity !== null && opacity !== void 0 ? opacity : 1})`;
}
function colorMix(color1, color2, size1, size2) {
  let rgb1 = color1, rgb2 = color2;
  if (rgb1.r === void 0) {
    rgb1 = hslToRgb(color1);
  }
  if (rgb2.r === void 0) {
    rgb2 = hslToRgb(color2);
  }
  return {
    b: mix(rgb1.b, rgb2.b, size1, size2),
    g: mix(rgb1.g, rgb2.g, size1, size2),
    r: mix(rgb1.r, rgb2.r, size1, size2)
  };
}
function getLinkColor(p1, p2, linkColor) {
  var _a, _b;
  if (linkColor === randomColorValue) {
    return getRandomRgbColor();
  } else if (linkColor === "mid") {
    const sourceColor = (_a = p1.getFillColor()) !== null && _a !== void 0 ? _a : p1.getStrokeColor(), destColor = (_b = p2 === null || p2 === void 0 ? void 0 : p2.getFillColor()) !== null && _b !== void 0 ? _b : p2 === null || p2 === void 0 ? void 0 : p2.getStrokeColor();
    if (sourceColor && destColor && p2) {
      return colorMix(sourceColor, destColor, p1.getRadius(), p2.getRadius());
    } else {
      const hslColor = sourceColor !== null && sourceColor !== void 0 ? sourceColor : destColor;
      if (hslColor) {
        return hslToRgb(hslColor);
      }
    }
  } else {
    return linkColor;
  }
}
function getLinkRandomColor(optColor, blink, consent) {
  const color = typeof optColor === "string" ? optColor : optColor.value;
  if (color === randomColorValue) {
    if (consent) {
      return rangeColorToRgb({
        value: color
      });
    }
    if (blink) {
      return randomColorValue;
    }
    return midColorValue;
  } else {
    return rangeColorToRgb({
      value: color
    });
  }
}
function getHslFromAnimation(animation) {
  return animation !== void 0 ? {
    h: animation.h.value,
    s: animation.s.value,
    l: animation.l.value
  } : void 0;
}
function getHslAnimationFromHsl(hsl, animationOptions, reduceFactor) {
  const resColor = {
    h: {
      enable: false,
      value: hsl.h
    },
    s: {
      enable: false,
      value: hsl.s
    },
    l: {
      enable: false,
      value: hsl.l
    }
  };
  if (animationOptions) {
    setColorAnimation(resColor.h, animationOptions.h, reduceFactor);
    setColorAnimation(resColor.s, animationOptions.s, reduceFactor);
    setColorAnimation(resColor.l, animationOptions.l, reduceFactor);
  }
  return resColor;
}
function setColorAnimation(colorValue, colorAnimation, reduceFactor) {
  colorValue.enable = colorAnimation.enable;
  if (colorValue.enable) {
    colorValue.velocity = getRangeValue(colorAnimation.speed) / 100 * reduceFactor;
    colorValue.decay = 1 - getRangeValue(colorAnimation.decay);
    colorValue.status = 0;
    if (!colorAnimation.sync) {
      colorValue.velocity *= Math.random();
      colorValue.value *= Math.random();
    }
  } else {
    colorValue.velocity = 0;
  }
}

// node_modules/tsparticles-engine/esm/Utils/CanvasUtils.js
function drawLine(context, begin, end) {
  context.beginPath();
  context.moveTo(begin.x, begin.y);
  context.lineTo(end.x, end.y);
  context.closePath();
}
function drawTriangle(context, p1, p2, p3) {
  context.beginPath();
  context.moveTo(p1.x, p1.y);
  context.lineTo(p2.x, p2.y);
  context.lineTo(p3.x, p3.y);
  context.closePath();
}
function paintBase(context, dimension, baseColor) {
  context.save();
  context.fillStyle = baseColor !== null && baseColor !== void 0 ? baseColor : "rgba(0,0,0,0)";
  context.fillRect(0, 0, dimension.width, dimension.height);
  context.restore();
}
function clear(context, dimension) {
  context.clearRect(0, 0, dimension.width, dimension.height);
}
function gradient(context, p1, p2, opacity) {
  const gradStop = Math.floor(p2.getRadius() / p1.getRadius()), color1 = p1.getFillColor(), color2 = p2.getFillColor();
  if (!color1 || !color2) {
    return;
  }
  const sourcePos = p1.getPosition(), destPos = p2.getPosition(), midRgb = colorMix(color1, color2, p1.getRadius(), p2.getRadius()), grad = context.createLinearGradient(sourcePos.x, sourcePos.y, destPos.x, destPos.y);
  grad.addColorStop(0, getStyleFromHsl(color1, opacity));
  grad.addColorStop(gradStop > 1 ? 1 : gradStop, getStyleFromRgb(midRgb, opacity));
  grad.addColorStop(1, getStyleFromHsl(color2, opacity));
  return grad;
}
function drawParticle(container, context, particle, delta, colorStyles, backgroundMask, composite, radius, opacity, shadow) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _j;
  const pos = particle.getPosition();
  context.save();
  if (((_a = particle.tilt) === null || _a === void 0 ? void 0 : _a.enable) || ((_b = particle.roll) === null || _b === void 0 ? void 0 : _b.enable)) {
    const roll = ((_c = particle.roll) === null || _c === void 0 ? void 0 : _c.enable) && particle.roll, tilt = ((_d = particle.tilt) === null || _d === void 0 ? void 0 : _d.enable) && particle.tilt, rollHorizontal = roll && roll.horizontal, rollVertical = roll && roll.vertical;
    context.setTransform(rollHorizontal ? Math.cos(particle.roll.angle) : 1, tilt ? Math.cos(particle.tilt.value) * particle.tilt.cosDirection : 0, tilt ? Math.sin(particle.tilt.value) * particle.tilt.sinDirection : 0, rollVertical ? Math.sin(particle.roll.angle) : 1, pos.x, pos.y);
  } else {
    context.translate(pos.x, pos.y);
  }
  context.beginPath();
  const angle = ((_f = (_e = particle.rotate) === null || _e === void 0 ? void 0 : _e.value) !== null && _f !== void 0 ? _f : 0) + (particle.options.rotate.path ? particle.velocity.angle : 0);
  if (angle !== 0) {
    context.rotate(angle);
  }
  if (backgroundMask) {
    context.globalCompositeOperation = composite;
  }
  const shadowColor = particle.shadowColor;
  if (shadow.enable && shadowColor) {
    context.shadowBlur = shadow.blur;
    context.shadowColor = getStyleFromRgb(shadowColor);
    context.shadowOffsetX = shadow.offset.x;
    context.shadowOffsetY = shadow.offset.y;
  }
  if (colorStyles.fill) {
    context.fillStyle = colorStyles.fill;
  }
  const stroke = particle.stroke;
  context.lineWidth = (_g = particle.strokeWidth) !== null && _g !== void 0 ? _g : 0;
  if (colorStyles.stroke) {
    context.strokeStyle = colorStyles.stroke;
  }
  drawShape(container, context, particle, radius, opacity, delta);
  if (((_h = stroke === null || stroke === void 0 ? void 0 : stroke.width) !== null && _h !== void 0 ? _h : 0) > 0) {
    context.stroke();
  }
  if (particle.close) {
    context.closePath();
  }
  if (particle.fill) {
    context.fill();
  }
  context.restore();
  context.save();
  if (((_j = particle.tilt) === null || _j === void 0 ? void 0 : _j.enable) && particle.tilt) {
    context.setTransform(1, Math.cos(particle.tilt.value) * particle.tilt.cosDirection, Math.sin(particle.tilt.value) * particle.tilt.sinDirection, 1, pos.x, pos.y);
  } else {
    context.translate(pos.x, pos.y);
  }
  if (angle !== 0) {
    context.rotate(angle);
  }
  if (backgroundMask) {
    context.globalCompositeOperation = composite;
  }
  drawShapeAfterEffect(container, context, particle, radius, opacity, delta);
  context.restore();
}
function drawShape(container, context, particle, radius, opacity, delta) {
  if (!particle.shape) {
    return;
  }
  const drawer = container.drawers.get(particle.shape);
  if (!drawer) {
    return;
  }
  drawer.draw(context, particle, radius, opacity, delta, container.retina.pixelRatio);
}
function drawShapeAfterEffect(container, context, particle, radius, opacity, delta) {
  if (!particle.shape) {
    return;
  }
  const drawer = container.drawers.get(particle.shape);
  if (!(drawer === null || drawer === void 0 ? void 0 : drawer.afterEffect)) {
    return;
  }
  drawer.afterEffect(context, particle, radius, opacity, delta, container.retina.pixelRatio);
}
function drawPlugin(context, plugin, delta) {
  if (!plugin.draw) {
    return;
  }
  context.save();
  plugin.draw(context, delta);
  context.restore();
}
function drawParticlePlugin(context, plugin, particle, delta) {
  if (!plugin.drawParticle) {
    return;
  }
  context.save();
  plugin.drawParticle(context, particle, delta);
  context.restore();
}
function alterHsl(color, type, value) {
  return {
    h: color.h,
    s: color.s,
    l: color.l + (type === "darken" ? -1 : 1) * value
  };
}

// node_modules/tsparticles-engine/esm/Core/Canvas.js
var __classPrivateFieldSet4 = function(receiver, state, value, kind, f) {
  if (kind === "m")
    throw new TypeError("Private method is not writable");
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet4 = function(receiver, state, kind, f) {
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Canvas_context;
var Canvas = class {
  constructor(container) {
    this.container = container;
    _Canvas_context.set(this, void 0);
    this.size = {
      height: 0,
      width: 0
    };
    __classPrivateFieldSet4(this, _Canvas_context, null, "f");
    this.generatedCanvas = false;
  }
  init() {
    this.resize();
    this.initStyle();
    this.initCover();
    this.initTrail();
    this.initBackground();
    this.paint();
  }
  loadCanvas(canvas) {
    var _a;
    if (this.generatedCanvas) {
      (_a = this.element) === null || _a === void 0 ? void 0 : _a.remove();
    }
    this.generatedCanvas = canvas.dataset && generatedAttribute in canvas.dataset ? canvas.dataset[generatedAttribute] === "true" : this.generatedCanvas;
    this.element = canvas;
    this.originalStyle = deepExtend({}, this.element.style);
    this.size.height = canvas.offsetHeight;
    this.size.width = canvas.offsetWidth;
    __classPrivateFieldSet4(this, _Canvas_context, this.element.getContext("2d"), "f");
    this.container.retina.init();
    this.initBackground();
  }
  destroy() {
    var _a;
    if (this.generatedCanvas) {
      (_a = this.element) === null || _a === void 0 ? void 0 : _a.remove();
    }
    this.draw((ctx) => {
      clear(ctx, this.size);
    });
  }
  paint() {
    const options = this.container.actualOptions;
    this.draw((ctx) => {
      if (options.backgroundMask.enable && options.backgroundMask.cover) {
        clear(ctx, this.size);
        this.paintBase(this.coverColorStyle);
      } else {
        this.paintBase();
      }
    });
  }
  clear() {
    const options = this.container.actualOptions, trail = options.particles.move.trail;
    if (options.backgroundMask.enable) {
      this.paint();
    } else if (trail.enable && trail.length > 0 && this.trailFillColor) {
      this.paintBase(getStyleFromRgb(this.trailFillColor, 1 / trail.length));
    } else {
      this.draw((ctx) => {
        clear(ctx, this.size);
      });
    }
  }
  async windowResize() {
    if (!this.element) {
      return;
    }
    this.resize();
    const container = this.container, needsRefresh = container.updateActualOptions();
    container.particles.setDensity();
    for (const [, plugin] of container.plugins) {
      if (plugin.resize !== void 0) {
        plugin.resize();
      }
    }
    if (needsRefresh) {
      await container.refresh();
    }
  }
  resize() {
    if (!this.element) {
      return;
    }
    const container = this.container, pxRatio = container.retina.pixelRatio, size = container.canvas.size, newSize = {
      width: this.element.offsetWidth * pxRatio,
      height: this.element.offsetHeight * pxRatio
    };
    if (newSize.height === size.height && newSize.width === size.width && newSize.height === this.element.height && newSize.width === this.element.width) {
      return;
    }
    const oldSize = Object.assign({}, size);
    this.element.width = size.width = this.element.offsetWidth * pxRatio;
    this.element.height = size.height = this.element.offsetHeight * pxRatio;
    if (this.container.started) {
      this.resizeFactor = {
        width: size.width / oldSize.width,
        height: size.height / oldSize.height
      };
    }
  }
  drawParticle(particle, delta) {
    var _a, _b, _c, _d, _e, _f;
    if (particle.spawning || particle.destroyed) {
      return;
    }
    const radius = particle.getRadius();
    if (radius <= 0) {
      return;
    }
    const pfColor = particle.getFillColor(), psColor = (_a = particle.getStrokeColor()) !== null && _a !== void 0 ? _a : pfColor;
    if (!pfColor && !psColor) {
      return;
    }
    let [fColor, sColor] = this.getPluginParticleColors(particle);
    if (!fColor || !sColor) {
      if (!fColor) {
        fColor = pfColor ? pfColor : void 0;
      }
      if (!sColor) {
        sColor = psColor ? psColor : void 0;
      }
    }
    const options = this.container.actualOptions, zIndexOptions = particle.options.zIndex, zOpacityFactor = (1 - particle.zIndexFactor) ** zIndexOptions.opacityRate, opacity = (_d = (_b = particle.bubble.opacity) !== null && _b !== void 0 ? _b : (_c = particle.opacity) === null || _c === void 0 ? void 0 : _c.value) !== null && _d !== void 0 ? _d : 1, strokeOpacity = (_f = (_e = particle.stroke) === null || _e === void 0 ? void 0 : _e.opacity) !== null && _f !== void 0 ? _f : opacity, zOpacity = opacity * zOpacityFactor, zStrokeOpacity = strokeOpacity * zOpacityFactor;
    const colorStyles = {
      fill: fColor ? getStyleFromHsl(fColor, zOpacity) : void 0
    };
    colorStyles.stroke = sColor ? getStyleFromHsl(sColor, zStrokeOpacity) : colorStyles.fill;
    this.draw((ctx) => {
      const zSizeFactor = (1 - particle.zIndexFactor) ** zIndexOptions.sizeRate, container = this.container;
      for (const updater of container.particles.updaters) {
        if (updater.beforeDraw) {
          updater.beforeDraw(particle);
        }
        if (updater.getColorStyles) {
          const { fill, stroke } = updater.getColorStyles(particle, ctx, radius, zOpacity);
          if (fill) {
            colorStyles.fill = fill;
          }
          if (stroke) {
            colorStyles.stroke = stroke;
          }
        }
      }
      drawParticle(container, ctx, particle, delta, colorStyles, options.backgroundMask.enable, options.backgroundMask.composite, radius * zSizeFactor, zOpacity, particle.options.shadow);
      for (const updater of container.particles.updaters) {
        if (updater.afterDraw) {
          updater.afterDraw(particle);
        }
      }
    });
  }
  drawPlugin(plugin, delta) {
    this.draw((ctx) => {
      drawPlugin(ctx, plugin, delta);
    });
  }
  drawParticlePlugin(plugin, particle, delta) {
    this.draw((ctx) => {
      drawParticlePlugin(ctx, plugin, particle, delta);
    });
  }
  initBackground() {
    const options = this.container.actualOptions, background = options.background, element = this.element, elementStyle = element === null || element === void 0 ? void 0 : element.style;
    if (!elementStyle) {
      return;
    }
    if (background.color) {
      const color = rangeColorToRgb(background.color);
      elementStyle.backgroundColor = color ? getStyleFromRgb(color, background.opacity) : "";
    } else {
      elementStyle.backgroundColor = "";
    }
    elementStyle.backgroundImage = background.image || "";
    elementStyle.backgroundPosition = background.position || "";
    elementStyle.backgroundRepeat = background.repeat || "";
    elementStyle.backgroundSize = background.size || "";
  }
  draw(cb) {
    if (!__classPrivateFieldGet4(this, _Canvas_context, "f")) {
      return;
    }
    return cb(__classPrivateFieldGet4(this, _Canvas_context, "f"));
  }
  initCover() {
    const options = this.container.actualOptions, cover = options.backgroundMask.cover, color = cover.color, coverRgb = rangeColorToRgb(color);
    if (coverRgb) {
      const coverColor = {
        r: coverRgb.r,
        g: coverRgb.g,
        b: coverRgb.b,
        a: cover.opacity
      };
      this.coverColorStyle = getStyleFromRgb(coverColor, coverColor.a);
    }
  }
  initTrail() {
    const options = this.container.actualOptions, trail = options.particles.move.trail, fillColor = rangeColorToRgb(trail.fillColor);
    if (fillColor) {
      const trail2 = options.particles.move.trail;
      this.trailFillColor = {
        r: fillColor.r,
        g: fillColor.g,
        b: fillColor.b,
        a: 1 / trail2.length
      };
    }
  }
  getPluginParticleColors(particle) {
    let fColor, sColor;
    for (const [, plugin] of this.container.plugins) {
      if (!fColor && plugin.particleFillColor) {
        fColor = rangeColorToHsl(plugin.particleFillColor(particle));
      }
      if (!sColor && plugin.particleStrokeColor) {
        sColor = rangeColorToHsl(plugin.particleStrokeColor(particle));
      }
      if (fColor && sColor) {
        break;
      }
    }
    return [fColor, sColor];
  }
  initStyle() {
    const element = this.element, options = this.container.actualOptions;
    if (!element) {
      return;
    }
    const originalStyle = this.originalStyle;
    if (options.fullScreen.enable) {
      this.originalStyle = deepExtend({}, element.style);
      element.style.setProperty("position", "fixed", "important");
      element.style.setProperty("z-index", options.fullScreen.zIndex.toString(10), "important");
      element.style.setProperty("top", "0", "important");
      element.style.setProperty("left", "0", "important");
      element.style.setProperty("width", "100%", "important");
      element.style.setProperty("height", "100%", "important");
    } else if (originalStyle) {
      element.style.position = originalStyle.position;
      element.style.zIndex = originalStyle.zIndex;
      element.style.top = originalStyle.top;
      element.style.left = originalStyle.left;
      element.style.width = originalStyle.width;
      element.style.height = originalStyle.height;
    }
    for (const key in options.style) {
      if (!key || !options.style) {
        continue;
      }
      const value = options.style[key];
      if (!value) {
        continue;
      }
      element.style.setProperty(key, value, "important");
    }
  }
  paintBase(baseColor) {
    this.draw((ctx) => {
      paintBase(ctx, this.size, baseColor);
    });
  }
};
_Canvas_context = /* @__PURE__ */ new WeakMap();

// node_modules/tsparticles-engine/esm/Core/Utils/EventListeners.js
function manageListener(element, event, handler, add, options) {
  if (add) {
    let addOptions = { passive: true };
    if (typeof options === "boolean") {
      addOptions.capture = options;
    } else if (options !== void 0) {
      addOptions = options;
    }
    element.addEventListener(event, handler, addOptions);
  } else {
    const removeOptions = options;
    element.removeEventListener(event, handler, removeOptions);
  }
}
var EventListeners = class {
  constructor(container) {
    this.container = container;
    this.canPush = true;
    this.mouseMoveHandler = (e) => this.mouseTouchMove(e);
    this.touchStartHandler = (e) => this.mouseTouchMove(e);
    this.touchMoveHandler = (e) => this.mouseTouchMove(e);
    this.touchEndHandler = () => this.mouseTouchFinish();
    this.mouseLeaveHandler = () => this.mouseTouchFinish();
    this.touchCancelHandler = () => this.mouseTouchFinish();
    this.touchEndClickHandler = (e) => this.mouseTouchClick(e);
    this.mouseUpHandler = (e) => this.mouseTouchClick(e);
    this.mouseDownHandler = () => this.mouseDown();
    this.visibilityChangeHandler = () => this.handleVisibilityChange();
    this.themeChangeHandler = (e) => this.handleThemeChange(e);
    this.oldThemeChangeHandler = (e) => this.handleThemeChange(e);
    this.resizeHandler = () => this.handleWindowResize();
  }
  addListeners() {
    this.manageListeners(true);
  }
  removeListeners() {
    this.manageListeners(false);
  }
  manageListeners(add) {
    var _a;
    const container = this.container, options = container.actualOptions, detectType = options.interactivity.detectsOn;
    let mouseLeaveTmpEvent = mouseLeaveEvent;
    if (detectType === "window") {
      container.interactivity.element = window;
      mouseLeaveTmpEvent = mouseOutEvent;
    } else if (detectType === "parent" && container.canvas.element) {
      const canvasEl = container.canvas.element;
      container.interactivity.element = (_a = canvasEl.parentElement) !== null && _a !== void 0 ? _a : canvasEl.parentNode;
    } else {
      container.interactivity.element = container.canvas.element;
    }
    const mediaMatch = !isSsr() && typeof matchMedia !== "undefined" && matchMedia("(prefers-color-scheme: dark)");
    if (mediaMatch) {
      if (mediaMatch.addEventListener !== void 0) {
        manageListener(mediaMatch, "change", this.themeChangeHandler, add);
      } else if (mediaMatch.addListener !== void 0) {
        if (add) {
          mediaMatch.addListener(this.oldThemeChangeHandler);
        } else {
          mediaMatch.removeListener(this.oldThemeChangeHandler);
        }
      }
    }
    const interactivityEl = container.interactivity.element;
    if (!interactivityEl) {
      return;
    }
    const html = interactivityEl;
    if (options.interactivity.events.onHover.enable || options.interactivity.events.onClick.enable) {
      manageListener(interactivityEl, mouseMoveEvent, this.mouseMoveHandler, add);
      manageListener(interactivityEl, touchStartEvent, this.touchStartHandler, add);
      manageListener(interactivityEl, touchMoveEvent, this.touchMoveHandler, add);
      if (!options.interactivity.events.onClick.enable) {
        manageListener(interactivityEl, touchEndEvent, this.touchEndHandler, add);
      } else {
        manageListener(interactivityEl, touchEndEvent, this.touchEndClickHandler, add);
        manageListener(interactivityEl, mouseUpEvent, this.mouseUpHandler, add);
        manageListener(interactivityEl, mouseDownEvent, this.mouseDownHandler, add);
      }
      manageListener(interactivityEl, mouseLeaveTmpEvent, this.mouseLeaveHandler, add);
      manageListener(interactivityEl, touchCancelEvent, this.touchCancelHandler, add);
    }
    if (container.canvas.element) {
      container.canvas.element.style.pointerEvents = html === container.canvas.element ? "initial" : "none";
    }
    if (options.interactivity.events.resize) {
      if (typeof ResizeObserver !== "undefined") {
        if (this.resizeObserver && !add) {
          if (container.canvas.element) {
            this.resizeObserver.unobserve(container.canvas.element);
          }
          this.resizeObserver.disconnect();
          delete this.resizeObserver;
        } else if (!this.resizeObserver && add && container.canvas.element) {
          this.resizeObserver = new ResizeObserver((entries) => {
            const entry = entries.find((e) => e.target === container.canvas.element);
            if (!entry) {
              return;
            }
            this.handleWindowResize();
          });
          this.resizeObserver.observe(container.canvas.element);
        }
      } else {
        manageListener(window, resizeEvent, this.resizeHandler, add);
      }
    }
    if (document) {
      manageListener(document, visibilityChangeEvent, this.visibilityChangeHandler, add, false);
    }
  }
  handleWindowResize() {
    if (this.resizeTimeout) {
      clearTimeout(this.resizeTimeout);
      delete this.resizeTimeout;
    }
    this.resizeTimeout = setTimeout(async () => {
      var _a;
      return (_a = this.container.canvas) === null || _a === void 0 ? void 0 : _a.windowResize();
    }, 500);
  }
  handleVisibilityChange() {
    const container = this.container, options = container.actualOptions;
    this.mouseTouchFinish();
    if (!options.pauseOnBlur) {
      return;
    }
    if (document === null || document === void 0 ? void 0 : document.hidden) {
      container.pageHidden = true;
      container.pause();
    } else {
      container.pageHidden = false;
      if (container.getAnimationStatus()) {
        container.play(true);
      } else {
        container.draw(true);
      }
    }
  }
  mouseDown() {
    const interactivity = this.container.interactivity;
    if (interactivity) {
      const mouse = interactivity.mouse;
      mouse.clicking = true;
      mouse.downPosition = mouse.position;
    }
  }
  mouseTouchMove(e) {
    var _a, _b, _c, _d, _e, _f, _g;
    const container = this.container, options = container.actualOptions;
    if (!((_a = container.interactivity) === null || _a === void 0 ? void 0 : _a.element)) {
      return;
    }
    container.interactivity.mouse.inside = true;
    let pos;
    const canvas = container.canvas.element;
    if (e.type.startsWith("mouse")) {
      this.canPush = true;
      const mouseEvent = e;
      if (container.interactivity.element === window) {
        if (canvas) {
          const clientRect = canvas.getBoundingClientRect();
          pos = {
            x: mouseEvent.clientX - clientRect.left,
            y: mouseEvent.clientY - clientRect.top
          };
        }
      } else if (options.interactivity.detectsOn === "parent") {
        const source = mouseEvent.target;
        const target = mouseEvent.currentTarget;
        const canvasEl = container.canvas.element;
        if (source && target && canvasEl) {
          const sourceRect = source.getBoundingClientRect();
          const targetRect = target.getBoundingClientRect();
          const canvasRect = canvasEl.getBoundingClientRect();
          pos = {
            x: mouseEvent.offsetX + 2 * sourceRect.left - (targetRect.left + canvasRect.left),
            y: mouseEvent.offsetY + 2 * sourceRect.top - (targetRect.top + canvasRect.top)
          };
        } else {
          pos = {
            x: (_b = mouseEvent.offsetX) !== null && _b !== void 0 ? _b : mouseEvent.clientX,
            y: (_c = mouseEvent.offsetY) !== null && _c !== void 0 ? _c : mouseEvent.clientY
          };
        }
      } else {
        if (mouseEvent.target === container.canvas.element) {
          pos = {
            x: (_d = mouseEvent.offsetX) !== null && _d !== void 0 ? _d : mouseEvent.clientX,
            y: (_e = mouseEvent.offsetY) !== null && _e !== void 0 ? _e : mouseEvent.clientY
          };
        }
      }
    } else {
      this.canPush = e.type !== "touchmove";
      const touchEvent = e;
      const lastTouch = touchEvent.touches[touchEvent.touches.length - 1];
      const canvasRect = canvas === null || canvas === void 0 ? void 0 : canvas.getBoundingClientRect();
      pos = {
        x: lastTouch.clientX - ((_f = canvasRect === null || canvasRect === void 0 ? void 0 : canvasRect.left) !== null && _f !== void 0 ? _f : 0),
        y: lastTouch.clientY - ((_g = canvasRect === null || canvasRect === void 0 ? void 0 : canvasRect.top) !== null && _g !== void 0 ? _g : 0)
      };
    }
    const pxRatio = container.retina.pixelRatio;
    if (pos) {
      pos.x *= pxRatio;
      pos.y *= pxRatio;
    }
    container.interactivity.mouse.position = pos;
    container.interactivity.status = mouseMoveEvent;
  }
  mouseTouchFinish() {
    const interactivity = this.container.interactivity;
    if (!interactivity) {
      return;
    }
    const mouse = interactivity.mouse;
    delete mouse.position;
    delete mouse.clickPosition;
    delete mouse.downPosition;
    interactivity.status = mouseLeaveEvent;
    mouse.inside = false;
    mouse.clicking = false;
  }
  mouseTouchClick(e) {
    const container = this.container, options = container.actualOptions, mouse = container.interactivity.mouse;
    mouse.inside = true;
    let handled = false;
    const mousePosition = mouse.position;
    if (!mousePosition || !options.interactivity.events.onClick.enable) {
      return;
    }
    for (const [, plugin] of container.plugins) {
      if (!plugin.clickPositionValid) {
        continue;
      }
      handled = plugin.clickPositionValid(mousePosition);
      if (handled) {
        break;
      }
    }
    if (!handled) {
      this.doMouseTouchClick(e);
    }
    mouse.clicking = false;
  }
  doMouseTouchClick(e) {
    const container = this.container, options = container.actualOptions;
    if (this.canPush) {
      const mousePos = container.interactivity.mouse.position;
      if (!mousePos) {
        return;
      }
      container.interactivity.mouse.clickPosition = {
        x: mousePos.x,
        y: mousePos.y
      };
      container.interactivity.mouse.clickTime = new Date().getTime();
      const onClick = options.interactivity.events.onClick;
      if (onClick.mode instanceof Array) {
        for (const mode of onClick.mode) {
          this.handleClickMode(mode);
        }
      } else {
        this.handleClickMode(onClick.mode);
      }
    }
    if (e.type === "touchend") {
      setTimeout(() => this.mouseTouchFinish(), 500);
    }
  }
  handleThemeChange(e) {
    const mediaEvent = e, themeName = mediaEvent.matches ? this.container.options.defaultDarkTheme : this.container.options.defaultLightTheme, theme = this.container.options.themes.find((theme2) => theme2.name === themeName);
    if (theme && theme.default.auto) {
      this.container.loadTheme(themeName);
    }
  }
  handleClickMode(mode) {
    this.container.handleClickMode(mode);
  }
};

// node_modules/tsparticles-engine/esm/Core/Utils/FrameManager.js
var FrameManager = class {
  constructor(container) {
    this.container = container;
  }
  async nextFrame(timestamp) {
    var _a;
    try {
      const container = this.container;
      if (container.lastFrameTime !== void 0 && timestamp < container.lastFrameTime + 1e3 / container.fpsLimit) {
        container.draw(false);
        return;
      }
      (_a = container.lastFrameTime) !== null && _a !== void 0 ? _a : container.lastFrameTime = timestamp;
      const deltaValue = timestamp - container.lastFrameTime, delta = {
        value: deltaValue,
        factor: 60 * deltaValue / 1e3
      };
      container.lifeTime += delta.value;
      container.lastFrameTime = timestamp;
      if (deltaValue > 1e3) {
        container.draw(false);
        return;
      }
      await container.particles.draw(delta);
      if (container.duration > 0 && container.lifeTime > container.duration) {
        container.destroy();
        return;
      }
      if (container.getAnimationStatus()) {
        container.draw(false);
      }
    } catch (e) {
      console.error("tsParticles error in animation loop", e);
    }
  }
};

// node_modules/tsparticles-engine/esm/Core/Utils/InteractionManager.js
var __classPrivateFieldSet5 = function(receiver, state, value, kind, f) {
  if (kind === "m")
    throw new TypeError("Private method is not writable");
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet5 = function(receiver, state, kind, f) {
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _InteractionManager_engine;
var InteractionManager = class {
  constructor(engine, container) {
    this.container = container;
    _InteractionManager_engine.set(this, void 0);
    __classPrivateFieldSet5(this, _InteractionManager_engine, engine, "f");
    this.externalInteractors = [];
    this.particleInteractors = [];
    this.init();
  }
  init() {
    const interactors = __classPrivateFieldGet5(this, _InteractionManager_engine, "f").plugins.getInteractors(this.container, true);
    this.externalInteractors = [];
    this.particleInteractors = [];
    for (const interactor of interactors) {
      switch (interactor.type) {
        case 0:
          this.externalInteractors.push(interactor);
          break;
        case 1:
          this.particleInteractors.push(interactor);
          break;
      }
    }
  }
  async reset(particle) {
    for (const interactor of this.externalInteractors) {
      if (interactor.isEnabled()) {
        await interactor.reset(particle);
      }
    }
    for (const interactor of this.particleInteractors) {
      if (interactor.isEnabled(particle)) {
        await interactor.reset(particle);
      }
    }
  }
  async externalInteract(delta) {
    for (const interactor of this.externalInteractors) {
      if (interactor.isEnabled()) {
        await interactor.interact(delta);
      }
    }
  }
  async particlesInteract(particle, delta) {
    for (const interactor of this.externalInteractors) {
      interactor.clear(particle);
    }
    for (const interactor of this.particleInteractors) {
      if (interactor.isEnabled(particle)) {
        await interactor.interact(particle, delta);
      }
    }
  }
  handleClickMode(mode) {
    for (const interactor of this.externalInteractors) {
      if (interactor.handleClickMode) {
        interactor.handleClickMode(mode);
      }
    }
  }
};
_InteractionManager_engine = /* @__PURE__ */ new WeakMap();

// node_modules/tsparticles-engine/esm/Core/Utils/Vector3d.js
var Vector3d = class extends Vector {
  constructor(xOrCoords, y, z) {
    super(xOrCoords, y);
    if (typeof xOrCoords !== "number" && xOrCoords) {
      this.z = xOrCoords.z;
    } else if (z !== void 0) {
      this.z = z;
    } else {
      throw new Error("tsParticles - Vector not initialized correctly");
    }
  }
  static clone(source) {
    return Vector3d.create(source.x, source.y, source.z);
  }
  static create(x, y, z) {
    return new Vector3d(x, y, z);
  }
  static get origin() {
    return Vector3d.create(0, 0, 0);
  }
  add(v) {
    return v instanceof Vector3d ? Vector3d.create(this.x + v.x, this.y + v.y, this.z + v.z) : super.add(v);
  }
  addTo(v) {
    super.addTo(v);
    if (v instanceof Vector3d) {
      this.z += v.z;
    }
  }
  sub(v) {
    return v instanceof Vector3d ? Vector3d.create(this.x - v.x, this.y - v.y, this.z - v.z) : super.sub(v);
  }
  subFrom(v) {
    super.subFrom(v);
    if (v instanceof Vector3d) {
      this.z -= v.z;
    }
  }
  mult(n) {
    return Vector3d.create(this.x * n, this.y * n, this.z * n);
  }
  multTo(n) {
    super.multTo(n);
    this.z *= n;
  }
  div(n) {
    return Vector3d.create(this.x / n, this.y / n, this.z / n);
  }
  divTo(n) {
    super.divTo(n);
    this.z /= n;
  }
  copy() {
    return Vector3d.clone(this);
  }
  setTo(v) {
    super.setTo(v);
    const v3d = v;
    if (v3d.z !== void 0) {
      this.z = v3d.z;
    }
  }
};

// node_modules/tsparticles-engine/esm/Core/Particle.js
var __classPrivateFieldSet6 = function(receiver, state, value, kind, f) {
  if (kind === "m")
    throw new TypeError("Private method is not writable");
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet6 = function(receiver, state, kind, f) {
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Particle_engine;
var fixOutMode = (data) => {
  if (!(isInArray(data.outMode, data.checkModes) || isInArray(data.outMode, data.checkModes))) {
    return;
  }
  if (data.coord > data.maxCoord - data.radius * 2) {
    data.setCb(-data.radius);
  } else if (data.coord < data.radius * 2) {
    data.setCb(data.radius);
  }
};
var Particle = class {
  constructor(engine, id, container, position, overrideOptions, group) {
    var _a, _b, _c, _d, _e, _f;
    this.id = id;
    this.container = container;
    this.group = group;
    _Particle_engine.set(this, void 0);
    __classPrivateFieldSet6(this, _Particle_engine, engine, "f");
    this.fill = true;
    this.close = true;
    this.lastPathTime = 0;
    this.destroyed = false;
    this.unbreakable = false;
    this.splitCount = 0;
    this.misplaced = false;
    this.retina = {
      maxDistance: {}
    };
    this.outType = "normal";
    this.ignoresResizeRatio = true;
    const pxRatio = container.retina.pixelRatio, mainOptions = container.actualOptions, particlesOptions = loadParticlesOptions(__classPrivateFieldGet6(this, _Particle_engine, "f"), container, mainOptions.particles);
    const shapeType = particlesOptions.shape.type, reduceDuplicates = particlesOptions.reduceDuplicates;
    this.shape = shapeType instanceof Array ? itemFromArray(shapeType, this.id, reduceDuplicates) : shapeType;
    if (overrideOptions === null || overrideOptions === void 0 ? void 0 : overrideOptions.shape) {
      if (overrideOptions.shape.type) {
        const overrideShapeType = overrideOptions.shape.type;
        this.shape = overrideShapeType instanceof Array ? itemFromArray(overrideShapeType, this.id, reduceDuplicates) : overrideShapeType;
      }
      const shapeOptions = new Shape();
      shapeOptions.load(overrideOptions.shape);
      if (this.shape) {
        this.shapeData = this.loadShapeData(shapeOptions, reduceDuplicates);
      }
    } else {
      this.shapeData = this.loadShapeData(particlesOptions.shape, reduceDuplicates);
    }
    particlesOptions.load(overrideOptions);
    particlesOptions.load((_a = this.shapeData) === null || _a === void 0 ? void 0 : _a.particles);
    this.interactivity = new Interactivity();
    this.interactivity.load(container.actualOptions.interactivity);
    this.interactivity.load(particlesOptions.interactivity);
    this.fill = (_c = (_b = this.shapeData) === null || _b === void 0 ? void 0 : _b.fill) !== null && _c !== void 0 ? _c : this.fill;
    this.close = (_e = (_d = this.shapeData) === null || _d === void 0 ? void 0 : _d.close) !== null && _e !== void 0 ? _e : this.close;
    this.options = particlesOptions;
    this.pathDelay = getValue(this.options.move.path.delay) * 1e3;
    const zIndexValue = getRangeValue(this.options.zIndex.value);
    container.retina.initParticle(this);
    const sizeOptions = this.options.size, sizeRange = sizeOptions.value, sizeAnimation = sizeOptions.animation;
    this.size = {
      enable: sizeOptions.animation.enable,
      value: getRangeValue(sizeOptions.value) * container.retina.pixelRatio,
      max: getRangeMax(sizeRange) * pxRatio,
      min: getRangeMin(sizeRange) * pxRatio,
      loops: 0,
      maxLoops: getRangeValue(sizeOptions.animation.count)
    };
    if (sizeAnimation.enable) {
      this.size.status = 0;
      this.size.decay = 1 - getRangeValue(sizeAnimation.decay);
      switch (sizeAnimation.startValue) {
        case "min":
          this.size.value = this.size.min;
          this.size.status = 0;
          break;
        case "random":
          this.size.value = randomInRange(this.size) * pxRatio;
          this.size.status = Math.random() >= 0.5 ? 0 : 1;
          break;
        case "max":
        default:
          this.size.value = this.size.max;
          this.size.status = 1;
          break;
      }
      this.size.velocity = ((_f = this.retina.sizeAnimationSpeed) !== null && _f !== void 0 ? _f : container.retina.sizeAnimationSpeed) / 100 * container.retina.reduceFactor;
      if (!sizeAnimation.sync) {
        this.size.velocity *= Math.random();
      }
    }
    this.bubble = {
      inRange: false
    };
    this.position = this.calcPosition(container, position, clamp(zIndexValue, 0, container.zLayers));
    this.initialPosition = this.position.copy();
    const canvasSize = container.canvas.size, moveCenterPerc = this.options.move.center;
    this.moveCenter = {
      x: canvasSize.width * moveCenterPerc.x / 100,
      y: canvasSize.height * moveCenterPerc.y / 100,
      radius: this.options.move.center.radius
    };
    this.direction = getParticleDirectionAngle(this.options.move.direction, this.position, this.moveCenter);
    switch (this.options.move.direction) {
      case "inside":
        this.outType = "inside";
        break;
      case "outside":
        this.outType = "outside";
        break;
    }
    this.initialVelocity = this.calculateVelocity();
    this.velocity = this.initialVelocity.copy();
    this.moveDecay = 1 - getRangeValue(this.options.move.decay);
    const gravityOptions = this.options.move.gravity;
    this.gravity = {
      enable: gravityOptions.enable,
      acceleration: getRangeValue(gravityOptions.acceleration),
      inverse: gravityOptions.inverse
    };
    this.offset = Vector.origin;
    const particles = container.particles;
    particles.needsSort = particles.needsSort || particles.lastZIndex < this.position.z;
    particles.lastZIndex = this.position.z;
    this.zIndexFactor = this.position.z / container.zLayers;
    this.sides = 24;
    let drawer = container.drawers.get(this.shape);
    if (!drawer) {
      drawer = __classPrivateFieldGet6(this, _Particle_engine, "f").plugins.getShapeDrawer(this.shape);
      if (drawer) {
        container.drawers.set(this.shape, drawer);
      }
    }
    if (drawer === null || drawer === void 0 ? void 0 : drawer.loadShape) {
      drawer === null || drawer === void 0 ? void 0 : drawer.loadShape(this);
    }
    const sideCountFunc = drawer === null || drawer === void 0 ? void 0 : drawer.getSidesCount;
    if (sideCountFunc) {
      this.sides = sideCountFunc(this);
    }
    this.spawning = false;
    this.shadowColor = rangeColorToRgb(this.options.shadow.color);
    for (const updater of container.particles.updaters) {
      if (updater.init) {
        updater.init(this);
      }
    }
    for (const mover of container.particles.movers) {
      if (mover.init) {
        mover.init(this);
      }
    }
    if (drawer && drawer.particleInit) {
      drawer.particleInit(container, this);
    }
    for (const [, plugin] of container.plugins) {
      if (plugin.particleCreated) {
        plugin.particleCreated(this);
      }
    }
  }
  isVisible() {
    return !this.destroyed && !this.spawning && this.isInsideCanvas();
  }
  isInsideCanvas() {
    const radius = this.getRadius(), canvasSize = this.container.canvas.size;
    return this.position.x >= -radius && this.position.y >= -radius && this.position.y <= canvasSize.height + radius && this.position.x <= canvasSize.width + radius;
  }
  draw(delta) {
    const container = this.container;
    for (const [, plugin] of container.plugins) {
      container.canvas.drawParticlePlugin(plugin, this, delta);
    }
    container.canvas.drawParticle(this, delta);
  }
  getPosition() {
    return {
      x: this.position.x + this.offset.x,
      y: this.position.y + this.offset.y,
      z: this.position.z
    };
  }
  getRadius() {
    var _a;
    return (_a = this.bubble.radius) !== null && _a !== void 0 ? _a : this.size.value;
  }
  getMass() {
    return this.getRadius() ** 2 * Math.PI / 2;
  }
  getFillColor() {
    var _a, _b;
    const color = (_a = this.bubble.color) !== null && _a !== void 0 ? _a : getHslFromAnimation(this.color);
    if (color && this.roll && (this.backColor || this.roll.alter)) {
      const backFactor = this.roll.horizontal && this.roll.vertical ? 2 : 1, backSum = this.roll.horizontal ? Math.PI / 2 : 0, rolled = Math.floor((((_b = this.roll.angle) !== null && _b !== void 0 ? _b : 0) + backSum) / (Math.PI / backFactor)) % 2;
      if (rolled) {
        if (this.backColor) {
          return this.backColor;
        }
        if (this.roll.alter) {
          return alterHsl(color, this.roll.alter.type, this.roll.alter.value);
        }
      }
    }
    return color;
  }
  getStrokeColor() {
    var _a, _b;
    return (_b = (_a = this.bubble.color) !== null && _a !== void 0 ? _a : getHslFromAnimation(this.strokeColor)) !== null && _b !== void 0 ? _b : this.getFillColor();
  }
  destroy(override) {
    if (this.unbreakable || this.destroyed) {
      return;
    }
    this.destroyed = true;
    this.bubble.inRange = false;
    for (const [, plugin] of this.container.plugins) {
      if (plugin.particleDestroyed) {
        plugin.particleDestroyed(this, override);
      }
    }
    if (override) {
      return;
    }
    const destroyOptions = this.options.destroy;
    if (destroyOptions.mode === "split") {
      this.split();
    }
  }
  reset() {
    if (this.opacity) {
      this.opacity.loops = 0;
    }
    this.size.loops = 0;
  }
  split() {
    const splitOptions = this.options.destroy.split;
    if (splitOptions.count >= 0 && this.splitCount++ > splitOptions.count) {
      return;
    }
    const rate = getValue(splitOptions.rate), particlesSplitOptions = splitOptions.particles instanceof Array ? itemFromArray(splitOptions.particles) : splitOptions.particles;
    for (let i = 0; i < rate; i++) {
      this.container.particles.addSplitParticle(this, particlesSplitOptions);
    }
  }
  calcPosition(container, position, zIndex, tryCount = 0) {
    var _a, _b, _c, _d;
    for (const [, plugin] of container.plugins) {
      const pluginPos = plugin.particlePosition !== void 0 ? plugin.particlePosition(position, this) : void 0;
      if (pluginPos !== void 0) {
        return Vector3d.create(pluginPos.x, pluginPos.y, zIndex);
      }
    }
    const canvasSize = container.canvas.size, exactPosition = calcExactPositionOrRandomFromSize({
      size: canvasSize,
      position
    }), pos = Vector3d.create(exactPosition.x, exactPosition.y, zIndex), radius = this.getRadius(), outModes = this.options.move.outModes, fixHorizontal = (outMode) => {
      fixOutMode({
        outMode,
        checkModes: ["bounce", "bounce-horizontal"],
        coord: pos.x,
        maxCoord: container.canvas.size.width,
        setCb: (value) => pos.x += value,
        radius
      });
    }, fixVertical = (outMode) => {
      fixOutMode({
        outMode,
        checkModes: ["bounce", "bounce-vertical"],
        coord: pos.y,
        maxCoord: container.canvas.size.height,
        setCb: (value) => pos.y += value,
        radius
      });
    };
    fixHorizontal((_a = outModes.left) !== null && _a !== void 0 ? _a : outModes.default);
    fixHorizontal((_b = outModes.right) !== null && _b !== void 0 ? _b : outModes.default);
    fixVertical((_c = outModes.top) !== null && _c !== void 0 ? _c : outModes.default);
    fixVertical((_d = outModes.bottom) !== null && _d !== void 0 ? _d : outModes.default);
    if (this.checkOverlap(pos, tryCount)) {
      return this.calcPosition(container, void 0, zIndex, tryCount + 1);
    }
    return pos;
  }
  checkOverlap(pos, tryCount = 0) {
    const collisionsOptions = this.options.collisions, radius = this.getRadius();
    if (!collisionsOptions.enable) {
      return false;
    }
    const overlapOptions = collisionsOptions.overlap;
    if (overlapOptions.enable) {
      return false;
    }
    const retries = overlapOptions.retries;
    if (retries >= 0 && tryCount > retries) {
      throw new Error("Particle is overlapping and can't be placed");
    }
    let overlaps = false;
    for (const particle of this.container.particles.array) {
      if (getDistance(pos, particle.position) < radius + particle.getRadius()) {
        overlaps = true;
        break;
      }
    }
    return overlaps;
  }
  calculateVelocity() {
    const baseVelocity = getParticleBaseVelocity(this.direction);
    const res = baseVelocity.copy();
    const moveOptions = this.options.move;
    if (moveOptions.direction === "inside" || moveOptions.direction === "outside") {
      return res;
    }
    const rad = Math.PI / 180 * getRangeValue(moveOptions.angle.value);
    const radOffset = Math.PI / 180 * getRangeValue(moveOptions.angle.offset);
    const range = {
      left: radOffset - rad / 2,
      right: radOffset + rad / 2
    };
    if (!moveOptions.straight) {
      res.angle += randomInRange(setRangeValue(range.left, range.right));
    }
    if (moveOptions.random && typeof moveOptions.speed === "number") {
      res.length *= Math.random();
    }
    return res;
  }
  loadShapeData(shapeOptions, reduceDuplicates) {
    const shapeData = shapeOptions.options[this.shape];
    if (shapeData) {
      return deepExtend({}, shapeData instanceof Array ? itemFromArray(shapeData, this.id, reduceDuplicates) : shapeData);
    }
  }
};
_Particle_engine = /* @__PURE__ */ new WeakMap();

// node_modules/tsparticles-engine/esm/Core/Utils/Point.js
var Point = class {
  constructor(position, particle) {
    this.position = position;
    this.particle = particle;
  }
};

// node_modules/tsparticles-engine/esm/Core/Utils/Range.js
var Range = class {
  constructor(x, y) {
    this.position = {
      x,
      y
    };
  }
};

// node_modules/tsparticles-engine/esm/Core/Utils/Circle.js
var Circle = class extends Range {
  constructor(x, y, radius) {
    super(x, y);
    this.radius = radius;
  }
  contains(point) {
    return getDistance(point, this.position) <= this.radius;
  }
  intersects(range) {
    const rect = range, circle = range, pos1 = this.position, pos2 = range.position, xDist = Math.abs(pos2.x - pos1.x), yDist = Math.abs(pos2.y - pos1.y), r = this.radius;
    if (circle.radius !== void 0) {
      const rSum = r + circle.radius, dist = Math.sqrt(xDist * xDist + yDist + yDist);
      return rSum > dist;
    } else if (rect.size !== void 0) {
      const w = rect.size.width, h = rect.size.height, edges = Math.pow(xDist - w, 2) + Math.pow(yDist - h, 2);
      if (xDist > r + w || yDist > r + h) {
        return false;
      }
      if (xDist <= w || yDist <= h) {
        return true;
      }
      return edges <= r * r;
    }
    return false;
  }
};

// node_modules/tsparticles-engine/esm/Core/Utils/Rectangle.js
var Rectangle = class extends Range {
  constructor(x, y, width, height) {
    super(x, y);
    this.size = {
      height,
      width
    };
  }
  contains(point) {
    const w = this.size.width, h = this.size.height, pos = this.position;
    return point.x >= pos.x && point.x <= pos.x + w && point.y >= pos.y && point.y <= pos.y + h;
  }
  intersects(range) {
    const rect = range, circle = range, w = this.size.width, h = this.size.height, pos1 = this.position, pos2 = range.position;
    if (circle.radius !== void 0) {
      return circle.intersects(this);
    }
    if (!rect.size) {
      return false;
    }
    const size2 = rect.size, w2 = size2.width, h2 = size2.height;
    return pos2.x < pos1.x + w && pos2.x + w2 > pos1.x && pos2.y < pos1.y + h && pos2.y + h2 > pos1.y;
  }
};

// node_modules/tsparticles-engine/esm/Core/Utils/CircleWarp.js
var CircleWarp = class extends Circle {
  constructor(x, y, radius, canvasSize) {
    super(x, y, radius);
    this.canvasSize = canvasSize;
    this.canvasSize = Object.assign({}, canvasSize);
  }
  contains(point) {
    if (super.contains(point)) {
      return true;
    }
    const posNE = {
      x: point.x - this.canvasSize.width,
      y: point.y
    };
    if (super.contains(posNE)) {
      return true;
    }
    const posSE = {
      x: point.x - this.canvasSize.width,
      y: point.y - this.canvasSize.height
    };
    if (super.contains(posSE)) {
      return true;
    }
    const posSW = {
      x: point.x,
      y: point.y - this.canvasSize.height
    };
    return super.contains(posSW);
  }
  intersects(range) {
    if (super.intersects(range)) {
      return true;
    }
    const rect = range, circle = range, newPos = {
      x: range.position.x - this.canvasSize.width,
      y: range.position.y - this.canvasSize.height
    };
    if (circle.radius !== void 0) {
      const biggerCircle = new Circle(newPos.x, newPos.y, circle.radius * 2);
      return super.intersects(biggerCircle);
    } else if (rect.size !== void 0) {
      const rectSW = new Rectangle(newPos.x, newPos.y, rect.size.width * 2, rect.size.height * 2);
      return super.intersects(rectSW);
    }
    return false;
  }
};

// node_modules/tsparticles-engine/esm/Core/Utils/QuadTree.js
var QuadTree = class {
  constructor(rectangle, capacity) {
    this.rectangle = rectangle;
    this.capacity = capacity;
    this.points = [];
    this.divided = false;
  }
  insert(point) {
    var _a, _b, _c, _d, _e;
    if (!this.rectangle.contains(point.position)) {
      return false;
    }
    if (this.points.length < this.capacity) {
      this.points.push(point);
      return true;
    }
    if (!this.divided) {
      this.subdivide();
    }
    return (_e = ((_a = this.northEast) === null || _a === void 0 ? void 0 : _a.insert(point)) || ((_b = this.northWest) === null || _b === void 0 ? void 0 : _b.insert(point)) || ((_c = this.southEast) === null || _c === void 0 ? void 0 : _c.insert(point)) || ((_d = this.southWest) === null || _d === void 0 ? void 0 : _d.insert(point))) !== null && _e !== void 0 ? _e : false;
  }
  queryCircle(position, radius, check) {
    return this.query(new Circle(position.x, position.y, radius), check);
  }
  queryCircleWarp(position, radius, containerOrSize, check) {
    const container = containerOrSize, size = containerOrSize;
    return this.query(new CircleWarp(position.x, position.y, radius, container.canvas !== void 0 ? container.canvas.size : size), check);
  }
  queryRectangle(position, size, check) {
    return this.query(new Rectangle(position.x, position.y, size.width, size.height), check);
  }
  query(range, check, found) {
    var _a, _b, _c, _d;
    const res = found !== null && found !== void 0 ? found : [];
    if (!range.intersects(this.rectangle)) {
      return [];
    }
    for (const p of this.points) {
      if (!range.contains(p.position) && getDistance(range.position, p.position) > p.particle.getRadius() && (!check || check(p.particle))) {
        continue;
      }
      res.push(p.particle);
    }
    if (this.divided) {
      (_a = this.northEast) === null || _a === void 0 ? void 0 : _a.query(range, check, res);
      (_b = this.northWest) === null || _b === void 0 ? void 0 : _b.query(range, check, res);
      (_c = this.southEast) === null || _c === void 0 ? void 0 : _c.query(range, check, res);
      (_d = this.southWest) === null || _d === void 0 ? void 0 : _d.query(range, check, res);
    }
    return res;
  }
  subdivide() {
    const x = this.rectangle.position.x, y = this.rectangle.position.y, w = this.rectangle.size.width, h = this.rectangle.size.height, capacity = this.capacity;
    this.northEast = new QuadTree(new Rectangle(x, y, w / 2, h / 2), capacity);
    this.northWest = new QuadTree(new Rectangle(x + w / 2, y, w / 2, h / 2), capacity);
    this.southEast = new QuadTree(new Rectangle(x, y + h / 2, w / 2, h / 2), capacity);
    this.southWest = new QuadTree(new Rectangle(x + w / 2, y + h / 2, w / 2, h / 2), capacity);
    this.divided = true;
  }
};

// node_modules/tsparticles-engine/esm/Core/Particles.js
var __classPrivateFieldSet7 = function(receiver, state, value, kind, f) {
  if (kind === "m")
    throw new TypeError("Private method is not writable");
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet7 = function(receiver, state, kind, f) {
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Particles_engine;
var Particles = class {
  constructor(engine, container) {
    this.container = container;
    _Particles_engine.set(this, void 0);
    __classPrivateFieldSet7(this, _Particles_engine, engine, "f");
    this.nextId = 0;
    this.array = [];
    this.zArray = [];
    this.limit = 0;
    this.needsSort = false;
    this.lastZIndex = 0;
    this.freqs = {
      links: /* @__PURE__ */ new Map(),
      triangles: /* @__PURE__ */ new Map()
    };
    this.interactionManager = new InteractionManager(__classPrivateFieldGet7(this, _Particles_engine, "f"), container);
    const canvasSize = this.container.canvas.size;
    this.linksColors = /* @__PURE__ */ new Map();
    this.quadTree = new QuadTree(new Rectangle(-canvasSize.width / 4, -canvasSize.height / 4, canvasSize.width * 3 / 2, canvasSize.height * 3 / 2), 4);
    this.movers = __classPrivateFieldGet7(this, _Particles_engine, "f").plugins.getMovers(container, true);
    this.updaters = __classPrivateFieldGet7(this, _Particles_engine, "f").plugins.getUpdaters(container, true);
  }
  get count() {
    return this.array.length;
  }
  init() {
    var _a;
    const container = this.container, options = container.actualOptions;
    this.lastZIndex = 0;
    this.needsSort = false;
    this.freqs.links = /* @__PURE__ */ new Map();
    this.freqs.triangles = /* @__PURE__ */ new Map();
    let handled = false;
    this.updaters = __classPrivateFieldGet7(this, _Particles_engine, "f").plugins.getUpdaters(container, true);
    this.interactionManager.init();
    for (const [, plugin] of container.plugins) {
      if (plugin.particlesInitialization !== void 0) {
        handled = plugin.particlesInitialization();
      }
      if (handled) {
        break;
      }
    }
    this.addManualParticles();
    if (!handled) {
      for (const group in options.particles.groups) {
        const groupOptions = options.particles.groups[group];
        for (let i = this.count, j = 0; j < ((_a = groupOptions.number) === null || _a === void 0 ? void 0 : _a.value) && i < options.particles.number.value; i++, j++) {
          this.addParticle(void 0, groupOptions, group);
        }
      }
      for (let i = this.count; i < options.particles.number.value; i++) {
        this.addParticle();
      }
    }
    container.pathGenerator.init(container);
  }
  destroy() {
    this.array = [];
    this.zArray = [];
    this.movers = [];
    this.updaters = [];
  }
  async redraw() {
    this.clear();
    this.init();
    await this.draw({ value: 0, factor: 0 });
  }
  removeAt(index, quantity = 1, group, override) {
    if (!(index >= 0 && index <= this.count)) {
      return;
    }
    let deleted = 0;
    for (let i = index; deleted < quantity && i < this.count; i++) {
      const particle = this.array[i];
      if (!particle || particle.group !== group) {
        continue;
      }
      particle.destroy(override);
      this.array.splice(i--, 1);
      const zIdx = this.zArray.indexOf(particle);
      this.zArray.splice(zIdx, 1);
      deleted++;
      __classPrivateFieldGet7(this, _Particles_engine, "f").dispatchEvent("particleRemoved", {
        container: this.container,
        data: {
          particle
        }
      });
    }
  }
  remove(particle, group, override) {
    this.removeAt(this.array.indexOf(particle), void 0, group, override);
  }
  async update(delta) {
    const container = this.container, particlesToDelete = [];
    container.pathGenerator.update();
    for (const [, plugin] of container.plugins) {
      if (plugin.update) {
        plugin.update(delta);
      }
    }
    for (const particle of this.array) {
      const resizeFactor = container.canvas.resizeFactor;
      if (resizeFactor && !particle.ignoresResizeRatio) {
        particle.position.x *= resizeFactor.width;
        particle.position.y *= resizeFactor.height;
      }
      particle.ignoresResizeRatio = false;
      await this.interactionManager.reset(particle);
      for (const [, plugin] of this.container.plugins) {
        if (particle.destroyed) {
          break;
        }
        if (plugin.particleUpdate) {
          plugin.particleUpdate(particle, delta);
        }
      }
      for (const mover of this.movers) {
        if (mover.isEnabled(particle)) {
          mover.move(particle, delta);
        }
      }
      if (particle.destroyed) {
        particlesToDelete.push(particle);
        continue;
      }
      this.quadTree.insert(new Point(particle.getPosition(), particle));
    }
    for (const particle of particlesToDelete) {
      this.remove(particle);
    }
    await this.interactionManager.externalInteract(delta);
    for (const particle of container.particles.array) {
      for (const updater of this.updaters) {
        updater.update(particle, delta);
      }
      if (!particle.destroyed && !particle.spawning) {
        await this.interactionManager.particlesInteract(particle, delta);
      }
    }
    delete container.canvas.resizeFactor;
  }
  async draw(delta) {
    const container = this.container, canvasSize = this.container.canvas.size;
    this.quadTree = new QuadTree(new Rectangle(-canvasSize.width / 4, -canvasSize.height / 4, canvasSize.width * 3 / 2, canvasSize.height * 3 / 2), 4);
    container.canvas.clear();
    await this.update(delta);
    if (this.needsSort) {
      this.zArray.sort((a, b) => b.position.z - a.position.z || a.id - b.id);
      this.lastZIndex = this.zArray[this.zArray.length - 1].position.z;
      this.needsSort = false;
    }
    for (const [, plugin] of container.plugins) {
      container.canvas.drawPlugin(plugin, delta);
    }
    for (const p of this.zArray) {
      p.draw(delta);
    }
  }
  clear() {
    this.array = [];
    this.zArray = [];
  }
  push(nb, mouse, overrideOptions, group) {
    this.pushing = true;
    for (let i = 0; i < nb; i++) {
      this.addParticle(mouse === null || mouse === void 0 ? void 0 : mouse.position, overrideOptions, group);
    }
    this.pushing = false;
  }
  addParticle(position, overrideOptions, group) {
    const container = this.container, options = container.actualOptions, limit = options.particles.number.limit * container.density;
    if (limit > 0) {
      const countToRemove = this.count + 1 - limit;
      if (countToRemove > 0) {
        this.removeQuantity(countToRemove);
      }
    }
    return this.pushParticle(position, overrideOptions, group);
  }
  addSplitParticle(parent, splitParticlesOptions) {
    const splitOptions = parent.options.destroy.split, options = loadParticlesOptions(__classPrivateFieldGet7(this, _Particles_engine, "f"), this.container, parent.options), factor = getValue(splitOptions.factor);
    options.color.load({
      value: {
        hsl: parent.getFillColor()
      }
    });
    if (typeof options.size.value === "number") {
      options.size.value /= factor;
    } else {
      options.size.value.min /= factor;
      options.size.value.max /= factor;
    }
    options.load(splitParticlesOptions);
    const offset = splitOptions.sizeOffset ? setRangeValue(-parent.size.value, parent.size.value) : 0, position = {
      x: parent.position.x + randomInRange(offset),
      y: parent.position.y + randomInRange(offset)
    };
    return this.pushParticle(position, options, parent.group, (particle) => {
      if (particle.size.value < 0.5) {
        return false;
      }
      particle.velocity.length = randomInRange(setRangeValue(parent.velocity.length, particle.velocity.length));
      particle.splitCount = parent.splitCount + 1;
      particle.unbreakable = true;
      setTimeout(() => {
        particle.unbreakable = false;
      }, 500);
      return true;
    });
  }
  removeQuantity(quantity, group) {
    this.removeAt(0, quantity, group);
  }
  getLinkFrequency(p1, p2) {
    const range = setRangeValue(p1.id, p2.id), key = `${getRangeMin(range)}_${getRangeMax(range)}`;
    let res = this.freqs.links.get(key);
    if (res === void 0) {
      res = Math.random();
      this.freqs.links.set(key, res);
    }
    return res;
  }
  getTriangleFrequency(p1, p2, p3) {
    let [id1, id2, id3] = [p1.id, p2.id, p3.id];
    if (id1 > id2) {
      [id2, id1] = [id1, id2];
    }
    if (id2 > id3) {
      [id3, id2] = [id2, id3];
    }
    if (id1 > id3) {
      [id3, id1] = [id1, id3];
    }
    const key = `${id1}_${id2}_${id3}`;
    let res = this.freqs.triangles.get(key);
    if (res === void 0) {
      res = Math.random();
      this.freqs.triangles.set(key, res);
    }
    return res;
  }
  addManualParticles() {
    const container = this.container, options = container.actualOptions;
    for (const particle of options.manualParticles) {
      this.addParticle(calcPositionFromSize({
        size: container.canvas.size,
        position: particle.position
      }), particle.options);
    }
  }
  setDensity() {
    const options = this.container.actualOptions;
    for (const group in options.particles.groups) {
      this.applyDensity(options.particles.groups[group], 0, group);
    }
    this.applyDensity(options.particles, options.manualParticles.length);
  }
  handleClickMode(mode) {
    this.interactionManager.handleClickMode(mode);
  }
  applyDensity(options, manualCount, group) {
    var _a;
    if (!((_a = options.number.density) === null || _a === void 0 ? void 0 : _a.enable)) {
      return;
    }
    const numberOptions = options.number, densityFactor = this.initDensityFactor(numberOptions.density), optParticlesNumber = numberOptions.value, optParticlesLimit = numberOptions.limit > 0 ? numberOptions.limit : optParticlesNumber, particlesNumber = Math.min(optParticlesNumber, optParticlesLimit) * densityFactor + manualCount, particlesCount = Math.min(this.count, this.array.filter((t) => t.group === group).length);
    this.limit = numberOptions.limit * densityFactor;
    if (particlesCount < particlesNumber) {
      this.push(Math.abs(particlesNumber - particlesCount), void 0, options, group);
    } else if (particlesCount > particlesNumber) {
      this.removeQuantity(particlesCount - particlesNumber, group);
    }
  }
  initDensityFactor(densityOptions) {
    const container = this.container;
    if (!container.canvas.element || !densityOptions.enable) {
      return 1;
    }
    const canvas = container.canvas.element, pxRatio = container.retina.pixelRatio;
    return canvas.width * canvas.height / (densityOptions.factor * pxRatio ** 2 * densityOptions.area);
  }
  pushParticle(position, overrideOptions, group, initializer) {
    try {
      const particle = new Particle(__classPrivateFieldGet7(this, _Particles_engine, "f"), this.nextId, this.container, position, overrideOptions, group);
      let canAdd = true;
      if (initializer) {
        canAdd = initializer(particle);
      }
      if (!canAdd) {
        return;
      }
      this.array.push(particle);
      this.zArray.push(particle);
      this.nextId++;
      __classPrivateFieldGet7(this, _Particles_engine, "f").dispatchEvent("particleAdded", {
        container: this.container,
        data: {
          particle
        }
      });
      return particle;
    } catch (e) {
      console.warn(`error adding particle: ${e}`);
      return;
    }
  }
};
_Particles_engine = /* @__PURE__ */ new WeakMap();

// node_modules/tsparticles-engine/esm/Core/Retina.js
var Retina = class {
  constructor(container) {
    this.container = container;
  }
  init() {
    const container = this.container, options = container.actualOptions;
    this.pixelRatio = !options.detectRetina || isSsr() ? 1 : window.devicePixelRatio;
    const motionOptions = this.container.actualOptions.motion;
    if (motionOptions && (motionOptions.disable || motionOptions.reduce.value)) {
      if (isSsr() || typeof matchMedia === "undefined" || !matchMedia) {
        this.reduceFactor = 1;
      } else {
        const mediaQuery = matchMedia("(prefers-reduced-motion: reduce)");
        if (mediaQuery) {
          this.handleMotionChange(mediaQuery);
          const handleChange = () => {
            this.handleMotionChange(mediaQuery);
            container.refresh().catch(() => {
            });
          };
          if (mediaQuery.addEventListener !== void 0) {
            mediaQuery.addEventListener("change", handleChange);
          } else if (mediaQuery.addListener !== void 0) {
            mediaQuery.addListener(handleChange);
          }
        }
      }
    } else {
      this.reduceFactor = 1;
    }
    const ratio = this.pixelRatio;
    if (container.canvas.element) {
      const element = container.canvas.element;
      container.canvas.size.width = element.offsetWidth * ratio;
      container.canvas.size.height = element.offsetHeight * ratio;
    }
    const particles = options.particles;
    this.attractDistance = getRangeValue(particles.move.attract.distance) * ratio;
    this.linksDistance = particles.links.distance * ratio;
    this.linksWidth = particles.links.width * ratio;
    this.sizeAnimationSpeed = getRangeValue(particles.size.animation.speed) * ratio;
    this.maxSpeed = getRangeValue(particles.move.gravity.maxSpeed) * ratio;
    const modes = options.interactivity.modes;
    this.connectModeDistance = modes.connect.distance * ratio;
    this.connectModeRadius = modes.connect.radius * ratio;
    this.grabModeDistance = modes.grab.distance * ratio;
    this.repulseModeDistance = modes.repulse.distance * ratio;
    this.bounceModeDistance = modes.bounce.distance * ratio;
    this.attractModeDistance = modes.attract.distance * ratio;
    this.slowModeRadius = modes.slow.radius * ratio;
    this.bubbleModeDistance = modes.bubble.distance * ratio;
    if (modes.bubble.size) {
      this.bubbleModeSize = modes.bubble.size * ratio;
    }
  }
  initParticle(particle) {
    const options = particle.options, ratio = this.pixelRatio, moveDistance = options.move.distance, props = particle.retina;
    props.attractDistance = getRangeValue(options.move.attract.distance) * ratio;
    props.linksDistance = options.links.distance * ratio;
    props.linksWidth = options.links.width * ratio;
    props.moveDrift = getRangeValue(options.move.drift) * ratio;
    props.moveSpeed = getRangeValue(options.move.speed) * ratio;
    props.sizeAnimationSpeed = getRangeValue(options.size.animation.speed) * ratio;
    const maxDistance = props.maxDistance;
    maxDistance.horizontal = moveDistance.horizontal !== void 0 ? moveDistance.horizontal * ratio : void 0;
    maxDistance.vertical = moveDistance.vertical !== void 0 ? moveDistance.vertical * ratio : void 0;
    props.maxSpeed = getRangeValue(options.move.gravity.maxSpeed) * ratio;
  }
  handleMotionChange(mediaQuery) {
    const options = this.container.actualOptions;
    if (mediaQuery.matches) {
      const motion = options.motion;
      this.reduceFactor = motion.disable ? 0 : motion.reduce.value ? 1 / motion.reduce.factor : 1;
    } else {
      this.reduceFactor = 1;
    }
  }
};

// node_modules/tsparticles-engine/esm/Core/Container.js
var __classPrivateFieldSet8 = function(receiver, state, value, kind, f) {
  if (kind === "m")
    throw new TypeError("Private method is not writable");
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet8 = function(receiver, state, kind, f) {
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Container_engine;
var Container = class {
  constructor(engine, id, sourceOptions) {
    this.id = id;
    _Container_engine.set(this, void 0);
    __classPrivateFieldSet8(this, _Container_engine, engine, "f");
    this.fpsLimit = 120;
    this.duration = 0;
    this.lifeTime = 0;
    this.firstStart = true;
    this.started = false;
    this.destroyed = false;
    this.paused = true;
    this.lastFrameTime = 0;
    this.zLayers = 100;
    this.pageHidden = false;
    this._sourceOptions = sourceOptions;
    this._initialSourceOptions = sourceOptions;
    this.retina = new Retina(this);
    this.canvas = new Canvas(this);
    this.particles = new Particles(__classPrivateFieldGet8(this, _Container_engine, "f"), this);
    this.drawer = new FrameManager(this);
    this.pathGenerator = {
      generate: (p) => {
        const v = p.velocity.copy();
        v.angle += v.length * Math.PI / 180;
        return v;
      },
      init: () => {
      },
      update: () => {
      }
    };
    this.interactivity = {
      mouse: {
        clicking: false,
        inside: false
      }
    };
    this.plugins = /* @__PURE__ */ new Map();
    this.drawers = /* @__PURE__ */ new Map();
    this.density = 1;
    this._options = loadContainerOptions(__classPrivateFieldGet8(this, _Container_engine, "f"), this);
    this.actualOptions = loadContainerOptions(__classPrivateFieldGet8(this, _Container_engine, "f"), this);
    this.eventListeners = new EventListeners(this);
    if (typeof IntersectionObserver !== "undefined" && IntersectionObserver) {
      this.intersectionObserver = new IntersectionObserver((entries) => this.intersectionManager(entries));
    }
    __classPrivateFieldGet8(this, _Container_engine, "f").dispatchEvent("containerBuilt", { container: this });
  }
  get options() {
    return this._options;
  }
  get sourceOptions() {
    return this._sourceOptions;
  }
  play(force) {
    const needsUpdate = this.paused || force;
    if (this.firstStart && !this.actualOptions.autoPlay) {
      this.firstStart = false;
      return;
    }
    if (this.paused) {
      this.paused = false;
    }
    if (needsUpdate) {
      for (const [, plugin] of this.plugins) {
        if (plugin.play) {
          plugin.play();
        }
      }
    }
    __classPrivateFieldGet8(this, _Container_engine, "f").dispatchEvent("containerPlay", { container: this });
    this.draw(needsUpdate || false);
  }
  pause() {
    if (this.drawAnimationFrame !== void 0) {
      cancelAnimation()(this.drawAnimationFrame);
      delete this.drawAnimationFrame;
    }
    if (this.paused) {
      return;
    }
    for (const [, plugin] of this.plugins) {
      if (plugin.pause) {
        plugin.pause();
      }
    }
    if (!this.pageHidden) {
      this.paused = true;
    }
    __classPrivateFieldGet8(this, _Container_engine, "f").dispatchEvent("containerPaused", { container: this });
  }
  draw(force) {
    let refreshTime = force;
    this.drawAnimationFrame = animate()(async (timestamp) => {
      if (refreshTime) {
        this.lastFrameTime = void 0;
        refreshTime = false;
      }
      await this.drawer.nextFrame(timestamp);
    });
  }
  getAnimationStatus() {
    return !this.paused && !this.pageHidden;
  }
  setNoise(noiseOrGenerator, init, update) {
    this.setPath(noiseOrGenerator, init, update);
  }
  setPath(pathOrGenerator, init, update) {
    var _a, _b, _c;
    if (!pathOrGenerator) {
      return;
    }
    if (typeof pathOrGenerator === "function") {
      this.pathGenerator.generate = pathOrGenerator;
      if (init) {
        this.pathGenerator.init = init;
      }
      if (update) {
        this.pathGenerator.update = update;
      }
    } else {
      const oldGenerator = this.pathGenerator;
      this.pathGenerator = pathOrGenerator;
      (_a = this.pathGenerator).generate || (_a.generate = oldGenerator.generate);
      (_b = this.pathGenerator).init || (_b.init = oldGenerator.init);
      (_c = this.pathGenerator).update || (_c.update = oldGenerator.update);
    }
  }
  destroy() {
    this.stop();
    this.particles.destroy();
    this.canvas.destroy();
    for (const [, drawer] of this.drawers) {
      if (drawer.destroy) {
        drawer.destroy(this);
      }
    }
    for (const key of this.drawers.keys()) {
      this.drawers.delete(key);
    }
    this.destroyed = true;
    __classPrivateFieldGet8(this, _Container_engine, "f").dispatchEvent("containerDestroyed", { container: this });
  }
  exportImg(callback) {
    this.exportImage(callback);
  }
  exportImage(callback, type, quality) {
    var _a;
    return (_a = this.canvas.element) === null || _a === void 0 ? void 0 : _a.toBlob(callback, type !== null && type !== void 0 ? type : "image/png", quality);
  }
  exportConfiguration() {
    return JSON.stringify(this.actualOptions, void 0, 2);
  }
  refresh() {
    this.stop();
    return this.start();
  }
  reset() {
    this._options = loadContainerOptions(__classPrivateFieldGet8(this, _Container_engine, "f"), this);
    return this.refresh();
  }
  stop() {
    if (!this.started) {
      return;
    }
    this.firstStart = true;
    this.started = false;
    this.eventListeners.removeListeners();
    this.pause();
    this.particles.clear();
    this.canvas.clear();
    if (this.interactivity.element instanceof HTMLElement && this.intersectionObserver) {
      this.intersectionObserver.unobserve(this.interactivity.element);
    }
    for (const [, plugin] of this.plugins) {
      if (plugin.stop) {
        plugin.stop();
      }
    }
    for (const key of this.plugins.keys()) {
      this.plugins.delete(key);
    }
    __classPrivateFieldGet8(this, _Container_engine, "f").plugins.destroy(this);
    this.particles.linksColors = /* @__PURE__ */ new Map();
    delete this.particles.grabLineColor;
    delete this.particles.linksColor;
    this._sourceOptions = this._options;
    __classPrivateFieldGet8(this, _Container_engine, "f").dispatchEvent("containerStopped", { container: this });
  }
  async loadTheme(name) {
    this.currentTheme = name;
    await this.refresh();
  }
  async start() {
    if (this.started) {
      return;
    }
    await this.init();
    this.started = true;
    this.eventListeners.addListeners();
    if (this.interactivity.element instanceof HTMLElement && this.intersectionObserver) {
      this.intersectionObserver.observe(this.interactivity.element);
    }
    for (const [, plugin] of this.plugins) {
      if (plugin.startAsync !== void 0) {
        await plugin.startAsync();
      } else if (plugin.start !== void 0) {
        plugin.start();
      }
    }
    __classPrivateFieldGet8(this, _Container_engine, "f").dispatchEvent("containerStarted", { container: this });
    this.play();
  }
  addClickHandler(callback) {
    const el = this.interactivity.element;
    if (!el) {
      return;
    }
    const clickOrTouchHandler = (e, pos, radius) => {
      if (this.destroyed) {
        return;
      }
      const pxRatio = this.retina.pixelRatio, posRetina = {
        x: pos.x * pxRatio,
        y: pos.y * pxRatio
      }, particles = this.particles.quadTree.queryCircle(posRetina, radius * pxRatio);
      callback(e, particles);
    };
    const clickHandler = (e) => {
      if (this.destroyed) {
        return;
      }
      const mouseEvent = e, pos = {
        x: mouseEvent.offsetX || mouseEvent.clientX,
        y: mouseEvent.offsetY || mouseEvent.clientY
      };
      clickOrTouchHandler(e, pos, 1);
    };
    const touchStartHandler = () => {
      if (this.destroyed) {
        return;
      }
      touched = true;
      touchMoved = false;
    };
    const touchMoveHandler = () => {
      if (this.destroyed) {
        return;
      }
      touchMoved = true;
    };
    const touchEndHandler = (e) => {
      var _a, _b, _c;
      if (this.destroyed) {
        return;
      }
      if (touched && !touchMoved) {
        const touchEvent = e;
        let lastTouch = touchEvent.touches[touchEvent.touches.length - 1];
        if (!lastTouch) {
          lastTouch = touchEvent.changedTouches[touchEvent.changedTouches.length - 1];
          if (!lastTouch) {
            return;
          }
        }
        const canvasRect = (_a = this.canvas.element) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect(), pos = {
          x: lastTouch.clientX - ((_b = canvasRect === null || canvasRect === void 0 ? void 0 : canvasRect.left) !== null && _b !== void 0 ? _b : 0),
          y: lastTouch.clientY - ((_c = canvasRect === null || canvasRect === void 0 ? void 0 : canvasRect.top) !== null && _c !== void 0 ? _c : 0)
        };
        clickOrTouchHandler(e, pos, Math.max(lastTouch.radiusX, lastTouch.radiusY));
      }
      touched = false;
      touchMoved = false;
    };
    const touchCancelHandler = () => {
      if (this.destroyed) {
        return;
      }
      touched = false;
      touchMoved = false;
    };
    let touched = false;
    let touchMoved = false;
    el.addEventListener("click", clickHandler);
    el.addEventListener("touchstart", touchStartHandler);
    el.addEventListener("touchmove", touchMoveHandler);
    el.addEventListener("touchend", touchEndHandler);
    el.addEventListener("touchcancel", touchCancelHandler);
  }
  handleClickMode(mode) {
    this.particles.handleClickMode(mode);
    for (const [, plugin] of this.plugins) {
      if (plugin.handleClickMode) {
        plugin.handleClickMode(mode);
      }
    }
  }
  updateActualOptions() {
    this.actualOptions.responsive = [];
    const newMaxWidth = this.actualOptions.setResponsive(this.canvas.size.width, this.retina.pixelRatio, this._options);
    this.actualOptions.setTheme(this.currentTheme);
    if (this.responsiveMaxWidth != newMaxWidth) {
      this.responsiveMaxWidth = newMaxWidth;
      return true;
    }
    return false;
  }
  async init() {
    const shapes2 = __classPrivateFieldGet8(this, _Container_engine, "f").plugins.getSupportedShapes();
    for (const type of shapes2) {
      const drawer = __classPrivateFieldGet8(this, _Container_engine, "f").plugins.getShapeDrawer(type);
      if (drawer) {
        this.drawers.set(type, drawer);
      }
    }
    this._options = loadContainerOptions(__classPrivateFieldGet8(this, _Container_engine, "f"), this, this._initialSourceOptions, this.sourceOptions);
    this.actualOptions = loadContainerOptions(__classPrivateFieldGet8(this, _Container_engine, "f"), this, this._options);
    this.retina.init();
    this.canvas.init();
    this.updateActualOptions();
    this.canvas.initBackground();
    this.canvas.resize();
    this.zLayers = this.actualOptions.zLayers;
    this.duration = getRangeValue(this.actualOptions.duration);
    this.lifeTime = 0;
    this.fpsLimit = this.actualOptions.fpsLimit > 0 ? this.actualOptions.fpsLimit : 120;
    const availablePlugins = __classPrivateFieldGet8(this, _Container_engine, "f").plugins.getAvailablePlugins(this);
    for (const [id, plugin] of availablePlugins) {
      this.plugins.set(id, plugin);
    }
    for (const [, drawer] of this.drawers) {
      if (drawer.init) {
        await drawer.init(this);
      }
    }
    for (const [, plugin] of this.plugins) {
      if (plugin.init) {
        plugin.init(this.actualOptions);
      } else if (plugin.initAsync !== void 0) {
        await plugin.initAsync(this.actualOptions);
      }
    }
    const pathOptions = this.actualOptions.particles.move.path;
    if (pathOptions.generator) {
      this.setPath(__classPrivateFieldGet8(this, _Container_engine, "f").plugins.getPathGenerator(pathOptions.generator));
    }
    __classPrivateFieldGet8(this, _Container_engine, "f").dispatchEvent("containerInit", { container: this });
    this.particles.init();
    this.particles.setDensity();
    for (const [, plugin] of this.plugins) {
      if (plugin.particlesSetup !== void 0) {
        plugin.particlesSetup();
      }
    }
    __classPrivateFieldGet8(this, _Container_engine, "f").dispatchEvent("particlesSetup", { container: this });
  }
  intersectionManager(entries) {
    if (!this.actualOptions.pauseOnOutsideViewport) {
      return;
    }
    for (const entry of entries) {
      if (entry.target !== this.interactivity.element) {
        continue;
      }
      if (entry.isIntersecting) {
        this.play();
      } else {
        this.pause();
      }
    }
  }
};
_Container_engine = /* @__PURE__ */ new WeakMap();

// node_modules/tsparticles-engine/esm/Core/Loader.js
var __classPrivateFieldSet9 = function(receiver, state, value, kind, f) {
  if (kind === "m")
    throw new TypeError("Private method is not writable");
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet9 = function(receiver, state, kind, f) {
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Loader_engine;
function fetchError(statusCode) {
  console.error(`Error tsParticles - fetch status: ${statusCode}`);
  console.error("Error tsParticles - File config not found");
}
async function getDataFromUrl(jsonUrl, index) {
  const url = jsonUrl instanceof Array ? itemFromArray(jsonUrl, index) : jsonUrl;
  if (!url) {
    return;
  }
  const response = await fetch(url);
  if (!response.ok) {
    fetchError(response.status);
    return;
  }
  return response.json();
}
var Loader = class {
  constructor(engine) {
    _Loader_engine.set(this, void 0);
    __classPrivateFieldSet9(this, _Loader_engine, engine, "f");
  }
  async loadOptions(params) {
    var _a, _b, _c;
    const tagId = (_a = params.tagId) !== null && _a !== void 0 ? _a : `tsparticles${Math.floor(Math.random() * 1e4)}`, { index, url: jsonUrl, remote } = params, options = remote ? await getDataFromUrl(jsonUrl, index) : params.options;
    let domContainer = (_b = params.element) !== null && _b !== void 0 ? _b : document.getElementById(tagId);
    if (!domContainer) {
      domContainer = document.createElement("div");
      domContainer.id = tagId;
      (_c = document.querySelector("body")) === null || _c === void 0 ? void 0 : _c.append(domContainer);
    }
    const currentOptions = options instanceof Array ? itemFromArray(options, index) : options, dom = __classPrivateFieldGet9(this, _Loader_engine, "f").dom(), oldIndex = dom.findIndex((v) => v.id === tagId);
    if (oldIndex >= 0) {
      const old = __classPrivateFieldGet9(this, _Loader_engine, "f").domItem(oldIndex);
      if (old && !old.destroyed) {
        old.destroy();
        dom.splice(oldIndex, 1);
      }
    }
    let canvasEl;
    if (domContainer.tagName.toLowerCase() === "canvas") {
      canvasEl = domContainer;
      canvasEl.dataset[generatedAttribute] = "false";
    } else {
      const existingCanvases = domContainer.getElementsByTagName("canvas");
      if (existingCanvases.length) {
        canvasEl = existingCanvases[0];
        canvasEl.dataset[generatedAttribute] = "false";
      } else {
        canvasEl = document.createElement("canvas");
        canvasEl.dataset[generatedAttribute] = "true";
        domContainer.appendChild(canvasEl);
      }
    }
    if (!canvasEl.style.width) {
      canvasEl.style.width = "100%";
    }
    if (!canvasEl.style.height) {
      canvasEl.style.height = "100%";
    }
    const newItem = new Container(__classPrivateFieldGet9(this, _Loader_engine, "f"), tagId, currentOptions);
    if (oldIndex >= 0) {
      dom.splice(oldIndex, 0, newItem);
    } else {
      dom.push(newItem);
    }
    newItem.canvas.loadCanvas(canvasEl);
    await newItem.start();
    return newItem;
  }
  async loadRemoteOptions(params) {
    return this.loadOptions(params);
  }
  load(tagId, options, index) {
    const params = { index, remote: false };
    if (typeof tagId === "string") {
      params.tagId = tagId;
    } else {
      params.options = tagId;
    }
    if (typeof options === "number") {
      params.index = options;
    } else {
      params.options = options !== null && options !== void 0 ? options : params.options;
    }
    return this.loadOptions(params);
  }
  async set(id, domContainer, options, index) {
    const params = { index, remote: false };
    if (typeof id === "string") {
      params.tagId = id;
    } else {
      params.element = id;
    }
    if (domContainer instanceof HTMLElement) {
      params.element = domContainer;
    } else {
      params.options = domContainer;
    }
    if (typeof options === "number") {
      params.index = options;
    } else {
      params.options = options !== null && options !== void 0 ? options : params.options;
    }
    return this.loadOptions(params);
  }
  async loadJSON(tagId, jsonUrl, index) {
    let url, id;
    if (typeof jsonUrl === "number" || jsonUrl === void 0) {
      url = tagId;
    } else {
      id = tagId;
      url = jsonUrl;
    }
    return this.loadRemoteOptions({ tagId: id, url, index, remote: true });
  }
  async setJSON(id, domContainer, jsonUrl, index) {
    let url, newId, newIndex, element;
    if (id instanceof HTMLElement) {
      element = id;
      url = domContainer;
      newIndex = jsonUrl;
    } else {
      newId = id;
      element = domContainer;
      url = jsonUrl;
      newIndex = index;
    }
    return this.loadRemoteOptions({ tagId: newId, url, index: newIndex, element, remote: true });
  }
};
_Loader_engine = /* @__PURE__ */ new WeakMap();

// node_modules/tsparticles-engine/esm/Core/Utils/Plugins.js
var __classPrivateFieldSet10 = function(receiver, state, value, kind, f) {
  if (kind === "m")
    throw new TypeError("Private method is not writable");
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var _Plugins_engine;
var Plugins = class {
  constructor(engine) {
    _Plugins_engine.set(this, void 0);
    __classPrivateFieldSet10(this, _Plugins_engine, engine, "f");
    this.plugins = [];
    this.interactorsInitializers = /* @__PURE__ */ new Map();
    this.moversInitializers = /* @__PURE__ */ new Map();
    this.updatersInitializers = /* @__PURE__ */ new Map();
    this.interactors = /* @__PURE__ */ new Map();
    this.movers = /* @__PURE__ */ new Map();
    this.updaters = /* @__PURE__ */ new Map();
    this.presets = /* @__PURE__ */ new Map();
    this.drawers = /* @__PURE__ */ new Map();
    this.pathGenerators = /* @__PURE__ */ new Map();
  }
  getPlugin(plugin) {
    return this.plugins.find((t) => t.id === plugin);
  }
  addPlugin(plugin) {
    if (!this.getPlugin(plugin.id)) {
      this.plugins.push(plugin);
    }
  }
  getAvailablePlugins(container) {
    const res = /* @__PURE__ */ new Map();
    for (const plugin of this.plugins) {
      if (!plugin.needsPlugin(container.actualOptions)) {
        continue;
      }
      res.set(plugin.id, plugin.getPlugin(container));
    }
    return res;
  }
  loadOptions(options, sourceOptions) {
    for (const plugin of this.plugins) {
      plugin.loadOptions(options, sourceOptions);
    }
  }
  loadParticlesOptions(container, options, ...sourceOptions) {
    const updaters = this.updaters.get(container);
    if (!updaters) {
      return;
    }
    for (const updater of updaters) {
      if (updater.loadOptions) {
        updater.loadOptions(options, ...sourceOptions);
      }
    }
  }
  getPreset(preset) {
    return this.presets.get(preset);
  }
  addPreset(presetKey, options, override = false) {
    if (override || !this.getPreset(presetKey)) {
      this.presets.set(presetKey, options);
    }
  }
  getShapeDrawer(type) {
    return this.drawers.get(type);
  }
  addShapeDrawer(type, drawer) {
    if (!this.getShapeDrawer(type)) {
      this.drawers.set(type, drawer);
    }
  }
  getSupportedShapes() {
    return this.drawers.keys();
  }
  getPathGenerator(type) {
    return this.pathGenerators.get(type);
  }
  addPathGenerator(type, pathGenerator) {
    if (!this.getPathGenerator(type)) {
      this.pathGenerators.set(type, pathGenerator);
    }
  }
  getInteractors(container, force = false) {
    let res = this.interactors.get(container);
    if (!res || force) {
      res = [...this.interactorsInitializers.values()].map((t) => t(container));
      this.interactors.set(container, res);
    }
    return res;
  }
  addInteractor(name, initInteractor) {
    this.interactorsInitializers.set(name, initInteractor);
  }
  getUpdaters(container, force = false) {
    let res = this.updaters.get(container);
    if (!res || force) {
      res = [...this.updatersInitializers.values()].map((t) => t(container));
      this.updaters.set(container, res);
    }
    return res;
  }
  addParticleUpdater(name, initUpdater) {
    this.updatersInitializers.set(name, initUpdater);
  }
  getMovers(container, force = false) {
    let res = this.movers.get(container);
    if (!res || force) {
      res = [...this.moversInitializers.values()].map((t) => t(container));
      this.movers.set(container, res);
    }
    return res;
  }
  addParticleMover(name, initMover) {
    this.moversInitializers.set(name, initMover);
  }
  destroy(container) {
    this.updaters.delete(container);
    this.movers.delete(container);
    this.interactors.delete(container);
  }
};
_Plugins_engine = /* @__PURE__ */ new WeakMap();

// node_modules/tsparticles-engine/esm/engine.js
var __classPrivateFieldSet11 = function(receiver, state, value, kind, f) {
  if (kind === "m")
    throw new TypeError("Private method is not writable");
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet10 = function(receiver, state, kind, f) {
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Engine_initialized;
var _Engine_loader;
var Engine = class {
  constructor() {
    _Engine_initialized.set(this, void 0);
    _Engine_loader.set(this, void 0);
    this.domArray = [];
    this.eventDispatcher = new EventDispatcher();
    __classPrivateFieldSet11(this, _Engine_initialized, false, "f");
    __classPrivateFieldSet11(this, _Engine_loader, new Loader(this), "f");
    this.plugins = new Plugins(this);
  }
  init() {
    if (!__classPrivateFieldGet10(this, _Engine_initialized, "f")) {
      __classPrivateFieldSet11(this, _Engine_initialized, true, "f");
    }
  }
  async loadFromArray(tagId, options, index) {
    return __classPrivateFieldGet10(this, _Engine_loader, "f").load(tagId, options, index);
  }
  async load(tagId, options) {
    return __classPrivateFieldGet10(this, _Engine_loader, "f").load(tagId, options);
  }
  async set(id, element, options) {
    return __classPrivateFieldGet10(this, _Engine_loader, "f").set(id, element, options);
  }
  async loadJSON(tagId, pathConfigJson, index) {
    return __classPrivateFieldGet10(this, _Engine_loader, "f").loadJSON(tagId, pathConfigJson, index);
  }
  async setJSON(id, element, pathConfigJson, index) {
    return __classPrivateFieldGet10(this, _Engine_loader, "f").setJSON(id, element, pathConfigJson, index);
  }
  setOnClickHandler(callback) {
    const dom = this.dom();
    if (!dom.length) {
      throw new Error("Can only set click handlers after calling tsParticles.load() or tsParticles.loadJSON()");
    }
    for (const domItem of dom) {
      domItem.addClickHandler(callback);
    }
  }
  dom() {
    return this.domArray;
  }
  domItem(index) {
    const dom = this.dom(), item = dom[index];
    if (item && !item.destroyed) {
      return item;
    }
    dom.splice(index, 1);
  }
  async refresh() {
    for (const instance of this.dom()) {
      await instance.refresh();
    }
  }
  async addShape(shape, drawer, init, afterEffect, destroy2) {
    let customDrawer;
    if (typeof drawer === "function") {
      customDrawer = {
        afterEffect,
        destroy: destroy2,
        draw: drawer,
        init
      };
    } else {
      customDrawer = drawer;
    }
    this.plugins.addShapeDrawer(shape, customDrawer);
    await this.refresh();
  }
  async addPreset(preset, options, override = false) {
    this.plugins.addPreset(preset, options, override);
    await this.refresh();
  }
  async addPlugin(plugin) {
    this.plugins.addPlugin(plugin);
    await this.refresh();
  }
  async addPathGenerator(name, generator) {
    this.plugins.addPathGenerator(name, generator);
    await this.refresh();
  }
  async addInteractor(name, interactorInitializer) {
    this.plugins.addInteractor(name, interactorInitializer);
    await this.refresh();
  }
  async addMover(name, moverInitializer) {
    this.plugins.addParticleMover(name, moverInitializer);
    await this.refresh();
  }
  async addParticleUpdater(name, updaterInitializer) {
    this.plugins.addParticleUpdater(name, updaterInitializer);
    await this.refresh();
  }
  addEventListener(type, listener) {
    this.eventDispatcher.addEventListener(type, listener);
  }
  removeEventListener(type, listener) {
    this.eventDispatcher.removeEventListener(type, listener);
  }
  dispatchEvent(type, args) {
    this.eventDispatcher.dispatchEvent(type, args);
  }
};
_Engine_initialized = /* @__PURE__ */ new WeakMap(), _Engine_loader = /* @__PURE__ */ new WeakMap();

// node_modules/tsparticles-engine/esm/Core/Utils/ExternalInteractorBase.js
var ExternalInteractorBase = class {
  constructor(container) {
    this.container = container;
    this.type = 0;
  }
};

// node_modules/tsparticles-engine/esm/Core/Utils/ParticlesInteractorBase.js
var ParticlesInteractorBase = class {
  constructor(container) {
    this.container = container;
    this.type = 1;
  }
};

// node_modules/tsparticles-engine/esm/index.js
var tsParticles = new Engine();
tsParticles.init();

// node_modules/tsparticles-plugin-absorbers/esm/Options/Classes/AbsorberSizeLimit.js
var AbsorberSizeLimit = class {
  constructor() {
    this.radius = 0;
    this.mass = 0;
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.mass !== void 0) {
      this.mass = data.mass;
    }
    if (data.radius !== void 0) {
      this.radius = data.radius;
    }
  }
};

// node_modules/tsparticles-plugin-absorbers/esm/Options/Classes/AbsorberSize.js
var AbsorberSize = class extends ValueWithRandom {
  constructor() {
    super();
    this.density = 5;
    this.value = 50;
    this.limit = new AbsorberSizeLimit();
  }
  load(data) {
    if (!data) {
      return;
    }
    super.load(data);
    if (data.density !== void 0) {
      this.density = data.density;
    }
    if (typeof data.limit === "number") {
      this.limit.radius = data.limit;
    } else {
      this.limit.load(data.limit);
    }
  }
};

// node_modules/tsparticles-plugin-absorbers/esm/Options/Classes/Absorber.js
var Absorber = class {
  constructor() {
    this.color = new OptionsColor();
    this.color.value = "#000000";
    this.draggable = false;
    this.opacity = 1;
    this.destroy = true;
    this.orbits = false;
    this.size = new AbsorberSize();
  }
  load(data) {
    if (data === void 0) {
      return;
    }
    if (data.color !== void 0) {
      this.color = OptionsColor.create(this.color, data.color);
    }
    if (data.draggable !== void 0) {
      this.draggable = data.draggable;
    }
    this.name = data.name;
    if (data.opacity !== void 0) {
      this.opacity = data.opacity;
    }
    if (data.position !== void 0) {
      this.position = {};
      if (data.position.x !== void 0) {
        this.position.x = setRangeValue(data.position.x);
      }
      if (data.position.y !== void 0) {
        this.position.y = setRangeValue(data.position.y);
      }
    }
    if (data.size !== void 0) {
      this.size.load(data.size);
    }
    if (data.destroy !== void 0) {
      this.destroy = data.destroy;
    }
    if (data.orbits !== void 0) {
      this.orbits = data.orbits;
    }
  }
};

// node_modules/tsparticles-plugin-absorbers/esm/AbsorberInstance.js
var AbsorberInstance = class {
  constructor(absorbers, container, options, position) {
    var _a, _b, _c;
    this.absorbers = absorbers;
    this.container = container;
    this.initialPosition = position ? Vector.create(position.x, position.y) : void 0;
    if (options instanceof Absorber) {
      this.options = options;
    } else {
      this.options = new Absorber();
      this.options.load(options);
    }
    this.dragging = false;
    this.name = this.options.name;
    this.opacity = this.options.opacity;
    this.size = getRangeValue(this.options.size.value) * container.retina.pixelRatio;
    this.mass = this.size * this.options.size.density * container.retina.reduceFactor;
    const limit = this.options.size.limit;
    this.limit = {
      radius: limit.radius * container.retina.pixelRatio * container.retina.reduceFactor,
      mass: limit.mass
    };
    this.color = (_a = rangeColorToRgb(this.options.color)) !== null && _a !== void 0 ? _a : {
      b: 0,
      g: 0,
      r: 0
    };
    this.position = (_c = (_b = this.initialPosition) === null || _b === void 0 ? void 0 : _b.copy()) !== null && _c !== void 0 ? _c : this.calcPosition();
  }
  attract(particle) {
    const container = this.container, options = this.options;
    if (options.draggable) {
      const mouse = container.interactivity.mouse;
      if (mouse.clicking && mouse.downPosition) {
        const mouseDist = getDistance(this.position, mouse.downPosition);
        if (mouseDist <= this.size) {
          this.dragging = true;
        }
      } else {
        this.dragging = false;
      }
      if (this.dragging && mouse.position) {
        this.position.x = mouse.position.x;
        this.position.y = mouse.position.y;
      }
    }
    const pos = particle.getPosition(), { dx, dy, distance } = getDistances(this.position, pos), v = Vector.create(dx, dy);
    v.length = this.mass / Math.pow(distance, 2) * container.retina.reduceFactor;
    if (distance < this.size + particle.getRadius()) {
      const sizeFactor = particle.getRadius() * 0.033 * container.retina.pixelRatio;
      if (this.size > particle.getRadius() && distance < this.size - particle.getRadius() || particle.absorberOrbit !== void 0 && particle.absorberOrbit.length < 0) {
        if (options.destroy) {
          particle.destroy();
        } else {
          particle.needsNewPosition = true;
          this.updateParticlePosition(particle, v);
        }
      } else {
        if (options.destroy) {
          particle.size.value -= sizeFactor;
        }
        this.updateParticlePosition(particle, v);
      }
      if (this.limit.radius <= 0 || this.size < this.limit.radius) {
        this.size += sizeFactor;
      }
      if (this.limit.mass <= 0 || this.mass < this.limit.mass) {
        this.mass += sizeFactor * this.options.size.density * container.retina.reduceFactor;
      }
    } else {
      this.updateParticlePosition(particle, v);
    }
  }
  resize() {
    const initialPosition = this.initialPosition;
    this.position = initialPosition && isPointInside(initialPosition, this.container.canvas.size, Vector.origin) ? initialPosition : this.calcPosition();
  }
  draw(context) {
    context.translate(this.position.x, this.position.y);
    context.beginPath();
    context.arc(0, 0, this.size, 0, Math.PI * 2, false);
    context.closePath();
    context.fillStyle = getStyleFromRgb(this.color, this.opacity);
    context.fill();
  }
  calcPosition() {
    const exactPosition = calcPositionOrRandomFromSizeRanged({
      size: this.container.canvas.size,
      position: this.options.position
    });
    return Vector.create(exactPosition.x, exactPosition.y);
  }
  updateParticlePosition(particle, v) {
    var _a;
    if (particle.destroyed) {
      return;
    }
    const container = this.container, canvasSize = container.canvas.size;
    if (particle.needsNewPosition) {
      const newPosition = calcPositionOrRandomFromSize({ size: canvasSize });
      particle.position.setTo(newPosition);
      particle.velocity.setTo(particle.initialVelocity);
      particle.absorberOrbit = void 0;
      particle.needsNewPosition = false;
    }
    if (this.options.orbits) {
      if (particle.absorberOrbit === void 0) {
        particle.absorberOrbit = Vector.create(0, 0);
        particle.absorberOrbit.length = getDistance(particle.getPosition(), this.position);
        particle.absorberOrbit.angle = Math.random() * Math.PI * 2;
      }
      if (particle.absorberOrbit.length <= this.size && !this.options.destroy) {
        const minSize = Math.min(canvasSize.width, canvasSize.height);
        particle.absorberOrbit.length = minSize * (1 + (Math.random() * 0.2 - 0.1));
      }
      if (particle.absorberOrbitDirection === void 0) {
        particle.absorberOrbitDirection = particle.velocity.x >= 0 ? "clockwise" : "counter-clockwise";
      }
      const orbitRadius = particle.absorberOrbit.length, orbitAngle = particle.absorberOrbit.angle, orbitDirection = particle.absorberOrbitDirection;
      particle.velocity.setTo(Vector.origin);
      const updateFunc = {
        x: orbitDirection === "clockwise" ? Math.cos : Math.sin,
        y: orbitDirection === "clockwise" ? Math.sin : Math.cos
      };
      particle.position.x = this.position.x + orbitRadius * updateFunc.x(orbitAngle);
      particle.position.y = this.position.y + orbitRadius * updateFunc.y(orbitAngle);
      particle.absorberOrbit.length -= v.length;
      particle.absorberOrbit.angle += ((_a = particle.retina.moveSpeed) !== null && _a !== void 0 ? _a : 0) * container.retina.pixelRatio / 100 * container.retina.reduceFactor;
    } else {
      const addV = Vector.origin;
      addV.length = v.length;
      addV.angle = v.angle;
      particle.velocity.addTo(addV);
    }
  }
};

// node_modules/tsparticles-plugin-absorbers/esm/Absorbers.js
var Absorbers = class {
  constructor(container) {
    this.container = container;
    this.array = [];
    this.absorbers = [];
    this.interactivityAbsorbers = [];
    container.getAbsorber = (idxOrName) => idxOrName === void 0 || typeof idxOrName === "number" ? this.array[idxOrName || 0] : this.array.find((t) => t.name === idxOrName);
    container.addAbsorber = (options, position) => this.addAbsorber(options, position);
  }
  init(options) {
    var _a, _b;
    if (!options) {
      return;
    }
    if (options.absorbers) {
      if (options.absorbers instanceof Array) {
        this.absorbers = options.absorbers.map((s) => {
          const tmp = new Absorber();
          tmp.load(s);
          return tmp;
        });
      } else {
        if (this.absorbers instanceof Array) {
          this.absorbers = new Absorber();
        }
        this.absorbers.load(options.absorbers);
      }
    }
    const interactivityAbsorbers = (_b = (_a = options.interactivity) === null || _a === void 0 ? void 0 : _a.modes) === null || _b === void 0 ? void 0 : _b.absorbers;
    if (interactivityAbsorbers) {
      if (interactivityAbsorbers instanceof Array) {
        this.interactivityAbsorbers = interactivityAbsorbers.map((s) => {
          const tmp = new Absorber();
          tmp.load(s);
          return tmp;
        });
      } else {
        if (this.interactivityAbsorbers instanceof Array) {
          this.interactivityAbsorbers = new Absorber();
        }
        this.interactivityAbsorbers.load(interactivityAbsorbers);
      }
    }
    if (this.absorbers instanceof Array) {
      for (const absorberOptions of this.absorbers) {
        this.addAbsorber(absorberOptions);
      }
    } else {
      this.addAbsorber(this.absorbers);
    }
  }
  particleUpdate(particle) {
    for (const absorber of this.array) {
      absorber.attract(particle);
      if (particle.destroyed) {
        break;
      }
    }
  }
  draw(context) {
    for (const absorber of this.array) {
      context.save();
      absorber.draw(context);
      context.restore();
    }
  }
  stop() {
    this.array = [];
  }
  resize() {
    for (const absorber of this.array) {
      absorber.resize();
    }
  }
  handleClickMode(mode) {
    const absorberOptions = this.absorbers, modeAbsorbers = this.interactivityAbsorbers;
    if (mode === "absorber") {
      let absorbersModeOptions;
      if (modeAbsorbers instanceof Array) {
        if (modeAbsorbers.length > 0) {
          absorbersModeOptions = itemFromArray(modeAbsorbers);
        }
      } else {
        absorbersModeOptions = modeAbsorbers;
      }
      const absorbersOptions = absorbersModeOptions !== null && absorbersModeOptions !== void 0 ? absorbersModeOptions : absorberOptions instanceof Array ? itemFromArray(absorberOptions) : absorberOptions, aPosition = this.container.interactivity.mouse.clickPosition;
      this.addAbsorber(absorbersOptions, aPosition);
    }
  }
  addAbsorber(options, position) {
    const absorber = new AbsorberInstance(this, this.container, options, position);
    this.array.push(absorber);
    return absorber;
  }
  removeAbsorber(absorber) {
    const index = this.array.indexOf(absorber);
    if (index >= 0) {
      this.array.splice(index, 1);
    }
  }
};

// node_modules/tsparticles-plugin-absorbers/esm/index.js
var AbsorbersPlugin = class {
  constructor() {
    this.id = "absorbers";
  }
  getPlugin(container) {
    return new Absorbers(container);
  }
  needsPlugin(options) {
    var _a, _b, _c;
    if (!options) {
      return false;
    }
    const absorbers = options.absorbers;
    if (absorbers instanceof Array) {
      return !!absorbers.length;
    } else if (absorbers) {
      return true;
    } else if (((_c = (_b = (_a = options.interactivity) === null || _a === void 0 ? void 0 : _a.events) === null || _b === void 0 ? void 0 : _b.onClick) === null || _c === void 0 ? void 0 : _c.mode) && isInArray("absorber", options.interactivity.events.onClick.mode)) {
      return true;
    }
    return false;
  }
  loadOptions(options, source) {
    var _a, _b;
    if (!this.needsPlugin(options) && !this.needsPlugin(source)) {
      return;
    }
    const optionsCast = options;
    if (source === null || source === void 0 ? void 0 : source.absorbers) {
      if ((source === null || source === void 0 ? void 0 : source.absorbers) instanceof Array) {
        optionsCast.absorbers = source === null || source === void 0 ? void 0 : source.absorbers.map((s) => {
          const tmp = new Absorber();
          tmp.load(s);
          return tmp;
        });
      } else {
        let absorberOptions = optionsCast.absorbers;
        if ((absorberOptions === null || absorberOptions === void 0 ? void 0 : absorberOptions.load) === void 0) {
          optionsCast.absorbers = absorberOptions = new Absorber();
        }
        absorberOptions.load(source === null || source === void 0 ? void 0 : source.absorbers);
      }
    }
    const interactivityAbsorbers = (_b = (_a = source === null || source === void 0 ? void 0 : source.interactivity) === null || _a === void 0 ? void 0 : _a.modes) === null || _b === void 0 ? void 0 : _b.absorbers;
    if (interactivityAbsorbers) {
      if (interactivityAbsorbers instanceof Array) {
        optionsCast.interactivity.modes.absorbers = interactivityAbsorbers.map((s) => {
          const tmp = new Absorber();
          tmp.load(s);
          return tmp;
        });
      } else {
        let absorberOptions = optionsCast.interactivity.modes.absorbers;
        if ((absorberOptions === null || absorberOptions === void 0 ? void 0 : absorberOptions.load) === void 0) {
          optionsCast.interactivity.modes.absorbers = absorberOptions = new Absorber();
        }
        absorberOptions.load(interactivityAbsorbers);
      }
    }
  }
};
async function loadAbsorbersPlugin(engine) {
  const plugin = new AbsorbersPlugin();
  await engine.addPlugin(plugin);
}

// node_modules/tsparticles-plugin-emitters/esm/Shapes/Circle/CircleShape.js
var CircleShape = class {
  randomPosition(position, size, fill) {
    const generateTheta = (x, y) => {
      const u = Math.random() / 4, theta = Math.atan(y / x * Math.tan(2 * Math.PI * u)), v = Math.random();
      if (v < 0.25) {
        return theta;
      } else if (v < 0.5) {
        return Math.PI - theta;
      } else if (v < 0.75) {
        return Math.PI + theta;
      } else {
        return -theta;
      }
    }, radius = (x, y, theta) => x * y / Math.sqrt((y * Math.cos(theta)) ** 2 + (x * Math.sin(theta)) ** 2), [a, b] = [size.width / 2, size.height / 2], randomTheta = generateTheta(a, b), maxRadius = radius(a, b, randomTheta), randomRadius = fill ? maxRadius * Math.sqrt(Math.random()) : maxRadius;
    return {
      x: position.x + randomRadius * Math.cos(randomTheta),
      y: position.y + randomRadius * Math.sin(randomTheta)
    };
  }
};

// node_modules/tsparticles-plugin-emitters/esm/Options/Classes/EmitterLife.js
var EmitterLife = class {
  constructor() {
    this.wait = false;
  }
  load(data) {
    if (data === void 0) {
      return;
    }
    if (data.count !== void 0) {
      this.count = data.count;
    }
    if (data.delay !== void 0) {
      this.delay = data.delay;
    }
    if (data.duration !== void 0) {
      this.duration = data.duration;
    }
    if (data.wait !== void 0) {
      this.wait = data.wait;
    }
  }
};

// node_modules/tsparticles-plugin-emitters/esm/Options/Classes/EmitterRate.js
var EmitterRate = class {
  constructor() {
    this.quantity = 1;
    this.delay = 0.1;
  }
  load(data) {
    if (data === void 0) {
      return;
    }
    if (data.quantity !== void 0) {
      this.quantity = setRangeValue(data.quantity);
    }
    if (data.delay !== void 0) {
      this.delay = setRangeValue(data.delay);
    }
  }
};

// node_modules/tsparticles-plugin-emitters/esm/Options/Classes/EmitterSize.js
var EmitterSize = class {
  constructor() {
    this.mode = "percent";
    this.height = 0;
    this.width = 0;
  }
  load(data) {
    if (data === void 0) {
      return;
    }
    if (data.mode !== void 0) {
      this.mode = data.mode;
    }
    if (data.height !== void 0) {
      this.height = data.height;
    }
    if (data.width !== void 0) {
      this.width = data.width;
    }
  }
};

// node_modules/tsparticles-plugin-emitters/esm/Options/Classes/Emitter.js
var Emitter = class {
  constructor() {
    this.autoPlay = true;
    this.fill = true;
    this.life = new EmitterLife();
    this.rate = new EmitterRate();
    this.shape = "square";
    this.startCount = 0;
  }
  load(data) {
    if (data === void 0) {
      return;
    }
    if (data.autoPlay !== void 0) {
      this.autoPlay = data.autoPlay;
    }
    if (data.size !== void 0) {
      if (this.size === void 0) {
        this.size = new EmitterSize();
      }
      this.size.load(data.size);
    }
    if (data.direction !== void 0) {
      this.direction = data.direction;
    }
    this.domId = data.domId;
    if (data.fill !== void 0) {
      this.fill = data.fill;
    }
    this.life.load(data.life);
    this.name = data.name;
    if (data.particles !== void 0) {
      if (data.particles instanceof Array) {
        this.particles = data.particles.map((s) => {
          return deepExtend({}, s);
        });
      } else {
        this.particles = deepExtend({}, data.particles);
      }
    }
    this.rate.load(data.rate);
    if (data.shape !== void 0) {
      this.shape = data.shape;
    }
    if (data.position !== void 0) {
      this.position = {};
      if (data.position.x !== void 0) {
        this.position.x = setRangeValue(data.position.x);
      }
      if (data.position.y !== void 0) {
        this.position.y = setRangeValue(data.position.y);
      }
    }
    if (data.spawnColor !== void 0) {
      if (this.spawnColor === void 0) {
        this.spawnColor = new AnimatableColor();
      }
      this.spawnColor.load(data.spawnColor);
    }
    if (data.startCount !== void 0) {
      this.startCount = data.startCount;
    }
  }
};

// node_modules/tsparticles-plugin-emitters/esm/EmitterInstance.js
var __classPrivateFieldSet12 = function(receiver, state, value, kind, f) {
  if (kind === "m")
    throw new TypeError("Private method is not writable");
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet11 = function(receiver, state, kind, f) {
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _EmitterInstance_firstSpawn;
var _EmitterInstance_startParticlesAdded;
var _EmitterInstance_engine;
var EmitterInstance = class {
  constructor(engine, emitters, container, options, position) {
    var _a, _b, _c, _d, _e, _f, _g;
    var _h;
    this.emitters = emitters;
    this.container = container;
    _EmitterInstance_firstSpawn.set(this, void 0);
    _EmitterInstance_startParticlesAdded.set(this, void 0);
    _EmitterInstance_engine.set(this, void 0);
    __classPrivateFieldSet12(this, _EmitterInstance_engine, engine, "f");
    this.currentDuration = 0;
    this.currentEmitDelay = 0;
    this.currentSpawnDelay = 0;
    this.initialPosition = position;
    if (options instanceof Emitter) {
      this.options = options;
    } else {
      this.options = new Emitter();
      this.options.load(options);
    }
    this.spawnDelay = ((_a = this.options.life.delay) !== null && _a !== void 0 ? _a : 0) * 1e3 / this.container.retina.reduceFactor;
    this.position = (_b = this.initialPosition) !== null && _b !== void 0 ? _b : this.calcPosition();
    this.name = this.options.name;
    this.shape = (_c = __classPrivateFieldGet11(this, _EmitterInstance_engine, "f").emitterShapeManager) === null || _c === void 0 ? void 0 : _c.getShape(this.options.shape);
    this.fill = this.options.fill;
    __classPrivateFieldSet12(this, _EmitterInstance_firstSpawn, !this.options.life.wait, "f");
    __classPrivateFieldSet12(this, _EmitterInstance_startParticlesAdded, false, "f");
    let particlesOptions = deepExtend({}, this.options.particles);
    particlesOptions !== null && particlesOptions !== void 0 ? particlesOptions : particlesOptions = {};
    (_d = particlesOptions.move) !== null && _d !== void 0 ? _d : particlesOptions.move = {};
    (_e = (_h = particlesOptions.move).direction) !== null && _e !== void 0 ? _e : _h.direction = this.options.direction;
    if (this.options.spawnColor) {
      this.spawnColor = rangeColorToHsl(this.options.spawnColor);
    }
    this.paused = !this.options.autoPlay;
    this.particlesOptions = particlesOptions;
    this.size = (_f = this.options.size) !== null && _f !== void 0 ? _f : (() => {
      const size = new EmitterSize();
      size.load({
        height: 0,
        mode: "percent",
        width: 0
      });
      return size;
    })();
    this.lifeCount = (_g = this.options.life.count) !== null && _g !== void 0 ? _g : -1;
    this.immortal = this.lifeCount <= 0;
    __classPrivateFieldGet11(this, _EmitterInstance_engine, "f").dispatchEvent("emitterCreated", {
      container,
      data: {
        emitter: this
      }
    });
    this.play();
  }
  externalPlay() {
    this.paused = false;
    this.play();
  }
  externalPause() {
    this.paused = true;
    this.pause();
  }
  play() {
    var _a;
    if (this.paused) {
      return;
    }
    if (!(this.container.retina.reduceFactor && (this.lifeCount > 0 || this.immortal || !this.options.life.count) && (__classPrivateFieldGet11(this, _EmitterInstance_firstSpawn, "f") || this.currentSpawnDelay >= ((_a = this.spawnDelay) !== null && _a !== void 0 ? _a : 0)))) {
      return;
    }
    if (this.emitDelay === void 0) {
      const delay = getRangeValue(this.options.rate.delay);
      this.emitDelay = 1e3 * delay / this.container.retina.reduceFactor;
    }
    if (this.lifeCount > 0 || this.immortal) {
      this.prepareToDie();
    }
  }
  pause() {
    if (this.paused) {
      return;
    }
    delete this.emitDelay;
  }
  resize() {
    const initialPosition = this.initialPosition;
    this.position = initialPosition && isPointInside(initialPosition, this.container.canvas.size, Vector.origin) ? initialPosition : this.calcPosition();
  }
  update(delta) {
    var _a, _b, _c;
    if (this.paused) {
      return;
    }
    if (__classPrivateFieldGet11(this, _EmitterInstance_firstSpawn, "f")) {
      __classPrivateFieldSet12(this, _EmitterInstance_firstSpawn, false, "f");
      this.currentSpawnDelay = (_a = this.spawnDelay) !== null && _a !== void 0 ? _a : 0;
      this.currentEmitDelay = (_b = this.emitDelay) !== null && _b !== void 0 ? _b : 0;
    }
    if (!__classPrivateFieldGet11(this, _EmitterInstance_startParticlesAdded, "f")) {
      __classPrivateFieldSet12(this, _EmitterInstance_startParticlesAdded, true, "f");
      this.emitParticles(this.options.startCount);
    }
    if (this.duration !== void 0) {
      this.currentDuration += delta.value;
      if (this.currentDuration >= this.duration) {
        this.pause();
        if (this.spawnDelay !== void 0) {
          delete this.spawnDelay;
        }
        if (!this.immortal) {
          this.lifeCount--;
        }
        if (this.lifeCount > 0 || this.immortal) {
          this.position = this.calcPosition();
          this.spawnDelay = ((_c = this.options.life.delay) !== null && _c !== void 0 ? _c : 0) * 1e3 / this.container.retina.reduceFactor;
        } else {
          this.destroy();
        }
        this.currentDuration -= this.duration;
        delete this.duration;
      }
    }
    if (this.spawnDelay !== void 0) {
      this.currentSpawnDelay += delta.value;
      if (this.currentSpawnDelay >= this.spawnDelay) {
        __classPrivateFieldGet11(this, _EmitterInstance_engine, "f").dispatchEvent("emitterPlay", {
          container: this.container
        });
        this.play();
        this.currentSpawnDelay -= this.currentSpawnDelay;
        delete this.spawnDelay;
      }
    }
    if (this.emitDelay !== void 0) {
      this.currentEmitDelay += delta.value;
      if (this.currentEmitDelay >= this.emitDelay) {
        this.emit();
        this.currentEmitDelay -= this.emitDelay;
      }
    }
  }
  getPosition() {
    if (this.options.domId) {
      const container = this.container, element = document.getElementById(this.options.domId);
      if (element) {
        const elRect = element.getBoundingClientRect();
        return {
          x: (elRect.x + elRect.width / 2) * container.retina.pixelRatio,
          y: (elRect.y + elRect.height / 2) * container.retina.pixelRatio
        };
      }
    }
    return this.position;
  }
  getSize() {
    const container = this.container;
    if (this.options.domId) {
      const element = document.getElementById(this.options.domId);
      if (element) {
        const elRect = element.getBoundingClientRect();
        return {
          width: elRect.width * container.retina.pixelRatio,
          height: elRect.height * container.retina.pixelRatio
        };
      }
    }
    return {
      width: this.size.mode === "percent" ? container.canvas.size.width * this.size.width / 100 : this.size.width,
      height: this.size.mode === "percent" ? container.canvas.size.height * this.size.height / 100 : this.size.height
    };
  }
  prepareToDie() {
    var _a;
    if (this.paused) {
      return;
    }
    const duration = (_a = this.options.life) === null || _a === void 0 ? void 0 : _a.duration;
    if (this.container.retina.reduceFactor && (this.lifeCount > 0 || this.immortal) && duration !== void 0 && duration > 0) {
      this.duration = duration * 1e3;
    }
  }
  destroy() {
    this.emitters.removeEmitter(this);
    __classPrivateFieldGet11(this, _EmitterInstance_engine, "f").dispatchEvent("emitterDestroyed", {
      container: this.container,
      data: {
        emitter: this
      }
    });
  }
  calcPosition() {
    return calcPositionOrRandomFromSizeRanged({
      size: this.container.canvas.size,
      position: this.options.position
    });
  }
  emit() {
    if (this.paused) {
      return;
    }
    const quantity = getRangeValue(this.options.rate.quantity);
    this.emitParticles(quantity);
  }
  emitParticles(quantity) {
    var _a, _b, _c;
    const position = this.getPosition(), size = this.getSize(), singleParticlesOptions = this.particlesOptions instanceof Array ? itemFromArray(this.particlesOptions) : this.particlesOptions;
    for (let i = 0; i < quantity; i++) {
      const particlesOptions = deepExtend({}, singleParticlesOptions);
      if (this.spawnColor) {
        const hslAnimation = (_a = this.options.spawnColor) === null || _a === void 0 ? void 0 : _a.animation;
        if (hslAnimation) {
          this.spawnColor.h = this.setColorAnimation(hslAnimation.h, this.spawnColor.h, 360);
          this.spawnColor.s = this.setColorAnimation(hslAnimation.s, this.spawnColor.s, 100);
          this.spawnColor.l = this.setColorAnimation(hslAnimation.l, this.spawnColor.l, 100);
        }
        if (!particlesOptions.color) {
          particlesOptions.color = {
            value: this.spawnColor
          };
        } else {
          particlesOptions.color.value = this.spawnColor;
        }
      }
      if (!position) {
        return;
      }
      const pPosition = (_c = (_b = this.shape) === null || _b === void 0 ? void 0 : _b.randomPosition(position, size, this.fill)) !== null && _c !== void 0 ? _c : position;
      this.container.particles.addParticle(pPosition, particlesOptions);
    }
  }
  setColorAnimation(animation, initValue, maxValue) {
    var _a;
    const container = this.container;
    if (!animation.enable) {
      return initValue;
    }
    const colorOffset = randomInRange(animation.offset), delay = getRangeValue(this.options.rate.delay), emitFactor = 1e3 * delay / container.retina.reduceFactor, colorSpeed = getRangeValue((_a = animation.speed) !== null && _a !== void 0 ? _a : 0);
    return (initValue + colorSpeed * container.fpsLimit / emitFactor + colorOffset * 3.6) % maxValue;
  }
};
_EmitterInstance_firstSpawn = /* @__PURE__ */ new WeakMap(), _EmitterInstance_startParticlesAdded = /* @__PURE__ */ new WeakMap(), _EmitterInstance_engine = /* @__PURE__ */ new WeakMap();

// node_modules/tsparticles-plugin-emitters/esm/Emitters.js
var __classPrivateFieldSet13 = function(receiver, state, value, kind, f) {
  if (kind === "m")
    throw new TypeError("Private method is not writable");
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet12 = function(receiver, state, kind, f) {
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Emitters_engine;
var Emitters = class {
  constructor(engine, container) {
    this.container = container;
    _Emitters_engine.set(this, void 0);
    __classPrivateFieldSet13(this, _Emitters_engine, engine, "f");
    this.array = [];
    this.emitters = [];
    this.interactivityEmitters = {
      random: {
        count: 1,
        enable: false
      },
      value: []
    };
    container.getEmitter = (idxOrName) => idxOrName === void 0 || typeof idxOrName === "number" ? this.array[idxOrName || 0] : this.array.find((t) => t.name === idxOrName);
    container.addEmitter = (options, position) => this.addEmitter(options, position);
    container.removeEmitter = (idxOrName) => {
      const emitter = container.getEmitter(idxOrName);
      if (emitter) {
        this.removeEmitter(emitter);
      }
    };
    container.playEmitter = (idxOrName) => {
      const emitter = container.getEmitter(idxOrName);
      if (emitter) {
        emitter.externalPlay();
      }
    };
    container.pauseEmitter = (idxOrName) => {
      const emitter = container.getEmitter(idxOrName);
      if (emitter) {
        emitter.externalPause();
      }
    };
  }
  init(options) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    if (!options) {
      return;
    }
    if (options.emitters) {
      if (options.emitters instanceof Array) {
        this.emitters = options.emitters.map((s) => {
          const tmp = new Emitter();
          tmp.load(s);
          return tmp;
        });
      } else {
        if (this.emitters instanceof Array) {
          this.emitters = new Emitter();
        }
        this.emitters.load(options.emitters);
      }
    }
    const interactivityEmitters = (_b = (_a = options.interactivity) === null || _a === void 0 ? void 0 : _a.modes) === null || _b === void 0 ? void 0 : _b.emitters;
    if (interactivityEmitters) {
      if (interactivityEmitters instanceof Array) {
        this.interactivityEmitters = {
          random: {
            count: 1,
            enable: true
          },
          value: interactivityEmitters.map((s) => {
            const tmp = new Emitter();
            tmp.load(s);
            return tmp;
          })
        };
      } else {
        const emitterMode = interactivityEmitters;
        if (emitterMode.value !== void 0) {
          if (emitterMode.value instanceof Array) {
            this.interactivityEmitters = {
              random: {
                count: (_c = this.interactivityEmitters.random.count) !== null && _c !== void 0 ? _c : 1,
                enable: (_d = this.interactivityEmitters.random.enable) !== null && _d !== void 0 ? _d : false
              },
              value: emitterMode.value.map((s) => {
                const tmp = new Emitter();
                tmp.load(s);
                return tmp;
              })
            };
          } else {
            const tmp = new Emitter();
            tmp.load(emitterMode.value);
            this.interactivityEmitters = {
              random: {
                count: (_e = this.interactivityEmitters.random.count) !== null && _e !== void 0 ? _e : 1,
                enable: (_f = this.interactivityEmitters.random.enable) !== null && _f !== void 0 ? _f : false
              },
              value: tmp
            };
          }
        } else {
          const tmp = new Emitter();
          tmp.load(interactivityEmitters);
          this.interactivityEmitters = {
            random: {
              count: (_g = this.interactivityEmitters.random.count) !== null && _g !== void 0 ? _g : 1,
              enable: (_h = this.interactivityEmitters.random.enable) !== null && _h !== void 0 ? _h : false
            },
            value: tmp
          };
        }
      }
    }
    if (this.emitters instanceof Array) {
      for (const emitterOptions of this.emitters) {
        this.addEmitter(emitterOptions);
      }
    } else {
      this.addEmitter(this.emitters);
    }
  }
  play() {
    for (const emitter of this.array) {
      emitter.play();
    }
  }
  pause() {
    for (const emitter of this.array) {
      emitter.pause();
    }
  }
  stop() {
    this.array = [];
  }
  update(delta) {
    for (const emitter of this.array) {
      emitter.update(delta);
    }
  }
  handleClickMode(mode) {
    const emitterOptions = this.emitters, modeEmitters = this.interactivityEmitters;
    if (mode === "emitter") {
      let emittersModeOptions;
      if (modeEmitters && modeEmitters.value instanceof Array) {
        if (modeEmitters.value.length > 0 && modeEmitters.random.enable) {
          emittersModeOptions = [];
          const usedIndexes = [];
          for (let i = 0; i < modeEmitters.random.count; i++) {
            const idx = arrayRandomIndex(modeEmitters.value);
            if (usedIndexes.includes(idx) && usedIndexes.length < modeEmitters.value.length) {
              i--;
              continue;
            }
            usedIndexes.push(idx);
            emittersModeOptions.push(itemFromArray(modeEmitters.value, idx));
          }
        } else {
          emittersModeOptions = modeEmitters.value;
        }
      } else {
        emittersModeOptions = modeEmitters === null || modeEmitters === void 0 ? void 0 : modeEmitters.value;
      }
      const emittersOptions = emittersModeOptions !== null && emittersModeOptions !== void 0 ? emittersModeOptions : emitterOptions, ePosition = this.container.interactivity.mouse.clickPosition;
      if (emittersOptions instanceof Array) {
        for (const emitterOptions2 of emittersOptions) {
          this.addEmitter(emitterOptions2, ePosition);
        }
      } else {
        this.addEmitter(deepExtend({}, emittersOptions), ePosition);
      }
    }
  }
  resize() {
    for (const emitter of this.array) {
      emitter.resize();
    }
  }
  addEmitter(options, position) {
    const emitterOptions = new Emitter();
    emitterOptions.load(options);
    const emitter = new EmitterInstance(__classPrivateFieldGet12(this, _Emitters_engine, "f"), this, this.container, emitterOptions, position);
    this.array.push(emitter);
    return emitter;
  }
  removeEmitter(emitter) {
    const index = this.array.indexOf(emitter);
    if (index >= 0) {
      this.array.splice(index, 1);
    }
  }
};
_Emitters_engine = /* @__PURE__ */ new WeakMap();

// node_modules/tsparticles-plugin-emitters/esm/ShapeManager.js
var __classPrivateFieldSet14 = function(receiver, state, value, kind, f) {
  if (kind === "m")
    throw new TypeError("Private method is not writable");
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var _ShapeManager_engine;
var shapes = /* @__PURE__ */ new Map();
var ShapeManager = class {
  constructor(engine) {
    _ShapeManager_engine.set(this, void 0);
    __classPrivateFieldSet14(this, _ShapeManager_engine, engine, "f");
  }
  addShape(name, drawer) {
    if (!this.getShape(name)) {
      shapes.set(name, drawer);
    }
  }
  getShape(name) {
    return shapes.get(name);
  }
  getSupportedShapes() {
    return shapes.keys();
  }
};
_ShapeManager_engine = /* @__PURE__ */ new WeakMap();

// node_modules/tsparticles-plugin-emitters/esm/Shapes/Square/SquareShape.js
function randomSquareCoordinate(position, offset) {
  return position + offset * (Math.random() - 0.5);
}
var SquareShape = class {
  randomPosition(position, size, fill) {
    if (fill) {
      return {
        x: randomSquareCoordinate(position.x, size.width),
        y: randomSquareCoordinate(position.y, size.height)
      };
    } else {
      const halfW = size.width / 2, halfH = size.height / 2, side = Math.floor(Math.random() * 4), v = (Math.random() - 0.5) * 2;
      switch (side) {
        case 0:
          return {
            x: position.x + v * halfW,
            y: position.y - halfH
          };
        case 1:
          return {
            x: position.x - halfW,
            y: position.y + v * halfH
          };
        case 2:
          return {
            x: position.x + v * halfW,
            y: position.y + halfH
          };
        case 3:
        default:
          return {
            x: position.x + halfW,
            y: position.y + v * halfH
          };
      }
    }
  }
};

// node_modules/tsparticles-plugin-emitters/esm/index.js
var __classPrivateFieldSet15 = function(receiver, state, value, kind, f) {
  if (kind === "m")
    throw new TypeError("Private method is not writable");
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet13 = function(receiver, state, kind, f) {
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _EmittersPlugin_engine;
var EmittersPlugin = class {
  constructor(engine) {
    _EmittersPlugin_engine.set(this, void 0);
    __classPrivateFieldSet15(this, _EmittersPlugin_engine, engine, "f");
    this.id = "emitters";
  }
  getPlugin(container) {
    return new Emitters(__classPrivateFieldGet13(this, _EmittersPlugin_engine, "f"), container);
  }
  needsPlugin(options) {
    var _a, _b, _c;
    if (!options) {
      return false;
    }
    const emitters = options.emitters;
    return emitters instanceof Array && !!emitters.length || emitters !== void 0 || !!((_c = (_b = (_a = options.interactivity) === null || _a === void 0 ? void 0 : _a.events) === null || _b === void 0 ? void 0 : _b.onClick) === null || _c === void 0 ? void 0 : _c.mode) && isInArray("emitter", options.interactivity.events.onClick.mode);
  }
  loadOptions(options, source) {
    var _a, _b, _c, _d, _e, _f;
    if (!this.needsPlugin(options) && !this.needsPlugin(source)) {
      return;
    }
    const optionsCast = options;
    if (source === null || source === void 0 ? void 0 : source.emitters) {
      if ((source === null || source === void 0 ? void 0 : source.emitters) instanceof Array) {
        optionsCast.emitters = source === null || source === void 0 ? void 0 : source.emitters.map((s) => {
          const tmp = new Emitter();
          tmp.load(s);
          return tmp;
        });
      } else {
        let emitterOptions = optionsCast.emitters;
        if ((emitterOptions === null || emitterOptions === void 0 ? void 0 : emitterOptions.load) === void 0) {
          optionsCast.emitters = emitterOptions = new Emitter();
        }
        emitterOptions.load(source === null || source === void 0 ? void 0 : source.emitters);
      }
    }
    const interactivityEmitters = (_b = (_a = source === null || source === void 0 ? void 0 : source.interactivity) === null || _a === void 0 ? void 0 : _a.modes) === null || _b === void 0 ? void 0 : _b.emitters;
    if (interactivityEmitters) {
      if (interactivityEmitters instanceof Array) {
        optionsCast.interactivity.modes.emitters = {
          random: {
            count: 1,
            enable: true
          },
          value: interactivityEmitters.map((s) => {
            const tmp = new Emitter();
            tmp.load(s);
            return tmp;
          })
        };
      } else {
        const emitterMode = interactivityEmitters;
        if (emitterMode.value !== void 0) {
          if (emitterMode.value instanceof Array) {
            optionsCast.interactivity.modes.emitters = {
              random: {
                count: (_c = emitterMode.random.count) !== null && _c !== void 0 ? _c : 1,
                enable: (_d = emitterMode.random.enable) !== null && _d !== void 0 ? _d : false
              },
              value: emitterMode.value.map((s) => {
                const tmp = new Emitter();
                tmp.load(s);
                return tmp;
              })
            };
          } else {
            const tmp = new Emitter();
            tmp.load(emitterMode.value);
            optionsCast.interactivity.modes.emitters = {
              random: {
                count: (_e = emitterMode.random.count) !== null && _e !== void 0 ? _e : 1,
                enable: (_f = emitterMode.random.enable) !== null && _f !== void 0 ? _f : false
              },
              value: tmp
            };
          }
        } else {
          const emitterOptions = optionsCast.interactivity.modes.emitters = {
            random: {
              count: 1,
              enable: false
            },
            value: new Emitter()
          };
          emitterOptions.value.load(interactivityEmitters);
        }
      }
    }
  }
};
_EmittersPlugin_engine = /* @__PURE__ */ new WeakMap();
async function loadEmittersPlugin(engine) {
  if (!engine.emitterShapeManager) {
    engine.emitterShapeManager = new ShapeManager(engine);
  }
  if (!engine.addEmitterShape) {
    engine.addEmitterShape = (name, shape) => {
      var _a;
      (_a = engine.emitterShapeManager) === null || _a === void 0 ? void 0 : _a.addShape(name, shape);
    };
  }
  const plugin = new EmittersPlugin(engine);
  await engine.addPlugin(plugin);
  engine.addEmitterShape("circle", new CircleShape());
  engine.addEmitterShape("square", new SquareShape());
}

// node_modules/tsparticles-interaction-external-trail/esm/TrailMaker.js
var TrailMaker = class extends ExternalInteractorBase {
  constructor(container) {
    super(container);
    this.delay = 0;
  }
  async interact(delta) {
    var _a, _b, _c, _d;
    if (!this.container.retina.reduceFactor) {
      return;
    }
    const container = this.container, options = container.actualOptions, trailOptions = options.interactivity.modes.trail, optDelay = trailOptions.delay * 1e3 / this.container.retina.reduceFactor;
    if (this.delay < optDelay) {
      this.delay += delta.value;
    }
    if (this.delay < optDelay) {
      return;
    }
    let canEmit = true;
    if (trailOptions.pauseOnStop) {
      if (container.interactivity.mouse.position === this.lastPosition || ((_a = container.interactivity.mouse.position) === null || _a === void 0 ? void 0 : _a.x) === ((_b = this.lastPosition) === null || _b === void 0 ? void 0 : _b.x) && ((_c = container.interactivity.mouse.position) === null || _c === void 0 ? void 0 : _c.y) === ((_d = this.lastPosition) === null || _d === void 0 ? void 0 : _d.y)) {
        canEmit = false;
      }
    }
    if (container.interactivity.mouse.position) {
      this.lastPosition = {
        x: container.interactivity.mouse.position.x,
        y: container.interactivity.mouse.position.y
      };
    } else {
      delete this.lastPosition;
    }
    if (canEmit) {
      container.particles.push(trailOptions.quantity, container.interactivity.mouse, trailOptions.particles);
    }
    this.delay -= optDelay;
  }
  isEnabled(particle) {
    var _a;
    const container = this.container, options = container.actualOptions, mouse = container.interactivity.mouse, events = ((_a = particle === null || particle === void 0 ? void 0 : particle.interactivity) !== null && _a !== void 0 ? _a : options.interactivity).events;
    return mouse.clicking && mouse.inside && !!mouse.position && isInArray("trail", events.onClick.mode) || mouse.inside && !!mouse.position && isInArray("trail", events.onHover.mode);
  }
  clear() {
  }
  reset() {
  }
};

// node_modules/tsparticles-interaction-external-trail/esm/index.js
async function loadExternalTrailInteraction(engine) {
  await engine.addInteractor("externalTrail", (container) => new TrailMaker(container));
}

// node_modules/tsparticles-plugin-polygon-mask/esm/pathseg.js
(function() {
  "use strict";
  try {
    if (typeof window === "undefined")
      return;
    if (!("SVGPathSeg" in window)) {
      window.SVGPathSeg = function(type, typeAsLetter, owningPathSegList) {
        this.pathSegType = type;
        this.pathSegTypeAsLetter = typeAsLetter;
        this._owningPathSegList = owningPathSegList;
      };
      window.SVGPathSeg.prototype.classname = "SVGPathSeg";
      window.SVGPathSeg.PATHSEG_UNKNOWN = 0;
      window.SVGPathSeg.PATHSEG_CLOSEPATH = 1;
      window.SVGPathSeg.PATHSEG_MOVETO_ABS = 2;
      window.SVGPathSeg.PATHSEG_MOVETO_REL = 3;
      window.SVGPathSeg.PATHSEG_LINETO_ABS = 4;
      window.SVGPathSeg.PATHSEG_LINETO_REL = 5;
      window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS = 6;
      window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL = 7;
      window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS = 8;
      window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL = 9;
      window.SVGPathSeg.PATHSEG_ARC_ABS = 10;
      window.SVGPathSeg.PATHSEG_ARC_REL = 11;
      window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS = 12;
      window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL = 13;
      window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS = 14;
      window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL = 15;
      window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS = 16;
      window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL = 17;
      window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS = 18;
      window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL = 19;
      window.SVGPathSeg.prototype._segmentChanged = function() {
        if (this._owningPathSegList)
          this._owningPathSegList.segmentChanged(this);
      };
      window.SVGPathSegClosePath = function(owningPathSegList) {
        window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CLOSEPATH, "z", owningPathSegList);
      };
      window.SVGPathSegClosePath.prototype = Object.create(window.SVGPathSeg.prototype);
      window.SVGPathSegClosePath.prototype.toString = function() {
        return "[object SVGPathSegClosePath]";
      };
      window.SVGPathSegClosePath.prototype._asPathString = function() {
        return this.pathSegTypeAsLetter;
      };
      window.SVGPathSegClosePath.prototype.clone = function() {
        return new window.SVGPathSegClosePath(void 0);
      };
      window.SVGPathSegMovetoAbs = function(owningPathSegList, x, y) {
        window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_MOVETO_ABS, "M", owningPathSegList);
        this._x = x;
        this._y = y;
      };
      window.SVGPathSegMovetoAbs.prototype = Object.create(window.SVGPathSeg.prototype);
      window.SVGPathSegMovetoAbs.prototype.toString = function() {
        return "[object SVGPathSegMovetoAbs]";
      };
      window.SVGPathSegMovetoAbs.prototype._asPathString = function() {
        return this.pathSegTypeAsLetter + " " + this._x + " " + this._y;
      };
      window.SVGPathSegMovetoAbs.prototype.clone = function() {
        return new window.SVGPathSegMovetoAbs(void 0, this._x, this._y);
      };
      Object.defineProperty(window.SVGPathSegMovetoAbs.prototype, "x", {
        get: function() {
          return this._x;
        },
        set: function(x) {
          this._x = x;
          this._segmentChanged();
        },
        enumerable: true
      });
      Object.defineProperty(window.SVGPathSegMovetoAbs.prototype, "y", {
        get: function() {
          return this._y;
        },
        set: function(y) {
          this._y = y;
          this._segmentChanged();
        },
        enumerable: true
      });
      window.SVGPathSegMovetoRel = function(owningPathSegList, x, y) {
        window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_MOVETO_REL, "m", owningPathSegList);
        this._x = x;
        this._y = y;
      };
      window.SVGPathSegMovetoRel.prototype = Object.create(window.SVGPathSeg.prototype);
      window.SVGPathSegMovetoRel.prototype.toString = function() {
        return "[object SVGPathSegMovetoRel]";
      };
      window.SVGPathSegMovetoRel.prototype._asPathString = function() {
        return this.pathSegTypeAsLetter + " " + this._x + " " + this._y;
      };
      window.SVGPathSegMovetoRel.prototype.clone = function() {
        return new window.SVGPathSegMovetoRel(void 0, this._x, this._y);
      };
      Object.defineProperty(window.SVGPathSegMovetoRel.prototype, "x", {
        get: function() {
          return this._x;
        },
        set: function(x) {
          this._x = x;
          this._segmentChanged();
        },
        enumerable: true
      });
      Object.defineProperty(window.SVGPathSegMovetoRel.prototype, "y", {
        get: function() {
          return this._y;
        },
        set: function(y) {
          this._y = y;
          this._segmentChanged();
        },
        enumerable: true
      });
      window.SVGPathSegLinetoAbs = function(owningPathSegList, x, y) {
        window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_ABS, "L", owningPathSegList);
        this._x = x;
        this._y = y;
      };
      window.SVGPathSegLinetoAbs.prototype = Object.create(window.SVGPathSeg.prototype);
      window.SVGPathSegLinetoAbs.prototype.toString = function() {
        return "[object SVGPathSegLinetoAbs]";
      };
      window.SVGPathSegLinetoAbs.prototype._asPathString = function() {
        return this.pathSegTypeAsLetter + " " + this._x + " " + this._y;
      };
      window.SVGPathSegLinetoAbs.prototype.clone = function() {
        return new window.SVGPathSegLinetoAbs(void 0, this._x, this._y);
      };
      Object.defineProperty(window.SVGPathSegLinetoAbs.prototype, "x", {
        get: function() {
          return this._x;
        },
        set: function(x) {
          this._x = x;
          this._segmentChanged();
        },
        enumerable: true
      });
      Object.defineProperty(window.SVGPathSegLinetoAbs.prototype, "y", {
        get: function() {
          return this._y;
        },
        set: function(y) {
          this._y = y;
          this._segmentChanged();
        },
        enumerable: true
      });
      window.SVGPathSegLinetoRel = function(owningPathSegList, x, y) {
        window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_REL, "l", owningPathSegList);
        this._x = x;
        this._y = y;
      };
      window.SVGPathSegLinetoRel.prototype = Object.create(window.SVGPathSeg.prototype);
      window.SVGPathSegLinetoRel.prototype.toString = function() {
        return "[object SVGPathSegLinetoRel]";
      };
      window.SVGPathSegLinetoRel.prototype._asPathString = function() {
        return this.pathSegTypeAsLetter + " " + this._x + " " + this._y;
      };
      window.SVGPathSegLinetoRel.prototype.clone = function() {
        return new window.SVGPathSegLinetoRel(void 0, this._x, this._y);
      };
      Object.defineProperty(window.SVGPathSegLinetoRel.prototype, "x", {
        get: function() {
          return this._x;
        },
        set: function(x) {
          this._x = x;
          this._segmentChanged();
        },
        enumerable: true
      });
      Object.defineProperty(window.SVGPathSegLinetoRel.prototype, "y", {
        get: function() {
          return this._y;
        },
        set: function(y) {
          this._y = y;
          this._segmentChanged();
        },
        enumerable: true
      });
      window.SVGPathSegCurvetoCubicAbs = function(owningPathSegList, x, y, x1, y1, x2, y2) {
        window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS, "C", owningPathSegList);
        this._x = x;
        this._y = y;
        this._x1 = x1;
        this._y1 = y1;
        this._x2 = x2;
        this._y2 = y2;
      };
      window.SVGPathSegCurvetoCubicAbs.prototype = Object.create(window.SVGPathSeg.prototype);
      window.SVGPathSegCurvetoCubicAbs.prototype.toString = function() {
        return "[object SVGPathSegCurvetoCubicAbs]";
      };
      window.SVGPathSegCurvetoCubicAbs.prototype._asPathString = function() {
        return this.pathSegTypeAsLetter + " " + this._x1 + " " + this._y1 + " " + this._x2 + " " + this._y2 + " " + this._x + " " + this._y;
      };
      window.SVGPathSegCurvetoCubicAbs.prototype.clone = function() {
        return new window.SVGPathSegCurvetoCubicAbs(void 0, this._x, this._y, this._x1, this._y1, this._x2, this._y2);
      };
      Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "x", {
        get: function() {
          return this._x;
        },
        set: function(x) {
          this._x = x;
          this._segmentChanged();
        },
        enumerable: true
      });
      Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "y", {
        get: function() {
          return this._y;
        },
        set: function(y) {
          this._y = y;
          this._segmentChanged();
        },
        enumerable: true
      });
      Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "x1", {
        get: function() {
          return this._x1;
        },
        set: function(x1) {
          this._x1 = x1;
          this._segmentChanged();
        },
        enumerable: true
      });
      Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "y1", {
        get: function() {
          return this._y1;
        },
        set: function(y1) {
          this._y1 = y1;
          this._segmentChanged();
        },
        enumerable: true
      });
      Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "x2", {
        get: function() {
          return this._x2;
        },
        set: function(x2) {
          this._x2 = x2;
          this._segmentChanged();
        },
        enumerable: true
      });
      Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "y2", {
        get: function() {
          return this._y2;
        },
        set: function(y2) {
          this._y2 = y2;
          this._segmentChanged();
        },
        enumerable: true
      });
      window.SVGPathSegCurvetoCubicRel = function(owningPathSegList, x, y, x1, y1, x2, y2) {
        window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL, "c", owningPathSegList);
        this._x = x;
        this._y = y;
        this._x1 = x1;
        this._y1 = y1;
        this._x2 = x2;
        this._y2 = y2;
      };
      window.SVGPathSegCurvetoCubicRel.prototype = Object.create(window.SVGPathSeg.prototype);
      window.SVGPathSegCurvetoCubicRel.prototype.toString = function() {
        return "[object SVGPathSegCurvetoCubicRel]";
      };
      window.SVGPathSegCurvetoCubicRel.prototype._asPathString = function() {
        return this.pathSegTypeAsLetter + " " + this._x1 + " " + this._y1 + " " + this._x2 + " " + this._y2 + " " + this._x + " " + this._y;
      };
      window.SVGPathSegCurvetoCubicRel.prototype.clone = function() {
        return new window.SVGPathSegCurvetoCubicRel(void 0, this._x, this._y, this._x1, this._y1, this._x2, this._y2);
      };
      Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "x", {
        get: function() {
          return this._x;
        },
        set: function(x) {
          this._x = x;
          this._segmentChanged();
        },
        enumerable: true
      });
      Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "y", {
        get: function() {
          return this._y;
        },
        set: function(y) {
          this._y = y;
          this._segmentChanged();
        },
        enumerable: true
      });
      Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "x1", {
        get: function() {
          return this._x1;
        },
        set: function(x1) {
          this._x1 = x1;
          this._segmentChanged();
        },
        enumerable: true
      });
      Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "y1", {
        get: function() {
          return this._y1;
        },
        set: function(y1) {
          this._y1 = y1;
          this._segmentChanged();
        },
        enumerable: true
      });
      Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "x2", {
        get: function() {
          return this._x2;
        },
        set: function(x2) {
          this._x2 = x2;
          this._segmentChanged();
        },
        enumerable: true
      });
      Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "y2", {
        get: function() {
          return this._y2;
        },
        set: function(y2) {
          this._y2 = y2;
          this._segmentChanged();
        },
        enumerable: true
      });
      window.SVGPathSegCurvetoQuadraticAbs = function(owningPathSegList, x, y, x1, y1) {
        window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS, "Q", owningPathSegList);
        this._x = x;
        this._y = y;
        this._x1 = x1;
        this._y1 = y1;
      };
      window.SVGPathSegCurvetoQuadraticAbs.prototype = Object.create(window.SVGPathSeg.prototype);
      window.SVGPathSegCurvetoQuadraticAbs.prototype.toString = function() {
        return "[object SVGPathSegCurvetoQuadraticAbs]";
      };
      window.SVGPathSegCurvetoQuadraticAbs.prototype._asPathString = function() {
        return this.pathSegTypeAsLetter + " " + this._x1 + " " + this._y1 + " " + this._x + " " + this._y;
      };
      window.SVGPathSegCurvetoQuadraticAbs.prototype.clone = function() {
        return new window.SVGPathSegCurvetoQuadraticAbs(void 0, this._x, this._y, this._x1, this._y1);
      };
      Object.defineProperty(window.SVGPathSegCurvetoQuadraticAbs.prototype, "x", {
        get: function() {
          return this._x;
        },
        set: function(x) {
          this._x = x;
          this._segmentChanged();
        },
        enumerable: true
      });
      Object.defineProperty(window.SVGPathSegCurvetoQuadraticAbs.prototype, "y", {
        get: function() {
          return this._y;
        },
        set: function(y) {
          this._y = y;
          this._segmentChanged();
        },
        enumerable: true
      });
      Object.defineProperty(window.SVGPathSegCurvetoQuadraticAbs.prototype, "x1", {
        get: function() {
          return this._x1;
        },
        set: function(x1) {
          this._x1 = x1;
          this._segmentChanged();
        },
        enumerable: true
      });
      Object.defineProperty(window.SVGPathSegCurvetoQuadraticAbs.prototype, "y1", {
        get: function() {
          return this._y1;
        },
        set: function(y1) {
          this._y1 = y1;
          this._segmentChanged();
        },
        enumerable: true
      });
      window.SVGPathSegCurvetoQuadraticRel = function(owningPathSegList, x, y, x1, y1) {
        window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL, "q", owningPathSegList);
        this._x = x;
        this._y = y;
        this._x1 = x1;
        this._y1 = y1;
      };
      window.SVGPathSegCurvetoQuadraticRel.prototype = Object.create(window.SVGPathSeg.prototype);
      window.SVGPathSegCurvetoQuadraticRel.prototype.toString = function() {
        return "[object SVGPathSegCurvetoQuadraticRel]";
      };
      window.SVGPathSegCurvetoQuadraticRel.prototype._asPathString = function() {
        return this.pathSegTypeAsLetter + " " + this._x1 + " " + this._y1 + " " + this._x + " " + this._y;
      };
      window.SVGPathSegCurvetoQuadraticRel.prototype.clone = function() {
        return new window.SVGPathSegCurvetoQuadraticRel(void 0, this._x, this._y, this._x1, this._y1);
      };
      Object.defineProperty(window.SVGPathSegCurvetoQuadraticRel.prototype, "x", {
        get: function() {
          return this._x;
        },
        set: function(x) {
          this._x = x;
          this._segmentChanged();
        },
        enumerable: true
      });
      Object.defineProperty(window.SVGPathSegCurvetoQuadraticRel.prototype, "y", {
        get: function() {
          return this._y;
        },
        set: function(y) {
          this._y = y;
          this._segmentChanged();
        },
        enumerable: true
      });
      Object.defineProperty(window.SVGPathSegCurvetoQuadraticRel.prototype, "x1", {
        get: function() {
          return this._x1;
        },
        set: function(x1) {
          this._x1 = x1;
          this._segmentChanged();
        },
        enumerable: true
      });
      Object.defineProperty(window.SVGPathSegCurvetoQuadraticRel.prototype, "y1", {
        get: function() {
          return this._y1;
        },
        set: function(y1) {
          this._y1 = y1;
          this._segmentChanged();
        },
        enumerable: true
      });
      window.SVGPathSegArcAbs = function(owningPathSegList, x, y, r1, r2, angle, largeArcFlag, sweepFlag) {
        window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_ARC_ABS, "A", owningPathSegList);
        this._x = x;
        this._y = y;
        this._r1 = r1;
        this._r2 = r2;
        this._angle = angle;
        this._largeArcFlag = largeArcFlag;
        this._sweepFlag = sweepFlag;
      };
      window.SVGPathSegArcAbs.prototype = Object.create(window.SVGPathSeg.prototype);
      window.SVGPathSegArcAbs.prototype.toString = function() {
        return "[object SVGPathSegArcAbs]";
      };
      window.SVGPathSegArcAbs.prototype._asPathString = function() {
        return this.pathSegTypeAsLetter + " " + this._r1 + " " + this._r2 + " " + this._angle + " " + (this._largeArcFlag ? "1" : "0") + " " + (this._sweepFlag ? "1" : "0") + " " + this._x + " " + this._y;
      };
      window.SVGPathSegArcAbs.prototype.clone = function() {
        return new window.SVGPathSegArcAbs(void 0, this._x, this._y, this._r1, this._r2, this._angle, this._largeArcFlag, this._sweepFlag);
      };
      Object.defineProperty(window.SVGPathSegArcAbs.prototype, "x", {
        get: function() {
          return this._x;
        },
        set: function(x) {
          this._x = x;
          this._segmentChanged();
        },
        enumerable: true
      });
      Object.defineProperty(window.SVGPathSegArcAbs.prototype, "y", {
        get: function() {
          return this._y;
        },
        set: function(y) {
          this._y = y;
          this._segmentChanged();
        },
        enumerable: true
      });
      Object.defineProperty(window.SVGPathSegArcAbs.prototype, "r1", {
        get: function() {
          return this._r1;
        },
        set: function(r1) {
          this._r1 = r1;
          this._segmentChanged();
        },
        enumerable: true
      });
      Object.defineProperty(window.SVGPathSegArcAbs.prototype, "r2", {
        get: function() {
          return this._r2;
        },
        set: function(r2) {
          this._r2 = r2;
          this._segmentChanged();
        },
        enumerable: true
      });
      Object.defineProperty(window.SVGPathSegArcAbs.prototype, "angle", {
        get: function() {
          return this._angle;
        },
        set: function(angle) {
          this._angle = angle;
          this._segmentChanged();
        },
        enumerable: true
      });
      Object.defineProperty(window.SVGPathSegArcAbs.prototype, "largeArcFlag", {
        get: function() {
          return this._largeArcFlag;
        },
        set: function(largeArcFlag) {
          this._largeArcFlag = largeArcFlag;
          this._segmentChanged();
        },
        enumerable: true
      });
      Object.defineProperty(window.SVGPathSegArcAbs.prototype, "sweepFlag", {
        get: function() {
          return this._sweepFlag;
        },
        set: function(sweepFlag) {
          this._sweepFlag = sweepFlag;
          this._segmentChanged();
        },
        enumerable: true
      });
      window.SVGPathSegArcRel = function(owningPathSegList, x, y, r1, r2, angle, largeArcFlag, sweepFlag) {
        window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_ARC_REL, "a", owningPathSegList);
        this._x = x;
        this._y = y;
        this._r1 = r1;
        this._r2 = r2;
        this._angle = angle;
        this._largeArcFlag = largeArcFlag;
        this._sweepFlag = sweepFlag;
      };
      window.SVGPathSegArcRel.prototype = Object.create(window.SVGPathSeg.prototype);
      window.SVGPathSegArcRel.prototype.toString = function() {
        return "[object SVGPathSegArcRel]";
      };
      window.SVGPathSegArcRel.prototype._asPathString = function() {
        return this.pathSegTypeAsLetter + " " + this._r1 + " " + this._r2 + " " + this._angle + " " + (this._largeArcFlag ? "1" : "0") + " " + (this._sweepFlag ? "1" : "0") + " " + this._x + " " + this._y;
      };
      window.SVGPathSegArcRel.prototype.clone = function() {
        return new window.SVGPathSegArcRel(void 0, this._x, this._y, this._r1, this._r2, this._angle, this._largeArcFlag, this._sweepFlag);
      };
      Object.defineProperty(window.SVGPathSegArcRel.prototype, "x", {
        get: function() {
          return this._x;
        },
        set: function(x) {
          this._x = x;
          this._segmentChanged();
        },
        enumerable: true
      });
      Object.defineProperty(window.SVGPathSegArcRel.prototype, "y", {
        get: function() {
          return this._y;
        },
        set: function(y) {
          this._y = y;
          this._segmentChanged();
        },
        enumerable: true
      });
      Object.defineProperty(window.SVGPathSegArcRel.prototype, "r1", {
        get: function() {
          return this._r1;
        },
        set: function(r1) {
          this._r1 = r1;
          this._segmentChanged();
        },
        enumerable: true
      });
      Object.defineProperty(window.SVGPathSegArcRel.prototype, "r2", {
        get: function() {
          return this._r2;
        },
        set: function(r2) {
          this._r2 = r2;
          this._segmentChanged();
        },
        enumerable: true
      });
      Object.defineProperty(window.SVGPathSegArcRel.prototype, "angle", {
        get: function() {
          return this._angle;
        },
        set: function(angle) {
          this._angle = angle;
          this._segmentChanged();
        },
        enumerable: true
      });
      Object.defineProperty(window.SVGPathSegArcRel.prototype, "largeArcFlag", {
        get: function() {
          return this._largeArcFlag;
        },
        set: function(largeArcFlag) {
          this._largeArcFlag = largeArcFlag;
          this._segmentChanged();
        },
        enumerable: true
      });
      Object.defineProperty(window.SVGPathSegArcRel.prototype, "sweepFlag", {
        get: function() {
          return this._sweepFlag;
        },
        set: function(sweepFlag) {
          this._sweepFlag = sweepFlag;
          this._segmentChanged();
        },
        enumerable: true
      });
      window.SVGPathSegLinetoHorizontalAbs = function(owningPathSegList, x) {
        window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS, "H", owningPathSegList);
        this._x = x;
      };
      window.SVGPathSegLinetoHorizontalAbs.prototype = Object.create(window.SVGPathSeg.prototype);
      window.SVGPathSegLinetoHorizontalAbs.prototype.toString = function() {
        return "[object SVGPathSegLinetoHorizontalAbs]";
      };
      window.SVGPathSegLinetoHorizontalAbs.prototype._asPathString = function() {
        return this.pathSegTypeAsLetter + " " + this._x;
      };
      window.SVGPathSegLinetoHorizontalAbs.prototype.clone = function() {
        return new window.SVGPathSegLinetoHorizontalAbs(void 0, this._x);
      };
      Object.defineProperty(window.SVGPathSegLinetoHorizontalAbs.prototype, "x", {
        get: function() {
          return this._x;
        },
        set: function(x) {
          this._x = x;
          this._segmentChanged();
        },
        enumerable: true
      });
      window.SVGPathSegLinetoHorizontalRel = function(owningPathSegList, x) {
        window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL, "h", owningPathSegList);
        this._x = x;
      };
      window.SVGPathSegLinetoHorizontalRel.prototype = Object.create(window.SVGPathSeg.prototype);
      window.SVGPathSegLinetoHorizontalRel.prototype.toString = function() {
        return "[object SVGPathSegLinetoHorizontalRel]";
      };
      window.SVGPathSegLinetoHorizontalRel.prototype._asPathString = function() {
        return this.pathSegTypeAsLetter + " " + this._x;
      };
      window.SVGPathSegLinetoHorizontalRel.prototype.clone = function() {
        return new window.SVGPathSegLinetoHorizontalRel(void 0, this._x);
      };
      Object.defineProperty(window.SVGPathSegLinetoHorizontalRel.prototype, "x", {
        get: function() {
          return this._x;
        },
        set: function(x) {
          this._x = x;
          this._segmentChanged();
        },
        enumerable: true
      });
      window.SVGPathSegLinetoVerticalAbs = function(owningPathSegList, y) {
        window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS, "V", owningPathSegList);
        this._y = y;
      };
      window.SVGPathSegLinetoVerticalAbs.prototype = Object.create(window.SVGPathSeg.prototype);
      window.SVGPathSegLinetoVerticalAbs.prototype.toString = function() {
        return "[object SVGPathSegLinetoVerticalAbs]";
      };
      window.SVGPathSegLinetoVerticalAbs.prototype._asPathString = function() {
        return this.pathSegTypeAsLetter + " " + this._y;
      };
      window.SVGPathSegLinetoVerticalAbs.prototype.clone = function() {
        return new window.SVGPathSegLinetoVerticalAbs(void 0, this._y);
      };
      Object.defineProperty(window.SVGPathSegLinetoVerticalAbs.prototype, "y", {
        get: function() {
          return this._y;
        },
        set: function(y) {
          this._y = y;
          this._segmentChanged();
        },
        enumerable: true
      });
      window.SVGPathSegLinetoVerticalRel = function(owningPathSegList, y) {
        window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL, "v", owningPathSegList);
        this._y = y;
      };
      window.SVGPathSegLinetoVerticalRel.prototype = Object.create(window.SVGPathSeg.prototype);
      window.SVGPathSegLinetoVerticalRel.prototype.toString = function() {
        return "[object SVGPathSegLinetoVerticalRel]";
      };
      window.SVGPathSegLinetoVerticalRel.prototype._asPathString = function() {
        return this.pathSegTypeAsLetter + " " + this._y;
      };
      window.SVGPathSegLinetoVerticalRel.prototype.clone = function() {
        return new window.SVGPathSegLinetoVerticalRel(void 0, this._y);
      };
      Object.defineProperty(window.SVGPathSegLinetoVerticalRel.prototype, "y", {
        get: function() {
          return this._y;
        },
        set: function(y) {
          this._y = y;
          this._segmentChanged();
        },
        enumerable: true
      });
      window.SVGPathSegCurvetoCubicSmoothAbs = function(owningPathSegList, x, y, x2, y2) {
        window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS, "S", owningPathSegList);
        this._x = x;
        this._y = y;
        this._x2 = x2;
        this._y2 = y2;
      };
      window.SVGPathSegCurvetoCubicSmoothAbs.prototype = Object.create(window.SVGPathSeg.prototype);
      window.SVGPathSegCurvetoCubicSmoothAbs.prototype.toString = function() {
        return "[object SVGPathSegCurvetoCubicSmoothAbs]";
      };
      window.SVGPathSegCurvetoCubicSmoothAbs.prototype._asPathString = function() {
        return this.pathSegTypeAsLetter + " " + this._x2 + " " + this._y2 + " " + this._x + " " + this._y;
      };
      window.SVGPathSegCurvetoCubicSmoothAbs.prototype.clone = function() {
        return new window.SVGPathSegCurvetoCubicSmoothAbs(void 0, this._x, this._y, this._x2, this._y2);
      };
      Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothAbs.prototype, "x", {
        get: function() {
          return this._x;
        },
        set: function(x) {
          this._x = x;
          this._segmentChanged();
        },
        enumerable: true
      });
      Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothAbs.prototype, "y", {
        get: function() {
          return this._y;
        },
        set: function(y) {
          this._y = y;
          this._segmentChanged();
        },
        enumerable: true
      });
      Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothAbs.prototype, "x2", {
        get: function() {
          return this._x2;
        },
        set: function(x2) {
          this._x2 = x2;
          this._segmentChanged();
        },
        enumerable: true
      });
      Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothAbs.prototype, "y2", {
        get: function() {
          return this._y2;
        },
        set: function(y2) {
          this._y2 = y2;
          this._segmentChanged();
        },
        enumerable: true
      });
      window.SVGPathSegCurvetoCubicSmoothRel = function(owningPathSegList, x, y, x2, y2) {
        window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL, "s", owningPathSegList);
        this._x = x;
        this._y = y;
        this._x2 = x2;
        this._y2 = y2;
      };
      window.SVGPathSegCurvetoCubicSmoothRel.prototype = Object.create(window.SVGPathSeg.prototype);
      window.SVGPathSegCurvetoCubicSmoothRel.prototype.toString = function() {
        return "[object SVGPathSegCurvetoCubicSmoothRel]";
      };
      window.SVGPathSegCurvetoCubicSmoothRel.prototype._asPathString = function() {
        return this.pathSegTypeAsLetter + " " + this._x2 + " " + this._y2 + " " + this._x + " " + this._y;
      };
      window.SVGPathSegCurvetoCubicSmoothRel.prototype.clone = function() {
        return new window.SVGPathSegCurvetoCubicSmoothRel(void 0, this._x, this._y, this._x2, this._y2);
      };
      Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothRel.prototype, "x", {
        get: function() {
          return this._x;
        },
        set: function(x) {
          this._x = x;
          this._segmentChanged();
        },
        enumerable: true
      });
      Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothRel.prototype, "y", {
        get: function() {
          return this._y;
        },
        set: function(y) {
          this._y = y;
          this._segmentChanged();
        },
        enumerable: true
      });
      Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothRel.prototype, "x2", {
        get: function() {
          return this._x2;
        },
        set: function(x2) {
          this._x2 = x2;
          this._segmentChanged();
        },
        enumerable: true
      });
      Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothRel.prototype, "y2", {
        get: function() {
          return this._y2;
        },
        set: function(y2) {
          this._y2 = y2;
          this._segmentChanged();
        },
        enumerable: true
      });
      window.SVGPathSegCurvetoQuadraticSmoothAbs = function(owningPathSegList, x, y) {
        window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS, "T", owningPathSegList);
        this._x = x;
        this._y = y;
      };
      window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype = Object.create(window.SVGPathSeg.prototype);
      window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype.toString = function() {
        return "[object SVGPathSegCurvetoQuadraticSmoothAbs]";
      };
      window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype._asPathString = function() {
        return this.pathSegTypeAsLetter + " " + this._x + " " + this._y;
      };
      window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype.clone = function() {
        return new window.SVGPathSegCurvetoQuadraticSmoothAbs(void 0, this._x, this._y);
      };
      Object.defineProperty(window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype, "x", {
        get: function() {
          return this._x;
        },
        set: function(x) {
          this._x = x;
          this._segmentChanged();
        },
        enumerable: true
      });
      Object.defineProperty(window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype, "y", {
        get: function() {
          return this._y;
        },
        set: function(y) {
          this._y = y;
          this._segmentChanged();
        },
        enumerable: true
      });
      window.SVGPathSegCurvetoQuadraticSmoothRel = function(owningPathSegList, x, y) {
        window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL, "t", owningPathSegList);
        this._x = x;
        this._y = y;
      };
      window.SVGPathSegCurvetoQuadraticSmoothRel.prototype = Object.create(window.SVGPathSeg.prototype);
      window.SVGPathSegCurvetoQuadraticSmoothRel.prototype.toString = function() {
        return "[object SVGPathSegCurvetoQuadraticSmoothRel]";
      };
      window.SVGPathSegCurvetoQuadraticSmoothRel.prototype._asPathString = function() {
        return this.pathSegTypeAsLetter + " " + this._x + " " + this._y;
      };
      window.SVGPathSegCurvetoQuadraticSmoothRel.prototype.clone = function() {
        return new window.SVGPathSegCurvetoQuadraticSmoothRel(void 0, this._x, this._y);
      };
      Object.defineProperty(window.SVGPathSegCurvetoQuadraticSmoothRel.prototype, "x", {
        get: function() {
          return this._x;
        },
        set: function(x) {
          this._x = x;
          this._segmentChanged();
        },
        enumerable: true
      });
      Object.defineProperty(window.SVGPathSegCurvetoQuadraticSmoothRel.prototype, "y", {
        get: function() {
          return this._y;
        },
        set: function(y) {
          this._y = y;
          this._segmentChanged();
        },
        enumerable: true
      });
      window.SVGPathElement.prototype.createSVGPathSegClosePath = function() {
        return new window.SVGPathSegClosePath(void 0);
      };
      window.SVGPathElement.prototype.createSVGPathSegMovetoAbs = function(x, y) {
        return new window.SVGPathSegMovetoAbs(void 0, x, y);
      };
      window.SVGPathElement.prototype.createSVGPathSegMovetoRel = function(x, y) {
        return new window.SVGPathSegMovetoRel(void 0, x, y);
      };
      window.SVGPathElement.prototype.createSVGPathSegLinetoAbs = function(x, y) {
        return new window.SVGPathSegLinetoAbs(void 0, x, y);
      };
      window.SVGPathElement.prototype.createSVGPathSegLinetoRel = function(x, y) {
        return new window.SVGPathSegLinetoRel(void 0, x, y);
      };
      window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicAbs = function(x, y, x1, y1, x2, y2) {
        return new window.SVGPathSegCurvetoCubicAbs(void 0, x, y, x1, y1, x2, y2);
      };
      window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicRel = function(x, y, x1, y1, x2, y2) {
        return new window.SVGPathSegCurvetoCubicRel(void 0, x, y, x1, y1, x2, y2);
      };
      window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticAbs = function(x, y, x1, y1) {
        return new window.SVGPathSegCurvetoQuadraticAbs(void 0, x, y, x1, y1);
      };
      window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticRel = function(x, y, x1, y1) {
        return new window.SVGPathSegCurvetoQuadraticRel(void 0, x, y, x1, y1);
      };
      window.SVGPathElement.prototype.createSVGPathSegArcAbs = function(x, y, r1, r2, angle, largeArcFlag, sweepFlag) {
        return new window.SVGPathSegArcAbs(void 0, x, y, r1, r2, angle, largeArcFlag, sweepFlag);
      };
      window.SVGPathElement.prototype.createSVGPathSegArcRel = function(x, y, r1, r2, angle, largeArcFlag, sweepFlag) {
        return new window.SVGPathSegArcRel(void 0, x, y, r1, r2, angle, largeArcFlag, sweepFlag);
      };
      window.SVGPathElement.prototype.createSVGPathSegLinetoHorizontalAbs = function(x) {
        return new window.SVGPathSegLinetoHorizontalAbs(void 0, x);
      };
      window.SVGPathElement.prototype.createSVGPathSegLinetoHorizontalRel = function(x) {
        return new window.SVGPathSegLinetoHorizontalRel(void 0, x);
      };
      window.SVGPathElement.prototype.createSVGPathSegLinetoVerticalAbs = function(y) {
        return new window.SVGPathSegLinetoVerticalAbs(void 0, y);
      };
      window.SVGPathElement.prototype.createSVGPathSegLinetoVerticalRel = function(y) {
        return new window.SVGPathSegLinetoVerticalRel(void 0, y);
      };
      window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicSmoothAbs = function(x, y, x2, y2) {
        return new window.SVGPathSegCurvetoCubicSmoothAbs(void 0, x, y, x2, y2);
      };
      window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicSmoothRel = function(x, y, x2, y2) {
        return new window.SVGPathSegCurvetoCubicSmoothRel(void 0, x, y, x2, y2);
      };
      window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticSmoothAbs = function(x, y) {
        return new window.SVGPathSegCurvetoQuadraticSmoothAbs(void 0, x, y);
      };
      window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticSmoothRel = function(x, y) {
        return new window.SVGPathSegCurvetoQuadraticSmoothRel(void 0, x, y);
      };
      if (!("getPathSegAtLength" in window.SVGPathElement.prototype)) {
        window.SVGPathElement.prototype.getPathSegAtLength = function(distance) {
          if (distance === void 0 || !isFinite(distance))
            throw "Invalid arguments.";
          const measurementElement = document.createElementNS("http://www.w3.org/2000/svg", "path");
          measurementElement.setAttribute("d", this.getAttribute("d"));
          let lastPathSegment = measurementElement.pathSegList.numberOfItems - 1;
          if (lastPathSegment <= 0)
            return 0;
          do {
            measurementElement.pathSegList.removeItem(lastPathSegment);
            if (distance > measurementElement.getTotalLength())
              break;
            lastPathSegment--;
          } while (lastPathSegment > 0);
          return lastPathSegment;
        };
      }
    }
    if (!("SVGPathSegList" in window) || !("appendItem" in window.SVGPathSegList.prototype)) {
      window.SVGPathSegList = function(pathElement) {
        this._pathElement = pathElement;
        this._list = this._parsePath(this._pathElement.getAttribute("d"));
        this._mutationObserverConfig = { attributes: true, attributeFilter: ["d"] };
        this._pathElementMutationObserver = new MutationObserver(this._updateListFromPathMutations.bind(this));
        this._pathElementMutationObserver.observe(this._pathElement, this._mutationObserverConfig);
      };
      window.SVGPathSegList.prototype.classname = "SVGPathSegList";
      Object.defineProperty(window.SVGPathSegList.prototype, "numberOfItems", {
        get: function() {
          this._checkPathSynchronizedToList();
          return this._list.length;
        },
        enumerable: true
      });
      Object.defineProperty(window.SVGPathSegList.prototype, "length", {
        get: function() {
          this._checkPathSynchronizedToList();
          return this._list.length;
        },
        enumerable: true
      });
      Object.defineProperty(window.SVGPathElement.prototype, "pathSegList", {
        get: function() {
          if (!this._pathSegList)
            this._pathSegList = new window.SVGPathSegList(this);
          return this._pathSegList;
        },
        enumerable: true
      });
      Object.defineProperty(window.SVGPathElement.prototype, "normalizedPathSegList", {
        get: function() {
          return this.pathSegList;
        },
        enumerable: true
      });
      Object.defineProperty(window.SVGPathElement.prototype, "animatedPathSegList", {
        get: function() {
          return this.pathSegList;
        },
        enumerable: true
      });
      Object.defineProperty(window.SVGPathElement.prototype, "animatedNormalizedPathSegList", {
        get: function() {
          return this.pathSegList;
        },
        enumerable: true
      });
      window.SVGPathSegList.prototype._checkPathSynchronizedToList = function() {
        this._updateListFromPathMutations(this._pathElementMutationObserver.takeRecords());
      };
      window.SVGPathSegList.prototype._updateListFromPathMutations = function(mutationRecords) {
        if (!this._pathElement)
          return;
        let hasPathMutations = false;
        mutationRecords.forEach(function(record) {
          if (record.attributeName == "d")
            hasPathMutations = true;
        });
        if (hasPathMutations)
          this._list = this._parsePath(this._pathElement.getAttribute("d"));
      };
      window.SVGPathSegList.prototype._writeListToPath = function() {
        this._pathElementMutationObserver.disconnect();
        this._pathElement.setAttribute("d", window.SVGPathSegList._pathSegArrayAsString(this._list));
        this._pathElementMutationObserver.observe(this._pathElement, this._mutationObserverConfig);
      };
      window.SVGPathSegList.prototype.segmentChanged = function(pathSeg) {
        this._writeListToPath();
      };
      window.SVGPathSegList.prototype.clear = function() {
        this._checkPathSynchronizedToList();
        this._list.forEach(function(pathSeg) {
          pathSeg._owningPathSegList = null;
        });
        this._list = [];
        this._writeListToPath();
      };
      window.SVGPathSegList.prototype.initialize = function(newItem) {
        this._checkPathSynchronizedToList();
        this._list = [newItem];
        newItem._owningPathSegList = this;
        this._writeListToPath();
        return newItem;
      };
      window.SVGPathSegList.prototype._checkValidIndex = function(index) {
        if (isNaN(index) || index < 0 || index >= this.numberOfItems)
          throw "INDEX_SIZE_ERR";
      };
      window.SVGPathSegList.prototype.getItem = function(index) {
        this._checkPathSynchronizedToList();
        this._checkValidIndex(index);
        return this._list[index];
      };
      window.SVGPathSegList.prototype.insertItemBefore = function(newItem, index) {
        this._checkPathSynchronizedToList();
        if (index > this.numberOfItems)
          index = this.numberOfItems;
        if (newItem._owningPathSegList) {
          newItem = newItem.clone();
        }
        this._list.splice(index, 0, newItem);
        newItem._owningPathSegList = this;
        this._writeListToPath();
        return newItem;
      };
      window.SVGPathSegList.prototype.replaceItem = function(newItem, index) {
        this._checkPathSynchronizedToList();
        if (newItem._owningPathSegList) {
          newItem = newItem.clone();
        }
        this._checkValidIndex(index);
        this._list[index] = newItem;
        newItem._owningPathSegList = this;
        this._writeListToPath();
        return newItem;
      };
      window.SVGPathSegList.prototype.removeItem = function(index) {
        this._checkPathSynchronizedToList();
        this._checkValidIndex(index);
        const item = this._list[index];
        this._list.splice(index, 1);
        this._writeListToPath();
        return item;
      };
      window.SVGPathSegList.prototype.appendItem = function(newItem) {
        this._checkPathSynchronizedToList();
        if (newItem._owningPathSegList) {
          newItem = newItem.clone();
        }
        this._list.push(newItem);
        newItem._owningPathSegList = this;
        this._writeListToPath();
        return newItem;
      };
      window.SVGPathSegList._pathSegArrayAsString = function(pathSegArray) {
        let string = "";
        let first = true;
        pathSegArray.forEach(function(pathSeg) {
          if (first) {
            first = false;
            string += pathSeg._asPathString();
          } else {
            string += " " + pathSeg._asPathString();
          }
        });
        return string;
      };
      window.SVGPathSegList.prototype._parsePath = function(string) {
        if (!string || string.length == 0)
          return [];
        const owningPathSegList = this;
        const Builder = function() {
          this.pathSegList = [];
        };
        Builder.prototype.appendSegment = function(pathSeg) {
          this.pathSegList.push(pathSeg);
        };
        const Source = function(string2) {
          this._string = string2;
          this._currentIndex = 0;
          this._endIndex = this._string.length;
          this._previousCommand = window.SVGPathSeg.PATHSEG_UNKNOWN;
          this._skipOptionalSpaces();
        };
        Source.prototype._isCurrentSpace = function() {
          const character = this._string[this._currentIndex];
          return character <= " " && (character == " " || character == "\n" || character == "	" || character == "\r" || character == "\f");
        };
        Source.prototype._skipOptionalSpaces = function() {
          while (this._currentIndex < this._endIndex && this._isCurrentSpace())
            this._currentIndex++;
          return this._currentIndex < this._endIndex;
        };
        Source.prototype._skipOptionalSpacesOrDelimiter = function() {
          if (this._currentIndex < this._endIndex && !this._isCurrentSpace() && this._string.charAt(this._currentIndex) != ",")
            return false;
          if (this._skipOptionalSpaces()) {
            if (this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) == ",") {
              this._currentIndex++;
              this._skipOptionalSpaces();
            }
          }
          return this._currentIndex < this._endIndex;
        };
        Source.prototype.hasMoreData = function() {
          return this._currentIndex < this._endIndex;
        };
        Source.prototype.peekSegmentType = function() {
          const lookahead = this._string[this._currentIndex];
          return this._pathSegTypeFromChar(lookahead);
        };
        Source.prototype._pathSegTypeFromChar = function(lookahead) {
          switch (lookahead) {
            case "Z":
            case "z":
              return window.SVGPathSeg.PATHSEG_CLOSEPATH;
            case "M":
              return window.SVGPathSeg.PATHSEG_MOVETO_ABS;
            case "m":
              return window.SVGPathSeg.PATHSEG_MOVETO_REL;
            case "L":
              return window.SVGPathSeg.PATHSEG_LINETO_ABS;
            case "l":
              return window.SVGPathSeg.PATHSEG_LINETO_REL;
            case "C":
              return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS;
            case "c":
              return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL;
            case "Q":
              return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS;
            case "q":
              return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL;
            case "A":
              return window.SVGPathSeg.PATHSEG_ARC_ABS;
            case "a":
              return window.SVGPathSeg.PATHSEG_ARC_REL;
            case "H":
              return window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS;
            case "h":
              return window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL;
            case "V":
              return window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS;
            case "v":
              return window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL;
            case "S":
              return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS;
            case "s":
              return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL;
            case "T":
              return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS;
            case "t":
              return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL;
            default:
              return window.SVGPathSeg.PATHSEG_UNKNOWN;
          }
        };
        Source.prototype._nextCommandHelper = function(lookahead, previousCommand) {
          if ((lookahead == "+" || lookahead == "-" || lookahead == "." || lookahead >= "0" && lookahead <= "9") && previousCommand != window.SVGPathSeg.PATHSEG_CLOSEPATH) {
            if (previousCommand == window.SVGPathSeg.PATHSEG_MOVETO_ABS)
              return window.SVGPathSeg.PATHSEG_LINETO_ABS;
            if (previousCommand == window.SVGPathSeg.PATHSEG_MOVETO_REL)
              return window.SVGPathSeg.PATHSEG_LINETO_REL;
            return previousCommand;
          }
          return window.SVGPathSeg.PATHSEG_UNKNOWN;
        };
        Source.prototype.initialCommandIsMoveTo = function() {
          if (!this.hasMoreData())
            return true;
          const command = this.peekSegmentType();
          return command == window.SVGPathSeg.PATHSEG_MOVETO_ABS || command == window.SVGPathSeg.PATHSEG_MOVETO_REL;
        };
        Source.prototype._parseNumber = function() {
          let exponent = 0;
          let integer = 0;
          let frac = 1;
          let decimal = 0;
          let sign = 1;
          let expsign = 1;
          const startIndex = this._currentIndex;
          this._skipOptionalSpaces();
          if (this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) == "+")
            this._currentIndex++;
          else if (this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) == "-") {
            this._currentIndex++;
            sign = -1;
          }
          if (this._currentIndex == this._endIndex || (this._string.charAt(this._currentIndex) < "0" || this._string.charAt(this._currentIndex) > "9") && this._string.charAt(this._currentIndex) != ".")
            return void 0;
          const startIntPartIndex = this._currentIndex;
          while (this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) >= "0" && this._string.charAt(this._currentIndex) <= "9")
            this._currentIndex++;
          if (this._currentIndex != startIntPartIndex) {
            let scanIntPartIndex = this._currentIndex - 1;
            let multiplier = 1;
            while (scanIntPartIndex >= startIntPartIndex) {
              integer += multiplier * (this._string.charAt(scanIntPartIndex--) - "0");
              multiplier *= 10;
            }
          }
          if (this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) == ".") {
            this._currentIndex++;
            if (this._currentIndex >= this._endIndex || this._string.charAt(this._currentIndex) < "0" || this._string.charAt(this._currentIndex) > "9")
              return void 0;
            while (this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) >= "0" && this._string.charAt(this._currentIndex) <= "9") {
              frac *= 10;
              decimal += (this._string.charAt(this._currentIndex) - "0") / frac;
              this._currentIndex += 1;
            }
          }
          if (this._currentIndex != startIndex && this._currentIndex + 1 < this._endIndex && (this._string.charAt(this._currentIndex) == "e" || this._string.charAt(this._currentIndex) == "E") && this._string.charAt(this._currentIndex + 1) != "x" && this._string.charAt(this._currentIndex + 1) != "m") {
            this._currentIndex++;
            if (this._string.charAt(this._currentIndex) == "+") {
              this._currentIndex++;
            } else if (this._string.charAt(this._currentIndex) == "-") {
              this._currentIndex++;
              expsign = -1;
            }
            if (this._currentIndex >= this._endIndex || this._string.charAt(this._currentIndex) < "0" || this._string.charAt(this._currentIndex) > "9")
              return void 0;
            while (this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) >= "0" && this._string.charAt(this._currentIndex) <= "9") {
              exponent *= 10;
              exponent += this._string.charAt(this._currentIndex) - "0";
              this._currentIndex++;
            }
          }
          let number = integer + decimal;
          number *= sign;
          if (exponent)
            number *= Math.pow(10, expsign * exponent);
          if (startIndex == this._currentIndex)
            return void 0;
          this._skipOptionalSpacesOrDelimiter();
          return number;
        };
        Source.prototype._parseArcFlag = function() {
          if (this._currentIndex >= this._endIndex)
            return void 0;
          let flag = false;
          const flagChar = this._string.charAt(this._currentIndex++);
          if (flagChar == "0")
            flag = false;
          else if (flagChar == "1")
            flag = true;
          else
            return void 0;
          this._skipOptionalSpacesOrDelimiter();
          return flag;
        };
        Source.prototype.parseSegment = function() {
          const lookahead = this._string[this._currentIndex];
          let command = this._pathSegTypeFromChar(lookahead);
          if (command == window.SVGPathSeg.PATHSEG_UNKNOWN) {
            if (this._previousCommand == window.SVGPathSeg.PATHSEG_UNKNOWN)
              return null;
            command = this._nextCommandHelper(lookahead, this._previousCommand);
            if (command == window.SVGPathSeg.PATHSEG_UNKNOWN)
              return null;
          } else {
            this._currentIndex++;
          }
          this._previousCommand = command;
          let points;
          switch (command) {
            case window.SVGPathSeg.PATHSEG_MOVETO_REL:
              return new window.SVGPathSegMovetoRel(owningPathSegList, this._parseNumber(), this._parseNumber());
            case window.SVGPathSeg.PATHSEG_MOVETO_ABS:
              return new window.SVGPathSegMovetoAbs(owningPathSegList, this._parseNumber(), this._parseNumber());
            case window.SVGPathSeg.PATHSEG_LINETO_REL:
              return new window.SVGPathSegLinetoRel(owningPathSegList, this._parseNumber(), this._parseNumber());
            case window.SVGPathSeg.PATHSEG_LINETO_ABS:
              return new window.SVGPathSegLinetoAbs(owningPathSegList, this._parseNumber(), this._parseNumber());
            case window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL:
              return new window.SVGPathSegLinetoHorizontalRel(owningPathSegList, this._parseNumber());
            case window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS:
              return new window.SVGPathSegLinetoHorizontalAbs(owningPathSegList, this._parseNumber());
            case window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL:
              return new window.SVGPathSegLinetoVerticalRel(owningPathSegList, this._parseNumber());
            case window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS:
              return new window.SVGPathSegLinetoVerticalAbs(owningPathSegList, this._parseNumber());
            case window.SVGPathSeg.PATHSEG_CLOSEPATH:
              this._skipOptionalSpaces();
              return new window.SVGPathSegClosePath(owningPathSegList);
            case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL:
              points = {
                x1: this._parseNumber(),
                y1: this._parseNumber(),
                x2: this._parseNumber(),
                y2: this._parseNumber(),
                x: this._parseNumber(),
                y: this._parseNumber()
              };
              return new window.SVGPathSegCurvetoCubicRel(owningPathSegList, points.x, points.y, points.x1, points.y1, points.x2, points.y2);
            case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS:
              points = {
                x1: this._parseNumber(),
                y1: this._parseNumber(),
                x2: this._parseNumber(),
                y2: this._parseNumber(),
                x: this._parseNumber(),
                y: this._parseNumber()
              };
              return new window.SVGPathSegCurvetoCubicAbs(owningPathSegList, points.x, points.y, points.x1, points.y1, points.x2, points.y2);
            case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL:
              points = {
                x2: this._parseNumber(),
                y2: this._parseNumber(),
                x: this._parseNumber(),
                y: this._parseNumber()
              };
              return new window.SVGPathSegCurvetoCubicSmoothRel(owningPathSegList, points.x, points.y, points.x2, points.y2);
            case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS:
              points = {
                x2: this._parseNumber(),
                y2: this._parseNumber(),
                x: this._parseNumber(),
                y: this._parseNumber()
              };
              return new window.SVGPathSegCurvetoCubicSmoothAbs(owningPathSegList, points.x, points.y, points.x2, points.y2);
            case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL:
              points = {
                x1: this._parseNumber(),
                y1: this._parseNumber(),
                x: this._parseNumber(),
                y: this._parseNumber()
              };
              return new window.SVGPathSegCurvetoQuadraticRel(owningPathSegList, points.x, points.y, points.x1, points.y1);
            case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS:
              points = {
                x1: this._parseNumber(),
                y1: this._parseNumber(),
                x: this._parseNumber(),
                y: this._parseNumber()
              };
              return new window.SVGPathSegCurvetoQuadraticAbs(owningPathSegList, points.x, points.y, points.x1, points.y1);
            case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL:
              return new window.SVGPathSegCurvetoQuadraticSmoothRel(owningPathSegList, this._parseNumber(), this._parseNumber());
            case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS:
              return new window.SVGPathSegCurvetoQuadraticSmoothAbs(owningPathSegList, this._parseNumber(), this._parseNumber());
            case window.SVGPathSeg.PATHSEG_ARC_REL:
              points = {
                x1: this._parseNumber(),
                y1: this._parseNumber(),
                arcAngle: this._parseNumber(),
                arcLarge: this._parseArcFlag(),
                arcSweep: this._parseArcFlag(),
                x: this._parseNumber(),
                y: this._parseNumber()
              };
              return new window.SVGPathSegArcRel(owningPathSegList, points.x, points.y, points.x1, points.y1, points.arcAngle, points.arcLarge, points.arcSweep);
            case window.SVGPathSeg.PATHSEG_ARC_ABS:
              points = {
                x1: this._parseNumber(),
                y1: this._parseNumber(),
                arcAngle: this._parseNumber(),
                arcLarge: this._parseArcFlag(),
                arcSweep: this._parseArcFlag(),
                x: this._parseNumber(),
                y: this._parseNumber()
              };
              return new window.SVGPathSegArcAbs(owningPathSegList, points.x, points.y, points.x1, points.y1, points.arcAngle, points.arcLarge, points.arcSweep);
            default:
              throw "Unknown path seg type.";
          }
        };
        const builder = new Builder();
        const source = new Source(string);
        if (!source.initialCommandIsMoveTo())
          return [];
        while (source.hasMoreData()) {
          const pathSeg = source.parseSegment();
          if (!pathSeg)
            return [];
          builder.appendSegment(pathSeg);
        }
        return builder.pathSegList;
      };
    }
  } catch (e) {
    console.warn("An error occurred in tsParticles pathseg polyfill. If the Polygon Mask is not working, please open an issue here: https://github.com/matteobruni/tsparticles", e);
  }
})();

// node_modules/tsparticles-plugin-polygon-mask/esm/Options/Classes/PolygonMaskDrawStroke.js
var PolygonMaskDrawStroke = class {
  constructor() {
    this.color = new OptionsColor();
    this.width = 0.5;
    this.opacity = 1;
  }
  load(data) {
    var _a;
    if (!data) {
      return;
    }
    this.color = OptionsColor.create(this.color, data.color);
    if (typeof this.color.value === "string") {
      this.opacity = (_a = stringToAlpha(this.color.value)) !== null && _a !== void 0 ? _a : this.opacity;
    }
    if (data.opacity !== void 0) {
      this.opacity = data.opacity;
    }
    if (data.width !== void 0) {
      this.width = data.width;
    }
  }
};

// node_modules/tsparticles-plugin-polygon-mask/esm/Options/Classes/PolygonMaskDraw.js
var PolygonMaskDraw = class {
  constructor() {
    this.enable = false;
    this.stroke = new PolygonMaskDrawStroke();
  }
  get lineWidth() {
    return this.stroke.width;
  }
  set lineWidth(value) {
    this.stroke.width = value;
  }
  get lineColor() {
    return this.stroke.color;
  }
  set lineColor(value) {
    this.stroke.color = OptionsColor.create(this.stroke.color, value);
  }
  load(data) {
    var _a;
    if (!data) {
      return;
    }
    if (data.enable !== void 0) {
      this.enable = data.enable;
    }
    const stroke = (_a = data.stroke) !== null && _a !== void 0 ? _a : {
      color: data.lineColor,
      width: data.lineWidth
    };
    this.stroke.load(stroke);
  }
};

// node_modules/tsparticles-plugin-polygon-mask/esm/Options/Classes/PolygonMaskInline.js
var PolygonMaskInline = class {
  constructor() {
    this.arrangement = "one-per-point";
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.arrangement !== void 0) {
      this.arrangement = data.arrangement;
    }
  }
};

// node_modules/tsparticles-plugin-polygon-mask/esm/Options/Classes/PolygonMaskLocalSvg.js
var PolygonMaskLocalSvg = class {
  constructor() {
    this.path = [];
    this.size = {
      height: 0,
      width: 0
    };
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.path !== void 0) {
      this.path = data.path;
    }
    if (data.size !== void 0) {
      if (data.size.width !== void 0) {
        this.size.width = data.size.width;
      }
      if (data.size.height !== void 0) {
        this.size.height = data.size.height;
      }
    }
  }
};

// node_modules/tsparticles-plugin-polygon-mask/esm/Options/Classes/PolygonMaskMove.js
var PolygonMaskMove = class {
  constructor() {
    this.radius = 10;
    this.type = "path";
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.radius !== void 0) {
      this.radius = data.radius;
    }
    if (data.type !== void 0) {
      this.type = data.type;
    }
  }
};

// node_modules/tsparticles-plugin-polygon-mask/esm/Options/Classes/PolygonMask.js
var PolygonMask = class {
  constructor() {
    this.draw = new PolygonMaskDraw();
    this.enable = false;
    this.inline = new PolygonMaskInline();
    this.move = new PolygonMaskMove();
    this.scale = 1;
    this.type = "none";
  }
  get inlineArrangement() {
    return this.inline.arrangement;
  }
  set inlineArrangement(value) {
    this.inline.arrangement = value;
  }
  load(data) {
    if (!data) {
      return;
    }
    this.draw.load(data.draw);
    this.inline.load(data.inline);
    this.move.load(data.move);
    if (data.scale !== void 0) {
      this.scale = data.scale;
    }
    if (data.type !== void 0) {
      this.type = data.type;
    }
    if (data.enable !== void 0) {
      this.enable = data.enable;
    } else {
      this.enable = this.type !== "none";
    }
    if (data.url !== void 0) {
      this.url = data.url;
    }
    if (data.data !== void 0) {
      if (typeof data.data === "string") {
        this.data = data.data;
      } else {
        this.data = new PolygonMaskLocalSvg();
        this.data.load(data.data);
      }
    }
    if (data.position !== void 0) {
      this.position = deepExtend({}, data.position);
    }
  }
};

// node_modules/tsparticles-plugin-polygon-mask/esm/utils.js
function drawPolygonMask(context, rawData, stroke) {
  const color = rangeColorToRgb(stroke.color);
  if (!color) {
    return;
  }
  context.beginPath();
  context.moveTo(rawData[0].x, rawData[0].y);
  for (const item of rawData) {
    context.lineTo(item.x, item.y);
  }
  context.closePath();
  context.strokeStyle = getStyleFromRgb(color);
  context.lineWidth = stroke.width;
  context.stroke();
}
function drawPolygonMaskPath(context, path, stroke, position) {
  context.translate(position.x, position.y);
  const color = rangeColorToRgb(stroke.color);
  if (!color) {
    return;
  }
  context.strokeStyle = getStyleFromRgb(color, stroke.opacity);
  context.lineWidth = stroke.width;
  context.stroke(path);
}
function parsePaths(paths, scale, offset) {
  var _a;
  const res = [];
  for (const path of paths) {
    const segments = path.element.pathSegList, len = (_a = segments === null || segments === void 0 ? void 0 : segments.numberOfItems) !== null && _a !== void 0 ? _a : 0, p = {
      x: 0,
      y: 0
    };
    for (let i = 0; i < len; i++) {
      const segment = segments === null || segments === void 0 ? void 0 : segments.getItem(i);
      const svgPathSeg = window.SVGPathSeg;
      switch (segment === null || segment === void 0 ? void 0 : segment.pathSegType) {
        case svgPathSeg.PATHSEG_MOVETO_ABS:
        case svgPathSeg.PATHSEG_LINETO_ABS:
        case svgPathSeg.PATHSEG_CURVETO_CUBIC_ABS:
        case svgPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS:
        case svgPathSeg.PATHSEG_ARC_ABS:
        case svgPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS:
        case svgPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS: {
          const absSeg = segment;
          p.x = absSeg.x;
          p.y = absSeg.y;
          break;
        }
        case svgPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS:
          p.x = segment.x;
          break;
        case svgPathSeg.PATHSEG_LINETO_VERTICAL_ABS:
          p.y = segment.y;
          break;
        case svgPathSeg.PATHSEG_LINETO_REL:
        case svgPathSeg.PATHSEG_MOVETO_REL:
        case svgPathSeg.PATHSEG_CURVETO_CUBIC_REL:
        case svgPathSeg.PATHSEG_CURVETO_QUADRATIC_REL:
        case svgPathSeg.PATHSEG_ARC_REL:
        case svgPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL:
        case svgPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL: {
          const relSeg = segment;
          p.x += relSeg.x;
          p.y += relSeg.y;
          break;
        }
        case svgPathSeg.PATHSEG_LINETO_HORIZONTAL_REL:
          p.x += segment.x;
          break;
        case svgPathSeg.PATHSEG_LINETO_VERTICAL_REL:
          p.y += segment.y;
          break;
        case svgPathSeg.PATHSEG_UNKNOWN:
        case svgPathSeg.PATHSEG_CLOSEPATH:
          continue;
      }
      res.push({
        x: p.x * scale + offset.x,
        y: p.y * scale + offset.y
      });
    }
  }
  return res;
}
function calcClosestPtOnSegment(s1, s2, pos) {
  const { dx, dy } = getDistances(pos, s1), { dx: dxx, dy: dyy } = getDistances(s2, s1), t = (dx * dxx + dy * dyy) / (dxx ** 2 + dyy ** 2), res = {
    x: s1.x + dxx * t,
    y: s1.x + dyy * t,
    isOnSegment: t >= 0 && t <= 1
  };
  if (t < 0) {
    res.x = s1.x;
    res.y = s1.y;
  } else if (t > 1) {
    res.x = s2.x;
    res.y = s2.y;
  }
  return res;
}
function segmentBounce(start, stop, velocity) {
  const { dx, dy } = getDistances(start, stop), wallAngle = Math.atan2(dy, dx), wallNormal = Vector.create(Math.sin(wallAngle), -Math.cos(wallAngle)), d = 2 * (velocity.x * wallNormal.x + velocity.y * wallNormal.y);
  wallNormal.multTo(d);
  velocity.subFrom(wallNormal);
}

// node_modules/tsparticles-plugin-polygon-mask/esm/PolygonMaskInstance.js
var __classPrivateFieldSet16 = function(receiver, state, value, kind, f) {
  if (kind === "m")
    throw new TypeError("Private method is not writable");
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet14 = function(receiver, state, kind, f) {
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _PolygonMaskInstance_engine;
var PolygonMaskInstance = class {
  constructor(container, engine) {
    this.container = container;
    _PolygonMaskInstance_engine.set(this, void 0);
    __classPrivateFieldSet16(this, _PolygonMaskInstance_engine, engine, "f");
    this.dimension = {
      height: 0,
      width: 0
    };
    this.path2DSupported = !!window.Path2D;
    this.options = new PolygonMask();
    this.polygonMaskMoveRadius = this.options.move.radius * container.retina.pixelRatio;
  }
  async initAsync(options) {
    this.options.load(options === null || options === void 0 ? void 0 : options.polygon);
    const polygonMaskOptions = this.options;
    this.polygonMaskMoveRadius = polygonMaskOptions.move.radius * this.container.retina.pixelRatio;
    if (polygonMaskOptions.enable) {
      await this.initRawData();
    }
  }
  resize() {
    const container = this.container, options = this.options;
    if (!(options.enable && options.type !== "none")) {
      return;
    }
    if (this.redrawTimeout) {
      clearTimeout(this.redrawTimeout);
    }
    this.redrawTimeout = window.setTimeout(async () => {
      await this.initRawData(true);
      await container.particles.redraw();
    }, 250);
  }
  stop() {
    delete this.raw;
    delete this.paths;
  }
  particlesInitialization() {
    const options = this.options;
    if (options.enable && options.type === "inline" && (options.inline.arrangement === "one-per-point" || options.inline.arrangement === "per-point")) {
      this.drawPoints();
      return true;
    }
    return false;
  }
  particlePosition(position) {
    var _a, _b;
    const options = this.options;
    if (!(options.enable && ((_b = (_a = this.raw) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0) > 0)) {
      return;
    }
    return deepExtend({}, position ? position : this.randomPoint());
  }
  particleBounce(particle, delta, direction) {
    return this.polygonBounce(particle, delta, direction);
  }
  clickPositionValid(position) {
    const options = this.options;
    return options.enable && options.type !== "none" && options.type !== "inline" && this.checkInsidePolygon(position);
  }
  draw(context) {
    var _a;
    if (!((_a = this.paths) === null || _a === void 0 ? void 0 : _a.length)) {
      return;
    }
    const options = this.options, polygonDraw = options.draw;
    if (!options.enable || !polygonDraw.enable) {
      return;
    }
    const rawData = this.raw;
    for (const path of this.paths) {
      const path2d = path.path2d, path2dSupported = this.path2DSupported;
      if (!context) {
        continue;
      }
      if (path2dSupported && path2d && this.offset) {
        drawPolygonMaskPath(context, path2d, polygonDraw.stroke, this.offset);
      } else if (rawData) {
        drawPolygonMask(context, rawData, polygonDraw.stroke);
      }
    }
  }
  polygonBounce(particle, _delta, direction) {
    const options = this.options;
    if (!this.raw || !options.enable || direction !== "top") {
      return false;
    }
    if (options.type === "inside" || options.type === "outside") {
      let closest, dx, dy;
      const pos = particle.getPosition(), radius = particle.getRadius();
      for (let i = 0, j = this.raw.length - 1; i < this.raw.length; j = i++) {
        const pi = this.raw[i], pj = this.raw[j];
        closest = calcClosestPtOnSegment(pi, pj, pos);
        const dist = getDistances(pos, closest);
        [dx, dy] = [dist.dx, dist.dy];
        if (dist.distance < radius) {
          segmentBounce(pi, pj, particle.velocity);
          return true;
        }
      }
      if (closest && dx !== void 0 && dy !== void 0 && !this.checkInsidePolygon(pos)) {
        const factor = { x: 1, y: 1 };
        if (particle.position.x >= closest.x) {
          factor.x = -1;
        }
        if (particle.position.y >= closest.y) {
          factor.y = -1;
        }
        particle.position.x = closest.x + radius * 2 * factor.x;
        particle.position.y = closest.y + radius * 2 * factor.y;
        particle.velocity.mult(-1);
        return true;
      }
    } else if (options.type === "inline" && particle.initialPosition) {
      const dist = getDistance(particle.initialPosition, particle.getPosition());
      if (dist > this.polygonMaskMoveRadius) {
        particle.velocity.x = particle.velocity.y / 2 - particle.velocity.x;
        particle.velocity.y = particle.velocity.x / 2 - particle.velocity.y;
        return true;
      }
    }
    return false;
  }
  checkInsidePolygon(position) {
    var _a, _b;
    const container = this.container, options = this.options;
    if (!options.enable || options.type === "none" || options.type === "inline") {
      return true;
    }
    if (!this.raw) {
      throw new Error(noPolygonFound);
    }
    const canvasSize = container.canvas.size, x = (_a = position === null || position === void 0 ? void 0 : position.x) !== null && _a !== void 0 ? _a : Math.random() * canvasSize.width, y = (_b = position === null || position === void 0 ? void 0 : position.y) !== null && _b !== void 0 ? _b : Math.random() * canvasSize.height;
    let inside = false;
    for (let i = 0, j = this.raw.length - 1; i < this.raw.length; j = i++) {
      const pi = this.raw[i], pj = this.raw[j], intersect = pi.y > y !== pj.y > y && x < (pj.x - pi.x) * (y - pi.y) / (pj.y - pi.y) + pi.x;
      if (intersect) {
        inside = !inside;
      }
    }
    return options.type === "inside" ? inside : options.type === "outside" ? !inside : false;
  }
  parseSvgPath(xml, force) {
    var _a, _b, _c;
    const forceDownload = force !== null && force !== void 0 ? force : false;
    if (this.paths !== void 0 && !forceDownload) {
      return this.raw;
    }
    const container = this.container, options = this.options, parser = new DOMParser(), doc = parser.parseFromString(xml, "image/svg+xml"), svg = doc.getElementsByTagName("svg")[0];
    let svgPaths = svg.getElementsByTagName("path");
    if (!svgPaths.length) {
      svgPaths = doc.getElementsByTagName("path");
    }
    this.paths = [];
    for (let i = 0; i < svgPaths.length; i++) {
      const path = svgPaths.item(i);
      if (path) {
        this.paths.push({
          element: path,
          length: path.getTotalLength()
        });
      }
    }
    const pxRatio = container.retina.pixelRatio, scale = options.scale / pxRatio;
    this.dimension.width = parseFloat((_a = svg.getAttribute("width")) !== null && _a !== void 0 ? _a : "0") * scale;
    this.dimension.height = parseFloat((_b = svg.getAttribute("height")) !== null && _b !== void 0 ? _b : "0") * scale;
    const position = (_c = options.position) !== null && _c !== void 0 ? _c : {
      x: 50,
      y: 50
    };
    this.offset = {
      x: container.canvas.size.width * position.x / (100 * pxRatio) - this.dimension.width / 2,
      y: container.canvas.size.height * position.y / (100 * pxRatio) - this.dimension.height / 2
    };
    return parsePaths(this.paths, scale, this.offset);
  }
  async downloadSvgPath(svgUrl, force) {
    const options = this.options, url = svgUrl || options.url, forceDownload = force !== null && force !== void 0 ? force : false;
    if (!url || this.paths !== void 0 && !forceDownload) {
      return this.raw;
    }
    const req = await fetch(url);
    if (!req.ok) {
      throw new Error("tsParticles Error - Error occurred during polygon mask download");
    }
    return this.parseSvgPath(await req.text(), force);
  }
  drawPoints() {
    if (!this.raw) {
      return;
    }
    for (const item of this.raw) {
      this.container.particles.addParticle({
        x: item.x,
        y: item.y
      });
    }
  }
  randomPoint() {
    const container = this.container, options = this.options;
    let position;
    if (options.type === "inline") {
      switch (options.inline.arrangement) {
        case "random-point":
          position = this.getRandomPoint();
          break;
        case "random-length":
          position = this.getRandomPointByLength();
          break;
        case "equidistant":
          position = this.getEquidistantPointByIndex(container.particles.count);
          break;
        case "one-per-point":
        case "per-point":
        default:
          position = this.getPointByIndex(container.particles.count);
      }
    } else {
      position = {
        x: Math.random() * container.canvas.size.width,
        y: Math.random() * container.canvas.size.height
      };
    }
    if (this.checkInsidePolygon(position)) {
      return position;
    } else {
      return this.randomPoint();
    }
  }
  getRandomPoint() {
    if (!this.raw || !this.raw.length) {
      throw new Error(noPolygonDataLoaded);
    }
    const coords = itemFromArray(this.raw);
    return {
      x: coords.x,
      y: coords.y
    };
  }
  getRandomPointByLength() {
    var _a, _b, _c;
    const options = this.options;
    if (!this.raw || !this.raw.length || !((_a = this.paths) === null || _a === void 0 ? void 0 : _a.length)) {
      throw new Error(noPolygonDataLoaded);
    }
    const path = itemFromArray(this.paths), distance = Math.floor(Math.random() * path.length) + 1, point = path.element.getPointAtLength(distance);
    return {
      x: point.x * options.scale + (((_b = this.offset) === null || _b === void 0 ? void 0 : _b.x) || 0),
      y: point.y * options.scale + (((_c = this.offset) === null || _c === void 0 ? void 0 : _c.y) || 0)
    };
  }
  getEquidistantPointByIndex(index) {
    var _a, _b, _c, _d, _e, _f, _g;
    const options = this.container.actualOptions, polygonMaskOptions = this.options;
    if (!this.raw || !this.raw.length || !((_a = this.paths) === null || _a === void 0 ? void 0 : _a.length))
      throw new Error(noPolygonDataLoaded);
    let offset = 0, point;
    const totalLength = this.paths.reduce((tot, path) => tot + path.length, 0), distance = totalLength / options.particles.number.value;
    for (const path of this.paths) {
      const pathDistance = distance * index - offset;
      if (pathDistance <= path.length) {
        point = path.element.getPointAtLength(pathDistance);
        break;
      } else {
        offset += path.length;
      }
    }
    return {
      x: ((_b = point === null || point === void 0 ? void 0 : point.x) !== null && _b !== void 0 ? _b : 0) * polygonMaskOptions.scale + ((_d = (_c = this.offset) === null || _c === void 0 ? void 0 : _c.x) !== null && _d !== void 0 ? _d : 0),
      y: ((_e = point === null || point === void 0 ? void 0 : point.y) !== null && _e !== void 0 ? _e : 0) * polygonMaskOptions.scale + ((_g = (_f = this.offset) === null || _f === void 0 ? void 0 : _f.y) !== null && _g !== void 0 ? _g : 0)
    };
  }
  getPointByIndex(index) {
    if (!this.raw || !this.raw.length) {
      throw new Error(noPolygonDataLoaded);
    }
    const coords = this.raw[index % this.raw.length];
    return {
      x: coords.x,
      y: coords.y
    };
  }
  createPath2D() {
    var _a, _b;
    const options = this.options;
    if (!this.path2DSupported || !((_a = this.paths) === null || _a === void 0 ? void 0 : _a.length)) {
      return;
    }
    for (const path of this.paths) {
      const pathData = (_b = path.element) === null || _b === void 0 ? void 0 : _b.getAttribute("d");
      if (pathData) {
        const path2d = new Path2D(pathData), matrix = document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGMatrix(), finalPath = new Path2D(), transform = matrix.scale(options.scale);
        if (finalPath.addPath) {
          finalPath.addPath(path2d, transform);
          path.path2d = finalPath;
        } else {
          delete path.path2d;
        }
      } else {
        delete path.path2d;
      }
      if (path.path2d || !this.raw) {
        continue;
      }
      path.path2d = new Path2D();
      path.path2d.moveTo(this.raw[0].x, this.raw[0].y);
      this.raw.forEach((pos, i) => {
        var _a2;
        if (i > 0) {
          (_a2 = path.path2d) === null || _a2 === void 0 ? void 0 : _a2.lineTo(pos.x, pos.y);
        }
      });
      path.path2d.closePath();
    }
  }
  async initRawData(force) {
    const options = this.options;
    if (options.url) {
      this.raw = await this.downloadSvgPath(options.url, force);
    } else if (options.data) {
      const data = options.data;
      let svg;
      if (typeof data !== "string") {
        const path = data.path instanceof Array ? data.path.map((t) => `<path d="${t}" />`).join("") : `<path d="${data.path}" />`;
        const namespaces = 'xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"';
        svg = `<svg ${namespaces} width="${data.size.width}" height="${data.size.height}">${path}</svg>`;
      } else {
        svg = data;
      }
      this.raw = this.parseSvgPath(svg, force);
    }
    this.createPath2D();
    __classPrivateFieldGet14(this, _PolygonMaskInstance_engine, "f").dispatchEvent("polygonMaskLoaded", {
      container: this.container
    });
  }
};
_PolygonMaskInstance_engine = /* @__PURE__ */ new WeakMap();

// node_modules/tsparticles-plugin-polygon-mask/esm/index.js
var __classPrivateFieldSet17 = function(receiver, state, value, kind, f) {
  if (kind === "m")
    throw new TypeError("Private method is not writable");
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet15 = function(receiver, state, kind, f) {
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _PolygonMaskPlugin_engine;
var PolygonMaskPlugin = class {
  constructor(engine) {
    _PolygonMaskPlugin_engine.set(this, void 0);
    this.id = "polygonMask";
    __classPrivateFieldSet17(this, _PolygonMaskPlugin_engine, engine, "f");
  }
  getPlugin(container) {
    return new PolygonMaskInstance(container, __classPrivateFieldGet15(this, _PolygonMaskPlugin_engine, "f"));
  }
  needsPlugin(options) {
    var _a, _b, _c;
    return (_b = (_a = options === null || options === void 0 ? void 0 : options.polygon) === null || _a === void 0 ? void 0 : _a.enable) !== null && _b !== void 0 ? _b : ((_c = options === null || options === void 0 ? void 0 : options.polygon) === null || _c === void 0 ? void 0 : _c.type) !== void 0 && options.polygon.type !== "none";
  }
  loadOptions(options, source) {
    if (!this.needsPlugin(source)) {
      return;
    }
    const optionsCast = options;
    let polygonOptions = optionsCast.polygon;
    if ((polygonOptions === null || polygonOptions === void 0 ? void 0 : polygonOptions.load) === void 0) {
      optionsCast.polygon = polygonOptions = new PolygonMask();
    }
    polygonOptions.load(source === null || source === void 0 ? void 0 : source.polygon);
  }
};
_PolygonMaskPlugin_engine = /* @__PURE__ */ new WeakMap();
async function loadPolygonMaskPlugin(engine) {
  const plugin = new PolygonMaskPlugin(engine);
  await engine.addPlugin(plugin);
}

// node_modules/tsparticles-updater-roll/esm/Options/Classes/RollLight.js
var RollLight = class {
  constructor() {
    this.enable = false;
    this.value = 0;
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.enable !== void 0) {
      this.enable = data.enable;
    }
    if (data.value !== void 0) {
      this.value = setRangeValue(data.value);
    }
  }
};

// node_modules/tsparticles-updater-roll/esm/Options/Classes/Roll.js
var Roll = class {
  constructor() {
    this.darken = new RollLight();
    this.enable = false;
    this.enlighten = new RollLight();
    this.mode = "vertical";
    this.speed = 25;
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.backColor !== void 0) {
      this.backColor = OptionsColor.create(this.backColor, data.backColor);
    }
    this.darken.load(data.darken);
    if (data.enable !== void 0) {
      this.enable = data.enable;
    }
    this.enlighten.load(data.enlighten);
    if (data.mode !== void 0) {
      this.mode = data.mode;
    }
    if (data.speed !== void 0) {
      this.speed = setRangeValue(data.speed);
    }
  }
};

// node_modules/tsparticles-updater-roll/esm/RollUpdater.js
function updateRoll(particle, delta) {
  const roll = particle.options.roll;
  if (!particle.roll || !(roll === null || roll === void 0 ? void 0 : roll.enable)) {
    return;
  }
  const speed = particle.roll.speed * delta.factor, max = 2 * Math.PI;
  particle.roll.angle += speed;
  if (particle.roll.angle > max) {
    particle.roll.angle -= max;
  }
}
var RollUpdater = class {
  init(particle) {
    const rollOpt = particle.options.roll;
    if (rollOpt === null || rollOpt === void 0 ? void 0 : rollOpt.enable) {
      particle.roll = {
        enable: rollOpt.enable,
        horizontal: rollOpt.mode === "horizontal" || rollOpt.mode === "both",
        vertical: rollOpt.mode === "vertical" || rollOpt.mode === "both",
        angle: Math.random() * Math.PI * 2,
        speed: getRangeValue(rollOpt.speed) / 360
      };
      if (rollOpt.backColor) {
        particle.backColor = rangeColorToHsl(rollOpt.backColor);
      } else if (rollOpt.darken.enable && rollOpt.enlighten.enable) {
        const alterType = Math.random() >= 0.5 ? "darken" : "enlighten";
        particle.roll.alter = {
          type: alterType,
          value: getRangeValue(alterType === "darken" ? rollOpt.darken.value : rollOpt.enlighten.value)
        };
      } else if (rollOpt.darken.enable) {
        particle.roll.alter = {
          type: "darken",
          value: getRangeValue(rollOpt.darken.value)
        };
      } else if (rollOpt.enlighten.enable) {
        particle.roll.alter = {
          type: "enlighten",
          value: getRangeValue(rollOpt.enlighten.value)
        };
      }
    } else {
      particle.roll = {
        enable: false,
        horizontal: false,
        vertical: false,
        angle: 0,
        speed: 0
      };
    }
  }
  isEnabled(particle) {
    const roll = particle.options.roll;
    return !particle.destroyed && !particle.spawning && !!(roll === null || roll === void 0 ? void 0 : roll.enable);
  }
  update(particle, delta) {
    if (!this.isEnabled(particle)) {
      return;
    }
    updateRoll(particle, delta);
  }
  loadOptions(options, ...sources) {
    for (const source of sources) {
      if (!(source === null || source === void 0 ? void 0 : source.roll)) {
        continue;
      }
      if (!options.roll) {
        options.roll = new Roll();
      }
      options.roll.load(source.roll);
    }
  }
};

// node_modules/tsparticles-updater-roll/esm/index.js
async function loadRollUpdater(engine) {
  await engine.addParticleUpdater("roll", () => new RollUpdater());
}

// node_modules/tsparticles-particles.js/esm/index.js
var initPjs = (engine) => {
  const particlesJS = (tagId, options) => {
    return engine.load(tagId, options);
  };
  particlesJS.load = (tagId, pathConfigJson, callback) => {
    engine.loadJSON(tagId, pathConfigJson).then((container) => {
      if (container) {
        callback(container);
      }
    }).catch(() => {
      callback(void 0);
    });
  };
  particlesJS.setOnClickHandler = (callback) => {
    engine.setOnClickHandler(callback);
  };
  const pJSDom = engine.dom();
  return { particlesJS, pJSDom };
};

// node_modules/tsparticles-updater-angle/esm/AngleUpdater.js
function updateAngle(particle, delta) {
  var _a, _b;
  const rotate = particle.rotate;
  if (!rotate) {
    return;
  }
  const rotateOptions = particle.options.rotate, rotateAnimation = rotateOptions.animation, speed = ((_a = rotate.velocity) !== null && _a !== void 0 ? _a : 0) * delta.factor, max = 2 * Math.PI, decay = (_b = rotate.decay) !== null && _b !== void 0 ? _b : 1;
  if (!rotateAnimation.enable) {
    return;
  }
  switch (rotate.status) {
    case 0:
      rotate.value += speed;
      if (rotate.value > max) {
        rotate.value -= max;
      }
      break;
    case 1:
    default:
      rotate.value -= speed;
      if (rotate.value < 0) {
        rotate.value += max;
      }
      break;
  }
  if (rotate.velocity && decay !== 1) {
    rotate.velocity *= decay;
  }
}
var AngleUpdater = class {
  constructor(container) {
    this.container = container;
  }
  init(particle) {
    const rotateOptions = particle.options.rotate;
    particle.rotate = {
      enable: rotateOptions.animation.enable,
      value: getRangeValue(rotateOptions.value) * Math.PI / 180
    };
    let rotateDirection = rotateOptions.direction;
    if (rotateDirection === "random") {
      const index = Math.floor(Math.random() * 2);
      rotateDirection = index > 0 ? "counter-clockwise" : "clockwise";
    }
    switch (rotateDirection) {
      case "counter-clockwise":
      case "counterClockwise":
        particle.rotate.status = 1;
        break;
      case "clockwise":
        particle.rotate.status = 0;
        break;
    }
    const rotateAnimation = particle.options.rotate.animation;
    if (rotateAnimation.enable) {
      particle.rotate.decay = 1 - getRangeValue(rotateAnimation.decay);
      particle.rotate.velocity = getRangeValue(rotateAnimation.speed) / 360 * this.container.retina.reduceFactor;
      if (!rotateAnimation.sync) {
        particle.rotate.velocity *= Math.random();
      }
    }
  }
  isEnabled(particle) {
    const rotate = particle.options.rotate, rotateAnimation = rotate.animation;
    return !particle.destroyed && !particle.spawning && !rotate.path && rotateAnimation.enable;
  }
  update(particle, delta) {
    if (!this.isEnabled(particle)) {
      return;
    }
    updateAngle(particle, delta);
  }
};

// node_modules/tsparticles-updater-angle/esm/index.js
async function loadAngleUpdater(engine) {
  await engine.addParticleUpdater("angle", (container) => new AngleUpdater(container));
}

// node_modules/tsparticles-move-base/esm/Utils.js
function applyDistance(particle) {
  const initialPosition = particle.initialPosition;
  const { dx, dy } = getDistances(initialPosition, particle.position);
  const dxFixed = Math.abs(dx), dyFixed = Math.abs(dy);
  const hDistance = particle.retina.maxDistance.horizontal;
  const vDistance = particle.retina.maxDistance.vertical;
  if (!hDistance && !vDistance) {
    return;
  }
  if ((hDistance && dxFixed >= hDistance || vDistance && dyFixed >= vDistance) && !particle.misplaced) {
    particle.misplaced = !!hDistance && dxFixed > hDistance || !!vDistance && dyFixed > vDistance;
    if (hDistance) {
      particle.velocity.x = particle.velocity.y / 2 - particle.velocity.x;
    }
    if (vDistance) {
      particle.velocity.y = particle.velocity.x / 2 - particle.velocity.y;
    }
  } else if ((!hDistance || dxFixed < hDistance) && (!vDistance || dyFixed < vDistance) && particle.misplaced) {
    particle.misplaced = false;
  } else if (particle.misplaced) {
    const pos = particle.position, vel = particle.velocity;
    if (hDistance && (pos.x < initialPosition.x && vel.x < 0 || pos.x > initialPosition.x && vel.x > 0)) {
      vel.x *= -Math.random();
    }
    if (vDistance && (pos.y < initialPosition.y && vel.y < 0 || pos.y > initialPosition.y && vel.y > 0)) {
      vel.y *= -Math.random();
    }
  }
}
function spin(particle, moveSpeed) {
  const container = particle.container;
  if (!particle.spin) {
    return;
  }
  const updateFunc = {
    x: particle.spin.direction === "clockwise" ? Math.cos : Math.sin,
    y: particle.spin.direction === "clockwise" ? Math.sin : Math.cos
  };
  particle.position.x = particle.spin.center.x + particle.spin.radius * updateFunc.x(particle.spin.angle);
  particle.position.y = particle.spin.center.y + particle.spin.radius * updateFunc.y(particle.spin.angle);
  particle.spin.radius += particle.spin.acceleration;
  const maxCanvasSize = Math.max(container.canvas.size.width, container.canvas.size.height);
  if (particle.spin.radius > maxCanvasSize / 2) {
    particle.spin.radius = maxCanvasSize / 2;
    particle.spin.acceleration *= -1;
  } else if (particle.spin.radius < 0) {
    particle.spin.radius = 0;
    particle.spin.acceleration *= -1;
  }
  particle.spin.angle += moveSpeed / 100 * (1 - particle.spin.radius / maxCanvasSize);
}
function applyPath(particle, delta) {
  const particlesOptions = particle.options;
  const pathOptions = particlesOptions.move.path;
  const pathEnabled = pathOptions.enable;
  if (!pathEnabled) {
    return;
  }
  const container = particle.container;
  if (particle.lastPathTime <= particle.pathDelay) {
    particle.lastPathTime += delta.value;
    return;
  }
  const path = container.pathGenerator.generate(particle);
  particle.velocity.addTo(path);
  if (pathOptions.clamp) {
    particle.velocity.x = clamp(particle.velocity.x, -1, 1);
    particle.velocity.y = clamp(particle.velocity.y, -1, 1);
  }
  particle.lastPathTime -= particle.pathDelay;
}
function getProximitySpeedFactor(particle) {
  const container = particle.container;
  const options = container.actualOptions;
  const active = isInArray("slow", options.interactivity.events.onHover.mode);
  if (!active) {
    return 1;
  }
  const mousePos = particle.container.interactivity.mouse.position;
  if (!mousePos) {
    return 1;
  }
  const particlePos = particle.getPosition();
  const dist = getDistance(mousePos, particlePos);
  const radius = container.retina.slowModeRadius;
  if (dist > radius) {
    return 1;
  }
  const proximityFactor = dist / radius || 0;
  const slowFactor = options.interactivity.modes.slow.factor;
  return proximityFactor / slowFactor;
}

// node_modules/tsparticles-move-base/esm/BaseMover.js
var BaseMover = class {
  init(particle) {
    var _a;
    const container = particle.container, options = particle.options, spinOptions = options.move.spin;
    if (spinOptions.enable) {
      const spinPos = (_a = spinOptions.position) !== null && _a !== void 0 ? _a : { x: 50, y: 50 };
      const spinCenter = {
        x: spinPos.x / 100 * container.canvas.size.width,
        y: spinPos.y / 100 * container.canvas.size.height
      };
      const pos = particle.getPosition();
      const distance = getDistance(pos, spinCenter);
      const spinAcceleration = getRangeValue(spinOptions.acceleration);
      particle.retina.spinAcceleration = spinAcceleration * container.retina.pixelRatio;
      particle.spin = {
        center: spinCenter,
        direction: particle.velocity.x >= 0 ? "clockwise" : "counter-clockwise",
        angle: particle.velocity.angle,
        radius: distance,
        acceleration: particle.retina.spinAcceleration
      };
    }
  }
  isEnabled(particle) {
    return !particle.destroyed && particle.options.move.enable;
  }
  move(particle, delta) {
    var _a, _b, _c;
    var _d, _e;
    const particleOptions = particle.options, moveOptions = particleOptions.move;
    if (!moveOptions.enable) {
      return;
    }
    const container = particle.container, slowFactor = getProximitySpeedFactor(particle), baseSpeed = ((_a = (_d = particle.retina).moveSpeed) !== null && _a !== void 0 ? _a : _d.moveSpeed = getRangeValue(moveOptions.speed) * container.retina.pixelRatio) * container.retina.reduceFactor, moveDrift = (_b = (_e = particle.retina).moveDrift) !== null && _b !== void 0 ? _b : _e.moveDrift = getRangeValue(particle.options.move.drift) * container.retina.pixelRatio, maxSize = getRangeMax(particleOptions.size.value) * container.retina.pixelRatio, sizeFactor = moveOptions.size ? particle.getRadius() / maxSize : 1, speedFactor = sizeFactor * slowFactor * (delta.factor || 1), diffFactor = 2, moveSpeed = baseSpeed * speedFactor / diffFactor;
    applyPath(particle, delta);
    const gravityOptions = particle.gravity, gravityFactor = gravityOptions.enable && gravityOptions.inverse ? -1 : 1;
    if (gravityOptions.enable && moveSpeed) {
      particle.velocity.y += gravityFactor * (gravityOptions.acceleration * delta.factor) / (60 * moveSpeed);
    }
    if (moveDrift && moveSpeed) {
      particle.velocity.x += moveDrift * delta.factor / (60 * moveSpeed);
    }
    const decay = particle.moveDecay;
    if (decay != 1) {
      particle.velocity.multTo(decay);
    }
    const velocity = particle.velocity.mult(moveSpeed), maxSpeed = (_c = particle.retina.maxSpeed) !== null && _c !== void 0 ? _c : container.retina.maxSpeed;
    if (gravityOptions.enable && maxSpeed > 0 && (!gravityOptions.inverse && velocity.y >= 0 && velocity.y >= maxSpeed || gravityOptions.inverse && velocity.y <= 0 && velocity.y <= -maxSpeed)) {
      velocity.y = gravityFactor * maxSpeed;
      if (moveSpeed) {
        particle.velocity.y = velocity.y / moveSpeed;
      }
    }
    const zIndexOptions = particle.options.zIndex, zVelocityFactor = (1 - particle.zIndexFactor) ** zIndexOptions.velocityRate;
    if (moveOptions.spin.enable) {
      spin(particle, moveSpeed);
    } else {
      if (zVelocityFactor != 1) {
        velocity.multTo(zVelocityFactor);
      }
      particle.position.addTo(velocity);
      if (moveOptions.vibrate) {
        particle.position.x += Math.sin(particle.position.x * Math.cos(particle.position.y));
        particle.position.y += Math.cos(particle.position.y * Math.sin(particle.position.x));
      }
    }
    applyDistance(particle);
  }
};

// node_modules/tsparticles-move-base/esm/index.js
async function loadBaseMover(engine) {
  engine.addMover("base", () => new BaseMover());
}

// node_modules/tsparticles-shape-circle/esm/CircleDrawer.js
var CircleDrawer = class {
  getSidesCount() {
    return 12;
  }
  draw(context, particle, radius) {
    context.arc(0, 0, radius, 0, Math.PI * 2, false);
  }
};

// node_modules/tsparticles-shape-circle/esm/index.js
async function loadCircleShape(engine) {
  await engine.addShape("circle", new CircleDrawer());
}

// node_modules/tsparticles-updater-color/esm/ColorUpdater.js
function updateColorValue(delta, value, valueAnimation, max, decrease) {
  var _a, _b;
  const colorValue = value;
  if (!colorValue || !valueAnimation.enable) {
    return;
  }
  const offset = randomInRange(valueAnimation.offset), velocity = ((_a = value.velocity) !== null && _a !== void 0 ? _a : 0) * delta.factor + offset * 3.6, decay = (_b = value.decay) !== null && _b !== void 0 ? _b : 1;
  if (!decrease || colorValue.status === 0) {
    colorValue.value += velocity;
    if (decrease && colorValue.value > max) {
      colorValue.status = 1;
      colorValue.value -= colorValue.value % max;
    }
  } else {
    colorValue.value -= velocity;
    if (colorValue.value < 0) {
      colorValue.status = 0;
      colorValue.value += colorValue.value;
    }
  }
  if (colorValue.velocity && decay !== 1) {
    colorValue.velocity *= decay;
  }
  if (colorValue.value > max) {
    colorValue.value %= max;
  }
}
function updateColor(particle, delta) {
  var _a, _b, _c;
  const animationOptions = particle.options.color.animation;
  if (((_a = particle.color) === null || _a === void 0 ? void 0 : _a.h) !== void 0) {
    updateColorValue(delta, particle.color.h, animationOptions.h, 360, false);
  }
  if (((_b = particle.color) === null || _b === void 0 ? void 0 : _b.s) !== void 0) {
    updateColorValue(delta, particle.color.s, animationOptions.s, 100, true);
  }
  if (((_c = particle.color) === null || _c === void 0 ? void 0 : _c.l) !== void 0) {
    updateColorValue(delta, particle.color.l, animationOptions.l, 100, true);
  }
}
var ColorUpdater = class {
  constructor(container) {
    this.container = container;
  }
  init(particle) {
    const hslColor = rangeColorToHsl(particle.options.color, particle.id, particle.options.reduceDuplicates);
    if (hslColor) {
      particle.color = getHslAnimationFromHsl(hslColor, particle.options.color.animation, this.container.retina.reduceFactor);
    }
  }
  isEnabled(particle) {
    var _a, _b, _c;
    const animationOptions = particle.options.color.animation;
    return !particle.destroyed && !particle.spawning && (((_a = particle.color) === null || _a === void 0 ? void 0 : _a.h.value) !== void 0 && animationOptions.h.enable || ((_b = particle.color) === null || _b === void 0 ? void 0 : _b.s.value) !== void 0 && animationOptions.s.enable || ((_c = particle.color) === null || _c === void 0 ? void 0 : _c.l.value) !== void 0 && animationOptions.l.enable);
  }
  update(particle, delta) {
    updateColor(particle, delta);
  }
};

// node_modules/tsparticles-updater-color/esm/index.js
async function loadColorUpdater(engine) {
  await engine.addParticleUpdater("color", (container) => new ColorUpdater(container));
}

// node_modules/tsparticles-interaction-external-attract/esm/Attractor.js
var Attractor = class extends ExternalInteractorBase {
  constructor(container) {
    super(container);
    if (!container.attract) {
      container.attract = { particles: [] };
    }
    this.handleClickMode = (mode) => {
      const options = this.container.actualOptions;
      if (mode !== "attract") {
        return;
      }
      if (!container.attract) {
        container.attract = { particles: [] };
      }
      container.attract.clicking = true;
      container.attract.count = 0;
      for (const particle of container.attract.particles) {
        if (!this.isEnabled(particle)) {
          continue;
        }
        particle.velocity.setTo(particle.initialVelocity);
      }
      container.attract.particles = [];
      container.attract.finish = false;
      setTimeout(() => {
        if (!container.destroyed) {
          if (!container.attract) {
            container.attract = { particles: [] };
          }
          container.attract.clicking = false;
        }
      }, options.interactivity.modes.attract.duration * 1e3);
    };
  }
  isEnabled(particle) {
    var _a;
    const container = this.container, options = container.actualOptions, mouse = container.interactivity.mouse, events = ((_a = particle === null || particle === void 0 ? void 0 : particle.interactivity) !== null && _a !== void 0 ? _a : options.interactivity).events;
    if ((!mouse.position || !events.onHover.enable) && (!mouse.clickPosition || !events.onClick.enable)) {
      return false;
    }
    const hoverMode = events.onHover.mode, clickMode = events.onClick.mode;
    return isInArray("attract", hoverMode) || isInArray("attract", clickMode);
  }
  clear() {
  }
  reset() {
  }
  async interact() {
    const container = this.container, options = container.actualOptions, mouseMoveStatus = container.interactivity.status === mouseMoveEvent, events = options.interactivity.events, hoverEnabled = events.onHover.enable, hoverMode = events.onHover.mode, clickEnabled = events.onClick.enable, clickMode = events.onClick.mode;
    if (mouseMoveStatus && hoverEnabled && isInArray("attract", hoverMode)) {
      this.hoverAttract();
    } else if (clickEnabled && isInArray("attract", clickMode)) {
      this.clickAttract();
    }
  }
  hoverAttract() {
    const container = this.container;
    const mousePos = container.interactivity.mouse.position;
    if (!mousePos) {
      return;
    }
    const attractRadius = container.retina.attractModeDistance;
    this.processAttract(mousePos, attractRadius, new Circle(mousePos.x, mousePos.y, attractRadius));
  }
  processAttract(position, attractRadius, area) {
    const container = this.container, attractOptions = container.actualOptions.interactivity.modes.attract, query = container.particles.quadTree.query(area, (p) => this.isEnabled(p));
    for (const particle of query) {
      const { dx, dy, distance } = getDistances(particle.position, position);
      const velocity = attractOptions.speed * attractOptions.factor;
      const attractFactor = clamp(calcEasing(1 - distance / attractRadius, attractOptions.easing) * velocity, 0, attractOptions.maxSpeed);
      const normVec = Vector.create(distance === 0 ? velocity : dx / distance * attractFactor, distance === 0 ? velocity : dy / distance * attractFactor);
      particle.position.subFrom(normVec);
    }
  }
  clickAttract() {
    const container = this.container;
    if (!container.attract) {
      container.attract = { particles: [] };
    }
    if (!container.attract.finish) {
      if (!container.attract.count) {
        container.attract.count = 0;
      }
      container.attract.count++;
      if (container.attract.count === container.particles.count) {
        container.attract.finish = true;
      }
    }
    if (container.attract.clicking) {
      const mousePos = container.interactivity.mouse.clickPosition;
      if (!mousePos) {
        return;
      }
      const attractRadius = container.retina.attractModeDistance;
      this.processAttract(mousePos, attractRadius, new Circle(mousePos.x, mousePos.y, attractRadius));
    } else if (container.attract.clicking === false) {
      container.attract.particles = [];
    }
    return;
  }
};

// node_modules/tsparticles-interaction-external-attract/esm/index.js
async function loadExternalAttractInteraction(engine) {
  await engine.addInteractor("externalAttract", (container) => new Attractor(container));
}

// node_modules/tsparticles-interaction-external-bounce/esm/Bouncer.js
var Bouncer = class extends ExternalInteractorBase {
  constructor(container) {
    super(container);
  }
  isEnabled(particle) {
    var _a;
    const container = this.container, options = container.actualOptions, mouse = container.interactivity.mouse, events = ((_a = particle === null || particle === void 0 ? void 0 : particle.interactivity) !== null && _a !== void 0 ? _a : options.interactivity).events, divs = events.onDiv;
    return mouse.position && events.onHover.enable && isInArray("bounce", events.onHover.mode) || isDivModeEnabled("bounce", divs);
  }
  async interact() {
    const container = this.container, options = container.actualOptions, events = options.interactivity.events, mouseMoveStatus = container.interactivity.status === mouseMoveEvent, hoverEnabled = events.onHover.enable, hoverMode = events.onHover.mode, divs = events.onDiv;
    if (mouseMoveStatus && hoverEnabled && isInArray("bounce", hoverMode)) {
      this.processMouseBounce();
    } else {
      divModeExecute("bounce", divs, (selector, div) => this.singleSelectorBounce(selector, div));
    }
  }
  clear() {
  }
  reset() {
  }
  processMouseBounce() {
    const container = this.container, pxRatio = container.retina.pixelRatio, tolerance = 10 * pxRatio, mousePos = container.interactivity.mouse.position, radius = container.retina.bounceModeDistance;
    if (mousePos) {
      this.processBounce(mousePos, radius, new Circle(mousePos.x, mousePos.y, radius + tolerance));
    }
  }
  singleSelectorBounce(selector, div) {
    const container = this.container, query = document.querySelectorAll(selector);
    if (!query.length) {
      return;
    }
    query.forEach((item) => {
      const elem = item, pxRatio = container.retina.pixelRatio, pos = {
        x: (elem.offsetLeft + elem.offsetWidth / 2) * pxRatio,
        y: (elem.offsetTop + elem.offsetHeight / 2) * pxRatio
      }, radius = elem.offsetWidth / 2 * pxRatio, tolerance = 10 * pxRatio, area = div.type === "circle" ? new Circle(pos.x, pos.y, radius + tolerance) : new Rectangle(elem.offsetLeft * pxRatio - tolerance, elem.offsetTop * pxRatio - tolerance, elem.offsetWidth * pxRatio + tolerance * 2, elem.offsetHeight * pxRatio + tolerance * 2);
      this.processBounce(pos, radius, area);
    });
  }
  processBounce(position, radius, area) {
    const query = this.container.particles.quadTree.query(area, (p) => this.isEnabled(p));
    for (const particle of query) {
      if (area instanceof Circle) {
        circleBounce(circleBounceDataFromParticle(particle), {
          position,
          radius,
          mass: radius ** 2 * Math.PI / 2,
          velocity: Vector.origin,
          factor: Vector.origin
        });
      } else if (area instanceof Rectangle) {
        rectBounce(particle, calculateBounds(position, radius));
      }
    }
  }
};

// node_modules/tsparticles-interaction-external-bounce/esm/index.js
async function loadExternalBounceInteraction(engine) {
  await engine.addInteractor("externalBounce", (container) => new Bouncer(container));
}

// node_modules/tsparticles-interaction-external-bubble/esm/Bubbler.js
function calculateBubbleValue(particleValue, modeValue, optionsValue, ratio) {
  if (modeValue >= optionsValue) {
    const value = particleValue + (modeValue - optionsValue) * ratio;
    return clamp(value, particleValue, modeValue);
  } else if (modeValue < optionsValue) {
    const value = particleValue - (optionsValue - modeValue) * ratio;
    return clamp(value, modeValue, particleValue);
  }
}
var Bubbler = class extends ExternalInteractorBase {
  constructor(container) {
    super(container);
    if (!container.bubble) {
      container.bubble = {};
    }
    this.handleClickMode = (mode) => {
      if (mode !== "bubble") {
        return;
      }
      if (!container.bubble) {
        container.bubble = {};
      }
      container.bubble.clicking = true;
    };
  }
  isEnabled(particle) {
    var _a;
    const container = this.container, options = container.actualOptions, mouse = container.interactivity.mouse, events = ((_a = particle === null || particle === void 0 ? void 0 : particle.interactivity) !== null && _a !== void 0 ? _a : options.interactivity).events, divs = events.onDiv, divBubble = isDivModeEnabled("bubble", divs);
    if (!(divBubble || events.onHover.enable && mouse.position || events.onClick.enable && mouse.clickPosition)) {
      return false;
    }
    const hoverMode = events.onHover.mode;
    const clickMode = events.onClick.mode;
    return isInArray("bubble", hoverMode) || isInArray("bubble", clickMode) || divBubble;
  }
  reset(particle) {
    particle.bubble.inRange = false;
  }
  clear(particle, force) {
    if (particle.bubble.inRange && !force) {
      return;
    }
    delete particle.bubble.div;
    delete particle.bubble.opacity;
    delete particle.bubble.radius;
    delete particle.bubble.color;
  }
  async interact() {
    const options = this.container.actualOptions, events = options.interactivity.events, onHover = events.onHover, onClick = events.onClick, hoverEnabled = onHover.enable, hoverMode = onHover.mode, clickEnabled = onClick.enable, clickMode = onClick.mode, divs = events.onDiv;
    if (hoverEnabled && isInArray("bubble", hoverMode)) {
      this.hoverBubble();
    } else if (clickEnabled && isInArray("bubble", clickMode)) {
      this.clickBubble();
    } else {
      divModeExecute("bubble", divs, (selector, div) => this.singleSelectorHover(selector, div));
    }
  }
  singleSelectorHover(selector, div) {
    const container = this.container, selectors = document.querySelectorAll(selector);
    if (!selectors.length) {
      return;
    }
    selectors.forEach((item) => {
      const elem = item, pxRatio = container.retina.pixelRatio, pos = {
        x: (elem.offsetLeft + elem.offsetWidth / 2) * pxRatio,
        y: (elem.offsetTop + elem.offsetHeight / 2) * pxRatio
      }, repulseRadius = elem.offsetWidth / 2 * pxRatio, area = div.type === "circle" ? new Circle(pos.x, pos.y, repulseRadius) : new Rectangle(elem.offsetLeft * pxRatio, elem.offsetTop * pxRatio, elem.offsetWidth * pxRatio, elem.offsetHeight * pxRatio), query = container.particles.quadTree.query(area, (p) => this.isEnabled(p));
      for (const particle of query) {
        if (!area.contains(particle.getPosition())) {
          continue;
        }
        particle.bubble.inRange = true;
        const divs = container.actualOptions.interactivity.modes.bubble.divs;
        const divBubble = divMode(divs, elem);
        if (!particle.bubble.div || particle.bubble.div !== elem) {
          this.clear(particle, true);
          particle.bubble.div = elem;
        }
        this.hoverBubbleSize(particle, 1, divBubble);
        this.hoverBubbleOpacity(particle, 1, divBubble);
        this.hoverBubbleColor(particle, 1, divBubble);
      }
    });
  }
  process(particle, distMouse, timeSpent, data) {
    const container = this.container, bubbleParam = data.bubbleObj.optValue;
    if (bubbleParam === void 0) {
      return;
    }
    const options = container.actualOptions, bubbleDuration = options.interactivity.modes.bubble.duration, bubbleDistance = container.retina.bubbleModeDistance, particlesParam = data.particlesObj.optValue, pObjBubble = data.bubbleObj.value, pObj = data.particlesObj.value || 0, type = data.type;
    if (bubbleParam === particlesParam) {
      return;
    }
    if (!container.bubble) {
      container.bubble = {};
    }
    if (!container.bubble.durationEnd) {
      if (distMouse <= bubbleDistance) {
        const obj = pObjBubble !== null && pObjBubble !== void 0 ? pObjBubble : pObj;
        if (obj !== bubbleParam) {
          const value = pObj - timeSpent * (pObj - bubbleParam) / bubbleDuration;
          if (type === "size") {
            particle.bubble.radius = value;
          }
          if (type === "opacity") {
            particle.bubble.opacity = value;
          }
        }
      } else {
        if (type === "size") {
          delete particle.bubble.radius;
        }
        if (type === "opacity") {
          delete particle.bubble.opacity;
        }
      }
    } else if (pObjBubble) {
      if (type === "size") {
        delete particle.bubble.radius;
      }
      if (type === "opacity") {
        delete particle.bubble.opacity;
      }
    }
  }
  clickBubble() {
    var _a, _b;
    const container = this.container, options = container.actualOptions, mouseClickPos = container.interactivity.mouse.clickPosition;
    if (!mouseClickPos) {
      return;
    }
    if (!container.bubble) {
      container.bubble = {};
    }
    const distance = container.retina.bubbleModeDistance, query = container.particles.quadTree.queryCircle(mouseClickPos, distance, (p) => this.isEnabled(p));
    for (const particle of query) {
      if (!container.bubble.clicking) {
        continue;
      }
      particle.bubble.inRange = !container.bubble.durationEnd;
      const pos = particle.getPosition(), distMouse = getDistance(pos, mouseClickPos), timeSpent = (new Date().getTime() - (container.interactivity.mouse.clickTime || 0)) / 1e3;
      if (timeSpent > options.interactivity.modes.bubble.duration) {
        container.bubble.durationEnd = true;
      }
      if (timeSpent > options.interactivity.modes.bubble.duration * 2) {
        container.bubble.clicking = false;
        container.bubble.durationEnd = false;
      }
      const sizeData = {
        bubbleObj: {
          optValue: container.retina.bubbleModeSize,
          value: particle.bubble.radius
        },
        particlesObj: {
          optValue: getRangeMax(particle.options.size.value) * container.retina.pixelRatio,
          value: particle.size.value
        },
        type: "size"
      };
      this.process(particle, distMouse, timeSpent, sizeData);
      const opacityData = {
        bubbleObj: {
          optValue: options.interactivity.modes.bubble.opacity,
          value: particle.bubble.opacity
        },
        particlesObj: {
          optValue: getRangeMax(particle.options.opacity.value),
          value: (_b = (_a = particle.opacity) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : 1
        },
        type: "opacity"
      };
      this.process(particle, distMouse, timeSpent, opacityData);
      if (!container.bubble.durationEnd) {
        if (distMouse <= container.retina.bubbleModeDistance) {
          this.hoverBubbleColor(particle, distMouse);
        } else {
          delete particle.bubble.color;
        }
      } else {
        delete particle.bubble.color;
      }
    }
  }
  hoverBubble() {
    const container = this.container, mousePos = container.interactivity.mouse.position;
    if (mousePos === void 0) {
      return;
    }
    const distance = container.retina.bubbleModeDistance, query = container.particles.quadTree.queryCircle(mousePos, distance, (p) => this.isEnabled(p));
    for (const particle of query) {
      particle.bubble.inRange = true;
      const pos = particle.getPosition(), pointDistance = getDistance(pos, mousePos), ratio = 1 - pointDistance / distance;
      if (pointDistance <= distance) {
        if (ratio >= 0 && container.interactivity.status === mouseMoveEvent) {
          this.hoverBubbleSize(particle, ratio);
          this.hoverBubbleOpacity(particle, ratio);
          this.hoverBubbleColor(particle, ratio);
        }
      } else {
        this.reset(particle);
      }
      if (container.interactivity.status === mouseLeaveEvent) {
        this.reset(particle);
      }
    }
  }
  hoverBubbleSize(particle, ratio, divBubble) {
    const container = this.container, modeSize = (divBubble === null || divBubble === void 0 ? void 0 : divBubble.size) ? divBubble.size * container.retina.pixelRatio : container.retina.bubbleModeSize;
    if (modeSize === void 0) {
      return;
    }
    const optSize = getRangeMax(particle.options.size.value) * container.retina.pixelRatio;
    const pSize = particle.size.value;
    const size = calculateBubbleValue(pSize, modeSize, optSize, ratio);
    if (size !== void 0) {
      particle.bubble.radius = size;
    }
  }
  hoverBubbleOpacity(particle, ratio, divBubble) {
    var _a, _b, _c;
    const container = this.container, options = container.actualOptions, modeOpacity = (_a = divBubble === null || divBubble === void 0 ? void 0 : divBubble.opacity) !== null && _a !== void 0 ? _a : options.interactivity.modes.bubble.opacity;
    if (!modeOpacity) {
      return;
    }
    const optOpacity = particle.options.opacity.value;
    const pOpacity = (_c = (_b = particle.opacity) === null || _b === void 0 ? void 0 : _b.value) !== null && _c !== void 0 ? _c : 1;
    const opacity = calculateBubbleValue(pOpacity, modeOpacity, getRangeMax(optOpacity), ratio);
    if (opacity !== void 0) {
      particle.bubble.opacity = opacity;
    }
  }
  hoverBubbleColor(particle, ratio, divBubble) {
    const options = this.container.actualOptions;
    const bubbleOptions = divBubble !== null && divBubble !== void 0 ? divBubble : options.interactivity.modes.bubble;
    if (!particle.bubble.finalColor) {
      const modeColor = bubbleOptions.color;
      if (!modeColor) {
        return;
      }
      const bubbleColor = modeColor instanceof Array ? itemFromArray(modeColor) : modeColor;
      particle.bubble.finalColor = rangeColorToHsl(bubbleColor);
    }
    if (!particle.bubble.finalColor) {
      return;
    }
    if (bubbleOptions.mix) {
      particle.bubble.color = void 0;
      const pColor = particle.getFillColor();
      particle.bubble.color = pColor ? rgbToHsl(colorMix(pColor, particle.bubble.finalColor, 1 - ratio, ratio)) : particle.bubble.finalColor;
    } else {
      particle.bubble.color = particle.bubble.finalColor;
    }
  }
};

// node_modules/tsparticles-interaction-external-bubble/esm/index.js
async function loadExternalBubbleInteraction(engine) {
  await engine.addInteractor("externalBubble", (container) => new Bubbler(container));
}

// node_modules/tsparticles-interaction-external-connect/esm/Connector.js
function drawConnectLine(context, width, lineStyle2, begin, end) {
  context.save();
  drawLine(context, begin, end);
  context.lineWidth = width;
  context.strokeStyle = lineStyle2;
  context.stroke();
  context.restore();
}
function lineStyle(container, ctx, p1, p2) {
  const options = container.actualOptions, connectOptions = options.interactivity.modes.connect;
  return gradient(ctx, p1, p2, connectOptions.links.opacity);
}
function drawConnection(container, p1, p2) {
  container.canvas.draw((ctx) => {
    var _a;
    const ls = lineStyle(container, ctx, p1, p2);
    if (!ls) {
      return;
    }
    const pos1 = p1.getPosition(), pos2 = p2.getPosition();
    drawConnectLine(ctx, (_a = p1.retina.linksWidth) !== null && _a !== void 0 ? _a : container.retina.linksWidth, ls, pos1, pos2);
  });
}
var Connector = class extends ExternalInteractorBase {
  constructor(container) {
    super(container);
  }
  isEnabled(particle) {
    var _a;
    const container = this.container, mouse = container.interactivity.mouse, events = ((_a = particle === null || particle === void 0 ? void 0 : particle.interactivity) !== null && _a !== void 0 ? _a : container.actualOptions.interactivity).events;
    if (!(events.onHover.enable && mouse.position)) {
      return false;
    }
    return isInArray("connect", events.onHover.mode);
  }
  clear() {
  }
  reset() {
  }
  async interact() {
    const container = this.container, options = container.actualOptions;
    if (options.interactivity.events.onHover.enable && container.interactivity.status === "mousemove") {
      const mousePos = container.interactivity.mouse.position;
      if (!mousePos) {
        return;
      }
      const distance = Math.abs(container.retina.connectModeRadius), query = container.particles.quadTree.queryCircle(mousePos, distance, (p) => this.isEnabled(p));
      let i = 0;
      for (const p1 of query) {
        const pos1 = p1.getPosition();
        for (const p2 of query.slice(i + 1)) {
          const pos2 = p2.getPosition(), distMax = Math.abs(container.retina.connectModeDistance), xDiff = Math.abs(pos1.x - pos2.x), yDiff = Math.abs(pos1.y - pos2.y);
          if (xDiff < distMax && yDiff < distMax) {
            drawConnection(container, p1, p2);
          }
        }
        ++i;
      }
    }
  }
};

// node_modules/tsparticles-interaction-external-connect/esm/index.js
async function loadExternalConnectInteraction(engine) {
  await engine.addInteractor("externalConnect", (container) => new Connector(container));
}

// node_modules/tsparticles-interaction-external-grab/esm/Grabber.js
function drawGrabLine(context, width, begin, end, colorLine, opacity) {
  context.save();
  drawLine(context, begin, end);
  context.strokeStyle = getStyleFromRgb(colorLine, opacity);
  context.lineWidth = width;
  context.stroke();
  context.restore();
}
function drawGrab(container, particle, lineColor, opacity, mousePos) {
  container.canvas.draw((ctx) => {
    var _a;
    const beginPos = particle.getPosition();
    drawGrabLine(ctx, (_a = particle.retina.linksWidth) !== null && _a !== void 0 ? _a : container.retina.linksWidth, beginPos, mousePos, lineColor, opacity);
  });
}
var Grabber = class extends ExternalInteractorBase {
  constructor(container) {
    super(container);
  }
  isEnabled(particle) {
    var _a;
    const container = this.container, mouse = container.interactivity.mouse, events = ((_a = particle === null || particle === void 0 ? void 0 : particle.interactivity) !== null && _a !== void 0 ? _a : container.actualOptions.interactivity).events;
    return events.onHover.enable && !!mouse.position && isInArray("grab", events.onHover.mode);
  }
  clear() {
  }
  reset() {
  }
  async interact() {
    var _a;
    const container = this.container, options = container.actualOptions, interactivity = options.interactivity;
    if (!interactivity.events.onHover.enable || container.interactivity.status !== mouseMoveEvent) {
      return;
    }
    const mousePos = container.interactivity.mouse.position;
    if (!mousePos) {
      return;
    }
    const distance = container.retina.grabModeDistance, query = container.particles.quadTree.queryCircle(mousePos, distance, (p) => this.isEnabled(p));
    for (const particle of query) {
      const pos = particle.getPosition(), pointDistance = getDistance(pos, mousePos);
      if (pointDistance > distance) {
        continue;
      }
      const grabLineOptions = interactivity.modes.grab.links, lineOpacity = grabLineOptions.opacity, opacityLine = lineOpacity - pointDistance * lineOpacity / distance;
      if (opacityLine <= 0) {
        continue;
      }
      const optColor = (_a = grabLineOptions.color) !== null && _a !== void 0 ? _a : particle.options.links.color;
      if (!container.particles.grabLineColor) {
        const linksOptions = options.interactivity.modes.grab.links;
        container.particles.grabLineColor = getLinkRandomColor(optColor, linksOptions.blink, linksOptions.consent);
      }
      const colorLine = getLinkColor(particle, void 0, container.particles.grabLineColor);
      if (!colorLine) {
        return;
      }
      drawGrab(container, particle, colorLine, opacityLine, mousePos);
    }
  }
};

// node_modules/tsparticles-interaction-external-grab/esm/index.js
async function loadExternalGrabInteraction(engine) {
  await engine.addInteractor("externalGrab", (container) => new Grabber(container));
}

// node_modules/tsparticles-interaction-external-pause/esm/Pauser.js
var Pauser = class extends ExternalInteractorBase {
  constructor(container) {
    super(container);
    this.handleClickMode = (mode) => {
      if (mode !== "pause") {
        return;
      }
      const container2 = this.container;
      if (container2.getAnimationStatus()) {
        container2.pause();
      } else {
        container2.play();
      }
    };
  }
  isEnabled() {
    return true;
  }
  clear() {
  }
  reset() {
  }
  async interact() {
  }
};

// node_modules/tsparticles-interaction-external-pause/esm/index.js
function loadExternalPauseInteraction(engine) {
  engine.addInteractor("externalPause", (container) => new Pauser(container));
}

// node_modules/tsparticles-interaction-external-push/esm/Pusher.js
var Pusher = class extends ExternalInteractorBase {
  constructor(container) {
    super(container);
    this.handleClickMode = (mode) => {
      if (mode !== "push") {
        return;
      }
      const container2 = this.container;
      const options = container2.actualOptions;
      const pushNb = options.interactivity.modes.push.quantity;
      if (pushNb <= 0) {
        return;
      }
      const pushOptions = options.interactivity.modes.push;
      const group = itemFromArray([void 0, ...pushOptions.groups]);
      const groupOptions = group !== void 0 ? container2.actualOptions.particles.groups[group] : void 0;
      container2.particles.push(pushNb, container2.interactivity.mouse, groupOptions, group);
    };
  }
  isEnabled() {
    return true;
  }
  clear() {
  }
  reset() {
  }
  async interact() {
  }
};

// node_modules/tsparticles-interaction-external-push/esm/index.js
async function loadExternalPushInteraction(engine) {
  await engine.addInteractor("externalPush", (container) => new Pusher(container));
}

// node_modules/tsparticles-interaction-external-remove/esm/Remover.js
var Remover = class extends ExternalInteractorBase {
  constructor(container) {
    super(container);
    this.handleClickMode = (mode) => {
      if (mode !== "remove") {
        return;
      }
      const container2 = this.container, options = container2.actualOptions, removeNb = options.interactivity.modes.remove.quantity;
      container2.particles.removeQuantity(removeNb);
    };
  }
  isEnabled() {
    return true;
  }
  clear() {
  }
  reset() {
  }
  async interact() {
  }
};

// node_modules/tsparticles-interaction-external-remove/esm/index.js
function loadExternalRemoveInteraction(engine) {
  engine.addInteractor("externalRemove", (container) => new Remover(container));
}

// node_modules/tsparticles-interaction-external-repulse/esm/Repulser.js
var Repulser = class extends ExternalInteractorBase {
  constructor(container) {
    super(container);
    if (!container.repulse) {
      container.repulse = { particles: [] };
    }
    this.handleClickMode = (mode) => {
      const options = this.container.actualOptions;
      if (mode !== "repulse") {
        return;
      }
      if (!container.repulse) {
        container.repulse = { particles: [] };
      }
      container.repulse.clicking = true;
      container.repulse.count = 0;
      for (const particle of container.repulse.particles) {
        if (!this.isEnabled(particle)) {
          continue;
        }
        particle.velocity.setTo(particle.initialVelocity);
      }
      container.repulse.particles = [];
      container.repulse.finish = false;
      setTimeout(() => {
        if (!container.destroyed) {
          if (!container.repulse) {
            container.repulse = { particles: [] };
          }
          container.repulse.clicking = false;
        }
      }, options.interactivity.modes.repulse.duration * 1e3);
    };
  }
  isEnabled(particle) {
    var _a;
    const container = this.container, options = container.actualOptions, mouse = container.interactivity.mouse, events = ((_a = particle === null || particle === void 0 ? void 0 : particle.interactivity) !== null && _a !== void 0 ? _a : options.interactivity).events, divs = events.onDiv, divRepulse = isDivModeEnabled("repulse", divs);
    if (!(divRepulse || events.onHover.enable && mouse.position || events.onClick.enable && mouse.clickPosition)) {
      return false;
    }
    const hoverMode = events.onHover.mode, clickMode = events.onClick.mode;
    return isInArray("repulse", hoverMode) || isInArray("repulse", clickMode) || divRepulse;
  }
  clear() {
  }
  reset() {
  }
  async interact() {
    const container = this.container, options = container.actualOptions, mouseMoveStatus = container.interactivity.status === mouseMoveEvent, events = options.interactivity.events, hoverEnabled = events.onHover.enable, hoverMode = events.onHover.mode, clickEnabled = events.onClick.enable, clickMode = events.onClick.mode, divs = events.onDiv;
    if (mouseMoveStatus && hoverEnabled && isInArray("repulse", hoverMode)) {
      this.hoverRepulse();
    } else if (clickEnabled && isInArray("repulse", clickMode)) {
      this.clickRepulse();
    } else {
      divModeExecute("repulse", divs, (selector, div) => this.singleSelectorRepulse(selector, div));
    }
  }
  singleSelectorRepulse(selector, div) {
    const container = this.container, query = document.querySelectorAll(selector);
    if (!query.length) {
      return;
    }
    query.forEach((item) => {
      const elem = item, pxRatio = container.retina.pixelRatio, pos = {
        x: (elem.offsetLeft + elem.offsetWidth / 2) * pxRatio,
        y: (elem.offsetTop + elem.offsetHeight / 2) * pxRatio
      }, repulseRadius = elem.offsetWidth / 2 * pxRatio, area = div.type === "circle" ? new Circle(pos.x, pos.y, repulseRadius) : new Rectangle(elem.offsetLeft * pxRatio, elem.offsetTop * pxRatio, elem.offsetWidth * pxRatio, elem.offsetHeight * pxRatio), divs = container.actualOptions.interactivity.modes.repulse.divs, divRepulse = divMode(divs, elem);
      this.processRepulse(pos, repulseRadius, area, divRepulse);
    });
  }
  hoverRepulse() {
    const container = this.container, mousePos = container.interactivity.mouse.position;
    if (!mousePos) {
      return;
    }
    const repulseRadius = container.retina.repulseModeDistance;
    this.processRepulse(mousePos, repulseRadius, new Circle(mousePos.x, mousePos.y, repulseRadius));
  }
  processRepulse(position, repulseRadius, area, divRepulse) {
    var _a;
    const container = this.container, query = container.particles.quadTree.query(area, (p) => this.isEnabled(p)), repulseOptions = container.actualOptions.interactivity.modes.repulse;
    for (const particle of query) {
      const { dx, dy, distance } = getDistances(particle.position, position), velocity = ((_a = divRepulse === null || divRepulse === void 0 ? void 0 : divRepulse.speed) !== null && _a !== void 0 ? _a : repulseOptions.speed) * repulseOptions.factor, repulseFactor = clamp(calcEasing(1 - distance / repulseRadius, repulseOptions.easing) * velocity, 0, repulseOptions.maxSpeed), normVec = Vector.create(distance === 0 ? velocity : dx / distance * repulseFactor, distance === 0 ? velocity : dy / distance * repulseFactor);
      particle.position.addTo(normVec);
    }
  }
  clickRepulse() {
    const container = this.container;
    if (!container.repulse) {
      container.repulse = { particles: [] };
    }
    if (!container.repulse.finish) {
      if (!container.repulse.count) {
        container.repulse.count = 0;
      }
      container.repulse.count++;
      if (container.repulse.count === container.particles.count) {
        container.repulse.finish = true;
      }
    }
    if (container.repulse.clicking) {
      const repulseDistance = container.retina.repulseModeDistance, repulseRadius = Math.pow(repulseDistance / 6, 3), mouseClickPos = container.interactivity.mouse.clickPosition;
      if (mouseClickPos === void 0) {
        return;
      }
      const range = new Circle(mouseClickPos.x, mouseClickPos.y, repulseRadius), query = container.particles.quadTree.query(range, (p) => this.isEnabled(p));
      for (const particle of query) {
        const { dx, dy, distance } = getDistances(mouseClickPos, particle.position), d = distance ** 2, velocity = container.actualOptions.interactivity.modes.repulse.speed, force = -repulseRadius * velocity / d;
        if (d <= repulseRadius) {
          container.repulse.particles.push(particle);
          const vect = Vector.create(dx, dy);
          vect.length = force;
          particle.velocity.setTo(vect);
        }
      }
    } else if (container.repulse.clicking === false) {
      for (const particle of container.repulse.particles) {
        particle.velocity.setTo(particle.initialVelocity);
      }
      container.repulse.particles = [];
    }
  }
};

// node_modules/tsparticles-interaction-external-repulse/esm/index.js
async function loadExternalRepulseInteraction(engine) {
  await engine.addInteractor("externalRepulse", (container) => new Repulser(container));
}

// node_modules/tsparticles-shape-image/esm/Utils.js
var currentColorRegex = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d.]+%?\))|currentcolor/gi;
function replaceColorSvg(imageShape, color, opacity) {
  const { svgData } = imageShape;
  if (!svgData) {
    return "";
  }
  const colorStyle = getStyleFromHsl(color, opacity);
  if (svgData.includes("fill")) {
    return svgData.replace(currentColorRegex, () => colorStyle);
  }
  const preFillIndex = svgData.indexOf(">");
  return `${svgData.substring(0, preFillIndex)} fill="${colorStyle}"${svgData.substring(preFillIndex)}`;
}
async function loadImage(image) {
  return new Promise((resolve) => {
    image.loading = true;
    const img = new Image();
    img.addEventListener("load", () => {
      image.element = img;
      image.loading = false;
      resolve();
    });
    img.addEventListener("error", () => {
      image.error = true;
      image.loading = false;
      console.error(`Error tsParticles - loading image: ${image.source}`);
      resolve();
    });
    img.src = image.source;
  });
}
async function downloadSvgImage(image) {
  if (image.type !== "svg") {
    await loadImage(image);
    return;
  }
  image.loading = true;
  const response = await fetch(image.source);
  image.loading = false;
  if (!response.ok) {
    console.error("Error tsParticles - Image not found");
    image.error = true;
  }
  if (!image.error) {
    image.svgData = await response.text();
  }
}
function replaceImageColor(image, imageData, color, particle) {
  var _a, _b, _c;
  const svgColoredData = replaceColorSvg(image, color, (_b = (_a = particle.opacity) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : 1), svg = new Blob([svgColoredData], { type: "image/svg+xml" }), domUrl = URL || window.URL || window.webkitURL || window, url = domUrl.createObjectURL(svg), img = new Image(), imageRes = {
    data: Object.assign(Object.assign({}, image), { svgData: svgColoredData }),
    ratio: imageData.width / imageData.height,
    replaceColor: (_c = imageData.replaceColor) !== null && _c !== void 0 ? _c : imageData.replace_color,
    source: imageData.src
  };
  img.addEventListener("load", () => {
    const pImage = particle.image;
    if (pImage) {
      pImage.loaded = true;
      image.element = img;
    }
    domUrl.revokeObjectURL(url);
  });
  img.addEventListener("error", () => {
    domUrl.revokeObjectURL(url);
    const img2 = Object.assign(Object.assign({}, image), { error: false, loading: true });
    loadImage(img2).then(() => {
      const pImage = particle.image;
      if (pImage) {
        image.element = img2.element;
        pImage.loaded = true;
      }
    });
  });
  img.src = url;
  return imageRes;
}

// node_modules/tsparticles-shape-image/esm/ImageDrawer.js
var __classPrivateFieldSet18 = function(receiver, state, value, kind, f) {
  if (kind === "m")
    throw new TypeError("Private method is not writable");
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet16 = function(receiver, state, kind, f) {
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _ImageDrawer_images;
var ImageDrawer = class {
  constructor() {
    _ImageDrawer_images.set(this, void 0);
    __classPrivateFieldSet18(this, _ImageDrawer_images, [], "f");
  }
  getSidesCount() {
    return 12;
  }
  getImages(container) {
    const containerImages = __classPrivateFieldGet16(this, _ImageDrawer_images, "f").find((t) => t.id === container.id);
    if (!containerImages) {
      __classPrivateFieldGet16(this, _ImageDrawer_images, "f").push({
        id: container.id,
        images: []
      });
      return this.getImages(container);
    } else {
      return containerImages;
    }
  }
  addImage(container, image) {
    const containerImages = this.getImages(container);
    containerImages === null || containerImages === void 0 ? void 0 : containerImages.images.push(image);
  }
  destroy() {
    __classPrivateFieldSet18(this, _ImageDrawer_images, [], "f");
  }
  draw(context, particle, radius, opacity) {
    var _a, _b;
    const image = particle.image, element = (_a = image === null || image === void 0 ? void 0 : image.data) === null || _a === void 0 ? void 0 : _a.element;
    if (!element) {
      return;
    }
    const ratio = (_b = image === null || image === void 0 ? void 0 : image.ratio) !== null && _b !== void 0 ? _b : 1, pos = {
      x: -radius,
      y: -radius
    };
    if (!(image === null || image === void 0 ? void 0 : image.data.svgData) || !(image === null || image === void 0 ? void 0 : image.replaceColor)) {
      context.globalAlpha = opacity;
    }
    context.drawImage(element, pos.x, pos.y, radius * 2, radius * 2 / ratio);
    if (!(image === null || image === void 0 ? void 0 : image.data.svgData) || !(image === null || image === void 0 ? void 0 : image.replaceColor)) {
      context.globalAlpha = 1;
    }
  }
  loadShape(particle) {
    var _a, _b, _c;
    if (particle.shape !== "image" && particle.shape !== "images") {
      return;
    }
    const images = this.getImages(particle.container).images, imageData = particle.shapeData, image = images.find((t) => t.source === imageData.src);
    let imageRes;
    if (!image) {
      this.loadImageShape(particle.container, imageData).then(() => {
        this.loadShape(particle);
      });
      return;
    }
    if (image.error) {
      return;
    }
    const color = particle.getFillColor();
    if (image.svgData && imageData.replaceColor && color) {
      imageRes = replaceImageColor(image, imageData, color, particle);
    } else {
      imageRes = {
        data: image,
        loaded: true,
        ratio: imageData.width / imageData.height,
        replaceColor: (_a = imageData.replaceColor) !== null && _a !== void 0 ? _a : imageData.replace_color,
        source: imageData.src
      };
    }
    if (!imageRes.ratio) {
      imageRes.ratio = 1;
    }
    const fill = (_b = imageData.fill) !== null && _b !== void 0 ? _b : particle.fill, close = (_c = imageData.close) !== null && _c !== void 0 ? _c : particle.close, imageShape = {
      image: imageRes,
      fill,
      close
    };
    particle.image = imageShape.image;
    particle.fill = imageShape.fill;
    particle.close = imageShape.close;
  }
  async loadImageShape(container, imageShape) {
    const source = imageShape.src;
    if (!source) {
      throw new Error("Error tsParticles - No image.src");
    }
    try {
      const image = {
        source,
        type: source.substr(source.length - 3),
        error: false,
        loading: true
      };
      this.addImage(container, image);
      const imageFunc = imageShape.replaceColor ? downloadSvgImage : loadImage;
      await imageFunc(image);
    } catch (_a) {
      throw new Error(`tsParticles error - ${imageShape.src} not found`);
    }
  }
};
_ImageDrawer_images = /* @__PURE__ */ new WeakMap();

// node_modules/tsparticles-shape-image/esm/index.js
async function loadImageShape(engine) {
  const imageDrawer = new ImageDrawer();
  await engine.addShape("image", imageDrawer);
  await engine.addShape("images", imageDrawer);
}

// node_modules/tsparticles-updater-life/esm/Options/Classes/LifeDelay.js
var LifeDelay = class extends ValueWithRandom {
  constructor() {
    super();
    this.sync = false;
  }
  load(data) {
    if (!data) {
      return;
    }
    super.load(data);
    if (data.sync !== void 0) {
      this.sync = data.sync;
    }
  }
};

// node_modules/tsparticles-updater-life/esm/Options/Classes/LifeDuration.js
var LifeDuration = class extends ValueWithRandom {
  constructor() {
    super();
    this.random.minimumValue = 1e-4;
    this.sync = false;
  }
  load(data) {
    if (!data) {
      return;
    }
    super.load(data);
    if (data.sync !== void 0) {
      this.sync = data.sync;
    }
  }
};

// node_modules/tsparticles-updater-life/esm/Options/Classes/Life.js
var Life = class {
  constructor() {
    this.count = 0;
    this.delay = new LifeDelay();
    this.duration = new LifeDuration();
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.count !== void 0) {
      this.count = data.count;
    }
    this.delay.load(data.delay);
    this.duration.load(data.duration);
  }
};

// node_modules/tsparticles-updater-life/esm/LifeUpdater.js
var LifeUpdater = class {
  constructor(container) {
    this.container = container;
  }
  init(particle) {
    const container = this.container, particlesOptions = particle.options, lifeOptions = particlesOptions.life;
    if (!lifeOptions) {
      return;
    }
    particle.life = {
      delay: container.retina.reduceFactor ? getRangeValue(lifeOptions.delay.value) * (lifeOptions.delay.sync ? 1 : Math.random()) / container.retina.reduceFactor * 1e3 : 0,
      delayTime: 0,
      duration: container.retina.reduceFactor ? getRangeValue(lifeOptions.duration.value) * (lifeOptions.duration.sync ? 1 : Math.random()) / container.retina.reduceFactor * 1e3 : 0,
      time: 0,
      count: lifeOptions.count
    };
    if (particle.life.duration <= 0) {
      particle.life.duration = -1;
    }
    if (particle.life.count <= 0) {
      particle.life.count = -1;
    }
    if (particle.life) {
      particle.spawning = particle.life.delay > 0;
    }
  }
  isEnabled(particle) {
    return !particle.destroyed;
  }
  update(particle, delta) {
    if (!this.isEnabled(particle) || !particle.life) {
      return;
    }
    const life = particle.life;
    let justSpawned = false;
    if (particle.spawning) {
      life.delayTime += delta.value;
      if (life.delayTime >= particle.life.delay) {
        justSpawned = true;
        particle.spawning = false;
        life.delayTime = 0;
        life.time = 0;
      } else {
        return;
      }
    }
    if (life.duration === -1) {
      return;
    }
    if (particle.spawning) {
      return;
    }
    if (justSpawned) {
      life.time = 0;
    } else {
      life.time += delta.value;
    }
    if (life.time < life.duration) {
      return;
    }
    life.time = 0;
    if (particle.life.count > 0) {
      particle.life.count--;
    }
    if (particle.life.count === 0) {
      particle.destroy();
      return;
    }
    const canvasSize = this.container.canvas.size, widthRange = setRangeValue(0, canvasSize.width), heightRange = setRangeValue(0, canvasSize.width);
    particle.position.x = randomInRange(widthRange);
    particle.position.y = randomInRange(heightRange);
    particle.spawning = true;
    life.delayTime = 0;
    life.time = 0;
    particle.reset();
    const lifeOptions = particle.options.life;
    if (lifeOptions) {
      life.delay = getRangeValue(lifeOptions.delay.value) * 1e3;
      life.duration = getRangeValue(lifeOptions.duration.value) * 1e3;
    }
  }
  loadOptions(options, ...sources) {
    for (const source of sources) {
      if (!(source === null || source === void 0 ? void 0 : source.life)) {
        continue;
      }
      if (!options.life) {
        options.life = new Life();
      }
      options.life.load(source.life);
    }
  }
};

// node_modules/tsparticles-updater-life/esm/index.js
async function loadLifeUpdater(engine) {
  await engine.addParticleUpdater("life", (container) => new LifeUpdater(container));
}

// node_modules/tsparticles-shape-line/esm/LineDrawer.js
var LineDrawer = class {
  getSidesCount() {
    return 1;
  }
  draw(context, particle, radius) {
    context.moveTo(-radius / 2, 0);
    context.lineTo(radius / 2, 0);
  }
};

// node_modules/tsparticles-shape-line/esm/index.js
async function loadLineShape(engine) {
  await engine.addShape("line", new LineDrawer());
}

// node_modules/tsparticles-updater-opacity/esm/OpacityUpdater.js
function checkDestroy(particle, value, minValue, maxValue) {
  switch (particle.options.opacity.animation.destroy) {
    case "max":
      if (value >= maxValue) {
        particle.destroy();
      }
      break;
    case "min":
      if (value <= minValue) {
        particle.destroy();
      }
      break;
  }
}
function updateOpacity(particle, delta) {
  var _a, _b, _c, _d, _e, _f;
  if (!particle.opacity) {
    return;
  }
  const minValue = particle.opacity.min, maxValue = particle.opacity.max, decay = (_a = particle.opacity.decay) !== null && _a !== void 0 ? _a : 1;
  if (particle.destroyed || !particle.opacity.enable || ((_b = particle.opacity.maxLoops) !== null && _b !== void 0 ? _b : 0) > 0 && ((_c = particle.opacity.loops) !== null && _c !== void 0 ? _c : 0) > ((_d = particle.opacity.maxLoops) !== null && _d !== void 0 ? _d : 0)) {
    return;
  }
  switch (particle.opacity.status) {
    case 0:
      if (particle.opacity.value >= maxValue) {
        particle.opacity.status = 1;
        if (!particle.opacity.loops) {
          particle.opacity.loops = 0;
        }
        particle.opacity.loops++;
      } else {
        particle.opacity.value += ((_e = particle.opacity.velocity) !== null && _e !== void 0 ? _e : 0) * delta.factor;
      }
      break;
    case 1:
      if (particle.opacity.value <= minValue) {
        particle.opacity.status = 0;
        if (!particle.opacity.loops) {
          particle.opacity.loops = 0;
        }
        particle.opacity.loops++;
      } else {
        particle.opacity.value -= ((_f = particle.opacity.velocity) !== null && _f !== void 0 ? _f : 0) * delta.factor;
      }
      break;
  }
  if (particle.opacity.velocity && particle.opacity.decay !== 1) {
    particle.opacity.velocity *= decay;
  }
  checkDestroy(particle, particle.opacity.value, minValue, maxValue);
  if (!particle.destroyed) {
    particle.opacity.value = clamp(particle.opacity.value, minValue, maxValue);
  }
}
var OpacityUpdater = class {
  constructor(container) {
    this.container = container;
  }
  init(particle) {
    const opacityOptions = particle.options.opacity;
    particle.opacity = {
      enable: opacityOptions.animation.enable,
      max: getRangeMax(opacityOptions.value),
      min: getRangeMin(opacityOptions.value),
      value: getRangeValue(opacityOptions.value),
      loops: 0,
      maxLoops: getRangeValue(opacityOptions.animation.count)
    };
    const opacityAnimation = opacityOptions.animation;
    if (opacityAnimation.enable) {
      particle.opacity.decay = 1 - getRangeValue(opacityAnimation.decay);
      particle.opacity.status = 0;
      const opacityRange = opacityOptions.value;
      particle.opacity.min = getRangeMin(opacityRange);
      particle.opacity.max = getRangeMax(opacityRange);
      switch (opacityAnimation.startValue) {
        case "min":
          particle.opacity.value = particle.opacity.min;
          particle.opacity.status = 0;
          break;
        case "random":
          particle.opacity.value = randomInRange(particle.opacity);
          particle.opacity.status = Math.random() >= 0.5 ? 0 : 1;
          break;
        case "max":
        default:
          particle.opacity.value = particle.opacity.max;
          particle.opacity.status = 1;
          break;
      }
      particle.opacity.velocity = getRangeValue(opacityAnimation.speed) / 100 * this.container.retina.reduceFactor;
      if (!opacityAnimation.sync) {
        particle.opacity.velocity *= Math.random();
      }
    }
  }
  isEnabled(particle) {
    var _a, _b, _c, _d;
    return !particle.destroyed && !particle.spawning && !!particle.opacity && particle.opacity.enable && (((_a = particle.opacity.maxLoops) !== null && _a !== void 0 ? _a : 0) <= 0 || ((_b = particle.opacity.maxLoops) !== null && _b !== void 0 ? _b : 0) > 0 && ((_c = particle.opacity.loops) !== null && _c !== void 0 ? _c : 0) < ((_d = particle.opacity.maxLoops) !== null && _d !== void 0 ? _d : 0));
  }
  update(particle, delta) {
    if (!this.isEnabled(particle)) {
      return;
    }
    updateOpacity(particle, delta);
  }
};

// node_modules/tsparticles-updater-opacity/esm/index.js
async function loadOpacityUpdater(engine) {
  await engine.addParticleUpdater("opacity", (container) => new OpacityUpdater(container));
}

// node_modules/tsparticles-updater-out-modes/esm/Utils.js
function bounceHorizontal(data) {
  if (!(data.outMode === "bounce" || data.outMode === "bounce-horizontal" || data.outMode === "bounceHorizontal" || data.outMode === "split")) {
    return;
  }
  const velocity = data.particle.velocity.x;
  let bounced = false;
  if (data.direction === "right" && data.bounds.right >= data.canvasSize.width && velocity > 0 || data.direction === "left" && data.bounds.left <= 0 && velocity < 0) {
    const newVelocity = getValue(data.particle.options.bounce.horizontal);
    data.particle.velocity.x *= -newVelocity;
    bounced = true;
  }
  if (!bounced) {
    return;
  }
  const minPos = data.offset.x + data.size;
  if (data.bounds.right >= data.canvasSize.width) {
    data.particle.position.x = data.canvasSize.width - minPos;
  } else if (data.bounds.left <= 0) {
    data.particle.position.x = minPos;
  }
  if (data.outMode === "split") {
    data.particle.destroy();
  }
}
function bounceVertical(data) {
  if (data.outMode === "bounce" || data.outMode === "bounce-vertical" || data.outMode === "bounceVertical" || data.outMode === "split") {
    const velocity = data.particle.velocity.y;
    let bounced = false;
    if (data.direction === "bottom" && data.bounds.bottom >= data.canvasSize.height && velocity > 0 || data.direction === "top" && data.bounds.top <= 0 && velocity < 0) {
      const newVelocity = getValue(data.particle.options.bounce.vertical);
      data.particle.velocity.y *= -newVelocity;
      bounced = true;
    }
    if (!bounced) {
      return;
    }
    const minPos = data.offset.y + data.size;
    if (data.bounds.bottom >= data.canvasSize.height) {
      data.particle.position.y = data.canvasSize.height - minPos;
    } else if (data.bounds.top <= 0) {
      data.particle.position.y = minPos;
    }
    if (data.outMode === "split") {
      data.particle.destroy();
    }
  }
}

// node_modules/tsparticles-updater-out-modes/esm/BounceOutMode.js
var BounceOutMode = class {
  constructor(container) {
    this.container = container;
    this.modes = [
      "bounce",
      "bounce-vertical",
      "bounce-horizontal",
      "bounceVertical",
      "bounceHorizontal",
      "split"
    ];
  }
  update(particle, direction, delta, outMode) {
    if (!this.modes.includes(outMode)) {
      return;
    }
    const container = this.container;
    let handled = false;
    for (const [, plugin] of container.plugins) {
      if (plugin.particleBounce !== void 0) {
        handled = plugin.particleBounce(particle, delta, direction);
      }
      if (handled) {
        break;
      }
    }
    if (handled) {
      return;
    }
    const pos = particle.getPosition(), offset = particle.offset, size = particle.getRadius(), bounds = calculateBounds(pos, size), canvasSize = container.canvas.size;
    bounceHorizontal({ particle, outMode, direction, bounds, canvasSize, offset, size });
    bounceVertical({ particle, outMode, direction, bounds, canvasSize, offset, size });
  }
};

// node_modules/tsparticles-updater-out-modes/esm/DestroyOutMode.js
var DestroyOutMode = class {
  constructor(container) {
    this.container = container;
    this.modes = ["destroy"];
  }
  update(particle, direction, delta, outMode) {
    if (!this.modes.includes(outMode)) {
      return;
    }
    const container = this.container;
    switch (particle.outType) {
      case "normal":
      case "outside":
        if (isPointInside(particle.position, container.canvas.size, Vector.origin, particle.getRadius(), direction)) {
          return;
        }
        break;
      case "inside": {
        const { dx, dy } = getDistances(particle.position, particle.moveCenter);
        const { x: vx, y: vy } = particle.velocity;
        if (vx < 0 && dx > particle.moveCenter.radius || vy < 0 && dy > particle.moveCenter.radius || vx >= 0 && dx < -particle.moveCenter.radius || vy >= 0 && dy < -particle.moveCenter.radius) {
          return;
        }
        break;
      }
    }
    container.particles.remove(particle, void 0, true);
  }
};

// node_modules/tsparticles-updater-out-modes/esm/NoneOutMode.js
var NoneOutMode = class {
  constructor(container) {
    this.container = container;
    this.modes = ["none"];
  }
  update(particle, direction, delta, outMode) {
    if (!this.modes.includes(outMode)) {
      return;
    }
    if (particle.options.move.distance.horizontal && (direction === "left" || direction === "right") || particle.options.move.distance.vertical && (direction === "top" || direction === "bottom")) {
      return;
    }
    const gravityOptions = particle.options.move.gravity, container = this.container;
    const canvasSize = container.canvas.size;
    const pRadius = particle.getRadius();
    if (!gravityOptions.enable) {
      if (particle.velocity.y > 0 && particle.position.y <= canvasSize.height + pRadius || particle.velocity.y < 0 && particle.position.y >= -pRadius || particle.velocity.x > 0 && particle.position.x <= canvasSize.width + pRadius || particle.velocity.x < 0 && particle.position.x >= -pRadius) {
        return;
      }
      if (!isPointInside(particle.position, container.canvas.size, Vector.origin, pRadius, direction)) {
        container.particles.remove(particle);
      }
    } else {
      const position = particle.position;
      if (!gravityOptions.inverse && position.y > canvasSize.height + pRadius && direction === "bottom" || gravityOptions.inverse && position.y < -pRadius && direction === "top") {
        container.particles.remove(particle);
      }
    }
  }
};

// node_modules/tsparticles-updater-out-modes/esm/OutOutMode.js
var OutOutMode = class {
  constructor(container) {
    this.container = container;
    this.modes = ["out"];
  }
  update(particle, direction, delta, outMode) {
    if (!this.modes.includes(outMode)) {
      return;
    }
    const container = this.container;
    switch (particle.outType) {
      case "inside": {
        const { x: vx, y: vy } = particle.velocity;
        const circVec = Vector.origin;
        circVec.length = particle.moveCenter.radius;
        circVec.angle = particle.velocity.angle + Math.PI;
        circVec.addTo(Vector.create(particle.moveCenter));
        const { dx, dy } = getDistances(particle.position, circVec);
        if (vx <= 0 && dx >= 0 || vy <= 0 && dy >= 0 || vx >= 0 && dx <= 0 || vy >= 0 && dy <= 0) {
          return;
        }
        particle.position.x = Math.floor(randomInRange({
          min: 0,
          max: container.canvas.size.width
        }));
        particle.position.y = Math.floor(randomInRange({
          min: 0,
          max: container.canvas.size.height
        }));
        const { dx: newDx, dy: newDy } = getDistances(particle.position, particle.moveCenter);
        particle.direction = Math.atan2(-newDy, -newDx);
        particle.velocity.angle = particle.direction;
        break;
      }
      default: {
        if (isPointInside(particle.position, container.canvas.size, Vector.origin, particle.getRadius(), direction)) {
          return;
        }
        switch (particle.outType) {
          case "outside": {
            particle.position.x = Math.floor(randomInRange({
              min: -particle.moveCenter.radius,
              max: particle.moveCenter.radius
            })) + particle.moveCenter.x;
            particle.position.y = Math.floor(randomInRange({
              min: -particle.moveCenter.radius,
              max: particle.moveCenter.radius
            })) + particle.moveCenter.y;
            const { dx, dy } = getDistances(particle.position, particle.moveCenter);
            if (particle.moveCenter.radius) {
              particle.direction = Math.atan2(dy, dx);
              particle.velocity.angle = particle.direction;
            }
            break;
          }
          case "normal": {
            const wrap = particle.options.move.warp, canvasSize = container.canvas.size, newPos = {
              bottom: canvasSize.height + particle.getRadius() + particle.offset.y,
              left: -particle.getRadius() - particle.offset.x,
              right: canvasSize.width + particle.getRadius() + particle.offset.x,
              top: -particle.getRadius() - particle.offset.y
            }, sizeValue = particle.getRadius(), nextBounds = calculateBounds(particle.position, sizeValue);
            if (direction === "right" && nextBounds.left > canvasSize.width + particle.offset.x) {
              particle.position.x = newPos.left;
              particle.initialPosition.x = particle.position.x;
              if (!wrap) {
                particle.position.y = Math.random() * canvasSize.height;
                particle.initialPosition.y = particle.position.y;
              }
            } else if (direction === "left" && nextBounds.right < -particle.offset.x) {
              particle.position.x = newPos.right;
              particle.initialPosition.x = particle.position.x;
              if (!wrap) {
                particle.position.y = Math.random() * canvasSize.height;
                particle.initialPosition.y = particle.position.y;
              }
            }
            if (direction === "bottom" && nextBounds.top > canvasSize.height + particle.offset.y) {
              if (!wrap) {
                particle.position.x = Math.random() * canvasSize.width;
                particle.initialPosition.x = particle.position.x;
              }
              particle.position.y = newPos.top;
              particle.initialPosition.y = particle.position.y;
            } else if (direction === "top" && nextBounds.bottom < -particle.offset.y) {
              if (!wrap) {
                particle.position.x = Math.random() * canvasSize.width;
                particle.initialPosition.x = particle.position.x;
              }
              particle.position.y = newPos.bottom;
              particle.initialPosition.y = particle.position.y;
            }
            break;
          }
        }
        break;
      }
    }
  }
};

// node_modules/tsparticles-updater-out-modes/esm/OutOfCanvasUpdater.js
var OutOfCanvasUpdater = class {
  constructor(container) {
    this.container = container;
    this.updaters = [
      new BounceOutMode(container),
      new DestroyOutMode(container),
      new OutOutMode(container),
      new NoneOutMode(container)
    ];
  }
  init() {
  }
  isEnabled(particle) {
    return !particle.destroyed && !particle.spawning;
  }
  update(particle, delta) {
    var _a, _b, _c, _d;
    const outModes = particle.options.move.outModes;
    this.updateOutMode(particle, delta, (_a = outModes.bottom) !== null && _a !== void 0 ? _a : outModes.default, "bottom");
    this.updateOutMode(particle, delta, (_b = outModes.left) !== null && _b !== void 0 ? _b : outModes.default, "left");
    this.updateOutMode(particle, delta, (_c = outModes.right) !== null && _c !== void 0 ? _c : outModes.default, "right");
    this.updateOutMode(particle, delta, (_d = outModes.top) !== null && _d !== void 0 ? _d : outModes.default, "top");
  }
  updateOutMode(particle, delta, outMode, direction) {
    for (const updater of this.updaters) {
      updater.update(particle, direction, delta, outMode);
    }
  }
};

// node_modules/tsparticles-updater-out-modes/esm/index.js
async function loadOutModesUpdater(engine) {
  await engine.addParticleUpdater("outModes", (container) => new OutOfCanvasUpdater(container));
}

// node_modules/tsparticles-move-parallax/esm/ParallaxMover.js
var ParallaxMover = class {
  init() {
  }
  isEnabled(particle) {
    return !isSsr() && !particle.destroyed && particle.container.actualOptions.interactivity.events.onHover.parallax.enable;
  }
  move(particle) {
    const container = particle.container, options = container.actualOptions;
    if (isSsr() || !options.interactivity.events.onHover.parallax.enable) {
      return;
    }
    const parallaxForce = options.interactivity.events.onHover.parallax.force, mousePos = container.interactivity.mouse.position;
    if (!mousePos) {
      return;
    }
    const canvasCenter = {
      x: container.canvas.size.width / 2,
      y: container.canvas.size.height / 2
    }, parallaxSmooth = options.interactivity.events.onHover.parallax.smooth, factor = particle.getRadius() / parallaxForce, centerDistance = {
      x: (mousePos.x - canvasCenter.x) * factor,
      y: (mousePos.y - canvasCenter.y) * factor
    };
    particle.offset.x += (centerDistance.x - particle.offset.x) / parallaxSmooth;
    particle.offset.y += (centerDistance.y - particle.offset.y) / parallaxSmooth;
  }
};

// node_modules/tsparticles-move-parallax/esm/index.js
async function loadParallaxMover(engine) {
  engine.addMover("parallax", () => new ParallaxMover());
}

// node_modules/tsparticles-interaction-particles-attract/esm/Attractor.js
var Attractor2 = class extends ParticlesInteractorBase {
  constructor(container) {
    super(container);
  }
  async interact(p1) {
    var _a;
    const container = this.container, distance = (_a = p1.retina.attractDistance) !== null && _a !== void 0 ? _a : container.retina.attractDistance, pos1 = p1.getPosition(), query = container.particles.quadTree.queryCircle(pos1, distance);
    for (const p2 of query) {
      if (p1 === p2 || !p2.options.move.attract.enable || p2.destroyed || p2.spawning) {
        continue;
      }
      const pos2 = p2.getPosition(), { dx, dy } = getDistances(pos1, pos2), rotate = p1.options.move.attract.rotate, ax = dx / (rotate.x * 1e3), ay = dy / (rotate.y * 1e3), p1Factor = p2.size.value / p1.size.value, p2Factor = 1 / p1Factor;
      p1.velocity.x -= ax * p1Factor;
      p1.velocity.y -= ay * p1Factor;
      p2.velocity.x += ax * p2Factor;
      p2.velocity.y += ay * p2Factor;
    }
  }
  isEnabled(particle) {
    return particle.options.move.attract.enable;
  }
  clear() {
  }
  reset() {
  }
};

// node_modules/tsparticles-interaction-particles-attract/esm/index.js
async function loadParticlesAttractInteraction(engine) {
  await engine.addInteractor("particlesAttract", (container) => new Attractor2(container));
}

// node_modules/tsparticles-interaction-particles-collisions/esm/Absorb.js
function absorb(p1, p2, fps, pixelRatio) {
  if (p1.getRadius() === void 0 && p2.getRadius() !== void 0) {
    p1.destroy();
  } else if (p1.getRadius() !== void 0 && p2.getRadius() === void 0) {
    p2.destroy();
  } else if (p1.getRadius() !== void 0 && p2.getRadius() !== void 0) {
    if (p1.getRadius() >= p2.getRadius()) {
      const factor = clamp(p1.getRadius() / p2.getRadius(), 0, p2.getRadius()) * fps;
      p1.size.value += factor;
      p2.size.value -= factor;
      if (p2.getRadius() <= pixelRatio) {
        p2.size.value = 0;
        p2.destroy();
      }
    } else {
      const factor = clamp(p2.getRadius() / p1.getRadius(), 0, p1.getRadius()) * fps;
      p1.size.value -= factor;
      p2.size.value += factor;
      if (p1.getRadius() <= pixelRatio) {
        p1.size.value = 0;
        p1.destroy();
      }
    }
  }
}

// node_modules/tsparticles-interaction-particles-collisions/esm/Bounce.js
function bounce(p1, p2) {
  circleBounce(circleBounceDataFromParticle(p1), circleBounceDataFromParticle(p2));
}

// node_modules/tsparticles-interaction-particles-collisions/esm/Destroy.js
function destroy(p1, p2) {
  if (!p1.unbreakable && !p2.unbreakable) {
    bounce(p1, p2);
  }
  if (p1.getRadius() === void 0 && p2.getRadius() !== void 0) {
    p1.destroy();
  } else if (p1.getRadius() !== void 0 && p2.getRadius() === void 0) {
    p2.destroy();
  } else if (p1.getRadius() !== void 0 && p2.getRadius() !== void 0) {
    if (p1.getRadius() >= p2.getRadius()) {
      p2.destroy();
    } else {
      p1.destroy();
    }
  }
}

// node_modules/tsparticles-interaction-particles-collisions/esm/ResolveCollision.js
function resolveCollision(p1, p2, fps, pixelRatio) {
  switch (p1.options.collisions.mode) {
    case "absorb": {
      absorb(p1, p2, fps, pixelRatio);
      break;
    }
    case "bounce": {
      bounce(p1, p2);
      break;
    }
    case "destroy": {
      destroy(p1, p2);
      break;
    }
  }
}

// node_modules/tsparticles-interaction-particles-collisions/esm/Collider.js
var Collider = class extends ParticlesInteractorBase {
  constructor(container) {
    super(container);
  }
  isEnabled(particle) {
    return particle.options.collisions.enable;
  }
  clear() {
  }
  reset() {
  }
  async interact(p1) {
    const container = this.container, pos1 = p1.getPosition(), radius1 = p1.getRadius(), query = container.particles.quadTree.queryCircle(pos1, radius1 * 2);
    for (const p2 of query) {
      if (p1 === p2 || !p2.options.collisions.enable || p1.options.collisions.mode !== p2.options.collisions.mode || p2.destroyed || p2.spawning) {
        continue;
      }
      const pos2 = p2.getPosition();
      const radius2 = p2.getRadius();
      if (Math.abs(Math.round(pos1.z) - Math.round(pos2.z)) > radius1 + radius2) {
        continue;
      }
      const dist = getDistance(pos1, pos2);
      const distP = radius1 + radius2;
      if (dist > distP) {
        continue;
      }
      resolveCollision(p1, p2, container.fpsLimit / 1e3, container.retina.pixelRatio);
    }
  }
};

// node_modules/tsparticles-interaction-particles-collisions/esm/index.js
async function loadParticlesCollisionsInteraction(engine) {
  await engine.addInteractor("particlesCollisions", (container) => new Collider(container));
}

// node_modules/tsparticles-interaction-particles-links/esm/Linker.js
function getLinkDistance(pos1, pos2, optDistance, canvasSize, warp) {
  let distance = getDistance(pos1, pos2);
  if (!warp || distance <= optDistance) {
    return distance;
  }
  const pos2NE = {
    x: pos2.x - canvasSize.width,
    y: pos2.y
  };
  distance = getDistance(pos1, pos2NE);
  if (distance <= optDistance) {
    return distance;
  }
  const pos2SE = {
    x: pos2.x - canvasSize.width,
    y: pos2.y - canvasSize.height
  };
  distance = getDistance(pos1, pos2SE);
  if (distance <= optDistance) {
    return distance;
  }
  const pos2SW = {
    x: pos2.x,
    y: pos2.y - canvasSize.height
  };
  distance = getDistance(pos1, pos2SW);
  return distance;
}
var Linker = class extends ParticlesInteractorBase {
  constructor(container) {
    super(container);
  }
  isEnabled(particle) {
    return particle.options.links.enable;
  }
  clear() {
  }
  reset() {
  }
  async interact(p1) {
    var _a;
    p1.links = [];
    const pos1 = p1.getPosition(), container = this.container, canvasSize = container.canvas.size;
    if (pos1.x < 0 || pos1.y < 0 || pos1.x > canvasSize.width || pos1.y > canvasSize.height) {
      return;
    }
    const linkOpt1 = p1.options.links, optOpacity = linkOpt1.opacity, optDistance = (_a = p1.retina.linksDistance) !== null && _a !== void 0 ? _a : container.retina.linksDistance, warp = linkOpt1.warp, range = warp ? new CircleWarp(pos1.x, pos1.y, optDistance, canvasSize) : new Circle(pos1.x, pos1.y, optDistance), query = container.particles.quadTree.query(range);
    for (const p2 of query) {
      const linkOpt2 = p2.options.links;
      if (p1 === p2 || !linkOpt2.enable || linkOpt1.id !== linkOpt2.id || p2.spawning || p2.destroyed || p1.links.map((t) => t.destination).indexOf(p2) !== -1 || p2.links.map((t) => t.destination).indexOf(p1) !== -1) {
        continue;
      }
      const pos2 = p2.getPosition();
      if (pos2.x < 0 || pos2.y < 0 || pos2.x > canvasSize.width || pos2.y > canvasSize.height) {
        continue;
      }
      const distance = getLinkDistance(pos1, pos2, optDistance, canvasSize, warp && linkOpt2.warp);
      if (distance > optDistance) {
        return;
      }
      const opacityLine = (1 - distance / optDistance) * optOpacity;
      this.setColor(p1);
      p1.links.push({
        destination: p2,
        opacity: opacityLine
      });
    }
  }
  setColor(p1) {
    const container = this.container, linksOptions = p1.options.links;
    let linkColor = linksOptions.id === void 0 ? container.particles.linksColor : container.particles.linksColors.get(linksOptions.id);
    if (!linkColor) {
      const optColor = linksOptions.color;
      linkColor = getLinkRandomColor(optColor, linksOptions.blink, linksOptions.consent);
      if (linksOptions.id === void 0) {
        container.particles.linksColor = linkColor;
      } else {
        container.particles.linksColors.set(linksOptions.id, linkColor);
      }
    }
  }
};

// node_modules/tsparticles-interaction-particles-links/esm/interaction.js
async function loadInteraction(engine) {
  await engine.addInteractor("particlesLinks", (container) => new Linker(container));
}

// node_modules/tsparticles-interaction-particles-links/esm/Utils.js
function drawLinkLine(context, width, begin, end, maxDistance, canvasSize, warp, backgroundMask, composite, colorLine, opacity, shadow) {
  let drawn = false;
  if (getDistance(begin, end) <= maxDistance) {
    drawLine(context, begin, end);
    drawn = true;
  } else if (warp) {
    let pi1;
    let pi2;
    const endNE = {
      x: end.x - canvasSize.width,
      y: end.y
    };
    const d1 = getDistances(begin, endNE);
    if (d1.distance <= maxDistance) {
      const yi = begin.y - d1.dy / d1.dx * begin.x;
      pi1 = { x: 0, y: yi };
      pi2 = { x: canvasSize.width, y: yi };
    } else {
      const endSW = {
        x: end.x,
        y: end.y - canvasSize.height
      };
      const d2 = getDistances(begin, endSW);
      if (d2.distance <= maxDistance) {
        const yi = begin.y - d2.dy / d2.dx * begin.x;
        const xi = -yi / (d2.dy / d2.dx);
        pi1 = { x: xi, y: 0 };
        pi2 = { x: xi, y: canvasSize.height };
      } else {
        const endSE = {
          x: end.x - canvasSize.width,
          y: end.y - canvasSize.height
        };
        const d3 = getDistances(begin, endSE);
        if (d3.distance <= maxDistance) {
          const yi = begin.y - d3.dy / d3.dx * begin.x;
          const xi = -yi / (d3.dy / d3.dx);
          pi1 = { x: xi, y: yi };
          pi2 = { x: pi1.x + canvasSize.width, y: pi1.y + canvasSize.height };
        }
      }
    }
    if (pi1 && pi2) {
      drawLine(context, begin, pi1);
      drawLine(context, end, pi2);
      drawn = true;
    }
  }
  if (!drawn) {
    return;
  }
  context.lineWidth = width;
  if (backgroundMask) {
    context.globalCompositeOperation = composite;
  }
  context.strokeStyle = getStyleFromRgb(colorLine, opacity);
  if (shadow.enable) {
    const shadowColor = rangeColorToRgb(shadow.color);
    if (shadowColor) {
      context.shadowBlur = shadow.blur;
      context.shadowColor = getStyleFromRgb(shadowColor);
    }
  }
  context.stroke();
}
function drawLinkTriangle(context, pos1, pos2, pos3, backgroundMask, composite, colorTriangle, opacityTriangle) {
  drawTriangle(context, pos1, pos2, pos3);
  if (backgroundMask) {
    context.globalCompositeOperation = composite;
  }
  context.fillStyle = getStyleFromRgb(colorTriangle, opacityTriangle);
  context.fill();
}

// node_modules/tsparticles-interaction-particles-links/esm/LinkInstance.js
var LinkInstance = class {
  constructor(container) {
    this.container = container;
  }
  particleCreated(particle) {
    const linkParticle = particle;
    linkParticle.links = [];
  }
  particleDestroyed(particle) {
    const linkParticle = particle;
    linkParticle.links = [];
  }
  drawParticle(context, particle) {
    const linkParticle = particle, container = this.container, particles = container.particles, pOptions = particle.options;
    if (linkParticle.links.length <= 0) {
      return;
    }
    context.save();
    const p1Links = linkParticle.links.filter((l) => {
      const linkFreq = container.particles.getLinkFrequency(linkParticle, l.destination);
      return linkFreq <= pOptions.links.frequency;
    });
    for (const link of p1Links) {
      const p2 = link.destination;
      if (pOptions.links.triangles.enable) {
        const links = p1Links.map((l) => l.destination), vertices = p2.links.filter((t) => {
          const linkFreq = container.particles.getLinkFrequency(p2, t.destination);
          return linkFreq <= p2.options.links.frequency && links.indexOf(t.destination) >= 0;
        });
        if (vertices.length) {
          for (const vertex of vertices) {
            const p3 = vertex.destination, triangleFreq = particles.getTriangleFrequency(linkParticle, p2, p3);
            if (triangleFreq > pOptions.links.triangles.frequency) {
              continue;
            }
            this.drawLinkTriangle(linkParticle, link, vertex);
          }
        }
      }
      if (link.opacity > 0 && container.retina.linksWidth > 0) {
        this.drawLinkLine(linkParticle, link);
      }
    }
    context.restore();
  }
  drawLinkTriangle(p1, link1, link2) {
    var _a;
    const container = this.container, options = container.actualOptions, p2 = link1.destination, p3 = link2.destination, triangleOptions = p1.options.links.triangles, opacityTriangle = (_a = triangleOptions.opacity) !== null && _a !== void 0 ? _a : (link1.opacity + link2.opacity) / 2;
    if (opacityTriangle <= 0) {
      return;
    }
    container.canvas.draw((ctx) => {
      const pos1 = p1.getPosition();
      const pos2 = p2.getPosition();
      const pos3 = p3.getPosition();
      if (getDistance(pos1, pos2) > container.retina.linksDistance || getDistance(pos3, pos2) > container.retina.linksDistance || getDistance(pos3, pos1) > container.retina.linksDistance) {
        return;
      }
      let colorTriangle = rangeColorToRgb(triangleOptions.color);
      if (!colorTriangle) {
        const linksOptions = p1.options.links, linkColor = linksOptions.id !== void 0 ? container.particles.linksColors.get(linksOptions.id) : container.particles.linksColor;
        colorTriangle = getLinkColor(p1, p2, linkColor);
      }
      if (!colorTriangle) {
        return;
      }
      drawLinkTriangle(ctx, pos1, pos2, pos3, options.backgroundMask.enable, options.backgroundMask.composite, colorTriangle, opacityTriangle);
    });
  }
  drawLinkLine(p1, link) {
    const container = this.container, options = container.actualOptions, p2 = link.destination, pos1 = p1.getPosition(), pos2 = p2.getPosition();
    let opacity = link.opacity;
    container.canvas.draw((ctx) => {
      var _a, _b, _c;
      let colorLine;
      const twinkle = (_a = p1.options.twinkle) === null || _a === void 0 ? void 0 : _a.lines;
      if (twinkle === null || twinkle === void 0 ? void 0 : twinkle.enable) {
        const twinkleFreq = twinkle.frequency, twinkleRgb = rangeColorToRgb(twinkle.color), twinkling = Math.random() < twinkleFreq;
        if (twinkling && twinkleRgb) {
          colorLine = twinkleRgb;
          opacity = getRangeValue(twinkle.opacity);
        }
      }
      if (!colorLine) {
        const linksOptions = p1.options.links, linkColor = linksOptions.id !== void 0 ? container.particles.linksColors.get(linksOptions.id) : container.particles.linksColor;
        colorLine = getLinkColor(p1, p2, linkColor);
      }
      if (!colorLine) {
        return;
      }
      const width = (_b = p1.retina.linksWidth) !== null && _b !== void 0 ? _b : container.retina.linksWidth, maxDistance = (_c = p1.retina.linksDistance) !== null && _c !== void 0 ? _c : container.retina.linksDistance;
      drawLinkLine(ctx, width, pos1, pos2, maxDistance, container.canvas.size, p1.options.links.warp, options.backgroundMask.enable, options.backgroundMask.composite, colorLine, opacity, p1.options.links.shadow);
    });
  }
};

// node_modules/tsparticles-interaction-particles-links/esm/plugin.js
var LinksPlugin = class {
  constructor() {
    this.id = "links";
  }
  getPlugin(container) {
    return new LinkInstance(container);
  }
  needsPlugin() {
    return true;
  }
  loadOptions() {
  }
};
async function loadPlugin(engine) {
  const plugin = new LinksPlugin();
  await engine.addPlugin(plugin);
}

// node_modules/tsparticles-interaction-particles-links/esm/index.js
async function loadParticlesLinksInteraction(engine) {
  await loadInteraction(engine);
  await loadPlugin(engine);
}

// node_modules/tsparticles-shape-polygon/esm/PolygonDrawerBase.js
var PolygonDrawerBase = class {
  getSidesCount(particle) {
    var _a, _b;
    const polygon = particle.shapeData;
    return (_b = (_a = polygon === null || polygon === void 0 ? void 0 : polygon.sides) !== null && _a !== void 0 ? _a : polygon === null || polygon === void 0 ? void 0 : polygon.nb_sides) !== null && _b !== void 0 ? _b : 5;
  }
  draw(context, particle, radius) {
    const start = this.getCenter(particle, radius);
    const side = this.getSidesData(particle, radius);
    const sideCount = side.count.numerator * side.count.denominator;
    const decimalSides = side.count.numerator / side.count.denominator;
    const interiorAngleDegrees = 180 * (decimalSides - 2) / decimalSides;
    const interiorAngle = Math.PI - Math.PI * interiorAngleDegrees / 180;
    if (!context) {
      return;
    }
    context.beginPath();
    context.translate(start.x, start.y);
    context.moveTo(0, 0);
    for (let i = 0; i < sideCount; i++) {
      context.lineTo(side.length, 0);
      context.translate(side.length, 0);
      context.rotate(interiorAngle);
    }
  }
};

// node_modules/tsparticles-shape-polygon/esm/PolygonDrawer.js
var PolygonDrawer = class extends PolygonDrawerBase {
  getSidesData(particle, radius) {
    var _a, _b;
    const polygon = particle.shapeData;
    const sides = (_b = (_a = polygon === null || polygon === void 0 ? void 0 : polygon.sides) !== null && _a !== void 0 ? _a : polygon === null || polygon === void 0 ? void 0 : polygon.nb_sides) !== null && _b !== void 0 ? _b : 5;
    return {
      count: {
        denominator: 1,
        numerator: sides
      },
      length: radius * 2.66 / (sides / 3)
    };
  }
  getCenter(particle, radius) {
    const sides = this.getSidesCount(particle);
    return {
      x: -radius / (sides / 3.5),
      y: -radius / (2.66 / 3.5)
    };
  }
};

// node_modules/tsparticles-shape-polygon/esm/TriangleDrawer.js
var TriangleDrawer = class extends PolygonDrawerBase {
  getSidesCount() {
    return 3;
  }
  getSidesData(particle, radius) {
    return {
      count: {
        denominator: 2,
        numerator: 3
      },
      length: radius * 2
    };
  }
  getCenter(particle, radius) {
    return {
      x: -radius,
      y: radius / 1.66
    };
  }
};

// node_modules/tsparticles-shape-polygon/esm/index.js
async function loadGenericPolygonShape(engine) {
  await engine.addShape("polygon", new PolygonDrawer());
}
async function loadTriangleShape(engine) {
  await engine.addShape("triangle", new TriangleDrawer());
}
async function loadPolygonShape(engine) {
  await loadGenericPolygonShape(engine);
  await loadTriangleShape(engine);
}

// node_modules/tsparticles-updater-size/esm/SizeUpdater.js
function checkDestroy2(particle, value, minValue, maxValue) {
  switch (particle.options.size.animation.destroy) {
    case "max":
      if (value >= maxValue) {
        particle.destroy();
      }
      break;
    case "min":
      if (value <= minValue) {
        particle.destroy();
      }
      break;
  }
}
function updateSize(particle, delta) {
  var _a, _b, _c, _d, _e;
  const sizeVelocity = ((_a = particle.size.velocity) !== null && _a !== void 0 ? _a : 0) * delta.factor, minValue = particle.size.min, maxValue = particle.size.max, decay = (_b = particle.size.decay) !== null && _b !== void 0 ? _b : 1;
  if (particle.destroyed || !particle.size.enable || ((_c = particle.size.maxLoops) !== null && _c !== void 0 ? _c : 0) > 0 && ((_d = particle.size.loops) !== null && _d !== void 0 ? _d : 0) > ((_e = particle.size.maxLoops) !== null && _e !== void 0 ? _e : 0)) {
    return;
  }
  switch (particle.size.status) {
    case 0:
      if (particle.size.value >= maxValue) {
        particle.size.status = 1;
        if (!particle.size.loops) {
          particle.size.loops = 0;
        }
        particle.size.loops++;
      } else {
        particle.size.value += sizeVelocity;
      }
      break;
    case 1:
      if (particle.size.value <= minValue) {
        particle.size.status = 0;
        if (!particle.size.loops) {
          particle.size.loops = 0;
        }
        particle.size.loops++;
      } else {
        particle.size.value -= sizeVelocity;
      }
  }
  if (particle.size.velocity && decay !== 1) {
    particle.size.velocity *= decay;
  }
  checkDestroy2(particle, particle.size.value, minValue, maxValue);
  if (!particle.destroyed) {
    particle.size.value = clamp(particle.size.value, minValue, maxValue);
  }
}
var SizeUpdater = class {
  init() {
  }
  isEnabled(particle) {
    var _a, _b, _c, _d;
    return !particle.destroyed && !particle.spawning && particle.size.enable && (((_a = particle.size.maxLoops) !== null && _a !== void 0 ? _a : 0) <= 0 || ((_b = particle.size.maxLoops) !== null && _b !== void 0 ? _b : 0) > 0 && ((_c = particle.size.loops) !== null && _c !== void 0 ? _c : 0) < ((_d = particle.size.maxLoops) !== null && _d !== void 0 ? _d : 0));
  }
  update(particle, delta) {
    if (!this.isEnabled(particle)) {
      return;
    }
    updateSize(particle, delta);
  }
};

// node_modules/tsparticles-updater-size/esm/index.js
async function loadSizeUpdater(engine) {
  await engine.addParticleUpdater("size", () => new SizeUpdater());
}

// node_modules/tsparticles-shape-square/esm/SquareDrawer.js
var fixFactor = Math.sqrt(2);
var SquareDrawer = class {
  getSidesCount() {
    return 4;
  }
  draw(context, particle, radius) {
    context.rect(-radius / fixFactor, -radius / fixFactor, radius * 2 / fixFactor, radius * 2 / fixFactor);
  }
};

// node_modules/tsparticles-shape-square/esm/index.js
async function loadSquareShape(engine) {
  const drawer = new SquareDrawer();
  await engine.addShape("edge", drawer);
  await engine.addShape("square", drawer);
}

// node_modules/tsparticles-shape-star/esm/StarDrawer.js
var StarDrawer = class {
  getSidesCount(particle) {
    var _a, _b;
    const star = particle.shapeData;
    return (_b = (_a = star === null || star === void 0 ? void 0 : star.sides) !== null && _a !== void 0 ? _a : star === null || star === void 0 ? void 0 : star.nb_sides) !== null && _b !== void 0 ? _b : 5;
  }
  draw(context, particle, radius) {
    var _a;
    const star = particle.shapeData;
    const sides = this.getSidesCount(particle);
    const inset = (_a = star === null || star === void 0 ? void 0 : star.inset) !== null && _a !== void 0 ? _a : 2;
    context.moveTo(0, 0 - radius);
    for (let i = 0; i < sides; i++) {
      context.rotate(Math.PI / sides);
      context.lineTo(0, 0 - radius * inset);
      context.rotate(Math.PI / sides);
      context.lineTo(0, 0 - radius);
    }
  }
};

// node_modules/tsparticles-shape-star/esm/index.js
async function loadStarShape(engine) {
  await engine.addShape("star", new StarDrawer());
}

// node_modules/tsparticles-updater-stroke-color/esm/StrokeColorUpdater.js
function updateColorValue2(delta, value, valueAnimation, max, decrease) {
  var _a, _b;
  const colorValue = value;
  if (!colorValue || !colorValue.enable) {
    return;
  }
  const offset = randomInRange(valueAnimation.offset), velocity = ((_a = value.velocity) !== null && _a !== void 0 ? _a : 0) * delta.factor + offset * 3.6, decay = (_b = value.decay) !== null && _b !== void 0 ? _b : 1;
  if (!decrease || colorValue.status === 0) {
    colorValue.value += velocity;
    if (decrease && colorValue.value > max) {
      colorValue.status = 1;
      colorValue.value -= colorValue.value % max;
    }
  } else {
    colorValue.value -= velocity;
    if (colorValue.value < 0) {
      colorValue.status = 0;
      colorValue.value += colorValue.value;
    }
  }
  if (colorValue.velocity && decay !== 1) {
    colorValue.velocity *= decay;
  }
  if (colorValue.value > max) {
    colorValue.value %= max;
  }
}
function updateStrokeColor(particle, delta) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
  if (!((_a = particle.stroke) === null || _a === void 0 ? void 0 : _a.color)) {
    return;
  }
  const animationOptions = particle.stroke.color.animation, h = (_c = (_b = particle.strokeColor) === null || _b === void 0 ? void 0 : _b.h) !== null && _c !== void 0 ? _c : (_d = particle.color) === null || _d === void 0 ? void 0 : _d.h;
  if (h) {
    updateColorValue2(delta, h, animationOptions.h, 360, false);
  }
  const s = (_f = (_e = particle.strokeColor) === null || _e === void 0 ? void 0 : _e.s) !== null && _f !== void 0 ? _f : (_g = particle.color) === null || _g === void 0 ? void 0 : _g.s;
  if (s) {
    updateColorValue2(delta, s, animationOptions.s, 100, true);
  }
  const l = (_j = (_h = particle.strokeColor) === null || _h === void 0 ? void 0 : _h.l) !== null && _j !== void 0 ? _j : (_k = particle.color) === null || _k === void 0 ? void 0 : _k.l;
  if (l) {
    updateColorValue2(delta, l, animationOptions.l, 100, true);
  }
}
var StrokeColorUpdater = class {
  constructor(container) {
    this.container = container;
  }
  init(particle) {
    var _a, _b;
    const container = this.container;
    particle.stroke = particle.options.stroke instanceof Array ? itemFromArray(particle.options.stroke, particle.id, particle.options.reduceDuplicates) : particle.options.stroke;
    particle.strokeWidth = particle.stroke.width * container.retina.pixelRatio;
    const strokeHslColor = (_a = rangeColorToHsl(particle.stroke.color)) !== null && _a !== void 0 ? _a : particle.getFillColor();
    if (strokeHslColor) {
      particle.strokeColor = getHslAnimationFromHsl(strokeHslColor, (_b = particle.stroke.color) === null || _b === void 0 ? void 0 : _b.animation, container.retina.reduceFactor);
    }
  }
  isEnabled(particle) {
    var _a, _b, _c, _d;
    const color = (_a = particle.stroke) === null || _a === void 0 ? void 0 : _a.color;
    return !particle.destroyed && !particle.spawning && !!color && (((_b = particle.strokeColor) === null || _b === void 0 ? void 0 : _b.h.value) !== void 0 && color.animation.h.enable || ((_c = particle.strokeColor) === null || _c === void 0 ? void 0 : _c.s.value) !== void 0 && color.animation.s.enable || ((_d = particle.strokeColor) === null || _d === void 0 ? void 0 : _d.l.value) !== void 0 && color.animation.l.enable);
  }
  update(particle, delta) {
    if (!this.isEnabled(particle)) {
      return;
    }
    updateStrokeColor(particle, delta);
  }
};

// node_modules/tsparticles-updater-stroke-color/esm/index.js
async function loadStrokeColorUpdater(engine) {
  await engine.addParticleUpdater("strokeColor", (container) => new StrokeColorUpdater(container));
}

// node_modules/tsparticles-shape-text/esm/TextDrawer.js
var validTypes = ["text", "character", "char"];
var TextDrawer = class {
  getSidesCount() {
    return 12;
  }
  async init(container) {
    const options = container.actualOptions;
    if (validTypes.find((t) => isInArray(t, options.particles.shape.type))) {
      const shapeOptions = validTypes.map((t) => options.particles.shape.options[t]).find((t) => !!t);
      if (shapeOptions instanceof Array) {
        const promises = [];
        for (const character of shapeOptions) {
          const charShape = character;
          promises.push(loadFont(charShape.font, charShape.weight));
        }
        await Promise.allSettled(promises);
      } else {
        if (shapeOptions !== void 0) {
          const charShape = shapeOptions;
          await loadFont(charShape.font, charShape.weight);
        }
      }
    }
  }
  draw(context, particle, radius, opacity) {
    var _a, _b, _c;
    const character = particle.shapeData;
    if (character === void 0) {
      return;
    }
    const textData = character.value;
    if (textData === void 0) {
      return;
    }
    const textParticle = particle;
    if (textParticle.text === void 0) {
      textParticle.text = textData instanceof Array ? itemFromArray(textData, particle.randomIndexData) : textData;
    }
    const text = textParticle.text;
    const style = (_a = character.style) !== null && _a !== void 0 ? _a : "";
    const weight = (_b = character.weight) !== null && _b !== void 0 ? _b : "400";
    const size = Math.round(radius) * 2;
    const font = (_c = character.font) !== null && _c !== void 0 ? _c : "Verdana";
    const fill = particle.fill;
    const offsetX = text.length * radius / 2;
    context.font = `${style} ${weight} ${size}px "${font}"`;
    const pos = {
      x: -offsetX,
      y: radius / 2
    };
    context.globalAlpha = opacity;
    if (fill) {
      context.fillText(text, pos.x, pos.y);
    } else {
      context.strokeText(text, pos.x, pos.y);
    }
    context.globalAlpha = 1;
  }
};

// node_modules/tsparticles-shape-text/esm/index.js
async function loadTextShape(engine) {
  const drawer = new TextDrawer();
  for (const type of validTypes) {
    await engine.addShape(type, drawer);
  }
}

// node_modules/tsparticles-slim/esm/index.js
async function loadSlim(engine) {
  await loadBaseMover(engine);
  await loadParallaxMover(engine);
  await loadExternalAttractInteraction(engine);
  await loadExternalBounceInteraction(engine);
  await loadExternalBubbleInteraction(engine);
  await loadExternalConnectInteraction(engine);
  await loadExternalGrabInteraction(engine);
  await loadExternalPauseInteraction(engine);
  await loadExternalPushInteraction(engine);
  await loadExternalRemoveInteraction(engine);
  await loadExternalRepulseInteraction(engine);
  await loadParticlesAttractInteraction(engine);
  await loadParticlesCollisionsInteraction(engine);
  await loadParticlesLinksInteraction(engine);
  await loadCircleShape(engine);
  await loadImageShape(engine);
  await loadLineShape(engine);
  await loadPolygonShape(engine);
  await loadSquareShape(engine);
  await loadStarShape(engine);
  await loadTextShape(engine);
  await loadLifeUpdater(engine);
  await loadOpacityUpdater(engine);
  await loadSizeUpdater(engine);
  await loadAngleUpdater(engine);
  await loadColorUpdater(engine);
  await loadStrokeColorUpdater(engine);
  await loadOutModesUpdater(engine);
  await initPjs(engine);
}

// node_modules/tsparticles-updater-tilt/esm/Options/Classes/TiltAnimation.js
var TiltAnimation = class {
  constructor() {
    this.enable = false;
    this.speed = 0;
    this.decay = 0;
    this.sync = false;
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.enable !== void 0) {
      this.enable = data.enable;
    }
    if (data.speed !== void 0) {
      this.speed = setRangeValue(data.speed);
    }
    if (data.decay !== void 0) {
      this.decay = setRangeValue(data.decay);
    }
    if (data.sync !== void 0) {
      this.sync = data.sync;
    }
  }
};

// node_modules/tsparticles-updater-tilt/esm/Options/Classes/Tilt.js
var Tilt = class extends ValueWithRandom {
  constructor() {
    super();
    this.animation = new TiltAnimation();
    this.direction = "clockwise";
    this.enable = false;
    this.value = 0;
  }
  load(data) {
    super.load(data);
    if (!data) {
      return;
    }
    this.animation.load(data.animation);
    if (data.direction !== void 0) {
      this.direction = data.direction;
    }
    if (data.enable !== void 0) {
      this.enable = data.enable;
    }
  }
};

// node_modules/tsparticles-updater-tilt/esm/TiltUpdater.js
function updateTilt(particle, delta) {
  var _a, _b;
  if (!particle.tilt || !particle.options.tilt) {
    return;
  }
  const tilt = particle.options.tilt, tiltAnimation = tilt.animation, speed = ((_a = particle.tilt.velocity) !== null && _a !== void 0 ? _a : 0) * delta.factor, max = 2 * Math.PI, decay = (_b = particle.tilt.decay) !== null && _b !== void 0 ? _b : 1;
  if (!tiltAnimation.enable) {
    return;
  }
  switch (particle.tilt.status) {
    case 0:
      particle.tilt.value += speed;
      if (particle.tilt.value > max) {
        particle.tilt.value -= max;
      }
      break;
    case 1:
    default:
      particle.tilt.value -= speed;
      if (particle.tilt.value < 0) {
        particle.tilt.value += max;
      }
      break;
  }
  if (particle.tilt.velocity && decay !== 1) {
    particle.tilt.velocity *= decay;
  }
}
var TiltUpdater = class {
  constructor(container) {
    this.container = container;
  }
  init(particle) {
    var _a;
    const tiltOptions = particle.options.tilt;
    if (!tiltOptions) {
      return;
    }
    particle.tilt = {
      enable: tiltOptions.enable,
      value: getRangeValue(tiltOptions.value) * Math.PI / 180,
      sinDirection: Math.random() >= 0.5 ? 1 : -1,
      cosDirection: Math.random() >= 0.5 ? 1 : -1
    };
    let tiltDirection = tiltOptions.direction;
    if (tiltDirection === "random") {
      const index = Math.floor(Math.random() * 2);
      tiltDirection = index > 0 ? "counter-clockwise" : "clockwise";
    }
    switch (tiltDirection) {
      case "counter-clockwise":
      case "counterClockwise":
        particle.tilt.status = 1;
        break;
      case "clockwise":
        particle.tilt.status = 0;
        break;
    }
    const tiltAnimation = (_a = particle.options.tilt) === null || _a === void 0 ? void 0 : _a.animation;
    if (tiltAnimation === null || tiltAnimation === void 0 ? void 0 : tiltAnimation.enable) {
      particle.tilt.decay = 1 - getRangeValue(tiltAnimation.decay);
      particle.tilt.velocity = getRangeValue(tiltAnimation.speed) / 360 * this.container.retina.reduceFactor;
      if (!tiltAnimation.sync) {
        particle.tilt.velocity *= Math.random();
      }
    }
  }
  isEnabled(particle) {
    var _a;
    const tiltAnimation = (_a = particle.options.tilt) === null || _a === void 0 ? void 0 : _a.animation;
    return !particle.destroyed && !particle.spawning && !!(tiltAnimation === null || tiltAnimation === void 0 ? void 0 : tiltAnimation.enable);
  }
  update(particle, delta) {
    if (!this.isEnabled(particle)) {
      return;
    }
    updateTilt(particle, delta);
  }
  loadOptions(options, ...sources) {
    for (const source of sources) {
      if (!(source === null || source === void 0 ? void 0 : source.tilt)) {
        continue;
      }
      if (!options.tilt) {
        options.tilt = new Tilt();
      }
      options.tilt.load(source.tilt);
    }
  }
};

// node_modules/tsparticles-updater-tilt/esm/index.js
async function loadTiltUpdater(engine) {
  await engine.addParticleUpdater("tilt", (container) => new TiltUpdater(container));
}

// node_modules/tsparticles-updater-twinkle/esm/Options/Classes/TwinkleValues.js
var TwinkleValues = class {
  constructor() {
    this.enable = false;
    this.frequency = 0.05;
    this.opacity = 1;
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.color !== void 0) {
      this.color = OptionsColor.create(this.color, data.color);
    }
    if (data.enable !== void 0) {
      this.enable = data.enable;
    }
    if (data.frequency !== void 0) {
      this.frequency = data.frequency;
    }
    if (data.opacity !== void 0) {
      this.opacity = setRangeValue(data.opacity);
    }
  }
};

// node_modules/tsparticles-updater-twinkle/esm/Options/Classes/Twinkle.js
var Twinkle = class {
  constructor() {
    this.lines = new TwinkleValues();
    this.particles = new TwinkleValues();
  }
  load(data) {
    if (!data) {
      return;
    }
    this.lines.load(data.lines);
    this.particles.load(data.particles);
  }
};

// node_modules/tsparticles-updater-twinkle/esm/TwinkleUpdater.js
var TwinkleUpdater = class {
  getColorStyles(particle, context, radius, opacity) {
    const pOptions = particle.options, twinkleOptions = pOptions.twinkle;
    if (!twinkleOptions) {
      return {};
    }
    const twinkle = twinkleOptions.particles, twinkling = twinkle.enable && Math.random() < twinkle.frequency, zIndexOptions = particle.options.zIndex, zOpacityFactor = (1 - particle.zIndexFactor) ** zIndexOptions.opacityRate, twinklingOpacity = twinkling ? getRangeValue(twinkle.opacity) * zOpacityFactor : opacity, twinkleRgb = rangeColorToHsl(twinkle.color), twinkleStyle = twinkleRgb ? getStyleFromHsl(twinkleRgb, twinklingOpacity) : void 0, res = {}, needsTwinkle = twinkling && twinkleStyle;
    res.fill = needsTwinkle ? twinkleStyle : void 0;
    res.stroke = needsTwinkle ? twinkleStyle : void 0;
    return res;
  }
  init() {
  }
  isEnabled(particle) {
    const pOptions = particle.options, twinkleOptions = pOptions.twinkle;
    if (!twinkleOptions) {
      return false;
    }
    return twinkleOptions.particles.enable;
  }
  update() {
  }
  loadOptions(options, ...sources) {
    for (const source of sources) {
      if (!(source === null || source === void 0 ? void 0 : source.twinkle)) {
        continue;
      }
      if (!options.twinkle) {
        options.twinkle = new Twinkle();
      }
      options.twinkle.load(source.twinkle);
    }
  }
};

// node_modules/tsparticles-updater-twinkle/esm/index.js
async function loadTwinkleUpdater(engine) {
  await engine.addParticleUpdater("twinkle", () => new TwinkleUpdater());
}

// node_modules/tsparticles-updater-wobble/esm/Options/Classes/WobbleSpeed.js
var WobbleSpeed = class {
  constructor() {
    this.angle = 50;
    this.move = 10;
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.angle !== void 0) {
      this.angle = setRangeValue(data.angle);
    }
    if (data.move !== void 0) {
      this.move = setRangeValue(data.move);
    }
  }
};

// node_modules/tsparticles-updater-wobble/esm/Options/Classes/Wobble.js
var Wobble = class {
  constructor() {
    this.distance = 5;
    this.enable = false;
    this.speed = new WobbleSpeed();
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.distance !== void 0) {
      this.distance = setRangeValue(data.distance);
    }
    if (data.enable !== void 0) {
      this.enable = data.enable;
    }
    if (data.speed !== void 0) {
      if (typeof data.speed === "number") {
        this.speed.load({ angle: data.speed });
      } else {
        const rangeSpeed = data.speed;
        if (rangeSpeed.min !== void 0) {
          this.speed.load({ angle: rangeSpeed });
        } else {
          this.speed.load(data.speed);
        }
      }
    }
  }
};

// node_modules/tsparticles-updater-wobble/esm/WobbleUpdater.js
function updateWobble(particle, delta) {
  var _a;
  const wobble = particle.options.wobble;
  if (!(wobble === null || wobble === void 0 ? void 0 : wobble.enable) || !particle.wobble) {
    return;
  }
  const angleSpeed = particle.wobble.angleSpeed * delta.factor, moveSpeed = particle.wobble.moveSpeed * delta.factor, distance = moveSpeed * (((_a = particle.retina.wobbleDistance) !== null && _a !== void 0 ? _a : 0) * delta.factor) / (1e3 / 60), max = 2 * Math.PI;
  particle.wobble.angle += angleSpeed;
  if (particle.wobble.angle > max) {
    particle.wobble.angle -= max;
  }
  particle.position.x += distance * Math.cos(particle.wobble.angle);
  particle.position.y += distance * Math.abs(Math.sin(particle.wobble.angle));
}
var WobbleUpdater = class {
  constructor(container) {
    this.container = container;
  }
  init(particle) {
    var _a;
    const wobbleOpt = particle.options.wobble;
    if (wobbleOpt === null || wobbleOpt === void 0 ? void 0 : wobbleOpt.enable) {
      particle.wobble = {
        angle: Math.random() * Math.PI * 2,
        angleSpeed: getRangeValue(wobbleOpt.speed.angle) / 360,
        moveSpeed: getRangeValue(wobbleOpt.speed.move) / 10
      };
    } else {
      particle.wobble = {
        angle: 0,
        angleSpeed: 0,
        moveSpeed: 0
      };
    }
    particle.retina.wobbleDistance = getRangeValue((_a = wobbleOpt === null || wobbleOpt === void 0 ? void 0 : wobbleOpt.distance) !== null && _a !== void 0 ? _a : 0) * this.container.retina.pixelRatio;
  }
  isEnabled(particle) {
    var _a;
    return !particle.destroyed && !particle.spawning && !!((_a = particle.options.wobble) === null || _a === void 0 ? void 0 : _a.enable);
  }
  update(particle, delta) {
    if (!this.isEnabled(particle)) {
      return;
    }
    updateWobble(particle, delta);
  }
  loadOptions(options, ...sources) {
    for (const source of sources) {
      if (!(source === null || source === void 0 ? void 0 : source.wobble)) {
        continue;
      }
      if (!options.wobble) {
        options.wobble = new Wobble();
      }
      options.wobble.load(source.wobble);
    }
  }
};

// node_modules/tsparticles-updater-wobble/esm/index.js
async function loadWobbleUpdater(engine) {
  await engine.addParticleUpdater("wobble", (container) => new WobbleUpdater(container));
}

// node_modules/tsparticles/esm/index.js
async function loadFull(engine) {
  await loadSlim(engine);
  await loadRollUpdater(engine);
  await loadTiltUpdater(engine);
  await loadTwinkleUpdater(engine);
  await loadWobbleUpdater(engine);
  await loadExternalTrailInteraction(engine);
  await loadAbsorbersPlugin(engine);
  await loadEmittersPlugin(engine);
  await loadPolygonMaskPlugin(engine);
}
export {
  loadFull
};
//# sourceMappingURL=tsparticles.js.map
