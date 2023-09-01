import { Component, JSXElement } from 'solid-js';

const AppSpace: Component<{ children: JSXElement }> = (props) => {
  return (
    <div class='absolute rounded right-0 w-[56vw] h-full '>
      {props.children}
    </div>
  );
};

export default AppSpace;
