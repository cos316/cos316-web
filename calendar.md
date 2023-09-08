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
      height: 1000,
      scrollTime: '08:00:00',
      events: [
        {% for lecture in site.data.syllabus.lectures %}
          {
            title: 'Lecture: {{ lecture.topic }}',
            start: '{{ lecture.start | date: "%FT%T%:z" }}',
            end: '{{ lecture.end | date: "%FT%T%:z" }}',
          },
        {% endfor %}
        {% for precept in site.data.syllabus.precepts %}
          {% for precept_slot in site.data.syllabus.precept_slots %}
            {% if precept.week_fixed != false and precept.hidden != true and precept_slot[1].week_map[precept.week] %}
              {
                title: 'Precept {{ precept_slot[0] }}: {{ precept.topic }} ({{ precept_slot[1].week_map[precept.week].location }})',
                start: '{{ precept_slot[1].week_map[precept.week].start | date: "%FT%T%:z" }}',
                end: '{{ precept_slot[1].week_map[precept.week].end | date: "%FT%T%:z" }}',
              },
            {% endif %}
          {% endfor %}
        {% endfor %}
        {% for oh in site.data.syllabus.office_hours %}
          {
            title: 'Office Hours: {{ oh.staff }} ({{ oh.location }})',
            start: '{{ oh.start | date: "%FT%T%:z" }}',
            end: '{{ oh.end | date: "%FT%T%:z" }}',
          },
        {% endfor %}
      ]
    });

    calendar.render();
  });
</script>
