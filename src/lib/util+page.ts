// fetch one or more YAML files for a demo
import * as yaml from 'js-yaml';

type svelteFetch = (input: RequestInfo | URL, init?: RequestInit | undefined) => Promise<Response>

//return an array of objects in the same order as the array of source urls
export const fetchData = async (fetch: svelteFetch, yamlUrls: string[]): Promise<unknown[]> => {

  const yamlDoc = await Promise.all(
    yamlUrls.map(async url => {
      const resp = await fetch(url)
      return resp.text()
    }))

    return yamlDoc.map(doc => yaml.load(doc))
};