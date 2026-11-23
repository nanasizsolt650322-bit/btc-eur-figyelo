# BTC–EUR Figyelő

Magyar nyelvű, telepíthető webalkalmazás Androidra és PC-re.

## Funkciók az első verzióban
- BTC/EUR árfolyam a Kraken nyilvános API-jából
- Iránybecslés 5 perces, 15 perces, 1 órás és 4 órás idősíkon
- EMA 9/21, RSI 14 és rövid távú lendület
- Lehetséges fordulópontok jelzése
- Összesített emelkedő / csökkenő / kivárás állapot
- Böngészős értesítések, ha az oldal nyitva van
- Mobil- és asztali képernyőre igazodó felület

## GitHub Pages bekapcsolása
1. Töltsd fel a projekt összes fájlját a privát `btc-eur-figyelo` repository gyökérkönyvtárába.
2. GitHubon: **Settings → Pages**.
3. A **Build and deployment** résznél válaszd: **Deploy from a branch**.
4. Branch: `main`, mappa: `/ (root)`, majd **Save**.
5. A Pages által megadott webcímen nyisd meg az alkalmazást.

Ha a privát repositoryhoz a GitHub-csomagod nem engedélyezi a Pages szolgáltatást, a repositoryt nem kell nyilvánossá tenni; szólj, és más privát telepítési módot választunk.

## Android telepítés
Nyisd meg a Pages webcímet Chrome-ban → három pont → **Alkalmazás telepítése** vagy **Hozzáadás a kezdőképernyőhöz**.

## Fontos korlátok
- Ez az első, működő prototípus, nem automatikus kereskedőrobot.
- A technikai iránybecslés nem garantálja az árfolyam következő mozgását, nem befektetési tanács.
- Az értesítések ebben a verzióban csak akkor működnek, ha az alkalmazás/böngésző nyitva van. Háttérben, bezárt alkalmazásnál küldött push értesítéshez később külön háttérszolgáltatást kell beállítani.
- A valós idejű adatok internetkapcsolatot és a Kraken API elérhetőségét igénylik.
