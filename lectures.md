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
    {% assign sorted_lectures = site.data.syllabus.lectures | sort: "date" %}
    {% assign last_section = "" %}
    {% for lecture in sorted_lectures %}
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
        <td title="{{ lecture.start }}">{{ lecture.start | date: "%m/%d" }}</td>
        <td style="text-align: left">{{ lecture.topic }}</td>
        <td>{{ lecture.instructor }}</td>
        <td>
          {% if lecture.slides.pdf_file %}
            <a href="{% link {{ lecture.slides.pdf_file }} %}">PDF</a>
          {% endif %}
        </td>
        <td></td>
        <td></td>
      </tr>
    {% endfor %}
  </tbody>
</table>
