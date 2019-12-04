# B.3 Programmeerimine

Selle teema materjale läbi töötades saad teadmised programmeerimisega seotu kohta.

## B.3.1 Tarkvara projekteerimise meetodid ja vahendid

Selle alateema materjale läbi töötades õpid tundma tarkvara arendusmeetodeid ja tehnikaid

### B.3.1.1 Tarkvaraarandus, objektorienteeritud disain, ülalt alla projekteerimine ja struktuurne programmeerimine

::: oppekava

Tuua erinevate programmide projekteerimise meetodite põhijooned, nagu näiteks objektorienteeritud (OO) projekteerimine, ülalt-alla disain, struktureeritud programmeerimine.

:::

Suurema tarkvara arendamine on tänapäeval enamasti meeskonnatöö ja seetõttu on siin valdkonnas mõeldud välja erinevaid reeglistike ja meetodeid. Need reeglid ja head tavad on välja töötatud eelkõige selleks, et tarkvaraarendusega seotud inimesed mõistaksid üksteist ja nende tööd oleks võimalik kõigile arusaadavalt standardiseerida. Standardiseerimise abil on võimalik tagada tarkvara kvaliteeti ja vähendada tarkvara arendamiseks kuluvat aega ja raha.

Tarkvara arenduse võib laias laastus jagada järgmisteks alamülesanneteks:

1. Vajaduste kirjeldamine ja nende analüüs
2. Tarkvaratoote disain
3. Teostamine
4. Testimine
5. Toote väljalase (juurutamine)
6. Toote hooldus.

#### Vajaduste kirjeldamine ja nende analüüs

Tarkvara loomine algab tavaliselt vajaduste kirjeldamisest ja nende analüüsist. Mida täpsem ja korrektsem on tarkvara vajaduste kirjeldus ja nende analüüs, seda lihtsam on hiljem kõiki muid arenduse etappe teostada. Peamine probleem selles faasis seisneb tellija ja tarkvara arendaja erinevas nägemuses. Tihti on nii, et tarkvaratellija ei tea midagi programmeerimisest ega tarkvara disainist, aga tal on väga selge nägemus sellest, mida ta vajab. Tarkvaraarendaja aga ei kujuta väga täpselt ette tellija tööprotsessi, vaid kipub liiga vara mõtlema tarkavara teostamise võimalustele ja vahenditele.

#### Tarkvaratoote disain

Tarkvara disaini etapis peab arendaja mõtlema, kuidas tarkvara teostada. Peamiseks ülesandeks siin etapis on mõelda välja kuidas võimalikult väikeste raha ja ajakuluga teostada tellijale vajalik tarkvaratoode.

Tuleb jälgida kuidas loodav tarkvaratoote disain vastaks järgmistele nõudmistele:

- Usaldusväärsus
- Muutmise võimalikkus
- Arusaadavus

Usaldusväärsuse all mõeldakse siinkohal tarkvara vastavust tellija vajadustele ja milliselt käitub tarkvara tellija poolt mittekirjeldatud olukordades. Tarkvara loetakse veatuks, kui see rahuldab tellija poolt kirjeldatud vajadusi. Kui tarkvara töötab ootuspäraselt ka olukordades, mida tellija ei ole kirjeldanud, siis loetakse tarkvaratoode viimistletuks (ik robust).

Muutmise võimalikkus on tänapäeva tarkvaralahenduste juures samuti väga tähtis, sest iga olemasolev tarkvaratoode võib olla aluseks mõnele uuele tootele. Seega on väga oluline mõelda, mida on vaja teha loodava tarkvara uuesti kasutamiseks sarnastes toodetes. Samuti on muutmise võimalikkus oluline, kui tarkvara tootes leitakse vigu või mittevastavusi vajadustele.

Arusaadavuse vajalikkus on tulenev eelkõige sellest, et tarkvara teostatakse tänapäeval meeskonnatööna ja lahendus peab olema arusaadav kõigile tarkvaratoote teostamise, testimisega ja hooldamisega seotud inimestele ning seda ka hiljem, pärast tarkvara valmimist.

Tarkvara disaini etapis tuleb otsustada ka see, kui palju ja millisteks alamosadeks loodav tarkvaralahendus jagatakse. Alamosadeks jaotamisel tuleb eriti arvestada uuestikasutatavuse nõudega - liig suurte alamosade korral võib nende uuestikasutamine osutuda keeruliseks, liig väikeste osade korral võivad esmased arenduskulud muutuda ebaotstarbekalt suureks. Täna on väga vähe lahendusi, kus on võimalik monoliitne lahendus. Tarkvara lahenduse jagamisel alamosadeks on kaks lähenemist: ülalt-alla (ik top-down) ja alt-üles (ik bottom-up).

Ülalt-alla lähenemisel jagatakse lähteülesanne alamülesanneteks, mis võivad igaüks koosneda omakorda alamülesannetest, seejärel jagatakse saadud alamülesanded omakorda alamülesanneteks kuni lähteülesanne koosneb lihtsatest ja üheselt mõistetavatest alamülesannetest. Sellise lähenemise puuduseks on see, et suurtel lahendustel on seda ebaotstarbekas kasutada, sest lähteülesanne jagatakse sellisel juhul väga paljudeks alamülesanneteks, kusjuures ilmselt esineb olukordi, kus ühte ja sama probleemi lahendatakse korduvalt (sest mitmed alamülesanded nõuavad sarnaste probleemide lahendamist). Lisaks eelnevale peab tarkvaradisainer hakkama üsna varakult mõtlema konkreetsete algoritmide peale, millega etteantud probleemid lahendatavad oleks.

Alt-üles lähenemise korral jagatakse lähteülesanne alammooduliteks, milliseid käsitletakse "mustade kastidena";. Seejärel kirjeldatakse mida iga alammoodul tegema peab ja milliste teiste moodulitega peab see infot vahetama. Nii on võimalik suur lähteülesanne jagada iseseisvateks alamülesanneteks, mida on võimalik eraldi arendama hakata. Alt-üles lähenemisel on lihtsam leida olemasolevatest lahendustest korduvkasutatavaid mooduleid, mida saab uue lahenduse koostamisel kasutada, mis omakorda kiirendab ja lihtsustab oluliselt uue lahenduse väljatöötamist. Sellise lahenduse suurimaks probleemiks on tihti see, et jäetakse täpselt kirjeldamata moodulitevaheline infovahetus ja selle korraldus.

Tihti on kasulik lähteülesanne jagada "alt-üles"; lähenemise abil alammooduliteks ja need omakorda "ülalt-alla"; lähenemise abil lõplikult lahendada.

#### Tarkvaraarenduse meetodid

**Struktuurprojekteerimise** korral valmib terve programm korraga, projekteerimise etapid (analüüs, disain jne) on selgelt piiritletud ja järgmine etapp ei käivitu enne, kui eelmine on lõppenud. Sellisel projekteerimisel on mitmeid tõsiseid puuduseid: kui disainimisel tehti vigu, siis ilmneb see tihti alles arenduse lõppfaasis, lahenduse korduvkasutus on komplitseeritud, lahendus koosneb harva moodulitest ja funktsionaalsuse lisamine lahendusele on keeruline. Nende puuduste kõrvaldamiseks kasutatakse tihti prototüüpimist: lahendusele tehakse kiiranalüüs, valmistatakse piiratud funktsionaalsusega prototüüp, korraldatakse testimine tellija juures ja edasisel lahenduse väljatöötamisel lähtutakse ka prototüübi tagasidest.

**Objektorienteeritud** (OO) **projekteerimise** korral lähtutakse sellest, et arendus hakkab toimuma objektorienteeritud arendusvahenditega. Seega teostatakse analüüsi ja disainimise etapid vahenditega, mis toetavad hilisemat lahenduse teostamist objektorienteeritud vahenditega. Suured lahendused jagatakse väiksemateks eraldiseisvateks lahendusteks, mida on võimalik arendada iseseisvalt.

OO projekteerimise korral kasutatakse analüüsi ja disaini etapis lahenduse kirjeldamisel sageli **_Unified Modeling Language_** / **_UML_** vahendeid.

### B.3.1.2 Abstraktsioon probleemide lahendamise ja tarkvara loomise meetodina

::: oppekava

Kirjeldada abstraktsiooni kui probleemilahenduse ja tarkvara projekteerimise vahendit.

:::

**Abstraktsioon**

Tarkvara loomisel on oluline osa abstraktsioonil. Selle all mõeldakse lähenemisviisi, kus mingi nähtuse analüüsimisel jäetakse mängust välja selle ebaolulised küljed, mis ei mängi rolli antud probleemi lahendamise kontekstis.

Selles mõttes on abstraktsioon infotehnoloogias sarnane abstraktsiooniga matemaatikas, kus matemaatiliste mõistete (sirge, arv, funktsioon jne.) defineerimisel ";jäetakse alles"; üksnes need reaalmaailma objektide-nähtuste omadused, millel on tähtsust vastava matemaatilise teooria ülesehitamisel.

Näiteks võib tuua abstraktse mõiste arv, millel on tähendus nii matemaatikas kui programmeerimiskeeltes. Arvu kujutamine arvutis sõltub nii tark- kui riistvarast, kui see ei muuda selle mõiste sisu.

Üldistades võib abstraktsioonid programmeerimiskeeltes jagada kahte gruppi:

1. **juhtimisabstraktsioon** **_control abstraction_**
2. **andmeabstraktsioon** **_data abstraction_**

Struktuurprogrammeerimise korral mõistetakse juhtimisabstraktsiooni all süstemaatilist alammoodulite ning juhtimisvoo käskude (iteratsioon, valik, jne.) kasutamist. Andmeabstraktsiooni all mõeldakse reaalmaailma andmete adekvaatset peegeldamist programmeerimiskeele andmestruktuurides (vektorid, kirjed jne).

Objektorienteeritud programmeerimiskeeltes on juhtimis- ja andmeabstraktsioonid ühildatud.

### B.3.1.3 Spetsiifilised eripärad vanade rakenduste juures

::: oppekava

Tuua välja vanemate süsteemide projeteerimise erivajadused ja -nüansid, näiteks keeruline struktuur, halb dokumentatsioon, vananenud riist-/tarkvara ärikliitiline süsteem.

:::

#### Pärandsüsteemid

**Pärandsüsteemi** **_legacy system_** all mõeldakse vananenud, varem kasutusel olnud rakendusprogrammi või riistvaraseadet, mida ka tänapäeval kasutatakse.

Pärandsüsteemidega seonduvad järgnevad võimalikud probleemid:

1. sageli töötavad nad vananenud riistvara peal, mille tööshoidmine on kulukas
2. rganisatsioonis puudub kompetents süsteemi arendamiseks ja haldamiseks (näiteks võivad selle loonud programmeerijad olla organisatsioonist lahkunud või sootuks surnud, kui süsteem pärineb näiteks 1960ndatest aastatest). Tarkvara loojaid hoiatatakse, et nende sobivaks osutunud kood võib töötada kauem, kui nende kõige hullemad unistused võiksid ette näha
3. uute süsteemide kasutuselevõtul tuleb hoolitseda "tagasiühilduvuse"; (ingl. k. backward compatibility) eest.

### B.3.1.4 Avatud ning suletud koodiga tarkvaraarendus

::: oppekava

Tuua välja erinevused avatud lähtekoodiga ja kommertstarkvara arenduses.

:::

Aegade jooksul on välja kujunenud avatud ning suletud koodiga tarkvaraarendus. Esimese juures neist tehakse oma programmikood üldjuhul kõigile vabalt kättesaadavaks, varjatud on ainult paroolid ja muu sarnane tundlik info. Omal on mugav valmivat rakendust luua vabalt ligipääsetavas keskkonnas. Suuremate ja laiemat huvi pakkuvate projektide korral on lootust, et huvilised on valmis lõike omalt poolt täiendama ja kontrollima. Samuti on avatud koodiga arenduste puhul üldjuhul õigus kasutada vajalikke lõike juba valminud avatud koodiga rakenduste juurest mis võib mõnikord töövaeva märgatavalt vähendada.

Puudusteks peetakse mõnikord hajusust projektijuhtimisel, kui tegijate ring on liialt laiaks läinud. Samuti pole nõnda võimalik töö juures kasutatavaid algoritme salajas hoida, kui selleks peaks vajadus tekkima.

Suletud koodiga tarkvaraarenduse juures on lõppkasutajale kättesaadav vaid installeerimisvalmis toode, tarkvara loomisega seonduv jääb tarkvarafirma siseasjaks. Selliselt on tarkvarafirmal võimalik rakenduse loomise käigus valminud mooduleid ka mujale eraldi tasu eest müüa. Samas firmas ühtse kodeerimisstandardi järgi loodud tarkvara puhul on mõnikord rohkem lootust, et eraldi loodud tükid julgemini üksteise külge sobivad. Samuti mõned lepingud ja projektid kohustavad arendatavat tarkvara looma kinnise koodiga.

Tasapisi on tarkvara ja ka muu intellektuaalomandiga seotud litsentside süsteem mitmekesistunud. On võimalik määrata, millistes tingimustes on tarkvara võimalik edaspidi kasutada. Kas, millistel tingimustel ja kui palju on seda tulevikus võimalik muuta. Nii on loodetavasti võimalik leida enamike projektide jaoks sobiv lahendus kus on piisavalt vabad käed oma süsteemi loomisel, samas ei pea muretsema, et tarkvara koodi edasine kasutus võiks arendavale seltskonnale märgatavalt kahju teha.

### B.3.1.5 Tarkvara litsensivajadused kinnise tarkvara, avatud koodiga tarkvara, vaba tarkvara ja vabavara juures

::: oppekava

Tuua välja erinevad litsentseerimise nõuded kommertstarkvarale, avatud lähtekoodiga tarkvarale, vabale tarkvarale ja vabavarale.

:::

Lehekülgi sellisel lehestikul tavaliselt mõnest mõneteistkümneni. Abstraktsioonitase sõltub sellest, kas ja kui keerukat sisuhaldussüsteemi pruugitakse. Valmislahenduse ülevõtmisel võib piirduda vaid sisu vahetamisega. Keerukama kujunduse ning mõne lisavidina (nt. hinnakalkulaator) puhul võib siiski kuni paari nädala jagu tehnilist tegemist olla – sisu kokku otsimine ja sättimine nagunii.

Pankade infosüsteemile esitatavad nõuded on kümnetes kordades keerukamad. Koodi mahtu loetakse vähemasti sadades tuhandetes koodiridades ning hulgem peab juures olema kontrolle, et valesid operatsioone teha ei õnnestuks. Abstraktsioonitasemeid peab mitu olema, sest otse kõike hallata on keerukas ja riskantne. Piiratud tükkideks jaotamisel on võimalik tööülesandeid lihtsamini jagada ning tulemust kontrollida. Kuna eri pankade süsteemid on loodud tõenäoliselt erisuguseid vahendeid kasutades ja veidi erineva loogikaga, siis tuleb kindlasti arvesse pärandsüsteemidega seonduv.

### B.3.1 Kordamisülesanded

::: tip Kordamisülesanded

1. Abstraktsiooni puhul:
   – tohib andmete juures kasutada ainult arve
   – parema arusaadavuse huvides üldistatakse üksikjuhtumid X
   – ei tohi alamprogrammid üksteist välja kutsuda
   – peavad kõik andmed olema tekstitüüpi

2. Pärandsüsteemid:
   – on ilmtingimata suured
   – on kindlasti kättesaadava lähtekoodita
   – on sageli raskesti kohandatavad ja liidestatavad X
   – on harva töövõimelised

:::

## B.3.2 Algoritmid ja andmestruktuurid

Selle alateema materjale läbi töötades tutvud programmeerimise andmete hoidmise ning töötlemise vahenditega.

### B.3.2.1 Liht- ja struktuurandmetüübid. Andmestruktuurid - kirjed, massiivid, ahelad

::: oppekava

Kirjeldada struktureeritud ja struktureerimata andmetüüpe ja erinevaid andmestruktuure: kirjed, massivid, ahelad (linked lists).

:::

#### Muutujad

Programmeerimise käigus on reeglina vaja hoida meeles mingit hulka andmeid (vahetulemused, toimunud sündmused, sisendväärtused, väljundväärtused jne). Neid väärtused tuleb hoida mälus. Selleks defineeritakse koht mälus, mida kasutatakse andmete hoidmiseks ning seda defineeritud kohta nimetatakse muutujaks. Kuna andmed, mida hoitakse, võivad olla väga erinevad, siis öeldakse ka muutuja defineerimisel, mis tüüpi andmeid selles muutujas hoidma hakatakse (muutujatüüp).

#### Lihttüübid

Lihttüüpi muutujas on märksõna all peidus üks väärtus (enamasti arvuna loetav) ning ta on sealt otse kättesaadav. Tuntumad lihttüübid on: märgiga täisarv, märgita täisarv, reaalarv (komakohaga), tähemärk, tõeväärtus. Keeleti võivad nad mõnevõrra erineda.

#### Struktuurtüübid

Struktuurtüüpides koondatakse ühe märksõna alla mitu kokkukuuluvat väärtust nagu näiteks punkti koordinaadid või inimese ees- ja perekonnanimi. Selliselt on andmekogumit kergem korraga edasi anda. Samas andmeid kasutada või muuta tuleb enamasti ikka struktuuri seest ükshaaval.

#### Massiivid

Massiiv on ühetüübiliste muutujate kogum, millistel on üks nimi ja mis on üksteisest eristatavad indeksi poolest. Massiivid lihtsustavad oluliselt ühetüübiliste andmete töötlemist. Lihtsustamine tuleneb sellest, et programmi täitmise käigus on võimalik indeksit lihtsalt muuta ja seega on lihtsam pöörduda vajaliku muutuja poole. Massiivist järjekorranumbri järgi väärtuse küsimine on arvuti jaoks suhteliselt kiire operatsioon.

Massiivid võivad olla ühemõõtmelised (jada, rida), kahemõõtmelised (tabel, maatriks), kolmemõõtmelised (kuup), jne.

Näide (C#, Java):

```csharp
int[] mass = new int[10]; //luuakse massiiv kümne täisarvu hoidmiseks.

mass[0]=1; //kohale 0 kirjutatakse väärtus 1
```

**Lisalugemist:** http://enos.itcollege.ee/~jpoial/java/i200loeng4.html

#### Kirjed

Hoidmaks erinevate tüüpi andmeid, mis moodustavad koos mingi seostatud kogumi kasutatakse kirjeid. Näiteks moodustub kirje inimene järgmistest andmetest: eesnimi (tekst), perenimi (tekst), sugu (tõeväärtus, 0- naine, 1 -mees), kaal (reaalarv). Sellised andmed moodustavad ühtse terviku ühe inimese kirjeldamiseks, kuid eraldiseisvana on väga erinevat tüüpi.

Näide (C#)

```csharp

struct inimene {
  public string eesnimi;
  public string perenimi; public bool sex;
  public float weight;
}
```

Sellise kirjega saame luua uue muutuja kasutaja ja anda kasutajale, eesnime, perenime, soo ja kaalu:

```csharp
inimene kasutaja;

kasutaja.eesnimi = "Jaan";
kasutaja.perenimi = "Mets";
kasutaja.sex = 1;
kasutaja.weight = 80.0;
```

#### Ahelloendid

Kaasajal kasutatakse tihti andmete hoidmiseks loendeid **_list_**.

Kui iga listi liige viitab järgmisele, siis on tegemist **ahelloendiga** **_linked list_**, ahelloendi lõppu märgib tühiliige `null`.

Ahelloend, kus iga liige viitab järgmisele nimetatakse ühesuunaliseks loendiks, ahelloend, kus iga liige viitab eelmisele ja järgmisele nimetatakse kahesuunaliseks loendiks.

Ahelloend, kus puudub esimene ja viimane liige ning iga liige viitab järgmisele nimetatakse **ringloendiks**. Ahelloendi pikkus on loendi liikmete arv. Loendi esimene liige on **pea** **_head_** ja ühejäänud liikmed **saba** **_tail_**.

**Pinu** **_stack_** on ahelloend, kus viimasena lisatud liige loetakse välja esimesena ( LIFO – Last In First Out).

**Järjekord** **_queue_** on ahelloend, kus esimesena lisatud liige loetakse välja esimesena ( FIFO – First In First Out)

**Lisalugemist:** [http://www.cs.tlu.ee/~inga/alg_andm/linked_list_C_2011.pdf](http://www.cs.tlu.ee/~inga/alg_andm/linked_list_C_2011.pdf)

#### Puu

Puu on andmestruktuur, kus andmed on paigutatud puukujuliselt, koosneb **tippudest** **_nodes_** ja kaartest **_edges_**, mis ühendab tippe.

Tipud, mis on ühendatud kaarega üleval asuva tipu külge on **lapsed** **_childs_** ja üleval asuv tipp on sellisel juhul **vanem** **_parent_**. Kõige ülemine tipp on **juur** **_root_**. Tippu, millel ei ole lapsi, nimetatakse **leheks** **_leaf_**.

![](data:image/png;base64,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)

Liikudes tipust vanemasse, sealt vanemasse jne jõuame Juurde. Esivanemad on kõik tipud mis jäävad vaadeldava tipu ja juure vahepeale. **Puu kõrgus** **tree height** on pikim tee lehest juureni.

Järjestatud puu korral on defineeritud juur ja otse juurega ühendatud tipud on esimese taseme tipud, juure lapsed), esimese taseme tippudega otse ühendatud tipud on teise taseme tipud (esimese taseme tippude lapsed) jne ning laste järjekord vasakut paremale on oluline.

**Kahendpuu** **_binary tree_** on selline puu, kus igal vanemal võib olla mitteühtegi, üks või kaks last ja laste järjekord on oluline.

**Kahend-otsingupuu** **_binary search tree_** on kahendpuu, mis on järjestatud. Tipust vasakul on alati väiksem suurus ja tipust paremal suurem suurus.

![](data:image/png;base64,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)

Sellisest puust otsides võrreldakse otsitavat väärtust juurega, kui otsitav väärtus võrdub juure väärtusega, siis väärtus eksisteerib, kui aga juure väärtus ei võrdu otsitavaga, siis võrreldakse väärtust edasi, vastavalt kas vasaku või parema tippude hulgast kuni jõutakse leheni. Kui otsitav väärtus on võrdne mõne tipu väärtusega, siis on otsitav element olemas, kui aga ei leidu võrdset väärtust, siis otsitavat elementi ei ole. Selline otsimise viis on kordi kiirem kui oleks näiteks ahelloendi või massiivi läbivaatamine.

**B-puu** **_B-tree_** on otsingupuu, milles iga tipu tütarde arv asub vahemikus (t-1) kuni (2t-1), kus t on suvaline konstant

**B\*-puu** on B-puu, kus tippude täituvus hoitakse 2/3 juures, täites kaks tütartippu võtmete ümberjaotamise teel ja tükeldades nad seejärel kolmeks tipuks.

B-puu võimaldab nõnda hoida puu sügavust kahendpuust väiksemana. Täituvust piirates on võimalik vahetasemetel hoida kindlaksmääratud suurusega mälumahtu ning samas pääseb sinna sobivasse kohta kohe andmeid lisama.

**Lisalugemist:** [http://www.cs.tlu.ee/~inga/alg_andm/tree_gen_2011.pdf](http://www.cs.tlu.ee/~inga/alg_andm/tree_gen_2011.pdf)

**Lisalugemist:** http://enos.itcollege.ee/~jpoial/algoritmid/puustruktuurid.html

### B.3.2 Levinumad sortimis- ja otsimisalgoritmid ning andmestruktuurid

::: oppekava

Hinnata tüüpiliste otsi- ja sortimisalgritmide sobivust erinevate andmestruktuuridega.

:::

Märgatav osa arvutite tööajast kulub andmete otsimisele ja sortimisele, ehkki on ka muid vajalikke algoritme (graafidega seonduv näiteks). Sõltuvalt andmete ülesehitusest, eelnevast järjestusest, andmekandjast, päringute sagedusest ja tüübist ning kasutatavast mäluhulgast on sortimiseks ja otsimiseks loodud kümneid algoritme.

**Mullsortimise** **_bubble sort_** puhul vahetatakse järjest ära kõrvuti asetsevad väärtused sobivasse suunda. Sobib juhul, kui andmestik on peaaegu sorditud, on ainult üksikud erinevused lähestikku seisvate väärtuste seas. Segamini suurema andmestiku puhul tegemist väga aeglase algoritmiga. Lihtne programmeerida.

**Valiksortimise** **_selection sort_** puhul otsitakse iga ringi puhul olemasolevate hulgast välja vähim ning tõstetakse ta sobivale kohale. Algoritmi tööaeg ei sõltu andmete eelnevast.

Põhilisteks programmeerimise juures kasutatavateks tüüpideks on tekst (string), täisarv ning reaalarv (komaga arv). Kusjuures näiteks telefoninumber on sageli mõistlik talletada tekstina, sest täisarvul on pikkusepiirang. Struktuurtüüpi on põhjust kasutada siis, kui väärtus ise jaguneb alamosadeks ning neid võib olla vajadust eraldi kasutada. Näiteks aadress võiks olla kirje, kus eraldi väljadeks indeks, linn, tänav. Massiivis on andmed üldjuhul ühte tüüpi, näiteks aadresside loetelu võib olla massiiv. Massiivide puhul on üldjuhul hea teada elementide maksimaalarv. Kui vaja väärtusi keskele või lõppu lisada, siis on paindlikuma ülesehitusega ahelloendid selle tarbeks paremad.

Kahe väärtuse vahetamiseks on üldjuhul tarvis kolmandat kohta vahepealseks hoidmiseks – ilma toetuspunktita on päris raske käes olevat arbuusi ja melonit vahetada.

**Lisalugemist:**

http://www.cs.tlu.ee/~inga/alg\_andm/sorting\_Python.pdf

### B.3.2 Kordamisküsimused

::: kordamiskusimused

1. Massiivi puhul:
   – on elemendi poole võimalik pöörduda massiivi nime ning järjekorranumbri kaudu X
   – võivad sisaldada kuni viis elementi
   – elemendid peavad olema täisarvud
   – pole võimalik tsükli sees elementide poole pöörduda

2. Andmepuu:
   – võib sisaldada ainult täisarve
   – peab sisaldama vähemalt viis elementi
   – lehtede väärtused saab süstemaatiliselt läbi käia X
   – on kasutatav vaid üksikute programmeerimiskeeltega

:::

## B.3.3 Programmeerimiskeeled

Selle alateema materjale läbi töötades õpid tundma programmeerimiskeelte tüüpe, eripärasid ja ajaloolist kujunemist, samuti programmeerimise käigus esile tulevad põhikonstruktsioone.

### B.3.3.1 Programmeerimiskeelte tüübid - funktsionaalsed, protseduursed, objektorienteeritud keeled

::: oppekava

Tuua välja programmeerimiskeelte liikide erinevused ja eelised: funktsionaalsed, protseduursed, objektorienteeritud.

:::

Programmeerimise vajadus tekkis juba enne programmeeritavaid arvuteid. Nii on teada näiteks 18. sajandist kangasteljed, mis olid programmeeritavad puuliistude, kuhu oli tehtud õigetesse kohtadesse augud, abil.

Programmeerimise arengule andis hoo John von Neumanni poolt 1945. aastal avaldatud idee, kus ta kirjeldas arvutit, kus mälus hoitakse lisaks andmetele ka käske.

#### Programmeerimiskeelte põlvkonnad

**Esimese põlvkonna programmeerimiskeelteks** nimetatakse masinkoodi keeli. Masinkood koosneb käskudest, mida arvuti (protsessor) täita oskab ( ning nende käskude juurde kuuluvatest andmetest). Masinkoodis programmeerimisel pidi programmeerija kirjutama oma programmi kahendkoodis, nii et see oleks protsessorile arvusaadav ja täidetav. Sisuliselt nõuab selline programmeerimine häid teadmisi ja arusaamist riistvarast, sest programmeerimise käigus peab teadma mida protsessor teha oskab, kus asuvad sisend-väljundseadmed **_I/O_** **_Input-Output_** ning kuidas nendega suhelda tuleb ja kui kaua aega mingi tegevuse tarvis kulub. Niisiis on masinkood väga tugevasti seotud riistvaraga, mille peal vastav programm tööle hakkab. Masinkood ei ole tänapäeva arvutitest kuhugi kadunud, kogu tegevus madaltasemel (riistvara tasemel) toimub endiselt masinkoodis ehk siis ükskõik millises programmeerimiskeeles kirjutatud programm teisendatakse lõpuks ikkagi riistavarale arusaadavasse masinkoodi.

**Teise põlvkonna** programmeerimiskeeled on **assembler-keeled**, **_assembly_**. Kui masinkoodis programmeerimisel toimus kogu programmeerimine kahendkoodis ja selle lugemine ning silumine oli tänu sellele väga keeruline, siis assembler-keeles programmeerimisel on käsud inimesele sobivamal kujul. Kogu programmeerimine on üsna sarnane masinkoodis programmeerimisele, sest käsud on samad, mis masinkoodis (ainult teisel kujul, sõnadena). Assembler-keeles kirjutatud programm näeb välja tavaliselt midagi sarnast:

```asm6502
MOV AL,19
ADD AL,4
OUT 2
```

Antud koodijupp paneb `AL` registrisse väärtuse `19` (tavaliselt on väärtused antud 16nd arvusüsteemi arvudena), liidab `AL` registris olevale väärtusele `4` ning saadab selle seejärel väljundliidesele `2`. Selliselt kirjutatud programm tõlgitakse assembleri masinkoodi ning seejärel on võimalik protsessor seda masinkoodi täitma panna.

Masinkoodi- ja assembler-keeled on madaltaseme programmeerimiskeeled **_low level languages_**.

**Kolmanda põlvkonna** programmeerimiskeelteks nimetatakse juba kõrgtaseme programmeerimiskeeli **_high level languages_**. Sellised programmeerimiskeeled ei ole enam nii väga seotud riistvaraga. See tähendab, et programmeerija ei pea enam teadma väga täpselt riistvara ehitust ja omapära, vaid saab kirjutada programmi riistvarast võrdlemisi sõltumatult ning hiljem tõlgitakse kirjutatud programm mitmesuguste erinevate vahendite abil konkreetsele riistvarale arusaadavale kujule. Kuidas seda täpselt tehakse selgitame hiljem.

Kolmanda põlvkonna keelte hulka kuulub enamik tuntumaid ja kasutatavaid keeli, näiteks:

**_FORTRAN_** / **_The IBM Mathematical FORmula TRANslating System_** – 1950ndatel aastatel loodud arvutuste ja teaduslikeks eesmärkideks loodud programmeerimiskeel

**_COBOL_** / **_COmmon Business Oriented Language_** – 1959. aastal loodud objekt-orienteeritud programmeerimiskeel, peamiselt ärivajadusele suunatud rakenduste kirjutamiseks.

**_BASIC_** / **_Beginner's All-purpose Symbolic Instruction Code_** – 1963. aastal väljatöötatud programmeerimiskeel, mis algselt loodi selleks, et inseneride oleks võimalik teostada arvutitel erinevaid simulatsioone.

**_Pascal_** – 1970ndatel loodud programmeerimiskeel, mis loodi programmeerimise õpetamiseks.

**_C_** – nimi tuleneb sellest, et keel baseerus paljuski B nimelisel programmeerimiskeelel, loodi operatsioonisüsteemide kirjutamiseks (paljud Unixi –laadsed operatsioonisüsteemid on enamikus kirjutatud C keeles), pikka aega üks populaarsemaid programmeerimiskeeli.

**_C++_** - objektorienteeritud C.

**_Java_** – C++ põhjal arendatud programmeerimiskeel

**_Visual Basic_**, **_Delphi_**, **_Python_**, **_C#_** jne on kõik kolmanda põlvkonna programmeerimiskeeled. Paljud kolmanda põlvkonna programmeerimiskeeled on nooremad (uuemad) kui mitmed neljanda ja viienda põlvkonna programmeerimiskeeled.

**Neljanda põlvkonna** programmeerimiskeeled on loodud eesmärgiga lihtsustada nende õppimist ja kasutamist. Neljanda põlvkonna programmeerimiskeeled on tavaliselt mitte-protseduurilised ja ühe rakenduse kesksed. Üheks neljanda põlvkonna programmeerimiskeeleks on näiteks **_SQL_** (Structured Query Language). Seal öeldakse pigem "mida" teha ning vähem, "kuidas" teha.

**Viienda põlvkonna** programmeerimiskeeled on loodud tehisintelligentsete süsteemide loomiseks ja tehisintelligentsusega seotud probleemide lahendamiseks.

#### Programmeerimiskeelte põhitüübid

Erinevalt programmeerimiskeelte põlvkondadest kirjeldavad põhitüübid kuidas on võimalik mingite keelte abil programmeerida. Peamised põhitüübid on: protseduurilised, funktsionaalsed ja objektorienteeritud programmeerimiskeeled.

Protseduurilistes programmeerimiskeeltes kirjeldatakse programmeerimiskeeltes tegevused ja nende täitmise kord ja jagatakse need tegevused gruppidesse (alamprogrammideks). Protseduuridest kujunevad omamoodi koodi struktuurid, mida on võimalik korduvalt kasutada.

Funktsionaalsetes programmeerimiskeeltes kirjeldatakse kogu lahendus funktsioonide abil.

Objektorienteeritud programmeerimiskeeltes teostatakse lahendus klassides `class` kirjeldatud funktsioonide ja andmestruktuuride abil. Igast klassist on võimalik moodustada objekte, millel on mingi hulk omadusi ja/või meetodeid.

Omadused on väärtused, mida objekt suudab hoida ja mis võivad mõjutada objekti käitumist. Näiteks klassi "konsooliaken"; põhjal saab moodustada objekti "konsool1"; mis kasutajale paistab lihtsalt ühe konsooliaknana. Sellel objektil on mitmeid omadusi (nähtav, mittenähtav, laius, kõrgus, teksti värv konsooliaknas, taustavärv jne), neid omadusi muutes muutub konkreetsel juhul objekti välimus.

Sama näite puhul on sellel objektil ka mitmeid meetodeid, nii saab vastava meetodi poole pöördudes kirjutada konsooliaknasse mingi teksti, lugeda muutujasse kasutaja poolt sisestatud teksti jne.

Teiseks näiteks võib tuua tekstimuutuja, luues tekstimuutuja klassi baasil objekti "MingiTekst";, loome ühe tekstimuutuja, mille peamine omadus on hoitav tekstiline väärtus, kuid tegelikult on omadusi sellisel objektil rohkem (näiteks hoitava testilise väärtuse pikkus). Ning samuti on tekstimuutjas ilmselt kirjeldatud mingi hulk meetodeid (muuda hoitav väärtus väiketähtedeks, suurtähtedeks, eemalda teatud sümbolid jne).

Selliselt klasse kirjeldades ning objektidega manipuleerides on võimalik koostada väga keerulisi programme ja täita mitmesuguseid tegevusi.

#### Interpreteeritavad ja kompileeritavad keeled

Enne seda kui arvuti saab kõrgkeeles kirjutatud programmi täita, tuleb see "tõlkida"; talle arusaadavasse keelde e. masinkoodi. Seda tõlkimisprotsessi nimetatakse transleerimiseks ja tõlkeprogrammi translaatoriks. Translaatorid jagunevad kahte klassi: kompilaatorid ja interpretaatorid.

**Kompileerimine** seisneb selles, et masinkoodis programm (nimetatakse kompilaatoriks) teisendab mingis programmeerimiskeeles kirjutatud programmi masinkoodi. Seejärel täidetakse saadud masinkoodis programm. Näidetena kompileeritavatest keeltest võib nimetada C, Fortran, Pascal..

**Interpreteerimine** seisneb selles, et masinkoodis programm (interpretaator) loeb sisemällu programmifaili ja asub seda rida-realt täitma. Näitena võib tuua vana BASIC-keele.

Programmi interpreteerimine on ca 10-200 korda aeglasem, kui kompileeritud koodi täitmine. Vastukaaluks on interpreteeritava programmi silumine (vigade eemaldamine programmist) reeglina lihtsam kui transleeritava programmi korral. Sobivates oludes ning abivahendite olemasolul võivad aga need vahed ka märgatavalt väiksemad olla. Heaks näiteks on Java oma vahetasemele kompileeritud ja optimeeritud koodiga, mida siis käivitamise ajal Just-In-Time kompilaator veel omakorda konkreetse riistvaraga kohandab.

Põhimõtteliselt saab igas keeles kirjutatud programme nii interpreteeritult täita kui kompileerida.

### B.3.3.2 Funktsioonide ja protseduuride kasutus. Väärtuse ja viite kaudu parameetrite edastamine.

::: oppekava

Kirjeldada protseduuride ja funktsioonide kasutamist ja tuua välja vahe väljakutsel väärtuse (call by value) ja nime (viite) järgi (call by reference).

:::

#### Protseduurid ja funktsioonid

Programmi struktuuri lihtsustamiseks on otstarbekas jagada suurem programmeerimisülesanne väiksemateks alamülesanneteks. Alamülesannete lahendamine jäetakse väiksemate terviklike alammoodulite – **protseduuride** ja **funktsioonide** ülesandeks. Selline lähenemisviis lihtsustab programmi silumist ja haldamist. Alammoodulite korduvkasutuse võimaluse tõttu vähendab selline meetod ka programmeerimistööd.

Protseduurid ja funktsioonid erinevad nende kasutusviisi poolest. Funktsiooni kasutatakse funktsiooniviite abil, protseduuri aga protseduurilause abil. Erinevalt protseduurist tagastab funktsioon alati väärtuse – mille võib küll mõnel puhul kasutanata jätta. Näiteks kui veakoodi ei kontrollita.

#### Parameetrite edastamine

Seos alammoodulite ja neid väljakutsuva mooduli vahel organiseeritakse mooduli parameetrite abil. Parameetrite edastamisviisi poolest jagatakse nad kahte gruppi:

- **aadresskutse**, **_call by reference_** puhul saab kutsutav moodul muuta kutsuva mooduli salvestatud parameetrite väärtusi. Tehniliselt on selline kutse realiseeritud nii, et kutsuv moodul annab kutsutavale moodulile talle üleantavate parameetrite aadressid.

- **väärtuskutse** e kutse väärtusega, **_call by value_** - kutsuv moodul annab kutsutavale moodulile talle üleantavate parameetrite tegelikud väärtused (nende koopiad). Väärtuskutses ei saa kutsutav moodul muuta kutsuva mooduli salvestatud või tema jaoks salvestatud parameetrite väärtusi.

Aadresskutse eeliseks on, et ka mahukate andmete puhul ei tule kopeerimisest tingitud lisakulu. Väärtuskutse puhul pole jälle karta, et keegi alamprogrammis etteantud muutujate sisu soovimatult muudaks.

Näide­:

Kui meil on defineeritud kahe parameetriga protseduur `myproc` ja ühe parameetriga funktsioon `myfunc`, siis on võimalik neid käivitada nii:

```java
myproc (a, b);
d = myfunc( e / f );
```

Esimeses neist lausetest täidetakse protseduur `myproc`, teises aga arvutatakse funktsiooni `myfunc` väärtus ja salvestatakse see muutujasse d.

Protseduure ja funktsioone nimetatakse sageli ka alamprogrammideks **_routine_**. Programmi, millest pöördutakse alamprogrammide poole, mis aga ise alamprogramm ei ole, nimetatakse põhiprogrammiks **_main program_** või siis väljakutsuvaks alamprogrammiks (sest mõnes keeles nt Java ongi kõik koodilõigud alamprogrammid).

**Lisalugemist:** http://enos.itcollege.ee/~jpoial/java/i200loeng2.html

#### Programmeerimiskeele süntaks

Ülesanne on enamasti lahenduv nii protseduurilise, funktsionaalse kui objektorienteeritud lähenemise kaudu. Lihtsalt tuleb vaadata, mis parasjagu sobiv tundub. Protseduurilisel juhul on võimalik ja tavapärane kõik tegevused etappidena ära kirjeldada ning neid pärast soovitud järjekorras kasutada. Funktsionaalsel juhul saab mõnedki kohad lühematena kirja panna. Samuti on võimalik otsustada, et samanimelise funktsiooni all käitutakse kord üht- kord teistmoodi.

Objektorienteeritud lähenemine annab põhjalikumad võimalused, samas pole selle abil enamasti võimalik päris lühikest lahendust teha. Juhul, kui on tegemist paljude väikeste abikäskudega, siis võib mõnikord olla objektorienteerituse suhtes ettevaatlik. Samas pakub ta paindliku samatüübilise võimaluse kasvavate lahenduste jaoks, kus võimalik rakendust suures ulatuses täiendada ilma, et peaks selle struktuuri muutma hakkama.

**Lisalugemist:** [http://metshein.com/content/view/587/32/](http://metshein.com/content/view/587/32/)

### B.3.3 Kordamisküsimused

::: kordamiskusimused

1. Masinkood on:
   – esimese põlvkonna programmeerimiskeel X
   – teise põlvkonna programmeerimiskeel
   – kolmanda põlvkonna programmeerimiskeel
   – neljanda põlvkonna programmeerimiskeel

2. Viite kaudu alamprogrammile andmete edastamisel:
   – tohib edasi anda ainult täisarve
   – alamprogrammis tehtud muutus kajastub ka peaprogrammist parameetrina kaasa antud muutujas X
   – ei tohi ühele alamprogrammile kaasa anda rohkem kui ühte parameetrit
   – kulub andmete kopeerimisele palju aega

:::

## B.3.4 Objektorienteeritud programmeerimine

Selle alateema materjale läbi töötades õpid tundma objektorienteeritud disaini ja programmeerimise aluseid, mõisteid ning kasutatavaid tehnikaid.

### B.3.4.1 Objektorienteeritud disaini põhimõtted

::: oppekava

Kirjeldada objektorienteeritud projekteerimise põhimõtteid.

:::

Objektorienteeritud disaini puhul jagatakse süsteem arusaadavateks ja hallatavateks osadeks. Need on suhteliselt iseseisvad ning osade loomisel arvestatakse, et neid peaks saama mitmes olukorras kasutada. Keerukamatel juhtudel tuleb enne kogu loodavat süsteemi senikaua kihtideks või osadeks jagada, kuni osade realiseerimist on võimalik ja mõistlik detailsemalt objektide ja nende omaduste ja toimingute abil kirja panna. Kui püüda protseduurilist ning objektorienteeritud programmeerimist võrrelda, siis esimesel juhul oleks tegemist keskse juhtimisega, kus ";mõisavalitsejal"; on enamjaolt kõik teada, kes mida millal teeb ning saab igal ajal määrata, mida kunas ja kus tehakse. Objektorienteeritud lähenemine sarnaneb pigem suhteliselt iseseisvate üksuste väljaõpetamisele. Neile saab hiljem anda korraldusi, et mida vaja teha. Kuidas teha, see on juba üksuse ehk objekti siseasi. Ning seda saab ka hiljem muuta/täiendada. Selliselt süsteemi üles ehitades on kergem hoolitseda, et keskusesse liialt palju keerukust ei koonduks.

**Lisalugemist:**

[http://www.tud.ttu.ee/../Mikli_AB_konspekt/OODisain.pdf](http://www.tud.ttu.ee/material/vladimir/PROGRAMMEERIMINE/Program_II_11/lisamat/Mikli_AB_konspekt/OODisain.pdf)

### B.3.4.2 Objektorienteeritud programmeermise põhimõtted

::: oppekava

Kirjeldada objektorienteeritud programmeerimise kontseptsiooni.

:::

Objektorienteeritud programmeerimise juures luuakse tarkvara iseseisvate suhteliselt sõltumatult kasutatavate ja testitavate klassidena, mille põhjalt siis omakorda töö käigus objekte tekitatakse. Objektid jäljendavad pärismaailma üksusi, on nende arvutipoolseks mudeliks. Nagu mudelite puhul ikka, tuleb teha nende piiritlemiseks lihtsustusi ning pärast arvestada, kuidas lihtsustuste kaudu leitud tulemused tegelikule keskkonnale ülekantavad on. Objektid luuakse konstruktori abil ning hiljem saavad nad omavahel suhelda meetodite kaudu. Tehniliselt on tegemist alamprogrammidega, mille ülesandeks on muu hulgas hoolitseda, et objekt pärast meetodi käivitamist ka ise ";ellu jääks"; ning ebasobivate andmete tõttu kahjustada ei saaks.

**Lisalugemist:** Jaanus Pöidla konspekt [http://enos.itcollege.ee/~jpoial/java/i200loeng3.html](http://enos.itcollege.ee/~jpoial/java/i200loeng3.html)

### B.3.4.3 Klass, objekt, meetod ning nende omavahelised suhted

::: oppekava

Kirjeldada mõisteid klass, objekt, eksemplar, meetod ja nende seost objektorienteeritud programmeerimisega.

:::

Klassid **_classes_** kirjeldatakse ära loodava üksuse omadused ja oskused. Objektid **_objects_** luuakse klassi kirjelduse põhjal. Üldjuhul on sama klassi eri objektidel (eksemplaridel) samad väljad (tunnused), kuid nende väärtused erinevad. Klassi oskused kirjeldatakse meetodites – ehk üldjuhul alamprogrammides. Eri keeltes sellele põhisuunale ka mõningaid täiendusi. Java ja C# puhul näiteks kirjeldatakse ühiseid oskusi ka liideste (Interface) abil. Javaskriptis luuakse uued samatüübilised objektid prototüüpobjekti põhjal.

### B.3.4.4 Päriluse ülesehitus ning selle tarvilikkus programmeerijale

::: oppekava

Kirjeldada pärimise mõistet ja selle vajalikkust programmeerijale.

:::

Pärilus **_inheritance_** aitab programmeerijal vältida tarbetult korduva koodi kirjutamist. Nagu reaalmaailmas nii ka siin saab ühiste tunnustega seotud koodi ja andmed ühes kohas kogu vastava grupi jaoks kirja panna ning hiljem spetsialiseeritumal tasemel lisada täiendusi ja täpsustusi. Ilma selle võimaluseta oleks suuremate süsteemide kirjapanek palju mahukam ning veaohtlikum. Üksteisest pärinevad üldjuhul klassid ehk objektitüübid.

Päriluse puhul luuakse ülemklassile (baasklass, super class) alanejaks alamklass (subclass). Lihtsamal juhul võib pärilus piirdudagi vaid alamklassi loomisega. Eraldi piirangute puudumisel on loodud klassil kõik samad oskused mis ülemklassilgi.

Samas programmeerijal enesel on teada, mis kontekstis ta kummagi klassi eksemplari kasutab. Näiteks Punkti ja Vektori puhul mõlemal on tarvis meeles pidada kaht koordiaati. Punkti puhul tähendavad need absoluutset asukohta, vektori puhul aga nihet. Vektori puhul on tähtsaks omaduseks tema pikkus, punkti puhul paljalt koordinaatide märkimiseks pole selle valemiga kuigi palju peale hakata – seega saab vektori teha punkti alamklassiks ning ühes pärilusega sinna vastava pikkusfunktsiooni juurde liita.

Pärilusahel võib mõnigikord päris pikaks kasvada – paljude sarnaste klasside puhul viis-kuus taset kus igal pool mõned omadused ja oskused juurde tulevad, see ei ole mingi ime.

### B.3.4.5 Abstrahheerimine ja kapseldamine (teabe peitmine)

::: oppekava

Kirjeldada mõiseid abstraktsioon ja kapseldamine (information hiding).

:::

Abstrahheerimine võimaldab korraga tegelda vaid ülesande kontekstis hädavajaliku teabega jättes kõrvale kõik muu ning samuti seigad, mis tunduvad lahendamise juures vähetähtsatena. Ainult nõnda on lootust keerukamate reaaleluliste süsteemide tarbeks piisavalt arusaadavaid mudeleid luua, millest on võimalik ka lühemal vaatlusel aru saada ning loodud komponenti muude osadega liidestada. Kapseldamise käigus piiritletakse reaalmaailma jäljendav objekt kõigepealt abstrahheerimise abil. Edasi luuakse talle välismaailma ja teiste objektidega suhtlemiseks liidesed, kusjuures kontroll seesoleva teabe üle on vaid objektil enesel. Avalikes liides-alamprogrammides saab koodi abil otsustada, kuidas ja milliseid sisemisi andmeid väljapoole näidatakse/avaldatakse ning samuti mida ja kuivõrd lubatakse väljast käivitatavate alamprogrammide kaudu kapseldunud objekti sees muuta. Selliselt on objektil võimalus ise oma koodi abil hoolitseda, et vaid selleks vajalik osa temast väljapoole paistaks või muudetav oleks.

### B.3.4.6 Polümorfism ja tarkvara efektiivsem loomine

::: oppekava

Kirjeldada, kuidas polümorfism aitab korduvkasutatavate komponentide abil kaasa tõhusamale tarkvara projekteerimisele.

:::

Pärilus võimaldas hoolitseda, et sarnasest puust välja kasvanud klasside puhul pole vaja mitmel pool esinevaid samu oskusi korduvalt välja kirjutada. Näiteks taustavärvi meelde jätmine ja sellega tagapinna katmine on sarnane nii nupu (Button) kui sildi (Label, selgitav tekst) juures – vastav oskus oli lihtsalt kirja pandud graafikakomponentide ühisesse ülemklassi, kust siis mõlemad klassid vastava oskuse päriluse teel kaasa said. Sellised ühised oskused annavad muu hulgas võimaluse ühest klassist pärinenud alamklasside objekte käsitleda sama tüüpi ülemklassi muutuja kaudu. Näiteks kui on tarvis seadeteakna kaudu muuta nupu või sildi taustavärvi, siis piisab seadeteaknale teadmiseks, et talle ette antud objekt on tüübist graafikakomponent või mõni tema alamklass – sellest teadmisest piisab, et kindel olla, et etteantud objektil on taustavärv ning seda on võimalik graafikakomponendi klassis oleva käskluse abil muuta.

Mõnevõrra keerukam on aga olukord omaduste juures mis on objektidel küll sarnase ideena olemas, kuid mille teostus sõltub konkreetse klassi eripärast. Näiteks komponendi suuruse muutmisel peab märkeruudu taha jääv tekst ikka ühte ritta jääma, vastavate parameetritega silt võib aga sobiva kuju ja parameetrite puhul oma peal oleva teksti mitmesse ritta sättida. Sellisel juhul on küll komponentidel olemas käsk suuruse muutmiseks ning sellele järgnevaks paigutuse paika sättimiseks, kuid paika sättimine võib igaühel omamoodi välja näha. Sellist oskust teha sama asja kuid igaüks erinevalt nimetataksegi polümorfismiks. Selline võimalus võib tunduda enesestmõistetavana, kuid selleni jõudmine ning piisavalt väikese ressursikuluga realiseerimine võttis programmeerimiskeelte arengu juures hulk aastaid.

### B.3.4 Kordamisküsimused

::: kordamiskusimused

1. Klass
   – on objektitüüp, kõigil sama klassi eksemplaridel on samad omadused ja oskused X.
   – on eksemplar, kahte samast klassist eksemplari pole võimalik luua.
   – on alamprogramm, väljakutsel täidetav käsujada.
   – on pakett, sarnaste objektitüüpide kogum.

2. Objektorienteeritud programmeerimise juures
   – üks suur keskne peaprogramm kontrollib kõiki toimetusi
   – igast programmiosast on võimalik otse kõigi andmete poole pöörduda
   – rakendus on jagatud suhteliselt iseseisvateks üksusteks, mis omavahel meetodite väljakutsete abil suhtlevadX
   – paljude samatüübiliste järjestatud andmete puhul on tagumiste poole võimalik pöörduda ainult nõnda, et tuleb kõikide esimeste aadressid läbida.

Õiged vastused: 1-a, 2-c

:::

## B.3.5 Programmikomponendid (põhikonstruktsioonid)

Selle alateema materjale läbi töötades tutvud programmikomponentidega.

### B.3.5.1 Programmi osad ja sisend-väljund

::: oppekava

Selgitada ja hinnata sisend-väljundkäske.

:::

Iga programm koosneb tavaliselt järgmisest osadest:

- Deklaratsioonid
- Aritmeetika- ja loogikatehted
- Juhtkäsud
- Sisend-väljund (I/O) käsud

Deklaratsioonidega seotakse mingi sümbolitest koosnev nimi mõne andmeobjekti või programmi osaga. Aritmeetika ja loogikatehete abil muudetakse programmi käiku ja andmeobjektide väärtusi. Juhtkäsud määravad programmi täitmise korra (erinevate programmiosade täitmise, vahelejätmise, korduvtäitmise jne).

Sisend-väljund käsud lubavad programmil suhelda sisend-väljund seadmete või teiste programmidega.

#### Deklaratsioonid

Deklaratsioonidega seotakse mingi sümbolitest koosnev nimi mõne andmeobjekti või programmi osaga.

Deklareerimise käigus seotakse tihti andmeobjektiga mingi koht mälus, kus siis seda konkreetset andmeobjekti iseloomustavaid väärtuseid hoitakse.

::: vananenud

Kõige levinumad deklaratsioonid on muutujate deklaratsioonid, näiteks kasutades EPL (EUCIP Programming Language, baseerub C-keelel) pseudokeelt võime deklareerida muutujaid järgmiselt:

:::

```c
char alfa;
int beeta;
float gamma;
```

Nii oleme me deklareerinud kolm muutujat tähemärgi tüüpi muutuja alfa, täisarv tüüpi muutuja beeta ja reaalarv tüüpi muutuja gamma.

Sisend-väljund käsud on mõeldud suhtlemaks välismaailmaga läbi sisend-väljund seadmete. Sisend-väljund käsud võivad erinevates keeltes suurtesti varieeruda: mitmetes keeltes ei ole eraldi sisend-väljund käske (näiteks Motorola 88k assembler suhtleb sisend-väljund seadmetega nagu mäluga), C&#39;l baseeruvatel keeltel on reeglina eraldi välised funktsioonid, mida sisendi ja väljundiga suhtlemiseks kasutatakse (tihti kasutatakse selleks operatsioonisüsteemi teenuseid ja vahendeid).

::: vananenud

EPL keeles on sisend-väljund käskudeks ainult kaks funktsiooni: `printf()` ja `readf_()`.

:::

Funktsioon `printf()` on kasutatav järgmiselt:

```c
printf("Mingi tekst", muutuja1[,muutuja2...])
```

Antud näites on tekstilõik "Mingi tekst"; väljundisse kirjutatav tekst ja muutuja1 ning muutuja2 väljundisse kirjutatavad muutujate väärtused. Väljundit nimetatakse siinkohal standardseks väljundiks (stdout – standart output) ja tavaliselt suunatakse enamikus programmeerimiskeeltes see infovoog ekraanile, kuid samas on enamikus programmeerimiskeeltes ka võimalus selle voo ümbersuunamiseks faili, printerisse, teise programmi jne.

Funktsioon _readf_() on kasutatav järgmiselt:

```c
readf(muutuja1[,muutuja2...])  
```

Antud näites loetakse sisendvoost väärtused muutujatesse muutuja1, muutuja2 jne. Sisendit nimetatakse siinkohal standardseks siseniks (stdin – standart input) ja tavaliselt moodustub see infovoog klaviatuurilt sisestatud väärtustest, kuid samas on see on võimalik tihti see voog ühendada mõne failiga, teise programmi väljundiga jne.

### B.3.5.2 Juhtkäsud

::: oppekava

Selgitada ja hinnata sisend-väljundkäske.

:::

Juhtkäsud määravad programmi täitmise korra (erinevate programmiosade täitmise, vahelejätmise, korduvtäitmise jne).

Üldiselt on kolme liiki juhtlaused:

- Tingimusteta hüpped
- Tingimuslaused
- Kordused

Tingimusteta hüpete abil on võimalik "hüpata" koodis ringi ja muuta nii kirjutatud koodi täitmise järjekorda. Selliste juhtkäskude kasutamine raskendab oluliselt koodist arusaamist ja seetõttu soovitatakse sellisest konstruktsioonist hoiduda. Mitmed tänapäevased keeled ei luba tingimusteta hüpete kasutamist.

Tingimustega juhtlausete korral kasutatakse tingimuse realiseerimiseks kasutatakse võrdlusoperaatoreid:

`==` võrdus, tulemus on tõene, kui võrreldavad väärtused on võrdsed

`!=` mittevõrdsus, tulemus on tõene, kui võrreldavad väärtused ei ole võrdsed

`>` suurem kui, tulemus on tõene kui operaatorist vasakul olev väärtus on suurem kui paremal olev väärtus

`<` väiksem kui, tulemus on tõene kui operaatorist vasakul olev väärtus on väiksem kui paremal olev väärtus

`>=` suurem või võrdne, tulemus on tõene kui operaatorist vasakul olev väärtus on suurem kui paremal olev väärtus ning ka siis, kui vastavad väärused on võrdsed

`<=` väiksem või võrdne, tulemus on tõene kui operaatorist vasakul olev väärtus on väiksem kui paremal olev väärtus ning ka siis, kui vastavad väärused on võrdsed

Tingimusi on võimalik omavahel kombineerida kasutades järgmisi loogikatehteid

`&&` tingimus on tõene kui mõlemad tingimused on tõesed

`||` või, tingimus on tõene, kui üks tingimustest on tõene

Nii võiks näiteks tingimuse

```
a >= b 
```

kirja panna ka kui

```
(a>b) || (a=b)
```

#### If

Tuntum juhtkäsk on kindlasti `if`: if lause võimaldab täita erinevat koodi sõltuvalt tingimuse tulemusest:

```
if(tingimus)

// kood mis täidetakse, kui tingimuse tulemus on tõene

else

/// kood mis täidetakse, kui tingimus ei ole tõene
```

_else_-osa võib ka puududa.

if-käsu näide:

```
if(a>3)

   b=5;   
```

Kui a on suurem kolmest, siis b võrdustakse viiega.

_if_-käsu näide:

```
if(a>3)

   b=5;

else

  c=6;
```

Kui a on suurem kolmest, siis b võrdustakse viiega ja kui a ei ole suurem kolmest, siis c omistatakse väärtus kuus.

:::

`if`-käsu keerulisemad versioonid on `case` ja `switch`, need juhtkäsud võimaldavad rohkemaid jagunemisi vastavalt tingimustele, kui kuna EPL keel neid ei sisalda, siis siinkohal me neid ei käsitle.

:::

Kordused võimaldavad mingisugust koodi osa vastavalt etteantud tingimusele korduvalt täita. Kordused jagunevad: eelkontrolliga ja järelkontrolliga ning määratud pikkusega ja määramata pikkusega kordusteks.

#### While

_while_-kordus on eelkontrolliga kordus, see tähendab, et korduse jätkamiseks vajalikku tingimust kontrollitakse enne korduse täitmist.

```c
while(tingimus) {

  // kood, mida täidetakse kuni tingimus on tõene

}
```

Näiteks:

```c
int a = 0;
int b = 0;

while(a < 10) {
  a++;
  b+=a;
}
```

Kordust täidetakse kuni a on väiksem kümnest, kusjuures iga korduse täitmise jooksul liidetakse muutuja a väärtus muutuja b väärtusele juurde, järelikult `b=1+2+3+4+5+6+7+8+9+10=55`.

#### Do while

`do while` kordus on järelkontrolliga kordus, kordus, see tähendab, et korduse jätkamiseks vajalikku tingimust kontrollitakse pärast korduse täitmist.

```c
do

  // kood, mida täidetakse kuni tingimus on tõene

while(tingimus)
```

Näiteks:

```c
int a=0;
int b=0;

do {
  a++;
  b+=a;
}

while(a<10)
```

Kordust täidetakse kuni a on väiksem kümnest, kusjuures iga korduse täitmise jooksul liidetakse muutuja a väärtus muutuja b väärtusele juurde, järelikult `b=1+2+3+4+5+6+7+8+9+10=55`.

Nüüd võis jääda mulje, et ei ole vahet, kas kasutada eel- või järelkontrolliga kordust, tegelikult on aga nende vahe selles, et järelkontrolliga korduse sees olevat koodi täidetakse, vähemalt ühe korra, kuid võib juhtuda, et eelkontrolliga kordust ei täideta ühtegi korda.

Näiteks:

```c
int a=10;
int b=0;

while(a<10) {
  a++;
  b+=a;
}
```

Tulemuseks on, et a=10 ja b=0, sest korduse sees olevat tegevust ei täidetud ühtegi korda, tingimus oli kohe alguses väär ja tingimust kontrolliti enne korduse sees oleva tegevuse tegemist.

```c
int a=10;
int b=0;

do  {
  a++;
  b+=a;
}

while(a<10)
```

Tulemuseks on, et `a=11` ja `b=11`, sest korduse sees olevat tegevust tehti üks kord, tingimust kontrolliti alles pärast seda.

#### For

`for`-kordus on aga eelkontrolliga ning määratud pikkusega kordus.

```c
for(muutuja, tingimus, muutuja muutmise kord) {
  // kood, mida täidetakse, kuni tingimus on tõene
}
```

`for`-kordus erineb eelpool käsitletud kordustest eelkõige selle poolest, et korduse jätkamise tingimusega seotud muutuja väärtuse muutmine kirjeldatakse korduse sees.

Näiteks:

```c
int b;

for(int a=0; i<10; i++) {

  b+=a;

}
```

Tulemus on sarnane do kordusele, muutuja a väärtus pannakse alguses võrduma nulliga, seejärel kontrollitakse korduse täitmise tingimust ja kui see on tõene, siis liidetakse muutujale b muutuja a väärtus, seejärel muudetakse muutuja a väärtust vastavalt etteantud reeglile (antud juhul a++, ehk suurendatakse a väärtust ühe võrra), kontrollitakse jätkamise tingimust, ning kui see on tõene, siis tehakse uuesti korduse sees olev tegevus jne. Tulemuseks on, et `a=10` ja `b=0+1+2+3+4+5+6+7+8+9=45`.

### B.3.5.3 Aritmeetika- ja loogikatehted

::: oppekava

Selgitada ja hinnata aritmeetilisi ja loogilisi tehteid.

:::

Peamiselt läheb meil vaja viit aritmeetikatehet:

#### Liitmine

kasutatakse märki `+`; ja liidab kokku kaks väärtust, näiteks `c = a+ b liidab muutujate a ja b väärtused ja paneb muutuja c väärtuse võrduma tehte tulemusega

```c
c = 3 + 2 // järelikult c = 5
```

#### Lahutamine

kasutatakse märki "-"; ja lahutab esimesest väärtusest teise , näiteks c=a-b lahutab muutuja a väärtusest muutuja b väärtuse ja paneb muutuja c väärtuse võrduma tehte tulemusega

```c
c = 3 - 2 // järelikult c = 1
```

#### Korrutamine

kasutatakse märki `*`; ja korrutab kaks väärtust, näiteks `c = a * b` korrutab muutujate a ja b väärtused ja paneb muutuja c väärtuse võrduma tehte tulemusega

```c
c = 3 * 2 // järelikult c = 6
```

#### Jagamine

kasutatakse märki `/`; ja jagab ühe väärtuse teisega, näiteks `c = a / b` jagab muutuja a väärtuse muutuja b väärtusega ja paneb muutuja c väärtuse võrduma tehte tulemusega

```c
c = 3 / 2 // järelikult c=1,5 või c=1, oleneb keelest ja andmetüüpidest).
```

#### Jagamise jääk

kasutatakse märki "%"; ja jagab ühe väärtuse teisega, näiteks c=a%b jagab muutuja a väärtuse muutuja b väärtusega ja paneb muutuja c väärtuse võrduma jagamise jäägiga.

```c
c = 5 % 3 // järelikult c = 2
```

::: vananenud

EPL keeles ei ole tõeväärtus tüüpi muutujat, seetõttu on loogikatehteid ainult juhtlausetes.

:::

Keeltes, kus on tõeväärus tüüpi muutujad on võimalik kasutada ja loogikatehteid, näiteks `c = a & b`, `c = true` kui a ja b on võrdsed ja `c = false` kui a ja b ei ole võrdsed. Loogikatehetest tuleb pikemalt juttu juhtlausete käsitlemisel.

Tehete järjekord on osades programmeerimiskeeltes erinev ja osades samataoline: osad keeled teevad kõigepealt korrutamis- ja jagamistehted ning seejärel liitmis- ja lahutamistehted. Tehteid täidetakse vasakult paremale. Tehete järjekorda on võimalik määrata sulgudega (sulgude sees olevad tehted tehakse kõigepealt). Näiteks `c= a + a * b` on erinev tehtest `c = (a + a) * b`.

Erinevad programmeerimiskeeled lubavad erinevate aritmeetikaoperaatorite kasutamist:

Näiteks `c += a` liidab muutuja c väätusele juurde muutuja a väärtuse (ehk `c = a + c`), a++ on muutuja iteratsioon ehk väärtuse suurendamine ühe võrra (ehk `a = a + 1` jne.

### B.3.5 Kordamisküsimused

::: kordamiskusimused

1. Valik ja kordus
   – valiku puhul peab tingimuses olema &amp;- märk
   – korduse puhul peab tingimuses olema &amp;-märk
   – tingimuslauset läbitakse üks kord või üldse mitte, korduslauset null või rohkem korda X
   – iga korduslauset peab läbima vähemalt ühe korra

2. Jäägiarvutus `5 % 4=`
   – 1 X
   – 2
   – 3
   – 4

Õiged vastused: 1 – c, 2 - a

:::

## B.3.6 Testimine

Selle alateema materjale läbi töötades õpid tundma testimise mõisteid, meetodeid ja vahendeid.

### B.3.6.1 Testimise tasemed, põhimõisted

::: oppekava

Kirjeldada testimise põhimõisteid: veavõimalus (fault), viga (error), tõrge (failure). Tuua välja kontrollimise, testimise ja silumise erinevad tasemed.

:::

Testimiseks saab nimetada ka lihtsat kompileeri / käivita / paranda tsüklit, kuid testimine on tarkvara valmimise juures nõnda tähtis osa, et selle tarbeks on hulgaliselt erinevaid vahendeid ja võimalusi loodud.

Arenduskeskkondade juurde kuuluvad silurid **_debugger_**, mille abil on võimalik programmi sammu kaupa käivitada ning iga sammu järel kontrollida süsteemi seisu – muutujate väärtusi, väljundit failidesse ja ekraanile. Samuti võimaldavad silurid käivitada programmi kuni määratud koodireani ning valida, kas sammu kaupa astudes sisenetakse ka väljakutsutavatesse alamprogrammidesse või mitte – nõnda on ka suurema rakenduse puhul võimalik jõuda sobilikku kohta ning siis lähemalt uurida, kuidas parasjagu aktiivse koodi juures süsteem töötab.

Logimiste tarbeks on loodud eraldi abivahendeid. Lihtsaim ja vanadest aegadest levinuim on töö vahetulemuste trükkimine väljundaknasse. Suuremate rakenduste puhul aga võib neid teateid olla raske jälgida. Samuti peab ettevaatlik olema, et sellised programmeerijale mõeldud vaheteated lõppkasutajat häirima ei jääks. Selle tarbeks on mõeldud ka mitmeid abivahendeid nagu näiteks konstantide defineerimine C-keeles, kuid sellegipoolest kipuvad vaheväljatrükid mõnigikord segadust tekitama. Eri keskkondades on loodud logimiste tarbeks mitmesugused abivahendid – eri raskusastmega teadete saatmiseks logifailidesse või näiteks nende kättesaamiseks erilise aadressigaveebilehelt. Vigade raskusastmed arvutuslikest ebakõladest süsteemi tööd halvavate vigadeni.

### B.3.6.2 Mitmesuguste testide eesmärgid ja teostus

::: oppekava

Kirjeldada erinevate testimiste eesmärke ja ulatust: komponendi testimine, süsteemi testimine,vastuvõtueelne testimine.

:::

**Vastuvõtutestid** **_acceptance testing_** lepitakse tellija ja tegija vahel enne toote loomist kokku – siis on võimalik selle järgi otsustada, kas tehtu on nõuetele vastav.

**Funktsionaalsustestide** ehk süsteemitestide puhul **_functional tests_** vaadeldakse üksipulgi kasutajalugudes kirjas olevaid nõudeid.

"Musta kasti" testide puhul piirdutakse juhuslike ja käepäraste andmetega mis võimaluse korral valitakse võimalike andmete koguskaalast, et saada tulemustest ülevaatlikumat pilti.

"Valge kasti" testimise puhul analüüsitakse eelnevalt läbi süsteemi sisemine töö enamasti programmikoodi tasemel ning püütakse ka sealtkaudu kahtlasemad kohad üles leida.

Üldiselt soovitatakse järgmist:

- Iga koodilõik läbitakse testimise käigus, soovitavalt vähemasti kahel korral erisuguste andmetega
- Proovitakse läbi kordused ka nulli läbimiskorra juures
- Arvutuste juures pööratakse tähelepanu ka olukordadele, kus ei saagi sobivat vastust tulla. Hoolikalt katsetatakse läbi piirjuhud mõlemalt poolt andmetega.

Üksusetestid **_unit tests_** kontrollivad enamasti ühe klassi töö korrektsust. Mõne metoodika järgi soovitatakse testid kirjutada enne tegeliku koodi valmimist ning iga testi loomise järel kirjutada koodi juurde nõnda vähe kui võimalik, et see soovitud testi ära kataks. Sellisel juhul võib suhteliselt kindel olla, et tarkvaraüksuse enamik omadusi on testidega kaetud. Testidega kaetuse hea külg on, et siis võib suhteliselt kindel olla, et tarkvara muutmise korral jäävad vanad funktsionaalsused samamoodi toimima ning ei avaldu üllatuslikke anomaaliaid ootamatutes kohtades (mis muul juhul tarkvara muutmise korral suhteliselt kergesti juhtuma kipuvad).

### B.3.6.3 Testimise metodoloogiad. Automaatsed testimisvahendid

::: oppekava

Tuua välja vahe staatilise ja dünaamilise testimismetodoloogia vahel ja loetleda automatiseeritud testimisvahendite näiteid

:::

Süsteemi kasvades tekib testitavaid kohti nõnda hulgem, et nende pidev käsitsi üle käimine kipub kergesti kurnavaks osutuma. Samas on loodud ning viimastel aastatel tuntuks saanud hulk automaatse testimise vahendeid. Automaatsed testid võimaldavad programmeerija aega nõudmata läbi käia mõne minutiga tuhandeid kontrolle kindlaks tegemaks, et lisatud täiendus pole midagi lahenduse varasema toimimise juures ära rikkunud.

Varakult levis klasside automaatse testimise perekond alates JUnitist Java klasside jaoks, kuid populaarsuse tõttu võib selliseid testimisvahendeid leida enamikes programmeerimiskeeles kirjutatud klasside tarbeks. Selle testimisrakenduse saab eraldi installida ja käivitada, samas on automaattestimise võimalused sisse ehitatud ka suurematesse arenduskeskkondadesse. Klasside koodi toimimise testid kirjutatakse võimalusel küllalt lühikesed ja spetsiifilised, et kui on juba teada milline test läbi ei läinud, siis suure tõenäosusega on juba testi nime järgi võimalik kindlaks teha mis laadi veaga on tegemist ning pole põhjust testi enese koodi põhjalikumalt süveneda.

Mõnegi olukorra tekitamiseks on teinekord vaja päris palju ettevalmistusi, selle tarbeks on testide juures eraldi alamprogrammid, mis uuritava süsteemi soovitud olekusse viivad, et sellega oleks võimalik katseid läbi viia. Testimine võib nõuda suhtlust väliste süsteemidega. Samas on hea, kui testimise käigus ei koormata liialt välissuhtluskanaleid, sest automaatteste käivitatakse sageli. Näiteks kui on vaja kontrollida, kas süsteemi saadetud kirjale tuli rakenduse poolt adekvaatne vastus, siis ei pea mitte vaene klient igal testimiskorral uut tellimuskirja saatma ja tulemust üle vaatama, vaid testi juurde luuakse liba-lisamoodul selliste kirjade saatmiseks ning tulemuse kinni püüdmiseks ja kontrolliks. Viimast juba võib ilma kedagi tülitamata palju kordi ja sageli käivitada. Nõudlikuma rakenduse puhul võib testide loomisele kulutatav ressurss ületada märgatavalt rakenduse enese koostamisele kuluva – samas aga see on üks üsna hea moodus tagada rakenduse töö korrektsust. Arukate testide loomine võib mõnelgi juhul üles kaaluda võimaliku tekkiva kahju – piisab vaid näiteks ette kujutada segadust, mis juhtuks, kui kontonumbrid mõnes pangarakenduses vahetusse lähevad.

Automaatselt on võimalik testida ka kujunduse ning veebiühendusega seotud rakenduse osi. Programmikoodi ja seadistuste abil õpetatavad robotid suudavad täita ekraanivälju, saata andmeid ning kontrollida tulemusi. Nii on võimalik näiteks süsteemi platvormi vahetamisel rakenduse töövõime säilimiseks koostada testid olemasoleva rakenduse töö kohta. Pärast platvormivahetust tööle pandud uues süsteemis saab nende testide järgi kontrollida, kas see vastab samadele nõuetele kui vana – vähemalt loodud testide ulatuses. Samuti saab selliseid automaatteste pidada formaliseeritud dokumentatsiooniks mille kaudu tellija ja teostaja tehtavas kokku lepivad. Teostaja võib siis arvestada, et kui rakendus läbib kokkulepitud testid ning käitub ka muus osas vastavalt juhistele, siis saab ta oma töö valmiks lugeda.

### B.3.6 Kordamisküsimused

::: kordamiskusimused

1. Integratsioonitestimise puhul
   – kontrollitakse keelefailide korrektsust
   – kontrollitakse moodulite omavahelist koostalitlusvõimet
   – kontrollitakse arvutuste korrektsust algoritmides
   – kontrollitakse tingimuslausete omavahelist paiknemist

2. Silurid (debugger) võimaldavad
   – käivitada programmi tööd sammude kaupa
   – dekompileerida masinkoodi
   – muuta muutujate andmetüüpe
   – koondada programmifailid projektidesse

Õiged vastused: 1-b, 2-a

:::

## B.3.7 Dokumentatsioon ja haldus

Selle alateema materjale läbi töötades õpid tundma dokumentatsiooni tähtsust tüüpe, koostamist ning selle muutuste haldust.

### B.3.7.1 Dokumentatsiooni tüübid

::: oppekava

Kirjeldada tarkvaraarendusel ja üleandmisel üldiselt levinud dokumentatsiooni, nt struktureeritud kirjeldus loomulikus keeles (structural English), otsustuspuud, UML kood, programmi kommentaarid, vooskeemid.

:::

Pea iga rakenduse juures on vaja mingil kujul dokumenteerida või mugavalt kättesaadavaks muuta süsteemi nõuded, ülesehitus ning selgitused kasutajale. Kui põhjalik osa kirjutatakse eraldi dokumendina ning kui palju on leitav koodi ja kasutajaliidese kaudu – see sõltub juba märgatavalt kasutatavast arendusmeetodist. Eraldi kirjutisena olevat dokumentatsiooni aitavad märkimisväärses osas asendada näitlikud prototüübid, sobivalt kommenteeritud kood ning kokkulepitud testid. Samas – mõnel puhul on selgitamiseks mugavam lugeda eraldi süstemaatiliselt kirja pandud dokumenti.

### B.3.7.2 Hästi struktueeritud ja dokumenteeritud koodi väärtus

::: oppekava

Kirjeldada hästi dokumenteeritud ja –struktureeritud dokumentatsiooni väärtuslikkust.

:::

Väiksema tarkvara esmase loomise ajal on enamik teabest mugavalt kättesaadav tegijate peades ning selge sihtmärgi puhul edeneb töö ka ilma eraldi nõudeid, struktuuri ja kasutajajuhendit kirja panemata. Ka väiksema rakenduse puhul kipub loomise käigus unustamisi ette tulema, kuid nendest saab enamasti üle ka esmaste katsetuste või kaaslasepoolse meeldetuletuse abil. Kui aga tegijaid on rohkem, nad ei suhtle pidevalt vahetult või rakenduse loomine/muutmine jääb pikema ajavahemiku sisse, siis mälu põhjal töötav arendus enam ei toimi. Uuesti rakenduse juurde pöördudes kulub märkimisväärne osa ajast olemasoleva meelde tuletamise peale ning mõnedki algselt kokku lepitud põhimõtted ja piirangud võivad kergesti tähelepanuta jääda kui neid eraldi kirja pandud ei ole. Koodi sobiva struktuuri ja lühikeste asjalike kommentaaride abiga võib rakenduse ülesehituse meelde tuletamine (vahel isegi kümnetes) kordades lihtsustuda.

Võrdluseks – Java või .NETi standardteekides olevate tuhandete klasside ja kümnete tuhandete käskude seas on pärast mõningast tutvumist võimalik paketipuud kaudu sobiva kohani jõuda üldjuhul maksimaalselt paari minutiga, enamasti sekunditega. Või siis sama teed kaudu veenduda sobiva käsu puudumises. Kui aga on tegemist mitmetest osadest suhteliselt suvaliselt ühendatud sobivalt dokumenteerimata veebisüsteemiga, siis võib üksiku pealtnäha lihtsa vea leidmiseks ja kõrvaldamiseks kuluda päevi. Ehkki klasse on vaid paarkümmend ning kasutatavaid käsklusi kokku mitte üle paarisaja (teksti autori isiklik kogemus). Veel hullem, kui kood pole üldse mõistlikul kujul klassideks ega meetoditeks jaotatud. Sel juhul võib juba paari tuhande realine rakendus tunduda selline müsteerium, et lihtsam on sama tulemuse saavutamiseks rakendus uuesti kirjutada kui olemasolevat parandama hakata.

Uuesti kirjutamine ei pruugi sugugi alati paha mõte olla ning seda ei tasu ka liialt karta. Peab ainult tundma ja kindel olema, et uuel kujul rakendus märgatavalt paremini hallatav ja edasi arendatav on. Küllalt sageli võib selline ümber tegemine otstarbekaks osutuda juhul, kui rakendus eelmise versiooniga võrreldes on kolm või rohkem korda suuremaks paisunud. Mõned arendajad püüavad sellist ümbertegemisvajadust vältida ning kohe algul luua põhjaliku struktuuriga arendusprojekti, kus igal osal ja koodilõigul on kindel koht. Sellisel juhul aga kipub tulemuseks olema ka näiteks lihtsa kalkulaatori puhul mitmeteistkümne kataloogi ning mitmekümne failiga projektipuu, kus rakendusespetsiifilist sisu on siiski vaid paari faili seest. Selline lähenemine võib mugav olla tarkvarafirmade puhul, kus suurte rakenduste struktuur on selgelt välja kujunenud ning meeskond oskab sobilikke lõike kergesti leida. Kui aga tegemist rakendusega, mille tegevusloogika saab kirjeldada paari ekraanitäie programmikoodiga, siis on lühikesel lahendusel oma võlu – eriti, kui selle koodiga peavad hiljem tegelema mitmesuguse taustaga programmeerijad eri arendusvahendite abil. Isegi siis on kompaktne kood vahel mugav, kui on teada, et paari aasta pärast tuleb see süsteemi kasvamise ning nõuete muutumise tõttu märgatavalt ümber teha.

### B.3.7.3 Dokumentatsiooni muutused

::: oppekava

Selgitada kuidas fikseerida parandusi programmides ja programmi dokumentatsioonis.

:::

Nõuded muutuvad, süsteemid muutuvad, koos nendega peab muutuma ka dokumentatsioon. Sest dokumentatsiooni puudumisest hullem on vigane dokumentatsioon. Samas kiirete muutuste ajal on eraldiseisva põhjaliku dokumentatsiooni värskena hoidmine mahukas ja keeruline ülesanne. Kergesti kipuvad tekkima kohad, kus eelnevalt paigas olnud seosed muutmise käigus kaduma lähevad. Kui tahta süsteemi ja dokumentatsiooni kooskõla säilitada, siis üheks mooduseks alustada muutuste sisseviimist dokumentatsioonis ning pidada järge kõigi osadega, mis muutustega seotud võiksid olla. Ning alles lõpuks viia muudatused sisse ka tegelikult töötavasse süsteemi.

Teiseks mooduseks on võimalikult suure osa dokumentatsiooni sidumine programmikoodiga. Sest nagu vahel öeldakse, ei valeta kood kunagi – ikka teeb masin seda, mis seal kirjas. Sel juhul automaattestidega määratakse kõigepealt uus vajalik funktsionaalsus – mis on omakorda nõuete kirjelduseks. Ning muudes kohtades on dokumentatsioon võimalikult koodi juurest genereeritavate automaatsete kommentaaridena – siis piisab hoolitsemisest, et koodis koha peal tehtavad muutused sealsamas meetodi päises korralikult kommenteeritud saaks – ülejäänu eest otsustab juba kommentaaride põhjal dokumentatsiooni koostav rakendus.

### B.3.7.4 Programmi haldust lihtsustavad vahendid – kommenteerimise reeglid, koodi läbivaatus

::: oppekava

Kirjeldada programmi väärtuse säilitamist hoolduse abil, nagu koodi ülevaatamine, kommenteerimise reeglid, tehnilised viitedokumendid.

:::

Kommenteerimise üldreegliks on, et "piisavalt lühidalt kuid kindlasti arusaadavalt". Samas selliste kommentaaride maht ja keerukus sarnaste rakenduste juures võib kordades erineda. Hea, kui sama rakenduse või ka firma piires on kommenteerimise suhtes ühised tavad – siis tulevad kokkupandud rakenduste dokumentatsioonid ühtlasemad ning samuti teab täpsemalt ette aimata, mida võib kommentaaridest leida, mida mitte. Lisaks on ka programmeerimiskeelte kaupa olemas ühtsed soovitused programmikoodi vormistamiseks – muutujate kirjeldamise reeglid, treppimise reeglid samuti automaatsete kommentaaride kirjutamise reeglid.

Programmikoodi aitab viisakama ning usaldatavamana hoida koodi läbivaatus ehk selle inspekteerimine teise asjatundja poolt. Võõras silm avastab vigu ja kahtlasi kohti, mis kirjutajal enesel kipuvad tähelepanuta jääma. Ekstreemprogrammeerimise juures on läbivaatus viidud "ekstreemselt põhjalikuks", ehk siis koodi kirjutataksegi kahekesi koos. Toimingut nimetatakse paarisprogrammeerimiseks. Kasulikuks osutub aga ka lihtsalt pärast valmimist koodi läbivaatus ja analüüs teise eksperdi poolt.

### B.3.7.5 Kordamisküsimused

::: kordamiskusimused

1. Süsteemi nõuete document:
   – juhendab kasutaja käitumist erisugustes olukordades
   – on nõuete kogumise ja analüüsi tegevuse väljundiks X
   – märgib üles rakenduse arhitektuurse disaini
   – määrab rakendust loova meeskonna liikmed

2. Koodi kommenteerimise reeglid:
   – määravad rakenduses kasutatava programmeerimiskeele
   – hoiavad alles koodi vanemad versioonid
   – kirjeldavad, kuidas ühtlaselt kirja panna programmi juures leiduv metainfo X
   – aitavad konfiguratsioonifailidest leida soovitud parameetreid.

:::

## B.3.8 Programmeerimise näited

Selle alateema materjale läbi töötades õpid tundma koodinäidetega seotud ülesannete sisu. Ülesannete lahendamiseks on vajalik mõningane koodikirjutamise kogemus, et tekiks oskus näiteid analüüsida.

### B.3.8.1 Väikeste koodinäidete loomine määratud ülesande lahendamiseks

::: oppekava

Tõlgendada programmilõiku etteantud hüpoteesi alusel.

:::

Koodinäited on väga head vahendid programmeerimise õppimiseks ning mõnele konkreetsele ülesandele vastuse otsimiseks. Tervikliku näite eeliseks on, et teda on võimalik käivitada, täiendada, tulemust proovida ning eksituse korral jälle eelmise seisu juurde tagasi pöörduda. Temaatilisi näiteid liialt palju, et neist siinses lühikeses kirjutises kasu oleks. Õnneks on Internetis päris mitmeid näidete kogumikke vabalt saadaval, kel nende põhjal õppimise tahtmist on.

**Küllalt põhjaliku programmeerimisnäidete kogu leiab aadressilt** [http://java2s.com](http://java2s.com)

Algul java-näidete koguga alustatud, kuid sinna on aegade jooksul kogunenud hulgaliselt näiteid ka muude keelte ja tehnoloogiate kohta. Näited piisavalt lühikesed, et oleksid arusaadavad.

**Mitmete tehnoloogiate õpetuste kogu asub** [http://www.w3schools.com/](http://www.w3schools.com/)

Sealsed näited on isegi keerukamate teemade kohta tehtud piisavalt lihtsad, et neid julgeb ka algaja uurida ning põhisisu tuttavaks saada.

**Ühe eestikeelse näidetekogu leiab** http://minitorn.tlu.ee/~jaagup/kool/java/naited20/juht.html

Sealsedki näited on püütud teha suhteliselt mõistetavalt lühikeselt. Samas enamikul juhtudel hoolitsetud, et nad tervikuna käivitatavad ja katsetatavad oleksid.

### B.3.8.2 Vigade leidmine ja parandamine nõuetele vastavuse saavutamiseks

::: oppekava

Leida programmilõigus viga või puudus ja parandada see nõuete vastavaks.

:::

EUCIP kutseeksami juures on mitmeid ülesandeid programmikoodis vea otsimiseks ja parandamiseks. Jällegi tegemist valdkonnaga, kus tuleb pikemalt koodikirjutamist harjutada ning mõningane vilumus saavutada. Aga siia mõned tüüpilised kohad, mida tasub kontrollida.

Tsükli ja massiivi läbimisel – et kas läbitakse kõik elemendid. Kas alustatakse algusest ning lõpetatakse täpselt viimasel kohal.

Sulud avaldiste juures – tehete järjekorras muidu korrutamine/jagamine ees, liitmine/lahutamine taga. Samuti tasub tõeväärtusavaldiste juures vaadata, mis omavahel sulgudega kokku tõmmatud on.

Tingimuslause ja tsükli juures – mis kuulub ploki sisse, mis jääb sellest välja.

Muutujate puhul – kas väärtus antakse ikka samanimelisele muutujale, kust see loetakse

Andmetüüpide juures – kas vastav väärtus on deklareeritud tüübis korrektselt säilitatav.

### B.3.8 Kordamisküsimused

::: kordamiskusimused

**Koodilõik**

```csharp
int[] m={4, 5, 8};

int s=0;

for(int i=1; i<3; i++){

s=s+m[i];

}
```

Milline on muutuja s väärtus pärast koodilõigu läbimist?

a – `0`
b – `17`
c – `13` X
d – `12`

**Koodilõik**

```csharp
int[] m={4, 5, 8, 9};
int s=0;

for(int i=1; i<3; i++){
  s = s + m[i];
}
```

Mida peaks koodilõigus muutma, et tulemusena leitaks massiivielementide summa?

- rida 2 `s=1`
- rida 3 `for(int i=0; i<4; i++){` X
- rida 3 `for(int i=0; i<3; i++){`
- rida 2 `s=-1;`

:::

## Lisamaterjalid

- Inga Petuhhovi konspektid:

  http://www.cs.tlu.ee/~inga/SE\_materjal/Tarkvaratehnika\_sissejuhatus\_2008.pdf

  [http://www.cs.tlu.ee/~inga/SE_materjal/Tarkvaratehnika_etapid_2008.pdf](http://www.cs.tlu.ee/~inga/SE_materjal/Tarkvaratehnika_etapid_2008.pdf)

- [http://www.slideshare.net/hanspoldoja/2010-1206autorioigus](http://www.slideshare.net/hanspoldoja/2010-1206autorioigus)

- http://akadeemia.kakupesa.net/ITSPEA/loengud/loeng6

- Jaanus Põial. Programmeerimise algkursus: [http://enos.itcollege.ee/~jpoial/java/](http://enos.itcollege.ee/~jpoial/java/)

- Ahto Truu. Programmeerimise alused: [http://uuslepo.it.da.ut.ee/~at/prog/](http://uuslepo.it.da.ut.ee/~at/prog/)

- Jaagup Kippar, konspektid, näited ja ülesanded: [http://minitorn.tlu.ee/~jaagup/](http://minitorn.tlu.ee/~jaagup/)

- Mario Metshein, arvutiõpetuse materjalid: [http://metshein.com/](http://metshein.com/)
