const reg="{{{((.|\n)+?)}}}|{{((.|\n)+?)}}",dataReg=new RegExp(reg,"g"),expressionReg=new RegExp(reg);function parseData(e){if(e.match(dataReg).forEach(t=>{const a=t.toString().trim().replace(/\n/g,"");e=e.replace(t,a)}),!expressionReg.test(e))return null;let t,a=0;const n=[];dataReg.lastIndex=0;for(let r=a;r<e.length;r++){let r=dataReg.exec(e);if(!r)break;getValue(a,t=r.index,e,n),parseValue(r,n),a=t+r[0].length}return getValue(a,e.length,e,n),n}function getValue(e,t,a,n){e<t&&n.push({value:a.slice(e,t)})}function parseValue(e,t){let a=/^{{{.*}}}$/.test(e[0])?e[1]:e[3];t.push({tag:!0,value:a.trim()})}exports.parseText=parseData;