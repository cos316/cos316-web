---
title: Precepts
layout: default
---

This precept schedule is preliminary and subject to change.

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
      <td style="text-align: left">{{ precept.topic }}</td>
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
              {{ precept_slot[1].week_map[precept.week].start | date: "%a %m/%d %l:%M%P" }},
              {{ precept_slot[1].preceptor }},
              {{ precept_slot[1].week_map[precept.week].location }}
              {% if forloop.last == false %}<br />{% endif %}
            {% endif %}
            {% endfor %}
          </p>
        </details>
      </td>
	  <td>
	    {% capture precept_links %}
	    {% for link in precept.links %}
	      [<a
			  href="{% if link[1].path %}{% link {{ link[1].path }} %}{% else %}{{ link[1].url }}{% endif %}"
			  {% if link[1].new_tab == true %}target="_blank"{% endif %}
			  >{{ link[0] }}</a>]
			{% if forloop.last == false %}, {% endif %}
		{% endfor %}
		{% endcapture %}
		{{ precept_links | strip_newlines }}
	  </td>
    </tr>
    {% endif %}
    {% endfor %}
  </tbody>
</table>
