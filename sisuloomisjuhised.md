# Sisuloomisjuhised

## Sisu uuendamise põhimõtted

Koolide õppematerjalide loomine ja eriti õppekavade loomine on aeglane ja liialt harva toimuv protsess. Et täna loodud IT-õppekavad ja -materjalid poleks juba homme lootusetult vananenud, võib kasutada erinevaid stateegiaid:

### Pidev uuendamine

Käesolev projekt uurib võimalusi kiirendada õppematerjalide loomist ja uuendamist, kasutades tarkvaraloomise kogemusi, tuues sisse iga-aastased õppematerjali **järgud** ehk **_release_**'d mis baseeruvad järgnevatel Giti versioonihalduse **harudel** ehk **_branch_**'idel:

#### `master` haru

Siin toimub jooksvate täienduste ja paranduste sisseviimine, siin harus on alati materjalide värskeim versioon. Haru on mõeldud **õppematerjali loojatele** (mitte õpilastele ega õpetajatele).

#### `2011.x` haru

Haru on mõeldud õppekava koostajatele versioonide võrdlemise alguspunktiks.

#### `2020.x` haru

Selles harus 2020. aasta kevadel toimuva eksami õppematerjal. Haru on mõeldud **õpilastele ja õpetajatele** eksami ettevalmistuseks.

Harust lõigatakse regulaarseid uuendatud pisijärke ehk **_minor release_**'sid, näiteks `2020.0`, `2020.1`, `2020.2` jne. Pisijärgud ei muuda olulisel määral materjali sisu ega nõua lisaõpet, pigem on tegu vormistuse või keelevigade parandamise, tekstitäiendustega jne.

#### `2021.x` (tulekul)

Selles arus 2021. aasta kevadel toimuva eksami õppematerjal. See on mõeldud **õpetajatele** enese täiendamiseks.

### Ajatud materjalid

IT-materjalid ei vanane ühe kiirusega: kui kõik mis puudutab mobiilseadmete või veebiarendusega seonduvat muutub ülikiiresti, siis Interneti baasprotokollid või kasutajate psühooloogilised omadused mitte nii kiiresti.

Kui kirjutada õppekava küsimused üldisemaks, rääkides küll põhimõistetest, kuid puudutamata konkreetset tehnoloogiat, saab materjale ajaproovile vastupidavamaks muuta.

Näide liialt spetsiifilisest õppekava teemast:

::: oppekava

Tuua välja tugevad ja nõrgad küljed juurutusmeetoditel nt suur pauk, samm-sammult, pakettmudeliga (CORE mudel), üksuste kaupa (rollouts) meetodil.

:::

Sama teema üldistatuna:

::: oppekava

Tuua välja eri **juurutusmeetodite** **_deployment methods_** tugevad ja nõrgad küljed

:::

### Ajaloo ilu

Materjalide uuendamisel tasub jälgida ka seda, et _aegunud_ materjal pole tingimata _halb_ materjal. Mitmed asjakohasuse kaotanud peatükid võib koondada ajaloo-peatükkidesse mis pole hindamisel kohustuslikud, kuid aitavad mõista tehnoloogia arengupõhjusi ning annavad edasi kadunud ajastu vaimu.

Vananenud materjal on soovitav paigutada eraldi sektsiooni ja selgelt märgistada **vananemisteade** ehk **_deprectiation notice_**. Õppematerjali edasistes versioonides saab vananenud materjali kustutada.

Vaata ka [kuidas vormistada vananenud materjali lõiku](#vananenud-materjal).

## Sisu vormindamine

Õppematerjalid on vormindatud Markdownis, lihtsas tekstipõhises dokumentatsiooniformaadis https://guides.github.com/features/mastering-markdown/

### Pealkirjad

Õppematerjalide pealkirjade struktuur jälgib EUCIP õppekava struktuuri, st esimesed kolm pealkirjataset on numereeritud vastavalt õppekavale.

Neljas ja viies pealkirjatase on numereerimata ja vabamalt struktureeritav:

```md
# A.1 Mooduli pealkiri

## A.1.1 Alammooduli pealkiri

### A.1.1.1 Alateema pealkiri

#### Pealkiri

##### Alapealkiri
```

### Lingid

Linke saab vormistada järgnevalt:

```md
Siin on tavalink: https://google.com
Siin on [pealkirjaga link](https://google.com)
```

annab tulemuseks

Siin on tavalink: https://google.com
Siin on [pealkirjaga link](https://google.com)

### Paks ja kaldkiri

```
**paks** ja _kaldkiri_
```

annab tulemuseks

**paks** ja _kaldkiri_

### Mõisted

Mõistete vormindamise jaoks soovitame järgmist formaati:

```
**Eestikeelne termin** ehk **_English term_** / **_ET_**
```

mis annab tulemuseks:

**Eestikeelne termin** ehk **_English Term_** / **_ET_**

### Koodinäited

Jooksva teksti sees leiduvad koodinäiteid saab vormindada \`backtick\` märkide abil: `backtick`.

Pikemaid koodinäiteid saab luua nii:

````
```js
console.log("Hello World!")
```
````

kus `js` on soovitud programmeerimiskeele nimi. Kõikide toetatud keelte nimistu asub siin: https://prismjs.com/#supported-languages

Koodi vormindamise kohta vaata lisaks https://vuepress.vuejs.org/guide/markdown.html#line-highlighting-in-code-blocks

### Nimistud

Nimistuid saab vormindada lihtsal nii:

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

### Tsitaadid

Tsitaadid saab vormistada järgnevalt:

```md
> I’m actually as proud of many of the things we haven’t done as the things we have done.

_Steve Jobs_
```

annab tulemuseks:

> "I’m actually as proud of many of the things we haven’t done as the things we have done."

_Steve Jobs_

### Tabelid

Tabeleid saab vormindada tekstina:

```md
| veeru pealkiri 1 | veeru pealkiri 2 |
| ---------------- | ---------------- |
| veerg 1 rida 1   | veerg 2 rida 1   |
| veerg 1 rida 2   | veerg 2 rida 2   |
```

annab tulemuseks:

| veeru pealkiri 1 | veeru pealkiri 2 |
| ---------------- | ---------------- |
| veerg 1 rida 1   | veerg 2 rida 1   |
| veerg 1 rida 2   | veerg 2 rida 2   |

### Pildid

Pildid salvestatakse `./images` kataloogi, soovituslik pildiformaat on PNG ja jälgitagu et pildi suurus ei ületaks `300kb`. Failinime alguses peab olema mooduli tähis ning failinimi tohib sisaldada ainult **ladina väiketähti**, **numbreid** ja **\_** märki.

Pilte saab sisusse lisada järgnevalt:

```md
![](./images/a1_pildinimi.png)

_siia tuleb pildiallkiri_
```

Õppematerjalides leidub-siin seal ka lehekülje teksti sisse kodeeritud pilte kuid edaspidi on need plaanis kõik eraldi pildifailideks salvestada.

### Vananenud materjal

Vananenud materjalid saab märgistada järgnevalt:

```md
::: vananenud

#### Muud veebitehnoloogiad

Lisaks AJAX-ile on laialt kasutusel sellised tehnoloogiad nagu Flash ja selle konkurent Microsofti Silverlight.

:::
```

annab tulemuseks:

::: vananenud

#### Muud veebitehnoloogiad

Lisaks AJAX-ile on laialt kasutusel sellised tehnoloogiad nagu Flash ja selle konkurent Microsofti Silverlight.

:::

### Õppekava

Viiteid õppekavale saab märgistada järgnevalt:

```md
::: oppekava

Kirjeldada organisatsioone ja olulisemaid struktuure nt puustruktuur, kammstruktuur, juriidiline vorm nt mittetulundusühing, partnerlus; suurus nagu väikese ja keskmise suurusega ettevõte, korporatsioon.

:::
```

annab tulemuseks:

::: oppekava

Kirjeldada organisatsioone ja olulisemaid struktuure nt puustruktuur, kammstruktuur, juriidiline vorm nt mittetulundusühing, partnerlus; suurus nagu väikese ja keskmise suurusega ettevõte, korporatsioon.

:::

### Probleem

```md
Probleeme saab märgistada järgnevalt:

::: probleem

Õppematerjal ei vasta õppekavas püstitatud küsimustele

:::
```

::: probleem

Õppematerjal ei vasta õppekavas püstitatud küsimustele

:::

### Kordamisküsimused

```md
::: kordamiskusimused

1. Kas tulu mittetaotleval ettevõttel võib tekkida kasum?

:::
```

::: kordamiskusimused

1. Kas tulu mittetaotleval ettevõttel võib tekkida kasum?

:::
