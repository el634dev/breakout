(()=>{"use strict";const t=class{constructor(t=0,e=0,i=100,s=100,r="#f00"){this.x=t,this.y=e,this.width=i,this.height=s,this.color=r}render(t){t.beginPath(),t.rect(this.x,this.y,this.width,this.height),t.fillStyle=this.color,t.fill(),t.closePath()}},e=class extends t{constructor(t,e,i,s,r="#ff8c00"){super(t,e,i,s,r)}render(t){t.beginPath(),t.rect(this.x,318.8-this.height,this.width,this.height),t.fillStyle=this.color,t.fill(),t.closePath()}},i=document.getElementById("gameCanvas"),s=i.getContext("2d"),r=new class extends t{constructor(t,e,i){super(t,e,i),this.score=0,this.font="16.5px Arial"}update(){this.score+=1}reset(){this.score?(alert("You won, congratulations"),this.document.location.reload()):(alert("Game Over"),this.document.location.reload())}render(t){t.fillStyle="#000000",t.fillText(`Score: ${this.score}`,8,20)}},o=new class extends t{constructor(t,e,i){super(t,e,i),this.lives=4,this.font="16.9 Arial"}loseLife(){this.lives-=1}reset(){alert("Game Over"),document.location.reload()}render(t){t.fillStyle="#000000",t.fillText(`Lives: ${this.lives}`,175,20)}},h=new class extends t{constructor(t=0,e=0,i=10,s="#0000ff"){super(t,e,0,0,s),this.radius=i,this.dx=2,this.dy=-2}move(){this.x+=this.dx,this.y+=this.dy}render(t){t.beginPath(),t.arc(this.x,this.y,this.radius,0,2*Math.PI),t.fillStyle=this.color,t.fill(),t.closePath()}}(240,100,10),d=new e((i.width-80)/2,200,80,10,e.color),l=[];for(let t=0;t<5;t+=1){l[t]=[];for(let e=0;e<3;e+=1)l[t][e]={x:0,y:0,status:1}}let n=!1,c=!1;!function t(){s.clearRect(0,0,i.width,i.height),function(){for(let t=0;t<5;t+=1)for(let e=0;e<3;e+=1)if(1===l[t][e].status){const i=85*t+30,r=30*e+30;l[t][e].x=i,l[t][e].y=r,s.beginPath(),s.rect(i,r,75,20),s.fillStyle="#32cd32",s.fill(),s.closePath()}}(),h.render(s),h.move(),d.render(s),r.render(s),o.render(s),function(){for(let t=0;t<5;t+=1)for(let e=0;e<3;e+=1){const i=l[t][e];1===i.status&&h.x>i.x&&h.x<i.x+75&&h.y>i.y&&h.y<i.y+20&&(h.dy=-h.dy,i.status=0,r.update(),15===r.score&&r.render(s))}}(),(h.x+h.dx>i.width-h.radius||h.x+h.dx<h.radius)&&(h.dx=-h.dx),h.y+h.dy<h.radius?h.dy=-h.dy:h.y+h.dy>i.height-h.radius&&(h.x>d.x&&h.x<d.x+d.width?h.dy=-h.dy:(o.loseLife(),o.lives?(h.x=i.width/2,h.y=i.height-30,h.dx=3,h.dy=-3,d.x=(i.width-d.width)/2):o.reset())),n?d.x=Math.min(d.x+7,i.width-d.width):c&&(d.x=Math.max(d.x-7,0)),requestAnimationFrame(t)}(),document.addEventListener("keydown",(function(t){"Right"===t.key||"ArrowRight"===t.key?n=!0:"Left"!==t.key&&"ArrowLeft"!==t.key||(c=!0)}),!1),document.addEventListener("keyup",(function(t){"Right"===t.key||"ArrowRight"===t.key?n=!0:"Left"!==t.key&&"ArrowLeft"!==t.key||(c=!0)}),!1),document.addEventListener("mousemove",(function(t){const e=t.clientX-i.offsetLeft;e>0&&e<i.width&&(d.x=e-d.width/2)}),!1)})();