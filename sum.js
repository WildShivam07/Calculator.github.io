let calculate = document.getElementById("s-child");


function seven()
{
	calculate.value = calculate.value + "7";
}
function eight()
{
	calculate.value = calculate.value + "8";
}
function nine()
{
	calculate.value = calculate.value + "9";
}
function plus()
{
	calculate.value = calculate.value + " + ";
}
function four()
{
	calculate.value = calculate.value + "4";
}
function five()
{
	calculate.value = calculate.value + "5";
}
function six()
{
	calculate.value = calculate.value + "6";
}
function minus()
{
	calculate.value = calculate.value + " - ";
}
function one()
{
	calculate.value = calculate.value + "1";
}
function two()
{
	calculate.value = calculate.value + "2";
}
function three()
{
	calculate.value = calculate.value + "3";
}
function multiplication()
{
	calculate.value = calculate.value + " * ";
}
function zero()
{
	calculate.value = calculate.value + "0";
}
function decimal()
{
	calculate.value = calculate.value + ".";
}
function division()
{
	calculate.value = calculate.value + " / ";
}
function equalTo()
{
	let string = calculate.value;
    let g = Math;
    console.log(string);
    calculate.value = eval(string);
}