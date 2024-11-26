import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);console.log('Loading feeds from:', jsonfile);
const __dirname = dirname(__filename);
const jsonfile = join(__dirname, 'feeds.json');

cconsole.log(jsonFile);