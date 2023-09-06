import { c as create_ssr_component, f as compute_rest_props, h as spread, i as escape_object, k as escape_attribute_value, j as each, v as validate_component } from "./ssr.js";
import { i as is_void } from "./names.js";
import { w as writable } from "./index.js";
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};
const Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["name", "color", "size", "stroke", "iconNode"]);
  let { name } = $$props;
  let { color = "currentColor" } = $$props;
  let { size = 24 } = $$props;
  let { stroke = 2 } = $$props;
  let { iconNode } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.stroke === void 0 && $$bindings.stroke && stroke !== void 0)
    $$bindings.stroke(stroke);
  if ($$props.iconNode === void 0 && $$bindings.iconNode && iconNode !== void 0)
    $$bindings.iconNode(iconNode);
  return `<svg${spread(
    [
      escape_object(defaultAttributes),
      escape_object($$restProps),
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      { stroke: escape_attribute_value(color) },
      {
        "stroke-width": escape_attribute_value(stroke)
      },
      {
        class: escape_attribute_value(`tabler-icon tabler-icon-${name} ${$$props.class ?? ""}`)
      }
    ],
    {}
  )}>${each(iconNode, ([tag, attrs]) => {
    return `${((tag$1) => {
      return tag$1 ? `<${tag}${spread([escape_object(attrs)], {})}>${is_void(tag$1) ? "" : ``}${is_void(tag$1) ? "" : `</${tag$1}>`}` : "";
    })(tag)}`;
  })}${slots.default ? slots.default({}) : ``}</svg>`;
});
const Icon$1 = Icon;
const IconCar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"
      }
    ],
    [
      "path",
      {
        "d": "M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"
      }
    ],
    [
      "path",
      {
        "d": "M5 17h-2v-6l2 -5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5"
      }
    ]
  ];
  return `${validate_component(Icon$1, "Icon").$$render($$result, Object.assign({}, { name: "car" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const IconCar$1 = IconCar;
const store = () => {
  const data = {
    playerData: writable([]),
    myData: writable({}),
    open: writable(false)
  };
  const { update, subscribe, set } = writable(data);
  const methods = {
    setData: (datas) => {
      data.playerData.set(datas);
    },
    updateDuty: (cid, duty) => {
      data.playerData.update((e) => {
        const _d = e.filter((s) => s.citizenid === cid)[0];
        _d.duty = duty;
        e = e;
        return e;
      });
    },
    changeVehicle: (cid) => {
      data.playerData.update((e) => {
        const _d = e.filter((s) => s.citizenid === cid)[0];
        _d.vehicle = null;
        e = e;
        return e;
      });
    },
    changeNUI: (op) => {
      data.open.set(op);
    }
  };
  return {
    update,
    set,
    subscribe,
    ...data,
    ...methods
  };
};
export {
  Icon$1 as I,
  IconCar$1 as a,
  store as s
};
