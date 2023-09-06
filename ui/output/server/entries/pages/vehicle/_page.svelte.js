import { c as create_ssr_component, f as compute_rest_props, a as subscribe, h as spread, i as escape_object, v as validate_component } from "../../../chunks/ssr.js";
import { r as removeUndefined, g as getOptionUpdater, d as cn, I as Input, B as Button } from "../../../chunks/input.js";
import { C as Card, a as Card_header, b as Card_title, c as Card_content, d as Card_footer } from "../../../chunks/card-title.js";
import "clsx";
import { t as toWritableStores, b as builder, L as Label, B as Badge } from "../../../chunks/label.js";
import "dequal";
const defaults = {
  orientation: "horizontal",
  decorative: false
};
const createSeparator = (props) => {
  const withDefaults = { ...defaults, ...props };
  const options = toWritableStores(withDefaults);
  const { orientation, decorative } = options;
  const root = builder("separator", {
    stores: [orientation, decorative],
    returned: ([$orientation, $decorative]) => {
      const ariaOrientation = $orientation === "vertical" ? $orientation : void 0;
      return {
        role: $decorative ? "none" : "separator",
        "aria-orientation": ariaOrientation,
        "aria-hidden": $decorative,
        "data-orientation": $orientation
      };
    }
  });
  return {
    elements: {
      root
    },
    options
  };
};
const ctx = {
  get
};
function get(props) {
  const separator = createSeparator(removeUndefined(props));
  return {
    ...separator,
    updateOption: getOptionUpdater(separator.options)
  };
}
const Separator$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["orientation", "decorative", "asChild"]);
  let $root, $$unsubscribe_root;
  let { orientation = "horizontal" } = $$props;
  let { decorative = true } = $$props;
  let { asChild = false } = $$props;
  const { elements: { root }, updateOption } = ctx.get({ orientation, decorative });
  $$unsubscribe_root = subscribe(root, (value) => $root = value);
  if ($$props.orientation === void 0 && $$bindings.orientation && orientation !== void 0)
    $$bindings.orientation(orientation);
  if ($$props.decorative === void 0 && $$bindings.decorative && decorative !== void 0)
    $$bindings.decorative(decorative);
  if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0)
    $$bindings.asChild(asChild);
  {
    updateOption("orientation", orientation);
  }
  {
    updateOption("decorative", decorative);
  }
  $$unsubscribe_root();
  return `${asChild ? `${slots.default ? slots.default({ builder: $root }) : ``}` : `<div${spread([escape_object($root), escape_object($$restProps)], {})}></div>`}`;
});
const Separator = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class", "orientation", "decorative"]);
  let { class: className = void 0 } = $$props;
  let { orientation = "horizontal" } = $$props;
  let { decorative = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.orientation === void 0 && $$bindings.orientation && orientation !== void 0)
    $$bindings.orientation(orientation);
  if ($$props.decorative === void 0 && $$bindings.decorative && decorative !== void 0)
    $$bindings.decorative(decorative);
  return `${validate_component(Separator$1, "SeparatorPrimitive.Root").$$render(
    $$result,
    Object.assign(
      {},
      {
        class: cn(
          "shrink-0 bg-border",
          orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
          className
        )
      },
      { orientation },
      { decorative },
      $$restProps
    ),
    {},
    {}
  )}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main class="w-full h-full relative"><p class="text-background text-4xl mb-5" data-svelte-h="svelte-qnod5z">Vehicle Explorer</p> <form class="flex justify-center w-full items-start space-x-2"><div class="flex justify-center items-center">${validate_component(Input, "Input").$$render(
    $$result,
    {
      class: "w-[30vw]",
      type: "text",
      placeholder: "Vehicle Plate"
    },
    {},
    {}
  )} ${validate_component(Button, "Button").$$render($$result, { type: "submit" }, {}, {
    default: () => {
      return `Find`;
    }
  })}</div></form> <div class="flex justify-center items-center w-full h-full space-x-2">${validate_component(Card, "Card.Root").$$render($$result, { class: "bg-foreground w-[40vw]" }, {}, {
    default: () => {
      return `${validate_component(Card_header, "Card.Header").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Card_title, "Card.Title").$$render($$result, { class: "text-background" }, {}, {
            default: () => {
              return `Vehicle Info`;
            }
          })} `;
        }
      })} ${validate_component(Card_content, "Card.Content").$$render($$result, { class: "text-background  gap-3" }, {}, {
        default: () => {
          return `${validate_component(Label, "Label").$$render($$result, { for: "name" }, {}, {
            default: () => {
              return `Model:`;
            }
          })} ${validate_component(Input, "Input").$$render(
            $$result,
            {
              class: "text-background",
              id: "name",
              readonly: true
            },
            {},
            {}
          )} <br> ${validate_component(Label, "Label").$$render($$result, { for: "color" }, {}, {
            default: () => {
              return `Color:`;
            }
          })} ${validate_component(Input, "Input").$$render(
            $$result,
            {
              class: "text-background",
              id: "color",
              readonly: true
            },
            {},
            {}
          )} <br> ${validate_component(Badge, "Badge").$$render(
            $$result,
            {
              variant: "destructive",
              class: "text-center"
            },
            {},
            {
              default: () => {
                return `Warrant Found`;
              }
            }
          )}`;
        }
      })} ${validate_component(Separator, "Separator").$$render($$result, {}, {}, {})} ${validate_component(Card_footer, "Card.Footer").$$render($$result, { class: "flex justify-evenly w-full mt-2" }, {}, {
        default: () => {
          return `${validate_component(Button, "Button").$$render($$result, { variant: "destructive" }, {}, {
            default: () => {
              return `Warrant`;
            }
          })} ${validate_component(Button, "Button").$$render($$result, { variant: "secondary" }, {}, {
            default: () => {
              return `B.O.L.O`;
            }
          })}`;
        }
      })}`;
    }
  })}</div></main>`;
});
export {
  Page as default
};
