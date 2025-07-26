import { listeners } from 'node:process';
import promptSync from 'prompt-sync';
import bands from './bands.json';
type BandMember = { 
name: string; 
instrument: string; 
};
//1
// console.log(bands.map(band => band.name))
/*console.log(bands.map(function(band) {
  return band.name;
})); */
//2
/* console.log(bands.map(function(band){
  return band.name, band.genre, band.trackCount })); */
//3 /*
/*  console.log(bands
  .filter(band => band.foundedYear < 2000)
  .map(band => band.name)  
);                 */
// 4 
/*  console.log(bands
  .filter(band => band.trackCount < 100)
  .map(band => band.name)  
);            */
// 5 
/* console.log(bands
  .filter(item => item.genre === 'Rock')
  .map(band => band.name )); */ 
// 6  
console.log(bands
  .filter(item => item.foundedYear > 1980)
  .map(band => band.name ));
// 7
console.log(bands
  .filter(item => item.originCountry === 'USA')
  .map(band => band.name ));
// 8 reduce(callbackFn, initialValue)
console.log(bands
  .reduce((accumulator, band) => accumulator + band.trackCount , 0));
// 9 
/*let stringArray = ["apple", "banana", "cherry"];
let arrayLength1 = stringArray.length;
console.log(arrayLength1); // Виведе 3
let arrayLength = 
function bands.members ;
console.log(arrayLength) */ 
console.log(bands
  .reduce((accumulator, band) => accumulator + band.members.length, 0))
// 10 Знайди гурт із найбільшою кількістю треків.
let maxSongs = bands.reduce((max, band) => {
if (band.trackCount > max) {
  return band.trackCount;
} else {
  return max;
}}, 0);
console.log(maxSongs);
//11 
/* if (bands.filter(item => item.genre === 'Rock')
         .map(band => band.name ) )
        console.log(band.name)
  else console.log("Alternativa") */
const rockBand = bands
  .filter(band => band.genre === "Rock" )
  .map(band => band.name);
console.log(`Rock: ${rockBand}`);
const alternativeRock = bands
  .filter(band => band.genre !== "Rock")
  .map(band => band.name);
console.log(`Alternative Rock: ${alternativeRock}`);
// 16  
const countryTrackCount = bands.reduce((acc, band) => {
  acc[band.originCountry] = (acc[band.originCountry] || 0) + band.trackCount;
  return acc;
}, {});
console.log(countryTrackCount);
// 17
const instrumentsBand = bands.map(band => band.members.map(member => member.instrument));
console.log(instrumentsBand);
// 18
const instrumentBandUnique = new Set(instrumentsBand.flat());
console.log(instrumentBandUnique);
/* const uniqueInstruments = new Set(
  bands.flatMap(band =>
    band.members.map(member => member.instrument)
  )
);
console.log(uniqueInstruments);
*/
// 19
const initialValue = 0;
const lengthSingers = bands.map(band => band.members.map(member => Number(member.name.split(" ")[0].length)));
lengthSingers.forEach((element, index) => {
  const sum = element[0] + element[1];
  const firstLength = lengthSingers[index][0];
  console.log(`Група: ${bands[index].name}, Число: ${firstLength}`);
});

//console.log(lengthSingers);
/* const arr = ['a', 'b', 'c'];

arr.map((element, index) => {
  console.log(`Елемент: ${element}, Індекс: ${index}`);
});
*/