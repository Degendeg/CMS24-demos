-------- Step-by-step med npm create vite@latest & git --------

NOTIS: När det står skriv: så menar jag i en terminal/cmd

---------------------------------------------------------------

1. Installera Node (du får npm på köpet)

2. Öppna en terminal, antingen i VSCode direkt eller externt
	2a. Ändra mapp så du står där du vill skapa projektet (cd är kommandot, står för change directory)

3. skriv: npm create vite@latest (om first-time, godkänn med y)

4. skriv in ditt projektnamn (detta blir namnet på din mapp)

5. Välj React - välj JavaScript

6. skriv: cd your-project-name (där du byter ut namnet till din nyskapade mapp)

7. skriv: code . (du öppnar upp projektet i VSCode)

8. skriv: npm i (du installerar paketen utifrån package.json och resultatet blir en node_modules mapp)

9. OPTIONAL: ta bort boilerplate kod i App.jsx samt SVGer, du får lite på köpet när du sätter upp en React app på detta sätt

10. skriv: npm run dev (starta lokal webbserver och få möjlighet att GETa din app, vanligtvis http://localhost:5173