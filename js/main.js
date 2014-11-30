var MinutesInDay = 1440;
var clock = {
  currentTime: null,

    updateTime : function(){
    var _date = new Date();
    var _hoursInMinutes = _date.getHours() * 60;
    var _minutesInHour = _date.getMinutes();
    var _SecondsInMinutes = _date.getSeconds() / 60;
    var _totalMinutes = _hoursInMinutes + _minutesInHour + _SecondsInMinutes;
    var _percentTime = (_totalMinutes / MinutesInDay *  100).toFixed(3);
    this.currentTime = _percentTime
  },

  updateDOMTime: function(){
    $('#time').html(clock.currentTime + "%"); 
  }
};

clock.updateTime();

$(document).ready(function(){
  
  clock.updateDOMTime();
  
  setInterval(function(){ 
    clock.updateTime();
    clock.updateDOMTime();
  },1000);
})