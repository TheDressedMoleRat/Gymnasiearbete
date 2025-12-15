# Enkelt textbaserat programmeringsspråk för spel

## Top-down game
Spelare:
```
hastighet: 10
om ➡️:
- gå höger

om ⬅️:
- gå vänster

om ⬇️:
- gå ner

om ⬆️:
- gå upp
```

Monster:
```
hastighet: 20
för alltid:
- gå höger
- vänta 0.5
- gå vänster
- vänta 0.5
```

Mål:
```
om rör "Spelare":
- vinn
```

## Platformer
```
hastighet: 8
➡️: gå höger
⬅️: gå vänster
⬆️: hoppa
```

Mål:
```
om rör "Spelare":
- vinn
```