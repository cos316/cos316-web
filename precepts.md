---
title: Precepts
layout: default
---

<table class="wide-table">
  <thead>
    <tr>
      <th>Week</th>
      <th>Precept Topic</th>
      <th>Precept Slots</th>
	  <th>Resources</th>
    </tr>
  </thead>

  <tbody>
    {% assign sorted_precepts = site.data.syllabus.precepts | sort: "week" %}
    {% for precept in sorted_precepts %}
    {% if precept.hidden != true %}
    <tr>
      <td>{% if precept.week_fixed != false %}{{ precept.week }}{% endif %}</td>
      <td>{{ precept.topic }}</td>
      <td>
        <details>
          <summary>
            {% assign has_one_precept_slot = false %}
            {% for precept_slot in site.data.syllabus.precept_slots %}
            {% if precept.week_fixed != false and precept_slot[1].week_map[precept.week] %}
              {% assign has_one_precept_slot = true %}
              {{ precept_slot[0] }}
            {% endif %}
            {% if has_one_precept_slot and forloop.last == false %}, {% endif %}
            {% endfor %}
			{% if precept.week_fixed == false %}
			  To be scheduled.
	        {% elsif has_one_precept_slot == false %}
			  No precept slot assigned yet.
			{% endif %}
          </summary>
          <p style="text-align: left">
            {% for precept_slot in site.data.syllabus.precept_slots %}
            {% if precept.week_fixed != false and precept_slot[1].week_map[precept.week] %}
              {{ precept_slot[0] }}:
              {{ precept_slot[1].week_map[precept.week].start | date: "%m/%d %l:%M%P" }},
              {{ precept_slot[1].preceptor }},
              {{ precept_slot[1].week_map[precept.week].location }}
              {% if forloop.last == false %}<br />{% endif %}
            {% endif %}
            {% endfor %}
          </p>
        </details>
      </td>
	  <td>
	    {% if precept.resource_page %}
		  <a href="{% link {{ precept.resource_page }} %}">Resource Page</a>
	    {% endif %}
	  </td>
    </tr>
    {% endif %}
    {% endfor %}
  </tbody>
</table>

