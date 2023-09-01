import { JSX } from 'solid-js';

const Container = (props: {
  children:
    | number
    | boolean
    | Node
    | JSX.ArrayElement
    | (string & {})
    | null
    | undefined;
}) => {
  return (
    <div
      id='container'
      class='absolute rounded m-auto top-0 bottom-0 left-0 right-0 bg-foreground  w-[60vw] h-[70vh]'
    >
      {props.children}
    </div>
  );
};
export default Container;
