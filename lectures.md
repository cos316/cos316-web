---
title: Lectures
layout: default
---

Lectures meet on Tuesday and Thursday 10:00-10:50am.

This schedule is preliminary and subject to change.

<table class="wide-table">
  <thead>
    <tr>
      <th>Date</th>
      <th>Topic</th>
      <th>Instructor</th>
      <th>Slides</th>
      <th>Notes</th>
      <th>Reading</th>
    </tr>
  </thead>

  <tbody>
    {% assign next_break = 0 %}
    {% assign sorted_lectures = site.data.syllabus.lectures | sort: "start" %}
    {% assign sorted_breaks = site.data.syllabus.breaks | sort: "start" %}
    {% assign last_section = "" %}
    {% for lecture in sorted_lectures %}
      {% assign lecture_start_unix = lecture.start | date: "%s" %}
      {% if site.data.syllabus.breaks[next_break] %}
        {% assign break = site.data.syllabus.breaks[next_break] %}
        {% assign break_start_unix = break.start | date: "%s" %}
        {% if lecture_start_unix > break_start_unix %}
          <tr>
            <td colspan="6"><span class="break">
              {{ break.start | date: "%m/%d" }} to
              {{ break.end | date: "%m/%d" }}:
              {{ break.label }}
            </span></td>
          </tr>
          {% assign next_break = next_break | plus:1 %}
        {% endif %}
      {% endif %}
      {% if last_section != lecture.section %}
        <tr>
          <td></td>
          <td><em><b>{{ lecture.section }}</b></em></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        {% assign last_section = lecture.section %}
      {% endif %}
      <tr>
        <td title="{{ lecture.start }}">{{ lecture.start | date: "%a %m/%d" }}</td>
        <td style="text-align: left">{{ lecture.topic }}</td>
        <td>{{ lecture.instructor }}</td>
        <td>
          {% if lecture.slides.pdf_file %}
            <a href="{% link {{ lecture.slides.pdf_file }} %}">PDF</a>
          {% endif %}
        </td>
        <td>
          {% if lecture.notes.pdf_file %}
            <a href="{% link {{ lecture.notes.pdf_file }} %}">PDF</a>
          {% endif %}
        </td>
        <td></td>
      </tr>
    {% endfor %}
  </tbody>
</table>
