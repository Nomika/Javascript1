<html>
<head>


<script>

var a
//a = 123;
//document.write(a);
//a="Łańcuch znakowy"; 
//document.write(a);

var tablica1 = new Array(45, 3, "Monika", 45.32)

for (z in tablica1){
    document.write(tablica1[z] + " ");
}
document.write(" <br/>" );
document.write(" <br/>" );
document.write("Wyświetlenie tablicy <br/>" );

var tablica2 = new Array ( "Malinowski", "Sączewska", "Stefano", "Lalamido", "Agnieszka", "Michalina", "Leszek")
for (a in tablica2){
    document.write(tablica2[a]+ " ");
}
document.write(" <br/>" );
document.write(" <br/>" );

document.write("Tablica alfabetycznie <br/>" );

tablica2.sort()
for (a in tablica2){
    document.write(tablica2[a]+ " ");
}
document.write(" <br/>" );
document.write(" <br/>" );

document.write("Tablica odwrotnie <br/>" );

tablica2.reverse()
for (a in tablica2){
    document.write(tablica2[a]+ " ");
}
document.write(" <br/>" );
document.write(" <br/>" );

var nazwiska = tablica2.join(", ")
document.write(nazwiska);

document.write(" <br/>" );
document.write(" <br/>" );

 /*document.write("Zadanie5 <br/>" );

var a = prompt('Podaj pierwsza liczbę');
 document.write(a);
 document.write(" <br/>" );
var b = prompt('Podaj drugą liczbę');
 document.write(b);
 document.write(" <br/>" );


 document.write(a + b);
 document.write(" <br/>" );
 document.write(a - b);
 document.write(" <br/>" );
 document.write(a * b);
 document.write(" <br/>" );
 document.write(a / b);
 document.write(" <br/>" );
 document.write(a % b);
 */

 /*document.write("Zadanie6 <br/>" );
 var a = prompt('Wpisz swój wiek');
if (a < 18) {
    document.write("Nie możesz korzystać z tego programu, bo masz za mało lat <br/>" );
}
if (a > 18) {
    document.write("Możesz korzystać z programu. Jeśli chcesz z niego skorzystać kliknij na przycisk WEJDŹ.<br/>" ); 
}*/

/*Zadanie 1
_____________*/

/*var a = prompt('Podaj pierwsza liczbę');
 document.write(a + ",");

var b = prompt('Podaj drugą liczbę');
 document.write(b + ",");

 var c = prompt('Podaj trzecią liczbę');
 document.write(c + ",");

var d = prompt('Podaj czwartą liczbę');
 document.write(d + ",");

 

var e = a + b + c + d;

document.write(" <br/>" );

function srednia() {
    var f = e / 2;
document.write(f);
}

srednia();*/

/* zadanie 3*/
/*var a = prompt('Napisz stopnie w Celsjuszach');
 document.write(a + " ");

 function fahren(){
if (a >= -273.15){
    var suma = (a*1.8) + 32;
}
document.write("Stopnie Celsjusza zamienione na Fahrenheita" + suma + " ");
 }

 fahren();
*/
/*var x = 5;
var y = 2;
var z = x + y;
document.write(z);*/

/*zadanie 7*/


</script>

</head>
<body>

<button><p id="demo"></p></button>
<button><p id="demo1"></p></button>
<button><p id="demo2"></p></button>
<button><p id="demo3"></p></button>
<button><p id="demo4"></p></button>
<button><p id="demo5"></p></button>
<button><p id="demo6"></p></button>
<button><p id="demoP"></p></button>


<script>
/*document.write("Zadanie7 <br/>" );
var a = document.getElementById("demo").innerHTML =
Math.floor(Math.random() * 10);

var b = prompt('Podaj liczbę');

if (b > a){
    document.write("Twoja liczba jest większa od wybranej <br/>" );
}
if (b < a) {
    document.write("Twoja liczba jest mniejsza od wybranej <br/>" );
}
if (a = b) {
    document.write("Gratulacje! Zgadłes liczbę wybrana przez komputer!!! <br/>" );
}*/


/*ZADANIE8

var tablica = [3];
document.getElementById("demo").innerHTML = tablica;

function myFunction() {
var a;
a = prompt('Podaj pierwsza liczbę');
 tablica.push(a);
  document.getElementById("demo").innerHTML = tablica;
}
myFunction()

function myFunction1() {
var b;
b = prompt('Podaj drugą liczbę');
 tablica.push(b);
document.getElementById("demo1").innerHTML = tablica;
}

myFunction2()
function myFunction2() {
var c;
c = prompt('Podaj trzecią liczbę');
 tablica.push(c);
document.getElementById("demo2").innerHTML = tablica;
}
myFunction2()

function myFunction3() {
var d;
d = prompt('Podaj czwartą liczbę');
 tablica.push(d);
document.getElementById("demo3").innerHTML = tablica;
}
myFunction3()

function myFunction4() {
var e;
e = prompt('Podaj piątą liczbę');
 tablica.push(e);
document.getElementById("demo4").innerHTML = tablica;
}
myFunction4()

function myFunction5() {
tablica.sort();
document.getElementById("demo5").innerHTML = tablica;
}
myFunction5()

function myFunction6() {
tablica.reverse();
document.getElementById("demo6").innerHTML = tablica;
}
myFunction6()
*/
//Zadanie 7
text = "";
var x =7;
for (i = 0; i < x; i++) {
    document.write("*" );
 for (var y = 0; y < x; y++){
     if (y <= i){
        document.write("*" );
     }
 }
document.write(" ");
document.write(text);
document.write("*" + "<br/>");
}



var n = 5;

var liniaGwiazdek = "";

for(var i = 0; i < n; i++) {
  liniaGwiazdek = "";
  for(var j = 0; j < n; j++) {
      if (j<=i) {
        console.log("*");
      }
    }

console.log(" ");

/*console.log(liniaGwiazdek);*/

</script>


</body>
</html>
