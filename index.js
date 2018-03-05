#!/usr/bin/env node 

import Environment from "./config.json";
import Client from "./src/Client";

const client = new Client(Environment);
client.run();
