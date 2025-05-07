import { DOMParser } from 'xmldom';

export async function readRss() {
    const THELODE = 'https://mtulode.com/category/news/feed/';
    const a = [];
    const response = await fetch(THELODE);
    const str = await response.text();
    const data = new DOMParser().parseFromString(str, "text/xml");
    const items = data.getElementsByTagName("item");
    for(let i = 0; i < items.length; i++){
        a.push(items[i].textContent);
    }
    for(let i = 0; i<a.length; i++){
        console.log(a[i]);
    }
    return a;
}

readRss();