import { c as create_ssr_component, f as compute_rest_props, h as spread, k as escape_attribute_value, i as escape_object, v as validate_component } from "../../../chunks/ssr.js";
import { d as cn, I as Input, B as Button } from "../../../chunks/input.js";
import { C as Card, a as Card_header, b as Card_title, c as Card_content, d as Card_footer } from "../../../chunks/card-title.js";
import { T as Table, a as Table_caption, b as Table_header, c as Table_row, d as Table_head, e as Table_body, f as Table_cell } from "../../../chunks/table-row.js";
import "clsx";
const Card_description = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class"]);
  let { class: className = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `<p${spread(
    [
      {
        class: escape_attribute_value(cn("text-sm text-muted-foreground", className))
      },
      escape_object($$restProps)
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</p>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="w-full h-full relative"><p class="text-background text-4xl mb-5" data-svelte-h="svelte-q1ogda">Citizen Finder</p> <div class="w-full h-12"><form class="flex justify-center h-full w-full items-center space-x-2"><div class="flex justify-center items-center">${validate_component(Input, "Input").$$render(
    $$result,
    {
      class: "w-[20vw]",
      type: "text",
      placeholder: "USER ID"
    },
    {},
    {}
  )} ${validate_component(Button, "Button").$$render($$result, { type: "submit" }, {}, {
    default: () => {
      return `Subscribe`;
    }
  })}</div></form> <div class="body absolute w-full h-[90%]"><div class="grid grid-cols-2 items-center justify-center w-full h-full gap-2">${validate_component(Card, "Card.Root").$$render($$result, { class: "bg-foreground" }, {}, {
    default: () => {
      return `${validate_component(Card_header, "Card.Header").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Card_title, "Card.Title").$$render($$result, { class: "text-background" }, {}, {
            default: () => {
              return `Basic Info`;
            }
          })} ${validate_component(Card_description, "Card.Description").$$render($$result, {}, {}, {
            default: () => {
              return `Basic Information of the Citizen`;
            }
          })}`;
        }
      })} ${validate_component(Card_content, "Card.Content").$$render($$result, { class: "text-background" }, {}, {
        default: () => {
          return `<p data-svelte-h="svelte-z4xan">First Name: Jerico</p> <p data-svelte-h="svelte-1qa82hg">Last Name: Acosta</p> <p data-svelte-h="svelte-1h9ggtj">CitizenID: ASD1234</p>`;
        }
      })} ${validate_component(Card_footer, "Card.Footer").$$render($$result, { class: "flex justify-evenly w-full" }, {}, {
        default: () => {
          return `${validate_component(Button, "Button").$$render($$result, { variant: "destructive" }, {}, {
            default: () => {
              return `Warrant`;
            }
          })} ${validate_component(Button, "Button").$$render($$result, { variant: "destructive" }, {}, {
            default: () => {
              return `B.O.L.O`;
            }
          })}`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card.Root").$$render($$result, { class: "bg-foreground" }, {}, {
    default: () => {
      return `${validate_component(Card_header, "Card.Header").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Card_title, "Card.Title").$$render($$result, { class: "text-background" }, {}, {
            default: () => {
              return `Vehicles`;
            }
          })} ${validate_component(Card_description, "Card.Description").$$render($$result, {}, {}, {
            default: () => {
              return `Vehicles of the Citizen`;
            }
          })}`;
        }
      })} ${validate_component(Card_content, "Card.Content").$$render(
        $$result,
        {
          class: "text-background h-36 overflow-y-auto "
        },
        {},
        {
          default: () => {
            return `${validate_component(Table, "Table.Root").$$render($$result, { class: "overflow-y-auto h-12" }, {}, {
              default: () => {
                return `${validate_component(Table_caption, "Table.Caption").$$render($$result, {}, {}, {
                  default: () => {
                    return `List of Vehicles`;
                  }
                })} ${validate_component(Table_header, "Table.Header").$$render($$result, {}, {}, {
                  default: () => {
                    return `${validate_component(Table_row, "Table.Row").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(Table_head, "Table.Head").$$render($$result, { class: "" }, {}, {
                          default: () => {
                            return `Plate`;
                          }
                        })} ${validate_component(Table_head, "Table.Head").$$render($$result, {}, {}, {
                          default: () => {
                            return `Name`;
                          }
                        })} ${validate_component(Table_head, "Table.Head").$$render($$result, {}, {}, {
                          default: () => {
                            return `Warrant`;
                          }
                        })} ${validate_component(Table_head, "Table.Head").$$render($$result, { class: "text-center" }, {}, {
                          default: () => {
                            return `Bolo`;
                          }
                        })}`;
                      }
                    })}`;
                  }
                })} ${validate_component(Table_body, "Table.Body").$$render($$result, {}, {}, {
                  default: () => {
                    return `${validate_component(Table_row, "Table.Row").$$render($$result, { class: "h-6" }, {}, {
                      default: () => {
                        return `${validate_component(Table_cell, "Table.Cell").$$render($$result, { class: "font-medium" }, {}, {
                          default: () => {
                            return `ASD1234`;
                          }
                        })} ${validate_component(Table_cell, "Table.Cell").$$render($$result, {}, {}, {
                          default: () => {
                            return `Jerico FX`;
                          }
                        })} ${validate_component(Table_cell, "Table.Cell").$$render($$result, {}, {}, {})} ${validate_component(Table_cell, "Table.Cell").$$render($$result, { class: "text-center" }, {}, {})}`;
                      }
                    })}`;
                  }
                })}`;
              }
            })}`;
          }
        }
      )} ${validate_component(Card_footer, "Card.Footer").$$render($$result, { class: "flex justify-evenly w-full" }, {}, {})}`;
    }
  })}</div></div></div></div>`;
});
export {
  Page as default
};
