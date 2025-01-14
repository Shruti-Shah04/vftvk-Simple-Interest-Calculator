function compute() {
    var principal = document.getElementById("principal").value;
    if (principal <= 0){
        alert("Enter a Positive Number!!")
        return false;
    }
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear() + parseInt(years);
    /*p = document.getElementById("principal").value;*/

    document.getElementById("result").innerHTML = document.getElementById("result").innerHTML = "if you deposit "  + principal + ",\<br\> at an interest rate of " + rate + "% \<br\> you will recieve an amount of " + interest + ",\<br\> in the year " + year + "\<br\>";
}

function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
}

function highlight() {
    var lumin=function(){'use strict';class a{constructor(a){this._root=a,this._resolve=null}_initializeOverlay(){if(!this._overlay){this._overlay=this._root.ownerDocument.createElement('div');const a=this._overlay.style;a.position='absolute',a.top=0,a.bottom=0,a.left=0,a.right=0,a.pointerEvents='none',a.userSelect='none',this._root.appendChild(this._overlay)}}_createInsNode(){const a=this._root.ownerDocument.createElement('ins'),b=a.style;return b.textDecoration='none',b.color='var(--lumin-color, currentColor)',b.background='var(--lumin-background-color, yellow)',a}_createBufferNode(){const a=this._root.ownerDocument.createElement('ins'),b=a.style;return b.textDecoration='none',b.color='transparent',b.opacity=0,a}_reset(){this._initializeOverlay(),this.stop(),this._map=[],this._charCount=0;const a=this._root.childNodes;for(let b=0;b<a.length;b++)a[b]!=this._overlay&&this._process(this._overlay,a[b])}_process(a,b){if(b.nodeType===Node.TEXT_NODE){const c=b.cloneNode(!1);c.textContent='';const d=b.textContent,e=this._createInsNode(),f=this._createBufferNode();e.appendChild(c),f.textContent=d,a.appendChild(e),a.appendChild(f);let g=d.length;g&&!d.trim().length&&(g=1),this._map.push({node:c,buffer:f,text:d,length:g,current:''}),this._charCount+=g}else if(b.nodeType===Node.ELEMENT_NODE){const c=b.cloneNode(!1);a.appendChild(c);const d=b.childNodes;if(d&&d.length)for(let a=0;a<d.length;a++)this._process(c,d[a])}}stop(){this._timer&&(clearTimeout(this._timer),delete this._timer),this._cancelPending()}clear(){this._overlay&&(this._root.removeChild(this._overlay),this._overlay=null)}start(a){return this._cancelPending(),this._overlay||this._reset(),this._charCount||(this._charCount=1),this._interval=a/this._charCount,this._cursor=0,new Promise(a=>{this._resolve=a,this._nextTick()})}_cancelPending(){this._resolve&&(this._resolve(!1),this._resolve=null)}_nextTick(){this._timer=setTimeout(()=>this._tick(),this._interval)}_tick(){if(this._cursor>=this._map.length)return void(this._resolve&&(this._resolve(!0),this._resolve=null));let a=this._map[this._cursor];const b=a.text.length-a.current.length;0>=b?(this._cursor++,this._tick()):(a.current=a.length?a.text.substring(0,a.current.length+1):a.text,a.node.textContent=a.current,a.buffer.textContent=a.text.substring(a.current.length),this._nextTick())}set progress(a){this.clear(),this._overlay||this._reset(),a=Math.min(100,Math.max(0,a));const b=Math.round(this._charCount*a/100);let c=0;for(const e of this._map){let a=b-c;if(0>=a)break;e.length<a?(e.current=e.text,e.node.textContent=e.current,e.buffer.textContent='',c+=e.length):(e.current=e.text.substring(0,a),e.node.textContent=e.current,e.buffer.textContent=e.text.substring(e.current.length),c+=a)}}}return function(b){return new a(b)}}();

}

