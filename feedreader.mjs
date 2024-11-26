import { access, writeFile } from 'fs';
import { getLinks, saveLinks } from './feedmanager.mjs';
import { constants } from 'buffer';

const feeds = await getLinks();

feed.push('https://www.tutplus.com');

await saveLinks(feeds);

export async function getLinks()
{
    try
    {
        await access(jsonFile, constants.F_OK);
    }
    catch(error)
    {
        await writeFile(jsonFile, JSON.stringify([]));
    }

    const contents = await readFile(jsonFile, {encoding: 'UTF8'});

    return JSON.parse(contents);
}

export async function saveLink(links)
{
    await writeFile(JSONfile,stringify(links));
}