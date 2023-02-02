/*
 Custom Event Dispatcher
 
 Sets `target` in event data.

 https://svelte.dev/repl/c93cbf99a8ca4f44912e662a8e3cbef7?version=3.37.0

*/

import { get_current_component } from 'svelte/internal';

export default function createEventDispatcher() {
  const component = get_current_component();
  return (type: string, target: { dispatchEvent: (arg0: CustomEvent<any>) => void }, detail: any) => {
    const callbacks = component.$$.callbacks[type];
    if (callbacks) {
      const event = new CustomEvent(type, { detail });
      target.dispatchEvent(event);
      callbacks.slice().forEach((fn: { call: (arg0: any, arg1: CustomEvent<any>) => void }) => {
        fn.call(component, event);
      });
    }
  };
}
