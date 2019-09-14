(window["webpackJsonpchat-react"]=window["webpackJsonpchat-react"]||[]).push([[0],{11:function(e,t,a){e.exports=a(28)},16:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),s=a(8),r=a.n(s),i=(a(16),a(7)),c=a(2),l=a(3),m=a(5),u=a(4),h=a(1),d=a(6),b=a(9),p=a.n(b),g=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"message"},o.a.createElement("div",{className:"message-username"},this.props.username),o.a.createElement("div",{className:"message-text"},this.props.text))}}]),t}(o.a.Component),f=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentWillUpdate",value:function(){var e=r.a.findDOMNode(this);this.shouldScrollToBottom=e.scrollTop+e.clientHeight+100>=e.scrollHeight}},{key:"componentDidUpdate",value:function(){if(this.shouldScrollToBottom){var e=r.a.findDOMNode(this);e.scrollTop=e.scrollHeight}}},{key:"render",value:function(){return this.props.roomId?o.a.createElement("div",{className:"message-list"},this.props.messages.map((function(e,t){return o.a.createElement(g,{key:t,username:e.senderId,text:e.parts[0].payload.content})}))):o.a.createElement("div",{className:"message-list"},o.a.createElement("div",{className:"join-room"},"\u2190 Join a room!"))}}]),t}(o.a.Component),v=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(m.a)(this,Object(u.a)(t).call(this))).state={message:""},e.handleChange=e.handleChange.bind(Object(h.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(h.a)(e)),e}return Object(d.a)(t,e),Object(l.a)(t,[{key:"handleChange",value:function(e){this.setState({message:e.target.value})}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.sendMessage(this.state.message),this.setState({message:""})}},{key:"render",value:function(){return console.log(this.state.message),o.a.createElement("form",{onSubmit:this.handleSubmit,className:"send-message-form"},o.a.createElement("input",{disabled:this.props.disabled,onChange:this.handleChange,placeholder:"Type Your Message",value:this.state.message,type:"text"}))}}]),t}(o.a.Component),j=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=Object(i.a)(this.props.rooms).sort((function(e,t){return e.id-t.id}));return console.log(this.props.rooms),o.a.createElement("div",{className:"rooms-list"},o.a.createElement("ul",null,o.a.createElement("h3",null,"Your rooms:"),t.map((function(t){var a=e.props.roomId===t.id?"active":"";return o.a.createElement("li",{key:t.id,className:"room "+a},o.a.createElement("a",{onClick:function(){return e.props.subscribeToRoom(t.id)},href:"#"},"# ",t.name))}))))}}]),t}(o.a.Component),O=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(m.a)(this,Object(u.a)(t).call(this))).state={username:""},e.handleChange=e.handleChange.bind(Object(h.a)(e)),e.handleLogIn=e.handleLogIn.bind(Object(h.a)(e)),e}return Object(d.a)(t,e),Object(l.a)(t,[{key:"handleLogIn",value:function(e){e.preventDefault(),this.props.handleLogIn(this.state.username),this.setState({username:""})}},{key:"handleChange",value:function(e){this.setState({username:e.target.value})}},{key:"render",value:function(){return o.a.createElement("div",{class:"container logIn"},o.a.createElement("div",{align:"middle",class:"jumbotron border border-primary rounded"},o.a.createElement("h1",{class:"display-8"},"Log In"),o.a.createElement("br",null),o.a.createElement("form",{onSubmit:this.handleLogIn},o.a.createElement("div",{class:"input-group input-group-sm mb-3"},o.a.createElement("div",{class:"input-group-prepend"},o.a.createElement("span",{class:"input-group-text",id:"inputGroup-sizing-sm"},"@")),o.a.createElement("input",{value:this.state.username,onChange:this.handleChange,type:"text",class:"form-control",placeholder:"Username","aria-label":"Username","aria-describedby":"basic-addon1"})),o.a.createElement("br",null),o.a.createElement("button",{type:"Submit",class:"btn btn-outline-primary"},"ENTER"),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("div",{class:"alert alert-warning alert-dismissible fade show",role:"alert"},o.a.createElement("strong",null,"frickity frick!",o.a.createElement("br",null)," please login with "),o.a.createElement("br",null),' "First ","Gerebab ","Watson ","or ","Horse"',o.a.createElement("button",{type:"button",class:"close","data-dismiss":"alert","aria-label":"Close"},o.a.createElement("span",{"aria-hidden":"true"},"\xd7"))))))}}]),t}(n.Component),E=(a(27),function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(m.a)(this,Object(u.a)(t).call(this))).state={roomName:""},e.handleChange=e.handleChange.bind(Object(h.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(h.a)(e)),e}return Object(d.a)(t,e),Object(l.a)(t,[{key:"handleChange",value:function(e){this.setState({roomName:e.target.value})}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.createRoom(this.state.roomName),this.setState({roomName:""})}},{key:"render",value:function(){return o.a.createElement("div",{className:"new-room-form"},o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("input",{value:this.state.roomName,onChange:this.handleChange,type:"text",placeholder:"New Room",required:!0}),o.a.createElement("button",{id:"create-room-btn",type:"submit"},"+")))}}]),t}(o.a.Component)),y=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(m.a)(this,Object(u.a)(t).call(this))).state={roomId:null,messages:[],joinableRooms:[],joinedRooms:[],isLoggedIn:!1,username:""},e.sendMessage=e.sendMessage.bind(Object(h.a)(e)),e.subscribeToRoom=e.subscribeToRoom.bind(Object(h.a)(e)),e.getRooms=e.getRooms.bind(Object(h.a)(e)),e.createRoom=e.createRoom.bind(Object(h.a)(e)),e.RenderChatRoom=e.RenderChatRoom.bind(Object(h.a)(e)),e.handleLogIn=e.handleLogIn.bind(Object(h.a)(e)),e.Connect=e.Connect.bind(Object(h.a)(e)),e}return Object(d.a)(t,e),Object(l.a)(t,[{key:"Connect",value:function(e){var t=this,a=new p.a.TokenProvider({url:"https://us1.pusherplatform.io/services/chatkit_token_provider/v1/4f056a27-330e-4e1e-9f7e-6bbee987067a/token"});new p.a.ChatManager({instanceLocator:"v1:us1:4f056a27-330e-4e1e-9f7e-6bbee987067a",userId:e,tokenProvider:a}).connect().then((function(e){t.currentUser=e,t.getRooms()})).catch((function(e){console.error("error:",e)}))}},{key:"getRooms",value:function(){var e=this;this.currentUser.getJoinableRooms().then((function(t){e.setState({joinableRooms:t,joinedRooms:e.currentUser.rooms})})).catch((function(e){return console.log("error on joinableRooms: ")}))}},{key:"subscribeToRoom",value:function(e){var t=this;this.setState({messages:[]}),this.currentUser.subscribeToRoomMultipart({roomId:e,hooks:{onMessage:function(e){t.setState({messages:[].concat(Object(i.a)(t.state.messages),[e])}),console.log(e)}}}).then((function(e){t.setState({roomId:e.id}),t.getRooms()})).catch((function(e){return"error on subscribing to room: "}))}},{key:"sendMessage",value:function(e){this.currentUser.sendSimpleMessage({text:e,roomId:this.state.roomId})}},{key:"createRoom",value:function(e){var t=this;this.currentUser.createRoom({name:e}).then((function(e){return t.subscribeToRoom(e.id)})).catch((function(e){return console.log("error with createRoom: ")}))}},{key:"handleLogIn",value:function(e){this.Connect(e),this.setState({username:e,isLoggedIn:!0})}},{key:"RenderChatRoom",value:function(){return this.state.isLoggedIn?o.a.createElement("div",{className:"app"},o.a.createElement(j,{roomId:this.state.roomId,subscribeToRoom:this.subscribeToRoom,rooms:[].concat(Object(i.a)(this.state.joinableRooms),Object(i.a)(this.state.joinedRooms))}),o.a.createElement(f,{roomId:this.state.roomId,messages:this.state.messages}),o.a.createElement(v,{disabled:!this.state.roomId,sendMessage:this.sendMessage}),o.a.createElement(E,{createRoom:this.createRoom})):o.a.createElement("div",null,o.a.createElement(O,{handleLogIn:this.handleLogIn}))}},{key:"render",value:function(){return o.a.createElement("div",null,this.RenderChatRoom())}}]),t}(o.a.Component);r.a.render(o.a.createElement(y,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.d28fcc30.chunk.js.map