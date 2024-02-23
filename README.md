Informacje formalne
Nazwa projektu: Zestawienie danych na temat migracji ludności i cen mieszkań w okresie z 2011 po 2021 z uwzględnieniem regionów
Skład grupy projektowej:
Artem Vyhivskyi: Poszukiwanie danych, tworzenie backendu, przetwarzanie danych, wspólne tworzenie frontendu
Daria Vovk: Poszukiwanie danych, wspólne tworzenie frontendu, analiza wyników
Wykorzystane technologie:
Backend: Express.js
Frontend: React
Baza danych: MongoDB

Opis projektu
Nasza aplikacja "Zestawienie danych na temat migracji ludności i cen mieszkań w okresie z 2011 po 2021 z uwzględnieniem regionów" ma na celu zintegrowanie danych 
dotyczących migracji ludności oraz cen mieszkań. Dzięki tej aplikacji użytkownicy mogą przeglądać informacje na temat migracji ludności między regionami w określonym 
okresie czasu oraz analizować zmiany cen mieszkań w różnych regionach.
Przykładowe pytania, na które można znaleźć odpowiedzi wykorzystując naszą aplikację:
Jak zmieniały się ceny mieszkań w poszczególnych regionach w okresie od 2011 do 2021 roku?
Jak zmieniało się saldo migracji miejskich danym okresie?
Jaki był wpływ migracji ludności na ceny mieszkań w poszczególnych regionach?

Konfiguracja środowiska
Aby uruchomić projekt, należy wykonać następujące kroki:
Połączyć się z bazą danych MongoDB Atlas.
Uruchomić oddzielne terminale i użyć polecenia "npm start", aby uruchomić aplikację serwerową i klienta.

Wymagane zależności
Należy się upewnić, że są zainstalowane następujące zależności:
Moduł Chart.js w wersji 2.9.4, który jest wykorzystywany do rysowania wykresów.
Zmodyfikowany plik webpack.config.js, który umożliwia przetwarzanie danych wczytanych z pliku XML.
Dodatkowo do przesyłanych aplikacji należy doinstalować node_moduls.

Źródła danych
Dane dotyczące cen mieszkań zostały pobrane ze strony Narodowego Banku Polskiego.
Dane dotyczące migracji ludności zostały pobrane ze strony Głównego Urzędu Statystycznego.
