(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2c658e9a"],{"62ad":function(e,a,t){"use strict";t("4160"),t("caad"),t("13d5"),t("45fc"),t("4ec9"),t("a9e3"),t("b64b"),t("d3b7"),t("ac1f"),t("3ca3"),t("5319"),t("2ca0"),t("159b"),t("ddb0");var s=t("ade3"),n=t("5530"),r=(t("4b85"),t("2b0e")),l=t("d9f7"),i=t("80d2"),c=["sm","md","lg","xl"],o=function(){return c.reduce((function(e,a){return e[a]={type:[Boolean,String,Number],default:!1},e}),{})}(),u=function(){return c.reduce((function(e,a){return e["offset"+Object(i["E"])(a)]={type:[String,Number],default:null},e}),{})}(),d=function(){return c.reduce((function(e,a){return e["order"+Object(i["E"])(a)]={type:[String,Number],default:null},e}),{})}(),m={col:Object.keys(o),offset:Object.keys(u),order:Object.keys(d)};function h(e,a,t){var s=e;if(null!=t&&!1!==t){if(a){var n=a.replace(e,"");s+="-".concat(n)}return"col"!==e||""!==t&&!0!==t?(s+="-".concat(t),s.toLowerCase()):s.toLowerCase()}}var v=new Map;a["a"]=r["a"].extend({name:"v-col",functional:!0,props:Object(n["a"])(Object(n["a"])(Object(n["a"])(Object(n["a"])({cols:{type:[Boolean,String,Number],default:!1}},o),{},{offset:{type:[String,Number],default:null}},u),{},{order:{type:[String,Number],default:null}},d),{},{alignSelf:{type:String,default:null,validator:function(e){return["auto","start","end","center","baseline","stretch"].includes(e)}},tag:{type:String,default:"div"}}),render:function(e,a){var t=a.props,n=a.data,r=a.children,i=(a.parent,"");for(var c in t)i+=String(t[c]);var o=v.get(i);return o||function(){var e,a;for(a in o=[],m)m[a].forEach((function(e){var s=t[e],n=h(a,e,s);n&&o.push(n)}));var n=o.some((function(e){return e.startsWith("col-")}));o.push((e={col:!n||!t.cols},Object(s["a"])(e,"col-".concat(t.cols),t.cols),Object(s["a"])(e,"offset-".concat(t.offset),t.offset),Object(s["a"])(e,"order-".concat(t.order),t.order),Object(s["a"])(e,"align-self-".concat(t.alignSelf),t.alignSelf),e)),v.set(i,o)}(),e(t.tag,Object(l["a"])(n,{class:o}),r)}})},e592:function(e,a,t){"use strict";t.r(a);var s=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("v-container",[t("v-row",{staticClass:"justify-space-around"},[t("v-btn",{staticClass:"btn-secondary",staticStyle:{float:"right"},on:{click:function(a){return e.clearRecord()}}},[e._v("Clear Dataset")]),t("v-tabs",{model:{value:e.viewType,callback:function(a){e.viewType=a},expression:"viewType"}},[t("v-tab",{key:"parsed",attrs:{ripple:""}},[e._v("Parsed")]),t("v-tab-item",{key:"parsed"},[t("v-container",{staticStyle:{border:"1px solid black"}},[e.Hashes.length?t("div",[e.selected.length?t("h5",[e._v("Selected: "),e._l(e.selected,(function(a){return t("span",[e._v(e._s(a)+"; ")])}))],2):e._e(),e.selected.length?t("v-btn",{staticClass:"btn-primary",on:{click:function(a){return e.plotRecords()}}},[e._v("Only use these Records")]):e._e(),t("b",[e._v("Current Dataset Records: "+e._s(e.Hashes.length)+" Records / "+e._s(e.Summary.labels.length)+" Columns")]),t("v-data-table",{attrs:{items:e.Hashes,headers:e.Summary.labels,"item-key":e.Summary.key.toString(),"show-select":""},model:{value:e.selected,callback:function(a){e.selected=a},expression:"selected"}})],1):e._e()])],1),t("v-tab",{key:"raw",attrs:{ripple:""}},[e._v("Raw")]),t("v-tab-item",{key:"raw"},[t("v-container",{staticStyle:{border:"1px solid black"}},[e.Summary?t("div",[t("h3",[e._v("Raw Data:")]),t("RawData")],1):t("div",[t("h3",[e._v("No Raw Data uploaded")])])])],1)],1)],1)],1)],1)},n=[],r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-container",[e.Original?t("div",[t("h3",{staticClass:"heading"},[e._v("Raw Data")]),t("v-row",{staticClass:"justify-space-around"},[t("v-col",[t("h3",[t("u",[e._v("Records")])]),t("h4",{staticClass:"message"},[e._v("File Type: "+e._s(e.Summary.source))]),t("h4",{staticClass:"message"},[e._v("Lines in File: "+e._s(e.Original.length))]),t("h4",{staticClass:"message"},[e._v("Records Found: "+e._s(e.Arrays.length))]),t("h5",[e._v("Header Line: "+e._s(e.Summary.header))]),t("hr"),t("h5",[e._v("Full Lines: "+e._s(e.Summary.details.fullLines.length))]),t("h5",[e._v("Partial Lines included: "+e._s(e.Summary.details.okLines.length))]),t("hr"),t("h5",[e._v("Blank Lines excluded: "+e._s(e.Summary.details.blankLines.length))]),t("h5",[e._v("Comment Lines excluded: "+e._s(e.Summary.details.commentLines.length))]),t("h5",[e._v("Partial Lines excluded: "+e._s(e.Summary.details.partialLines.length))])]),t("v-col",[t("h3",[t("u",[e._v("Columns")])]),t("h4",{staticClass:"message"},[e._v("Number: "+e._s(e.Summary.columns))]),e.Summary.details?t("h4",[e._v("Types:"),t("ul",e._l(e.Summary.details.columnTypes,(function(a,s){return t("li",[e._v(e._s(s+1)+": "+e._s(e.Summary.headers[s])+" = "+e._s(a))])})),0)]):e._e()])],1),t("hr"),t("p"),t("v-row",[t("v-tabs",{model:{value:e.hashKeys,callback:function(a){e.hashKeys=a},expression:"hashKeys"}},[t("v-tab",{key:"original",attrs:{ripple:""}},[e._v("Original")]),t("v-tab-item",{key:"original"},[t("p"),t("h3",{staticClass:"coloured"},[t("u",[e._v("Original Data")])]),e.Original?t("div",e._l(e.Original,(function(a,s){return t("h3",[t("b",[e._v(e._s(s+1)+" : ")]),t("pre",[t("span",{staticClass:"message"},[e._v(e._s(JSON.stringify(a,null,2)))])])])})),0):e._e()]),t("v-tab",{key:"arrays",attrs:{ripple:""}},[e._v("Arrays")]),t("v-tab-item",{key:"arrays"},[t("p"),t("h3",{staticClass:"coloured"},[t("u",[e._v("Data as Arrays")])]),e.Arrays&&e.Arrays.length?t("div",e._l(e.Arrays,(function(a,s){return t("h3",[t("b",[e._v(e._s(s+1)+" :")]),t("span",{staticClass:"message"},[e._v(e._s(JSON.stringify(a)))])])})),0):e._e()]),t("v-tab",{key:"hashes",attrs:{ripple:""}},[e._v("Hashes")]),t("v-tab-item",{key:"hashes"},[t("p"),t("h3",{staticClass:"coloured"},[t("u",[e._v("Data as Hashes")])]),e.Hashes&&e.Hashes.length?t("div",e._l(e.Hashes,(function(a,s){return t("h3",[t("b",[e._v(e._s(s+1)+" : ")]),t("span",{staticClass:"message"},[e._v(e._s(JSON.stringify(a)))])])})),0):e._e()]),t("v-tab",{key:"headers",attrs:{ripple:""}},[e._v("Headers")]),t("v-tab-item",{key:"headers"},[t("p"),t("h3",{staticClass:"coloured"},[t("u",[e._v("Data Headers")])]),e.Summary.header&&e.Summary.labels.length?t("div",e._l(e.Summary.labels,(function(a,s){return t("h3",[t("b",[e._v(e._s(s+1)+" : ")]),t("span",{staticClass:"message"},[e._v(e._s(JSON.stringify(a.text))+" ")]),t("span",[e._v("("+e._s(JSON.stringify(a.value))+")")])])})),0):e._e()]),e.columnData?t("v-tab",{key:"columns",attrs:{ripple:""}},[e._v("Columns")]):e._e(),e.columnData?t("v-tab-item",{key:"columns"},[t("p"),t("v-row",e._l(e.columnData,(function(a,s){return t("v-col",[t("h4",{staticClass:"coloured"},[e._v(e._s(s))]),e._l(a,(function(a,s){return t("h5",[e._v(e._s(s)+" = "+e._s(a))])}))],2)})),1)],1):e._e(),e.Summary&&e.Summary.details?t("v-tab",{key:"skipped",attrs:{ripple:""}},[e._v("Excluded")]):e._e(),e.Summary&&e.Summary.details?t("v-tab-item",{key:"skipped"},[t("h3",{staticClass:"coloured"},[t("u",[e._v("Skipped Lines")])]),e.Summary.details.partialLines&&e.Summary.details.partialLines.length?t("div",[t("h4",{staticClass:"coloured"},[e._v("(less than minimum columns):")]),e._l(e.Summary.details.partialLines,(function(a,s){return t("h5",[t("b",[e._v(e._s(e.Summary.details.partialLines[s])+" : ")]),t("span",{staticClass:"message"},[e._v(e._s(JSON.stringify(e.Original[a-1])))])])}))],2):e._e(),e.Summary.details.partialLines&&e.Summary.details.partialLines.length?t("div",[t("h4",{staticClass:"coloured"},[e._v("(ony 1 column populated):")]),e._l(e.Summary.commentLines,(function(a,s){return t("h5",[t("b",[e._v(e._s(e.Summary.details.commentLines[s])+" : ")]),t("span",{staticClass:"message"},[e._v(e._s(JSON.stringify(e.Original[a-1])))])])}))],2):e._e(),e.Summary&&e.Summary.details.partialLines&&e.Summary.details.commentLines&&!e.Summary.details.commentLines.length+!e.Summary.details.partialLines.length?t("div",[t("h4",[e._v("All lines included (no incomplete records or single value comment lines)")]),t("h4",[e._v(e._s(e.Summary.details.blankLines.length)+" Blank lines excluded ")])]):t("div",[t("h4",[e._v("OK: "+e._s(e.Summary.details.okLines.length))]),t("h4",[e._v("Full: "+e._s(e.Summary.details.fullLines.length))]),t("h4",[e._v("Lines: "+e._s(e.Summary.lines))])])]):e._e()],1)],1)],1):t("div",[t("b",[e._v("No Data Uploaded")])])])},l=[],i=(t("a15b"),{name:"RawData",data:function(){return{showRaw:!1,hashKeys:[],selected:[]}},created:function(){console.log("load Raw Data Page")},methods:{plotRecords:function(){console.log("Plot "+this.selected.join(", "))}},computed:{Dataset:function(){return this.$store.state.hash||{}},Original:function(){return this.Dataset.original},Summary:function(){return this.Dataset.summary},Hashes:function(){return this.Dataset.hashes},Arrays:function(){return this.Dataset.arrays},columnData:function(){return this.Dataset.columnData}}}),c=i,o=t("2877"),u=t("6544"),d=t.n(u),m=t("8336"),h=t("62ad"),v=t("a523"),_=t("132d"),y=t("0fd9"),p=t("71a3"),f=t("c671"),b=t("fe57"),g=Object(o["a"])(c,r,l,!1,null,null,null),S=g.exports;d()(g,{VBtn:m["a"],VCol:h["a"],VContainer:v["a"],VIcon:_["a"],VRow:y["a"],VTab:p["a"],VTabItem:f["a"],VTabs:b["a"]});var k={name:"DataView",data:function(){return{data:[],selected:[],show:"Parsed",viewType:"parsed"}},components:{RawData:S},props:{},created:function(){console.log("load Data Page")},methods:{clearRecord:function(){console.log("clear stored data hash"),this.$store.dispatch("setHash",{})}},computed:{Hashes:function(){return this.$store.state.hash.hashes},Summary:function(){return this.$store.state.hash.summary}}},w=k,C=t("8fea"),O=Object(o["a"])(w,s,n,!1,null,null,null);a["default"]=O.exports;d()(O,{VBtn:m["a"],VContainer:v["a"],VDataTable:C["a"],VRow:y["a"],VTab:p["a"],VTabItem:f["a"],VTabs:b["a"]})}}]);
//# sourceMappingURL=chunk-2c658e9a.1a0bf32e.js.map