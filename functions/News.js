import { DOMParser } from 'xmldom';

export async function readRss(rssFeedUrl) {
    const a = [];
    const response = await fetch(rssFeedUrl);
    const str = await response.text();
    const data = new DOMParser().parseFromString(str, "text/xml");
    const items = data.getElementsByTagName("item");
    for(let i = 0; i < items.length; i++){
        a.push(items[i].textContent);
    }
    return a;
}
