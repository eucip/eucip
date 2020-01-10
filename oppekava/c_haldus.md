# Halduse valdkond

Järgneb mooduli C, Haldus, õppekava, mis annab aluse selle osa eksamitele.

## Mooduli eesmärk

- Aru saama arvuti riistvarakomponentidest, arvutite arhitektuurist ja protsessori tööpõhimõtetest.
- Moodul C, Haldus, eeldab eksaminandilt infosüsteemide toimimise ja toe tundmist.

Eksaminand peab:

- Teadma operatsioonisüsteemide tööpõhimõtteid ja mõistma enamlevinud operatsioonisüsteemide võimalusi.
- Mõistma side põhimõtteid, võrgukomponente ja –arhitektuuri ning sideprotokolle.
- Mõistma võrguteenuste põhimõtteid sh krüpteerimise meetodeid ja domeeninimede süsteemi funktsiooni.
- Aru saama veebi (WWW) mõistest, elektroonse sõnumivahetuse võimalustest ja IP-kõne protokolliteenustest.
- Mõistma traadita side põhimõtteid, traadita võrke ja protokolle.
- Oskama kirjeldada võrguhalduse põhimõtteid ja lihtsat võrguhalduse protokolli (SNMP).
- Teadma süsteemi- ja võrguhalduse vahendeid.
- Mõistma kliendipõhise IT kasutajatoe tähtsust ja oskama kohaldada lihtsamaid IT teenuste osutamise põhimõtteid.

## C.1 Arvutikomponendid ja arhitektuur

### C.1.1 Arvuti riistvarakomponendid

#### C.1.1.1

Määratleda arvutisüsteemi, põhilised osad: protsessor muutmälu, püsimälu ja kirjeldad nende tööpõhimõtet ja iseloomustavaid parameetreid

#### C.1.1.2

Kirjeldada peamiste arvutikomponentide omavahelist koostööd.

#### C.1.1.3

Tuua välja lihtsa arvuti- süsteemi peamised perifeeriaseadmed: monitor, klaviatuur, osundusseadmed, massmäluseadmed, võrgukaardid, printerid ja kirjeldada nende tööpõhimõtet.

#### C.1.1.4

Määratleda erinevat tüüpi perifeeriaseadmeid ja võrdlema nende omadusi ning jõudlust kasutades sobivaid parameetreid nagu maht, kiirus, resolutsiooni, ühilduvusstandardid.

#### C.1.1.5

Eristada põhilisi mälutehnoloogiaid nagu DRAM, SRAM, SDRAM, EPROM, EEPROM, NOR-välkmälu, NAND-välkmälu ja võrdlema nende kasutusotstarvet.

### C.1.2 Arvuti arhitektuur

#### C.1.2.1

Määratleda diagrammi abil üldotstarbelise arvuti arhitektuuri.

#### C.1.2.2

Kirjeldada tugikiibistiku mõistet ja erinevate siinitüüpide otstarvet arvutisüsteemis.

#### C.1.2.3

Kirjeldada mälu hierarhia mõistet nagu hierarhia tasemed, kiirem mälu ja aeglasemad massmäluseadmed, vahemälu efektiivsust ja selle mõju arvutisüsteemi jõudlusele.

#### C.1.2.4

Tuvastada erineva otstarbega arvutisüsteeme nagu tahvelarvuti, sülearvuti, lauaarvuti, mitmetuumaline serverarvuti, suurarvuti ja välja tooma nende arhitektuurilisi erinevusi.

### C.1.3 Protsessorid

#### C.1.3.1

Kirjeldada käsustiku arhitektuuri (Instruction Set Architecture) mõistet.

#### C.1.3.2

Kirjeldada CISC ja RISC arhitektuuriga protsessori disaini eripära.

#### C.1.3.3

Kirjeldada käsukonveieri, käsutaseme paralleelsuse dünaamilise ajastamise ja spekulatiivse käivitamise mõisteid.

#### C.1.3.4

Defineerida kaasprotsessori roll ja tuua välja selle osa käsustiku arhitektuuris.

#### C.1.3.5

Kirjeldada protsessori omadusi nagu ühe/mitmetuumaline, taktsagedus, konveieri astmed, vahemälu, kiibi mõõtmed, võimsustarve, soojuseralduvus.

## C.2 Operatsiooni-süsteemid

### C.2.1 Põhimõtted

#### C.2.1.1

Kirjeldada operatsioonisüsteemi (OS) funktsioone, mida on vaja üldotstarbelisele arvutile.

#### C.2.1.2

Erinevad OS-i tüübid (nagu näiteks: mobiilseadmete-, serverite-, lõppseadmete- ja reaalajalised operatsioonisüsteemid).


#### C.2.1.3

Kirjeldada rakendusliidese põhimõtteid (Application Programming Interface) ja tuua rakendusliidese näiteid nagu Java API, Windows, Linux. Riistvara- ja operatsioonisüsteemi virtualiseerimise (konteinerid).

#### C.2.1.4

Kirjeldada kuidas tarkvara haldab ressursse.

### C.2.2 Samaaegsed ja paralleelprotsessid

#### C.2.2.1

Tuua välja samaaegsuse põhjused OS-i sees.

#### C.2.2.2

Määratleda vastastikuse Välistamise probleem.

#### C.2.2.3

Määratleda töötlus ja multitöötlus.

#### C.2.2.4

Määratleda lõimelisus.

#### C.2.2.5

Määratleda kontektst- kommutatsiooni operatsioon.

### C.2.3 Mälu ja massmälu haldamine

::: probleem

vajab koos läbiarutamist ja praktiliste ülesannete välja töötamist.

:::


#### C.2.3.1

Kirjeldada virtuaalmälu mõistet.

#### C.2.3.2

Kirjeldada kuidas OS haldab virtuaalmälu massmäluseadme ja põhimälu riistvara abil.

#### C.2.3.3

Kirjeldada pukslemise mõistet ja selle mõju ning võimalusi selle vältimiseks ja halduseks.

#### C.2.3.4

Kirjeldada kuidas mälu hierarhia mõiste mõjutab programmeerimist nagu töömälu eraldamine failidest.

#### C.2.3.5

Määratleda failisüsteemi funktsioonid.

### C.2.4 Turvalisus ja kaitse

#### C.2.4.1

Mõista kaitse ja turvalisuse vajadust (konfidentsiaalsuse, puutumatuse ja käideldavuse terminites) arvutisüsteemis.

#### C.2.4.2

Määratleda OS-i kaitsemehanismid.

#### C.2.4.3

Kirjeldada pahavaraga seotud ohte nagu tagauksed, Trooja hobused, arvutiviirused. Määratleda peamised kaitsemeetodid nende vastu.

#### C.2.4.4

Määratleda erinevused isiku identifitseerimisel ja autentimisel.

#### C.2.4.5

Kirjeldada autentimistehnikaid ja defineerida tugeva autentimise mõiste.

#### C.2.4.6

Määratleda juurdepääsukontrolli põhimõtted (juurdepääsu piirangute kehtestamine tulenevalt: kasutajast ja kasutajatüübist, asukohast, seadmest või seadmetüübist, kasutatavast võrguühendusest).

#### C.2.4.7

Määratleda varunduse ja taastamise vajadus.

### C.2.5 Levinud operatsioonisüsteemid

#### C.2.5.1

Kirjeldada peamisi Unix’i, Linux’i ja Mac’i perekonda kuuluvate OS’ide omadusi nagu installatsioon, kasutajaliides, turvalisus, jõudlus, peamised kasutusalad, stabiilsus.

#### C.2.5.2

Kirjeldada Microsoft Windows perekonna OS-ide peamised omadused nagu installatsioon, kasutajaliides, turvalisus, jõudlus, peamised kasutusalad, stabiilsus.

#### C.2.5.3

::: probleem
Lisatud juurde, uus!!!
:::

Mobiilsete klientseadmete haldus kasutades haldustarkvara (seadmetel kasutatava tarkvara ajakohasuse tagamine,  seadmete ja andmete turvalisuse tagamine).  


## C.3 Side ja võrgud

### C.3.1 Side ja võrgunduse põhimõtted

#### C.3.1.1

Eristada võrkude loogilised ja füüsilised funktsionaalsused.

#### C.3.1.2

Kirjeldada informatsiooni ülekandmise põhimõisted defineerides signaali mõiste.

#### C.3.1.3

Välja tuua analoog- ja digitaalsignaali erinevused.

#### C.3.1.4

Määratleda probleemid signaali muundamisega analoogsest digitaalseks ja vastupidi.

#### C.3.1.5

Võrrelda kanali- ja pakettkommutatsiooni.

#### C.3.1.6

Kirjeldada standardiseerimis- asutuste rolli nagu ITU, IEEE.

### C.3.2 Võrgukomponendid ja arhitektuurid

#### C.3.2.1

Loetleda võrgukomponendid nagu lõppseadmed, ülekandemeediumid ja võrguseadmed.

#### C.3.2.2

Kirjeldada ülekandemeediumide parameetreid nagu keerupaar-, koaksiaalkaabel, mikrolained.

#### C.3.2.3

Kirjeldada kuidas võrgukomponendid on üksteisega ühendatud.

#### C.3.2.4

Kirjeldada võrguseadmete rolli nagu jaotur, kommutaator, marsruuter, järgur.

#### C.3.2.5

Tuua välja erinevused LAN ja WAN võrkudel.

#### C.3.2.6

Kirjeldada erinevaid WAN Tehnoloogiaid ja valikuid nagu sissehelistamine, integreeritud teenustega digitaalvõrk, digitaalne abonendiliin (DSL), rendiliin.

#### C.3.2.7

Kirjeldada standardseid võrgu- topoloogiaid ja seostada neid võrgu standarditega nagu Ethernet

#### C.3.2.8

Määratleda erinevad juurde- pääsustrateegiad (CSMA/CD ja CSMA/CA), mida kasutatakse erinevate võrgustandardite puhul.

#### C.3.2.9

Kirjeldada tulemüüri funktsiooni ja selle tähtsust võrguturbes.

### C.3.3 Sideprotokollid

#### C.3.3.1

Kirjeldada ISO 7-kihiline mudel ja loetleda iga kihi poolt hallatavad teenused.

#### C.3.3.2

Kõrvuta TCP/IP mudel ISO mudeliga.

#### C.3.3.3

Kirjeldada pakettide marsruutimine üle interneti.

#### C.3.3.4

Võrrelda ühendusel orienteeritud ja ühenduseta protokolle.

#### C.3.3.5

Eristada TCP ja UDP transpordi- protokolle töökindluse ja kiiruse poolest.

## C.4 Võrguteenused

### C.4.1 Võrgu turvalisusega seotud probleemid

#### C.4.1.1

Kirjeldada erinevat tüüpi ohte tavalistele võrgu- operatsioonidele nagu teenuse tõkestamise rünne, võrguliikluse pealtkuulamine ja pordi ülevõtmine.

#### C.4.1.2

Defineerida mõistetega nagu tüssamine ja identiteedi- vargus seotud turvaohud.

### C.4.2 Krüptograafia

#### C.4.2.1

Kirjeldada krüptograafia olemust ja selle rakendamist võrguturbes.

#### C.4.2.2

Tuua välja erinevused salajase võtme ja avaliku võtme algoritmidel.

#### C.4.2.3

Kirjeldada kuidas krüptograafiat kasutatakse võrguliikluse kaitseks konfidentsiaalsuse täiustamisega (IPSec, SSH ja SSL), autentimisnõudega (digitaalne allkiri) ja luues virtuaalset privaatvõrku (VPN).

### C.4.3 Domeeninimede süsteem

#### C.4.3.1

Kirjeldada domeeninimede süsteemi (DNS) ja selle ulatust.

#### C.4.3.2

Kirjeldada kuidas nimetatakse lõppseadmeid internetis.

#### C.4.3.3

Kirjeldada ressursikirjete kasutust ja ostatrvet.

#### C.4.3.4

Kirjeldada interneti protokolliga (IP) adresseerimist ja kuidas domeeninimi teisendatakse IP-aadressiks.

### C.4.4 Veeb

#### C.4.4.1

Kirjeldada veebi (World Wide Web) kui klient/server rakendust.

#### C.4.4.2

Määratleda veebiserveri roll.

#### C.4.4.3

Määratleda veebikliendi (veebilehitseja) roll.

#### C.4.4.4

Määratleda hüperteksti edastusprotokolli (HTTP) roll ja funktsioonid.

#### C.4.4.5

Defineerida internetiressursi aadressi (URL) otstarve.

#### C.4.4.6

Määratleda üldise lüüsiliidese (CGI) otstarve.

#### C.4.4.7

Määratleda apleti mõiste.

#### C.4.4.8

Aru saada dünaamilisest veebisisu halduses kasutades andmebaasi.

#### C.4.4.9

Määratleda võimalused veebimajutuseks nagu veebiserveri majutus, virtuaalne privaatserver, pühendatud veebimajutusteenus.

### C.4.5 Sõnumside

#### C.4.5.1

Võrrelda erinevaid elektroonse sõnumivahetuse süsteeme nagu e-post, SMS/MMS, kiirsuhtlus,kasutajate kogukondades postitused.

#### C.4.5.2

Tuua välja erinevused veebiposti ja e-posti vahel.

#### C.4.5.3

Kirjeldada e-posti serveri, kliendi ja lüüsi rolle ja funktsioone.

#### C.4.5.4

Kirjeldada lihtsat postiedastusprotokolli (SMTP) ja kliendiprotokolle (POP3, IMAP).

### C.4.6 Kõneedastus üle interneti (VoIP)

#### C.4.6.1

Kirjeldada IP telefoni mõistet.

#### C.4.6.2

Kirjeldada IP-kõne nõuded kasutajale ja võrgule.

### C.4.7 Süsteemi infrastruktuuri dimensioneerimine

#### C.4.7.1

Kirjeldada andmemahu ja andmetüüpide mõju võrguressurssidele nagu ressursinõuded teksti, numbrite, kõne, piltide, video ülekandeks.

#### C.4.7.2

Kirjeldada serverarvuti parameetreid, mida saab kasutada multimeediarakenduste majutamiseks.

## C.5 Traadita ja kaasaskantavad arvutusseadmed

### C.5.1 Multimeedia ja kaasaskantavate seadmedete komponendid

#### C.5.1.1

Kirjeldada kaasaskantavaid seadmeid nagu nutitelefonid, elektronmärkmik, GPS, kaasaskantavate arvutite komponendid.

#### C.5.1.2

Määratleda põhilised multimeedia sisend/väljund seadmed nagu skännerid, digitaalsed kaamerad, mikrofonid, ekraanid, kõlarid, peamikrofonid ja nende kasutusotstarve.

#### C.5.1.3

Kirjeldada peamised multimeedia massmälukandjate standardid nagu CDROM, DVD, välkmälu ja erista nende tehnilisi parameetreid

### C.5.2 Traadita side põhimõtted

#### C.5.2.1

Loetleda traadita sides kasutatavad tehnoloogiad ja nende funktsionaalsus

#### C.5.2.2

Määratleda peamised erinevused traadita seadmete standarditel nagu IEEE 802.15.1 (Bluetooth), IEEE802.11 (WLAN), IEEE802.16 (WiMax).

#### C.5.2.3

Määratleda piirangud ja probleemid, mis seotud traadita ja mobiilsete seadmetega nagu leviulatus, ühenduskiirus, ühilduvus.

### C.5.3 Traadita võrgud ja protokollid

#### C.5.3.1

Kirjeldada peamisi traadita võrgu (WLAN) komponente ja määratleda nende otstarve.

#### C.5.3.2

Hinnata erinevate WLAN tehnoloogiate ühilduvust.

#### C.5.3.3

Kirjeldada peamised satelliitsidevõrgu komponendid.

#### C.5.3.4

Kirjeldada peamised mobiilside tugijaamade protokollid nagu mobiilne IP, HSPA, LTE, 5G NR

#### C.5.3.5

Määratleda iga mobiilse protokolli rakendusala tugijaamades.

#### C.5.3.6

Määratleda raadiosagedus- tuvastus (RFID) ja selle kasutus- alad nagu passituvastus, toote jälgimine, ühistranspordi piletisüsteem, inventuuri- süsteemid.

## C.6 Võrguhaldus

### C.6.1 Võrguhalduse põhimõtted

#### C.6.1.1

Kirjeldada peamisi võrguhaldus- süsteemi funktsioone.

#### C.6.1.2

Kirjeldada erinevaid hallatavaid parameetreid võrgus nagu jõudlus, tõrked, konfiguratsiooniseaded.

#### C.6.1.3

Võrrelda erinevaid võrgu- haldussüsteemide arhitektuure.

### C.6.2 Lihtne võrguhaldus protokoll (SNMP)

#### C.6.2.1

Kirjeldada SNMP protokolli peamised komponendid.

#### C.6.2.2

Kirjeldada SNMP poolt pakutavad teenused.

#### C.6.2.3

Määratleda SNMP protokolli piirangud.

### C.6.3 Süsteemi- ja võrguhalduse tööriistad

#### C.6.3.1

Kirjeldada erinevusi süsteemi- ja võrguhalduse tööriistade vahel.

#### C.6.3.2

Määratleda mõned laialtkasutatavad tarkvararakendused süsteemi- ja võrguhalduseks nagu ping, traceroute, tcpdump, OpenNMS, Paessler PRTG Network Monitor, Spiceworks Network Monitor.

#### C.6.3.3

Määratleda võrguhaldustarkvara opereerimiseks vajalikud infrastruktuurinõuded.

## C.7 Teenuste tarne

### C.7.1 Kliendisuhted ja tugitaseme lepingud

#### C.7.1.1

Kirjeldada teenustaseme haldusprotsessi ja selle tulu.

#### C.7.1.2

Loetleda ja kirjeldada peamised teenustaseme lepingu (SLA) elemendid nagu teenuste definitsioon, jõudluse mõõtmine., probleemihaldus, intellektuaalne omandiõigus ja konfidentsiaalne info, garantiid ja lepingu lõpetamine.

#### C.7.1.3

Võrrelda teenustaseme lepingu, partnerlepingu ja käitluslepingu kasutusotstarvet.

### C.7.2 Mahu ja talitluspidevuse planeerimine

#### C.7.2.1

Kirjeldada mahuhaldust ja selgitada selle kolem alamprotsessi (äri, teenus ja komponent) tähtsust.

#### C.7.2.2

Tuvastada mahuplaani otstarve ja peamised elemendid.

#### C.7.2.3

Määratleda riski, ohu ja haavatavuse mõisted ja tuua näiteid nagu teenuse tõrge, andmete kadu.

#### C.7.2.4

Loetleda riskipiiramise abinõude näiteid.

#### C.7.2.5

Määratleda talitluspidevusplaani ja varutalitluspidevusplaani otstarve ja peamised elemendid nagu rikketaluvus, taaskäivitamise protseduurid, personalitöö, alternatiivsed ressursid, varundus.

### C.7.3 Käideldavushaldus

#### C.7.3.1

Määratleda käideldavushalduse otstarve ja defineerida mõisted: käideldavus, töökindlus, tõrge, taastumine.

#### C.7.3.2

Võrrelda üldkasutatavaid käideldavusmõõdikuid nagu käideldavusprotsent, tõrkesagedus, keskmine tõrketa tööaeg, tõrke mõju.

#### C.7.3.3

Määratleda käideldavushalduse meetodid ja tehnikad nagu komponendi tõrke mõju analüüs, vigade puu analüüs.

### C.7.4 Kasutajatugi

#### C.7.4.1

Määratleda kasutajatoe otstarve tugiteenuseid pakkuvas ettevõttes.

#### C.7.4.2

Tuvastada erinevad kasutajatoe tüübid ja nende rakendamise sobivus vastavalt erinevatele asjaoludele.

#### C.7.4.3

Defineerida intsidendihalduse süsteemi peamised komponendid.

### C.7.5 Muutuste haldamine

#### C.7.5.1

Kirjeldada IT infrastruktuuri konfiguratsioonihalduse parimad praktikad.

#### C.7.5.2

Kirjeldada IT muudatusehalduse ja versioonihalduse parimad praktikad.

#### C.7.5.3

Defineerida muudatuse taotluse otstarve ja selle peamised elemendid.
