webpackJsonp([1],{114:function(t,e,n){function s(t){n(455)}var i=n(11)(n(208),n(485),s,"data-v-faf80856",null);t.exports=i.exports},115:function(t,e,n){function s(t){n(453)}var i=n(11)(n(209),n(483),s,"data-v-c46eaa8a",null);t.exports=i.exports},122:function(t,e,n){"use strict";function s(){var t=a()({},c.b,{channel:"singer",page:"list",key:"all_all_all",pagesize:100,pagenum:1,hostUin:0,needNewCode:0,platform:"yqq",g_tk:16664029744});return n.i(o.a)("https://c.y.qq.com/v8/fcg-bin/v8.fcg",t,c.c)}function i(t){var e=a()({},c.b,{hostUin:0,needNewCode:0,platform:"yqq",order:"listen",begin:0,num:80,songstatus:1,singermid:t});return n.i(o.a)("https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg",e,c.c)}e.b=s,e.a=i;var r=n(79),a=n.n(r),o=n(123),c=n(53)},123:function(t,e,n){"use strict";function s(t,e,n){return t+=(t.indexOf("?")<0?"?":"&")+i(e),new a.a(function(e,s){c()(t,n,function(t,n){t?s(t):e(n)})})}function i(t){var e="";for(var n in t){var s=void 0!==t[n]?t[n]:"";e+="&"+n+"="+encodeURIComponent(s)}return e?e.substring(1):""}e.a=s;var r=n(124),a=n.n(r),o=n(457),c=n.n(o)},170:function(t,e,n){"use strict";var s=n(75),i=n(486),r=n(467),a=n.n(r),o=n(470),c=n.n(o),l=n(468),u=n.n(l),d=n(466),h=n.n(d),f=n(469),A=n.n(f);s.a.use(i.a),e.a=new i.a({routes:[{path:"/",redirect:"/recommend"},{path:"/recommend",component:a.a},{path:"/singer",component:c.a,children:[{path:":id",component:A.a}]},{path:"/rank",component:h.a},{path:"/search",component:u.a}]})},171:function(t,e,n){"use strict";var s=n(75),i=n(76),r=n(201),a=(n.n(r),n(202)),o=n(205),c=n(204),l=n(178);n.n(l);s.a.use(i.c);e.a=new i.c.Store({actions:r,getters:a,state:o.a,mutations:c.a,strict:!1,plugins:[]})},173:function(t,e){},175:function(t,e){t.exports="data:image/png;base64,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"},177:function(t,e,n){function s(t){n(449)}var i=n(11)(n(206),n(479),s,"data-v-73b00972",null);t.exports=i.exports},197:function(t,e,n){"use strict";function s(){var t=c()({},u.b,{platform:"h5",uin:0,needNewCode:1});return n.i(l.a)("https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg",t,u.c)}function i(){var t=c()({},u.b,{platform:"yqq",hostUin:0,sin:0,ein:29,sortId:5,needNewCode:0,categoryId:1e7,rnd:Math.random(),format:"json"});return h.a.get("/api/getDiscList",{params:t}).then(function(t){return a.a.resolve(t.data)})}e.a=s,e.b=i;var r=n(124),a=n.n(r),o=n(79),c=n.n(o),l=n(123),u=n(53),d=n(179),h=n.n(d)},198:function(t,e,n){"use strict";var s=n(125),i=n.n(s),r=function t(e){var n=e.id,s=e.name;i()(this,t),this.id=n,this.name=s,this.avatar="https://y.gtimg.cn/music/photo_new/T001R300x300M000"+n+".jpg?max_age=2592000"};e.a=r},199:function(t,e,n){"use strict";function s(t){return new o({id:t.songid,mid:t.songmid,singer:i(t.singer),name:t.songname,album:t.albumname,duration:t.interval,image:"https://y.gtimg.cn/music/photo_new/T002R300x300M000"+t.albummid+".jpg?max_age=2592000",url:"http://ws.stream.qqmusic.qq.com/"+t.songid+".m4a?fromtag=46"})}function i(t){var e=[];return t?(t.forEach(function(t){e.push(t.name)}),e.join("/")):""}e.a=s;var r=n(125),a=n.n(r),o=function t(e){var n=e.id,s=e.mid,i=e.singer,r=e.name,o=e.album,c=e.duration,l=e.image,u=e.url;a()(this,t),this.id=n,this.mid=s,this.singer=i,this.name=r,this.album=o,this.duration=c,this.image=l,this.url=u}},200:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(172),i=(n.n(s),n(75)),r=n(177),a=n.n(r),o=n(171),c=n(174),l=n.n(c),u=n(170),d=n(176),h=n.n(d),f=n(173);n.n(f);l.a.attach(document.body),i.a.use(h.a,{loading:n(175)}),new i.a({el:"#app",render:function(t){return t(a.a)},store:o.a,router:u.a})},201:function(t,e){},202:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"singer",function(){return s});var s=function(t){return t.singer}},203:function(t,e,n){"use strict";n.d(e,"a",function(){return s});var s="SET_SINGER"},204:function(t,e,n){"use strict";var s=n(221),i=n.n(s),r=n(203),a=i()({},r.a,function(t,e){t.singer=e});e.a=a},205:function(t,e,n){"use strict";var s={singer:{}};e.a=s},206:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(464),i=n.n(s),r=n(471),a=n.n(r);e.default={components:{MHeader:i.a,Tab:a.a}}},207:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(115),i=n.n(s),r=n(114),a=n.n(r),o=n(78);e.default={created:function(){this.touch={},this.listenScroll=!0,this.listHeight=[],this.probeType=3},data:function(){return{scrollY:-1,currentIndex:0,diff:-1}},props:{data:{type:Array,default:[]}},computed:{shortcutList:function(){return this.data.map(function(t){return t.title.substr(0,1)})},fixedTitle:function(){return this.scrollY>0?"":this.data[this.currentIndex]?this.data[this.currentIndex].title:""}},methods:{selectItem:function(t){this.$emit("select",t)},onShortcutTouchStart:function(t){var e=n.i(o.b)(t.target,"index"),s=t.touches[0];this.touch.y1=s.pageY,this.touch.anchorIndex=e,this._scrollTo(e)},onShortcutTouchMove:function(t){var e=t.touches[0];this.touch.y2=e.pageY;var n=(this.touch.y2-this.touch.y1)/18|0,s=parseInt(this.touch.anchorIndex)+n;this._scrollTo(s)},scroll:function(t){this.scrollY=t.y},_scrollTo:function(t){(t||0===t)&&(t<0?t=0:t>this.listHeight.length-2&&(t=this.listHeight.length-2),this.scrollY=-this.listHeight[t],this.$refs.listview.scrollToElement(this.$refs.listGroup[t],0))},_calculateHeight:function(){this.listHeight=[];var t=this.$refs.listGroup,e=0;this.listHeight.push(e);for(var n=0;n<t.length;n++){e+=t[n].clientHeight,this.listHeight.push(e)}}},watch:{data:function(){var t=this;setTimeout(function(){t._calculateHeight()},20)},scrollY:function(t){var e=this.listHeight;if(t>0)return void(this.currentIndex=0);for(var n=0;n<e.length;n++){var s=e[n],i=e[n+1];if(-t>=s&&-t<i)return this.currentIndex=n,void(this.diff=i+t)}this.currentIndex=e.length-2},diff:function(t){var e=t>0&&t<30?t-30:0;this.fixedTop!==e&&(this.fixedTop=e,this.$refs.fixed.style.transform="translate3d(0,"+e+"px,0)")}},components:{Scroll:i.a,Loading:a.a}}},208:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{title:{type:String,default:"正在载入..."}}}},209:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(127),i=n.n(s);e.default={props:{probeType:{type:Number,default:1},click:{type:Boolean,default:!0},data:{type:Array,default:null},listenScroll:{type:Boolean,default:!1}},mounted:function(){var t=this;setTimeout(function(){t._initScroll()},20)},methods:{_initScroll:function(){if(this.$refs.wrapper&&(this.scroll=new i.a(this.$refs.wrapper,{probeType:this.probeType,click:this.click}),this.listenScroll)){var t=this;this.scroll.on("scroll",function(e){t.$emit("scroll",e)})}},enable:function(){this.scroll&&this.scroll.enable()},disable:function(){this.scroll&&this.scroll.disable()},refresh:function(){this.scroll&&this.scroll.refresh()},scrollTo:function(){this.scroll&&this.scroll.scrollTo.apply(this.scroll,arguments)},scrollToElement:function(){this.scroll&&this.scroll.scrollToElement.apply(this.scroll,arguments)}},watch:{data:function(){var t=this;setTimeout(function(){t.refresh()},20)}}}},210:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(127),i=n.n(s),r=n(78);e.default={data:function(){return{dots:[],currentPageIndex:0}},props:{loop:{type:Boolean,default:!0},autoPlay:{type:Boolean,default:!0},interval:{type:Number,default:4e3}},mounted:function(){var t=this;setTimeout(function(){t._setSliderWidth(),t._initDots(),t._initSlider(),t.autoPlay&&t._play()},20),window.addEventListener("resize",function(){t.slider&&(t._setSliderWidth(!0),t.slider.refresh())})},methods:{_setSliderWidth:function(t){this.children=this.$refs.sliderGroup.children;for(var e=0,s=this.$refs.slider.clientWidth,i=0;i<this.children.length;i++){var a=this.children[i];n.i(r.c)(a,"slider-item"),a.style.width=s+"px",e+=s}this.loop&&!t&&(e+=2*s),this.$refs.sliderGroup.style.width=e+"px"},_initSlider:function(){var t=this;this.slider=new i.a(this.$refs.slider,{scrollX:!0,scrollY:!1,momentum:!1,snap:!0,snapLoop:this.loop,snapSpeed:400}),this.slider.on("scrollEnd",function(){var e=t.slider.getCurrentPage().pageX;t.loop&&(e-=1),t.currentPageIndex=e,t.autoPlay&&(clearTimeout(t.timer),t._play())})},_initDots:function(){this.dots=new Array(this.children.length)},_play:function(){var t=this,e=this.currentPageIndex+1;this.loop&&(e+=1),this.timer=setTimeout(function(){t.slider.goToPage(e,0,400)},this.interval)}},destroyed:function(){clearTimeout(this.timer)}}},211:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{songs:{type:Array,default:[]}},methods:{getDesc:function(t){return t.singer+" 。"+t.album}}}},212:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},213:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(115),i=n.n(s),r=n(463),a=n.n(r),o=n(114),c=n.n(o),l=n(78),u=n.i(l.a)("transform"),d=n.i(l.a)("backdrop-filter");e.default={props:{bgImage:{type:String,default:""},songs:{type:Array,default:[]},title:{type:String,default:""}},data:function(){return{scrollY:0}},computed:{bgStyle:function(){return"background-image:url("+this.bgImage+")"}},created:function(){this.probeType=3,this.listenScroll=!0},mounted:function(){this.imageHeight=this.$refs.bgImage.clientHeight,this.minTranslateY=40-this.imageHeight,this.$refs.list.$el.style.top=this.$refs.bgImage.clientHeight+"px"},methods:{scroll:function(t){this.scrollY=t.y},back:function(){this.$router.back()}},watch:{scrollY:function(t){var e=Math.max(this.minTranslateY,t),n=0,s=1,i=0,r=Math.abs(t/this.imageHeight);t>0?(s=1+r,n=10):i=Math.min(20*r,20),this.$refs.layer.style[u]="translate3d(0, "+e+"px, 0)",this.$refs.filter.style[d]="blur("+i+"px)",t<this.minTranslateY?(n=10,this.$refs.bgImage.style.paddingTop=0,this.$refs.bgImage.style.height="40px",this.$refs.playBtn.style.display="none"):(this.$refs.bgImage.style.paddingTop="70%",this.$refs.bgImage.style.height=0,this.$refs.playBtn.style.display=""),this.$refs.bgImage.style.zIndex=n,this.$refs.bgImage.style[u]="scale("+s+")"}},components:{Scroll:i.a,SongList:a.a,Loading:c.a}}},214:function(t,e){},215:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(114),i=n.n(s),r=n(115),a=n.n(r),o=n(462),c=n.n(o),l=n(197),u=n(53);e.default={data:function(){return{recommends:[],discList:[]}},created:function(){this._getRecommend(),this._getDiscList()},methods:{_getRecommend:function(){var t=this;n.i(l.a)().then(function(e){e.code===u.a&&(t.recommends=e.data.slider)})},_getDiscList:function(){var t=this;n.i(l.b)().then(function(e){e.code===u.a&&(t.discList=e.data.list)})},loadImage:function(){this.checkLoaded||(this.$refs.scroll.refresh(),this.checkLoaded=!0)}},components:{Slider:c.a,Scroll:a.a,Loading:i.a}}},216:function(t,e){},217:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(126),i=n.n(s),r=n(76),a=n(122),o=n(53),c=n(199),l=n(465),u=n.n(l);e.default={data:function(){return{songs:[]}},computed:i()({title:function(){return this.singer.name},bgImage:function(){return this.singer.avatar}},n.i(r.a)(["singer"])),created:function(){console.log(this.singer),this._getDetail()},methods:{_getDetail:function(){var t=this;if(!this.singer.id)return void this.$router.push("/singer");n.i(a.a)(this.singer.id).then(function(e){e.code===o.a&&(t.songs=t._normalizeSongs(e.data.list),console.log(t.songs))})},_normalizeSongs:function(t){var e=[];return t.forEach(function(t){var s=t.musicData;s.songid&&s.albumid&&e.push(n.i(c.a)(s))}),e}},components:{MusicList:u.a}}},218:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(126),i=n.n(s),r=n(122),a=n(53),o=n(198),c=n(461),l=n.n(c),u=n(76);e.default={data:function(){return{singers:[]}},created:function(){this._getSingerList()},methods:i()({selectSinger:function(t){this.$router.push({path:"/singer/"+t.id}),this.setSinger(t)},_getSingerList:function(){var t=this;n.i(r.b)().then(function(e){e.code===a.a&&(t.singers=t._normalizeSinger(e.data.list))})},_normalizeSinger:function(t){var e={hot:{title:"热门",items:[]}};t.forEach(function(t,n){n<10&&e.hot.items.push(new o.a({id:t.Fsinger_mid,name:t.Fsinger_name}));var s=t.Findex;e[s]||(e[s]={title:s,items:[]}),e[s].items.push(new o.a({id:t.Fsinger_mid,name:t.Fsinger_name}))});var n=[],s=[];for(var i in e){var r=e[i];r.title.match(/[a-zA-Z]/)?s.push(r):"热门"===r.title&&n.push(r)}return s.sort(function(t,e){return t.title.charCodeAt(0)-e.title.charCodeAt(0)}),n.concat(s)}},n.i(u.b)({setSinger:"SET_SINGER"})),components:{Listview:l.a}}},219:function(t,e){},442:function(t,e){},443:function(t,e){},444:function(t,e){},445:function(t,e){},446:function(t,e){},447:function(t,e){},448:function(t,e){},449:function(t,e){},450:function(t,e){},451:function(t,e){},452:function(t,e){},453:function(t,e){},454:function(t,e){},455:function(t,e){},460:function(t,e){t.exports="data:image/gif;base64,R0lGODlhZABkAKIEAN7e3rq6uv///5mZmQAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpBRjA4RUZDMDI3MjA2ODExODA4M0Y1OTQyMzVDRDM3MyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCMzE0Rjk3NDdDRTgxMUUzOUJCRjk0NjAxMUE1NzRBMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCMzE0Rjk3MzdDRTgxMUUzOUJCRjk0NjAxMUE1NzRBMCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RDVBMTZDQjczOTIwNjgxMTgwODNGNTk0MjM1Q0QzNzMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QUYwOEVGQzAyNzIwNjgxMTgwODNGNTk0MjM1Q0QzNzMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+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"},461:function(t,e,n){function s(t){n(445)}var i=n(11)(n(207),n(475),s,"data-v-36e82cfb",null);t.exports=i.exports},462:function(t,e,n){function s(t){n(454)}var i=n(11)(n(210),n(484),s,"data-v-d589a78a",null);t.exports=i.exports},463:function(t,e,n){function s(t){n(444)}var i=n(11)(n(211),n(474),s,"data-v-215b2a49",null);t.exports=i.exports},464:function(t,e,n){function s(t){n(447)}var i=n(11)(n(212),n(477),s,"data-v-56a58140",null);t.exports=i.exports},465:function(t,e,n){function s(t){n(451)}var i=n(11)(n(213),n(481),s,"data-v-77c0eaa0",null);t.exports=i.exports},466:function(t,e,n){function s(t){n(443)}var i=n(11)(n(214),n(473),s,"data-v-106fcaa0",null);t.exports=i.exports},467:function(t,e,n){function s(t){n(450)}var i=n(11)(n(215),n(480),s,"data-v-74b4415a",null);t.exports=i.exports},468:function(t,e,n){function s(t){n(442)}var i=n(11)(n(216),n(472),s,"data-v-0e6b8440",null);t.exports=i.exports},469:function(t,e,n){function s(t){n(452)}var i=n(11)(n(217),n(482),s,"data-v-89caf134",null);t.exports=i.exports},470:function(t,e,n){function s(t){n(446)}var i=n(11)(n(218),n(476),s,"data-v-4b8ff140",null);t.exports=i.exports},471:function(t,e,n){function s(t){n(448)}var i=n(11)(n(219),n(478),s,"data-v-6919f4cc",null);t.exports=i.exports},472:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",[t._v("\n  搜索页面\n")])},staticRenderFns:[]}},473:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",[t._v("\n  排行页面\n")])},staticRenderFns:[]}},474:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"song-list"},[n("ul",t._l(t.songs,function(e){return n("li",{key:e.id,staticClass:"item"},[n("div",{staticClass:"content"},[n("h2",{staticClass:"name"},[t._v(t._s(e.name))]),t._v(" "),n("p",{staticClass:"desc"},[t._v(t._s(t.getDesc(e)))])])])}))])},staticRenderFns:[]}},475:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("scroll",{ref:"listview",staticClass:"listview",attrs:{data:t.data,listenScroll:t.listenScroll,probeType:t.probeType},on:{scroll:t.scroll}},[n("ul",t._l(t.data,function(e){return n("li",{ref:"listGroup",refInFor:!0,staticClass:"list-group"},[n("h2",{staticClass:"list-group-title"},[t._v(t._s(e.title))]),t._v(" "),n("ul",t._l(e.items,function(e){return n("li",{staticClass:"list-group-item",on:{click:function(n){t.selectItem(e)}}},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.avatar,expression:"item.avatar"}],staticClass:"avatar"}),t._v(" "),n("span",{staticClass:"name"},[t._v(t._s(e.name))])])}))])})),t._v(" "),n("div",{staticClass:"list-shortcut",on:{touchstart:t.onShortcutTouchStart,touchmove:function(e){e.stopPropagation(),e.preventDefault(),t.onShortcutTouchMove(e)}}},[n("ul",t._l(t.shortcutList,function(e,s){return n("li",{staticClass:"item",class:{current:t.currentIndex===s},attrs:{"data-index":s}},[t._v("\n        "+t._s(e)+"\n      ")])}))]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.fixedTitle,expression:"fixedTitle"}],ref:"fixed",staticClass:"list-fixed"},[n("h1",{staticClass:"fixed-title"},[t._v(t._s(t.fixedTitle))])]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.data.length,expression:"!data.length"}],staticClass:"loading-container"},[n("loading")],1)])},staticRenderFns:[]}},476:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"singer"},[n("Listview",{attrs:{data:t.singers},on:{select:t.selectSinger}}),t._v(" "),n("router-view")],1)},staticRenderFns:[]}},477:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-header"},[n("div",{staticClass:"icon"}),t._v(" "),n("h1",{staticClass:"text"},[t._v("Chicken Music")]),t._v(" "),n("router-link",{staticClass:"mine",attrs:{tag:"div",to:"/user"}},[n("i",{staticClass:"icon-mine"})])],1)},staticRenderFns:[]}},478:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tab"},[n("router-link",{staticClass:"tab-item",attrs:{tag:"div",to:"/recommend"}},[n("span",{staticClass:"tab-link"},[t._v("推荐")])]),t._v(" "),n("router-link",{staticClass:"tab-item",attrs:{tag:"div",to:"/singer"}},[n("span",{staticClass:"tab-link"},[t._v("歌手")])]),t._v(" "),n("router-link",{staticClass:"tab-item",attrs:{tag:"div",to:"/rank"}},[n("span",{staticClass:"tab-link"},[t._v("排行")])]),t._v(" "),n("router-link",{staticClass:"tab-item",attrs:{tag:"div",to:"/search"}},[n("span",{staticClass:"tab-link"},[t._v("搜索")])])],1)},staticRenderFns:[]}},479:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("m-header"),t._v(" "),n("tab"),t._v(" "),n("keep-alive",[n("router-view")],1)],1)},staticRenderFns:[]}},480:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"recommend"},[n("scroll",{ref:"scroll",staticClass:"recommend-content",attrs:{data:t.discList}},[n("div",[t.recommends.length?n("div",{ref:"sliderWrapper",staticClass:"slider-wrapper"},[n("slider",t._l(t.recommends,function(e){return n("div",{key:e.id},[n("a",{attrs:{href:e.linkUrl}},[n("img",{staticClass:"needsclick",attrs:{src:e.picUrl},on:{load:t.loadImage}})])])}))],1):t._e(),t._v(" "),n("div",{staticClass:"recommend-list"},[n("h1",{staticClass:"list-title"},[t._v("热门歌单推荐")]),t._v(" "),n("ul",t._l(t.discList,function(e){return n("li",{key:e.id,staticClass:"item"},[n("div",{staticClass:"icon"},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.imgurl,expression:"item.imgurl"}],attrs:{width:"60",height:"60"}})]),t._v(" "),n("div",{staticClass:"text"},[n("h2",{staticClass:"name",domProps:{innerHTML:t._s(e.creator.name)}}),t._v(" "),n("p",{staticClass:"desc",domProps:{innerHTML:t._s(e.dissname)}})])])}))])]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.discList.length,expression:"!discList.length"}],staticClass:"loading-container"},[n("loading")],1)])],1)},staticRenderFns:[]}},481:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"music-list"},[n("div",{staticClass:"back",on:{click:t.back}},[n("i",{staticClass:"icon-back"})]),t._v(" "),n("h1",{staticClass:"title",domProps:{innerHTML:t._s(t.title)}}),t._v(" "),n("div",{ref:"bgImage",staticClass:"bg-image",style:t.bgStyle},[n("div",{staticClass:"play-wrapper"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.songs.length>0,expression:"songs.length>0"}],ref:"playBtn",staticClass:"play"},[n("i",{staticClass:"icon-play"}),t._v(" "),n("span",{staticClass:"text"},[t._v("随机播放全部")])])]),t._v(" "),n("div",{ref:"filter",staticClass:"filter"})]),t._v(" "),n("div",{ref:"layer",staticClass:"bg-layer"}),t._v(" "),n("scroll",{ref:"list",staticClass:"list",attrs:{"probe-type":t.probeType,"listen-scroll":t.listenScroll,data:t.songs},on:{scroll:t.scroll}},[n("div",{staticClass:"song-list-wrapper"},[n("song-list",{attrs:{songs:t.songs}})],1),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.songs.length,expression:"!songs.length"}],staticClass:"loading-container"},[n("loading")],1)])],1)},staticRenderFns:[]}},482:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"slide"}},[n("music-list",{attrs:{title:t.title,songs:t.songs,"bg-image":t.bgImage}})],1)},staticRenderFns:[]}},483:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{ref:"wrapper"},[t._t("default")],2)},staticRenderFns:[]}},484:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"slider",staticClass:"slider"},[n("div",{ref:"sliderGroup",staticClass:"slider-group"},[t._t("default")],2),t._v(" "),n("div",{staticClass:"dots"},t._l(t.dots,function(e,s){return n("span",{key:s,staticClass:"dot",class:{active:t.currentPageIndex===s}})}))])},staticRenderFns:[]}},485:function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"loading"},[s("img",{attrs:{width:"24",height:"24",src:n(460)}}),t._v(" "),s("p",{staticClass:"desc"},[t._v(t._s(t.title))])])},staticRenderFns:[]}},53:function(t,e,n){"use strict";n.d(e,"b",function(){return s}),n.d(e,"c",function(){return i}),n.d(e,"a",function(){return r});var s={g_tk:5381,inCharset:"utf-8",outCharset:"utf-8",notice:0,format:"jsonp"},i={param:"jsonpCallback"},r=0},78:function(t,e,n){"use strict";function s(t,e){return new RegExp("(^|\\s)"+e+"(\\s|$)").test(t.className)}function i(t,e){if(!s(t,e)){var n=t.className.split(" ");n.push(e),t.className=n.join(" ")}}function r(t,e,n){return n?t.setAttribute("data-"+e,n):t.getAttribute("data-"+e)}function a(t){return!1!==c&&("standard"===c?t:c+t.charAt(0).toUpperCase()+t.substr(1))}e.c=i,e.b=r,e.a=a;var o=document.createElement("div").style,c=function(){var t={webkit:"webkitTransform",Moz:"MozTransform",O:"OTransform",ms:"msTransform",standard:"transform"};for(var e in t)if(void 0!==o[t[e]])return e;return!1}()}},[200]);
//# sourceMappingURL=app.3f86d064fd2244210fd6.js.map