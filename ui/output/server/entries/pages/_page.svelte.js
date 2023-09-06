import { b as set_current_component, r as run_all, d as current_component, o as onDestroy, s as setContext, g as getContext, c as create_ssr_component, f as compute_rest_props, a as subscribe, h as spread, i as escape_object, v as validate_component, e as escape, j as each } from "../../chunks/ssr.js";
import { t as toWritableStores, b as builder, c as createElHelpers, a as createDispatcher, L as Label, B as Badge } from "../../chunks/label.js";
import { n as noop, i as isHTMLElement, u as useClickOutside, a as useEscapeKeydown, e as executeCallbacks, b as isBrowser, c as addMeltEventListener, k as kbd, r as removeUndefined, g as getOptionUpdater, d as cn, f as flyAndScale, B as Button, I as Input } from "../../chunks/input.js";
import { T as Table, a as Table_caption, b as Table_header, c as Table_row, d as Table_head, e as Table_body, f as Table_cell } from "../../chunks/table-row.js";
import "clsx";
import { a as IconCar, s as store } from "../../chunks/store.js";
import "dequal";
import { nanoid } from "nanoid/non-secure";
import { d as derived, a as readonly, w as writable } from "../../chunks/index.js";
import { flip, offset, shift, arrow, size, autoUpdate, computePosition } from "@floating-ui/dom";
import { createFocusTrap as createFocusTrap$1 } from "focus-trap";
const dirty_components = [];
const binding_callbacks = [];
let render_callbacks = [];
const flush_callbacks = [];
const resolved_promise = /* @__PURE__ */ Promise.resolve();
let update_scheduled = false;
function schedule_update() {
  if (!update_scheduled) {
    update_scheduled = true;
    resolved_promise.then(flush);
  }
}
function tick() {
  schedule_update();
  return resolved_promise;
}
function add_render_callback(fn) {
  render_callbacks.push(fn);
}
const seen_callbacks = /* @__PURE__ */ new Set();
let flushidx = 0;
function flush() {
  if (flushidx !== 0) {
    return;
  }
  const saved_component = current_component;
  do {
    try {
      while (flushidx < dirty_components.length) {
        const component = dirty_components[flushidx];
        flushidx++;
        set_current_component(component);
        update(component.$$);
      }
    } catch (e) {
      dirty_components.length = 0;
      flushidx = 0;
      throw e;
    }
    set_current_component(null);
    dirty_components.length = 0;
    flushidx = 0;
    while (binding_callbacks.length)
      binding_callbacks.pop()();
    for (let i = 0; i < render_callbacks.length; i += 1) {
      const callback = render_callbacks[i];
      if (!seen_callbacks.has(callback)) {
        seen_callbacks.add(callback);
        callback();
      }
    }
    render_callbacks.length = 0;
  } while (dirty_components.length);
  while (flush_callbacks.length) {
    flush_callbacks.pop()();
  }
  update_scheduled = false;
  seen_callbacks.clear();
  set_current_component(saved_component);
}
function update($$) {
  if ($$.fragment !== null) {
    $$.update();
    run_all($$.before_update);
    const dirty = $$.dirty;
    $$.dirty = [-1];
    $$.fragment && $$.fragment.p($$.ctx, dirty);
    $$.after_update.forEach(add_render_callback);
  }
}
function omit(obj, ...keys) {
  const result = {};
  for (const key of Object.keys(obj)) {
    if (!keys.includes(key)) {
      result[key] = obj[key];
    }
  }
  return result;
}
const overridable = (store2, onChange) => {
  const update2 = (updater, sideEffect) => {
    store2.update((curr) => {
      const next = updater(curr);
      let res = next;
      if (onChange) {
        res = onChange({ curr, next });
      }
      sideEffect?.(res);
      return res;
    });
  };
  const set2 = (curr) => {
    update2(() => curr);
  };
  return {
    ...store2,
    update: update2,
    set: set2
  };
};
function styleToString(style) {
  return Object.keys(style).reduce((str, key) => {
    if (style[key] === void 0)
      return str;
    return str + `${key}:${style[key]};`;
  }, "");
}
function generateId() {
  return nanoid(10);
}
const isDom = () => typeof window !== "undefined";
function getPlatform() {
  const agent = navigator.userAgentData;
  return agent?.platform ?? navigator.platform;
}
const pt = (v) => isDom() && v.test(getPlatform());
const isTouchDevice = () => isDom() && !!navigator.maxTouchPoints;
const isMac = () => pt(/^Mac/) && !isTouchDevice();
const isApple = () => pt(/mac|iphone|ipad|ipod/i);
const isIos = () => isApple() && !isMac();
const LOCK_CLASSNAME = "data-melt-scroll-lock";
function assignStyle(el, style) {
  if (!el)
    return;
  const previousStyle = el.style.cssText;
  Object.assign(el.style, style);
  return () => {
    el.style.cssText = previousStyle;
  };
}
function setCSSProperty(el, property, value) {
  if (!el)
    return;
  const previousValue = el.style.getPropertyValue(property);
  el.style.setProperty(property, value);
  return () => {
    if (previousValue) {
      el.style.setProperty(property, previousValue);
    } else {
      el.style.removeProperty(property);
    }
  };
}
function getPaddingProperty(documentElement) {
  const documentLeft = documentElement.getBoundingClientRect().left;
  const scrollbarX = Math.round(documentLeft) + documentElement.scrollLeft;
  return scrollbarX ? "paddingLeft" : "paddingRight";
}
function removeScroll(_document) {
  const doc = _document ?? document;
  const win = doc.defaultView ?? window;
  const { documentElement, body } = doc;
  const locked = body.hasAttribute(LOCK_CLASSNAME);
  if (locked)
    return noop;
  body.setAttribute(LOCK_CLASSNAME, "");
  const scrollbarWidth = win.innerWidth - documentElement.clientWidth;
  const setScrollbarWidthProperty = () => setCSSProperty(documentElement, "--scrollbar-width", `${scrollbarWidth}px`);
  const paddingProperty = getPaddingProperty(documentElement);
  const scrollbarSidePadding = win.getComputedStyle(body)[paddingProperty];
  const setStyle = () => assignStyle(body, {
    overflow: "hidden",
    [paddingProperty]: `calc(${scrollbarSidePadding} + ${scrollbarWidth}px)`
  });
  const setIOSStyle = () => {
    const { scrollX, scrollY, visualViewport } = win;
    const offsetLeft = visualViewport?.offsetLeft ?? 0;
    const offsetTop = visualViewport?.offsetTop ?? 0;
    const restoreStyle = assignStyle(body, {
      position: "fixed",
      overflow: "hidden",
      top: `${-(scrollY - Math.floor(offsetTop))}px`,
      left: `${-(scrollX - Math.floor(offsetLeft))}px`,
      right: "0",
      [paddingProperty]: `calc(${scrollbarSidePadding} + ${scrollbarWidth}px)`
    });
    return () => {
      restoreStyle?.();
      win.scrollTo(scrollX, scrollY);
    };
  };
  const cleanups = [setScrollbarWidthProperty(), isIos() ? setIOSStyle() : setStyle()];
  return () => {
    cleanups.forEach((fn) => fn?.());
    body.removeAttribute(LOCK_CLASSNAME);
  };
}
function derivedVisible(obj) {
  const { open, forceVisible, activeTrigger } = obj;
  return derived([open, forceVisible, activeTrigger], ([$open, $forceVisible, $activeTrigger]) => ($open || $forceVisible) && $activeTrigger !== null);
}
function derivedWithUnsubscribe(stores, fn) {
  let unsubscribers = [];
  const onUnsubscribe = (cb) => {
    unsubscribers.push(cb);
  };
  const unsubscribe = () => {
    unsubscribers.forEach((fn2) => fn2());
    unsubscribers = [];
  };
  const derivedStore = derived(stores, ($storeValues) => {
    unsubscribe();
    return fn($storeValues, onUnsubscribe);
  });
  onDestroy(unsubscribe);
  const subscribe2 = (...args) => {
    const unsub = derivedStore.subscribe(...args);
    return () => {
      unsub();
      unsubscribe();
    };
  };
  return {
    ...derivedStore,
    subscribe: subscribe2
  };
}
function effect(stores, fn) {
  const unsub = derivedWithUnsubscribe(stores, (stores2, onUnsubscribe) => {
    return {
      stores: stores2,
      onUnsubscribe
    };
  }).subscribe(({ stores: stores2, onUnsubscribe }) => {
    const returned = fn(stores2);
    if (returned) {
      onUnsubscribe(returned);
    }
  });
  onDestroy(unsub);
  return unsub;
}
function getPortalParent(node) {
  let parent = node.parentElement;
  while (isHTMLElement(parent) && !parent.hasAttribute("data-portal")) {
    parent = parent.parentElement;
  }
  return parent || "body";
}
function getPortalDestination(node, portalProp) {
  const portalParent = getPortalParent(node);
  if (portalProp !== void 0)
    return portalProp;
  if (portalParent === "body")
    return document.body;
  return null;
}
const defaultConfig$1 = {
  strategy: "absolute",
  placement: "top",
  gutter: 5,
  flip: true,
  sameWidth: false,
  overflowPadding: 8
};
const ARROW_TRANSFORM = {
  bottom: "rotate(45deg)",
  left: "rotate(135deg)",
  top: "rotate(225deg)",
  right: "rotate(315deg)"
};
function useFloating(reference, floating, opts = {}) {
  if (!floating || !reference)
    return {
      destroy: noop
    };
  const options = { ...defaultConfig$1, ...opts };
  const arrowEl = floating.querySelector("[data-arrow=true]");
  const middleware = [];
  if (options.flip) {
    middleware.push(flip({
      boundary: options.boundary,
      padding: options.overflowPadding
    }));
  }
  const arrowOffset = isHTMLElement(arrowEl) ? arrowEl.offsetHeight / 2 : 0;
  if (options.gutter || options.offset) {
    const data = options.gutter ? { mainAxis: options.gutter } : options.offset;
    if (data?.mainAxis != null) {
      data.mainAxis += arrowOffset;
    }
    middleware.push(offset(data));
  }
  middleware.push(shift({
    boundary: options.boundary,
    crossAxis: options.overlap,
    padding: options.overflowPadding
  }));
  if (arrowEl) {
    middleware.push(arrow({ element: arrowEl, padding: 8 }));
  }
  middleware.push(size({
    padding: options.overflowPadding,
    apply({ rects, availableHeight, availableWidth }) {
      if (options.sameWidth) {
        Object.assign(floating.style, {
          width: `${Math.round(rects.reference.width)}px`,
          minWidth: "unset"
        });
      }
      if (options.fitViewport) {
        Object.assign(floating.style, {
          maxWidth: `${availableWidth}px`,
          maxHeight: `${availableHeight}px`
        });
      }
    }
  }));
  function compute() {
    if (!reference || !floating)
      return;
    const { placement, strategy } = options;
    computePosition(reference, floating, {
      placement,
      middleware,
      strategy
    }).then((data) => {
      const x = Math.round(data.x);
      const y = Math.round(data.y);
      Object.assign(floating.style, {
        top: `${y}px`,
        left: `${x}px`
      });
      if (isHTMLElement(arrowEl) && data.middlewareData.arrow) {
        const { x: x2, y: y2 } = data.middlewareData.arrow;
        const dir = data.placement.split("-")[0];
        Object.assign(arrowEl.style, {
          position: "absolute",
          left: x2 != null ? `${x2}px` : "",
          top: y2 != null ? `${y2}px` : "",
          [dir]: `calc(100% - ${arrowOffset}px)`,
          transform: ARROW_TRANSFORM[dir],
          backgroundColor: "inherit",
          zIndex: "inherit"
        });
      }
      return data;
    });
  }
  Object.assign(floating.style, {
    position: options.strategy
  });
  return {
    destroy: autoUpdate(reference, floating, compute)
  };
}
function createFocusTrap(config = {}) {
  let trap;
  const { immediate, ...focusTrapOptions } = config;
  const hasFocus = writable(false);
  const isPaused = writable(false);
  const activate = (opts) => trap?.activate(opts);
  const deactivate = (opts) => {
    trap?.deactivate(opts);
  };
  const pause = () => {
    if (trap) {
      trap.pause();
      isPaused.set(true);
    }
  };
  const unpause = () => {
    if (trap) {
      trap.unpause();
      isPaused.set(false);
    }
  };
  const useFocusTrap = (node) => {
    trap = createFocusTrap$1(node, {
      ...focusTrapOptions,
      onActivate() {
        hasFocus.set(true);
        config.onActivate?.();
      },
      onDeactivate() {
        hasFocus.set(false);
        config.onDeactivate?.();
      }
    });
    if (immediate) {
      activate();
    }
    return {
      destroy() {
        deactivate();
        trap = void 0;
      }
    };
  };
  return {
    useFocusTrap,
    hasFocus: readonly(hasFocus),
    isPaused: readonly(isPaused),
    activate,
    deactivate,
    pause,
    unpause
  };
}
const defaultConfig = {
  floating: {},
  focusTrap: {},
  clickOutside: {},
  escapeKeydown: {},
  portal: "body"
};
const usePopper = (popperElement, args) => {
  popperElement.dataset.escapee = "";
  const { anchorElement, open, options } = args;
  if (!anchorElement || !open || !options) {
    return { destroy: noop };
  }
  const opts = { ...defaultConfig, ...options };
  const callbacks = [];
  if (opts.portal !== null) {
    const portal = usePortal(popperElement, opts.portal);
    if (portal?.destroy) {
      callbacks.push(portal.destroy);
    }
  }
  callbacks.push(useFloating(anchorElement, popperElement, opts.floating).destroy);
  if (opts.focusTrap !== null) {
    const { useFocusTrap } = createFocusTrap({
      immediate: true,
      escapeDeactivates: false,
      allowOutsideClick: true,
      returnFocusOnDeactivate: false,
      fallbackFocus: popperElement,
      ...opts.focusTrap
    });
    const usedFocusTrap = useFocusTrap(popperElement);
    if (usedFocusTrap?.destroy) {
      callbacks.push(usedFocusTrap.destroy);
    }
  }
  if (opts.clickOutside !== null) {
    callbacks.push(useClickOutside(popperElement, {
      enabled: open,
      handler: (e) => {
        if (e.defaultPrevented)
          return;
        if (isHTMLElement(anchorElement) && !anchorElement.contains(e.target)) {
          open.set(false);
          anchorElement.focus();
        }
      },
      ...opts.clickOutside
    }).destroy);
  }
  if (opts.escapeKeydown !== null) {
    callbacks.push(useEscapeKeydown(popperElement, {
      enabled: open,
      handler: (e) => {
        if (e.defaultPrevented)
          return;
        open.set(false);
      },
      ...opts.escapeKeydown
    }).destroy);
  }
  const unsubscribe = executeCallbacks(...callbacks);
  return {
    destroy() {
      unsubscribe();
    }
  };
};
const usePortal = (el, target = "body") => {
  let targetEl;
  if (!isHTMLElement(target) && typeof target !== "string") {
    return {
      destroy: noop
    };
  }
  async function update2(newTarget) {
    target = newTarget;
    if (typeof target === "string") {
      targetEl = document.querySelector(target);
      if (targetEl === null) {
        await tick();
        targetEl = document.querySelector(target);
      }
      if (targetEl === null) {
        throw new Error(`No element found matching css selector: "${target}"`);
      }
    } else if (target instanceof HTMLElement) {
      targetEl = target;
    } else {
      throw new TypeError(`Unknown portal target type: ${target === null ? "null" : typeof target}. Allowed types: string (CSS selector) or HTMLElement.`);
    }
    el.dataset.portal = "";
    targetEl.appendChild(el);
    el.hidden = false;
  }
  function destroy() {
    el.remove();
  }
  update2(target);
  return {
    update: update2,
    destroy
  };
};
const defaults = {
  positioning: {
    placement: "bottom"
  },
  arrowSize: 8,
  defaultOpen: false,
  disableFocusTrap: false,
  closeOnEscape: true,
  preventScroll: false,
  onOpenChange: void 0,
  closeOnOutsideClick: true,
  portal: void 0,
  forceVisible: false
};
const { name } = createElHelpers("popover");
function createPopover(args) {
  const withDefaults = { ...defaults, ...args };
  const options = toWritableStores(omit(withDefaults, "open"));
  const { positioning, arrowSize, disableFocusTrap, preventScroll, closeOnEscape, closeOnOutsideClick, portal, forceVisible } = options;
  const openWritable = withDefaults.open ?? writable(withDefaults.defaultOpen);
  const open = overridable(openWritable, withDefaults?.onOpenChange);
  const activeTrigger = writable(null);
  const ids = {
    content: generateId(),
    trigger: generateId()
  };
  function handleClose() {
    open.set(false);
    const triggerEl = document.getElementById(ids.trigger);
    if (triggerEl) {
      tick().then(() => {
        triggerEl.focus();
      });
    }
  }
  const isVisible = derivedVisible({ open, activeTrigger, forceVisible });
  const content = builder(name("content"), {
    stores: [isVisible, portal],
    returned: ([$isVisible, $portal]) => {
      return {
        hidden: $isVisible && isBrowser ? void 0 : true,
        tabindex: -1,
        style: styleToString({
          display: $isVisible ? void 0 : "none"
        }),
        id: ids.content,
        "data-state": $isVisible ? "open" : "closed",
        "data-portal": $portal ? "" : void 0
      };
    },
    action: (node) => {
      let unsubPopper = noop;
      const unsubDerived = effect([
        isVisible,
        activeTrigger,
        positioning,
        disableFocusTrap,
        closeOnEscape,
        closeOnOutsideClick,
        portal
      ], ([$isVisible, $activeTrigger, $positioning, $disableFocusTrap, $closeOnEscape, $closeOnOutsideClick, $portal]) => {
        unsubPopper();
        if (!$isVisible || !$activeTrigger)
          return;
        tick().then(() => {
          const popper = usePopper(node, {
            anchorElement: $activeTrigger,
            open,
            options: {
              floating: $positioning,
              focusTrap: $disableFocusTrap ? null : void 0,
              clickOutside: $closeOnOutsideClick ? void 0 : null,
              escapeKeydown: $closeOnEscape ? {
                handler: () => {
                  handleClose();
                }
              } : null,
              portal: getPortalDestination(node, $portal)
            }
          });
          if (popper && popper.destroy) {
            unsubPopper = popper.destroy;
          }
        });
      });
      return {
        destroy() {
          unsubDerived();
          unsubPopper();
        }
      };
    }
  });
  function toggleOpen() {
    open.update((prev) => !prev);
  }
  const trigger = builder(name("trigger"), {
    stores: open,
    returned: ($open) => {
      return {
        role: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": $open,
        "data-state": $open ? "open" : "closed",
        "aria-controls": ids.content,
        id: ids.trigger
      };
    },
    action: (node) => {
      const unsub = executeCallbacks(addMeltEventListener(node, "click", () => {
        activeTrigger.set(node);
        toggleOpen();
      }), addMeltEventListener(node, "keydown", (e) => {
        if (e.key !== kbd.ENTER && e.key !== kbd.SPACE)
          return;
        e.preventDefault();
        activeTrigger.set(node);
        toggleOpen();
      }));
      return {
        destroy: unsub
      };
    }
  });
  const arrow2 = builder(name("arrow"), {
    stores: arrowSize,
    returned: ($arrowSize) => ({
      "data-arrow": true,
      style: styleToString({
        position: "absolute",
        width: `var(--arrow-size, ${$arrowSize}px)`,
        height: `var(--arrow-size, ${$arrowSize}px)`
      })
    })
  });
  const close = builder(name("close"), {
    returned: () => ({
      type: "button"
    }),
    action: (node) => {
      const unsub = executeCallbacks(addMeltEventListener(node, "click", () => {
        handleClose();
      }), addMeltEventListener(node, "keydown", (e) => {
        if (e.key !== kbd.ENTER && e.key !== kbd.SPACE)
          return;
        e.preventDefault();
        toggleOpen();
      }));
      return {
        destroy: unsub
      };
    }
  });
  effect([open, activeTrigger, preventScroll], ([$open, $activeTrigger, $preventScroll]) => {
    if (!isBrowser)
      return;
    const unsubs = [];
    if ($open) {
      if (!$activeTrigger) {
        tick().then(() => {
          const triggerEl = document.getElementById(ids.trigger);
          if (!isHTMLElement(triggerEl))
            return;
          activeTrigger.set(triggerEl);
        });
      }
      if ($preventScroll) {
        unsubs.push(removeScroll());
      }
    }
    return () => {
      unsubs.forEach((unsub) => unsub());
    };
  });
  return {
    elements: {
      trigger,
      content,
      arrow: arrow2,
      close
    },
    states: {
      open
    },
    options
  };
}
const NAME = "Popover";
const ctx = {
  set,
  get,
  setArrow
};
function set(props) {
  const popover = createPopover({
    ...removeUndefined(props),
    forceVisible: true
  });
  setContext(NAME, popover);
  return {
    ...popover,
    updateOption: getOptionUpdater(popover.options)
  };
}
function get() {
  return getContext(NAME);
}
function setArrow(size2 = 8) {
  const popover = get();
  popover.options.arrowSize.set(size2);
  return popover;
}
const Popover = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { positioning = void 0 } = $$props;
  let { arrowSize = void 0 } = $$props;
  let { disableFocusTrap = void 0 } = $$props;
  let { closeOnEscape = void 0 } = $$props;
  let { closeOnOutsideClick = void 0 } = $$props;
  let { preventScroll = void 0 } = $$props;
  let { portal = void 0 } = $$props;
  let { open = void 0 } = $$props;
  let { onOpenChange = void 0 } = $$props;
  const { updateOption, states: { open: localOpen } } = ctx.set({
    positioning,
    arrowSize,
    disableFocusTrap,
    closeOnEscape,
    closeOnOutsideClick,
    preventScroll,
    portal,
    defaultOpen: open,
    onOpenChange: ({ next }) => {
      if (open !== next) {
        onOpenChange?.(next);
        open = next;
      }
      return next;
    }
  });
  if ($$props.positioning === void 0 && $$bindings.positioning && positioning !== void 0)
    $$bindings.positioning(positioning);
  if ($$props.arrowSize === void 0 && $$bindings.arrowSize && arrowSize !== void 0)
    $$bindings.arrowSize(arrowSize);
  if ($$props.disableFocusTrap === void 0 && $$bindings.disableFocusTrap && disableFocusTrap !== void 0)
    $$bindings.disableFocusTrap(disableFocusTrap);
  if ($$props.closeOnEscape === void 0 && $$bindings.closeOnEscape && closeOnEscape !== void 0)
    $$bindings.closeOnEscape(closeOnEscape);
  if ($$props.closeOnOutsideClick === void 0 && $$bindings.closeOnOutsideClick && closeOnOutsideClick !== void 0)
    $$bindings.closeOnOutsideClick(closeOnOutsideClick);
  if ($$props.preventScroll === void 0 && $$bindings.preventScroll && preventScroll !== void 0)
    $$bindings.preventScroll(preventScroll);
  if ($$props.portal === void 0 && $$bindings.portal && portal !== void 0)
    $$bindings.portal(portal);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.onOpenChange === void 0 && $$bindings.onOpenChange && onOpenChange !== void 0)
    $$bindings.onOpenChange(onOpenChange);
  open !== void 0 && localOpen.set(open);
  {
    updateOption("positioning", positioning);
  }
  {
    updateOption("arrowSize", arrowSize);
  }
  {
    updateOption("disableFocusTrap", disableFocusTrap);
  }
  {
    updateOption("closeOnEscape", closeOnEscape);
  }
  {
    updateOption("closeOnOutsideClick", closeOnOutsideClick);
  }
  {
    updateOption("preventScroll", preventScroll);
  }
  {
    updateOption("portal", portal);
  }
  return `${slots.default ? slots.default({}) : ``}`;
});
const PopoverContent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "transition",
    "transitionConfig",
    "inTransition",
    "inTransitionConfig",
    "outTransition",
    "outTransitionConfig",
    "asChild"
  ]);
  let $open, $$unsubscribe_open;
  let $content, $$unsubscribe_content;
  let { transition = void 0 } = $$props;
  let { transitionConfig = void 0 } = $$props;
  let { inTransition = void 0 } = $$props;
  let { inTransitionConfig = void 0 } = $$props;
  let { outTransition = void 0 } = $$props;
  let { outTransitionConfig = void 0 } = $$props;
  let { asChild = false } = $$props;
  const { elements: { content }, states: { open } } = ctx.get();
  $$unsubscribe_content = subscribe(content, (value) => $content = value);
  $$unsubscribe_open = subscribe(open, (value) => $open = value);
  if ($$props.transition === void 0 && $$bindings.transition && transition !== void 0)
    $$bindings.transition(transition);
  if ($$props.transitionConfig === void 0 && $$bindings.transitionConfig && transitionConfig !== void 0)
    $$bindings.transitionConfig(transitionConfig);
  if ($$props.inTransition === void 0 && $$bindings.inTransition && inTransition !== void 0)
    $$bindings.inTransition(inTransition);
  if ($$props.inTransitionConfig === void 0 && $$bindings.inTransitionConfig && inTransitionConfig !== void 0)
    $$bindings.inTransitionConfig(inTransitionConfig);
  if ($$props.outTransition === void 0 && $$bindings.outTransition && outTransition !== void 0)
    $$bindings.outTransition(outTransition);
  if ($$props.outTransitionConfig === void 0 && $$bindings.outTransitionConfig && outTransitionConfig !== void 0)
    $$bindings.outTransitionConfig(outTransitionConfig);
  if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0)
    $$bindings.asChild(asChild);
  $$unsubscribe_open();
  $$unsubscribe_content();
  return `${asChild && $open ? (() => {
    let builder2 = $content;
    return ` ${slots.default ? slots.default({ builder: builder2 }) : ``}`;
  })() : `${transition && $open ? (() => {
    let builder2 = $content;
    return ` <div${spread([escape_object(builder2), escape_object($$restProps)], {})}>${slots.default ? slots.default({ builder: builder2 }) : ``}</div>`;
  })() : `${inTransition && outTransition && $open ? (() => {
    let builder2 = $content;
    return ` <div${spread([escape_object(builder2), escape_object($$restProps)], {})}>${slots.default ? slots.default({ builder: builder2 }) : ``}</div>`;
  })() : `${inTransition && $open ? (() => {
    let builder2 = $content;
    return ` <div${spread([escape_object(builder2), escape_object($$restProps)], {})}>${slots.default ? slots.default({ builder: builder2 }) : ``}</div>`;
  })() : `${outTransition && $open ? (() => {
    let builder2 = $content;
    return ` <div${spread([escape_object(builder2), escape_object($$restProps)], {})}>${slots.default ? slots.default({ builder: builder2 }) : ``}</div>`;
  })() : `${$open ? (() => {
    let builder2 = $content;
    return ` <div${spread([escape_object($$restProps)], {})}>${slots.default ? slots.default({ builder: builder2 }) : ``}</div>`;
  })() : ``}`}`}`}`}`}`;
});
const PopoverTrigger = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["asChild"]);
  let $trigger, $$unsubscribe_trigger;
  let { asChild = false } = $$props;
  const { elements: { trigger } } = ctx.get();
  $$unsubscribe_trigger = subscribe(trigger, (value) => $trigger = value);
  createDispatcher();
  if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0)
    $$bindings.asChild(asChild);
  $$unsubscribe_trigger();
  return `${asChild ? `${slots.default ? slots.default({ builder: $trigger }) : ``}` : (() => {
    let builder2 = $trigger;
    return ` <button${spread([escape_object(builder2), escape_object($$restProps)], {})}>${slots.default ? slots.default({ builder: builder2 }) : ``}</button>`;
  })()}`;
});
const Popover_content = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class", "transition", "transitionConfig"]);
  let { class: className = void 0 } = $$props;
  let { transition = flyAndScale } = $$props;
  let { transitionConfig = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.transition === void 0 && $$bindings.transition && transition !== void 0)
    $$bindings.transition(transition);
  if ($$props.transitionConfig === void 0 && $$bindings.transitionConfig && transitionConfig !== void 0)
    $$bindings.transitionConfig(transitionConfig);
  return `${validate_component(PopoverContent, "PopoverPrimitive.Content").$$render(
    $$result,
    Object.assign(
      {},
      { transition },
      { transitionConfig },
      {
        class: cn("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none", className)
      },
      $$restProps
    ),
    {},
    {
      default: () => {
        return `${slots.default ? slots.default({}) : ``}`;
      }
    }
  )}`;
});
const Root = Popover;
const Trigger = PopoverTrigger;
const PopOver = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { vehicle = { plate: "", vehicle: "" } } = $$props;
  if ($$props.vehicle === void 0 && $$bindings.vehicle && vehicle !== void 0)
    $$bindings.vehicle(vehicle);
  return `${validate_component(Root, "Popover.Root").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Trigger, "Popover.PopoverTrigger").$$render($$result, { asChild: true }, {}, {
        default: ({ builder: builder2 }) => {
          return `${validate_component(Button, "Button").$$render($$result, { builders: [builder2], variant: "default" }, {}, {
            default: () => {
              return `${validate_component(IconCar, "IconCar").$$render($$result, {}, {}, {})}`;
            }
          })}`;
        }
      })} ${validate_component(Popover_content, "Popover.PopoverContent").$$render($$result, { class: "w-80 bg-foreground" }, {}, {
        default: () => {
          return `<div class="grid gap-4"><div class="space-y-2" data-svelte-h="svelte-lgye25"><h4 class="font-medium leading-none text-background">Vehicle</h4> <p class="text-sm text-muted-foreground">Vehicle Assigned to the citizenid:</p></div> <div class="grid gap-2"><div class="grid grid-cols-3 items-center gap-4">${validate_component(Label, "Label").$$render($$result, { class: "text-background", for: "width" }, {}, {
            default: () => {
              return `Name`;
            }
          })} ${validate_component(Input, "Input").$$render(
            $$result,
            {
              readonly: true,
              id: "width",
              value: vehicle.vehicle,
              class: "col-span-2 h-8 text-background"
            },
            {},
            {}
          )}</div> <div class="grid grid-cols-3 items-center gap-4">${validate_component(Label, "Label").$$render(
            $$result,
            {
              class: "text-background",
              for: "maxWidth"
            },
            {},
            {
              default: () => {
                return `Plate`;
              }
            }
          )} ${validate_component(Input, "Input").$$render(
            $$result,
            {
              readonly: true,
              id: "maxWidth",
              value: vehicle.plate,
              class: "col-span-2 h-8 text-background"
            },
            {},
            {}
          )}</div></div> ${validate_component(Button, "Button").$$render($$result, { variant: "secondary" }, {}, {
            default: () => {
              return `Locate`;
            }
          })}</div>`;
        }
      })}`;
    }
  })}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $playerData, $$unsubscribe_playerData;
  const { playerData, setData, changeVehicle } = store();
  $$unsubscribe_playerData = subscribe(playerData, (value) => $playerData = value);
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_playerData();
  return `<div class="overflow-y-auto overflow-hidden h-full w-full"><p class="text-background text-4xl mb-5">${escape(data.hola)}</p> ${validate_component(Table, "Table.Root").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Table_caption, "Table.Caption").$$render($$result, { class: "text-background" }, {}, {
        default: () => {
          return `A list of your recent invoices.`;
        }
      })} ${validate_component(Table_header, "Table.Header").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Table_row, "Table.Row").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Table_head, "Table.Head").$$render($$result, { class: "w-[120px] text-background" }, {}, {
                default: () => {
                  return `Duty`;
                }
              })} ${validate_component(Table_head, "Table.Head").$$render($$result, { class: "w-[100px] text-background" }, {}, {
                default: () => {
                  return `Callsign`;
                }
              })} ${validate_component(Table_head, "Table.Head").$$render($$result, { class: "text-center" }, {}, {
                default: () => {
                  return `First Name`;
                }
              })} ${validate_component(Table_head, "Table.Head").$$render($$result, { class: "text-center" }, {}, {
                default: () => {
                  return `Last Name`;
                }
              })} ${validate_component(Table_head, "Table.Head").$$render($$result, { class: "text-center" }, {}, {
                default: () => {
                  return `Cid`;
                }
              })} ${validate_component(Table_head, "Table.Head").$$render($$result, { class: "text-center" }, {}, {
                default: () => {
                  return `Rank`;
                }
              })} ${validate_component(Table_head, "Table.Head").$$render($$result, { class: "text-center" }, {}, {
                default: () => {
                  return `Radio`;
                }
              })} ${validate_component(Table_head, "Table.Head").$$render($$result, { class: "text-center" }, {}, {
                default: () => {
                  return `Vehicle`;
                }
              })} ${validate_component(Table_head, "Table.Head").$$render($$result, { class: "text-center" }, {}, {
                default: () => {
                  return `Assignment`;
                }
              })}`;
            }
          })}`;
        }
      })} ${validate_component(Table_body, "Table.Body").$$render($$result, {}, {}, {
        default: () => {
          return `${each($playerData, (data2, i) => {
            return `${validate_component(Table_row, "Table.Row").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(Table_cell, "Table.Cell").$$render($$result, { class: "font-medium text-background" }, {}, {
                  default: () => {
                    return `${data2.duty ? ` ${validate_component(Badge, "Badge").$$render($$result, { variant: "default" }, {}, {
                      default: () => {
                        return `On Duty`;
                      }
                    })} ` : ` ${validate_component(Badge, "Badge").$$render($$result, { variant: "destructive" }, {}, {
                      default: () => {
                        return `Off Duty`;
                      }
                    })} `}`;
                  }
                })} ${validate_component(Table_cell, "Table.Cell").$$render($$result, { class: "text-center text-background" }, {}, {
                  default: () => {
                    return `${escape(data2.callsign || "NO Callsign")}`;
                  }
                })} ${validate_component(Table_cell, "Table.Cell").$$render($$result, { class: "text-center text-background" }, {}, {
                  default: () => {
                    return `${escape(data2.firstname)}`;
                  }
                })} ${validate_component(Table_cell, "Table.Cell").$$render($$result, { class: "text-center text-background" }, {}, {
                  default: () => {
                    return `${escape(data2.lastname)}`;
                  }
                })} ${validate_component(Table_cell, "Table.Cell").$$render($$result, { class: "text-center text-background" }, {}, {
                  default: () => {
                    return `${escape(data2.citizenid)}`;
                  }
                })} ${validate_component(Table_cell, "Table.Cell").$$render($$result, { class: "text-center text-background" }, {}, {
                  default: () => {
                    return `${escape(data2.rank)}`;
                  }
                })} ${validate_component(Table_cell, "Table.Cell").$$render($$result, { class: "text-center text-background" }, {}, {
                  default: () => {
                    return `${escape(data2.radio)}`;
                  }
                })} ${validate_component(Table_cell, "Table.Cell").$$render($$result, { class: "text-center text-background" }, {}, {
                  default: () => {
                    return `${data2.vehicle && data2.duty ? ` ${validate_component(PopOver, "PopOver").$$render($$result, { vehicle: data2.vehicle }, {}, {})} ` : ` ${validate_component(Button, "Button").$$render($$result, { disabled: true }, {}, {
                      default: () => {
                        return `${validate_component(IconCar, "IconCar").$$render($$result, {}, {}, {})}`;
                      }
                    })} `}`;
                  }
                })} ${validate_component(Table_cell, "Table.Cell").$$render($$result, { class: "text-center text-background" }, {}, {
                  default: () => {
                    return `${data2.assignment ? ` ` : ``}`;
                  }
                })} `;
              }
            })}`;
          })}`;
        }
      })}`;
    }
  })}</div>`;
});
export {
  Page as default
};
