var beforeMouseoverCSS;
$(document).ready(function() {
  $('#calendar').fullCalendar({
    googleCalendarApiKey: 'AIzaSyC1T8SMnMGA8ADvm397BX-kgj65OK1XQ3M',

    eventSources: [{
      googleCalendarId: '933eeagr177nfr8ni64f034i0s@group.calendar.google.com',
      color: '#DFDFDF',
      textColor: 'black',
      borderColor: 'white'
    }],

    eventMouseover: function(calEvent, jsEvent, view) {
      beforeMouseoverCSS = $(this).css(["z-index","min-height","min-width","left","right","margin-right","opacity"]);
      $(this).css({
        "z-index": "100",
        "min-height": "60px",
        "min-width": "140px",
        "left": "-10",
        "right": "-10",
        "margin-right": "0px",
        "opacity": ".9"
      });
      return false;
    },

    eventMouseout: function(calEvent, jsEvent, view) {
      $(this).css(beforeMouseoverCSS);
      return false;
    },

    eventClick: function(calEvent, jsEvent, view) {
      return true;
    },

    loading: function(bool) {
      if (bool === false) {
        $('#calendar #loading').toggle(false);
      }
    },

    defaultView: 'agendaWeek',
    minTime: "09:00",
    maxTime: "23:00",
    allDaySlot: false,
    contentHeight: "auto",
    slotDuration: "01:00:00",
    /*slotEventOverlap: false*/
    /*defaultDate: "2015-02-03",*/

  });

});
