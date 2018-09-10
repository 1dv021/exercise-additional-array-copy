# Additionell kopia av array

- A-nivå
- [GitBook](https://coursepress.gitbook.io/1dv021/ovningsuppgifter/del-1/a-niva/additionell-kopia-av-array)
- [Lösningsförslag](https://github.com/1dv021/exercise-solution-proposals/tree/master/part-1/additional-array-copy)


> __VIKTIGT!__ Innan du börjar arbeta med övningsuppgiften är det viktigt att du följer guiden [Att komma igång med en övningsuppgift](https://coursepress.gitbook.io/1dv021/guider/att-komma-igang-med-en-ovningsuppgift) för att lägga till övningsuppgiftens repo till ditt repo för övningsuppgifter.

## Uppgift

Hämta hem övningsuppgiftens repo och lägg till en .gitignore-fil. Öppna filen `my-array.js` och komplettera funktionen `immutablePushNumber`, som ska returnera en kopia av en array där ett tal lagts till. Funktionen ska vara en så kallad "_pure function_", d.v.s. vara helt utan sidoeffekter.

Funktionen `immutablePushNumber` har två parametrar. Den första parametern är den array som ska kopieras. Den andra parameter är det tal som ska läggas till kopian av arrayen.

Du ska även implementera viss felhantering, innebärande att undantag kastas om fel inträffar. Om första parametern inte är av typen `Array` eller om andra parametern inte är av typen `Number` ska ett undantag av typen `TypeError` kastas.

```js
const ma = require('./src/my-array');
let arr = [1, 2, 3];
let newArray = ma.immutablePushNumber(arr, 4); // newArray must be [1, 2, 3, 4]
                                               // arr must be unchanged, i.e. arr !== newArray
```

## Tips

Genom att köra testerna som kommer med övningsuppgiften kan du undersöka om koden du skrivit löst uppgiften (i alla fall enligt testet...).

Funktioner, metoder, etc. som _kan_ komma till användning beroende hur du väljer att lösa uppgiften.

- [if](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
- [Array.isArray](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)
- [Array.length](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length)
- [Array.slice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
- [Array.push](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
- [throw](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw)
- [TypeError](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError)