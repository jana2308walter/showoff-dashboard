# Showoff-Dashboard

Ein Dashboard für verschiedene Wetterdaten. Zeigt tägliche, stündliche und aktuelle Vorhersagen basierend auf den angegebenen Koordinaten an.

Die API für die Wetter-Daten ist [Open-Meteo](https://open-meteo.com/en/docs).

Befehle zum Deployen auf Github: 
  - Build: ng build --configuration production --base-href /showoff-dashboard/
  - Deploy: npx angular-cli-ghpages --dir=dist/showoff-dashboard/browser
