(this.webpackJsonpjammming=this.webpackJsonpjammming||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var s,n=a(0),r=a(2),c=a.n(r),i=a(10),o=a.n(i),l=(a(16),a(7)),u=a.n(l),h=a(8),p=a(3),d=a(4),m=a(1),b=a(6),v=a(5),f=(a(18),a(19),function(e){Object(b.a)(a,e);var t=Object(v.a)(a);function a(e){var s;return Object(p.a)(this,a),(s=t.call(this,e)).state={searchTerm:""},s.search=s.search.bind(Object(m.a)(s)),s.handleTermChange=s.handleTermChange.bind(Object(m.a)(s)),s}return Object(d.a)(a,[{key:"handleTermChange",value:function(e){this.setState({searchTerm:e.target.value})}},{key:"search",value:function(){this.state.searchTerm&&this.props.onSearch(this.state.searchTerm)}},{key:"render",value:function(){return Object(n.jsxs)("div",{className:"SearchBar",children:[Object(n.jsx)("input",{value:this.state.searchTerm,placeholder:"Enter a song, artist or album",onChange:this.handleTermChange}),Object(n.jsx)("button",{className:"SearchButton",onClick:this.search,children:"SEARCH"})]})}}]),a}(c.a.Component)),j=(a(20),a(21),function(e){Object(b.a)(a,e);var t=Object(v.a)(a);function a(e){var s;return Object(p.a)(this,a),(s=t.call(this,e)).addTrack=s.addTrack.bind(Object(m.a)(s)),s.removeTrack=s.removeTrack.bind(Object(m.a)(s)),s}return Object(d.a)(a,[{key:"addTrack",value:function(){this.props.onAdd(this.props.track)}},{key:"removeTrack",value:function(){this.props.onRemove(this.props.track)}},{key:"renderAction",value:function(){return"true"===this.props.isRemoval?Object(n.jsx)("button",{className:"Track-action",onClick:this.removeTrack,children:"-"}):Object(n.jsx)("button",{className:"Track-action",onClick:this.addTrack,children:"+"})}},{key:"render",value:function(){return Object(n.jsxs)("div",{className:"Track",children:[Object(n.jsxs)("div",{className:"Track-information",children:[Object(n.jsx)("h3",{children:this.props.track.name}),Object(n.jsxs)("p",{children:[this.props.track.artist," | ",this.props.track.album]})]}),this.renderAction()]})}}]),a}(c.a.Component)),k=(a(22),function(e){Object(b.a)(a,e);var t=Object(v.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e=this,t=this.props.tracks.map((function(t){return Object(n.jsx)(j,{track:t,onAdd:e.props.onAdd,isRemoval:e.props.isRemoval,onRemove:e.props.onRemove},t.id)}));return Object(n.jsx)("div",{className:"TrackList",children:t})}}]),a}(c.a.Component)),y=function(e){Object(b.a)(a,e);var t=Object(v.a)(a);function a(e){var s;return Object(p.a)(this,a),(s=t.call(this,e)).state={},s}return Object(d.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"SearchResults",children:[Object(n.jsx)("h2",{children:"Results"}),Object(n.jsx)(k,{tracks:this.props.searchResults,isRemoval:"false",onAdd:this.props.onAdd})]})}}]),a}(c.a.Component),O=(a(23),function(e){Object(b.a)(a,e);var t=Object(v.a)(a);function a(e){var s;return Object(p.a)(this,a),(s=t.call(this,e)).handleNameChange=s.handleNameChange.bind(Object(m.a)(s)),s}return Object(d.a)(a,[{key:"handleNameChange",value:function(e){this.props.onNameChange(e.target.value)}},{key:"componentDidMount",value:function(){this.props.hideLoader()}},{key:"render",value:function(){return Object(n.jsxs)("div",{className:"Playlist",children:[Object(n.jsx)("input",{placeholder:"Add playlist name",onChange:this.handleNameChange,value:this.props.title}),Object(n.jsx)(k,{tracks:this.props.playlistTracks,isRemoval:"true",onRemove:this.props.onRemove}),Object(n.jsx)("button",{className:"Playlist-save",onClick:this.props.onSave,children:"SAVE TO SPOTIFY"})]})}}]),a}(c.a.Component)),T={getAccessToken:function(){if(!s){var e=window.location.href,t=/access_token=([^&]*)/,a=/expires_in=([^&]*)/;if(null!=e.match(a)&&null!=e.match(t)){var n=e.match(a)[1];s=e.match(t)[1],window.setTimeout((function(){s=""}),1e3*n),window.history.pushState("Access Token",null,"/")}else if(null===e.match(t)){var r="playlist-modify-public",c="https://accounts.spotify.com/authorize?client_id=1189bc0908be4896ae249e6491292789&scope="+encodeURIComponent(r)+"&response_type=token&redirect_uri=https://mariannefabre.github.io/Jammming-React-App/";window.location.href=c}}},search:function(e){var t=this;return Object(h.a)(u.a.mark((function a(){var n,r,c,i;return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t.getAccessToken(),n="https://api.spotify.com/v1/search?type=track&q="+e,a.prev=2,a.next=5,fetch(n,{headers:{Authorization:"Bearer ".concat(s)}});case 5:if(!(r=a.sent).ok){a.next=14;break}return a.next=9,r.json();case 9:return c=a.sent,i=c.tracks.items.map((function(e){return{name:e.name,artist:e.artists[0].name,album:e.album.name,id:e.id,uri:e.uri}})),a.abrupt("return",i);case 14:throw new Error("Request failed!");case 15:a.next=20;break;case 17:a.prev=17,a.t0=a.catch(2),console.log(a.t0);case 20:case"end":return a.stop()}}),a,null,[[2,17]])})))()},savePlaylist:function(e,t){return Object(h.a)(u.a.mark((function a(){var n,r,c,i,o,l,h;return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(console.log(s),e&&t){a.next=5;break}return a.abrupt("return",!1);case 5:return"https://api.spotify.com/v1/me",a.prev=6,a.next=9,fetch("https://api.spotify.com/v1/me",{headers:{Authorization:"Bearer ".concat(s)}});case 9:if(!(n=a.sent).ok){a.next=50;break}return a.next=13,n.json();case 13:return r=a.sent,c=r.id,i="\thttps://api.spotify.com/v1/users/"+c+"/playlists",a.prev=16,a.next=19,fetch(i,{method:"post",headers:{Authorization:"Bearer ".concat(s)},body:JSON.stringify({name:e})});case 19:if(!(o=a.sent).ok){a.next=42;break}return a.next=23,o.json();case 23:return n=a.sent,console.log(n),l=n.id,h="https://api.spotify.com/v1/playlists/"+l+"/tracks?uris="+t,a.prev=27,a.next=30,fetch(h,{method:"post",headers:{Authorization:"Bearer ".concat(s),"Content-type":"application/json"}});case 30:if(!a.sent.ok){a.next=35;break}return a.abrupt("return",!0);case 35:throw new Error("Could not add songs to playlist.");case 36:a.next=42;break;case 38:return a.prev=38,a.t0=a.catch(27),console.log(a.t0),a.abrupt("return",!1);case 42:a.next=48;break;case 44:return a.prev=44,a.t1=a.catch(16),console.log(a.t1),a.abrupt("return",!1);case 48:a.next=51;break;case 50:throw new Error("Could not get user profile.");case 51:a.next=57;break;case 53:return a.prev=53,a.t2=a.catch(6),console.log(a.t2),a.abrupt("return",!1);case 57:case"end":return a.stop()}}),a,null,[[6,53],[16,44],[27,38]])})))()}},x=function(e){Object(b.a)(a,e);var t=Object(v.a)(a);function a(e){var s;return Object(p.a)(this,a),(s=t.call(this,e)).state={searchResults:[],playlistName:"",playlistTracks:[]},s.addTrack=s.addTrack.bind(Object(m.a)(s)),s.removeTrack=s.removeTrack.bind(Object(m.a)(s)),s.updatePlaylistName=s.updatePlaylistName.bind(Object(m.a)(s)),s.savePlaylist=s.savePlaylist.bind(Object(m.a)(s)),s.search=s.search.bind(Object(m.a)(s)),s}return Object(d.a)(a,[{key:"addTrack",value:function(e){if(!(this.state.playlistTracks.filter((function(t){return t.id===e.id})).length>0)){var t=this.state.playlistTracks;t.push(e);var a=this.state.searchResults,s=a.indexOf(e);s>-1&&a.splice(s,1),this.setState({playlistTracks:t,searchResults:a})}}},{key:"removeTrack",value:function(e){var t=this.state.playlistTracks,a=t.indexOf(e);a>-1&&(t.splice(a,1),this.setState({playlistTracks:t}))}},{key:"updatePlaylistName",value:function(e){this.setState({playlistName:e})}},{key:"savePlaylist",value:function(){var e=[];this.state.playlistTracks.forEach((function(t){e.push(t.uri)})),T.savePlaylist(this.state.playlistName,e)&&this.setState({playlistName:"",playlistTracks:[]})}},{key:"search",value:function(){var e=Object(h.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.search(t);case 2:a=e.sent,this.setState({searchResults:a});case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)("h1",{children:"Create new playlists on Spotify"}),Object(n.jsx)(f,{onSearch:this.search}),Object(n.jsxs)("div",{className:"App-playlist",children:[this.state.searchResults&&Object(n.jsx)(y,{searchResults:this.state.searchResults,onAdd:this.addTrack}),Object(n.jsx)(O,{title:this.state.playlistName,playlistTracks:this.state.playlistTracks,onRemove:this.removeTrack,onNameChange:this.updatePlaylistName,onSave:this.savePlaylist,hideLoader:this.props.hideLoader,showLoader:this.props.showLoader})]})]})}}]),a}(c.a.Component),g=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,25)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),s(e),n(e),r(e),c(e)}))},C=document.getElementsByClassName("loader")[0],N=function(){return C.classList.remove("loader--hide")},w=function(){return C.classList.add("loader--hide")};setTimeout((function(){return o.a.render(Object(n.jsx)(x,{hideLoader:w,showLoader:N}),document.getElementById("root"))}),1e3),g()}],[[24,1,2]]]);
//# sourceMappingURL=main.df017480.chunk.js.map