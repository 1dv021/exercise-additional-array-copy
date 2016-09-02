# <i class="fa fa-laptop"></i> Additionell kopia av array
<ul class="fa-ul fa-border exercise-info">
  <li><i class="fa-li fa fa-signal"></i>A-nivå</li>
  <li><i class="fa-li fa fa-github"></i><a href="https://github.com/1dv021/exercise-additional-array-copy.git">https://github.com/1dv021/exercise-additional-array-copy.git</a></li>
</ul>

><i class="fa fa-warning"></i> __VIKTIGT!__ Innan du börjar arbeta med övningsuppgiften är det viktigt att du följer guiden [Att komma igång med en övningsuppgift](https://coursepress.gitbooks.io/1dv021/content/guider/att-komma-igang-med-en-ovningsuppgift/) för att lägga till övningsuppgiftens repo till ditt repo för övningsuppgifter.

Hämta hem [övningsuppgiftens repo](https://github.com/1dv021/exercise-additional-array-copy.git). Öppna filen `my-array.js` och komplettera funktionen `pushToCopy`, som ska returnera en kopia av en array där ett tal lagts till.

Funktionen `pushToCopy` har två parametrar. Den första parametern är den array som ska kopieras. Den andra parameter är det tal som ska läggas till kopian av arrayen.

Du ska även implementera viss felhantering, innebärande att undantag kastas om fel inträffar. Om första parametern inte är av typen `Array` eller om andra parametern inte är av typen `Number` ska ett undantag av typen `TypeError` kastas. Är arrayen tom ska undantaget `Error` kastas.

```
let ma =  require("./src/my-array");
let arr = [1, 2, 3];
let newArray = ma.pushToCopy(arr, 4); // newArray must be [1, 2, 3, 4]
// arr must be the same as before, i.e. arr !== newArray
```

## <i class="fa fa-lightbulb-o"></i> Tips
Genom att köra testerna som kommer med övningsuppgiften kan du undersöka om koden du skrivit löst uppgiften (i alla fall enligt testet...).

Funktioner, metoder, etc. som *kan* komma till användning beroende hur du väljer att lösa uppgiften.

- [if](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
- [Array.isArray](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)
- [Array.length](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length)
- [Array.slice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
- [Array.push](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
- [throw](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw)
- [TypeError](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError)
- [Error](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)
