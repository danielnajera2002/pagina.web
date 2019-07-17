JS Options
152
    }
153
  }
154
  
155
  render(progress, position){
156
    for(var i = 0, len = this.canvasArray.length; i < len; i++){
157
      var canvas = this.canvasArray[i].canvas;
158
      canvas.style.setProperty("-webkit-transform", "translate(" + (progress * position - (len / 2 - i) * this.imagesWidth)  + "px, 0)");
159
      canvas.style.transform = "translate(" + (progress * position - (len / 2 - i) * this.imagesWidth)  + "px, 0)";
160
      
161
      var context = this.canvasArray[i].context;
162
      context.clearRect(0, 0, this.width, this.height);
163
      context.globalCompositeOperation = "source-over";
164
      context.drawImage(this.canvasArray[i].normal, 0, 0, this.width, this.height);
165
      context.globalCompositeOperation = "lighten";
166
      context.drawImage(this.canvasArray[i].lighten, ((len / 2 - i) * this.imagesWidth - progress * position) * this.dpi * this.paraEffect, 0, this.width, this.height);
167
    }
168
  }
169
}
170
​
171
//easing
172
//prepare only easingInOutQuad
173
function easingInOutQuad(t){
174
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t; 
175
}s