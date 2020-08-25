	// Finds the first <TR> in every table whose "data-expires" attribute is set to a future
	// date (in MM-DD-YYYY format), and highlights it in an orange border.

	// If the next <TR> is due on the same date as the row(s) after, it creates a
	// box around all the <TR>s that are due on the next date.


	document.addEventListener('DOMContentLoaded', function () {
		var emptyCells = document.querySelectorAll("td:empty, th:empty");
		for (i = 0; i < emptyCells.length; i++)
			emptyCells[i].innerHTML = "&nbsp;";

		function parseDate(dateString) {
			var date = dateString.split(/[^0-9]/);
			return new Date(20 + date[2], date[0] - 1, date[1], 23, 59);
		}

		var tables = document.querySelectorAll('table');

		for (t = 0; t < tables.length; t++) {

			var rows = tables[t].querySelectorAll('tr[data-expires]');

			nexttable:
				for (i = 0; i < rows.length; i++) {
					// parse date associated with this row
					var date = parseDate(rows[i].dataset.expires);

					if (date > Date.now()) {

						var cells = rows[i].querySelectorAll('td, th');
						for (var j = 0; j < cells.length; j++)
							cells[j].style.borderTop = "orangered 2px solid";

						cells[0].style.borderLeft = "orangered 2px solid";
						cells[cells.length - 1].style.borderRight = "orangered 2px solid";

						i++;

						while (i < rows.length && date.valueOf() == parseDate(rows[i].dataset.expires).valueOf()) {
							cells = rows[i].querySelectorAll('td, th');
							cells[0].style.borderLeft = "orangered 2px solid";
							cells[cells.length - 1].style.borderRight = "orangered 2px solid";
							i++;
						}

						for (var j = 0; j < cells.length; j++)
							cells[j].style.borderBottom = "orangered 2px solid";


						// do once per table
						break nexttable;
					}
				}
		}
	});