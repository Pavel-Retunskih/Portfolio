"use strict";(self.webpackChunkportfolio_start=self.webpackChunkportfolio_start||[]).push([[6844],{6844:function(i,t,o){o.r(t),o.d(t,{OutOfCanvasUpdater:function(){return h}});var e=o(7762),n=o(5671),s=o(3144),a=o(9439),r=o(4709),d=0,u=0;var c=function(){function i(t){(0,n.Z)(this,i),this.container=t,this.modes=["bounce","split"]}return(0,s.Z)(i,[{key:"update",value:function(i,t,o,n){if(this.modes.includes(n)){var s,c=this.container,p=!1,l=(0,e.Z)(c.plugins);try{for(l.s();!(s=l.n()).done;){var v=(0,a.Z)(s.value,2)[1];if(void 0!==v.particleBounce&&(p=v.particleBounce(i,o,t)),p)break}}catch(b){l.e(b)}finally{l.f()}if(!p){var f=i.getPosition(),h=i.offset,y=i.getRadius(),m=(0,r.M_)(f,y),g=c.canvas.size;!function(i){if(!("bounce"!==i.outMode&&"split"!==i.outMode||"left"!==i.direction&&"right"!==i.direction)){i.bounds.right<u&&"left"===i.direction?i.particle.position.x=i.size+i.offset.x:i.bounds.left>i.canvasSize.width&&"right"===i.direction&&(i.particle.position.x=i.canvasSize.width-i.size-i.offset.x);var t=i.particle.velocity.x,o=!1;if("right"===i.direction&&i.bounds.right>=i.canvasSize.width&&t>d||"left"===i.direction&&i.bounds.left<=u&&t<d){var e=(0,r.Gu)(i.particle.options.bounce.horizontal.value);i.particle.velocity.x*=-e,o=!0}if(o){var n=i.offset.x+i.size;i.bounds.right>=i.canvasSize.width&&"right"===i.direction?i.particle.position.x=i.canvasSize.width-n:i.bounds.left<=u&&"left"===i.direction&&(i.particle.position.x=n),"split"===i.outMode&&i.particle.destroy()}}}({particle:i,outMode:n,direction:t,bounds:m,canvasSize:g,offset:h,size:y}),function(i){if(!("bounce"!==i.outMode&&"split"!==i.outMode||"bottom"!==i.direction&&"top"!==i.direction)){i.bounds.bottom<u&&"top"===i.direction?i.particle.position.y=i.size+i.offset.y:i.bounds.top>i.canvasSize.height&&"bottom"===i.direction&&(i.particle.position.y=i.canvasSize.height-i.size-i.offset.y);var t=i.particle.velocity.y,o=!1;if("bottom"===i.direction&&i.bounds.bottom>=i.canvasSize.height&&t>d||"top"===i.direction&&i.bounds.top<=u&&t<d){var e=(0,r.Gu)(i.particle.options.bounce.vertical.value);i.particle.velocity.y*=-e,o=!0}if(o){var n=i.offset.y+i.size;i.bounds.bottom>=i.canvasSize.height&&"bottom"===i.direction?i.particle.position.y=i.canvasSize.height-n:i.bounds.top<=u&&"top"===i.direction&&(i.particle.position.y=n),"split"===i.outMode&&i.particle.destroy()}}}({particle:i,outMode:n,direction:t,bounds:m,canvasSize:g,offset:h,size:y})}}}}]),i}(),p=function(){function i(t){(0,n.Z)(this,i),this.container=t,this.modes=["destroy"]}return(0,s.Z)(i,[{key:"update",value:function(i,t,o,e){if(this.modes.includes(e)){var n=this.container;switch(i.outType){case"normal":case"outside":if((0,r.Ac)(i.position,n.canvas.size,r.OW.origin,i.getRadius(),t))return;break;case"inside":var s=(0,r.oW)(i.position,i.moveCenter),a=s.dx,d=s.dy,u=i.velocity,c=u.x,p=u.y;if(c<0&&a>i.moveCenter.radius||p<0&&d>i.moveCenter.radius||c>=0&&a<-i.moveCenter.radius||p>=0&&d<-i.moveCenter.radius)return}n.particles.remove(i,void 0,!0)}}}]),i}(),l=function(){function i(t){(0,n.Z)(this,i),this.container=t,this.modes=["none"]}return(0,s.Z)(i,[{key:"update",value:function(i,t,o,e){var n;if(this.modes.includes(e)&&(null!==(n=i.options.move.distance.horizontal&&("left"===t||"right"===t))&&void 0!==n?!n:!i.options.move.distance.vertical||"top"!==t&&"bottom"!==t)){var s=i.options.move.gravity,a=this.container,d=a.canvas.size,u=i.getRadius();if(s.enable){var c=i.position;(!s.inverse&&c.y>d.height+u&&"bottom"===t||s.inverse&&c.y<-u&&"top"===t)&&a.particles.remove(i)}else{if(i.velocity.y>0&&i.position.y<=d.height+u||i.velocity.y<0&&i.position.y>=-u||i.velocity.x>0&&i.position.x<=d.width+u||i.velocity.x<0&&i.position.x>=-u)return;(0,r.Ac)(i.position,a.canvas.size,r.OW.origin,u,t)||a.particles.remove(i)}}}}]),i}(),v=function(){function i(t){(0,n.Z)(this,i),this.container=t,this.modes=["out"]}return(0,s.Z)(i,[{key:"update",value:function(i,t,o,e){if(this.modes.includes(e)){var n=this.container;if("inside"===i.outType){var s=i.velocity,a=s.x,d=s.y,u=r.OW.origin;u.length=i.moveCenter.radius,u.angle=i.velocity.angle+Math.PI,u.addTo(r.OW.create(i.moveCenter));var c=(0,r.oW)(i.position,u),p=c.dx,l=c.dy;if(a<=0&&p>=0||d<=0&&l>=0||a>=0&&p<=0||d>=0&&l<=0)return;i.position.x=Math.floor((0,r.vd)({min:0,max:n.canvas.size.width})),i.position.y=Math.floor((0,r.vd)({min:0,max:n.canvas.size.height}));var v=(0,r.oW)(i.position,i.moveCenter),f=v.dx,h=v.dy;i.direction=Math.atan2(-h,-f),i.velocity.angle=i.direction}else{if((0,r.Ac)(i.position,n.canvas.size,r.OW.origin,i.getRadius(),t))return;switch(i.outType){case"outside":i.position.x=Math.floor((0,r.vd)({min:-i.moveCenter.radius,max:i.moveCenter.radius}))+i.moveCenter.x,i.position.y=Math.floor((0,r.vd)({min:-i.moveCenter.radius,max:i.moveCenter.radius}))+i.moveCenter.y;var y=(0,r.oW)(i.position,i.moveCenter),m=y.dx,g=y.dy;i.moveCenter.radius&&(i.direction=Math.atan2(g,m),i.velocity.angle=i.direction);break;case"normal":var b=i.options.move.warp,x=n.canvas.size,z={bottom:x.height+i.getRadius()+i.offset.y,left:-i.getRadius()-i.offset.x,right:x.width+i.getRadius()+i.offset.x,top:-i.getRadius()-i.offset.y},M=i.getRadius(),w=(0,r.M_)(i.position,M);"right"===t&&w.left>x.width+i.offset.x?(i.position.x=z.left,i.initialPosition.x=i.position.x,b||(i.position.y=(0,r.sZ)()*x.height,i.initialPosition.y=i.position.y)):"left"===t&&w.right<-i.offset.x&&(i.position.x=z.right,i.initialPosition.x=i.position.x,b||(i.position.y=(0,r.sZ)()*x.height,i.initialPosition.y=i.position.y)),"bottom"===t&&w.top>x.height+i.offset.y?(b||(i.position.x=(0,r.sZ)()*x.width,i.initialPosition.x=i.position.x),i.position.y=z.top,i.initialPosition.y=i.position.y):"top"===t&&w.bottom<-i.offset.y&&(b||(i.position.x=(0,r.sZ)()*x.width,i.initialPosition.x=i.position.x),i.position.y=z.bottom,i.initialPosition.y=i.position.y)}}}}}]),i}(),f=function(i,t){return i.default===t||i.bottom===t||i.left===t||i.right===t||i.top===t},h=function(){function i(t){var o=this;(0,n.Z)(this,i),this._updateOutMode=function(i,t,n,s){var a,r=(0,e.Z)(o.updaters);try{for(r.s();!(a=r.n()).done;){a.value.update(i,s,t,n)}}catch(d){r.e(d)}finally{r.f()}},this.container=t,this.updaters=[]}return(0,s.Z)(i,[{key:"init",value:function(i){this.updaters=[];var t=i.options.move.outModes;f(t,"bounce")?this.updaters.push(new c(this.container)):f(t,"out")?this.updaters.push(new v(this.container)):f(t,"destroy")?this.updaters.push(new p(this.container)):f(t,"none")&&this.updaters.push(new l(this.container))}},{key:"isEnabled",value:function(i){return!i.destroyed&&!i.spawning}},{key:"update",value:function(i,t){var o,e,n,s,a=i.options.move.outModes;this._updateOutMode(i,t,null!==(o=a.bottom)&&void 0!==o?o:a.default,"bottom"),this._updateOutMode(i,t,null!==(e=a.left)&&void 0!==e?e:a.default,"left"),this._updateOutMode(i,t,null!==(n=a.right)&&void 0!==n?n:a.default,"right"),this._updateOutMode(i,t,null!==(s=a.top)&&void 0!==s?s:a.default,"top")}}]),i}()}}]);
//# sourceMappingURL=6844.77a5f4d7.chunk.js.map