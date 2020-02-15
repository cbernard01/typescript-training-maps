import {Map} from "./classes/Map";
import {User} from "./classes/User";
import {Company} from "./classes/Company";

const map = new Map("map");
const user = new User();
const company = new Company();

map.addMarker(user);
map.addMarker(company);
