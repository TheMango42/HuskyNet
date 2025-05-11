import { XMLParser, XMLBuilder } from 'fast-xml-parser';

export async function readRss(rssFeedUrl) {
    const a = [];
    const response = await fetch(rssFeedUrl);
    const str = await response.text();
    const data = new XMLParser().parse(str, "text/xml");
    const builder = new XMLBuilder();
    const items = builder.build(data);
    for(let i = 0; i < items.length; i++){
        a.push(items);
        console.log(items);
    }
    return a;
}
const Lode = 'https://mtulode.com/category/news/feed/';
readRss(Lode);