	var keyBox1 = document.search.key1;
	var keyBox2 = document.search.key2;
	var keyBox3 = document.search.key3;
	var button = document.search.print;

	function onchange(e){
		var printBlock = document.getElementById("printBlock");
		var val1 = parseFloat(keyBox1.value);
		var val2 = parseFloat(keyBox2.value);
		var val3 = parseFloat(keyBox3.value);
		var event = keyBox1.value + " " + keyBox2.value + " " + keyBox3.value;

		if (val1 > 5000000 || val2 > 5000000 || val3 > 5000000) {
			alert('Слишком большое значение');
		} else {
			var result;
			if (val1 + val2 < val3 || val2 + val3 < val1 || val1 + val3 < val2) {
				alert('Такой треугольник не может существовать.\nСумма длин любых двух сторон должна быть больше длины третьей стороны.')
			}

			if (val1 == val2 && val2 == val3 && val1 == val3) {
				result = "Равностронний";
			} else if (val1 == val2 || val1 == val3 || val2 == val3) {
				result = "Равнобедренный";
			}

			printBlock.textContent = result;
		}
		ga('create', 'UA-147994941-1', 'auto');
		ga('send', {
			hitType: 'event',
			eventCategory: 'Fields',
			eventAction: 'Input',
			eventLabel: event
		});
	}
button.addEventListener("click", onchange);