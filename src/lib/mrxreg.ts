// MetRex register helpers
import type { MrxRegisterEntry } from './mrx-demo-defs';
import { base } from '$app/paths';

const suffix = "register.json"

// get the content from the temp website
export async function getRegisterEntry(mrxId: string): Promise<MrxRegisterEntry> {
  // console.log(` generic reg fetch --  ${base}/reg/${mrxId}/${suffix}`)

  return await fetch(`${base}/reg/${mrxId}/${suffix}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      // console.log(` generic reg fetch -- OK`)
      return response.json()
    })
    .catch((error) => {
      console.log(`Could not fetch ${base}/${mrxId}/${suffix}: ${error}`)
    });
}
