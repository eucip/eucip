# Sisuloomisjuhised

## Sisu uuendamine

Koolide õppematerjalide loomine ja eriti õppekavade loomine on aeglane ja liialt harva toimuv protsess. Et täna loodud IT-õppekavad ja -materjalid poleks juba homme lootusetult vananenud, võib kasutada erinevaid stateegiaid:

### Ajatud materjalid

IT-materjalid ei vanane ühe kiirusega: kui kõik mis puudutab mobiilseadmete või veebiarendusega seonduvat muutub ülikiiresti, siis näiteks Interneti baasprotokollid või kasutajate psühooloogilised ootused mitte nii kiiresti. Kui kirjutada kõik materjalid ja eriti õppekava küsimused ümber üldisemaks, puudutamata konkreetset tehnoloogiat, saab materjale ajaproovile vastupidavamaks muuta.

### Pidev uuendamine

Käesolev projekt testib muuhulgas võimalusi kiirendada õppematerjalide loomist ja uuendamist, kasutades tarkvaraloomise kogemusi, luues näiteks igaastaseid või veel tihedamaid õppematerjali **_release_**'d koos muutuste nimistuga **_diff_** / **_changelog_**.

### Ajaloo ilu

Materjalide uuendamisel tasub jälgida ka seda, et "aegunud" materjal pole tingimata "halb" materjal, mitmed asjakohasuse kaotanud peatükid võib koondada ajaloopeatükkidesse mis pole hindamisel kohustuslikud, kuid aitavad mõista tehnoloogia arengu põhjusi ning annavad edasi kadunud ajastu vaimu.

## Sisu vormindamine

### Pealkirjad

Õppematerjalide pealkirjade struktuur jälgib EUCIP õppekava puustruktuuri, st esimesed kolm pealkirjataset on numereeritud vastavalt õppekavale.

Neljas ja viies pealkirjatase on numereerimata ja vabamalt struktureeritav:

```md
# A.1 Mooduli pealkiri

## A.1.1 Alammooduli pealkiri

### A.1.1.1 Alateema pealkiri

#### Pealkiri

##### Alapealkiri
```

Õppematerjalid on vormindatud Markdownis, mis on lihtne tekstipõhine dokumentatsiooniformaat.

Vaata lähemalt https://guides.github.com/features/mastering-markdown/

### Paks ja kaldkiri

```
**paks** ja _kaldkiri_
```

annab tulemuseks

**paks** ja _kaldkiri_

### Mõisted

Mõistete vormindamise jaoks soovitame järgmist formaati:

```
**Eestikeelne termin** **_English term_** / **_ET_**
```

mis annab tulemuseks:

**Eestikeelne termin** **_English Term_** / **_ET_**

### Koodinäited

Jooksva teksti sees leiduvad koodinäiteid saab vormindada \`backtick\` märkide abil: `backtick`.

Pikemaid koodinäiteid saab luua järgnevalt:

````
```js
console.log("Hello World!")
```
````

kus `js` on soovitud programmeerimiskeele nimi, kõikide toetatud keelte nimistu asub siin: https://prismjs.com/#supported-languages

Koodi vormindamise kohta vaat lisaks https://vuepress.vuejs.org/guide/markdown.html#line-highlighting-in-code-blocks

### Nimistud

Nimistuid saab vormindada lihtsal tekstikujul:

```md
- Esimese
- Taseme
- Nimistu
  - Teise
  - Taseme
  - Nimistu
```

annab tulemuseks:

- Esimese
- Taseme
- Nimistu
  - Teise
  - Taseme
  - Nimistu

### Mitmerealised nimistud

Mitmerealiste nimistute puhul tuleb kasutada taandridu kahe tühikuga ning kasutada reavahet nimistu liikmete vahel:

```md
- **Esimene**
  nimistu
  element

- **Teine**
  nimistu
  element
```

annab tulemuseks:

- **Esimene**
  nimistu
  element

- **Teine**
  nimistu
  element

### Tabelid

Tabeleid saab vormindada tekstina, vt

https://vuepress.vuejs.org/guide/markdown.html#github-style-tables

### Pildid

Pildid salvestatakse `./images` kataloogi, soovituslik pildiformaat on PNG ja jälgitagu et pildi suurus ei ületaks `300kb`.

Pilte saab sisusse lisada järgnevalt:

```md
![](./images/pildinimi.png)

_siia tuleb pildiallkiri_
```

Õppematerjalides leidub-siin seal ka lehekülje teksti sisse kodeeritud pilte kuid edaspidi on need plaanis kõik eraldi pildifailideks salvestada.

### Kastid

Lisaks standardsetele Markdowni võimalustele saab sisu eristamiseks saab kasutada eri värvi kaste:

::: tip Roheline

Roheline kast on reserveeritud kordamisküsimustele

:::

::: warning Kollane

Kollane kast on reserveeritud õppekava viidetele

:::

::: danger Punane

Punane kast on olulistele märkustele ja esiletõstetud probleemidele.

:::

Punast kasti saab luua järgnevalt:

```md
::: danger Punane

Punane kast on olulistele märkustele ja esiletõstetud probleemidele.

:::
```
