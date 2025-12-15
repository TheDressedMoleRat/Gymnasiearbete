# Projektplan Gymnasiearbetet
Namn: Alvar de Paulis  
Klass: TE23B

## Projektbeskrivning
Titel: Pedagogiskt spel för att lära ut textbaserad programmering till mellanstadieelever.

Beskrivning: Ett spel som lär ut programmering med hjälp av en textbaserad kodredigerare och en grafiskt presenterad utmaning med en programmerbar karaktär som ska nå ett mål. Målgruppen är mellanstadieelever, och ska därför inte vara komplicerad, så tanken är att skapa ett eget enkelt programmeringsspråk istället för att interpretera ett befintligt. Spelet ska programmeras i Javascript, eftersom det är tillgängligt att köra i webbläsare, och jag känner till språket tillräckligt för att projektet ska vara realistiskt. Det finns många spel med målet att introducera programmering, men de använder ofta blockprogrammering istället för text vilket jag anser är ett onödigt hinder mellan dem och riktig programmering. Därför kommer mitt spel utgå från textkodning.

## Kravspecifikation
Grundkrav:
- En textbaserad kodredigerare
- Kod som kan styra en karaktär
- Minst en bana
- Grafik för banan

Krav som borde inkluderas:
- Minst fem banor
- Animationer på karaktären

Krav som kan inkluderas:
- Ett separat high-score-läge
- Minst tio banor

## Metod
Jag kommer använda en blandning av TDD (test driven development) och FDD (feature driven development). TDD innebär att jag kommer programmera automatiserade tester som ska köra på koden, och sedan ska koden utvecklas tills testerna kan köras korrekt. FDD innebär generellt att ett antal delmål definieras, och sedan itereras utvecklingen för varje delmål. Spelets interpreterare (det som tolkar koden som spelaren skriver) kan med fördel testas med TDD eftersom det är ett deterministiskt system med tydliga önskade outputs för godtyckliga inputs. Resten av spelet, som design av banor och grafik, menyer samt inledning bör utvecklas med mycket testning (playtesting) med metoder tagna från principerna i FDD.

## Material
Med en del av budgeten vi tilldelas vill jag köpa ett så kallat asset pack med grafik och eventuella animationer. Det innebär att jag inte kommer behöva rita alla sprites själv vilket kommer spara tid. Då jag vill välja ett asset pack som kostar pengar istället för att erbjudas gratis kommer det kanske göra spelets utseende mer enhetligt och professionellt, om jag väljer ett bra pack. På hemsidan itch.io finns många asset packs för olika typer av spel, och det finns både gratis packs och packs vid olika priser. Nästan alla kostar under 500kr, och de allra flesta även under 100kr.

## Examensmål
> Teknikutveckling innebär att analysera behov, utveckla en idé, designa, konstruera, producera, använda, sälja och återvinna.

Jag har hittat behovet av ett enkelt sätt att komma in i textbaserad programmering, då många befintliga sätt att lära sig programmering antingen använder riktiga språk eller blockprogrammering.

> Utbildningen ska också innehålla kreativa och problemlösande arbetsformer samt ge förutsättningar för eleverna att utveckla ett tvärvetenskapligt förhållningssätt.

Jag kommer behöva anpassa mitt spel efter hur mycket mellanstadieelever kan om programmering och hur jag mest effektivt lär ut främmande koncept.

> Teori och praktisk tillämpning ska samverka och utbildningen ska ge eleverna kunskaper om och färdigheter i att samarbeta med andra.

I utvecklingen av projektet måste jag samverka och samarbeta med eleverna som är målgruppen för spelet för att det inte ska bli för tråkigt, svårt eller lätt.

> Eftersom utveckling av teknik ofta sker i projektarbetsform, ska utbildningen ge kunskaper om projektarbete och färdigheter i att arbeta i projekt såväl enskilt som i grupp.

Med en projektplan, kravspecifikation och slutligen rapport kommer jag ha jobbat i projektarbetsform.

> Utbildningen ska vidareutveckla elevernas kommunikativa förmågor i tal, skrift och visualisering. Det innebär bland annat att förmedla synpunkter, förklara sammanhang och dokumentera samt använda uttrycksformer anpassade till olika målgrupper och att förstå kommunikationens specifika roll inom teknikområdet.

I samarbetet med eleverna som ska spela spelet kommer jag kommunicera i tal och skrift för att utveckla och slutföra spelet.

> Utbildningen ska ge eleverna kunskaper om och färdigheter i engelska i en teknisk kontext, så att de kan utveckla sin kommunikativa förmåga och därmed ta del av teknik och teknikutveckling.

Programmering sker huvudsakligen på engelska, och jag planerar att språket jag ska utveckla därför också använder engelska. 

> Eleverna ska även utveckla förståelse av människors olika förutsättningar i förhållande till teknik och teknikutveckling.

Med projektet kommer jag undersöka hur elever som inte kan programmera kan lära sig kodning och så småningom komma in i teknikbranschen.

> Inriktningen informations- och medieteknik ska ge fördjupade kunskaper om och färdigheter i arbetsmetoder och verktyg för att skapa digitala produkter, tjänster och system. Den ska behandla programmering, digital media, webbutveckling samt dator- och kommunikationsteknik.

Mitt spel kommer presenteras som en digital produkt i form av en interaktiv sida, vilket innebär att jag kommer arbeta med programmering och webbutveckling.

## Att göra:
Till att börja med:
- Undersök hur andra jämförbara spel fungerar, bland annat i UI och level-design
- Ta fram ett system för vilka kommandon som ska finnas och spåna hur banor kan se ut utifrån det systemet
- Skapa en sida med HTML, CSS och JS med en textredigerare och en spelare som renderas på ett rutnät
- Gör ett script som går igenom texten och kör texten som kommandon som förflyttar spelaren
- Hitta åtminstone fungerande grafik för spelaren och världen

Om det finns tid:
- Designa felhantering med relevanta felmeddelanden
- Implementera den första banan
- Köp eller ladda ner ett asset pack och implementera det
- Bygg fler banor

## Intervju
- Har ni publicerat powerpointen?
	- JA: Var?
	- NEJ: Publicera powerpointen (inte en fråga)
		- Svar: Ok jag har sagt åt Anna att säga åt Anders
- Jag har en inlämnad projektplan som följde mallen vi tilldelades i word, inklusive metod. Jag fick responsen "ämnet är godkänt, använd word", vilket alltså innebär att min metod är klar. Ska jag nu uppdatera min plan med hänsyn till presentationen ni just höll? Ska jag ta bort min text under "metod" som följde mallen, och ersätta det med text som följer instruktionerna i powerpointen?
	- Svar: JA, lägg till i Metod-underrubriken. Skriv om metoden, med källor.
- När jag fick respons på min projektplan, innebar det att den var så klar som projektplanen skulle vara då, men att vi nu ska utveckla och lämna in en större projektplan.
	- Svar: Ja, det verkar rimligt, tycker jag, ja.
- Är mallen tillsammans med powerpointen vi tilldelats en komplett beskrivning av vad som bör lämnas in?
	- Svar: Jepp.
- Får man skriva jag?
	- Svar: Ja, men inte i rapporten i jul.

Slutsats: Rapporten var klar för ett tag sen enligt då, nu ska vi förutom mallen lägga till baserat på powerpointens instruktioner.