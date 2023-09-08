---
title: Programming Assignments and Problem Sets
layout: default
---

This assignment schedule is preliminary and subject to change.

<table class="wide-table">
  <thead>
    <tr>
	  <th>Type</th>
      <th>Name</th>
      <th>Release</th>
      <th>Due</th>
      <th>Links</th>
    </tr>
  </thead>

  <tbody>
    {% assign sorted_assignments = site.data.syllabus.assignments | sort: "due" %}
    {% for assignment in sorted_assignments %}
      <tr>
	    <td>
		  {% if assignment.type == "prompt" %}
		    <div title="{{ assignment.type }}">✍</div>
		  {% elsif assignment.type == "programming" %}
		    <div title="{{ assignment.type }}">💻</div>
		  {% elsif assignment.type == "pset" %}
		    <div title="{{ assignment.type }}">🤔</div>
		  {% else %}
		    {{ assignment.type }}
		  {% endif %}
	    </td>
        <td style="text-align: left">{{ assignment.title }}</td>
        <td>{{ assignment.release | date: "%m/%d" }}</td>
        <td>{{ assignment.due | date: "%m/%d %l:%M%P" }}</td>
        <td>
		  {% capture assignment_links %}
		  {% for link in assignment.links %}
	        [<a
			  href="{% if link[1].path %}{% link {{ link[1].path }} %}{% else %}{{ link[1].url }}{% endif %}"
			  {% if link[1].new_tab == true %}target="_blank"{% endif %}
			  >{{ link[0] }}</a>]
			{% if forloop.last == false %}, {% endif %}
		  {% endfor %}
		  {% endcapture %}
		  {{ assignment_links | strip_newlines }}
        </td>
        <td></td>
        <td></td>
      </tr>
    {% endfor %}
  </tbody>
</table>
