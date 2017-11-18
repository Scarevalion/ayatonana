import Environment from "./config.json";
import Client from "./src/Client";

import AyaInteractions from './interactions/Aya.json';
import NanaInteractions from './interactions/Nana.json';

const client = new Client(Environment, { "Aya": AyaInteractions, "Nana": NanaInteractions });
client.run();