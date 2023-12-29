---
title: Ethereum zu skalieren
description: Rollups fassen Transaktionen off-chain zusammen und senken so die Kosten für den Nutzer. Die Art und Weise, wie Rollups derzeit Daten verwenden, ist jedoch zu teuer und schränkt ein, wie günstig Transaktionen sein können. Proto-Danksharding behebt das.
lang: de
image: /roadmap/roadmap-transactions.png
alt: "Ethereum-Roadmap"
template: roadmap
---

Ethereum wird mit Hilfe von [Layer 2s](/layer-2/#rollups) (auch bekannt als Rollups) skaliert, die Transaktionen zusammenfassen und den Output an Ethereum senden. Obwohl Rollups bis zu achtmal günstiger sind als das Ethereum Mainnet, kann man Rollups noch weiter optimieren, um die Kosten für die Endnutzer zu senken. Rollups stützen sich auch auf einige zentralisierte Komponenten, die mit zunehmender Reife der Rollups von den Entwicklern entfernt werden können.

<InfoBanner mb={8} title="Transaktionskosten">
  <ul style={{ marginBottom: 0 }}>
    <li>Die heutigen Rollups sind <strong>~3-8x</strong> günstiger als die Ethereum Layer 1</li>
    <li>ZK-Rollups werden bald die Gebühren um <strong>~40-100x</strong> senken</li>
    <li>Bevorstehende Änderungen an Ethereum werden eine weitere <strong>~100-1000-fache</strong> Skalierung ermöglichen</li>
    <li style={{ marginBottom: 0 }}>Benutzer könnten von Transaktionskosten <strong>unter $0.001 </strong>profitieren</li>
  </ul>
</InfoBanner>

## Daten günstiger machen {#making-data-cheaper}

Rollups sammeln eine große Anzahl von Transaktionen, führen sie aus und übermitteln die Ergebnisse an Ethereum. Dabei entstehen viele Daten, die offen zugänglich sein müssen, damit jeder die Transaktionen selbst durchführen und überprüfen kann, ob der Rollup-Betreiber ehrlich war. Wenn jemand eine Unstimmigkeit feststellt, kann er eine Beschwerde einreichen.

### Proto-Danksharding {#proto-danksharding}

Rollup-Daten werden dauerhaft auf Ethereum gespeichert, was teuer ist. Über 90 % der Transaktionskosten, die die Nutzer für Rollups zahlen, sind auf diese Datenspeicherung zurückzuführen. Um die Transaktionskosten zu senken, können wir die Daten in einen neuen temporären "Blob"-Speicher verschieben. Blobs sind billiger, weil sie nicht dauerhaft sind; sie werden aus Ethereum gelöscht, sobald sie nicht mehr benötigt werden. Die langfristige Speicherung von Rollup-Daten obliegt denjenigen, die sie benötigen, wie Rollup-Betreibern, Börsen, Indexierungsdiensten usw. Das Hinzufügen von Blob-Transaktionen zu Ethereum ist Teil eines Upgrades, das als "Proto-Danksharding" bekannt ist. Es soll relativ bald - vielleicht Ende 2023 - ausgeliefert werden.

Nachdem Blob-Transaktionen durch Proto-Danksharding Teil des Ethereum-Protokolls geworden sind, wird es möglich sein, viele Blobs zu Ethereum-Blöcken hinzuzufügen. Dies wird eine weitere erhebliche (>100x) Steigerung des Ethereum-Durchsatzes und eine Senkung der Transaktionskosten bedeuten.

### Danksharding {#danksharding}

Die zweite Stufe der Erweiterung von Blobdaten ist kompliziert, weil sie neue Methoden zur Überprüfung der Verfügbarkeit von Rollup-Daten im Netz erfordert und davon abhängt, dass die Validatoren ihre Zuständigkeiten für die Blockbildung und den Blockvorschlag voneinander trennen. Außerdem muss kryptografisch nachgewiesen werden, dass die Validatoren kleine Teilmengen der Blobdaten überprüft haben.

Dieser zweite Schritt ist bekannt unter dem Namen [“Danksharding”](/roadmap/danksharding/). Es wird wahrscheinlich noch einige Jahre dauern, bis es vollständig umgesetzt ist. Danksharding stützt sich auf andere Entwicklungen wie die [Trennung von Blockbildung und Blockvorschlag](/roadmap/pbs) und neue Netzwerkdesigns, die es dem Netzwerk ermöglichen, die Verfügbarkeit von Daten effizient zu bestätigen, indem jeweils einige Kilobyte zufällig abgetastet werden, was als [data availability sampling (DAS)](/developers/docs/data-availability) bekannt ist.

<ButtonLink variant="outline-color" to="/roadmap/danksharding/">Mehr zu Danksharding</ButtonLink>

## Rollups dezentralisieren {#decentralizing-rollups}

[Rollups](/layer-2) sind bereits dabei, Ethereum zu skalieren. Ein [reichhaltiges Ökosystem von Rollup-Projekten](https://l2beat.com/scaling/tvl) ermöglicht es den Nutzern, schnell und kostengünstig Transaktionen durchzuführen und dabei eine Reihe von Sicherheitsgarantien zu bieten. Rollups wurden jedoch mit zentralisierten Sequenzern (Computer, die die gesamte Transaktionsverarbeitung und -aggregation durchführen, bevor sie an Ethereum übermittelt werden) gebootet. Dies ist anfällig für Zensur, da die Betreiber der Sequenzer sanktioniert, bestochen oder anderweitig kompromittiert werden können. Gleichzeitig unterscheiden sich [Rollups](https://l2beat.com) in der Art und Weise, wie sie die eingehenden Daten validieren. Am besten ist es, wenn die "Prüfer" Betrugs- oder Gültigkeitsnachweise vorlegen, aber noch sind nicht alle Rollups so weit. Selbst die Rollups, die Gültigkeits-/Betrugsnachweise verwenden, nutzen einen kleinen Pool von bekannten Prüfern. Daher besteht der nächste kritische Schritt bei der Skalierung von Ethereum darin, die Verantwortung für den Betrieb von Sequenzern und Prüfern auf mehr Personen zu verteilen.

<ButtonLink variant="outline-color" to="/developers/docs/scaling/">Mehr zu Rollups</ButtonLink>

## Aktueller Fortschritt {#current-progress}

Proto-Danksharding wird wahrscheinlich einer der ersten Punkte auf der Roadmap sein, der umgesetzt wird. Die für die Einrichtung erforderlichen dezentralen Berechnungsschritte sind bereits im Gange, und mehrere Kunden haben Prototypen für die Verarbeitung von Blob-Daten implementiert. Das vollständige Danksharding wird wahrscheinlich noch einige Jahre auf sich warten lassen, da es davon abhängt, dass zunächst einige andere Punkte der Roadmap abgeschlossen werden. Die Dezentralisierung der Rollup-Infrastruktur wird wahrscheinlich ein schrittweiser Prozess sein - es gibt viele verschiedene Rollups, die leicht unterschiedliche Systeme aufbauen und in unterschiedlichem Tempo vollständig dezentralisieren werden.
