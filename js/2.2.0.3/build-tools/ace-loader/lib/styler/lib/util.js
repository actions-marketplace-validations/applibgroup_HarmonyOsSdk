const{DEVICE_LEVEL:DEVICE_LEVEL}=require("../../lite/lite-enum");exports.hyphenedToCamelCase=function(r){return r.replace(/-([a-z])/g,function(r,e){return e.toUpperCase()})},exports.camelCaseToHyphened=function(r){return r.replace(/([A-Z])/g,function(r,e){return"string"==typeof e?"-"+e.toLowerCase():e})},exports.isValidValue=function(r){return"number"==typeof r||"string"==typeof r},exports.splitAttr=function(r,e,o){const t=e.toString().trim().split(/\s+/);if(t)switch(t.length){case 1:o.forEach(function(e){r[e]=t[0]});break;case 2:o.forEach(function(e,o){r[e]=o%2?t[1]:t[0]});break;case 3:o.forEach(function(e,o){r[e]=o%2?t[1]:t[o]});break;default:o.forEach(function(e,o){r[e]=t[o]})}};const RICH_SPLECIAL_ATTR={MARGIN:"margin",PADDING:"padding",BORDER:"border",BORDER_WIDTH:"borderWidth",BORDER_COLOR:"borderColor",BORDER_STYLE:"borderStyle",BORDER_RADIUS:"borderRadius",BORDER_BOTTOM:"borderBottom",BORDER_RIGHT:"borderRight",BORDER_LEFT:"borderLeft",BORDER_TOP:"borderTop",GRID_GAP:"gridGap",BOX_SHADOW:"boxShadow",ANIMATION:"animation"},LITE_SPLECIAL_ATTR={MARGIN:"margin",PADDING:"padding",BORDER_WIDTH:"borderWidth",BORDER_COLOR:"borderColor"};exports.SPLECIAL_ATTR=process.env.DEVICE_LEVEL===DEVICE_LEVEL.LITE?LITE_SPLECIAL_ATTR:RICH_SPLECIAL_ATTR;