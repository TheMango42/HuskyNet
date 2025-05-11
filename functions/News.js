import { XMLParser, XMLBuilder } from 'fast-xml-parser';

export async function readRss(rssFeedUrl) {
    const response = await fetch(rssFeedUrl);
    const str = await response.text();
    const options = {
        ignoreAttributes : false,
        attributeNamePrefix: '@_'
    };
    const data = new XMLParser(options).parse(str);
    const items = data.rss?.channel?.item ?? [];

    if (!Array.isArray(items)) {
        console.warn("No <item> nodes found");
        return [];
    }
    return items;
}
