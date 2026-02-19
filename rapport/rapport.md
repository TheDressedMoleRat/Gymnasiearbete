Pedagogiskt spel för att lära ut textbaserad programmering till mellanstadieelever
==============================================================================

## Inledning

### Syfte
När jag var sju år gammal introducerades jag till Scratch. Det är ett programmeringsspråk som använder block istället för text, och det är skapat av MIT för att lära barn och ungdomar att programmera.

### Frågeställning


### Metod
Från ett generellt perspektiv skulle en lämplig metod vara att kommunicera med mina klienter vilket inkluderar lärare och elever, och iterativt utveckla prototyper, alfa- och beta-versioner, och slutligen en fungerande produkt (Rouse, 2024). Från ett realistiskt perspektiv anpassat för ett gymnasiearbete kommer en mindre skala krävas. Jag kommer kunna samarbeta med klienterna genom att göra vissa kvalitativa undersökningar åtminstone två gånger, men huvudsakligen utvecklar jag programmet själv.

Jag ska boka ett möte med en programmeringslärare på en mellanstadieskola i Stockholms län. Där ska jag anteckna om vad lärare värdesätter i pedagogiska spel samt boka en tid att testa det färdiga spelet med eleverna. Där ska jag också utföra kvantitativa undersökningar kring programmeringserfarenhet och föredragna inlärningsmetoder hos eleverna i en vald mellanstadieklass.

Jag kommer använda en blandning av  TDD (test-driven development, testdriven utveckling) och FDD (feature-driven development, funktionsdriven utveckling). TDD innebär att jag kommer programmera automatiserade tester som ska köras på koden, och sedan ska koden utvecklas tills testerna kan köras korrekt (Fowler, 2023). FDD innebär generellt att ett antal delmål definieras, och sedan itereras utvecklingen för varje delmål (planview, 2021). Spelets interpreterare (det som tolkar koden som spelaren skriver) kan med fördel testas med TDD eftersom det är ett deterministiskt system med tydliga önskade outputs för godtyckliga inputs (Sassi, 2024). Resten av spelet, som design av banor och grafik, menyer samt introduktion bör utvecklas med mycket testning (playtesting, speltestning) med metoder tagna från principerna i FDD, eftersom det är den enligt många bästa metoden för att försäkra bra speldesign (Felder, 2015).

Jag ska använda mig av både kvalitativa och kvantitativa undersökningar. Jag ska prata med lärare på skolan jag tänker utföra mitt projekt kring, för att undersöka hur jag borde gå till väga för att interagera med eleverna och klasserna. Diskussioner med lärare kommer ske med en kvalitativ metod. Det gör att jag kommer få tydliga exempel och riktlinjer att utgå från när jag utvecklar programmet (Norstat, 2023).

Jag vill också göra kvantitativa undersökningar i form av frågor till elever, för att lära mig om hur elever lärt sig programmering, hur mycket de redan kan och hur de föredrar att ett pedagogiskt program fungerar med en lektionsstruktur. Baserat på de kvantitativa undersökningar ska jag samla statistik som kan användas för att utforma spelets design, till exempel för att anpassa . Den kvantitativa metoden är i det här fallet lämplig eftersom jag vill få information som är representativ av många olika elever för att anpassa programmet efter en så stor grupp som möjligt. (Norstat, 2023)

Eftersom spelet ska kunna köras på Apple iPads som eleverna har tillgång till kan det vara antingen en applikation på App Store eller en webbapplikation. Att publicera på App Store kräver en stor budget och kräver erfarenhet och verktyg jag inte har tillgång till (Muscara, 2025; Apple, 2025). Därför bör programmet utvecklas för webben. Det finns flera tjänster där man utan kostnad kan ladda upp en webbsida till en server, bland andra Github Pages. Med Github Pages kan användare kostnadsfritt publicera statiska hemsidor, alltså sidor som inte kräver kommunikation med en server (GeeksforGeeks, 2025). Mitt spel kräver inte det, och jag har tidigare erfarenhet med Github Pages, så det är tjänsten jag kommer använda.

Spelmotorer som Unity eller Godot kan exportera till webbappar (Godot, 2023; Unity, 2017). Det kan vara lättare att utveckla spel med dem eftersom de är därför anpassade, men de webbapparna kör långsammare än jämförbara program skrivna i JavaScript som kan köras direkt på webben (Mozilla, 2025).

Det går att göra spel i JavaScript utan tillägg, men det blir betydligt lättare, snabbare och mer effektivt med ett bibliotek för spelutveckling. Det mest populära biblioteket för 2D-spel i JavaScript är Phaser (Envato, n.d.), och det är det som kommer användas i det här arbetet.

Enligt Skolverket (2022) kräver ämnet teknik i mellanstadiet (åk 4-6) att elever lär sig ”hur datorer styrs av program” och mer specifikt ”styrning av egna konstruktioner eller andra föremål med programmering”. Mitt spel främjar dessa punkter genom att pedagogiskt introducera hur programmering kan styra både datorer och i här fallet en karaktär i ett spel.

## Bakgrund


## Resultat


## Diskussion


## Tack


## Referenslista


## Bilagor

