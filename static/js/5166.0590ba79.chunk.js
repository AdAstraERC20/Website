"use strict";(self.webpackChunkAd_Astra=self.webpackChunkAd_Astra||[]).push([[5166],{5166:(t,e,a)=>{a.d(e,{EmojiDrawer:()=>c});var o=a(4709);var i=a(1792);const n='"Twemoji Mozilla", Apple Color Emoji, "Segoe UI Emoji", "Noto Color Emoji", "EmojiOne Color"';class c{constructor(){this._emojiShapeDict=new Map}destroy(){for(const[t,e]of this._emojiShapeDict)e instanceof ImageBitmap&&(null===e||void 0===e||e.close(),this._emojiShapeDict.delete(t))}draw(t){!function(t){const{context:e,particle:a,radius:o,opacity:i}=t,n=a.emojiData,c=2*o,s=e.globalAlpha;n&&(e.globalAlpha=i,e.drawImage(n,-o,-o,c,c),e.globalAlpha=s)}(t)}async init(t){const e=t.actualOptions;if(!i.h.find((t=>(0,o.dB)(t,e.particles.shape.type))))return;const a=[(0,o.mx)(n)],c=i.h.map((t=>e.particles.shape.options[t])).find((t=>!!t));c&&(0,o.KH)(c,(t=>{t.font&&a.push((0,o.mx)(t.font))})),await Promise.all(a)}particleDestroy(t){delete t.emojiData}particleInit(t,e){var a;const i=e.shapeData;if(null===i||void 0===i||!i.value)return;const c=(0,o.wA)(i.value,e.randomIndexData),s=null!==(a=i.font)&&void 0!==a?a:n;if(!c)return;const l="".concat(c,"_").concat(s),r=this._emojiShapeDict.get(l);if(r)return void(e.emojiData=r);const p=2*(0,o.KI)(e.size.value);let f;const m=(0,o.KI)(e.size.value);if("undefined"!==typeof OffscreenCanvas){const t=new OffscreenCanvas(p,p),e=t.getContext("2d");if(!e)return;e.font="400 ".concat(2*m,"px ").concat(s),e.textBaseline="middle",e.textAlign="center",e.fillText(c,m,m),f=t.transferToImageBitmap()}else{const t=document.createElement("canvas");t.width=p,t.height=p;const e=t.getContext("2d");if(!e)return;e.font="400 ".concat(2*m,"px ").concat(s),e.textBaseline="middle",e.textAlign="center",e.fillText(c,m,m),f=t}this._emojiShapeDict.set(l,f),e.emojiData=f}}}}]);
//# sourceMappingURL=5166.0590ba79.chunk.js.map