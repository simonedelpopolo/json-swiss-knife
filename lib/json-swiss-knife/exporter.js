import * as jsn from '../json_swiss_knife.js'
import { is_json as i_j, is_jsonSymbol as i_js } from './is_json.js'
import { parse as p, parseSymbol as ps } from './parse.js'
import { property_value as p_v, property_valueSymbol as p_vs } from './property_value.js'

const json_swiss_knife = jsn
export default json_swiss_knife

export const is_json = i_j
export const is_jsonSymbol = i_js

export const parse = p
export const parseSymbol = ps

export const property_value = p_v
export const property_valueSymbol = p_vs
