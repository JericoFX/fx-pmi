import { c as create_ssr_component, v as validate_component, o as onDestroy, a as subscribe } from "../../chunks/ssr.js";
import { I as Icon, a as IconCar, s as store } from "../../chunks/store.js";
import { p as page } from "../../chunks/stores.js";
const IconSettings = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"
      }
    ],
    [
      "path",
      {
        "d": "M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "settings" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const IconSettings$1 = IconSettings;
const IconShieldCheck = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M11.46 20.846a12 12 0 0 1 -7.96 -14.846a12 12 0 0 0 8.5 -3a12 12 0 0 0 8.5 3a12 12 0 0 1 -.09 7.06"
      }
    ],
    ["path", { "d": "M15 19l2 2l4 -4" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "shield-check" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const IconShieldCheck$1 = IconShieldCheck;
const IconUser = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["path", { "d": "M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" }],
    [
      "path",
      {
        "d": "M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "user" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const IconUser$1 = IconUser;
const app = "";
function useNuiEvent(action, handler) {
  const eventListener = (event) => {
    const { action: eventAction, data } = event.data;
    eventAction === action && handler(data);
  };
  onDestroy(() => window.removeEventListener("message", eventListener));
}
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".active.svelte-1aq0tsp{--tw-shadow:inset 0 2px 4px 0 rgb(0 0 0 / 0.05);--tw-shadow-colored:inset 0 2px 4px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000),\n			var(--tw-shadow)}*{overflow:hidden}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $open, $$unsubscribe_open;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const { changeNUI, setData, open } = store();
  $$unsubscribe_open = subscribe(open, (value) => $open = value);
  useNuiEvent("openNUI", ({ open: open2, mydata }) => {
    changeNUI(open2);
  });
  $$result.css.add(css);
  $$unsubscribe_open();
  $$unsubscribe_page();
  return `${$open ? `<div class="w-screen h-screen relative"><div class="w-[60vw] h-[70vh] bg-foreground absolute rounded m-auto top-0 bottom-0 left-0 right-0"><div class="absolute left-0 w-[5vw] h-full bg-background shadow-md shadow-black rounded"><div class="flex flex-col justify-evenly items-center h-full"><a href="/"><div class="${[
    "w-12 h-12 transition-all hover:shadow-xl shadow-black justify-center items-center flex rounded-xl svelte-1aq0tsp",
    $page.route.id === "/" ? "active" : ""
  ].join(" ").trim()}">${validate_component(IconShieldCheck$1, "IconShieldCheck").$$render($$result, { class: "" }, {}, {})}</div></a> <a href="/user"><div class="${[
    "w-12 h-12 transition-all hover:shadow-md shadow-black justify-center items-center flex rounded-xl svelte-1aq0tsp",
    $page.route.id === "/user" ? "active" : ""
  ].join(" ").trim()}">${validate_component(IconUser$1, "IconUser").$$render($$result, {}, {}, {})}</div></a> <a href="/vehicle"><div class="${[
    "w-12 h-12 transition-all hover:shadow-md shadow-black justify-center items-center flex rounded-xl svelte-1aq0tsp",
    $page.route.id === "/vehicle" ? "active" : ""
  ].join(" ").trim()}">${validate_component(IconCar, "IconCar").$$render($$result, {}, {}, {})}</div></a> <a href="/settings"><div class="${[
    "w-12 h-12 transition-all hover:shadow-md shadow-black justify-center items-center flex rounded-xl svelte-1aq0tsp",
    $page.route.id === "/vehicle" ? "active" : ""
  ].join(" ").trim()}">${validate_component(IconSettings$1, "IconSettings").$$render($$result, {}, {}, {})}</div></a></div></div> <div class="absolute right-0 w-[55vw] h-full rounded p-3">${slots.default ? slots.default({}) : ``}</div></div></div>` : ``}`;
});
export {
  Layout as default
};
