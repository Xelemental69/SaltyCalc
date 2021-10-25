

	function inicio(){

		Intro.Resultado.value = " ";
		Intro.Memorial1.value = " ";
		Intro.Memorial2.value = " ";
		Intro.Memorial3.value = " ";
		date();
		Intro.Historial.value = " ";
		Intro.Bass.value=1;
		Intro.Exponente.value=2;
		Intro.Potencia.value=0;
	}
	function date(){
		var d=new Date();
		var dia=new Array(8);
		var mes=new Array(12);

		mes[0]="Enero";
		mes[1]="Febrero";
		mes[2]="Marzo";
		mes[3]="Abril";
		mes[4]="Mayo";
		mes[5]="Junio";
		mes[6]="Julio";
		mes[7]="Agosto";
		mes[8]="Septiembre";
		mes[9]="Octubre";
		mes[10]="Noviembre";
		mes[11]="Diciembre";

	//	dia[0]="Domingo";
		dia[1]="Lunes";
		dia[2]="Martes";
		dia[3]="Miércoles";
		dia[4]="Jueves";
		dia[5]="Viernes";
		dia[6]="Sábado";
		dia[7]="Domingo";

		Intro.Fecha.value= "Hoy es " + dia[d.getDay()] + ", " 
	+ d.getDate() + " de " + mes[d.getMonth()] + " de " +
	d.getUTCFullYear();
	}


	function insertarp(simbolo) {
		if(Intro.Resultado.value.substring(Intro.Resultado.value.length, Intro.Resultado.value.length - 1)!=simbolo){
			Intro.Resultado.value=Intro.Resultado.value + simbolo;

			if (Intro.Resultado.value=="0") {
				Intro.Resultado.value=" ";
			}
		}


	}

	function insertarn(simbolo) {

		Intro.Resultado.value=Intro.Resultado.value + simbolo;

		if (Intro.Resultado.value=="0") { 
			Intro.Resultado.value=" ";
		}
	}
	function insertars(simbolo) {
	var simb = ["+","-","*","/","."];
	var x=0;
	var y=0;

	while(Intro.Resultado.value.substring(Intro.Resultado.value.length, Intro.Resultado.value.length - 1)==simb[x] || x<5){

		if(Intro.Resultado.value.substring(Intro.Resultado.value.length, Intro.Resultado.value.length - 1)==simb[x]){
			y=1;
		}
		x++;
	}


	if (y==0) {
		Intro.Resultado.value=Intro.Resultado.value + simbolo;

		if (Intro.Resultado.value=="0") { 
			Intro.Resultado.value=" ";
			}
		}
	}

	function calcular() {
		if(Intro.Historial.value!=" "){
			Intro.Historial.value= Intro.Historial.value
			 + Intro.Resultado.value + " = " +
			eval(Intro.Resultado.value) + "\n";
		}else{
			Intro.Historial.value= Intro.Resultado.value +
			 " = " + eval(Intro.Resultado.value) + "\n";
			}
		Intro.Resultado.value=eval(Intro.Resultado.value);
		if (Intro.Resultado.value=="undefined") { 
			Intro.Resultado.value="0";
		}

	}

		function calcmemory(M) {
		Intro.Historial.value=Intro.Historial.value
		 + "(Memory " + M + ") " + Intro.Resultado.value + " = " +
		eval(Intro.Resultado.value) + "\n";
		Intro.Resultado.value=eval(Intro.Resultado.value);
		if (Intro.Resultado.value=="undefined") { 
			Intro.Resultado.value="0";
		}

	}

	function clean() {

		Intro.Resultado.value = "0";

		if (Intro.Resultado.value=="0") { 
			Intro.Resultado.value = " ";
		}
	}

	function Mem1 () {

		calcmemory(1);
		Intro.Memorial1.value = Intro.Resultado.value;

	}

	function Rec1 () {
	var simb = ["+","-","*","/",".","("];
	var x=0;
	var y=0;

		while(Intro.Resultado.value.substring(Intro.Resultado.value.length, Intro.Resultado.value.length - 1)==simb[x] || x<6){

		if(Intro.Resultado.value.substring(Intro.Resultado.value.length, Intro.Resultado.value.length - 1)==simb[x]){
			y=1;
			}
		x++;
		}
		if(y==1){
			Intro.Resultado.value = Intro.Resultado.value + Intro.Memorial1.value;
		} else{
			Intro.Resultado.value = Intro.Memorial1.value;
		}
	}

	function Del1 () {

		Intro.Memorial1.value = " ";

	}

	function Mem2 () {

		calcmemory(2);
		Intro.Memorial2.value = Intro.Resultado.value;

	}

	function Rec2 () {
	var simb = ["+","-","*","/",".","("];
	var x=0;
	var y=0;

		while(Intro.Resultado.value.substring(Intro.Resultado.value.length, Intro.Resultado.value.length - 1)==simb[x] || x<6){

		if(Intro.Resultado.value.substring(Intro.Resultado.value.length, Intro.Resultado.value.length - 1)==simb[x]){
			y=1;
			}
		x++;
		}
		if(y==1){
			Intro.Resultado.value = Intro.Resultado.value + Intro.Memorial2.value;
		} else{
			Intro.Resultado.value = Intro.Memorial2.value;
		}
	}

	function Del2 () {

		Intro.Memorial2.value = " ";
	
	}

	function Mem3 () {

		calcmemory(3);
		Intro.Memorial3.value = Intro.Resultado.value;

	}

	function Rec3 () {
	var simb = ["+","-","*","/",".","("];
	var x=0;
	var y=0;

		while(Intro.Resultado.value.substring(Intro.Resultado.value.length, Intro.Resultado.value.length - 1)==simb[x] || x<6){

		if(Intro.Resultado.value.substring(Intro.Resultado.value.length, Intro.Resultado.value.length - 1)==simb[x]){
			y=1;
			}
			x++;
		}
		if(y==1){
			Intro.Resultado.value = Intro.Resultado.value + Intro.Memorial3.value;
		} else{
			Intro.Resultado.value = Intro.Memorial3.value;
		}
	}

	function Del3 () {

		Intro.Memorial3.value = " ";
	
	}

		function Mem4 () {

		calcmemory(4);
		Intro.Memorial4.value = Intro.Resultado.value;

	}

	function Rec4 () {
	var simb = ["+","-","*","/",".","("];
	var x=0;
	var y=0;

		while(Intro.Resultado.value.substring(Intro.Resultado.value.length, Intro.Resultado.value.length - 1)==simb[x] || x<6){

		if(Intro.Resultado.value.substring(Intro.Resultado.value.length, Intro.Resultado.value.length - 1)==simb[x]){
			y=1;
			}
			x++;
		}
		if(y==1){
			Intro.Resultado.value = Intro.Resultado.value + Intro.Memorial4.value;
		} else{
			Intro.Resultado.value = Intro.Memorial4.value;
		}
	}

	function Del4 () {

		Intro.Memorial4.value = " ";

	}

	function DelH () {

		Intro.Historial.value = " ";

	}

	function barrido() {

		Intro.Resultado.value = 
		Intro.Resultado.value.substring(0, Intro.Resultado.value.length - 1);

	}

	function countdown() {

		var simb = ["+","-","*","/","(",")","^"];
		var x=0;
		var y=0;

		while(Intro.Resultado.value.substring(Intro.Resultado.value.length, Intro.Resultado.value.length - 1)==simb[x] || x<7){
			x++;
			if(Intro.Resultado.value.substring(Intro.Resultado.value.length, Intro.Resultado.value.length - 1)==simb[x]){
				y=1;
			} else {
				y=0;
			}
		}
	}

	function pot() {

		var x;
		var y=Intro.Bass.value;
		var op=1;

		for (x=0;x<Intro.Exponente.value; x++){
			op=op*y;
		}
		Intro.Potencia.value=op;

		Intro.Historial.value=Intro.Historial.value
		 + "(Potencia) " + Intro.Bass.value + " ^ "
		  + Intro.Exponente.value + " = " + Intro.Potencia.value + "\n";

	}
	function newbase() {
		Intro.Bass.value=eval(Intro.Resultado.value);
	}
	function newexp() {
		Intro.Exponente.value=eval(Intro.Resultado.value);
	}
	function resetpot() {
		Intro.Bass.value=1;
		Intro.Exponente.value=2;
		Intro.Potencia.value=0;
	}
	function sustxpot() {
		Intro.Resultado.value=Intro.Potencia.value;
	}
	function addpot() {
		Intro.Resultado.value=Intro.Resultado.value + Intro.Potencia.value;
	}
	function raiz() {
		Intro.Potencia.value=Math.pow(Intro.Bass.value, 1/Intro.Exponente.value);
		if(Intro.Exponente.value!="2"){
			Intro.Historial.value= Intro.Historial.value
			 + "(Ra\u00EDz) " + Intro.Exponente.value + "√"
			  + Intro.Bass.value + " = " + Intro.Potencia.value + "\n";
		} else{
			Intro.Historial.value= Intro.Historial.value
			 + "(Ra\u00EDz) " + " √"
			  + Intro.Bass.value + " = " + Intro.Potencia.value + "\n"
		}
	}

	function angtorad() {
		Intro.Resultado.value=Intro.Resultado.value * 3.14159265359 / 180;
	}
	function cos() {
		if(Intro.Historial.value!=" "){
			Intro.Historial.value= Intro.Historial.value
			 + "(Coseno)" + Intro.Resultado.value + " = " +
			Math.cos(eval(Intro.Resultado.value)) + "\n";
		}else{
			Intro.Historial.value= "(Coseno)" + Intro.Resultado.value +
			 " = " + Math.cos(eval(Intro.Resultado.value)) + "\n";
			}
		Intro.Resultado.value=Math.cos(eval(Intro.Resultado.value));
	}
	function sen() {
		if(Intro.Historial.value!=" "){
			Intro.Historial.value= Intro.Historial.value
			 + "(Seno)" + Intro.Resultado.value + " = " +
			Math.sin(eval(Intro.Resultado.value)) + "\n";
		}else{
			Intro.Historial.value= "(Seno)" + Intro.Resultado.value +
			 " = " + Math.sin(eval(Intro.Resultado.value)) + "\n";
			}
		Intro.Resultado.value=Math.sin(eval(Intro.Resultado.value));
	}
	function arcsen() {
		if(Intro.Historial.value!=" "){
			Intro.Historial.value= Intro.Historial.value
			 + "(ArcoSeno)" + Intro.Resultado.value + " = " +
			Math.asin(eval(Intro.Resultado.value)) + "\n";
		}else{
			Intro.Historial.value= "(ArcoSeno)" + Intro.Resultado.value +
			 " = " + Math.asin(eval(Intro.Resultado.value)) + "\n";
			}
		Intro.Resultado.value=Math.asin(eval(Intro.Resultado.value));
	}
	function arccos() {
		if(Intro.Historial.value!=" "){
			Intro.Historial.value= Intro.Historial.value
			 + "(ArcoCoseno)" + Intro.Resultado.value + " = " +
			Math.acos(eval(Intro.Resultado.value)) + "\n";
		}else{
			Intro.Historial.value= "(ArcoCoseno)" + Intro.Resultado.value +
			 " = " + Math.acos(eval(Intro.Resultado.value)) + "\n";
			}
		Intro.Resultado.value=Math.acos(eval(Intro.Resultado.value));
	}
	function tan() {
		if(Intro.Historial.value!=" "){
			Intro.Historial.value= Intro.Historial.value
			 + "(Tangente)" + Intro.Resultado.value + " = " +
			Math.tan(eval(Intro.Resultado.value)) + "\n";
		}else{
			Intro.Historial.value= "(Tangente)" + Intro.Resultado.value +
			 " = " + Math.tan(eval(Intro.Resultado.value)) + "\n";
			}
		Intro.Resultado.value=Math.tan(eval(Intro.Resultado.value));
	}
	function arctan() {
		if(Intro.Historial.value!=" "){
			Intro.Historial.value= Intro.Historial.value
			 + "(ArcoTangente)" + Intro.Resultado.value + " = " +
			Math.atan(eval(Intro.Resultado.value)) + "\n";
		}else{
			Intro.Historial.value= "(ArcoTangente)" + Intro.Resultado.value +
			 " = " + Math.atan(eval(Intro.Resultado.value)) + "\n";
			}
		Intro.Resultado.value=Math.atan(eval(Intro.Resultado.value));
	}

	function factorial() {
		var x=0;
		var n;
		var y=eval(Intro.Resultado.value);

		for(n=1; n<=y; n++){
			x=x+n;
		}

		if(Intro.Historial.value!=" "){
			Intro.Historial.value= Intro.Historial.value
			 + "(Factorial)" + Intro.Resultado.value + "!" + " = " +
			x + "\n";
		}else{
			Intro.Historial.value= "(Factorial)" + Intro.Resultado.value + "!"
			 + " = " + x + "\n";
			}
		Intro.Resultado.value=x;
	}
	