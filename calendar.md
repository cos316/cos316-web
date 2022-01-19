---
title: Calendar
layout: default
---

**This schedule may change.** We will update this calendar with the
latest information when we need to make scheduling changes. Though
last-minute changes are rare, we encourage you to check this calendar
again before going to office hours.

<div id="calendar"></div>

<script>
 document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'timeGridWeek',
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      height: 500,
      events: [
        {
          title: 'Lecture: What is a System?',
          start: '2022-01-25T10:00:00',
          end: '2022-01-25T10:50:00'
        }
      ]
    });

    calendar.render();
  });
</script>
