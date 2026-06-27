# ASZ Asten - Material Management UI

Touch-optimiertes Platz-Terminal und Live-Monitor für die Containerverwaltung des ASZ Asten. Ein minimalistisches, echtzeitfähiges Web-Interface 
für das Altstoffsammelzentrum Asten. Basiert auf HTML5 und lokalem Datensync. Es ermöglicht dem Personal auf dem Platz die schnelle Erfassung von 
Container-Füllständen via Tablet und spiegelt den Status sofort auf das Dashboard im Büro-PC.

## 🚀 Schnellstart

Da das Projekt aktuell als eigenständige, leichtgewichtige Web-App konzipiert ist, ist keine komplexe Installation notwendig:

1. Laden Sie die Datei `index.html` herunter.
2. Speichern Sie die Datei auf dem Büro-PC (z.B. in einem freigegebenen Netzwerkordner).
3. **Büro-Ansicht:** Öffnen Sie die Datei im Browser auf dem Büro-PC und klicken Sie oben rechts auf **"Ansicht wechseln (Büro PC)"**.
4. **Platz-Terminal (Tablet):** Öffnen Sie dieselbe Datei auf dem Tablet (über den Netzwerkpfad). Änderungen werden dank lokalem Speicher synchronisiert.

## 🛠️ Funktionen

- **Platz-Terminal:** Große, berührungsfreundliche Kacheln für die wichtigsten Abfallkategorien (Altholz, Bauschutt, Sperrmüll, etc.).
- **Drei-Stufen-Status:** Leer/Bereit (Grün), 75% Voll (Gelb), Kritisch/Voll (Rot mit Blinksignal).
- **Büro-Dashboard:** Live-Überwachung aller Container-Zustände inklusive fortlaufendem Aktivitätsprotokoll.
- **Datenexport:** Möglichkeit, das Tagesprotokoll mit einem Klick als `.csv`-Datei für Excel zu exportieren.

## 📈 Zukünftige Erweiterungen
- Umstellung von `localStorage` auf einen lokalen Node.js/Python-Server, falls die Synchronisation über mehrere separate Geräte/Netzwerke hinweg skaliert werden muss.
