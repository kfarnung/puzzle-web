(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{133:function(e,t,a){"use strict";var n=a(20),r=a(21),i=a(32),o=a(30),s=a(31),u=a(136),l=a.n(u),c=a(0),d=a(134),h=a(135),p=function(e){function t(e){var a;Object(n.a)(this,t),(a=Object(i.a)(this,Object(o.a)(t).call(this,e))).VERSION_STORAGE_KEY="puzztoolVersion";var r=d.a.getObject(a.VERSION_STORAGE_KEY);return a.versionIncreased(r,h.a)&&(d.a.clear(),d.a.setObject(a.VERSION_STORAGE_KEY,h.a)),a}return Object(s.a)(t,e),Object(r.a)(t,[{key:"versionIncreased",value:function(e,t){return null==e||1===l()(t,e)}},{key:"componentDidMount",value:function(){this.restoreState(),this.updateState()}},{key:"updateState",value:function(){this.onUpdateState(),this.saveState()}},{key:"saveState",value:function(){d.a.setObject(this.getLocalStorageKey(),this.onSaveState())}},{key:"restoreState",value:function(){this.onRestoreState(d.a.getObject(this.getLocalStorageKey()))}}]),t}(c.Component);t.a=p},134:function(e,t,a){"use strict";var n=a(20),r=a(21),i=function(){function e(){Object(n.a)(this,e)}return Object(r.a)(e,null,[{key:"isSupported",value:function(){if(void 0===this._isSupported){var e=window.localStorage,t="__storage_test__";try{e.setItem(t,t),e.removeItem(t),this._isSupported=!0}catch(a){this._isSupported=a instanceof DOMException&&(22===a.code||1014===a.code||"QuotaExceededError"===a.name||"NS_ERROR_DOM_QUOTA_REACHED"===a.name)&&0!==e.length}}return this._isSupported}},{key:"getItem",value:function(e){return this.isSupported()?window.localStorage.getItem(this.getKey(e)):null}},{key:"getObject",value:function(e){if(this.isSupported()){var t=window.localStorage.getItem(this.getKey(e));if(null!==t)return JSON.parse(t)}return null}},{key:"setItem",value:function(e,t){this.isSupported()&&window.localStorage.setItem(this.getKey(e),t)}},{key:"setObject",value:function(e,t){this.isSupported()&&window.localStorage.setItem(this.getKey(e),JSON.stringify(t))}},{key:"clear",value:function(){this.isSupported()&&window.localStorage.clear()}},{key:"getKey",value:function(e){return"".concat(this._prefix,"_").concat(e)}}]),e}();i._isSupported=void 0,i._prefix="puzztool",t.a=i},135:function(e,t,a){"use strict";a.d(t,"a",function(){return n});var n="0.7.0"},211:function(e,t,a){},220:function(e,t,a){},268:function(e,t,a){"use strict";a.r(t);var n=a(20),r=a(21),i=a(32),o=a(30),s=a(31),u=a(0),l=a.n(u),c=a(142),d=a(218),h=a.n(d),p=a(155),g=a.n(p),f=a(214),v=a.n(f),S=a(212),m=a.n(S),y=a(215),_=a.n(y),C=a(157),x=a.n(C),b=a(213),E=a.n(b),k=a(137),w=a.n(k),O=a(132),I=a(133),T=(a(211),function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(i.a)(this,Object(o.a)(t).call(this,e)))._input=l.a.createRef(),a._gridInputText="",a._wordListInputText="",a._useCardinals=!0,a._useDiagonals=!0,a.state={gridInputText:"",wordListInputText:"",useCardinals:!0,useDiagonals:!0},a}return Object(s.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){Object(c.a)(Object(o.a)(t.prototype),"componentDidMount",this).call(this);var e=this._input.current;e&&e.focus()}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"WordSearchComponent"},l.a.createElement(m.a,{fluid:!0},l.a.createElement(E.a,{noGutters:!0},l.a.createElement(v.a,{md:4},l.a.createElement(g.a,{className:"WordSearchComponent-ListInput"},l.a.createElement(g.a.Header,null,"Enter the list of words to find, one word per line"),l.a.createElement(x.a,{as:"textarea",className:"WordSearchComponent-ListInput",label:"Enter the word search grid, one row of letters per line",onChange:function(t){return e.onListTextChanged(t)},placeholder:"Word List To Find",value:this.state.wordListInputText}),this.renderEmptyDirection(),l.a.createElement(_.a,{checked:this._useDiagonals,id:"WordSearchComponent-checkbox-diagonal",label:"Use diagonal directions",onChange:function(t){return e.onDiagonalCheckboxChange(t)},type:"checkbox"}),l.a.createElement(_.a,{checked:this._useCardinals,id:"WordSearchComponent-checkbox-cardinal",label:"Use cardinal directions",onChange:function(t){return e.onCardinalCheckboxChange(t)},type:"checkbox"}))),l.a.createElement(v.a,{md:8},l.a.createElement(g.a,{className:"WordSearchComponent-GridInput"},l.a.createElement(g.a.Header,null,"Enter the word search grid, one row of letters per line"),l.a.createElement(x.a,{as:"textarea",onChange:function(t){return e.onGridTextChanged(t)},placeholder:"Grid Text",ref:this._input,spellCheck:!1,value:this.state.gridInputText})))),l.a.createElement(E.a,{noGutters:!0},l.a.createElement(v.a,{md:12},l.a.createElement(g.a,{className:"WordSearchComponent-GridOutput"},l.a.createElement(g.a.Header,null,"Output"),l.a.createElement(w.a,{className:"WordSearchComponent-TableOutput",borderless:!0},l.a.createElement("tbody",null,this.renderOutput())))))))}},{key:"getLocalStorageKey",value:function(){return"WordSearchComponent"}},{key:"onSaveState",value:function(){return{gridInputText:this._gridInputText,wordListInputText:this._wordListInputText,useDiagonals:this._useDiagonals,useCardinals:this._useCardinals}}},{key:"onRestoreState",value:function(e){null!==e&&(this._gridInputText=e.gridInputText,this._wordListInputText=e.wordListInputText,this._useDiagonals=e.useDiagonals,this._useCardinals=e.useCardinals)}},{key:"onUpdateState",value:function(){this.setState({gridInputText:this._gridInputText,wordListInputText:this._wordListInputText,useDiagonals:this._useDiagonals,useCardinals:this._useCardinals})}},{key:"onGridTextChanged",value:function(e){var t=e.target;this._gridInputText=t.value,this.updateState()}},{key:"onListTextChanged",value:function(e){var t=e.target;this._wordListInputText=t.value,this.updateState()}},{key:"onCardinalCheckboxChange",value:function(e){var t=e.target;this._useCardinals=t.checked,this.updateState()}},{key:"onDiagonalCheckboxChange",value:function(e){var t=e.target;this._useDiagonals=t.checked,this.updateState()}},{key:"renderEmptyDirection",value:function(){return this._useCardinals||this._useDiagonals?null:l.a.createElement(h.a,{variant:"warning"},"No directions are checked. No results will be shown.")}},{key:"renderOutput",value:function(){if(!this._gridInputText.trim())return[];var e,t=this._gridInputText.split(/\r?\n/),a=this._wordListInputText.split(/\r?\n/).filter(function(e){return e.length>0});e=[];var n,r=!0,i=!1,o=void 0;try{for(var s,u=t[Symbol.iterator]();!(r=(s=u.next()).done);r=!0){var c=s.value;e.push(c.split(""))}}catch(y){i=!0,o=y}finally{try{r||null==u.return||u.return()}finally{if(i)throw o}}n=this._useCardinals&&this._useDiagonals?O.WordSearchDirection.CardinalAndDiagonal:this._useCardinals?O.WordSearchDirection.Cardinal:this._useDiagonals?O.WordSearchDirection.Diagonal:O.WordSearchDirection.None;var d=new O.WordSearchSolver;d.setDirections(n),d.setGrid(e),d.setWords(a);for(var h=d.findWords(),p=this.highlightArray(e,h),g=[],f=0;f<e.length;f++){for(var v=[],S=0;S<e[f].length;S++){var m=S.toString()+f.toString();0!==p[f][S]?v.push(l.a.createElement("td",{key:m,className:"WordSearchComponent-HighlightChar"},e[f][S])):v.push(l.a.createElement("td",{key:m},e[f][S]))}g.push(l.a.createElement("tr",{key:f},v))}return g}},{key:"highlightArray",value:function(e,t){var a;a=[];var n=!0,r=!1,i=void 0;try{for(var o,s=e[Symbol.iterator]();!(n=(o=s.next()).done);n=!0){var u=o.value,l=Array.from({length:u.length},function(e,t){return 0});a.push(l)}}catch(x){r=!0,i=x}finally{try{n||null==s.return||s.return()}finally{if(r)throw i}}var c=!0,d=!1,h=void 0;try{for(var p,g=t[Symbol.iterator]();!(c=(p=g.next()).done);c=!0){var f=p.value,v=!0,S=!1,m=void 0;try{for(var y,_=f.points[Symbol.iterator]();!(v=(y=_.next()).done);v=!0){var C=y.value;a[C.y][C.x]=1}}catch(x){S=!0,m=x}finally{try{v||null==_.return||_.return()}finally{if(S)throw m}}}}catch(x){d=!0,h=x}finally{try{c||null==g.return||g.return()}finally{if(d)throw h}}return a}}]),t}(I.a)),D=(a(220),function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"WordSearch"},l.a.createElement("h2",null,"Word Search"),l.a.createElement(T,null))}}]),t}(u.Component));t.default=D}}]);
//# sourceMappingURL=16.62042bfd.chunk.js.map