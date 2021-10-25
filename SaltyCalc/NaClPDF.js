

	function createPDF() {

		var doc = new jsPDF();

		doc.setProperties({
			title: 'Historial de NaCl',
			subject: 'Calculadora creada como ejercicio de clase para la asignatura de TIC-2',
			author: 'Xelemental',
			keywords: 'javascript, jsPDF, SaltCalc, NaCl, TIC-2',
			creator: 'Francisco José Mateos Gil (Xelemental)'
		});

		doc.setFont("courier");
		doc.setFontType("italic");
		doc.setTextColor(150);
		doc.setFontSize(10);
		doc.text(112, 10, 'Ejercicio dise\u00F1ado para la asignatura de TIC-2');
		doc.text(130, 15, 'Francisco José Mateos Gil (Xelemental)');
		doc.text(150, 20, 'IES Mar de Alborán 2018/2019');

		doc.setFont("arial");
		doc.setFontType("bold");
		doc.setTextColor(0);
		doc.setFontSize(25);
		doc.text(50, 35, 'Historial de NaCl Calculator');

		doc.setFont("times");
		doc.setFontType("normal");
		doc.setFontSize(14);
		doc.text(20, 70, document.Intro.Historial.value);
		

		return(doc);

	}

	function savePDF() {

		doc = createPDF();

		alert("X");

		doc.save("SaltHistory.pdf");

		alert("PDF creado");
	}

	
