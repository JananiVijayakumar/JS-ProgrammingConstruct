function celciusToFahr(celcius) 
{
  var celciusTemp = celcius;
  var celciusToFahr = celciusTemp * 9 / 5 + 32;
  var message = celciusTemp+'C is ' + celciusToFahr + ' F.';
    console.log(message);
}
function fahrToCelcius(fahrheit) 
{
  var fahrTemp = fahrheit;
  var fahrToCelcius = (fahrTemp - 32) * 5 / 9;
  var message = fahrTemp+'F is ' + fahrToCelcius + 'C.';
    console.log(message);
} 
celciusToFahr(60);
fahrToCelcius(45);