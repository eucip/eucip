# B.2 Andmehaldus ja andmebaasid

Selle teema materjale läbi töötades saad teadmised andmehalduse ja andmebaaside kohta.

## B.2.1 Andmed ja transaktsioonid

Selle alateema materjale läbi töötades saad teadmised andmete üldistest omadustest, samuti andmete säilimisest, terviklusest ja kasutamise paindlikkusest.

### B.2.1.1 Andmed ja informatsioon

::: warning

Tuua välja vastupidava (durable) andmesalvestuse ja aruandlussüsteemi tähtsus.

:::

### Informatsioon

**Informatsioon e. teave** – fakte, sündmusi, asju, protsesse, ideid, mõisteid või muid objekte puudutav teadmus, millel on teatud kontekstis eritähendus.

Organisatsioonis vajaminevat informatsiooni säilitatakse põhiliselt dokumentides
(digitaalsel või paberlikul kujul), andmeid aga enamasti andmebaasides.

Infot võib defineerida kui sõnumit, mis esineb dokumendi või audiovisuaalses vormis oleva kommunikatsioonina. Nagu igal sõnumil, on ka infol saatja ja vastuvõtja. Info ülesanne on mõjutada vastuvõtja hinnanguid või käitumist. Erinevalt andmetest on infol tähendus, olulisus ning eesmärk. Andmed muutuvad infoks, kui nende looja lisab neile tähenduse. Oluline on märkida, et IT aitab andmeid infoks muuta ja neile väärtust lisada. Samas ei aita IT kaasa konteksti loomisele (kategooriad, kalkulatsioonid, vorm) – selle loovad inimesed.

#### Andmed

**Andmeteks** (data) nimetatakse inimesele ja/või masinale arusaadaval kujul formaliseeritud (erilisel viisil vormindatud) info esitusviisi, mida saab kasutada suhtluseks, tõlgendamiseks, säilitamiseks või töötluseks.\*\*

Andmed on üksikasjalikud, objektiivsed faktid sündmustest. Kõik organisatsioonid vajavad andmeid ning neil baseerub enamik eluvaldkondi. Efektiivne andmehaldus on üks olulisemaid edukuse kriteeriume, seevastu suur andmete hulk seda tingimata veel ei ole.

Suurest andmehulgast pole võimalik objektiivelt täpseid otsuseid automaatselt järeldada kahel põhjusel.

- Esiteks, andmete liiga suur kogus teeb raskeks nende identifitseerimise ja nende tähtsuses selgusele jõudmise.
- Teisek (see on ka peamine põhjus), andmeil loomupäraselt tähendust ei ole. Andmed iseloomustavad või kirjeldavad vaid toimunut, nad ei sisalda hinnangut ega inspiratsiooni. Organisatsiooni jaoks on andmed siiski olulised, kuna nende põhjal luuakse infot.

#### Andmeelemendid

**Andmeelemendiks** nimetatakse antud kontekstis (sisuga seotud) jagamatut andmeüksust.

Iga tarkvaraline rakendus haldab ja manipuleerib **andmeid**, milliseid võib tõlgendada kui töötlusseadme sisemisi muutujaid või nagu algupäraseid ja kohaseid teatud objekte ("data" ladina keeles, ja "données" prantsuse keeles), need on informatsioonielemendid, milliseid vahetatakse kasutajatega või väliste süsteemidega.

Andmetüpoloogia ülesanne on rühmitatud vastavalt nende päritolu allikale/kanalile (Sisend) ja sihtpunktile (Väljund) ja me võime ideaaljuhul katalogiseerida tarkvara süsteeme viies rakenduste kategoorias:

1. ("sisemiste" andmete) algoritmiline töötlus
2. automatiseerimine ja juhtimine (sisend/väljund (I/O) muunduritelt/anduritelt ja muunduritele/anduritele)
3. inim-masin liides (I/O kasutajalt ja kasutajale)
4. andmeedastus / ülekanne (I/O töötlusvõrgust ja töötlusvõrku)
5. ülekandesüsteemid ja andmepangad (I/O pidevsalvestussüsteemist ja pidevsalvestussüsteemile).

#### Andmebaas

**Andmebaas**, databas, on omavahel seotud ja süstematiseeritud andmete kogum.

Kõige elementaarsemas tähenduses mõistetakse andmebaasi all andmekogumit, mis lisaks andmetele sisaldab eneses ka nende andmete struktuuri kirjelduse - andmetega koos hoitakse ka nende andmete kirjeldust. Võib öelda ka veel nii: andmebaas on kogum andmeid koos neid andmeid (andmete struktuuri) kirjeldavate meta-andmetega. Kõige elementaarsemal tasemel sisaldab andmete kirjeldus tabelite kirjeldusi (milledes hoitakse andmeid) ja tabelite vaheliste seoste kirjeldusi.

Tänapäeva andmebaasisüsteemid hoiavad andmebaasides lisaks andmete kirjeldustele ka andmeid käsitlevaid protseduure ja nende protseduuride käivitamise reeglid (trigerid (triggers) ja kalenderplaanid (schedulers).

Laiemas mõttes ei tohi andmebaaside all mõista ainult elektroonilisi andmebaase, mis on realiseeritud arvutisüsteemides. Andmebaasid eksisteerisid palju aega enne seda, kui neid sai hakata realiseerima arvutisüsteemides. Suvalised kartoteegid on andmebaasid – olenemata sellest, milline on andmekandja selle kartoteegis (kartoteegikaart, kivitahvel, perfolint, perfokaart vms.).

Sama andmebaasi piires peavad andmebaasis olevad andmete kirjeldus ja andmed olema alati tõlgendatavad ühte moodi – nad peavad olema salvestatud kindlaks määratud ülesehitusega füüsilise struktuurina.

Elektroonilises mõttes on andmebaas arvutiprogramm, mis võimaldab andmeid hoida ja kasutaja(te)le neid kuvada soovitud vormingus. Andmebaasides hoitakse informatsiooni teatud objektide kohta. Levinuim, relatsiooniline andmebaas koosneb mitmetest andmetabelitest. Ühes tabelis hoitakse tavaliselt ühe kindla kategooria objekti (tööpink, auto, isik, töötaja) kohta kogutud andmeid.

**Andmebaaside näited:**

- haiguslugude andmebaas haiglas
- raamatute kataloog raamatukogus
- abielude registreerimise ja lahutuste andmebaas perekonnaseisuametis jne.

#### Elektrooniliste andmebaasisüsteemide arengu algus

Elektrooniliste andmebaaside (esialgu küll kartoteekide) loomisele andsid peamise tõuke kolm asja (antud järjekorras) – kaasaaegse struktuuriga arvuti loomine, aine magnetilistel omadustel baseeruva püsimälu loomine ja andmete lugemise-kirjutamise otsepöördus (mitte-järjestik) süsteemide loomine. Siin ei saa muidugi tähtsa katalüsaatorina jätta mainimata seda, et selleks ajaks oli loodud hulk strateegilise tähtsusega kartoteeke, mille pidamine vanal tehnilisel ja struktuursel platvormil hakkas üle jõu käima.

Kaasaaegse arvuti esimese põlvkonna (1945-1956) tekkimisel oli suur osakaal teisel maailmasõjal, kus riigid püüdsid arvutite abil saavutada strateegilist üleolekut – sõja ajal tehtud pingutused kanaliseerusid vahetult pärast sõda uue põlvkonna arvutite loomisega, milles rakendatud põhimõtted määrasid arvutite arendamise trendid järgmiseks neljakümneks aastaks (EDVAC - University of Pennsylvania 1945, EDSAC - Cambridge University 1949, UNIVAC I - Remington Rand,1951). Peamisi põhimõttelisi muutusi oli kaks. Esiteks kirjeldati arvuti arhitektuuris keskjuhtseadme (protsessori) mõiste, mis võimaldas arvutit juhtida läbi ühe andmevoo. Teiseks hakati nii täidetavat programmi kui ka programmi juhtimiseks või töötlemiseks vajalikke andmeid hoidma samas mälus. See kõik lõi aluse kaubanduslikuks arvutite tootmiseks.

1945\. aastal loodi uus andmekandja, magnetlint, mis vähehaaval hakkas välja vahetama perfokaarte ja perfolinte. See oli esimene andmekandja, mis võimaldas andmete otsimist. Siiski ei olnud see otsingumehhanism veel eriti täiuslik, kuna võimalik oli ainult järjestik-otsing. Suure tähtsusega oli aga see, et "ruumiühikusse salvestatud andmete hulk" kasvas mõõtmatult ja andmete fragmenteerimisega paljudele paralleelselt töös olevatele lintidele suudeti tagada ka juba piisav operatiivsus andmete otsimisel.

Esimeste kaasaaegsete andmebaasisüsteemide loomiseni oli aega veel umbes paar aastat, kui William. C. McGee 1959. aastal publitseeris oma artikli "Generalization: Key to Successful Electronic Data Processing" ajakirjas Journal of the ACM (Volume 6, Number 1, January 1959 lk. 1-23, ACM – Association for Computing Machinery). Artiklis ei anta küll veel konkreetseid andmete üldistamise põhimõtteid vaid piirdutakse üldkontseptuaalse filosoofiaga, kuid see on esimene suunda näitav teeviit kaasaaegse andmete modelleerimise põhimõtete poole.

Samal aastal võtab IBM kasutusele oma magnetkettasüsteemi Ramac (Random Access Method of Accounting and Control) mudel 305, mis on maailma esimene magnetkettasüsteem ja mis koosneb 50-st umbes 60 cm diameetriga kettast, millede mõlemale küljele saab salvestada informatsiooni. Informatsiooni salvestamise tiheduseks on 2000 bitti ruuttollil kogumahuga 5MB. Olulisimaks murranguks on siin siiski andmete otsepöördus lugemis/kirjutusreþiimi esmakordne rakendamine ja andmete kirjutamise/lugemise suur kiirus.

Aastal 1961 töötati korporatsioonis General Electric Co. välja andmebaasi juhtimissüsteem IDS (Integrated Data Store), mida loetakse esimeseks elektrooniliseks andmebaasi juhtimise süsteemiks. Projekti juht oli Charles Bachman. Siin ei saa muidugi rääkida veel andmebaasi juhtimissüsteemist tänapäevases tähenduses, kuna enamik andmebaasi funktsioone oli käsitsi kodeeritud, andmebaasina oli käsitletav ainult üks fail ja ta töötas ainult General Electric Co. arvutitel ja lahendas ainult selle firma konkreetseid vajadusi. Sellest sai tõuke CODASYL (Conference on Data Systems Languages) grupi kokkukutsumine, mis koosnes vabatahtlikest ja mille eesmärgiks oli andmesüsteemide efektiivsema analüüsi, disaini ja rakendamise vahendite ja metoodikate väljatöötamine. Grupp moodustati 1959 aastal ja töötas kuni 1985-nda aastani. Grupi peamiseks ülesandeks määratleti standardse, erinevatel arvutitel kasutatava programmeerimiskeele loomine. Selleks programmeerimiskeeleks sai COBOL ja selle raames formuleeriti ka võrk-andmemudeli põhilised kontseptsioonid.

1968\. aastal tuli IBM välja oma IMS (Information Management System) kontseptsiooniga mis formuleeris hierarhiliste andmemudelite põhialused. Ja seejärel kohe (1969) sama mudeli täiendusega (IDM DB/DC), mis kirjeldas meetodit võrk-vaadete ehitamiseks hierarhilisele andmemudelile. Mõlemad lahendused olid mõeldud kasutamiseks IBM SYSTEM/360 mainframe&#39;del.

Kuni siiani olid andmebaasid kõik ühe protsessi poolt kasutatavad. Eelmise sajandi 70-ndate aastate lõpus lõi IBM koos American Airlines&#39;ga süsteemi SABRE, kus läbi kommunikatsioonivõrgu said andmetele korraga ligi juba paljud kasutajad.

Vaatamata suhteliselt tormilisele erinevate andmebaaside loomisele eelmise sajandi 70-ndate aastate lõpus, ei olnud ikka veel tekkinud kommertsiaalsetel alustel müüdavat, ristvarast eraldiseisvat andmebaasisüsteemi. Sellele aluse panemiseks oli jällegi suur teene firmal IBM. IBM uurija Edgar F. Codd pakkus 1970. aastal välja relatsioonilise andmebaasimudeli, kus andmeid säilitatakse tabelites mille vahele ehitatakse relatsioonid. IMS mudelit täiendati relatsioonilise andmemudeli printsiipidega ja selle alusel arendati välja andmebaasisüsteem SYSTEM/R, mida müüdi koos IBM mainframe'dega kuni 1980. aastani. IBM süsteemi SYSTEM/R kohta avaldatud informatsiooni võtsid oma uurimis- ja arendustöödes aluseks California Ülikooli teadlased Michael Stonebraker ja Eugene Wong ning lõid nende arenduste tulemusena oma andmebaasisüsteemi, millele andsid nimeks Ingres ja millel olid kõik kommertsialiseerimiseks vajalikud olulised omadused. See produkt kommertsialiseeriti lõpuks firmade Oracle Corp. ja Ingres Corp. poolt.

Aastast 1979 tasub ära märkida veel sündmus, mis märkis ühe tõusva produkti ja trendi sündi. 70.ndate aastate jooksul töötati välja mitmeid erinevaid päringukeeli – SQUARE, SEQUEL, QBE, QEL jne. 1979. aastal tõi Oracle turule esimese kommertsiaalse andmebaasisüsteemi, mis kasutas andmemanipuleerimiskeelena SQL-keelt (Oracle Corp. teisend standardist SEQUEL). Tõusvaks tooteks sai Oracle DBMS ja tõusvaks trendiks SQL-keel.

60-ndate aastate lõpust hakkas arenema veel üks süsteemide grupp, mis tänapäeval on suurte andmebaaside kasutamise lahutamise koostisosa. Esialgu nimetati neid otsuse toetussüsteemideks (DSS – Decision Supporting System).ja nende esmane eesmärk oli andmekäsitluse lihtsustamine ja parem kasutamine otsuste tegemise toetamisel. Sisuliselt olid tegemist andmete käsitlemise analüütiliste vahendite arendustega. Selliseid alamsüsteeme loodi küll kogu eelmise sajandi 70-ndate aastate jooksul kuid esimese kommertsiaalse lahenduseni jõuti alles 1970. aastal. Selleks oli süsteem EXPRESS.

#### Andebaasid ja personaalarvutid

Eelmise sajandi 80-ndate aastate alguseks oli põhiline platvorm andmete modelleerimise ja andmebaasisüsteemide arenemiseks loodud ja tundus, et mingisuguseid erilisi lööke ei edasi ega tagasi ei tohiks tulla. Selle situatsiooni lõi aga segamine personaalarvutite turuletulek. Üpris pea loodi esimene personaalarvutile mõeldud relatsiooniline andmebaasisüsteem DBase. Kiiresti järgnesid DBase II, Paradox, Fox, FoxPro, DBase III, Dbase IV jne. See muutis olukorda pöördeliselt – andmebaasid said kättesaadavaks suurele kasutajate hulgale ja andmete modelleerimise metoodikad ja vahendid vajalikuks paljudele. Arendama asuti järjest uusi ja mugavamaid kasutajaliideseid.

Mõne aja pärast lisandusid lokaalvõrkude loomise vahendid – riistvara ja tarkvara. Oma hüppe tegid kaasa ka andmebaasisüsteemid – kõigile elujõulistele andmebaasisüsteemidele lisati andmete mitme kasutaja poolt samaaegse kasutamise omadused. See ei osutunudki aga nii lihtsaks kui esialgu tundus – hakkasid tekkima konfliktsituatsioonid andmete samaaegsete kasutajate vahel ja see tingis andmete ühiskasutuse ja lukustusteooriate arenemise.

1985\. aastal publitseeriti SQL-keele esialgne standard – keel, mille Oracle Corp. oli kasutusele võtnud kui oma andmebaasisüsteemi andmemanipuleerimiskeele, oli vahepeal läbi teinud standardiseerimise protsessi ja valmis kasutamiseks suuremas hulgas produktides. Praeguseks on toona kinnitatud standardit mitmeid kordi muudetud ja ANSI klassifikatsiooni järgi on viimane standard SQL99, mida arvestavad oma uutes versioonides kõik tuntumad andmebaasisüsteemid.

1986\. aasta oli nii mõneski mõttes huvitav aasta. Lisaks SQL-keele esmase standardi esitlemisele rakendati samal aastal ka esimene äri-intelligentsi (business intelligence) süsteem. Firma Metaphor Computer Systems Inc. valmistas Procter & Gamble Co. jaoks süsteemi, mis ühendas analüüsiks müügiinformatsiooni ja turu jälgimise informatsiooni. Samal aastal alustas Pilot Software Inc. süsteemi Command Center müüki – turule oli tulnud esimene Client/Server arhitektuuriga süsteem. Seoses sellega hakkasid ka kohe arenema eraldatud (distributed) struktuuriga andmebaaside teooriad ja õigepea ka andmete replikeerimist käsitlevad teooriad ja toetavad süsteemid. Paraku ei ole lõpuni korrektselt toimivate ja kõiki kasutamisvajadusi rahuldavate replikeerimissüsteemide loomiseni jõutud veel tänasel päevalgi.

80-ndate aastate lõpus toimus suur murrang andmebaasisüseemide arhitektuuris. Siis tekkinud arhitektuur kestab väikeste muudatustega tänaseni. Selle arhitektuuri nimi on klient/teenindaja (client/server). Kui siiani pöördusid andmebaasijuhtimissüsteemid arvutivõrgus oleva andmebaasi poole kui võrguketta poole, siis nüüd muutus suhtlus andmebaasiga teadete põhiseks. Selles arhitektuuris on kaks osapoolt – klient e. rakendusprogramm ja andmebaasi serveri mootor (andmebaasi serveri täiturprogramm). Klient saadab serverile teate korraldusega ja server saadab omakorda oma poolse teate või teadete seeriaga vastused. Selleks vastuseks võib olla lihtsalt teade selle kohta, kas korralduse täitmine õnnestus või mitte (viimasel juhul tagastatakse teatega vea number ja kirjeldus) või siis korraldusega (päringuga) tellitud andmed.

Sellest hetkest alates on toimunud tehniliste vahendite stabiilne areng ilma suuremate hüpeteta. Täiustatud on tehnilisi võimalusi, kiiremaks on muutunud riistvara ja optimiseeritud nining täiustatud on andmekäsitlusalgoritme ja meetodeid.

#### Andmebaasiprogrammid jagunevad

- **lameandmebaasideks** (hierarhilisteks andmebaasideks), kus andmed reastatakse puustruktuurina, s.t. allolevad andmed on seotud ülemistega ja neile pääseb ligi ainult ülemiste andmete kaudu
- **relatsioonandmebaasideks** , kus andmeüksused on omavahel relatsioonidega (seostega) ühendatud. Neid relatsioone esitatakse põhimõtteliselt tabelitena, kusjuures veergudes kujutatakse andmevälju (näit. isikukood, nimi, eesnimi, haridus, perekonnaseis jne.) ja ridades andmeüksusi e. kirjeid (näit. töötaja isikuandmed).

Lisaks ülalmainitud laiatarbeprogrammide kasutatakse väga palju erialasteks rakendusteks (arstidele, arhitektidele, juristidele, raamatupidajatele jne.) mõeldud tarkvara, mida saab ilma lisasobitusteta kohe kasutada. Sellist tarkvara nimetatakse ka **vertikaalseks** tarkvaraks. Nende põhiline erinevus standardprogrammidest seisneb selles, et neid valmistatakse suhteliselt väikestes kogustes ja nende hind ületab mitmekordselt laiatarbeprogrammide hinna. Tihti on nad kirjutatud mõne relatsioonandmebaasiprogrammi programmeerimisvahendeid kasutades.

Kui on 2..3 sõpra, siis nende telefoninumbreid ja aadresse suudame meelde jätta. Kui on mõni tuhat sõpra ja tuttavat, siis nende nimede ja telefoninumbrite meelespidamiseks ei piisa ka mobiiltelefoni mälust. Mida sellisel korral ette võtta?

Võiks kirjutada kõik nad mingisugusesse arvuti poolt hallatavasse programmi. Milline aga see programm peaks olema, mis võimaldaks vajaliku isiku kiiresti leida ja näitaks kohe ka tema telefoninumbrit?

Siin tuleb appi andmebaasirakendus, mis võimaldab sellist hulka andmeid paigutada ja ka kiiresti otsingud, ükskõik millise kriteeriumi järgi, teostada.

### B.2.1.2 Andmete salvestamine

::: warning

Tuua välja, kuidas atomaarsus, järjepidevus (consistency), isoleeritus ja vastupidavus (ACID) aitavad tagada töökindlaid andmebaasi transaktsioone.

:::

Arvutiprogrammi, milline hoiab andmeid ja võtab vastu kasutajate päringuid ning väljastab päringu põhjal vajalikud andmed (kui leiduvad!) vajalikul kujul nimetatakse **andmebaasi haldussüsteemiks** ABHS [database management system](http://en.wikipedia.org/wiki/Database_management_system) (DBMS).

Andmed salvestaks reeglina mingisuguses andmebaasis. Andmebaasi võib defineerida ka kui **kirjete** kogumit, mis paiknevad arvuti salvestusseadmel, nii, et kui kasutaja pöördub arvuti poole sooviga teatud informatsiooni saada mingi otsuse tegemiseks, siis arvuti konsulteerib andmebaasiga ja kui soovitud andmed leiduvad, siis väljastab need kasutajale. Andmete paremaks kättesaamiseks (leidmiseks) andmebaasist on kirjed reeglina organiseeritud andmeelementide (faktide) kogumina.

Andmebaaside kasutamine võimaldab:

- Kiiret juurdepääsu vajalikele andmetele
- Andmete sorteerimist etteantud tunnuste järgi
- Ainult vajalike andmete leidmist ilma liigse "infomürata"
- Mitme kasutaja üheaegset juurdepääsu andmetele
- Mitmest füüsiliselt eraldi asuvast asukohast andmesisestust
- Andmetele juurdepääsu ainult volitatud isikutele.

Andmebaaside kasutamine tõstatab ka rea probleeme:

- Andmeid on vaja kaitsta volitamata isikute eest
- Andmebaasihaldussüsteem (ABHS) ehk programm on vaja soetada
- ABHS kasutajaid ja haldajaid on vaja koolitada
- Andmete terviklikkus on vaja tagada
- Andmed on vaja sisestada etteantud kujul
- Andmebaasid vajavad projekteerimist ja see nõuab aega.

ABHS täieliku usaldusvääruse klassikaliseks näiteks on jooksevkonto kontrollimise operatsioon. On vaja tagada, et igal elujuhtumil (ka katastroofiolukorras) andmete usaldusväärus ei kannataks ja iga online tehingu (ülekande) korral ei peaks liidetama saaja kontole summat ilma seda saatja kontolt maha võtmata ning vastupidi.

Ülekannete vajalikku turvalisust iseloomustab lühend "ACID", mõnikord kasutatav ka kui "ACID test", mis tuleneb terminitest:

- atomaarsus _Atomicity_ ülekanne peab olema jagamatu, saabudes kehtivalt (juriidiliselt) lõpetatuna (soorita tehing=_commit_) ja vastasel korral tühistatuna (jäta tehing ära=_rollback_, viimane taastab andmete esialgse seisu (seis enne tehingu alustamist), mis loogikaterminites tähendab kõik või mitte midagi
- kooskõlalisus _Consistency_ – sobivalt valitud andmete uuendamisreeglid peavad välistama vigade ja ebakõlade teket eristatavate ja kooskõlas olevate andmete haldamisel
- eraldatus _Isolation_ – üheaegset juurdepääsu _concurrency_ andmetele erinevate protsesside poolt peab reguleerima, et vältida konflikte ja ABHS väärastumise/rippuma jäämise _deadlock_ situatsioonide vältimiseks
- kestvus _Durability_ – andmete juhusikke kaotusi peab vältima või viima minimaalseks, lisades viimase kehtiva seisundi, milline süsteemil oli enne talitlushäiret, taastamisvõimaluse.

ABHS programm ei sisalda otseseid viiteid andmebaasis olevatele andmetele, kuna on võimatu eelnevalt defineerida, millised andmed tegelikult andmebaasi sisestatakse. See probleem on lahendatud selleks otstarbeks spetsiaalselt lisatud mäluruumiga, kuhu salvestatakse "andmesõnaraamat" _data dictionary_, mis kirjeldab tegelikku informatsiooni, mida saab andmebaasi sisestada.

Andmete ja info salvestamine süstemaatiliselt arvuti mälus omab rea eeliseid, kuid toob kaasa ka riske, milliseid peab uurima ja lahendama. Need probleemid on andmete liiasus, terviklus, paindlikkus, turvalisus, millistest tuleb juttu lähemalt allpool.

### B.2.1.3 Andmete liiasus ja vasturääkivus

::: warning

Näidata ühiskasutus-süsteemides projekteerimise ja hoolduse probleeme nt andmete liiasus ja vastuolulisus, terviklus, andmete paindlikkus, samaaegne juurdepääs ja turvalisus.

:::

Andmete kogumisel esineb tihti olukordi, mis tulenevad reaalsest elust, näiteks andmete salvestamisel võib esineda olukordi, kus teatud andmeid on andmebaasis korduvalt, näiteks olukord, kui ühel isikul on mitu töökohta või mitu ametit, vt Sele 2. või näiteks kogutakse andmed isiku sünnikuupäeva ja vanuse kohta. Viimase näite puhul on vanuse hoidmine andmebaasis ilmselt ülearune, kuna vanust on võimalik tuletada praeguse hetke kuupäeva ja sünnikuupäeva vahena. On ütlematagi selge, et sellised andmed tarbivad rohkem arvutimälu, kui see tingimata vajalik oleks ja seetõttu aeglustavad lõppkokkuvõttes ABHS tööd.

Olukorda, kus andmebaasi tabelis on samu andmeid korduvalt nimetatakse **andmeliiasuseks**.

Tihti esineb ka olukordi, kus andmekogumise protsessis saadud andmed on vasturääkivad kas andmetega tegeleva isiku vea tõttu, andmeedastusprotsessi vigade tõttu või koguni pahatahtliku isiku või programmi sekkumise tõttu infotöötlusprotsessi mingil etapil.

![](data:image/png;base64,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)

Joonis 2. Andmete kordumine

#### Käideldavus, terviklus, konfidentsiaalsus

Andmete **käideldavus** _(availability_)on teabe õigeaegne ning mugav kättesaadavus ning kasutatavus selleks volitatud isikutele ning subjektidele.

Käideldavus on reeglina andmete kõige olulisem omadus – halvim mis andmetega võib juhtuda, on see, et nad pole (volitatud isikutele) kättesaadavad.

Näiteid käideldavuse probleemidest:

- Üliõpilasele antakse topelt diplom (rahvastikuregister pole kasutatav)
- Abielluvad 2 abielus olevat isikut (Õnnepalee volitatud töötaja ei pääse ligi rahvastikuregistrile).

Andmete **terviklus** (integrity) on andmete pärinemine autentsest allikast ning veendumine, et need pole hiljem muutunud ja/või neid pole hiljem volitamatult muudetud.

Kompleksset mõistet, mis hõlmab andmete kehtivust, andmete kasutatavust, andmete õigsust ja andmete terviklust nimetakse **andmete kooskõlalisuseks.**

Andmed on reeglina seotud selle loojaga, loomisajaga, kontekstiga jms., nende seoste rikkumine võib põhjustada ettenägematud tagajärjed.

Tervikluse rikkumise näited:

- Riigi Teataja andmebaasi tunginud häkker saab seadusi omatahtsi muuta
- Karistusregistri eksliku muutmisega saavad vangid varem vabaks.

Tervikluseprobleemid võivad tekkida ka arvuti füüsiliste häirete korral – kas pole mingil põhjusel andmed loetavad või nad saavad rikutud mälu defektide tõttu. Kui näiteks on vaja salvestada arve andmed, siis need sisaldavad 3 informatsioonikillukest makse summa, käibemaks ja makse kuupäev. Kui üks nendest osadest on puudu või moondunud, võib see põhjustada hulga segadusi. Viimatitoodud probleemi saab lahendada tehingu tehnikaga: kui näiteks mingi osa vajalikust 3 infotükist on puudu, siis tehing tühistatakse.

Teine terviklusprobleem tekkib infotükikeste funktsionaalse sõltuvuse korral nende vahel. Olgu näiteks arve, mille sisuks on mingid kaubad ja mille päises on kliendi info (tema aadress, arveldusarve number jms.). Need kliendi andmed on erineva olulisusega, kui arve sisu, sest tavaliselt on arve sisu olulisema tähtsusega ja kliendi andmed asuvad olemasolevas teises tabelis. Sündmus, mis tühistab päise lugemise võib tekitada andmerea kliendiandmeteta (_orphaned_). Selliste olukordade vältimiseks kasutatakse vahendit, mis tagab andmete "viitelise tervikluse" _(referential integrity_).

Andmete **konfidentsiaalsus** (confidentiality) ehk salastus on andmete kättesaadavus ainult selleks volitatud isikutele (ning kättesaamatus kõikidele ülejäänutele).

Konfidentsiaalsuse rikkumise näiteid:

- Tartu Ülikooli Kliinikumi patsientide andmed sattusid veebi
- Kaitseministeeriumi ametnik kaotas mälupulga, mistõttu sattusid salajased andmed eraisiku kätte.

#### Andmete paindlikkus, üheaegne juurdepääs ja turvalisus

Andmebaas võib olla suurepärane lahendus andmete paindlikuks muutmisele. On teada, et organisatsioonide andmevajadused arenevad aja möödudes ja see peegeldub hallatava info tüübis. Kui rakendusprogramm vastutab andmete juurdepääsu loogika eest, siis sisestatud uus info mõjutab otseselt vastutvat programmi ja kõiki teisi programme, mis haldavad kaasnevat (korreleeruvat) infot. Näiteks uue andmegrupi "kliendi elektronposti aadress" haldamine ei mõjuta ainult kliendiandmete haldusprogrammi vaid ka kõiki teisi programme, millistel on juurdepääs kliendiandmetele. Sellise olukorra parim lahendus on relatsiooniline andmebaas, milline annab infohalduses kõige suurema paindlikkuse.

Suurte ettevõtete korral tekib andmetele üheaegse juurdepääsu probleem. Väikestes ettevõtetes on reeglina isik või osakond, kes vastutab kliendiandmete uuendamise eest, suurtel ettevõtetel on neid reeglina mitu. Näiteks võib tekkida olukord, kus arveldusosakond (raamatupidamine) tahab muuta kliendi arveandmeid (arveldusarve) ja turundusosakond tahab muuta kliendi aadressi. Kuna andmed paiknevad samas kirjes, siis tuleb vältida kattumise probleemi. See probleem on lahendatud **semaforide** (_semaphore_) või juurdepääsu reguleeriva tehnikaga, mis võimaldab andmete muutmist ühel ABHS kasutajal samal ajahetkel, teine lihtsalt peab senikaua ootama, kuni esimene on oma muudatused teinud.

Tõsisem olukord tekib, kui kaks kasutajat tahavad uuendada kaht informatsioonitükki vastupidises järjekorras. Esimeses faasis saavad mõlemad juurdepääsu sellele infole, et seejärel määramatult oodata teise järgi, kes on blokeeritud (seda patiseisu nimetatakse ummikseisuks (_deadlock_)). Uued ABHS suudavad lahendada sellise olukorra jälgides blokeeritud operatsioone. Selliste olukordade parim lahendus on delegeerida kogu andmete uuendusprotsesside haldus andmebaasile.

Samuti suudab juurdepääsu turvalisusust efektiivselt hallata ABHS, kes tegutseb läbitungimatu filtrina, kuna andmetele juurdepääs toimub ainult läbi ABHS. See tähendab, et kasutaja informatsioon ja õigused salvestatakse samuti (tavaliselt krüpteeritud kujul) andmebaasi.

### B.2.1.4 Kordamisküsimused

::: tip Kordamisküsimused

1. Kas keskmine brutopalk 8049 krooni on andmed või informatsioon?

- andmed
- informatsioon X

2. Kas Statistikaameti poolt väljastatud näitaja "keskmine eluiga" on informatsioon?

- jah X
- ei

:::

## B.2.2 Andmebaasi struktuur

Selle alateema materjale läbi töötades saad teadmised andmebaasi juurde kuuluvatest komponentidest, andmebaasi paiknemisest kettal, andmebaasi koostisosadest ning andmebaasi käitamisega seotud osadest.

### B.2.2.1 Failihaldussüsteemi ja andmebaasihaldussüsteemi erinevused

::: warning

Tuua välja erinevused failihaldussüsteemi ja andmebaaside haldussüsteemi vahel (DBMS).

:::

Iga kord kui püsiandmeid hallatakse, kasutatakse salvestusseadmeid, mis üldiselt põhinevad magnet või magnetoptilisel tehnoloogial. Üldjuhul kasutab neid seadmeid **operatsioonisüsteem** (OS) erinevate elementide salvestamiseks alates programmidest ja nende seadistustest kuni tegelike andmeteni.

Iga OS kasutab oma **failhaldussüsteemi** _File Management System_ - _FMS_.
FMS kasutab ära operatsioonisüsteemi teenused ligipääsuks salvestusseadmetele, mis on nähtavad, kui lehekülgede järjend, kus informatsioon on salvestatud.

FMS struktureerib salvestusseadmed hierarhilisel viisil, jaotades nad **kaustadeks** või **kataloogideks** , mis võivad ise sisaldada teisi kaustu või arhiive ( **faile** ). FMS kasutamiseks ei pea teadma salvestusseadmete tehnilist struktuuri. Selle asemel, on piisav mäletada soovitud failinime ja rada või teed, mis kirjeldab kausta asukohta, kus fail asub.

FMS võimsus ja piirangud tulenevad tema võimest sisaldada igat tüüpi informatsiooni, struktuurset või struktureerimata ja isegi programme. Selline üldistus on aluseks operatsioonisüsteemile, mis peab suutma hallata igat liiki andmeid, aga see mõjutab lõppkokkuvõttes jõudlust, kui kasutada FMS'i spetsiifiliste ülesannete korral. See on põhjuseks, miks paljud ABHS lubavad kasutada OS alamtaseme teenuseid, ringiga mööda minnes FMS'ist ja otse hallates magnetsalvestuse toetust, töötades lehekülgedega otse.

Täpsemalt vaadates, avaldub FMS piiratus järgmistel juhtudel:

- puudub optimiseerimisfunktsioon andmete jagamiseks, mis rakendaks vajaliku lukustuspoliitika ( **lukustus** ) kasutaja poolt kasutatavatele **failiosadele**
- puudub üldine andmete manipuleerimise funktsioon, mis parima näitena on olemas mõne programmeerimiskeele (tavaliselt objektorienteeritud keelte) laiendusena nagu näiteks korraldus "cout" C++ keeles
- puudub funktsioon terviklikkuse haldamiseks. See on peamiselt vajalik tehingute ja relatsioonide tervikluse tagamiseks, kuna madaltaseme lahendus nagu **sõltumatute ketaste liiane massiiv** ( **RAID** ) on olemas üldise tervikluse tagamiseks
- puudub funktsioon suhete, linkide või objektide otsehalduseks.

### B.2.2.2 Andmebaasisüsteemi komponendid: andmefailid, andmesõnastik, indeksid, statistilised andmed

::: warning

Kirjeldada andmebaasisüsteemi komponente: andmefailid, andmesõnastikud, indeksid, statistilised andmed.

:::

ABHS võib andmete halduseks kasutades operatsioonisüsteemi poolt pakutavaid failihaldussüsteemi funktsioone või otseselt ise tegeleda salvestusseadmetega. Teise variandi puhul kasutatakse **erilist\*\*** failisüsteemi\*\*, mille on kavandanud ABHS tootjad ise. Erinevused nende kahe viisi vahel võivad olla märkimisväärsed, nii teostuskiiruse, kui hinna poolest; siiski pole see erinevus mõju avaldanud salvestatud informatsioonile.

ABHS ei saa piirduda ainult nõutavate andmete salvestamisega, kuna ta peab kõigepealt salvestama kuhugi andmete struktuuri, kusjuures mõlemad loogilisel tasemel (nimed, suhted) ja füüsilisel tasemel (meeldejätmiseks vajalikud andmetüübid) säilitades vajalikku paindlikkuse: see informatsioon salvestatakse **andmesõnaraamatus** (_data dictionary - DD_)_._ Samuti on vaja andmesõnaraamatusse salvestada indeksid. Administratiivsetest nõuest tulenevalt on vaja salvestada ametlike kasutajate andmed ja nende profiil: neid andmeid kasutab ABHS ise veendumaks soovitud operatsioonide vastuvõetavuses. Kogu seda informatsiooni kokku nimetatakse mõnikord **süsteemi kataloogideks** (_system catalogues_)_._

Indeksite ülesandeks on võimaldada mõnede tunnuste järgi kiiremat otsingut. Nii nagu raamatute indeksite juures saab märksõna järgi kiiresti leida selle paiknemise lehekülje ilma kogu teksti läbi lappamata nii ka elektroonilises andmebaasis õnnestub indeksi järgi sobiv koht leida. Kusjuures vahe on eriti tuntav suurte andmemahtude korral, kus minutitepikkune otsimine võib sobiva indeksi korral asenduda millisekunditega. Klasterdatud indeksi puhul sorteeritakse kogu andmestik vajaliku veeru järgi, neid saab iga tabeli kohta olla vaid üks.

Statistilised andmed salvestunud päringute kohta aitavad edaspidi päringuid optimeerida – näiteks selle pealt vaadates, millised võrdlused ja välistused on otstarbekam enne ära teha.

### B.2.2.3 Andmebaasihaldussüsteemi kasutavad rakendused

Andmetega tegelevad enamik rakendustest. Kui rakenduse töö piirdub kasutaja andmete põhjal vastuse arvutamisega kus täiendavat lisateavet vaja ei lähe, siis võib enamasti piirduda rakenduse sees oleva koodiga. Üksikute andmete kasutamisel või salvestamisel on andmeid mugav ja traditsiooniline hoida failides. Kui aga andmeid või nende tüüpe on hulgem või on tegemist paljude üheaegsete kasutajatega – sellisel juhul on andmebaasihaldussüsteemi kasutamises rakenduse osana märgatav tulu. Muidu peaks hakkama sarnaseid optimeerimis- ja kontrollikohti ise oma programmide sisse kirjutama, mis aga osutub küllalt töömahukaks.

Andmebaasi võimalusi kasutaval rakendusel lisandub keerukusena juurde muidugi andmebaasi enese installimine ning selle ühendamine rakendusega, nii et keerukustest päriselt ei pääse. Küll aga on lihtsamateks juhtudeks olemas ka koos rakendusprogrammiga mälus töötavad väikesed andmebaasihaldussüsteemid ehk –mootorid, mis keerukamat paigaldust ei nõua. Ning suuremate rakenduste juures ei moodusta jällegi andmebaasi paigaldamine liialt suurt osa töömahust. Lisaks on enamike andmebaasimootorite vaikeseades paigaldamine suhteliselt hõlpsaks tehtud nii, et mõõdukate andmehulkade juures võib sealtkaudu sobiva lahenduse leida. Kui aga tahta pakutavast riistvarast viimast võtta ning haldusepool hästi paindlikuks teha, siis tuleb loomulikult andmebaasipoole hingeellu sügavamalt süüvida.

Enamikes tänapäeva veebirakendustes kasutatakse andmete hoiukohana andmebaase – ka siis kui andmete hulk ja keerukus kuigi suured ei ole. Veebis tuleb peaaegu alati arvestada võimaliku mitme üheaegse kasutajaga ning andmebaaside juures on sobivate kohtade ajutine lukustamine lihtsam kui failide juures. Hajusrakendustena töötavates pilvesüsteemides paistavad programmeerijale andmed ka sageli andmebaasitabelitena – ehkki seal võib olla mõningaid lisapiiranguid selle tarbeks, et andmed mugavamalt pilvesüsteemi sobituksid.

### B.2.2.4 Andmebaasihaldussüsteemi komponendid

::: warning

Anda lühiinfot andmebaasi haldussüsteemide komponentide: päringukeele, aruandegeneraator, ihaldusvahendite, paralleeltöö halduse (concurrency control), transaktsioonide halduse, varundus- ja taastevahendite kohta.

:::

Andmebaasihaldussüsteemi komponendid - päringukeel, raportigeneraator, administreerimisvahendid, üheaegse juurdepääsu kontroll, transaktsioonihaldus, varundamise ja taastamise vahendid - on olemas enamikel andmebaasimootoritel. Mõned võivad puududa või olla lahendatud muude toimingute kaudu. Samuti on keerukamatel süsteemidesl olemas hulga lisavahendeid, mille abil püütakse konkurentidest etemad olla.

Päringukeele abil suhtleb väline rakendus andmebaasiga, andes teada, mida soovitakse ning püüdes kinni vastuseid. Päringukeel võimaldab andmebaasi esialgu ka ilma rakenduseta testida, et siis hiljem samad käsklused rakenduse kaudu tööle panna.

Raportigeneraator aitab andmetest mugavalt kokkuvõtteid teha ja neid vormistada. Lihtsamatel süsteemidel puudub ning tuleb midagi sarnast vajadusel rakenduse sees programmeerida.

Administreerimisvahendid võivad piirduda päringukeele abil antavate õiguste jagamise ja äravõtmise korraldustega. Samas võib selle tarbeks olla ehitatud mitmekülgne graafiline haldusliides – olgu siis andmebaasiprogrammi enese osana või eraldi rakendusena. Haldusliidese üheks ülesandeks on ka üheaegse kasutuse transaktsioonide haldus – kui mõned neist on mingil tingimusel rippuma jäänud, siis peaks saama administraator määrata mis neist edasi saab – millised katkestada ja algolekusse tagasi viia, millistel lubada edasi toimetada.

### B.2.2.5 Andmebaasi kasutaja, koostaja, programmeerija ja administraatori rollid

::: warning

Kirjeldada andmebaasi administraatori, projekteerija /programmeerija, kasutaja rolle.

:::

Andmebaasi kasutaja pärib, muudab ja täiendab andmeid nii nagu tema töö juures vajalik ning õigused lubavad. Koostaja/disaineri ülesandeks on välja mõelda ja valmis teha andmetabelite ja juurdekuuluvate abivahendite ning õiguste struktuur ja süsteem kasutuskõlblikuks muuta. Programmeerija aitab sealjuures vajalike koodilõikude loomisega enamasti salvestatud protseduuride juures. Administraatori/haldaja ülesandeks on hoolitseda, et teised osalised sobivalt oma tööd teha saaksid, neil oleks parasjagu õigusi ja ressursse.

### B.2.2.6 Kordamisküsimused

::: tip

1. Miks võiks andmehalduse seisukohalt kasulik olla lukustus üksikutele failiosadele?

- suurendab faili kopeerimise kiirust
- võimaldab faili paremini jagada kettasektorite vahel
- võimaldab kindlamat üheaegset failikasutust X
- suurendab üksikute baitide kirjutamise kiirust

2. Miks on andmehalduse seisukohalt kasulikud indeksid?

- suurendab andmete kopeerimise kiirust
- võimaldab kergemini kätte saada binaarandmeid
- aitab soovitud tunnuse järgi kiiremini otsida X
- võimaldab kindlamat üheaegset failikirjutust

::: warning

## B.2.3 Andmete modelleerimine

Selle alateema materjale läbi töötades saad teadmised tegelike andmete kohandamisest andmebaasi jaoks piisavalt formaliseeritud ja töödeldavale kujule.

### B.2.3.1 Andmete abstraktsioon ja vaatetasemed

::: warning

Defineerida andmete abstraheerimine ja selgitada vahet füüsilise taseme, kontseptuaalse (loogilise ) ja vaate (kasutaja) tasemel.

:::

**Abstraktse andmetüübi** all mõistetakse andmehulkade määratlusi ja nende andmetega teostatavate operatsioonide hulka. Andmetüüp on abstraktne, kuni ta pole seotud mingi konkreetse rakendusega, mis neid andmeid kasutab.

Andmete haldusprobleemid võib jagada kolmeks: salvestamine, modelleerimine ja juurdepääsemine. Juhtimise keerukust võib vähendada vaadeldes neid erinevaid aspekte eraldi. Selle eesmärgi saavutamiseks on kolmemõõtmeline mudel, mis eraldab füüsilise vaate, loogilise vaate ja kasutaja vaate saavutanud üldise tunnustuse.

**Füüsiline vaade** \_physical level_t egeleb andmete salvestamise viisidega. Seda võib lihtsalt saavutada, delegeerides selle ülesande operatsioonisüsteemi failihaldussüsteemile või otsese ja optimaalse kettaseadmete haldusega.

**Loogiline vaade** _conceptual level_ käsitleb, kuidas informatsioon struktureeritakse, defineerides seosed andmete vahel.

**Kasutaja vaade** _view level_ käsitleb kasutajate juurdepääsu infole nii võimalike operatsioonide kui ka kasutajale kuvatava info struktuuri kontekstis. Lihtsamate rakenduste puhul võib see suuresti sarnaneda loogilisele vaatele, kuid kasutajamugavuse huvides saab kasutajavaadet vajadust mööda kohandada.

Nimetatud kolm vaadet on üksteisest sõltumatud ja võivad olla hallatavad erinevate isikute või subjektide poolt, muutes sellise käsitluse suhteliselt efektiivseks. Füüsiline vaade, näiteks on hallatav ABHS poolt ja kuulub seetõttu ABHS projekteerijate vastutusvaldkonda. Iga ABHS teostus põhineb igal konkreetsel juhul kompromissil teostuskiiruse, maksumuse ja stabiilsuse vahel. Loogilise ja kasutaja vaate teostus on otsustamise seisukohalt rohkem standardne, võimaldades andmebaasi projekteerijatel struktureerida andmebaasi vastavalt aja ja rakenduse nõuetele.

**Lisamaterjal abstraktsete andmete kohta:** http://en.wikipedia.org/wiki/Abstract_data_types (artikkel wikipedias).

### B.2.3.2 Andmemudelite grupid

::: warning

Näidata erinevusi andmemudelitel: objektipõhise loogilise mudeli, kirjepõhise loogilise mudeli ja füüsilise andmemudeli vahel.

:::

Levinumad andmemudelite grupid on objektipõhine loogiline mudel, kirjepõhine loogiline mudel ja füüsiline andmemudel

Andmehalduses on kasutusel erinevaid mudeleid, mis erinevad üldistuse (abstraktsiooni) poolest alates füüsilistest andmetest kirjete mudeli suunas kuni objektimudelini.

Füüsilised mudelid on piiratud andmete füüsilise esitluse arvesse võtmisega. Füüsiline andmemudel tegeleb andmete projekteerimisega, mis arvestab konkreetse keskkonna (andmebaasiprogrammi arvuti) ja andmebaasihaldussüsteemi enda võimalustega.

Kirjetel põhinevad kirjemudelid kasutavad tavalist arhiveerimise praktikat, salvestades informatsiooni failides, mis koosneb kirjetest.

Objektidega seotud suurem üldistustase põhineb sõltuvusseostega seotud andmeobjektide (ühikute) eristamisel.

**Lisamaterjal andmemudelite ja andmete modelleerimise kohta:** http://en.wikipedia.org/wiki/Data\_modeling

### B.2.3.3 Kirjepõhiste hierarhilise andmemudeli ning võrkmudeli kirjeldus

::: warning

Kirjeldada kirjepõhise loogilise mudeli põhimõtet nt hierarhilise või võrkmudeli abil.

:::

**Kirjepõhine** loogiline mudel on sarnasem arhiveerimistegevusele, mida kasutati enne arvutiseerimise ajajärku. Võrreldes ER mudeliga, on kirje samaväärne olemiga, mis tagab, et ta esindab sama objektiga seotud informatsioonigruppi. Kui ER mudelis seda informatsioonigruppi kutsutakse atribuudiks (omaduseks), siis siin on tema nimi **andmeväli** _field_ erinevus on filosoofiline, kuna ER mudel teeb üldistuse defineerides olemi ja atribuudid.

Teine erinevus on viisis, kuidas suhteid (seoseid) defineeritakse ja hallatakse.

Esimene mudel on **hierarhiline andmemudel** , milles suhted on hierarhilised. Neid suhteid realiseeritakse viitade kaudu. Näiteks kirjes, mis defineerib töötaja on viide kirjete ahelale, mis sisaldab andmeid selle töötaja palgapaketist (või töötasustamise tingimustest), millises omakorda on viide väljamaksetele.

Selline skemaatiline lähenemisviis on jäik vaatamata oma lihtsusele, kuna sisemised piirangud tulenevad lihtsusest.

Võrgupõhine andmemudel, mis sisaldab paljude kirjete hulgas palju ristviiteid, loob tegeliku võrgustiku, mis on sarnane lingitud veebilehtedele, on veidi väiksema jäikusega. Võrgumudeli piiranguks või probleemiks on andmete uuendamisel uuendamist vajavad ristviidete haldamise raskused. Ilmselgelt tasakaalustab seda piirangut mitmete ristviidete suurem paindlikkus, mis omakorda võimaldab palju kiiremat kirjetevahelist navigeerimist, kui hierarhiline mudel.

Enamate mudelite olemasolu on põhjustanud erinevate nimede kasutamist sarnastele, kuid mitte identsetele põhimõtetele: seetõttu on võimalik kohata ABHS tooteid, milliseid endiselt kutsuvad ridasid kirjeteks, veergusid (või veergude ja ridade ristumiskohti) väljadeks ja üht unikaalset tunnust primaarvõtmeks (kasutatakse samu termineid, mis olem-seos mudeli korral).

### B.2.3.4 Objektipõhine loogiline mudel

::: warning

Kirjeldada objektipõhise loogilise mudeli põhimõtet nt olem-relatsioonmudeli või objektorienteeritud mudeli abil.

:::

Objektipõhised loogilise mudelid: olemi-seosemudel, objektorienteeritud mudel

Esimene objektidega seotud mudel sai nimeks olemi-seosemudel või **objekti-seosemudel** _entity/relationship (E/R) model_ Mudel algab objekti (olemi, andmeühiku) määratlusega. Näiteks personalihalduse kontekstis oleks objektiks või andmeühikuks töötaja. Objektide gruppi (ettevõtte töötajad) nimetatakse **objektide hulgaks** (või andmeühikute hulgaks _entity set_. Igat objekti iseloomustavad atribuudid ehk omadused _attributes_, millised teda kirjeldavad. Töötaja omaduseks (atribuudiks) on näiteks tema töölevõtmise kuupäev.

Konkreetse objektide või andmeühikute eristamiseks hulgas kasutatakse **võtit** , milleks on on üks objekti omadus. On olemas erinevaid võtmeid, kuid kõikide nende ülesandeks on objekti unikaalne eristamine objektide hulga sees.

Esimene võtmetüüp on nn. **supervõti** _(superkey)._ Supervõti koosneb mitmest omadusest, mis muudab ta ülikülluslikuks, arvestades tema eesmärki. Supervõtme näiteks võiks olla omadustegrupist "kontonumber", "büroo nimetus" ja "sugu" koosnev võti. Kuna isiku kontonumber iseenesest on piisav isiku määratlemiseks, siis selline võti ongi ülikülluslik.

Võtme, mis võimaldab objekti üheselt määratleda ilma omaduste ülemäärase kasutamiseta, võib supervõtmest eraldada ja ta muutub **primaarvõtme** _(primary key)_ **kandidaatvõtmeks** *(candidate key).*Ülaltoodud näites toodud kontonumber oleks hea kandidaatvõtme näide. Kui kandidaatvõtmeid on rohkem, kui üks, siis valitakse neist üks primaarvõtmeks. Töötaja näitel konstrueeritakse primaarvõti hoopis omadusest "töötaja number", sest ettevõtte sees on see omadus nagunii unikaalne ja iseloomustab töötajat rohkem, kui kontonumber, milline on aga parim primaarvõti pangaklientide eristamiseks.

**Seos** , suhe või sõltuvus on link, mis loob loogilise seose objektide või objektide hulkade vahel. Näiteks on ettevõttes olemas seos töötajate hulga ja nende töötasupakettide vahel. Igat suhet kirjeldatakse omaduste grupiga. Eeltoodud näite puhul võib töötasupaketi ja töötaja vahelise seose omadusteks olla töötaja number, kuu number ja aasta number. Kaks seosega lingitud omadust võivad olla eritasandilised, näiteks üks on valitsev _(dominant)\_ja teine alluv _(subordinate)\__._ Toodud näitest on töötaja number valitsev, sest ei saa maksta palka, kui pole töötajat. On muidugi ka vastupidine võimalik, sest töötasu palga näol ei maksta reeglina enne, kui töötaja on kuu aega töötanud.

**Kardinaalsus** on seose või suhte oluline omadus ja ta määratleb, milline on seotud andmeväljade vastavus. Suhe töötaja ja töötasupaketi vahel on „üks-mitmega" tüüpi, mis näitab, et üldisele töötajale vastab mitu töötasupaketti. Suhe, mis seob töötasupaketi suhtelise väljamaksega on „üks-ühene" seos, mis näitab, et töötasupakett peab vastama ühele ja ainult ühele väljamaksele (konkreetse isiku palgasumma).

Eraldi peaks vaatama **„nõrku olemeid"** _weak entities_ või olemeid, millistel puudub oma primaarvõti. Selliste olemite näiteks võib tuua pangadeposiidi, mille atribuudid on kogus (summa) ja kuupäev/kellaeg ehk ajatempel _timestamp_ Pole võimalik määratleda primaarvõtit, kuna erinevad inimesed võivad teha samasuure hoiuse samal ajahetkel. Õigemini see olem omab mitu-ühega sõltuvust koos olemiga, mis kajastab pangkonto numbrit, millisele hoius paigutati, mis omakorda on konto primaarvõtmeks. Hoiuse primaarvõti koostataksegi atribuutidest hoiuse ajatempel ja olemi "konto" kontonumber.

Olemi-seosemudel on esimene ja kõige laialdasemalt kasutatav mudel, kuid ta pole ainuke loogiline mudel, sest objektorienteeritud keelte pealetungiga on ka objektorienteeritud andmebaasid _object-oriented databases_ OODB, vastav eestikeelne lühend võiks olla OOAB)) laialt levinud. OOAB mõiste on tuletatud kasutades objektorienteeritud programmeerimise põhimõtteid koos andmete haldamise ja salvestamise võimega. OOAB kasutatakse andmehalduses keerukamate andmestruktuuride korral, kus ei piisa ainult omaduste loetelude haldusest, vaid kus on vaja sooritada **salvestatud andmetega seotud tegevusi** või toiminguid.

OOAB üldpõhimõtted on samad, mis objektorienteeritud programmeerimisel:

- abstraktsioon ehk üldistus - omadus kirjeldada objektide funktsionaalseid külgi ja vältida tähelepanu pööramist detailide sisemisele teostusele
- kapseldus _encapsulation_ või võime eraldada välised aspektid (funktsionaalsus) sisemisest esitlusest, kuna see pole ülemiste rakenduse kihtide seisukohalt oluline, on ta maskeeritud.

Mõlemad toodud aspektid võimaldavad selgitada (kasutada) abstraktse andmetüübi _abstract data types_ (ADT) mõistet.

Objekte iseloomustavad atribuudid (andmed) ja tegevused (kuidas objekte on võimalik manipuleerida). Näiteks "tekst" tüüpi objektil on võimalik defineerida teksti lisamise operatsioon tekstide liitmise teel või mingi lõigu otsimine sellest tekstist. Sarnaselt olemite või olemite hulkadega, võib objekt kuuluda objektide **klassi**. On samuti võimalik määratleda, et objektid on ainsad klassi **eksemplarid** (või **esindajad** ), mis esindavad mingit tuntud rakendust. Igal objektil on oma **tunnus** OID _object identifier_, mis on unikaalne kogu süsteemi ulatuses ja mis kujutab endast viidet objektile enesele.

### 2.3.5 Kordamisküsimused

::: tip Kordamisküsimused

1. Milline neist võiks olla tüüpiline üks-mitmele seos?
   – Heinakoorma mass
   – Inimeste turismireiside sihtkohad

- Inimeste sünnilinnad X
  – Inimese isikukood

2. Andmete kontseptuaalne tase on seotud põhiliselt
   – kõvaketta sektoritega
   – failisüsteemiga
   – andmebaasi struktuuriga X
   – kasutaja vaatega

:::

## B.2.4 Relatsiooniline mudel

Selle alateema materjale läbi töötades õpid tundma levinuimaks saanud andmemudeli peamisi koostisosi, põhimõisteid ning andmete viimist andmebaasitöötluseks sobilikule relatsioonilisele kujule.

### B.2.4.1 Mudeli paindlikkus, skaleeruvus ning liiasuste puudumine

::: warning

Tuua välja relatsioonilise mudeli eelised, nagu mitteliiasus, paindlikkus, skaleeritavus.

:::

Parim mudel, või vähemalt kõige edukam/levinum, on **relatsiooniline** , millises kirjed on asendatud **ridadega** , grupeeritud **tabelitesse** , millised omavahel on seotud ridade sisu osadega ridades endis. See, mida kutsutakse olemiks ER mudelis on rida relatsioonilises mudelis ja tabel relatsioonilises tabelis vastab olemite hulgale (grupile) ER mudelis. Relatsioonilise mudeli **veerud** vastavad ER mudeli atribuutidele. Terminit **seos\*\*** (suhe)\*\* kasutatakse mõlema mudeli puhul näitamaks, kuidas olemid/read ja/või olemite grupid/tabelid on omavahel seotud. Ka suhete loomise viis on sarnane, kuna kasutatakse atribuute/veerge nagu tavaliselt kahe tabeli puhul.

**Identifikaatoreid** defineeritakse nii rea üheseks identifitseerimiseks tabelis, kui ka otsingute kiirendamiseks. Indeks on sarnane ER mudeli võtmele, kuna **unikaalsed** identifikaatorid (tunnus) on võrdväärsed **kandidaatvõtmega**. Võivad olemas olla ka **mitteunikaalsed** tunnused ja nendel pole vastet ER mudelis, kus neid ei kasutata (pole olemas). Mitteunikaalsed tunnused tulenevad mitte sisu kaalutlustest vaid pigem jõudluse kaalutlustest, mis peaksid teoreetiliselt piirduma füüsilise tasandi teostamisega, kuid neid saab efektiivselt defineerida ainult andmete loogilist struktuuri teades.

Enne relatsioonmudeli uurimist on kasulik kokku võtta erinevad liigitused. On kaks relatsiooniliste andmebaasidega seotud fundamentaalset aspekti (põhiseisukohta): formaalne teooria ja mitmesugused praktilised rakendused.

Kuigi need kaks aspekti langevad kokku, lahknevad nad liigituselt nagu on näidatud järgnevas tabelis:

| E/R Mudel          | Formaalne teooria | Praktiline rakendus |
| ------------------ | ----------------- | ------------------- |
| Olemite hulk       | Suhe (!)          | Tabel               |
| Olem               | Korteež _Tuple_   | Rida (kirje)        |
| Attribuut          | Attribuut         | Veerg (väli)        |
|                    | Kandidaatvõti     | Unikaalne indeks    |
| Haldusala _Domain_ | Lubatav väärtus   |

Relatsiooniline andmebaas koosneb tabelitest, millistest igaüks esindab "subjektide" rühmaga seotud informatsiooni, näiteks firma klient (ostja). Tabel koosneb ridadest, millistest igaüks sisaldab informatsiooni, mis on seoses täpselt defineeritud subjektiga, näiteks konkreetne ostja. Tabel koosneb ka veergudest, mis esindavad mitmesugust ühetüübilist informatsiooni (ärinimi , rahaline kood, ...) subjektide kohta. Unikaalnet indeksit (samuti tuntud, kui primaarvõti ehk esmane võti) kasutatakse spetsiifiline rea eristamiseks tabeli sees. Kaks tabelit võivad olla teineteisega seotud mõlemas tabelis eksisteerivate sama sisuga veergude kaudu, näiteks tabel "ostja" ja "arve" võivad omada suhet läbi veeru, mis sisaldab ostja koodi, kuna need andmed on olemas mõlemas tabelis.

Hästi projekteeritud relatsioonilisel andmebaasil on rida olulisi ja kasulikke tunnuseid:

- **Puudub andmete liiasus**. See tähendab, et andmebaasis olemasolevaid andmeid ei saa tuletada sama andmebaasi muude andmete ühendamise või kombineerimise teel. Liiasuse näiteks on veerud või read korduvate andmetega. On mitmesuguseid tehnikaid ja samme liiasuse kaotamiseks ja neid vaadeldakse lähemalt "normaalkujude" lõigus. Ilmselgelt võivad eksisteerida soovitud või vajalikud dubleerimised, aga need on seotud andmebaasi varundamise või RAID-süsteemis salvestamisega. Selline dubleerimine ei puuduta loogilist taset vaid sõltumata sellest, kuidas see on tekitatud, on see seotud füüsilise tasandiga.
- **Vähendatud dubleerimine**. Teatud dubleerimise tase on vajalik suhete ehk seoste loomiseks. Heaks näiteks on ostja koodi veeru olemasolu tabelis nagu ülaltoodud näites: see on olemas nii ostjate tabelis, eristamaks üht rida teisest kui ka arvete tabelis, osutamaks millisele ostjale iga arve on esitatud.
- **Viiteline terviklus**. Peab olema võimatu kustutada informatsiooni, mis on vajalik teise informatsiooni kvalifitseerimiseks. Kasutades jälle eelmist näidet viiteline terviklus väldib ostja kustutamist, kellele arve on välja kirjutatud, vältimaks arveid olematutele ostjatele. Viiteline terviklus võib töötada ka pööratud viisil, tühistades kõik arved konkreetsele ostjale, kui ostja ennast on tühistanud (tavaliselt kirjeldatud juhtum ei ole teostatav olemasoleva seaduse tõttu, mis keelab aruandluse andmete tühistamise).
- **Andmete uuringu suur kiirus** , mis saadakse indeksite defineerimisega. Mitte ainult unikaalne indeks (või unikaalne võti) pole kasulik otsingute kiiruse suurendamiseks, vaid ka mitteunikaalne indeks on kasulik kiirendamaks otsinguid. Mitteunikaalse indeksi näiteks on indeks, mis on loodud näiteks firma juhataja perekonnanime abil: see ei ole unikaalne kuna erinevad juhatajad võivad omada sama perekonnanime. Vaatamata sellele lubab see indeks firma andmete kiiret leidmist, kui ainult juhataja perekonnanimi on teada.

### B.2.4.2 Tähtsamad relatsioonilise mudeli terminid: relatsioon, võti, primaarvõti, alternatiivne võti, võõrvõti, viiteterviklus

::: warning

Kirjeldada relatsioonilise mudeli olulisi mõisteid: relatsioon, võti, primaarvõti, alternatiivvõti, välisvõti, viidete terviklus (referential integrity).

:::

Relatsioon – seoste kogum, andmetabel. Ametlikuma definitsiooni järgi on **relatsioon** samade atribuutidega olemieksemplaride ja nende atribuutide hulk. Baasrelatsioon on relatsioon, mille kirjed on füüsiliselt andmebaasi salvestatud. Vaade e. virtuaalne relatsioon on ühe või mitme baasrelatsioonile rakendatud relatsioonilise operatsiooni tulemus, mille tulemuseks on samuti relatsioon. Selle relatsiooni kirjed pole andmebaasi salvestatud vaid vaate abil kasutaja jaoks dünaamiliselt konstrueeritud.

**Kandidaatvõti** (ka võtmekandidaat) (ingl. k. candidate key) on supervõti, mille alamhulk ei ole korrektne supervõti. See tähendab, et kandidaatvõtmest ei saa enam ühtegi atribuuti eemaldada, ilma et ta kaotaks unikaalsuse. Relatsioonil võib olla mitu kandidaatvõtit. Kandidaatvõtme omadused on:

- unikaalsus - iga kandidaatvõtme väärtus identifitseerib üheselt ühe relatsiooni kirje
- täielikkus - kandidaatvõtmest ei saa eemaldada atribuute, ilma et ta kaotaks unikaalsuse omaduse.

**Primaarvõti** (ka esmasvõti) (ingl. k. primary key) on kandidaatvõti, mis on valitud relatsiooni kirjeid unikaalselt identifitseerima. Primaarvõti on võti, mis üheselt identifitseerib ühe kirje. Valiku kriteeriumid:

- atribuudi domeen (peaks olema võimalikult lühike väärtus)
- atribuutide arv (peaks olema võimalikult vähe atribuute)
- tulevane unikaalsuse tõenäosus (peaks sisaldama unikaalseid väärtuseid nii praegu kui ka tulevikus).

**Alternatiivseteks võtmeteks** (ingl. k. alternate key) nimetatakse primaarvõtmeks mitte valitud kandidaatvõtmeid.

**Supervõti** (ingl. k. superkey) on atribuut või atribuutide kombinatsioon, mis identifitseerib unikaalselt relatsioonis olevaid kirjeid. Supervõti võib sisaldada atribuute, mida pole unikaalsuse tagamiseks vajalikud, st. et temast võib atribuute eemaldada ja ta tagab ikkagi unikaalsuse.

**Intelligentne võti** ehk sisulise tähendusega (informatiivne) võti (ingl. k. intelligent key). Sisulise tähendusega võti on küll unikaalne, kuid selle väärtus omab kasutaja jaoks tähendust, näiteks isikukood.

**Võõrvõti** (välisvõti, foreign key) näitab teisele relatsioonile, aitab tagada viiteterviklust (näide ja seletus eelmises peatükis). Võimaldab siduda relatsioone/kirjeid üksteisega kokku.

**Lisamaterjalid:**

Priit Raspli konspekt

[http://enos.itcollege.ee/~priit/AB-d%20ja%20infos%FCsteemid/L04.Relatsiooniline%20mudel.doc](http://enos.itcollege.ee/~priit/AB-d%20ja%20infos%FCsteemid/L04.Relatsiooniline%20mudel.doc)

Eero Ringmäe konspekt

[http://ringmae.com/materjal/IDU3381_AB_Eksam.doc](http://ringmae.com/materjal/IDU3381_AB_Eksam.doc)

### B.2.4.3 Näide andmete normaliseerimiseks esimesele, teisele ja kolmandale normaalkujule

::: warning

Selgitada lihtsate näidete varal 1. 2. ja 3. normaalkujule viimist.

:::

Vältimaks andmete liiasust, võib kasutada protsessi, mis püüab muuta andmebaasi struktuuri, sundides tabelit läbima kolme järjestikust **normaalkuju**.

**Esimene normaalkuju (1NF)**: öeldakse, et tabel on esimesel normaalkujul, kui see kirjeldab ühte olemit ja ei sisalda vektoreid või korduvaid atribuute.
Vaatleme näiteks tabelit, mis sisaldab ühe kursuse tundide andmeid. Iga tunni rea jaoks on kood, õpetaja ja õpilase andmed. See tabel ei ole esimesel normaalkujul, kuna õpilase andmed on vektor, mis vastab tunnile.

| Ainekood | Aine        | Õpetaja | Õpilase kood | Õpilase perekonnanimi | Õpilase nimi |
| -------- | ----------- | ------- | ------------ | --------------------- | ------------ |
| A01      | Kavandamine | Lind    | S01          | Rooväli               | Marek        |
|          |             |         | S02          | Peterson              | Maria        |
|          |             |         | S03          | Martson               | Ella         |
| A02      | Loomine     | Sepp    | S02          | Peterson              | Maria        |
|          |             |         | S03          | Martson               | Ella         |

Täpsem olles, on iga tund seotud rohkem kui ühe õpilasega ja see on väljendatud öeldes, et on olemas õpilaste vektor (rühm õpilasi) igas tunnis. Selle tabeli esimesele normaalkujule viimiseks on vaja lahutada õpilaste andmed ja tunnid, luues uue õpilaste tabeli. Tundide tabelis on niipalju ridu, kui on erinevaid tunde, ainete nimekirja kantud õpilaste tabelis on niipalju ridu, kui sellele ainele on õpilasi registreerunud ja iga õpilane peaks seal esindatud olema rohkem kui üks kord. Selles tabelis peaks olema ka täiendav veerg tunni koodiga, millele õpilane on end registreerinud.

| Tunnid      |
| ----------- |
| Aine        | Õpetaja |
| Kavandamine | Lind |
| Loomine     | Sepp |

| Registreerunud õpilased |
| ----------------------- |
| Ainekood                | Õpilase kood | Õpilase perenimi | Õpilase eesnimi |
| A01                     | S01 | Rooväli | Marek |
| A01                     | S02 | Peterson | Maria |
| A01                     | S03 | Martson | Ella |
| A02                     | S02 | Peterson | Maria |
| A02                     | S03 | Martson | Ella |

**Teine normaalkuju (2 NF):** tabel on teisel normaalkujul, kui ta on esimesel normaalkujul ja kõik atribuudid sõltuvad ainult primaarvõtmest.
Vaadates eelmist tabelit "Registreerunud õpilased", peaks primaarvõti, mis on vajalik eristamaks ridu üksteisest, koosnema ainekoodist + õpilase koodist. Võib märgata, et õpilase eesnimi ja perekonnanimi sõltuvad ainult õpilase koodist ja mitte kogu primaarvõtmest.

Viimaks tabelit teisele normaalkujule, peame välja võtma andmed, mis ei ole täielikult sõltuvad primaarvõtmest ja lisama need andmed uude tabelisse "õpilased". Tasub tähele panna, et informatsiooni kaotust ei teki, kuna veerg õpilase kood on olemas mõlemas tabelis ja lubab nende tabelite vastastikust suhet.

| Registreerunud õpilased |              | Õpilased |
| ----------------------- | ------------ | -------- |
| Ainekood                | Õpilase kood |          | Õpilase kood | Õpilase perenimi | Õpilase eesnimi |
| A01                     | S01          |          | S01 | Rooväli | Marek |
| A01                     | S02          |          | S02 | Peterson | Maria |
| A01                     | S03          |          | S03 | Martson | Ella |
| A02                     | S02          |          |  |  |  |
| A02                     | S03          |          |  |  |  |

**Kolmas normaalkuju (3 NF)**: tabel on kolmandal normaalkujul, kui ta on teisel normaalkujul ja kõik tema atribuudid, mis pole seotud primaarvõtmega on üksteisest sõltumatud.

Vaadake õpilaste tabelit, mis sisaldavad isikuandmed nagu näiteks järgmine tabel.

| Õpilased |
| -------- |
| Kood     | Perenimi | Eesnimi | Sünniaeg | Vanus | Viimati uuendatud |
| S01      | Rooväli | Marek | 11.09.1955 | 50 | 12.11.2001 |
| S02      | Peterson | Maria | 01.02.1990 | 14 | 15.12.2004 |
| S03      | Martson | Ella | 09.06.1978 | 26 | 26.01.2005 |

Selles tabelis olevat vanust võib arvutada sünnikuupäeva kaudu ja seepärast on see informatsioon liiane, selle puuduse võib aga lihtsalt kõrvaldada viies õpilaste tabeli vastavusse kolmanda normaalkujuga.

| Tunnid   |
| -------- |
| Ainekood | Aine | Õpetaja | Istekohti ruumis | Vabu kohti |
| A01      | Kavandamine | Lind | 5 | 2 |
| A02      | Loomine | Sepp | 6 | 4 |

Mõnikord pole sõltuvust lihtne tuvastada. Vaatame "tunnid" tabelit, mis ka registreerib iga tunni võimaliku kohtade arvu. Vabade kohtade arvu võib arvutada, kui lahutada registreerunud õpilaste arv ruumi kohtade arvust. Veerg "Vabu kohti" tuleks tabelist kõrvaldada, et viia tabel vastavusse kolmanda normaalkujuga.

### B.2.4.4 Kordamisküsimused

::: tip Kordamisküsimused

1. Mida aitab viiteline terviklus?
   – Hoolitseb, et ei oleks korduvaid andmeid
   – Hoolitseb, et seotud andmetest ei saaks üht osa kogemata kustutada X
   – Hoolitseb, et igal real oleks primaarvõti
   – Piirab ühe kirje andmemahu kilobaitides

2. Milline neist on kolmandal normaalkujul olevate andmete eritunnus?
   – Ühel real olevad andmed ei sõltu üksteisest X
   – Ühes lahtris on üks väärtus
   – Ühte tabeli lahtrisse võib paigutada rohkem kui ühe väärtuse
   – Igas tabelis on rohkem kui üks primaarvõti

:::

## B.2.5 Päringukeeled

Selle alateema materjale läbi töötades õpid tundma mitmesuguste päringukeelte ülesehitust, võimalusi ning kasutuskohti.

### B.2.5.1 Protseduuriliste ja mitteprotseduuriliste päringukeelte eristamine

::: warning

Tuua välja vahe protesuursete ja mitteprotseduursete keelte vahel.

:::

Andmebaaside päringkeelte areng algas relatsioonalgebraga ja jõudis **struktureeritud päringukeeleni** _( **Structured Query Language - SQL** )._ Relatsioonalgebra on protsessidega seotud protseduurkeel: võib olla vajalik teostada rohkem järjestatud tegevusi soovitava tulemuse saamiseks nagu näidatud järgnevate näidetega paaril leheküljel. SQL on peamiselt **mitteprotseduuriline** keel: iga korraldus annab tulemuseks soovitud väljundi. Kuidas vastava väljundini jõutakse, see jääb suurelt jaolt andmebaasimootori ülesandeks. See kehtib eriti tõlgendatud SQL kohta, millist kasutavad andmebaaside administraatorid, kuid keeles on konstruktsioone, millised saab kasutada ainult programmeerimiskeele kaudu ja mis võimaldavad kasutada teatud protseduure, mis on olemas ainult standardse SQL sisemises määratluses ehk spetsifikatsioonis (põhiliselt on need käsurea korraldused).

### B.2.5.2 Relatsioonalgebra põhioperatsioonid

::: warning

Kirjeldada põhilisi relatsioonalgebra tehteid: valik (select), projektsioon (project), ümbernimetamine (rename), otsekorrutis (cartesian product), ühend (union), konjunktsioon (join), vahe (set difference).

:::

Et tõhusalt mõista andmete otsimist, on kasulik alustada relatsioonalgebra mõistetest, uurides tema võimalikke tehteid.

- Kahe tabeli **ühend** (_union_)_._ See on ridade hulk (komplekt), mis pärineb vähemalt ühest kahe tabelilisest komplektist. Seda võib mõista, kui tabelit, mis on kokku pandud kahe tabeli erinevatest veergudest.
- Kahe tabeli vahe ehk **erinevus** (_difference_)_._ Eeldades, et kahes tabelis on samad veerud, on see ridade hulk (komplekt), mis on olemas esimeses ja puuduvad teises tabelis.
- **Otsekorrutis** (Descartes&#39;i korrutis, karteesiakorrutis) on ridade hulk (komplekt), mis saadakse asetades kõrvuti ükshaaval iga rea esimesest tabelist ridadega teisest tabelist. Näide kahe alloleva tabeli otsekorrutisest on toodud allolevas teises tabelis. Ehk siis tegemist kõikvõimalike kombinatsioonidega kahe tabeli ridade vahel.

| Kasutajad       |          | Oppeained |
| --------------- | -------- | --------- |
| **Tudengikood** | **Nimi** | \*\* \*\* | **Aine** | **Tudeng** |
| A01             | Marek    |           | Ajalugu | A01 |
| A02             | Maria    |           | Ajalugu | A03 |
| A03             | Ella     |           | Geograafia | A01 |
|                 |          |           | Geograafia | A02 |

| Otsekorrutis: Kasutajad ja Oppeained |
| ------------------------------------ |
| **Tudengikood**                      | **Nimi** | **Aine** | **Tudeng** |
| A01                                  | Marek | Ajalugu | A01 |
| A01                                  | Marek | Ajalugu | A03 |
| A01                                  | Marek | Geograafia | A01 |
| A01                                  | Marek | Geograafia | A02 |
| A02                                  | Maria | Ajalugu | A01 |
| A02                                  | Maria | Ajalugu | A03 |
| A02                                  | Maria | Geograafia | A01 |
| A02                                  | Maria | Geograafia | A02 |
| A03                                  | Ella | Ajalugu | A01 |
| A03                                  | Ella | Ajalugu | A03 |
| A03                                  | Ella | Geograafia | A01 |
| A03                                  | Ella | Geograafia | A02 |

- **Valik tabelist**. See on ridade hulk (komplekt) tabelist, mis rahuldab tingimuste seeriaid, mis on näha valikust endast. Eelmises tabelis on halli taustaga esile toodud read, mis rahuldavad tingimust " Tudengikood " Kasutajate tabelist vastab " Tudeng " Oppeined tabelis. Need read on kopeeritud järgmisse tabelisse.

| Valik otsekorrutisest |
| --------------------- |
| **Tudengikood**       | **Nimi** | **Aine** | **Tudeng** |
| A01                   | Marek | Ajalugu | A01 |
| A01                   | Marek | Geograafia | A01 |
| A02                   | Maria | Geograafia | A02 |
| A03                   | Ella | Ajalugu | A03 |

- **Projektsioon**. Projektsioon esindab veergude alamhulka, saadakse otsekorrutisest kõrvaldades veergude mitmekordse esinemise (või ebamäärased atribuudid), seega kõrvaldatakse mitu korda esinevad veerud ja kustutatakse soovimatu informatsiooniga veerud. Eelmises näites esitab " tudeng " veerg sama informatsiooni, mis " Tudengikood " veerg ja ei jää seetõttu alles projektsiooni tehte tulemusena.

| Projektsioon    |
| --------------- |
| **Tudengikood** | **Nimi** | **Aine** |
| A01             | Marek | Ajalugu |
| A01             | Marek | Geograafia |
| A02             | Maria | Geograafia |
| A03             | Ella | Ajalugu |

- **Konjunktsioon** ehk **Seotus** (liitumine, ühendamine – _join_). Liitumistehe on põhimõtteliselt otsekorrutis koos järgneva valikuga. Kui valik sisaldab ainult võrdseid tingimusi, siis on tehte nimi "ekvivalentne seos – _equi-join_". Ekvivalentse seose tulemus on eriline kahe tabeli vaheline liitumine. Kui sellele järgneb projektsioon, on sekke tehte nimeks "loomulik liitumine – natural join". Kaks viimast ülaltoodud näitest saadud tabelit on ekvivalentse seose ja loomuliku liitumise näited.

- **Ümbernimetamine**. Kasutatakse tabeli veergude ümbernimetamiseks. Näiteks "Tudengikood " veeru võib ümber nimetada "kood" veeruks.

| Ümbernimetamine |
| --------------- |
| **Kood**        | **Nimi** | **Aine** |
| A01             | Marek | Ajalugu |
| A01             | Marek | Geograafia |
| A02             | Maria | Geograafia |
| A03             | Ella | Ajalugu |

### B.2.5.3 Andmete määratluskeel (DDL) ja andmede manipuleerimiskeel (DML)

::: warning

Kirjeldada SQL keele komponente :andmete defineerimiskeel (DDL), andmete manipuleerimiskeel (DML), andmete juhtkeel (DCL).

:::

Liikudes relatsioonalgebra juurest SQL juurde peab tähele panema, et see keel sisaldab mitmeid sisemisi osi (komponente). Eriti olulised on:

- **Andmete defineerimiskeel** või **andmete määratluskeel** (_Data Definition Language – DDL_) on SQL osa, mis on mõeldud andmete defineerimiseks. Keel sisaldab korraldusi: _ **create** _– loo; _ **drop** _– pilla, kukuta, kaota ja **alter** – muuda. Need käsud võimaldavad tabelite, vaadete ja indeksite loomist, kõrvaldamist ja muutmist. Neid korraldusi tutvustame põgusalt järgmises lõigus.
- **Andmete manipuleerimiskeel** (_Data Manipulation Language - DML_) on SQL osa, mis on mõeldud andmete manipuleerimiseks. Keel sisaldab korraldusi **_insert_** - pane vahele, sisesta, lisa; **delete** - kustuta ja **update** - uuenda. Need käsud võimaldavad ridasid lisada, kustutada või muuta. Lisaks on korraldus **Select** – vali, mis võimaldab andmeid pärida.
- Toetavad korraldused on seotud turvalisuse ja kasutajate õigustega ( **grant** - andma, tagama; **revoke** - tühistama), andmetehingutega ( **commit** - soorita, teosta; **rollback** – keri tagasi; **rollforward** – keri edasi) või programmeerimiskeele korraldustega (tehted käsureal).

### 2.5.4 Andmete määratluskeele tähtsamad korraldused

::: warning

Aru saada SQL andmete defineerimiskeele käskude toimimisest nt. create, drop, alter table.

:::

Tabeli loomiskorraldus (create table) võimaldab luua tabelit ja lihtsustatud vorm on:

```sql
create table tname (colname coltype [not null], ...);
```

Siinjuures on kasutatud tähistusi:

`tname` - loodava tabeli nimi;
`colname` – veerunimi;
`coltype` – veeru andmetüüp;
`not null` – kui on lisatud, siis ei saa veerus olla tühja väärtust ja andmed tuleb sellesse veergu sisestada!

Mõned võimalikud andmetüübid on toodud järgnevas tabelis.

| **Tüüp**     | **Tähendus**                                                                                               |
| ------------ | ---------------------------------------------------------------------------------------------------------- |
| `integer`    | 32 bitine täisarv                                                                                          |
| `smallint`   | 16 bitine täisarv                                                                                          |
| `float`      | 64 bitine ujuvkomaga arv (12 tüvenumbrit)                                                                  |
| `smfloat`    | 32 bitine ujuvkomaga arv (7 tüvenumbrit)                                                                   |
| `char(n)`    | String (tekst) n sümbolist                                                                                 |
| `varchar(n)` | Muutuva pikkusega string (sümbolite suurim arv on n)                                                       |
| `date`       | Kuupäev (päevade arv peale 31 Dec. 1899) ( 01 Jaan 1900 on päev 1) (tuntud ka Juliuse kalendri kuupäevana) |

Tabeli loomise käsu juurde peab olema lisatud tabel nimi ja tabeli veergude nimekiri. Iga veeru jaoks on vajalik näidata andmetüüp ja osutama, kas vastav veerg võib või ei või olla jäetud tühjaks (omada null - väärtust).

**Null value** tähendab SQL puhul mitte väärtust "0" ( **zero value** ) vaid tühja, ilma sisuta välja! Programmeerimiskeeles on sellele sarnaseks vasteks tühiviit, tavaelus väärtuse mitteteadmine.

| Näited: |
| ------- |


```sql
create table tudengid (tkood integer not null, eesnimi char(10) not null, perenimi char(15) not null, synnipaev date);
```

Tabeli koos oma struktuuri ja sisuga tühistamiseks (kustutamiseks) võib kasutada korraldust:

```
drop table tname;
```

Kus

`tname` – kustutatava tabeli nimi.

```sql
Drop table tudengid;
```

Tabeli struktuuri muutmiseks võib kasutada järgmisi korraldusi:

```sql
alter table tname modify ( colname coltype [not null], ...);
alter table tname add ( colname coltype [not null], ...);
alter table tname delete ( colname, ...);
```

Kus tname, colname, not null tähendus on toodud ülalpool (tabeli loomine)

Esimene korraldus muudab veeru/veergude andmetüüpe. Andmetüüpide muutmine on alati võimalik, kui tabel on tühi, kuid võib osutuda võimatuks, kui tabelis on andmed.
Kas see on võimalik, või mitte see sõltub andmete "vahetatavusest": näiteks on alati võimalik muundada arv stringiks, aga vastupidine on võimalik ainult siis, kui string esindab arvu. Mõne teisendusega võib kaasneda andmete kaotus: näiteks stringi muutmine väiksema pikkusega stringiks või float tüüpi andmete muutmine smfloat tüüpi andmeteks.
Teine korralduste rida võimaldab veeru/veergude lisamist tabelisse: see võib osutuda võimatuks, kui tabel sisaldab andmeid ja lisatav veerg ei luba null väärtust (mõni SQL versioon lubab lisamiseks kasutada niinimetatud "vaikeväärtust" sellise probleemi lahendamiseks).
Kolmas korralduste rida võimaldab veeru tühistamist (kustutamist): kui see veerg sisaldab andmeid, kustutatakse nad samuti.

Näited:

```sql
alter table tudengid add (pikkus smallint);
alter table tudengid modify (pikkus float);
alter table tudengid delete (pikkus);
```

Järgmist korraldust kasutatakse indeksi loomiseks:

```sql
create [unique] index idxname on tname (colname, ...);
```

kus on kasutatud tähiseid

`unique` – kui kasutatud, tähendab, et indeks on unikaalne;
`idxname` – loodava indeksi nimi;
`tname` – tabelinimi;
`colname` – veerunimi.

On kasulik teada, et pole võimalik luua unikaalset indeksit tabelile, mis juba sisaldab andmeid, kui andmed ei vasta unikaalse indeksi loomusele.

Näited:

```sql
create unique index tudengiid on tudengid (tkood);_** |
create index tudenginimi on tudengid (perenimi, eesnimi);_** |
```

Järgmise korraldusega saab indeksi tühistada:

```sql
drop index idxname;
```

Kus `idxname` on kustutatava indeksi nimi.

Indeksi tühistamisel ei loe, kas indeks on unikaalne või mitte. Indeksite muutmisvõimalusi keeles pole: muutmiseks tuleb indeks kustutada ja uuesti luua. Indeksi tühistamine ei põhjusta andmete kaotust, aga tasub teada, et unikaalse indeksi tühistamine võib luua olukorra, kus vahepealne andmete lisandumine võib põhjustada tema taasloomise võimatuse.

```sql
drop index tudenginimi;
```

Ülesandeid

Koosta tabel koerte andmete hoidmiseks (kood, koeranimi)

Lisa tabelisse synniaeg.

Lisa koodi jaoks unikaalne indeks

Vihjeid

```sql
CREATE TABLE koerad (kood INT, koeranimi VARCHAR(30));
ALTER TABLE koerad ADD synniaeg DATE;
CREATE UNIQUE INDEX koeraindeks ON koerad(kood)
```

Ühiseks ja igalpool toimivaks standardiks on üljuhul SQL-92 (aastanumber). Andmebaasisüsteemid on hulgaliselt teinud täiendusi andmetüüpide ja käskude lisavõimaluste juures, samuti näiteks primaarvõtme ja automaatsete koodide loomisel. Nii et ühes keskkonnas kokku pandud vähegi keerukamate käskude üle viimine teise võib küllalt keeruliseks osutuda.

**2.5.5 Kordamisküsimused**

::: warning

Aru saada SQL andmete juhtkeele käskude toimimisest nt grant, revoke.

:::

Tabelile veeru lisamiseks tuleb kasutada käsklust:

a – insert

b – update

c – select from

d – alter table X

## 2.6 SQL-päringud

Selle alateema materjale läbi töötades saad teadmised SQL-päringute kohta.

### 2.6.1 SQL andmete manipuleerimiskeele (DML) käsud (insert, delete, update, select)

Liikudes andmete manipuleerimiskeele (DML) juurde, võib märkida, et on võimalik andmeid tabelisse lisada järgmise korraldusega:

```sql
insert into tname [(colname, ...)] values (colval, ...);
```

kus on kasutatud tähiseid:

tname – tabelinimi, millisesse andmeid lisatakse;
colname – veerunimi, kuhu lisatakse;
colval – konkreetsed andmed, mida lisatakse.

Andmete lisamise operatsioon võib nurjuda mitmel põhjusel: lisatavad andmed dubleerivad unikaalse indeksi väärtusi või sisestatavad andmed ei vasta veeru määratud andmetüübile.

| Näited:                                                                                 |
| --------------------------------------------------------------------------------------- |
| **_Insert into tudengid (tkood, eesnimi, perenimi) values (12, "Juhan", "Juurikas");_** |

Ridade kustutusoperatsioon võimaldab lisada ka kustutamise tingimusi, tutvustades uut süntaksielementi klausel where.

**delete from tname [where colname condition {colval|colname} [oprel ...]];**

kus on kasutatud tähiseid

Tname – tabelinimi, millisest andmeid kustutatakse;
colname – veerunimi;
condition – tingimusoperaator;
colval – väärtus, mida võrreldakse colname veeru sisuga;
oprel – suhteoperaator (relatsiooniline operaator).

Siin käsitletud tingimused on küllaltki lihtsad. Kõikvõimalikud **where** klausli tingimused on palju laiemad ja jäävad käesolevast käsitlusest välja.

| **Tingimus**              | **Tähendus**                                                                                                                                                                                        |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| =                         | Tingimus on tõene, kui operaatori mõlemad pooled on võrdsed.                                                                                                                                        |
| !=                        | Tingimus on tõene, kui operaatori mõlemad pooled on erinevad.                                                                                                                                       |
| \&gt; \&gt;= \&lt;= \&lt; | Tingimus on tõene, kui operaatori mõlemad pooled vastavad näidatud võrratuse tingimusele.                                                                                                           |
| like                      | Tingimus on tõene, kui termini "like" vasak pool sisaldab parempoolseid tingimusi (sümboleid). Võib kasutada metamärke nagu "%" sümbol. Sümbolit % käsitletakse, kui sümbolite mistahes järjestust. |
| matches                   | Tingimus on tõene, kui vasak pool vastab parempoolsetele tingimustele (sümbolitele). Võib kasutada metamärke.                                                                                       |

| **Suhteoperaator** | **Tähendus**                                                                           |
| ------------------ | -------------------------------------------------------------------------------------- |
| and                | Avaldis on tõene, kui operaatorile eelnevad ja järgnevad tingimused on mõlemad tõesed. |
| or                 | Avaldis on tõene, kui vähemalt üks kahest tingimusest on tõene.                        |
| not                | Eitab operaatorile järgnevat tingimust (vastab vastandväärtusele).                     |

Järgnev näide demonstreerib, kuidas tühistatakse kõik õpilane kirjed Juurikas perekonnanimega, kes on sündinud enne 1. jaanuari 1983. Rea tühistamiseks (kustutamiseks) peab see rahuldama mõlemaid tingimusi ja seepärast kasutatakse and operaatorit.

Näited:

```
delete from tudengid where synnipaev \&lt;"01.01.1983" and perenimi="Juurikas"
```

Tabeli väärtuste muudatusi võib teha järgmise korraldusega:

```
update tname set colname=valcol, ... [where colname condition {colval|colname} [oprel ...]];
```

kus on kasutatud tähiseid

`tname` – tabelinimi, millisest andmeid kustutatakse;
`colname` – veerunimi;
`valcol` – veerule omistatud väärtus;
`condition` – tingimusoperaator;
`colval` – väärtus, mida võrreldakse colname veeru sisuga;
`oprel` – suhteoperaator (relatsiooniline operaator).

### 2.6.2 SQL lisaklauslite kasutamine (nagu: where, order by, group by…)

Andmete uuenduskorraldus lubab tabeli mitut rida ja veergu uuendada samaaegselt. Rea valik teostatakse **where** klausliga, samas peab veeru uuenduse korralduses täpselt näitama.

Järgnevas näites uuendatakse kõikide õpilaste, kelle kood on 2, eesnimi ja perekonnanimi; kui unikaalne indeks on defineeritud koodina (vaadake indeksi definitsiooni juures olevat näidet) siis uuendatakse ainult üks kirje (või mitte ühtki, kui pole õpilast koodiga 2).

Näited:

```sql
update tudengid set perenimi="Juurikas" and eesnimi="Piret" where tkood=2;
```

Oleme seni vaadanud andmete muutmiskorraldusi, nüüd hakkame uurima, kuidas tabelitest vajalikku informatsiooni väljastada. Selleks kasutatakse korraldust **select** , mida laialdaselt kasutatakse ja mis on väga paindlik:

```sql
select ( colname, ...) from tname [where ...] [group by (colname, ...)] [order by (colname, ...)] [having ...] [into [temp] table tname];
```

kus on kasutatud tähiseid

`colname` – veerunimi;

`tname` – tabelinimi, millisest andmeid kustutatakse;

`where` – klausel, millist kirjeldati ülalpool delete ja update korralduste juures;

`having` – sarnaneb veidi **where** klausliga, kuid hinnatakse osalisi tulemusi.

**order by** klausel võimaldab väljastada andmeid korrastatud järjekorras, samal ajal kui **group by** klausel võimaldab andmete rühmitamist. Sellised korraldused, kus on kasutatud kõiki loetletud klausleid rakendatakse esimesena **where** , järgmisena **order by** ja **group by** ning alles siis **having** klauslit.

Teades **select** korralduse keerukust ja paindlikkust, vaatleme mitut erinevat näidet. Esimeses näites näitame, kuidas valima kogu informatsioon tabelist: tärn veergude nimekirja asemel osutab, et kõik tabeli veerud peaks olema valitud. **Where** klausli puudumine võimaldab valida kõik read.

```sql
select * from tudengid;
```

Teises näites valitakse kõikide õpilaste eesnimed ja perekonnanimed, kes olid vanemad, kui 18 aastat, kuupäeval 31.detsember 2003. Tulemus korrastatakse perekonnanime ja eesnime järgi. Pange tähele: veergude korrastusjärjekord on vaja eraldi näidata **order by** järel.

Näited:

```sql
select perenimi, eesnimi from tudengid where synnipaev <= "31.12.1985" order by perenimi, eesnimi;
```

Kolmandas näites on rühmitatud kõik sama nimega õpilased; valitakse nimi koos sama nimega õpilaste arvuga. Loendamisfunktsioon **count(\*)** väljastab rühmitatud ridade arvu. Näites pole kasutatud **where** klauslit, kuigi võiks olla.

Näited:

```sql
select eesnimi, count(*) from tudengid group by eesnimi order by eesnimi;
```

Neljas näide näitab, kuidas having klauslit kasutada harvaesinevate nimede valimiseks või ainult üks kord esinevate nimede valimiseks.

Näited:

```sql
select eesnimi, count(*) from tudengid group by eesnimi order by eesnimi having count()=1;
```

Viiendas näites valitakse õppeainest osa võtvate õpilaste perenimi ja eesnimi. See teostatakse suhte loomise kaudu õpilaste ja oppeainete tabel vahel. Korraldusest aru saamiseks, peaks teadma, et oppeainete tabel sisaldab veerge aine ja tudeng (õpilane osaleb õppeaines). Korraldust uurides võib märgata seal kahte veergu nimega "eesnimi" — need veerud on eristatavad sest tabeli nimi on enne veerunime ja neid seob vahepealne punkt. Sellist süntaksit kasutatakse ka tingimuste näitamiseks where klauslis aga seda on kasutatud ainult selguse huvides (`where tudeng = kood` võib kirjutada probleemideta). Mõistmaks, kuidas korraldus töötab, vaatame kuidas ABHS seda teostab:

- Leitakse otsekorrutis õppeained ja tudengid tabelite vahel
- valitakse ainult read, kus "tudeng" veerg väärtus võrdub "kood" veerg väärtusega
- luuakse projektsioon, mis kustutab kõik sobimatud veerud
- tehakse päring valitud veergude (oppeained.tudeng, tudengid.eesnimi, perenimi) baasil saadud tabelist.

Kõik need operatsioonid vastavad loomulikule liitumisele (loomulik seos).

Näited:

```sql
select oppeained.eesnimi, perenimi, tudengid.eesnimi from oppeained, order by oppeained.eesnimi, perenimi, tudengid.eesnimi where oppeained.tudeng=tudengid.kood;
```

Kuues ja viimane näide kasutab viiendat näidet ja teostab täienduse, mis samuti lubab valida aineid, kus pole registreerunud õpilasi. Sellel juhul read sisaldavad aine andmeid ja neid ridu, kus õpilase andmed puuduvad (kuna aines pole õpilasi). Korralduse seisukohalt on piisav, kui lisada sõna outer enne tudengid tabeli nime. Seda tüüpi seotus on väline liitumine – **outer join** või vasak liitumine – **left join**. Välise liitumise süntaks võib olla tunduvalt keerulisem ja võib sõltuma kasutatava SQL keele standardist.

Näited:

```sql
select oppeained.eesnimi, perenimi, tudengid.eesnimi from oppeained, outer tudengid order by oppeained.eesnimi, perenimi, tudengid.eesnimi where oppeained.tudeng=tudengid.kood;
```

### 2.6.3 Vaated ning transaktsioonihaldus

Olles eelnevalt piisavalt uurinud select korraldust, võib nüüd uurida kasutaja korraldust create view. Kasutaja vaade (user view) on funktsionaalsest seisukohast vaade nagu tabel ise, aga see luuakse select korraldusega. Põhiliselt on see võimalus esitada tabeleid erineval viisil. Korralduse süntaks:

```sql
create view vname as select ... ;
```

Kasutatud tähised:

`vname` – loodava vaate nimi;
`select` – valikukorraldus, mis näitab, kuidas andmed saadakse.

Näites vaatame vaadet, mis esitab hetke andmed õpilaste kohta ainete nimekirjas (registreerunud õpilaste nimekiri).

Näited

```sql
create view registreerunud as select oppeained.eesnimi, perenimi, tudengid.eesnimi from oppeained, tudengid where oppeained.tudeng=tudengid.kood;
```

Vastupidine korraldus vaate loomisele on vaate hävitamiskorraldus, nagu seda sai teha tabelite ja indeksitega, selle süntaks on:

```sql
drop view vname;
```

Kus vname – kustutatava vaate nimi;

Näited:

```sql
drop view registreerunud;
```

Nende põgusate selgituste lõpetamiseks näitame andmetehingute juhtimiskorraldusi:

```sql
commit work;
rollback work;
```

Kui automaatne andmetehingute lõpetamine on välja lülitatud (autocommit=off), siis andmete muutmiskorraldused ( **insert** - lisamine, **delete** - kustutamine, **update** - uuendus) ei muuda tabeli sisu, selle asemel nad regisreerivad vajalikud muutused (tavaliselt logides). Need muutused teostatakse ainult juhul, kui sooritatakse korraldus **commit**. Kui sooritatakse korraldus **rollback** , siis muudatused lükatakse tagasi. Selliselt on võimalik luua käskude komplekte, mis täidetakse tervikuna või jäetakse tervikuna täitmata.

### 2.6.4 Kordamisküsimused

1. Konkreetse sünniaastaga inimeste küsimiseks SELECT-lauses kasutatakse tingimust lauseosas nimega

a – `ORDER BY`

b – `WHERE X`

c – `GROUP BY`

d – `FROM`

2. Käivitatud käskude eelse seisundi taastamiseks võib sobida

a – `ROLLBACK X`

b – `COMMIT`

c – `ORDER BY`

d – `GROUP BY`

## 2.7 Andmebaaside administreerimine ja turvalisus

Selle alateema materjale läbi töötades saad teadmised andmebaaside administreerimise ja turvalisuse kohta.

### 2.7.1 Andmebaasid ja nende tähtsamad administreerimise toimingud: skeemi defineerimine, andmesalvesttus­struktuuri ja andmete poole pöördumise määramine, õiguste jagamine

Andmebaas haldusoperatsioone teostavad üks või rohkem andmebaasi administraatorit (DBA) kes on vastutavad AB seadistuse halduse eest. Nende ülesannete hulka kuuluvad muuhulgas skeemihaldus ABHS olemasolevate haldusprogrammidega, kasutades DDL korraldusi ja kasutajate juurdepääsupoliitika seadistamine.

See ei tähenda midagi, et DBA ei ole andmebaasi omanik (täpselt nagu elamuühistu administraator ei ole elamute omanik), vaid on selle asemel kõrge kvalifikatsiooniga tehnik, et igas olukorras tegutseda vastavalt tavalisele plaanile, mis on kooskõlastatud organisatsiooni, kes toodab või kasutab andmeid, direktoriga (õige omanik).

Senini pole me rääkinud DBA rollist AB füüsilise vaate seisukohalt. Kõigepealt need operatsioonid pole tavaliselt standardne haldus, kuna füüsilise vaate haldusega tegeleb tavaliselt ABHS müüja. Need operatsioonid võivad erinevate ABHS jaoks olla erinevad, aga nad peegeldavad üldisi vajadusi. Need vajadused on peamiselt seotud ABHS turvalisuse ja jõudlusega (täitmis- või töökiirus). Turvalisus vajadused on seotud andmete **konfidentsiaalsuse** (_confidentiality_) ja **käideldavusega** (_availability_). On olemas sobivad SQL korraldused konfidentsiaalsuse haldamiseks, kuid nendest tuleb juttu edaspidi.

Käideldavuse vajadused on tavaliselt lahendatud füüsilisel tasemel liiasuse kaudu või andmete dubleerimisega ning ka varukoopiate poliitikaga. Liiasus võib olla kas kohalik (RAID-ketaste kasutus) või kaugjuhitav (algatatud andmebaasi peegelduspoliitika tõttu teises arvutis).

Jõudluse parandamise vajadused on lahendatud füüsilisel tasandil füüsilise vaate seadistamisega:

- Valides töökeskkonnaks uued (_raw devices_) salvestusseadmed (või kõvakettad) failisüsteemi kasutamise asemel (salvestus läbi FHS). See on selline valik, mis loob keerukusi ja on seepärast samuti kulukas, kuid võib suuresti parandada ABHS jõudlust, mis peab haldama suurt hulka andmeid.
- Otsustades jagada AB mitme masina vahel, et saavutada suurem arvutusvõimsus.
- Kasutades mitmelõimelist ABHS (hargtöötlus), mis suudab ära kasutada rohkem protsessoreid või igal juhtumil jagada korraldused (päringud) efektiivselt.
- Muutes jagatud mäluala nii, et ta on suuteline kohanema nõutava laienemisega kaasnevate protsesside hulgaga.
- Täpselt defineerides logide ja tehinguhalduspoliitika (on samuti asjakohane, kuigi see on füüsilise ja loogilise vaadete piiriala küsimus).

Konfidentsiaalsust võib samuti hallata sobivate SQL korraldustega. Andma - grant ja tühistama - revoke korraldused lubavad erinevaid volitusi andmetele juurdepääsuks. Näitena on toodud nende kahe AB juurdepääsulubasid reguleeriva korralduse süntaks.

```sql
grant role to user [identified by pwd] [with grant option];
revoke role from user;
```

Kasutatud tähised:

`role` – võib olla andmebaasi administraator (DBA), resurss, ühendus;
`user` – kasutajanimi, millisele õigused tagatakse või ära võetakse;
`pwd` – salasõna (parool);
`grant option` – võimaldab õigused saanud kasutajal samu õigusi, mis talle on antud teistele kasutajatele edasi anda (tagada)

DBA roll on selgem, kui teiste AB kasutajate oma; kuigi nende osa on suhteliselt väiksema tegutsemisõigusega võrreldes DBA-ga. DBA võib teha kõike, kuigi ressursside loaga (_ **resource** _) kasutaja ei saa muuta skeemi ja nendel, kellel on ühendusluba ( **connect** ), ei saa muuta andmed. Oluline on mõista, et erinevaid rolle kirjeldavad märksõnad võivad olla erinevad erinevates ABHS; seepärast peab alati lugema hoolikalt kasutajajuhendit (käsiraamatut) enne õiguste andmise või tühistamise korralduste kirjutamist.

Nagu oleme näinud on ABHS IT toode, mida kasutatakse andmete haldamiseks organisatsioonis. ABHS koosneb üldiselt:

- **Haldusprogrammidest füüsilise vaate haldamiseks** , näiteks seadistuse muutumine nii, et see võib olla kohandatud vastavalt kasutaja nõuetele ja soovidele, parandades selleks programmi jõudlust (töökiirust) või määrates varukoopiate (backup ) halduspoliitika.
- **Skeemi (plaani) haldusprogramm**, mida kasutatakse loogilise vaate haldamiseks DDL korraldustega.
- **Andmete haldusprogrammid** , mis võimaldavad opereerida juhtimisseadmetega ja erakorralised AB hoitavate andmete muutused, kasutades DML korraldusi ilma muid programme kasutamata. Tavaliselt kasutatakse juhtimiskorraldusteks lihtsat korralduste tõlgendamise konsooli, juhtimiskorraldusi käsitleti ka eelmises punktis.

### 2.7.2 Turvaküsimused akronüümi CIA kontekstis (Confidentiality, Integrity, Availability – konfidentsiaalsus, terviklus, käideldavus)

Ilmselt on vajalik kavandada vastumeetmeid iga riski vähendamiseks.

Jaotades võimalikud lahendused vastavalt kaalutletud turvalisuse aspektidele, võib sõnastada järgmised nõuded:

- Mis puudutab konfidentsiaalsust, siis esimene vastumeede on korrektne lubade (õiguste) määramine piirates juurdepääsuõigusi ja piirates võimalike operatsioonide (tegevuste) hulka iga üksiku tabeli korral. Ilmselt on ilma täiendavate kulutusteta vastumeetmeks varustuse ja varukoopiate õige haldamine, nii on kõik, mis on ligipääsematu ABHS kaudu, oleks ka füüsiliselt ligipääsematu. Need vastumeetmed on efektiivsed, sest konfidentsiaalsusrisk tuleneb enamasti volitamata juurdepääsu juhtumitest.
- Mis puudutab terviklust, siis on risk juhusliku tervikluse ja koherentsuse (kooskõla) kaotusega seotud peamiselt programmi talitlushäiretega (ja nendest põhjustatud), tõenäoliseks põhjuseks on anomaaliad andmete lisandumisel. On mitmeid viise nendele riskidele reageerimiseks:

  - Esiteks: juurdepääs andmetele peaks olema kontrollitud ja piiratud nii, et ainult ametlikud kasutajad võiks muuta andmeid.
  - Teiseks: piirangud peaks mõjutama AB skeemi (unikaalsed indeksid, viiteline terviklus).
  - Kolmandaks: põhitähelepanu peaks olema suunatud transaktsioonide haldusele.

- Käideldavuse nõuded tõstatavad kaht tüüpi spetsiifilisi probleeme.
  - Esiteks peab määrama ABHS adekvaatse riistvara hulga ja sobiva seadistuse (konfiguratsiooni) kompleksse, keeruka koormusega toimetulemiseks.
  - Teine probleem on seotud käideldavuse maksimeerimise poliitikaga, mis põhineb liiaste ketaste massiivi (RAID), liiaste protsessorite (nagu mitmikprotsessorid) kasutamisel või kaugjuhitavate varunduslahenduste (peegelduste) kasutamisel.
  - Ilmselgelt täielikke garantiisid ei ole olemas; seepärast peaks eesmärgiks seadma kahjude vähendamise strateegia, varukoopiate tegemise poliitika on vajalik, et võimaldada mitte ainult kiire andmete taastamine, vaid ka piirata sellega andmete võimalikku kaotust. Abinõudena võiks soovitada **varukoopiate** loomise perioodi vähendamist ja tehingute pidevat jälgimist veebilogide (online logging) kasutamise teel vähendamaks tehingute kaotsiminekut ja lõpetamata tehinguid ABHS rikke või mittetoimimise ajal.

### 2.7.3 Näited mimesuguste turvareeglite kohta: inimfaktor, füüsilised tegurid, operatsioonisüsteemi ja andmebaasi turvalisus

Informaatika turvalisusest on olnud veidi juttu eelnevates materjalide osades. Kui räägime andmebaasidest, siis turvalisusel on samuti oluline osa. Andmebaaside turvalisust esindavad turvalisuse kolm aspekti: **konfidentsiaalsus** (ainult autenditud kasutajad omavad informatsioonile juurdepääsu), **terviklus** (soovimatud informatsiooni muutusi hoitakse ära) ja **käideldavus** (informatsioon on alati kättesaadav, kui teda vajatakse).

Riskid võivad tuleneda:

- **Inimfaktorist** nagu hoolimatus, volitamata isikute juurdepääsu katsed või tegelike andmete rikkumine. Ohud on pärit sageli organisatsiooni seest ja see on peamiselt konfidentsiaalsuse probleem. Siiski mõjutab inimfaktor ka terviklust ja vähemal määral tarkvaratoodete käideldavust.
- **Füüsilised** tegurid nagu riistvara viga, mis vältimatult mõjutavad seadmeid. Sellised riskid mõjutavad käideldavust ja andmete terviklust.
- **Operatsioonisüsteemiga** seotud tegurid, kuna ABHS peab toetuma sellise süsteemi teenustele. Risk tuleneb nii talitlushäiretest, mis võib põhjustada andmete riknemist kui ka haavatavusest, mida võiks inimriskide hulka liigitada, võimaldades sissetungi, mis vastasel juhul oleks võimatu. Operatsioonisüsteemi nõrkused võivad mõjutada kõiki kolme turvalisuse aspekti.
- **ABHS** enese sees võib olla turvalisuse probleeme sarnaselt operatsioonisüsteemile mõjutades samamoodi nimetatud kolme turvaaspekti.

### 2.7.4 Taastamisskeemid vastavalt vigadele

Mitmesuguste probleemide põhjuste kaalumise asemel võime jagada vastavad vastumeetmed järgmiselt:

- **Loogilisi** vigu, mis tulenevad väärast andmete sisestamist või protseduurivigadest on võimalik vältida korrektsete AB piirangute abil (constraints), nagu primaarvõtmete defineerimine, viitelise tervikluse kontroll või kasutades tehinguteks loogilisi vaateid (views). Ilmselt pole kõiki vigu võimalik kõrvaldada või vältida. Näiteks 3 asemel 5 sisestamine pole üldiselt automaatselt tuvastatav (identifitseeritav): kuid, kui viga on leitud või ära tuntud, siis peaks järgnema veaparandusprotseduur andmete uuendamiseks.
- **Süsteemi** vigu ja kokkukukkumisi võib ära hoida liiasusega (nagu sageli tehakse lennundussektoris, kus mitu süsteemi protsessi töötavad samade andmetega paralleelselt, koos hääletamismehhanismiga, mis lükkab tagasi mittekokkulangeva tulemuse). Teades süsteem usaldusväärsuse üldist taset, opereeritakse tüüpiliselt **kahju vähendamise** loogikaga alusel koos **varukoopiate** teostamise plaaniga. Juhuks, kui soovitakse kõrget käideldavuse taset, võib töötada andmebaasi eemal asetseva koopiaga, nii et kui juhtuks süsteem rike, võiks taastumisoperatsioonide ajaks koormuse suunata teisele andmebaasile.
- **Kettaseadmete rikete** riski vähendamiseks kasutatakse tavaliselt RAID kettaid: sellistel juhtudel on võimalik tööd jätkata, kui üksik ketas keeldub töötamast. On võimalik kasutada ka automaatset ketaste asendamise tehnikat rikkis ketta asendamiseks. Rohkem, kui ühe ketta üheaegse riknemise juhtumil kasutatakse samuti **varunduspoliitikat** andmete taastamiseks. Ilmselt on ka kaugpeegelduse poliitika kasutamine mõistlik lahendus.

**2.7.5 Kordamisküsimused**

1. Kasutajale õiguste jagamiseks kasutatakse käsklust

a – `UPDATE`

b – `REVOKE`

c – `GRANT X`

d – `INSERT`

2. Loogilisi vigu aitavad vältida

a – RAID-kettaseadmed

b – võõrvõtmed X

c – varukoopiad

d – UPS-seadmed

## 2.8 Andmehoidlad ja andmete kaevandamine

Selle alateema materjale läbi töötades saad teadmised andmehoidlate eesmärkidest, ülesehitusest ning nende toest andmekaevanduse juures.

### 2.8.1 Andmehoidla põhimõtted ja põhikomponendid

Vaatamata faktile, et **relatsiooniliste andmebaaside** (RAB) teooria määratleb, et ainult üksik andmebaas peab salvestama oma organisatsiooni kõik andmed, on mitmesuguseid põhjuseid mitmete andmebaaside olemasoluks ja nii on paljudes organisatsioonides palju andmebaase ja nad sisaldavad palju mitmesugust informatsiooni.

Täpsed suhted andmete vahel on juba defineeritud üksiku andmebaasi kavandamise faasis (näiteks seosed ostja ja arve vahel, arve ja makse vahel jne.). Sellegipoolest on selles valdkonnas mõned piirangud tänu erinevate andmebaaside olemasolule, mõni nendest on säilinud vanade rakenduste toetamiseks (defineeritud kui **pärand** (_legacy_)), teised lihtsalt erinevate tegevuste eraldamiseks (nagu turuanalüüsi tegevuste eraldamiseks firma ressursside planeerimise süsteemist) ja mõned erineval tehnoloogial põhinevad (näiteks uudistel põhinevad salvestussüsteemid, mis põhinevad tekstiotsingu toodetel, ei saa alati olla integreeritud relatsioonilise andmebaasiga, mis sisaldab firma andmeid).

Kui andmed võivad "ristuda" (on võimalik defineerida nendevahelisi suhteid), siis võib välja tulla huvitavat varjatud informatsiooni. Nagu märgitud punktis 2.3, mitmetest allikatest tulevate andmete integratsiooniprotsess ja sellele järgnev analüüsifaas on saanud nime **andmeaidandus ja andmete kaevandamine.**

**Andmeaida** (_data warehouse_) võimekus ei tulene ainult erinevate allikate andmete liitmise tulemusest, vaid ka väga pikal ajaperioodil lisandunud andmetest. See toob kaasa ka eelised ja piirangud: eeliseks on võimalus avastada pika ajaperioodi dünaamikat ja korduvaid hooajalisi muutusi; piiranguks on võimetus hallata "muutuvaid" andmed nagu näiteks maksete seisund.

Andmeaida keskkond on kavandatud hõlbustama mittemuutuvate andmete analüüsi, mis saabuvad erinevatest allikatest, loogiliselt ja füüsiliselt teisendatud, uuendatud ja korjatud pika ajaperioodi vältel ning töödeldud vastavaks turuanalüüsi vajadustele, väljendatuna lihtsate andmetena ja kokkuvõtetena, mis võimaldab nende kiiret analüüsi.

**Andmeaida süsteemid** (_data warehousing systems - DWS_) - **AAS** on sageli loodud relatsioonilise andmebaasina koos mõne erilise tunnusega:

- Andmeaida andmebaas on erinev nendest andmebaasidest, milliste andmed saadakse ja on sageli majutatud erinevates serverites. See ilmneb esimesena, sest AAS andmebaas integreerib andmeid, mis tulevad teistest andmebaasidest ja samuti tootlikkuse kaalutlustest. Kui andmed paiknevad erinevates andmebaasides ja masinates, siis AAS ja firma andmebaas ei mõjuta teineteist: analüüsi operatsioonid, milliseid teostab AAS ei suurenda firma informatsioonsüsteemi koormust ja vice versa.
- Kuigi AAS kasutab relatsioonilist andmebaasi, ei kasuta ta ühtki normaalkuju (vt. järgnevaid punkte), luues palju laiendatud tabeleid analüüsi lihtsustamiseks.

Tavaliselt sisaldab AAS järgmisi komponente:

- **Tööriistad** ligipääsuks mittehomogeensetele andmeallikatele, milliste andmeid kasutatakse andmeaida täitmisfaasis.
- **"täitmis"protsess** , mis võtab andmeid homogeensetest allikatest ja valmistab neid ette toetavasse andmebaasi paigutamiseks.
- Ülakirjeldatud erisustega **andmebaas** , mis sisaldab võetud andmeid.
- Mitmesugused **analüüsiprotsessid** , millistega informatsioon võetakse andmebaasist.
- Mõned **andmekaevandamise protsessid** (_data mining processes_), mis võimaldavad üksikasjaliku informatsioon võtmist vastavalt loogilistele teedele (radadele), mis ise võivad samuti olla üsna keerulised tulenevalt eelmine analüüsi protseduuridest.

AAS täiteprotsess, mis regulaarselt integreerib erinevatest andmeallikatest võetud informatsiooni on eriti oluline. See protsess sisaldama rea samme:

- **Normaliseerimise vastandprotsess** , mille eesmärgiks on kokku koguda suur arhiiv alustades rohkem struktureeritud informatsioonist. Näiteks klientide ja maksete arhiivi võib ühendada üheks arhiiviks, et näidata iga kliendi andmeid koos iga sooritatud maksega. See on vastuolus relatsiooniliste andmebaaside teooriaga mille alusel andmebaase luuakse, aga samas valmistab see andmed ette lihtsamaks analüüsi teostamiseks.
- **Muutuvate elementide kõrvaldamine** eesmärgiga vähendada "müra", mis võib raskendada järgnevat analüüsi. Muutuvad elemendid on need informatsioonitükid, mis ajas muutuvad. Arve makse seisund on muutuv element, mis teatud aja jooksul omab "ei" väärtust ja muutub teatud aja pärast "jah" väärtuseks. Arve makse ülekanne ei ole muutuv element, sest ükskord makstuna jääb ta salvestatuna nagu on.
- **Viimistlus** (küürimine _scrubbing_) - vigade kõrvaldamine, mis tulenevad mittetäielikest andmetest, nimede õigekirja vigadest, tähtede või arvude valest asukohast, lingvistilistest muutustest, mis võivad põhjustada probleeme andmed analüüsifaasis.
- **Nomenklatuurne viimistlus** vältimaks sama informatsiooni kordumist, mis tulevad erinevatest allikatest, olles tähistatud teistmoodi.
- **Tüüpide normaliseerimine** tagamaks, et informatsioon, mis tuleb erinevatest allikatest on samas vormingus (formaadis).
- **"Null"-väärtuste haldus**. Andmebaasides vastab null-väärtus (null) info puudumisele, millega peab andmete sisestamisel õigesti ümber käima.
- **Kokkuvõtvate andmete loomine** järgneva analüüsi kiirendamiseks.

**Lisalugemist:** Erik Iter – Andmehoidlad teoorias ja praktikas. http://www.cs.tlu.ee/osakond/opilaste\_tood/bakalaureuse\_ja\_diplomitood/2004\_kevad/Erik\_Iter/Erik\_Iter\_Diplomi\_Too.pdf

### 2.8.2 Andmekaeve põhimõtted

Olles andmetega varustatud, võib andmeaita kasutada analüüsi tegemiseks. Neid analüüse tehakse kasutades tavalisi (normaalseid) päringuid andmebaasist, algselt töötades kokkuvõtvate andmetega, mis loodi andmeaida andmete sisestuse viimases faasis. Need esimesed analüüsid tavaliselt näitavad (paljastavad) analüüsitavate parameetrite dünaamikat, aga tavaliselt ei näita nad dünaamika põhjuseid.

Põhjalikuma ja kulukama analüüs võib teha mittesummeeritud andmetega: seda tüüpi analüüs on sarnane eelmisele nii vahendite, kui ka uuritavate andmete poolest ja kannab nime andmete kaevandamine (data mining). Andmekaevandamine on arenev teadus: kasutaja alustab kokkuvõtvatest andmetest ja siis jätkab üksikasjalike andmete analüüsiga, otsides oma hüpoteesile kinnitust või tagasilükkamist. Andmeaidas on andmekaevandamisega seotud tegevuste osakaal madal, aga see kaasab suure hulga töötlusvõimsust; igal juhtumil kaasatakse vahendeid nende operatsioonide kiirendamiseks.

### 2.8.3 Andmehoidlate põhilised kasutusalad

Selle AAS põgusa kirjelduse lõpetuseks vaatame milleks nad kasulikud on:

- Pikaajalised analüüsid, mis võivad välja tuua tendentse (kalduvus) või korduvaid tsükleid. Tavaliselt need analüüsid eelistatult käsitlevad majanduslikke aspekte.
- Teatud keerukusega organisatsioonides, millistes mõni majanduslik, organisatoorne, või tootlikkuse aspekt võib olla varjatud tänu organisatsiooni enda keerukusele ja kus olulised andmed võivad olla erinevates või sidumata andmebaasides.

### 2.8.4 Kordamisküsimused

::: tip

Andmehoidla võimaldab:

a – leida eilse kolmanda tehingu summa

b – kiiremini kätte saada kokkuvõtvaid andmeid X

c – serveri kettaid defragmenteerida

d – kasutajaid kiiremini administreerida

Andmekaeve

a – võimaldab leida andmete mustreid, mida lihtsa tavapäringuga ei pruugi kätte saada X

b – kustutab andmehoidlast andmeid, mida mõningatel põhjustel ei soovita säilitada.

c – on võimatu andmehoidlat kasutamata

d – on andmebaasis võimalik ainult spetsiaalse kasutajatunnuse abil

:::

## 2.9 Lisamaterjalid

- Ühe andmetabeli juures ettetulevad põhikäsud MySQLi näitel:

  [http://minitorn.tlu.ee/~jaagup/kool/java/naited20/html/php/teated2.sql](http://minitorn.tlu.ee/~jaagup/kool/java/naited20/html/php/teated2.sql)

- Kahe andmetabeli ühendamisel ettetulevad käsud:

  [http://minitorn.tlu.ee/~jaagup/kool/java/naited20/html/php/sqlnaide2.txt](http://minitorn.tlu.ee/~jaagup/kool/java/naited20/html/php/sqlnaide2.txt)

- Eessaar, Erki. Andmebaaside projekteerimine, Tallinna Tehnikaülikooli kirjastus, 2008

- Isotamm, Ain. Andmed, andmemudelid ja päringukeeled. Tartu Ülikooli kirjastus, 1996

- Elmasri, R., Navathe, S. B. "Fundamentals of Database Systems" Addison Wesley, 4th edition, 2004
