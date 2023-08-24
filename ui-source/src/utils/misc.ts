import { fetchNui } from './fetchNui';

export const isEnvBrowser = (): boolean => !(window as any).invokeNative;

export let IS_DEV = false;
// THIS CODE EDITS THE TABLES AND HIDE IT, IF THIS CODE ISNT PRESENT THE TABLES WILL SHOW ONE AFTER ANOTHER

//SVELTE doesn't load the json directly from the public directory so with this function you can load the json
export async function loadJson(url: RequestInfo): Promise<any> {
  const response = await fetch(url);
  return await response.json();
}
// This send an event to the lua side and display a notify with the message
export async function SendMessage(message: string): Promise<void> {
  await fetchNui('sendMessage', { message: message });
}
