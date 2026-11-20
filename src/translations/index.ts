export type Language = 'de' | 'en';

export const translations = {
  de: {
    nav: {
      brandSub: 'Atelier Zürich • Nur nach Termin',
      services: 'Dienstleistungen',
      customizer: '3D Visualisierer',
      finishes: 'Oberflächen',
      portfolio: 'Portfolio',
      howItWorks: 'Ablauf',
      about: 'Über uns',
      pricing: 'Pakete',
      reviews: 'Kundenstimmen',
      faq: 'FAQ',
      contact: 'Angebot anfragen',
      imprint: 'Impressum',
      privacy: 'Datenschutz',
    },
    finishesShowcase: {
      badge: 'Oberflächen & Materialien Showcase',
      titleLine1: 'FIND YOUR FINISH',
      titleLine2: 'Haptik & Materialproben',
      description: 'Entdecken Sie die fünf exklusiven Oberflächen-Kategorien unseres Ateliers. Jedes Finish wird mit erstklassigen Folien verarbeitet und bietet hervorragenden UV- und Lackschutz.',
      finishCategoryLabel: 'Finish Spezifikation',
      durabilityLabel: 'Haltbarkeit',
      maintenanceLabel: 'Pflegeaufwand',
      configureBtn: 'In 3D Visualisierer anpassen',
      items: [
        {
          id: 'satin',
          name: 'Satin Finish (Seidenmatt)',
          specCode: 'JD-SATIN-MATTE-01',
          swatchHex: '#5b6572',
          sheenLevel: '30% Reflexion / Seidenglanz',
          image: 'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&w=1200',
          description: 'Der perfekte Kompromiss zwischen Glanz und Matt. Reflektiert Licht in weichen Konturen und betont die Formensprache von Sportwagen wie dem Porsche 911.',
          durability: '5 – 7 Jahre Garantie',
          maintenance: 'Standard Textilwäsche / Handwäsche',
          features: [
            'Sanfter Seidenglanz hebt Karosserie-Lichtkanten hervor',
            'Sehr widerstandsfähig gegen Fingerabdrücke und Wasserflecken',
            'Optional mit transparenter Satin-PPF kombinierbar'
          ]
        },
        {
          id: 'gloss',
          name: 'Hochglanz Veredelung',
          specCode: 'JD-GLOSS-PIANO-02',
          swatchHex: '#64748b',
          sheenLevel: '98% Tiefenglanz / Spiegeleffekt',
          image: 'https://images.pexels.com/photos/3311574/pexels-photo-3311574.jpeg?auto=compress&w=1200',
          description: 'Maximale Farbtiefe und brillanter Spiegeleffekt. Nicht von einer hochwertigen Mehrschicht-Werkslackierung zu unterscheiden.',
          durability: '5 – 7 Jahre Garantie',
          maintenance: 'Handwäsche empfohlen',
          features: [
            'Tiefenbrillanz vergleichbar mit Keramik-Klarlack',
            'Nahtlose Optik für Vollfolierung & Dachakzente',
            'UV-Schutzfilter verhindert Verblassen'
          ]
        },
        {
          id: 'matte',
          name: 'Strukturfreies Matt',
          specCode: 'JD-MATTE-STEALTH-03',
          swatchHex: '#121214',
          sheenLevel: '5% Reflexion / Stealth Optics',
          image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=1200',
          description: 'Aggressiver, kompromissloser Stealth-Look. Licht wird schattenfrei absorbiert für ein pures, monolithisches Erscheinungsbild.',
          durability: '5 – 7 Jahre Garantie',
          maintenance: 'Spezielle Matt-Folienpflege',
          features: [
            '0% störende Lichtreflexionen',
            'Verleiht der Karosserie eine muskulöse Silhouette',
            'Perfekt für Chrome Delete & Gesamtfahrzeug'
          ]
        },
        {
          id: 'metallic',
          name: 'Metallic & Perleffekt',
          specCode: 'JD-METALLIC-QUARTZ-04',
          swatchHex: '#b45309',
          sheenLevel: 'High-Sparkle Flake Optik',
          image: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&w=1200',
          description: 'Angereichert mit feinsten Pigment- und Metallic-Flakes. Erzeugt bei Sonneneinstrahlung faszinierende Farb- und Glanzeffekte.',
          durability: '5 – 7 Jahre Garantie',
          maintenance: 'Einfache Standardpflege',
          features: [
            'Hochverdichtete Metallic-Pigmentierung',
            'Dreidimensionale Tiefe unter direktem Sonnenlicht',
            'Verfügbar in Satin-Metallic & Glanz-Metallic'
          ]
        },
        {
          id: 'special',
          name: 'Forged Carbon & Spezial-PPF',
          specCode: 'JD-CARBON-SPECIAL-05',
          swatchHex: '#064e3b',
          sheenLevel: 'Echt-Struktur & Color-Shift',
          image: 'https://img.b2bpic.net/free-photo/person-working-car-wrapping_23-2149342620.jpg',
          description: 'Exklusive Spezialfolien von Forged Carbon Texturen über chamäleonartige Color-Shift Folien bis hin zu selbstheilender Stealth-PPF.',
          durability: 'Bis zu 10 Jahre Garantie',
          maintenance: 'Sehr pflegeleicht',
          features: [
            'Fühlbare Forged Carbon- & Waben-Strukturen',
            '200-Mikron PPF Schlagfestigkeit gegen Alpinsplit',
            'Color-Shift Effekt je nach Blickwinkel'
          ]
        }
      ]
    },
    howItWorks: {
      badge: 'Der Weg zu Ihrem Wunschfahrzeug',
      titleLine1: 'HOW IT WORKS',
      titleLine2: '4-Schritte Customer Journey',
      description: 'Von der ersten Idee bis zur Schlüsselübergabe in unserem Zürcher Reinraum-Atelier — präzise, transparent und persönlich.',
      ctaTitle: 'Bereit für Ihre Fahrzeug-Transformation?',
      ctaSubtitle: 'Vereinbaren Sie Ihren persönlichen Beratungstermin im Kanton Zürich.',
      ctaButton: 'Beratungstermin Buchen',
      steps: [
        {
          number: '01',
          title: 'Erstberatung & Folienauswahl',
          description: 'Gemeinsam besprechen wir Ihre Wünsche. Sie begutachten echte Folienmuster (Satin, Matt, Glanz, PPF) an Ihrem Fahrzeug und wählen Ihre Wunscheigenschaften.',
          highlight: 'Persönlich & Diskret'
        },
        {
          number: '02',
          title: 'Individuelle Offerte & Termin',
          description: 'Sie erhalten eine transparente Fixpreis-Offerte inklusive Zeitplan. Nach der Terminbestätigung reservieren wir den Reinraum exklusiv für Ihren Wagen.',
          highlight: 'Transparentes Fixpreisangebot'
        },
        {
          number: '03',
          title: 'Reinraum-Prep & Knifeless Wrap',
          description: 'Gründliche Lackentfettung, Demontage von Zierteilen falls nötig, und messerfreie Knifeless-Tape Verklebung ohne jegliches Klingenrisiko am Werkslack.',
          highlight: '0% Klingen-Risiko'
        },
        {
          number: '04',
          title: 'Qualitätsprüfung & Übergabe',
          description: 'Akribische Endkontrolle im Lichttunnel, Empfehlungen zur Pflege sowie Übergabe des Atelier-Garantiezertifikats bei der Fahrzeugabholung.',
          highlight: 'Lichttunnel Qualitätscheck'
        }
      ]
    },
    hero: {
      locationBadge: 'Kanton Zürich, Schweiz',
      appointmentBadge: 'Nur nach Terminvereinbarung',
      subheading: 'JD CAR WRAPPING ATELIER ZÜRICH',
      h1Line1: 'REDEFINE',
      h1Line2: 'YOUR DRIVE.',
      tagline: 'Präzision. Schutz. Personalisierung.',
      description: 'Schweizer Atelier für exklusive Autofolierung, Lackschutzfolie (PPF), Chrome Delete und Keramik-Scheibentönung. Höchste Präzision für Sportwagen und Luxusfahrzeuge im Kanton Zürich.',
      createStyleBtn: 'KREIEREN SIE IHREN STIL',
      explorePortfolioBtn: 'Portfolio erkunden',
      whatsappBtn: 'WhatsApp',
      badge1: 'Staubfreier Reinraum',
      badge2: '0% Messer-Risiko (Knifeless)',
      badge3: '10 Jahre PPF Garantie',
      badge4: '100% Schweizer Strassenzulassung',
    },
    services: {
      badge: 'Zürcher Atelier Leistungen',
      titleLine1: 'Präzisionshandwerk',
      titleLine2: 'Für Perfektion am Automobil',
      description: 'Fünf spezialisierte Veredelungs- und Schutzleistungen, ausgeführt in unserem staubfreien Atelier im Kanton Zürich mit modernsten Markenfolien.',
      finishesTitle: 'Verfügbare Oberflächen & Texturen',
      craftsmanshipTitle: 'Qualitäts- und Handwerksstandards',
      turnaroundLabel: 'Dauer',
      warrantyLabel: 'Garantie',
      customize3d: 'In 3D anpassen',
      inquireNow: 'Jetzt anfragen',
      items: [
        {
          id: 'full-wraps',
          title: 'Vollfolierung (Full Wrap)',
          subtitle: 'Komplette Farb- & Texturtransformation',
          category: 'Vollkarosserie Veredelung',
          description: 'Verwandeln Sie die Ästhetik Ihres Fahrzeugs mit einer nahtlosen Vollfolierung. Jede Karosseriefläche, Türgriff und Kante wird akribisch vorbereitet und ohne sichtbare Originallack-Kanten foliert.',
          finishes: ['Glanz', 'Matt', 'Satin', 'Metallic', 'Color-Shift', 'Carbon & Struktur'],
          keyFeatures: [
            'Präzise Kantenumbiegung an allen Türen & Klappen',
            'Schützt den werkseitigen Originallack vollständig',
            'Jederzeit rückstandslos entfernbar',
            'Europäische Premiumfolien (3M, Avery Dennison, Inozetek)'
          ],
          turnaround: '3 – 5 Arbeitstage',
          warranty: '5 Jahre Atelier Garantie',
        },
        {
          id: 'partial-wraps',
          title: 'Teilfolierung & Akzente',
          subtitle: 'Zielgerichtetes Styling für Dach, Haube & Aerodynamik',
          category: 'Kombinations-Styling',
          description: 'Setzen Sie markante Akzente an Schlüsselstellen Ihres Fahrzeugs. Von Glanz-Schwarz-Dachfolierungen über Forged-Carbon-Motorhauben bis hin zu individuellen Zierstreifen.',
          finishes: ['Pianoseiden-Schwarz', 'Forged Carbon', 'Satin Dunkelgrau', 'Individuelle Streifen'],
          keyFeatures: [
            'Panorama-Dachfolierung in Tiefschwarz Glanz',
            'Motorhauben- & Spoiler-Akzente in Echt-Carbon-Optik',
            'Plottergeschneidertes Zierstreifen-Design',
            'Knifeless-Tape Technologie — 0% Klingenrisiko'
          ],
          turnaround: '1 – 2 Arbeitstage',
          warranty: '3 Jahre Atelier Garantie',
        },
        {
          id: 'chrome-delete',
          title: 'Chrome Delete',
          subtitle: 'Edles Blackout-Package für Fensterleisten & Embleme',
          category: 'Detail-Styling',
          description: 'Ersetzen Sie glänzende Chromleisten durch einen edlen Stealth-Look. Wir folieren Fenstereinfassungen, Kühlergrille, Seitenauslässe und Logos in hochwertiger dunkler Folie.',
          finishes: ['Satin Obsidian Schwarz', 'Glanz Piano Schwarz', 'Matte Kohle'],
          keyFeatures: [
            'Komplettes Fensterleisten-Blackout-Set',
            'Frontgrill- & Nieren-Folierung',
            'Embleme, Schriftzüge & Auspuffblenden-Akzente',
            'Witterungsbeständig gegen Schweizer Streusalz & Waschanlagen'
          ],
          turnaround: '1 Arbeitstag',
          warranty: '3 Jahre Atelier Garantie',
        },
        {
          id: 'ppf',
          title: 'Lackschutzfolie (PPF)',
          subtitle: 'Unsichtbare, selbstheilende Polyurethan-Panzerung',
          category: 'Lackschutz',
          description: 'Schützen Sie den werkseitigen Lack vor Steinschlägen, Split, Insekten und Parkkratzern mit einer glasklaren, selbstheilenden 200-Mikron-Lackschutzfolie.',
          finishes: ['Glasklar Glanz PPF', 'Stealth Satin Matt PPF', 'Hydrophobe Versiegelung'],
          keyFeatures: [
            'Wärmeaktivierbare selbstheilende Oberflächenschicht',
            'Computergestützte CAD-Passformen für perfekte Abdeckung',
            'Front-Vollschutz-Paket oder 100% Ganzkörper-Schutz',
            '10 Jahre Garantie gegen Vergilbung & Rissbildung'
          ],
          turnaround: '2 – 4 Arbeitstage',
          warranty: '10 Jahre Herstellergarantie',
        },
        {
          id: 'window-tinting',
          title: 'Scheibentönung',
          subtitle: 'Keramik-Hitzeschutz & Sichtschutz nach ASTRA-Norm',
          category: 'Glasschutz',
          description: 'Erreicht hervorragenden Wärmeschutz und Blendschutz mit Nano-Keramik-Tönungsfolien. 100% konform mit den Schweizer Strassenverkehrsvorschriften (ASTRA).',
          finishes: ['Keramik 5% Privacy', 'Keramik 15% Dunkel', 'Keramik 35% Mittel', 'Keramik 70% Hell'],
          keyFeatures: [
            'Bis zu 99% Schutz vor schädlicher UV-Strahlung',
            '92% Infrarot-Wärmeabweisung für kühlen Innenraum',
            '100% Schweizer Strassenzulassung im Kanton Zürich',
            'Metallfrei — keine Störung von Mobilfunk oder GPS'
          ],
          turnaround: '4 – 6 Stunden',
          warranty: 'Lebenslange Scheibengarantie',
        }
      ]
    },
    customizer: {
      badge: 'Interaktives Atelier 3D',
      title: 'KREIEREN SIE IHREN STIL',
      subtitle: 'Visuelle 360°-Konfiguration & Farbauswahl',
      instruction: 'Wählen Sie Ihre gewünschte Folienfarbe und Oberflächenstruktur aus. Übernehmen Sie die Konfiguration anschliessend direkt in Ihre unverbindliche Offertanfrage.',
      finishesLabel: 'Oberfläche / Finish',
      finishes: {
        matte: 'Matt',
        gloss: 'Glanz',
        satin: 'Satin',
        metallic: 'Metallic'
      },
      colorsLabel: 'Farbpalette',
      activeSpecLabel: 'Aktuelle Konfiguration',
      applyBtn: 'Konfiguration in Anfrage übernehmen',
      appliedToast: 'Spezifikation wurde in das Anfrageformular übernommen!',
    },
    portfolio: {
      badge: 'Atelier Portfolio',
      titleLine1: 'Fahrzeug-Transformationen',
      titleLine2: 'Galerie Kanton Zürich',
      description: 'Entdecken Sie unser Portfolio aus exklusiven Autofolierungen, PPF-Lackschutz und individuellen Veredelungen für anspruchsvolle Fahrzeughalter.',
      sliderTitle: 'Exklusive Transformation — Regler ziehen',
      sliderBefore: 'Original Werkslack',
      sliderAfter: 'Atelier Satin Obsidian Black',
      categories: {
        all: 'Alle',
        fullWraps: 'Vollfolierung',
        partialWraps: 'Teilfolierung',
        chromeDelete: 'Chrome Delete',
        ppf: 'Lackschutz (PPF)',
        windowTinting: 'Scheibentönung',
      },
      inspectBtn: 'Details ansehen',
      modalClose: 'Schliessen',
      modalBefore: 'Vor der Folierung',
      modalAfter: 'Nach der Veredelung',
      modalInstruction: 'Regler verschieben, um Werkslack mit Folienfinish zu vergleichen',
      requestQuoteForSpec: 'Offerte für diese Konfiguration anfragen',
      turnaroundLabel: 'Dauer',
      studioLabel: 'Atelier',
      specsHeader: 'Highlights der Ausführung',
    },
    about: {
      badge: 'Atelier Kanton Zürich',
      titleLine1: 'Präzision. Schutz.',
      titleLine2: 'Personalisierung.',
      p1: 'JD CAR WRAPPING ATELIER wurde mit einem klaren Anspruch gegründet: Kompromisslose Fahrzeugveredelung und höchster Lackschutz für Automobil-Liebhaber und Sammler im Kanton Zürich.',
      p2: 'Wir arbeiten ausschliesslich nach privater Terminvereinbarung in unserem modern ausgestatteten Atelier im Kanton Zürich. Wir verbinden Schweizer Präzisionshandwerk, staubfreie Reinraum-Vorbereitung und Knifeless-Tape-Technologie für absolut klingenfreie Folierungen.',
      checklists: [
        { title: 'Klimatisierter Reinraum', desc: 'Gefilterte Luftzirkulation verhindert Mikrostaub für ein seidenweiches Folienfinish.' },
        { title: '0% Klingen-Risiko', desc: 'Knifeless-Filamentbänder garantieren exakte Schnittlinien ohne jeglichen Klingenkontakt zum Lack.' },
        { title: 'Diskrete Exklusivität', desc: 'Persönliche Betreuung und volle Aufmerksamkeit für jedes anvertraute Fahrzeug.' },
        { title: 'Schweizer Strassenzulassung', desc: 'Sämtliche Scheibentönungen und Modifikationen entsprechen 100% den ASTRA-Vorschriften.' }
      ],
      stats: {
        v1: '500+',
        l1: 'Fahrzeuge foliert',
        v2: '10 Jahre',
        l2: 'PPF Garantie',
        v3: '100%',
        l3: 'Schweizer Präzision',
      },
      imageTag: 'Atelier Standtort — Kanton Zürich',
      imageSub: 'Nur nach privater Terminvereinbarung • Adresse wird bei Buchungsbestätigung mitgeteilt',
    },
    pricing: {
      counter: '03 Optionen',
      title: 'Atelier Pakete',
      description: 'Maßgeschneiderte Veredelungs- und Lackschutzpakete für anspruchsvolle Fahrzeughalter im Kanton Zürich.',
      inquireBtn: 'Paket anfragen',
      items: [
        {
          name: 'Teilfolierung & Akzente',
          price: 'Ab CHF 1\'200',
          features: [
            'Chrome Delete Fensterleisten-Blackout',
            'Glanz-Dach- & Spiegelakzente',
            'Motorhauben- & Zierstreifen-Details',
            '3 Jahre Atelier Garantie'
          ]
        },
        {
          name: 'Vollfolierung (Full Wrap)',
          price: 'Ab CHF 3\'800',
          features: [
            'Kompletter Farb- & Oberflächenwechsel',
            'Nahtlose Türinnenkanten-Umbiegung',
            'Knifeless-Tape Präzisionstechnologie',
            '5 Jahre Atelier Garantie'
          ]
        },
        {
          name: 'PPF Lackschutz-Panzerung',
          price: 'Ab CHF 4\'500',
          features: [
            'Selbstheilende 200μm Klarsichtfolie',
            'Front-Vollschutz-Paket oder 100% Ganzkörper',
            'Schutz vor Steinschlag & Split',
            '10 Jahre Herstellergarantie'
          ]
        }
      ]
    },
    testimonials: {
      title: 'Kundenstimmen',
      items: [
        {
          quote: 'Makellose Satin-Schwarz-Folierung an meinem 911 GT3 RS. Die Kanten an den Einstiegen sind von einer Werkslackierung nicht zu unterscheiden.',
          name: 'Marc von Berg',
          role: 'Porsche 911 GT3 RS Besitzer — Zürich'
        },
        {
          quote: 'Die PPF-Ganzkörperfolierung gibt mir absolutes Vertrauen auf Pässen. Nach 15.000 Kilometern kein einziger Steinschlag.',
          name: 'Nathan Bennett',
          role: 'Audi RS6 Avant Besitzer — Zürich'
        },
        {
          quote: 'Das Chrome Delete Blackout hat das Profil meines AMG GT sofort aufgewertet. Schweizer Handwerkskunst auf höchstem Niveau.',
          name: 'Imogen Price',
          role: 'Mercedes-AMG GT 63 S Besitzerin — Zürich'
        },
        {
          quote: 'Akribisch saubere Arbeit im Reinraum. Die Online-Farbvorschau stimmte 1:1 mit dem realen Folienmuster überein.',
          name: 'Callum Henderson',
          role: 'BMW M4 Competition Besitzer — Zürich'
        }
      ]
    },
    faq: {
      counter: '01 / 08',
      title: 'Häufige Fragen zu Autofolierung Zürich',
      script: 'Expertise & Transparenz',
      items: [
        {
          question: 'Wie lange dauert eine Vollfolierung im Atelier Zürich?',
          answer: 'Eine professionelle Vollfolierung (Car Wrapping Zürich / Autofolierung Zürich) dauert in der Regel zwischen 3 und 5 Arbeitstagen. Diese Zeitspanne umfasst die demontagefreie oder teildemontierte Vorbereitung, gründliche Entfettung im Reinraum, die spannungsfreie Folienverlegung und die thermische Nachbehandlung (Post-Heating).'
        },
        {
          question: 'Wie lange hält eine hochwertige Autofolierung?',
          answer: 'Qualitätsfolien von Marken wie 3M, Avery Dennison oder Inozetek halten bei fachgerechter Pflege im Schweizer Klima zwischen 5 und 7 Jahren. Unsere Lackschutzfolien (PPF) sind zudem mit bis zu 10 Jahren Garantie gegen Vergilbung geschützt.'
        },
        {
          question: 'Kann der Originallack nach dem Folieren wiederhergestellt werden?',
          answer: 'Ja, absolut. Eine professionelle Autofolierung schützt den Werkslack vor UV-Strahlung, leichten Kratzern und Umwelteinflüssen. Bei fachgerechter Entfernung bleibt der Originallack im ursprünglichen Neuwagenzustand erhalten.'
        },
        {
          question: 'Wie pflege ich ein foliertes Fahrzeug richtig?',
          answer: 'Folierte Fahrzeuge können problemlos von Hand gewaschen oder in textilen Waschstrassen (ohne Heisswachs) gereinigt werden. Zur optimalen Pflege empfehlen wir pH-neutrale Shampoos und spezielle Folienversiegelungen.'
        },
        {
          question: 'Was ist der Unterschied zwischen Autofolierung (Vinyl) und Lackschutzfolie (PPF)?',
          answer: 'Autofolierung (Vollfolierung / Teilfolierung Zürich) dient primär der optischen Gestaltung (Farbwechsel in Matt, Glanz, Satin oder Carbon). Lackschutzfolie (PPF) ist eine extrem transparente, 200 Mikron dicke Polyurethan-Folie mit selbstheilender Oberfläche zum Schutz vor Steinschlag und Kratzern.'
        },
        {
          question: 'Kann ich eine individuelle Sonderfarbe oder Design wählen?',
          answer: 'Ja. Wir bieten über 300 Folienfarben und Finishes an. Zudem gestalten wir individuelle Teilfolierungen, Chrome Delete Packages und Plotter-Grafiken genau nach Ihren Wünschen.'
        },
        {
          question: 'Wie kann ich ein individuelles Angebot für Autofolierung Zürich anfragen?',
          answer: 'Nutzen Sie einfach unser Online-Formular auf dieser Website oder senden Sie uns Ihre Fahrzeugdaten und Wünsche direkt per WhatsApp. Wir erstellen Ihnen umgehend eine maßgeschneiderte Offerte.'
        },
        {
          question: 'Wo befindet sich das JD Car Wrapping Atelier im Kanton Zürich?',
          answer: 'Unser Atelier befindet sich im Kanton Zürich, Schweiz. Um jedem Kunden maximale Diskretion und Zeit zu widmen, empfangen wir Besucher ausschliesslich nach vorheriger Terminvereinbarung. Die genaue Adresse wird Ihnen bei der Terminbestätigung übermittelt.'
        }
      ]
    },
    contact: {
      badge: 'Atelier Beratung & Offerte',
      titleLine1: 'Offerte Anfragen',
      titleLine2: 'Private Beratung Kanton Zürich',
      subtitle: 'Füllen Sie das Spezifikationsformular aus oder kontaktieren Sie uns direkt via WhatsApp für ein maßgeschneidertes Angebot.',
      submittedTitle: 'Anfrage Erfolgreich Übermittelt',
      submittedMessage: 'Vielen Dank, {name}. Unser Senior-Folierer wird Ihre Fahrzeugdaten prüfen und sich innerhalb von 24 Stunden bei Ihnen melden.',
      submitAnother: 'Weitere Anfrage senden',
      whatsappDirect: 'WhatsApp Direkt',
      sections: {
        vehicle: '1. Fahrzeugdaten',
        year: 'Baujahr',
        make: 'Marke',
        model: 'Modell / Variante',
        services: '2. Gewünschte Leistungen',
        spec: '3. Gewünschte Farbe, Finish & 3D Spec',
        specApplied: '✓ 3D Spec Übernommen',
        upload: '4. Fahrzeug- / Designfoto anhängen (Optional)',
        uploadInstruction: 'Klicken oder Foto hierher ziehen',
        uploadFormats: 'PNG, JPG oder WEBP bis 10MB',
        timeframe: 'Bevorzugter Zeitraum / Termin',
        name: 'Vollständiger Name',
        email: 'E-Mail-Adresse',
        phone: 'Telefonnummer (CH / Int)',
        notes: 'Zusätzliche Projektdetails & Wünsche',
        submitBtn: 'Atelier Offerte Anfragen',
        submitting: 'Spezifikation wird verarbeitet...',
        quickWhatsapp: 'Schnelle WhatsApp Offerte',
      },
      info: {
        title: 'Atelier Standort',
        locationLabel: 'Studio Standort:',
        locationVal: 'Kanton Zürich, Schweiz',
        locationNote: 'Genaue Adresse wird bei privater Terminbestätigung mitgeteilt.',
        emailLabel: 'E-Mail Beratung:',
        phoneLabel: 'WhatsApp Studio Linie:',
        hoursLabel: 'Öffnungszeiten:',
        hoursVal: 'Montag – Freitag: 08:00 – 18:00 Uhr',
        hoursNote: 'Samstag: Nur nach vorheriger Terminvereinbarung',
        instantWhatsappTitle: 'Direkte WhatsApp Spezifikation',
        instantWhatsappDesc: 'Haben Sie Fotos Ihres Fahrzeugs auf dem Smartphone? Senden Sie uns Ihre Daten direkt per WhatsApp.',
        instantWhatsappBtn: 'Jetzt auf WhatsApp chatten',
      }
    },
    instagram: {
      badge: '@jdcarwrappingatelier',
      titleLine1: 'Instagram Studio Feed',
      titleLine2: '#JDCARWRAPPINGATELIER',
      followBtn: 'Auf Instagram folgen',
    },
    whatsappWidget: {
      tooltip: 'WhatsApp Direkt',
      label: 'Atelier Chat',
    },
    footer: {
      title: 'JD CAR WRAPPING ATELIER',
      tagline: 'Schweizer Atelier für exklusive Autofolierung & Lackschutz im Kanton Zürich.',
      col1Title: 'Dienstleistungen',
      col1Links: [
        { text: 'Vollfolierung (Full Wrap)', href: '#services' },
        { text: 'Lackschutzfolie (PPF)', href: '#services' },
        { text: 'Chrome Delete', href: '#services' },
        { text: 'Scheibentönung', href: '#services' },
      ],
      col2Title: 'Atelier',
      col2Links: [
        { text: '3D Visualisierer', href: '#customizer' },
        { text: 'Fahrzeug-Galerie', href: '#portfolio' },
        { text: 'Kundenstimmen', href: '#testimonials' },
        { text: 'FAQ & ASTRA Normen', href: '#faq' },
      ],
      col3Title: 'Kontakt',
      col3Links: [
        { text: 'info@jdcarwrapping.ch', href: 'mailto:info@jdcarwrapping.ch' },
        { text: 'Instagram', href: 'https://instagram.com/jdcarwrappingatelier' },
        { text: 'Offerte anfragen', href: '#contact' },
      ],
      copyright: '© 2026 JD Car Wrapping Atelier',
      privacyLink: 'Datenschutzerklärung',
      imprintLink: 'Impressum',
    },
    legalModal: {
      imprintTitle: 'Impressum',
      privacyTitle: 'Datenschutzerklärung',
      close: 'Schliessen',
      imprintContent: {
        heading: 'Angaben gemäß Schweizer Recht & Gesetzgebung',
        company: 'JD CAR WRAPPING ATELIER',
        location: 'Kanton Zürich, Schweiz',
        appointment: 'Empfang ausschließlich nach privater Terminvereinbarung',
        contactHeader: 'Kontakt & Online-Präsenz',
        email: 'E-Mail: info@jdcarwrapping.ch',
        instagram: 'Instagram: @jdcarwrappingatelier',
        whatsapp: 'WhatsApp Studio: +41 79 000 00 00',
        repHeader: 'Vertretung & Betrieb',
        repText: 'JD Car Wrapping Atelier Zurich Management',
        disclaimerHeader: 'Haftungsausschluss (Disclaimer)',
        disclaimerText: 'Der Autor übernimmt keinerlei Gewähr hinsichtlich der inhaltlichen Richtigkeit, Genauigkeit, Aktualität, Zuverlässigkeit und Vollständigkeit der Informationen. Haftungsansprüche wegen Schäden materieller oder immaterieller Art werden ausgeschlossen.',
      },
      privacyContent: {
        heading: 'Datenschutzerklärung nach Schweizer DSG & EU-DSGVO',
        intro: 'Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen. Wir verarbeiten Ihre Daten vertraulich und entsprechend den gesetzlichen Schweizer Datenschutzbestimmungen (DSG).',
        collectionHeader: 'Erhebung und Speicherung personenbezogener Daten',
        collectionText: 'Wenn Sie uns per Anfrageformular oder WhatsApp kontaktieren, werden Ihre Angaben (Name, E-Mail, Telefonnummer, Fahrzeugdaten) zur Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.',
        rightsHeader: 'Ihre Rechte',
        rightsText: 'Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung oder Löschung dieser Daten.',
      }
    }
  },
  en: {
    nav: {
      brandSub: 'Zurich Studio • Appointment Only',
      services: 'Services',
      customizer: '3D Visualizer',
      finishes: 'Finishes',
      portfolio: 'Portfolio',
      howItWorks: 'Process',
      about: 'About Atelier',
      pricing: 'Packages',
      reviews: 'Reviews',
      faq: 'FAQ',
      contact: 'Request Quote',
      imprint: 'Imprint',
      privacy: 'Privacy Policy',
    },
    finishesShowcase: {
      badge: 'Finishes & Materials Showcase',
      titleLine1: 'FIND YOUR FINISH',
      titleLine2: 'Tactile Material Samples',
      description: 'Explore our studio’s five signature finish categories. Each material option is applied using top-tier European films offering supreme UV, scratch, and gravel defense.',
      finishCategoryLabel: 'Finish Specification',
      durabilityLabel: 'Durability',
      maintenanceLabel: 'Maintenance',
      configureBtn: 'Configure in 3D Visualizer',
      items: [
        {
          id: 'satin',
          name: 'Satin Finish (Semi-Matte)',
          specCode: 'JD-SATIN-MATTE-01',
          swatchHex: '#5b6572',
          sheenLevel: '30% Sheen / Silky Lustre',
          image: 'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&w=1200',
          description: 'The ultimate balance between gloss depth and stealth matte. Diffuses ambient light across vehicle contours, enhancing body lines on supercars like the Porsche 911.',
          durability: '5 - 7 Year Warranty',
          maintenance: 'Standard Wash / Hand Wash',
          features: [
            'Soft satin sheen highlights vehicle body contours',
            'Resistant to fingerprints and water spots',
            'Can be combined with clear satin PPF'
          ]
        },
        {
          id: 'gloss',
          name: 'High Gloss Finish',
          specCode: 'JD-GLOSS-PIANO-02',
          swatchHex: '#64748b',
          sheenLevel: '98% Depth Gloss / Mirror Optic',
          image: 'https://images.pexels.com/photos/3311574/pexels-photo-3311574.jpeg?auto=compress&w=1200',
          description: 'Maximum paint depth and brilliant mirror clarity. Indistinguishable from factory multi-coat paint.',
          durability: '5 - 7 Year Warranty',
          maintenance: 'Hand Wash Recommended',
          features: [
            'Mirror clarity matching ceramic clear coats',
            'Seamless execution for full wraps & roof contrast',
            'UV-shielding layer prevents color fading'
          ]
        },
        {
          id: 'matte',
          name: 'Stealth Matte',
          specCode: 'JD-MATTE-STEALTH-03',
          swatchHex: '#121214',
          sheenLevel: '5% Reflection / Stealth Optics',
          image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=1200',
          description: 'Uncompromising stealth aesthetic. Absorbs light without reflection for a pure, monolithic silhouette.',
          durability: '5 - 7 Year Warranty',
          maintenance: 'Dedicated Matte Film Cleaner',
          features: [
            '0% harsh glare or mirror reflections',
            'Accentuates muscular vehicle proportions',
            'Ideal for full wraps and chrome delete packages'
          ]
        },
        {
          id: 'metallic',
          name: 'Metallic & Pearl Effect',
          specCode: 'JD-METALLIC-QUARTZ-04',
          swatchHex: '#b45309',
          sheenLevel: 'High-Sparkle Flake Optics',
          image: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&w=1200',
          description: 'Infused with fine metallic pigments. Creates captivating light play and color depth under sunlight.',
          durability: '5 - 7 Year Warranty',
          maintenance: 'Standard Vehicle Wash',
          features: [
            'High-density metallic flake pigmentation',
            'Three-dimensional depth under direct light',
            'Available in Satin Metallic and Gloss Metallic'
          ]
        },
        {
          id: 'special',
          name: 'Forged Carbon & Special PPF',
          specCode: 'JD-CARBON-SPECIAL-05',
          swatchHex: '#064e3b',
          sheenLevel: 'Tactile Texture & Color-Shift',
          image: 'https://img.b2bpic.net/free-photo/person-working-car-wrapping_23-2149342620.jpg',
          description: 'Exclusive specialty films ranging from forged carbon textures to chameleon color-shift films and self-healing PPF armor.',
          durability: 'Up to 10 Year Warranty',
          maintenance: 'Low Maintenance',
          features: [
            'Tactile Forged Carbon & Honeycomb textures',
            '200-micron PPF protection against gravel',
            'Angle-dependent color-shift effects'
          ]
        }
      ]
    },
    howItWorks: {
      badge: 'Your Customer Journey',
      titleLine1: 'HOW IT WORKS',
      titleLine2: '4-Step Atelier Process',
      description: 'From initial design consultation to clean room delivery at our Zurich studio — precise, transparent, and personalized.',
      ctaTitle: 'Ready for Your Vehicle Transformation?',
      ctaSubtitle: 'Schedule your private consultation appointment in the Canton of Zurich.',
      ctaButton: 'Book Consultation',
      steps: [
        {
          number: '01',
          title: 'Consultation & Specification',
          description: 'We discuss your styling vision. You examine physical material swatches (Satin, Matte, Gloss, PPF) directly on your vehicle.',
          highlight: 'Personal & Discrete'
        },
        {
          number: '02',
          title: 'Tailored Quote & Booking',
          description: 'You receive a transparent fixed-price proposal and project timeline. Once confirmed, we reserve our clean room exclusively for your vehicle.',
          highlight: 'Fixed Price Guarantee'
        },
        {
          number: '03',
          title: 'Clean Room Prep & Knifeless Wrap',
          description: 'Paint decontamination, disassembly of trims where required, and 0%-blade knifeless tape execution with zero paint contact.',
          highlight: '0% Blade Risk'
        },
        {
          number: '04',
          title: 'Quality Inspection & Handover',
          description: 'Rigorous light tunnel inspection, care handbook delivery, and presentation of your Atelier Warranty Certificate.',
          highlight: 'Light Tunnel Quality Control'
        }
      ]
    },
    hero: {
      locationBadge: 'Canton of Zurich, Switzerland',
      appointmentBadge: 'Appointment Only Studio',
      subheading: 'JD CAR WRAPPING ATELIER ZURICH',
      h1Line1: 'REDEFINE',
      h1Line2: 'YOUR DRIVE.',
      tagline: 'Precision. Protection. Personalization.',
      description: "Switzerland’s premier automotive customization studio. Specializing in high-end full vinyl wraps, paint protection film (PPF), chrome delete, and ceramic glass tinting for luxury supercars.",
      createStyleBtn: 'CREATE YOUR STYLE',
      explorePortfolioBtn: 'Explore Portfolio',
      whatsappBtn: 'WhatsApp',
      badge1: 'Dust-Free Clean Room',
      badge2: '0% Blade contact (Knifeless)',
      badge3: '10-Year PPF Warranty',
      badge4: '100% Swiss Legal Compliance',
    },
    services: {
      badge: 'Zurich Atelier Services',
      titleLine1: 'Precision Engineering',
      titleLine2: 'For Automotive Perfection',
      description: 'Five specialized styling and protection services executed in our dust-free Canton of Zurich studio using state-of-the-art materials.',
      finishesTitle: 'Available Finishes & Textures',
      craftsmanshipTitle: 'Craftsmanship Standards',
      turnaroundLabel: 'Turnaround',
      warrantyLabel: 'Warranty',
      customize3d: 'Customize in 3D',
      inquireNow: 'Inquire Now',
      items: [
        {
          id: 'full-wraps',
          title: 'Full Car Wraps',
          subtitle: 'Complete Vehicle Color & Texture Transformation',
          category: 'Full Body Customization',
          description: "Transform your vehicle's aesthetic with seamless full body wrapping. Every panel, handle, and edge is meticulously prepared and wrapped to ensure a factory-level finish with zero paint exposure.",
          finishes: ['Gloss', 'Matte', 'Satin', 'Metallic', 'Color-Shift', 'Velvet & Textured'],
          keyFeatures: [
            'Precision door jamb & handle edge tucking',
            'Protects original factory paint underneath',
            'Reversible at any time without residue',
            'Premium European vinyl (3M, Avery Dennison, Inozetek)'
          ],
          turnaround: '3 - 5 Business Days',
          warranty: '5-Year Atelier Guarantee',
        },
        {
          id: 'partial-wraps',
          title: 'Partial Wraps & Accents',
          subtitle: 'Targeted Styling for Roofs, Hoods & Aero Accents',
          category: 'Panel Styling',
          description: 'Elevate key features of your automobile with high-contrast panel wraps. From gloss black roof contrast options to forged carbon bonnets and custom racing stripes, create a distinct profile.',
          finishes: ['Gloss Piano Black', 'Forged Carbon', 'Satin Dark Grey', 'Custom Striping'],
          keyFeatures: [
            'Gloss Black panoramic roof styling',
            'Carbon fiber bonnet & spoiler accents',
            'Custom plotter-cut stripes & graphics',
            'Knifeless tape technology — 0% blade risk'
          ],
          turnaround: '1 - 2 Business Days',
          warranty: '3-Year Atelier Guarantee',
        },
        {
          id: 'chrome-delete',
          title: 'Chrome Delete',
          subtitle: 'Stealth Blackout Treatments for Window Trims & Badges',
          category: 'Styling Detail',
          description: 'Replace factory brightwork with a refined stealth blackout look. We wrap window surrounds, front kidney/mesh grilles, side vents, exhaust surrounds, and badging in premium dark vinyl.',
          finishes: ['Satin Obsidian Black', 'Gloss Piano Black', 'Matte Charcoal'],
          keyFeatures: [
            'Full window trim blackout kit',
            'Front grille & kidney surround wrapping',
            'Badges, emblems & exhaust tip accents',
            'Durable against Swiss winter salt & washing'
          ],
          turnaround: '1 Business Day',
          warranty: '3-Year Atelier Guarantee',
        },
        {
          id: 'ppf',
          title: 'Paint Protection Film (PPF)',
          subtitle: 'Invisible Self-Healing Polyurethane Armor',
          category: 'Paint Protection',
          description: "Shield your vehicle's factory paint from stone chips, gravel, road debris, bug splatter, and parking scratches with optically clear, self-healing 200-micron polyurethane film.",
          finishes: ['Optically Clear Gloss PPF', 'Stealth Satin Matte PPF', 'Hydrophobic Coating'],
          keyFeatures: [
            'Heat-activated self-healing top layer',
            'Computer CAD pre-cut patterns for perfect fitment',
            'Full Front Track Package or 100% Full Body',
            '10-Year anti-yellowing & anti-cracking warranty'
          ],
          turnaround: '2 - 4 Business Days',
          warranty: '10-Year Manufacturer Warranty',
        },
        {
          id: 'window-tinting',
          title: 'Window Tinting',
          subtitle: 'Ceramic Solar Heat Rejection & Privacy Shield',
          category: 'Glass Protection',
          description: 'Enhance cabin privacy and eliminate interior solar heat buildup with high-performance nano-ceramic glass tinting. Compliant with Canton of Zurich road traffic regulations.',
          finishes: ['Ceramic 5% Privacy', 'Ceramic 15% Dark', 'Ceramic 35% Medium', 'Ceramic 70% Light'],
          keyFeatures: [
            'Up to 99% UV ray radiation protection',
            '92% Infrared thermal heat rejection',
            '100% Canton of Zurich road legal compliance',
            'Non-metallic — no signal interference with mobile/GPS'
          ],
          turnaround: '4 - 6 Hours',
          warranty: 'Lifetime Glass Tint Warranty',
        }
      ]
    },
    customizer: {
      badge: 'Interactive Atelier 3D',
      title: 'CREATE YOUR STYLE',
      subtitle: '360° Visual Configuration & Palette Selector',
      instruction: 'Select your preferred vinyl shade and finish texture. Apply the spec directly to your vehicle quote inquiry.',
      finishesLabel: 'Surface Finish',
      finishes: {
        matte: 'Matte',
        gloss: 'Gloss',
        satin: 'Satin',
        metallic: 'Metallic'
      },
      colorsLabel: 'Color Palette',
      activeSpecLabel: 'Current Active Spec',
      applyBtn: 'Apply Spec to Inquiry',
      appliedToast: 'Specification applied to inquiry form!',
    },
    portfolio: {
      badge: 'Atelier Portfolio',
      titleLine1: 'Vehicle Transformations',
      titleLine2: 'Canton of Zurich Gallery',
      description: 'Explore our portfolio of luxury automotive wraps, PPF armor, and custom blackout styling executed for discerning Swiss vehicle owners.',
      sliderTitle: 'Featured Transformation — Drag Slider',
      sliderBefore: 'Factory White Paint',
      sliderAfter: 'Atelier Satin Obsidian Black',
      categories: {
        all: 'All',
        fullWraps: 'Full Wraps',
        partialWraps: 'Partial Wraps',
        chromeDelete: 'Chrome Delete',
        ppf: 'PPF',
        windowTinting: 'Window Tinting',
      },
      inspectBtn: 'Inspect Specs',
      modalClose: 'Close',
      modalBefore: 'Before Wrap',
      modalAfter: 'After Transformation',
      modalInstruction: 'Drag middle handle to compare factory vs wrapped atelier finish',
      requestQuoteForSpec: 'Request Quote For This Spec',
      turnaroundLabel: 'Turnaround',
      studioLabel: 'Studio',
      specsHeader: 'Specification Highlights',
    },
    about: {
      badge: 'Canton of Zurich Atelier',
      titleLine1: 'Precision. Protection.',
      titleLine2: 'Personalization.',
      p1: 'JD CAR WRAPPING ATELIER was founded on a simple principle: to deliver uncompromising automotive customization and paint protection to Zurich’s most discerning car collectors and enthusiasts.',
      p2: "Operating strictly by private appointment from our state-of-the-art facility in the Canton of Zurich, we combine European precision engineering, dust-free climate control, and knifeless tape technology to guarantee zero blade contact with your vehicle's original factory paint.",
      checklists: [
        { title: 'Climate-Controlled Booth', desc: 'Filtered air circulation eliminates micro-dust for glass-smooth vinyl installation.' },
        { title: '0% Blade-to-Paint Risk', desc: 'Knifeless filament tapes guarantee perfect trim lines with zero blade touch.' },
        { title: 'Appointment Exclusivity', desc: 'Dedicated one-on-one studio attention for every vehicle entrusted to our care.' },
        { title: 'Swiss Legal Compliance', desc: 'All window tints and lighting modifications adhere 100% to Swiss road laws.' }
      ],
      stats: {
        v1: '500+',
        l1: 'Vehicles Wrapped',
        v2: '10-Year',
        l2: 'PPF Warranty',
        v3: '100%',
        l3: 'Swiss Precision',
      },
      imageTag: 'Studio Location — Canton of Zurich',
      imageSub: 'Private Appointment Only • Studio Location Disclosed Upon Booking Confirmation',
    },
    pricing: {
      counter: '03 Options',
      title: 'Atelier Packages',
      description: 'Tailored styling and paint protection packages crafted for discerning vehicle owners in Canton of Zurich.',
      inquireBtn: 'Inquire Package',
      items: [
        {
          name: 'Partial Wrap & Accents',
          price: 'From CHF 1,200',
          features: [
            'Chrome delete blackout trim',
            'Gloss roof & mirror accents',
            'Custom bonnet & stripe details',
            '3-Year Atelier Warranty'
          ]
        },
        {
          name: 'Full Body Car Wrap',
          price: 'From CHF 3,800',
          features: [
            'Full color & texture change',
            'Door jamb edge execution',
            'Knifeless tape technology',
            '5-Year Atelier Warranty'
          ]
        },
        {
          name: 'PPF Shield Protection',
          price: 'From CHF 4,500',
          features: [
            'Self-healing 200μm clear film',
            'Front Track or Full Armor',
            'Stone chip gravel defense',
            '10-Year Manufacturer Warranty'
          ]
        }
      ]
    },
    testimonials: {
      title: 'Client Reviews',
      items: [
        {
          quote: 'Flawless satin wrap finish on my 911 GT3 RS. The edges around the door jambs are completely indistinguishable from factory paint.',
          name: 'Marc von Berg',
          role: 'Porsche 911 GT3 RS Owner — Zurich'
        },
        {
          quote: 'Full PPF application gave me complete confidence on high-speed alpine passes. Zero stone chip damage after 15,000 kilometers.',
          name: 'Nathan Bennett',
          role: 'Audi RS6 Avant Owner — Zurich'
        },
        {
          quote: 'Sleek chrome delete blackout transformed the profile of my AMG GT instantly. Extraordinary Swiss craft standards.',
          name: 'Imogen Price',
          role: 'Mercedes-AMG GT 63 S Owner — Zurich'
        },
        {
          quote: 'Meticulous dust-free clean room execution. The customizer online matched the physical vinyl sample 100%.',
          name: 'Callum Henderson',
          role: 'BMW M4 Competition Owner — Zurich'
        }
      ]
    },
    faq: {
      counter: '01 / 08',
      title: 'Atelier FAQ — Autofolierung Zürich',
      script: 'Expertise & Transparency',
      items: [
        {
          question: 'How long does a full vehicle wrap take at your Zurich studio?',
          answer: 'Full car wraps (Autofolierung Zürich) typically require between 3 and 5 business days. This allows sufficient time for precision panel preparation, micro-cleaning in our climate-controlled booth, knifeless vinyl installation, and post-heating curing.'
        },
        {
          question: 'How long does automotive vinyl last in Swiss climate conditions?',
          answer: 'High-grade European vinyl wraps (such as 3M, Avery Dennison, and Inozetek) last 5 to 7 years when maintained properly. Our Paint Protection Film (PPF) comes with up to a 10-year warranty against yellowing, peeling, or cracking.'
        },
        {
          question: 'Can the original factory paint be restored when removing the wrap?',
          answer: 'Yes. Premium car wraps act as a protective barrier over your original OEM paint. When professionally removed, your original paint remains preserved in factory condition.'
        },
        {
          question: 'How should I maintain and wash a wrapped vehicle?',
          answer: 'Wrapped vehicles can be safely hand-washed or cleaned in touchless car washes (avoiding hot wax cycles). We recommend pH-neutral car shampoos and specialized vinyl sealants for maximum longevity.'
        },
        {
          question: 'What is the difference between vinyl wrapping and Paint Protection Film (PPF)?',
          answer: 'Vinyl wrapping is designed to transform the aesthetic color, finish, and texture of your vehicle (gloss, matte, satin, metallic). Paint Protection Film (PPF) is an optically clear, self-healing 200-micron armor engineered specifically to absorb rock chip impacts.'
        },
        {
          question: 'Can I choose a custom color or bespoke design?',
          answer: 'Yes. We offer over 300 vinyl colors and finishes, as well as custom partial accents, chrome delete blackout packages, and computer-cut racing stripes tailored to your specification.'
        },
        {
          question: 'How can I request an individual quote for Car Wrapping Zürich?',
          answer: 'Simply complete our online inquiry form on this site or send your vehicle photos and requirements directly to us on WhatsApp for an immediate consultation.'
        },
        {
          question: 'Where is JD Car Wrapping Atelier located in Canton of Zurich?',
          answer: 'Our studio is located in the Canton of Zurich, Switzerland. To provide absolute privacy and focused attention, visits are available strictly by prior appointment. The exact address is provided upon appointment confirmation.'
        }
      ]
    },
    contact: {
      badge: 'Atelier Consultations',
      titleLine1: 'Request Atelier Quote',
      titleLine2: 'Private Consultation Zurich',
      subtitle: 'Complete the specification form below or connect directly via WhatsApp to receive a bespoke quote for your vehicle.',
      submittedTitle: 'Inquiry Received',
      submittedMessage: 'Thank you, {name}. Our senior wrapping technician will review your vehicle specifications and contact you within 24 hours.',
      submitAnother: 'Submit Another Inquiry',
      whatsappDirect: 'WhatsApp Direct',
      sections: {
        vehicle: '1. Vehicle Information',
        year: 'Year',
        make: 'Make',
        model: 'Model / Trim',
        services: '2. Select Required Services',
        spec: '3. Desired Color, Finish & Spec',
        specApplied: '✓ 3D Spec Applied',
        upload: '4. Attach Vehicle / Design Photo (Optional)',
        uploadInstruction: 'Click or Drag & Drop Vehicle Photo',
        uploadFormats: 'PNG, JPG or WEBP up to 10MB',
        timeframe: 'Preferred Timeframe / Date',
        name: 'Full Name',
        email: 'Email Address',
        phone: 'Phone Number (CH / Int)',
        notes: 'Additional Project Details',
        submitBtn: 'Submit Atelier Quote Request',
        submitting: 'Processing Specification...',
        quickWhatsapp: 'Quick WhatsApp Quote',
      },
      info: {
        title: 'Atelier Location',
        locationLabel: 'Studio Location:',
        locationVal: 'Canton of Zurich, Switzerland',
        locationNote: 'Exact address provided upon private appointment booking confirmation.',
        emailLabel: 'Email Consultations:',
        phoneLabel: 'WhatsApp Studio Line:',
        hoursLabel: 'Operating Hours:',
        hoursVal: 'Monday – Friday: 08:00 – 18:00',
        hoursNote: 'Saturday: By Prior Appointment Only',
        instantWhatsappTitle: 'Instant WhatsApp Spec',
        instantWhatsappDesc: 'Have photos of your car ready on your phone? Click below to send your vehicle specs and photos directly to our Zurich head installer.',
        instantWhatsappBtn: 'Chat on WhatsApp Now',
      }
    },
    instagram: {
      badge: '@jdcarwrappingatelier',
      titleLine1: 'Instagram Studio Feed',
      titleLine2: '#JDCARWRAPPINGATELIER',
      followBtn: 'Follow On Instagram',
    },
    whatsappWidget: {
      tooltip: 'WhatsApp Direct',
      label: 'Chat Atelier',
    },
    footer: {
      title: 'JD CAR WRAPPING ATELIER',
      tagline: 'Premier Swiss studio for automotive customization, full wraps & PPF protection in Canton of Zurich.',
      col1Title: 'Services',
      col1Links: [
        { text: 'Full Car Wrap', href: '#services' },
        { text: 'Paint Protection (PPF)', href: '#services' },
        { text: 'Chrome Delete', href: '#services' },
        { text: 'Window Tinting', href: '#services' },
      ],
      col2Title: 'Atelier',
      col2Links: [
        { text: '3D Visualizer', href: '#customizer' },
        { text: 'Transformations', href: '#portfolio' },
        { text: 'Client Reviews', href: '#testimonials' },
        { text: 'Consultation FAQ', href: '#faq' },
      ],
      col3Title: 'Contact',
      col3Links: [
        { text: 'info@jdcarwrapping.ch', href: 'mailto:info@jdcarwrapping.ch' },
        { text: 'Instagram', href: 'https://instagram.com/jdcarwrappingatelier' },
        { text: 'Request Quote', href: '#contact' },
      ],
      copyright: '© 2026 JD Car Wrapping Atelier',
      privacyLink: 'Privacy Policy',
      imprintLink: 'Imprint',
    },
    legalModal: {
      imprintTitle: 'Imprint',
      privacyTitle: 'Privacy Policy',
      close: 'Close',
      imprintContent: {
        heading: 'Information according to Swiss Law & Regulation',
        company: 'JD CAR WRAPPING ATELIER',
        location: 'Canton of Zurich, Switzerland',
        appointment: 'Services provided strictly by private appointment',
        contactHeader: 'Contact & Online Channels',
        email: 'Email: info@jdcarwrapping.ch',
        instagram: 'Instagram: @jdcarwrappingatelier',
        whatsapp: 'WhatsApp Studio: +41 79 000 00 00',
        repHeader: 'Representation & Operations',
        repText: 'JD Car Wrapping Atelier Zurich Management',
        disclaimerHeader: 'Disclaimer',
        disclaimerText: 'The author reserves the right not to be responsible for the topicality, correctness, completeness or quality of the information provided. Liability claims regarding damage caused by the use of any information provided will be rejected.',
      },
      privacyContent: {
        heading: 'Privacy Policy according to Swiss FADP & EU GDPR',
        intro: 'We take the protection of your personal data very seriously. We handle your data confidentially and in accordance with statutory Swiss data protection regulations.',
        collectionHeader: 'Collection and Storage of Personal Data',
        collectionText: 'When you submit an inquiry form or message via WhatsApp, your submitted details (name, email, phone, vehicle data) are stored for processing your inquiry.',
        rightsHeader: 'Your Rights',
        rightsText: 'You have the right at any time to request information free of charge about your stored personal data, its origin and recipients, and the purpose of data processing, as well as a right to correction or deletion.',
      }
    }
  }
};
