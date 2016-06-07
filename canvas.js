var Obj={
  offset: 50,

  $: function(id){
    return document.getElementById(id);
  },

  draw: function(){
    var self = Obj;
    var cans = self.$('sin-area').getContext('2d');
    for(var i=1; i<200000;i++){
      var x = i*(Math.PI/2.0);
      var y = 50*Math.sin(0.01*Math.PI*x);
      cans.lineTo(x, y+self.offset);
    }
    cans.lineWidth = 1;
    cans.strokeStyle = 'red';
    cans.stroke();
  },

  initialize: function(){
    var self = Obj;
    self.draw();
    return;
    setInterval(function(){
      self.offset += 10;
      self.draw();
    }, 1000);
  }
};

Obj.initialize();
