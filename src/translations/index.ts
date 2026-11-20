export type Language = 'de' | 'en';

export const translations = {
  de: {
    nav: {
      brandSub: 'Atelier Zürich',
      services: 'Dienstleistungen',
      customizer: '3D Visualisierer',
      finishes: 'Oberflächen',
      portfolio: 'Portfolio',
      details: 'Präzision',
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
      description: 'Entdecken Sie die fünf exklusiven Oberflächen-Kategorien unseres Ateliers an unseren Referenzfahrzeugen. Jedes Finish wird mit erstklassigen Folien verarbeitet und bietet hervorragenden UV- und Lackschutz.',
      finishCategoryLabel: 'Finish Spezifikation',
      durabilityLabel: 'Haltbarkeit',
      maintenanceLabel: 'Pflegeaufwand',
      configureBtn: 'In 3D Visualisierer anpassen',
      items: [
        {
          id: 'satin',
          name: 'Satin Finish (Seidenmatt)',
          vehicleLabel: 'Porsche 911 Carrera S',
          specCode: 'JD-SATIN-MATTE-01',
          swatchHex: '#5b6572',
          sheenLevel: '30% Reflexion / Seidenglanz',
          image: 'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&w=1200',
          description: 'Der perfekte Kompromiss zwischen Glanz und Matt. Reflektiert Licht in weichen Konturen und betont die Formensprache von Sportwagen wie dem Porsche 911 Carrera S.',
          durability: '5 – 7 Jahre Garantie',
          maintenance: 'Standard Textilwäsche / Handwäsche',
          features: [
            'Sanfter Seidenglanz hebt Karosserie-Lichtkanten am Porsche 911 hervor',
            'Sehr widerstandsfähig gegen Fingerabdrücke und Wasserflecken',
            'Optional mit transparenter Satin-PPF kombinierbar'
          ]
        },
        {
          id: 'gloss',
          name: 'Hochglanz Veredelung',
          vehicleLabel: 'BMW M3 Competition (G80)',
          specCode: 'JD-GLOSS-PIANO-02',
          swatchHex: '#64748b',
          sheenLevel: '98% Tiefenglanz / Spiegeleffekt',
          image: 'https://images.pexels.com/photos/3311574/pexels-photo-3311574.jpeg?auto=compress&w=1200',
          description: 'Maximale Farbtiefe und brillanter Spiegeleffekt am BMW M3 Competition. Nicht von einer hochwertigen Mehrschicht-Werkslackierung zu unterscheiden.',
          durability: '5 – 7 Jahre Garantie',
          maintenance: 'Handwäsche empfohlen',
          features: [
            'Tiefenbrillanz vergleichbar mit Keramik-Klarlack am BMW M3',
            'Nahtlose Optik für Vollfolierung & Dachakzente',
            'UV-Schutzfilter verhindert Verblassen'
          ]
        },
        {
          id: 'matte',
          name: 'Strukturfreies Stealth Matt',
          vehicleLabel: 'Porsche 911 Carrera S',
          specCode: 'JD-MATTE-STEALTH-03',
          swatchHex: '#121214',
          sheenLevel: '5% Reflexion / Stealth Optics',
          image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=1200',
          description: 'Aggressiver, kompromissloser Stealth-Look für den Porsche 911 Carrera S. Licht wird schattenfrei absorbiert für ein pures, monolithisches Erscheinungsbild.',
          durability: '5 – 7 Jahre Garantie',
          maintenance: 'Spezielle Matt-Folienpflege',
          features: [
            '0% störende Lichtreflexionen an der Porsche 911 Silhouette',
            'Verleiht der Karosserie eine muskulöse Präsenz',
            'Perfekt für Chrome Delete & Gesamtfahrzeug'
          ]
        },
        {
          id: 'metallic',
          name: 'Metallic & Perleffekt',
          vehicleLabel: 'BMW 5er Sedan',
          specCode: 'JD-METALLIC-QUARTZ-04',
          swatchHex: '#b45309',
          sheenLevel: 'High-Sparkle Flake Optik',
          image: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&w=1200',
          description: 'Angereichert mit feinsten Pigment- und Metallic-Flakes am BMW 5er Sedan. Erzeugt bei Sonneneinstrahlung faszinierende Farb- und Glanzeffekte.',
          durability: '5 – 7 Jahre Garantie',
          maintenance: 'Einfache Standardpflege',
          features: [
            'Hochverdichtete Metallic-Pigmentierung am BMW 5er Sedan',
            'Dreidimensionale Tiefe unter direktem Sonnenlicht',
            'Verfügbar in Satin-Metallic & Glanz-Metallic'
          ]
        },
        {
          id: 'special',
          name: 'Forged Carbon & Spezial-PPF',
          vehicleLabel: 'Porsche Cayenne Turbo GT',
          specCode: 'JD-CARBON-SPECIAL-05',
          swatchHex: '#064e3b',
          sheenLevel: 'Echt-Struktur & Color-Shift',
          image: 'https://img.b2bpic.net/free-photo/person-working-car-wrapping_23-2149342620.jpg',
          description: 'Exklusive Spezialfolien von Forged Carbon Texturen am Porsche Cayenne Turbo GT über chamäleonartige Color-Shift Folien bis hin zu selbstheilender Stealth-PPF.',
          durability: 'Bis zu 10 Jahre Garantie',
          maintenance: 'Sehr pflegeleicht',
          features: [
            'Fühlbare Forged Carbon- & Waben-Strukturen für High-End Performance-SUVs',
            '200-Mikron PPF Schlagfestigkeit gegen Alpinsplit',
            'Color-Shift Effekt je nach Blickwinkel'
          ]
        }
      ]
    },
    details: {
      badge: 'Schweizer Präzision & Handwerk',
      titleLine1: 'DETAILS MAKE THE DIFFERENCE.',
      titleLine2: 'Schweizer Präzisions-Handwerk',
      subtitle: 'Unkompromisslose Aufmerksamkeit für jede Kante, jeden Falz und jedes Detail am Porsche 911, BMW M3, Audi RS6 und Mercedes-AMG GT.',
      pillars: {
        detail: {
          title: 'Liebe zum Detail',
          desc: 'Messerscharfe Knifeless-Tape Kanten, nahtloser Umschlag an Karosserieteilen und 0% Klingenrisiko am Werkslack.'
        },
        installation: {
          title: 'Professionelle Montage',
          desc: 'Verarbeitung im temperaturgeführten 22°C Reinraum-Atelier unter filtrierten Staubschutz-Bedingungen.'
        },
        customization: {
          title: 'Individuelle Veredelung',
          desc: 'Maßgeschneiderte Akzente, De-Badging, Satin- / Glanz-Kombinationen und exklusives Chrome Delete.'
        },
        materials: {
          title: 'Erstklassige Materialien',
          desc: 'Verwendung von Premium-Gussfolien und selbstheilenden PPF-Schutzschichten führender europäischer Hersteller.'
        },
        service: {
          title: 'Kundenorientierter Service',
          desc: 'Diskrete 1-zu-1 Erstberatung, transparente Festpreis-Offerten und persönliches Garantiezertifikat.'
        }
      },
      galleryBadge: 'Montage-Makroaufnahmen & Präzision',
      galleryTitle: 'Handwerkskunst im Detail',
      gallerySubtitle: 'Fokus auf anspruchsvolle Detailarbeiten am BMW M3, Porsche 911, Mercedes-AMG GT und Audi RS6.',
      inquireCta: 'Offerte für Ihr Fahrzeug',
      bottomCtaTitle: 'Möchten Sie Höchste Präzision für Ihr Fahrzeug?',
      bottomCtaSubtitle: 'Senden Sie uns Ihre Fahrzeugdaten für ein unverbindliches Festpreisangebot.',
      bottomCtaBtn: 'Angebot Anfragen',
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
          description: 'Gemeinsam besprechen wir Ihre Wünsche. Sie begutachten echte Folienmuster (Satin, Matt, Glanz, PPF) an Ihrem Porsche 911, BMW M4, Mercedes-AMG GT, Audi RS6 oder Cayenne.',
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
      slogan: 'REDEFINE YOUR DRIVE',
      tagline: 'PRECISION. PROTECTION. PERSONALIZATION.',
      description: 'Schweizer Atelier für exklusive Autofolierung, Lackschutzfolie (PPF), Custom Design, Firmenbranding und Werbebeschriftungen – für Privatautos, Firmenwagen und Dienstfahrzeug-Flotten.',
      exploreServicesBtn: 'Dienstleistungen erkunden',
      requestQuoteBtn: 'Angebot anfragen',
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
      description: 'Fünf spezialisierte Veredelungs- und Schutzleistungen für Porsche 911, BMW M4, Mercedes-AMG GT, Audi RS6, Porsche Cayenne und BMW M3 in unserem Atelier im Kanton Zürich.',
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
          subtitle: 'Referenzmodell: Porsche 911 Carrera S',
          category: 'Vollkarosserie Veredelung',
          vehicleModel: 'Porsche 911 Carrera S',
          description: 'Verwandeln Sie die Ästhetik Ihres Porsche 911 Carrera S mit einer nahtlosen Vollfolierung. Jede Karosseriefläche, Türgriff und Kante wird akribisch vorbereitet und ohne sichtbare Originallack-Kanten foliert.',
          finishes: ['Glanz', 'Matt', 'Satin', 'Metallic', 'Color-Shift', 'Carbon & Struktur'],
          keyFeatures: [
            'Präzise Kantenumbiegung an allen Türen & Klappen des Porsche 911',
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
          subtitle: 'Referenzmodell: BMW M4 Competition',
          category: 'Kombinations-Styling',
          vehicleModel: 'BMW M4 Competition',
          description: 'Setzen Sie markante Akzente an Schlüsselstellen Ihres BMW M4 Competition. Von Forged-Carbon-Dachfolierungen über Motorhauben-Akzente bis hin zu individuellen M-Zierstreifen.',
          finishes: ['Pianoseiden-Schwarz', 'Forged Carbon', 'Satin Dunkelgrau', 'Individuelle Streifen'],
          keyFeatures: [
            'BMW M4 Panorama-Dachfolierung in Tiefschwarz Glanz & Carbon',
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
          subtitle: 'Referenzmodell: Mercedes-AMG GT 63 S',
          category: 'Detail-Styling',
          vehicleModel: 'Mercedes-AMG GT 63 S',
          description: 'Ersetzen Sie glänzende Chromleisten am Mercedes-AMG GT 63 S durch einen edlen Stealth-Look. Wir folieren Fenstereinfassungen, Panamericana-Kühlergrill, Seitenauslässe und Embleme.',
          finishes: ['Satin Obsidian Schwarz', 'Glanz Piano Schwarz', 'Matte Kohle'],
          keyFeatures: [
            'Mercedes-AMG GT Komplettes Fensterleisten-Blackout-Set',
            'Panamericana Frontgrill- & Nieren-Folierung',
            'Embleme, Schriftzüge & Auspuffblenden-Akzente',
            'Witterungsbeständig gegen Schweizer Streusalz & Waschanlagen'
          ],
          turnaround: '1 Arbeitstag',
          warranty: '3 Jahre Atelier Garantie',
        },
        {
          id: 'ppf',
          title: 'Lackschutzfolie (PPF)',
          subtitle: 'Referenzmodell: Audi RS6 Avant',
          category: 'Lackschutz',
          vehicleModel: 'Audi RS6 Avant',
          description: 'Schützen Sie den werkseitigen Lack Ihres Audi RS6 Avant vor Steinschlägen, Split und Parkkratzern mit einer glasklaren oder seidenmatten 200-Mikron-Lackschutzfolie.',
          finishes: ['Glasklar Glanz PPF', 'Stealth Satin Matt PPF', 'Hydrophobe Versiegelung'],
          keyFeatures: [
            'Wärmeaktivierbare selbstheilende Oberflächenschicht am Audi RS6',
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
          subtitle: 'Referenzmodell: Porsche Cayenne Turbo GT',
          category: 'Glasschutz',
          vehicleModel: 'Porsche Cayenne Turbo GT',
          description: 'Erreicht hervorragenden Wärmeschutz und Blendschutz am Porsche Cayenne Turbo GT mit Nano-Keramik-Tönungsfolien. 100% konform mit den Schweizer ASTRA-Vorschriften.',
          finishes: ['Keramik 5% Privacy', 'Keramik 15% Dunkel', 'Keramik 35% Mittel', 'Keramik 70% Hell'],
          keyFeatures: [
            'Bis zu 99% Schutz vor schädlicher UV-Strahlung im SUV-Innenraum',
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
      subtitle: '360°-Konfiguration & Farbauswahl (Porsche 911 & BMW M3)',
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
      description: 'Entdecken Sie unser Portfolio aus exklusiven Autofolierungen für Porsche 911, BMW M4, Mercedes-AMG GT, BMW 5er, Porsche Cayenne und BMW M3.',
      sliderTitle: 'Exklusive Transformation — Regler ziehen',
      sliderBefore: 'Original Werkslack',
      sliderAfter: 'Atelier Veredelung',
      transformationSubtitle: 'Identisches Fahrzeug, identische Perspektive & Beleuchtung — vergleichen Sie den Vorher/Nachher-Unterschied der Oberflächenveredelung',
      dragHint: 'Regler ziehen zum Vergleichen',
      mode3D: '3D Studio Engine',
      mode2D: 'Studio HD Ansicht',
      categories: {
        all: 'Alle Fahrzeuge',
        fullWraps: 'Porsche 911',
        partialWraps: 'BMW M4',
        chromeDelete: 'Mercedes-AMG GT',
        ppf: 'BMW 5er',
        cayenne: 'Porsche Cayenne',
        windowTinting: 'BMW M3',
      },
      services: {
        fullWraps: {
          name: 'Full Wrap: Porsche 911',
          title: 'Porsche 911 Carrera S: Werksweiss vs. Satin Obsidian Black',
          beforeLabel: 'Werkslack: Carrara Weiss Glanz',
          afterLabel: 'Atelier Satin Obsidian Black',
          desc: 'Komplette Farbtransformation inkl. unsichtbarer Türeinstiege & Knifeless-Kantenverlegung am Porsche 911 Carrera S.',
          turnaround: '4 Tage',
          vehicle: 'Porsche 911 Carrera S (992)'
        },
        partialWraps: {
          name: 'Partial Wrap: BMW M4',
          title: 'BMW M4 Competition: Monoton vs. Forged Carbon Roof',
          beforeLabel: 'Monotoner Werkslack',
          afterLabel: 'Forged Carbon Dach & Akzente',
          desc: 'Kontrastreiche Veredelung von Fahrzeugdach, Spiegelkappen und Frontspoiler am BMW M4 Competition.',
          turnaround: '2 Tage',
          vehicle: 'BMW M4 Competition'
        },
        chromeDelete: {
          name: 'Chrome Delete: AMG GT',
          title: 'Mercedes-AMG GT 63 S: Werks-Chrom vs. Piano Shadowline',
          beforeLabel: 'Werks-Chromleisten & Badges',
          afterLabel: 'Piano Black Gloss Shadowline',
          desc: 'Vollständiges Blackout-Package für Fensterrahmen, Panamericana-Grill und Schriftzüge am Mercedes-AMG GT 63 S.',
          turnaround: '1 Tag',
          vehicle: 'Mercedes-AMG GT 63 S'
        },
        ppf: {
          name: 'PPF Shield: BMW 5er',
          title: 'BMW 5er Sedan: Ungeschützt vs. 200μm Stealth PPF Shield',
          beforeLabel: 'Ungeschützter Werkslack',
          afterLabel: '200μm Stealth Matte PPF',
          desc: '200-Mikron selbstreinigende und selbstheilende Lackschutzfolie am BMW 5er Sedan schützt effektiv vor Steinschlag.',
          turnaround: '5 Tage',
          vehicle: 'BMW 5er Sedan'
        },
        cayenne: {
          name: 'Full Spec: Porsche Cayenne',
          title: 'Porsche Cayenne Turbo GT: Werkslack vs. Liquid Gold & Tint',
          beforeLabel: 'Ungeschützter Werkslack',
          afterLabel: 'Liquid Quartz Gold & Ceramic Shield',
          desc: 'Exklusiv-Vollfolierung in Liquid Gold in Kombination mit Nano-Keramik Scheibentönung am Porsche Cayenne Turbo GT.',
          turnaround: '4 Tage',
          vehicle: 'Porsche Cayenne Turbo GT'
        },
        windowTinting: {
          name: 'Keramik Tint: BMW M3',
          title: 'BMW M3 Competition (G80): Klare Scheiben vs. 15% Keramik-Tint',
          beforeLabel: 'Klare Werksscheiben',
          afterLabel: '15% Nano-Keramik Hitzeschutz',
          desc: 'ASTRA-konforme Scheibentönung mit 99% UV-Blockierung und 92% IR-Wärmereduktion am BMW M3 Competition.',
          turnaround: '1 Tag',
          vehicle: 'BMW M3 Competition (G80)'
        }
      },
      inspectBtn: 'Details ansehen',
      modalClose: 'Schliessen',
      modalBefore: 'Vor der Folierung',
      modalAfter: 'Nach der Veredelung',
      modalInstruction: 'Regler verschieben, um Werkslack mit Folienfinish am selben Fahrzeug zu vergleichen',
      requestQuoteForSpec: 'Offerte für dieses Modell anfragen',
      turnaroundLabel: 'Dauer',
      studioLabel: 'Atelier',
      specsHeader: 'Highlights der Ausführung',
    },
    about: {
      badge: 'Atelier Kanton Zürich',
      titleLine1: 'Präzision. Schutz.',
      titleLine2: 'Personalisierung.',
      p1: 'JD CAR WRAPPING ATELIER wurde mit einem klaren Anspruch gegründet: Kompromisslose Fahrzeugveredelung und höchster Lackschutz für Porsche 911, BMW M4, Mercedes-AMG GT, Audi RS6, Porsche Cayenne und BMW M3 im Kanton Zürich.',
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
      description: 'Maßgeschneiderte Veredelungs- und Lackschutzpakete für Porsche 911, BMW M4, Mercedes-AMG GT, Audi RS6, Porsche Cayenne und BMW M3.',
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
          quote: 'Makellose Satin-Schwarz-Folierung an meinem Porsche 911 GT3 RS. Die Kanten an den Einstiegen sind von einer Werkslackierung nicht zu unterscheiden.',
          name: 'Marc von Berg',
          role: 'Porsche 911 GT3 RS Besitzer — Zürich'
        },
        {
          quote: 'Die PPF-Ganzkörperfolierung an meinem Audi RS6 Avant gibt mir absolutes Vertrauen auf Pässen. Nach 15.000 Kilometern kein einziger Steinschlag.',
          name: 'Nathan Bennett',
          role: 'Audi RS6 Avant Besitzer — Zürich'
        },
        {
          quote: 'Das Chrome Delete Blackout hat das Profil meines AMG GT sofort aufgewertet. Schweizer Handwerkskunst auf höchstem Niveau.',
          name: 'Imogen Price',
          role: 'Mercedes-AMG GT 63 S Besitzerin — Zürich'
        },
        {
          quote: 'Akribisch saubere Arbeit im Reinraum am BMW M4. Die Online-Farbvorschau stimmte 1:1 mit dem realen Folienmuster überein.',
          name: 'Callum Henderson',
          role: 'BMW M4 Competition Besitzer — Zürich'
        },
        {
          quote: 'Messerscharfe Knifeless-Kanten und perfekter Stealth-Look für meinen BMW M3. Äusserst kompetentes Atelier-Team.',
          name: 'Lukas Weber',
          role: 'BMW M3 Competition Besitzer — Zürich'
        },
        {
          quote: 'Hervorragende Nano-Keramik Scheibentönung an unserem Porsche Cayenne. Perfekter Hitzeschutz und makellose Optik.',
          name: 'Sophie Miller',
          role: 'Porsche Cayenne Turbo GT Besitzerin — Zürich'
        }
      ]
    },
    faq: {
      counter: '01 / 08',
      title: 'Häufige Fragen zu Autofolierung Zürich',
      script: 'Expertise & Transparenz',
      items: [
        {
          question: 'Wie lange dauert eine Vollfolierung für Porsche 911, BMW M4 or Audi RS6?',
          answer: 'Eine professionelle Vollfolierung (Car Wrapping Zürich / Autofolierung Zürich) dauert in der Regel zwischen 3 und 5 Arbeitstagen. Diese Zeitspanne umfasst die teildemontierte Vorbereitung, gründliche Entfettung im Reinraum, die spannungsfreie Folienverlegung und die thermische Nachbehandlung.'
        },
        {
          question: 'Wie lange hält eine hochwertige Autofolierung am Sportwagen?',
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
          question: 'Kann ich mein Modell (Porsche 911, BMW M3/M4, Mercedes-AMG GT, Audi RS6, Cayenne) individuell konfigurieren?',
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
        vehicle: '1. Fahrzeugdaten (Porsche 911, BMW M4, AMG GT, Audi RS6, Cayenne, M3)',
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
        disclaimerText: 'Der Autor übernimmt keinerlei Gewähr hinsichtlich der inhaltlichen Richtigkeit, Genauigkeit, Aktualität, Zuverlässigkeit und Vollständigkeit der Informationen.',
      },
      privacyContent: {
        heading: 'Datenschutzerklärung nach Schweizer DSG & EU-DSGVO',
        intro: 'Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen. Wir verarbeiten Ihre Daten vertraulich und entsprechend den gesetzlichen Schweizer Datenschutzbestimmungen (DSG).',
        collectionHeader: 'Erhebung und Speicherung personenbezogener Daten',
        collectionText: 'Wenn Sie uns per Anfrageformular oder WhatsApp kontaktieren, werden Ihre Angaben (Name, E-Mail, Telefonnummer, Fahrzeugdaten) zur Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.',
        rightsHeader: 'Ihre Rechte',
        rightsText: 'Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten.',
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
      details: 'Precision',
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
      description: 'Explore our studio’s five signature finish categories across our reference fleet: Porsche 911, BMW M3, Mercedes-AMG GT, Audi RS6, and Porsche Cayenne.',
      finishCategoryLabel: 'Finish Specification',
      durabilityLabel: 'Durability',
      maintenanceLabel: 'Maintenance',
      configureBtn: 'Configure in 3D Visualizer',
      items: [
        {
          id: 'satin',
          name: 'Satin Finish (Semi-Matte)',
          vehicleLabel: 'Porsche 911 Carrera S',
          specCode: 'JD-SATIN-MATTE-01',
          swatchHex: '#5b6572',
          sheenLevel: '30% Sheen / Silky Lustre',
          image: 'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&w=1200',
          description: 'The ultimate balance between gloss depth and stealth matte. Diffuses ambient light across vehicle contours, enhancing body lines on supercars like the Porsche 911 Carrera S.',
          durability: '5 - 7 Year Warranty',
          maintenance: 'Standard Wash / Hand Wash',
          features: [
            'Soft satin sheen highlights Porsche 911 body contours',
            'Resistant to fingerprints and water spots',
            'Can be combined with clear satin PPF'
          ]
        },
        {
          id: 'gloss',
          name: 'High Gloss Finish',
          vehicleLabel: 'BMW M3 Competition (G80)',
          specCode: 'JD-GLOSS-PIANO-02',
          swatchHex: '#64748b',
          sheenLevel: '98% Depth Gloss / Mirror Optic',
          image: 'https://images.pexels.com/photos/3311574/pexels-photo-3311574.jpeg?auto=compress&w=1200',
          description: 'Maximum paint depth and brilliant mirror clarity on the BMW M3 Competition. Indistinguishable from factory multi-coat paint.',
          durability: '5 - 7 Year Warranty',
          maintenance: 'Hand Wash Recommended',
          features: [
            'Mirror clarity matching ceramic clear coats on BMW M3',
            'Seamless execution for full wraps & roof contrast',
            'UV-shielding layer prevents color fading'
          ]
        },
        {
          id: 'matte',
          name: 'Stealth Matte',
          vehicleLabel: 'Porsche 911 Carrera S',
          specCode: 'JD-MATTE-STEALTH-03',
          swatchHex: '#121214',
          sheenLevel: '5% Reflection / Stealth Optics',
          image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=1200',
          description: 'Uncompromising stealth aesthetic for the Porsche 911 Carrera S. Absorbs light without reflection for a pure, monolithic silhouette.',
          durability: '5 - 7 Year Warranty',
          maintenance: 'Dedicated Matte Film Cleaner',
          features: [
            '0% harsh glare or mirror reflections on Porsche 911',
            'Accentuates muscular vehicle proportions',
            'Ideal for full wraps and chrome delete packages'
          ]
        },
        {
          id: 'metallic',
          name: 'Metallic & Pearl Effect',
          vehicleLabel: 'BMW 5 Series Sedan',
          specCode: 'JD-METALLIC-QUARTZ-04',
          swatchHex: '#b45309',
          sheenLevel: 'High-Sparkle Flake Optics',
          image: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&w=1200',
          description: 'Infused with fine metallic pigments on the BMW 5 Series Sedan. Creates captivating light play and color depth under sunlight.',
          durability: '5 - 7 Year Warranty',
          maintenance: 'Standard Vehicle Wash',
          features: [
            'High-density metallic flake pigmentation on BMW 5 Series',
            'Three-dimensional depth under direct light',
            'Available in Satin Metallic and Gloss Metallic'
          ]
        },
        {
          id: 'special',
          name: 'Forged Carbon & Special PPF',
          vehicleLabel: 'Porsche Cayenne Turbo GT',
          specCode: 'JD-CARBON-SPECIAL-05',
          swatchHex: '#064e3b',
          sheenLevel: 'Tactile Texture & Color-Shift',
          image: 'https://img.b2bpic.net/free-photo/person-working-car-wrapping_23-2149342620.jpg',
          description: 'Exclusive specialty films ranging from forged carbon textures on the Porsche Cayenne Turbo GT to chameleon color-shift films and self-healing PPF armor.',
          durability: 'Up to 10 Year Warranty',
          maintenance: 'Low Maintenance',
          features: [
            'Tactile Forged Carbon & Honeycomb textures for performance SUVs',
            '200-micron PPF protection against gravel',
            'Angle-dependent color-shift effects'
          ]
        }
      ]
    },
    details: {
      badge: 'Swiss Precision & Craftsmanship',
      titleLine1: 'DETAILS MAKE THE DIFFERENCE.',
      titleLine2: 'Master Installation Quality',
      subtitle: 'Uncompromising attention to every edge, contour, and seam on Porsche 911, BMW M3, Audi RS6, and Mercedes-AMG GT models.',
      pillars: {
        detail: {
          title: 'Attention to Detail',
          desc: 'Precision knifeless tape edge trimming, seamless panel wrapping, and zero blade contact on original factory paint.'
        },
        installation: {
          title: 'Professional Installation',
          desc: 'Executed in a 22°C climate-controlled, dust-filtered clean room studio to guarantee flawless vinyl adhesion.'
        },
        customization: {
          title: 'Individual Customization',
          desc: 'Bespoke accenting, de-badging, satin/gloss contrast wraps, and precision piano black chrome delete.'
        },
        materials: {
          title: 'Quality Materials',
          desc: 'Exclusively utilizing premium multi-layer cast vinyl films and self-healing PPF topcoats from top manufacturers.'
        },
        service: {
          title: 'Customer-Focused Service',
          desc: 'Discrete 1-on-1 consultation in Zurich, transparent fixed quotes, and official Atelier warranty certificate.'
        }
      },
      galleryBadge: 'Installation Close-Ups & Detail Work',
      galleryTitle: 'Master Precision Photography',
      gallerySubtitle: 'Close-up macro photography highlighting BMW M3, Porsche 911, Mercedes-AMG GT, and Audi RS6 execution.',
      inquireCta: 'Request Vehicle Quote',
      bottomCtaTitle: 'Desire Uncompromising Quality For Your Vehicle?',
      bottomCtaSubtitle: 'Submit your vehicle details to receive an individual fixed-price quote.',
      bottomCtaBtn: 'Request Quote Now',
    },
    howItWorks: {
      badge: 'Your Customer Journey',
      titleLine1: 'HOW IT WORKS',
      titleLine2: '4-Step Atelier Process',
      description: 'From initial design consultation for your Porsche 911, BMW M4, Mercedes-AMG GT, Audi RS6, Cayenne, or M3 to clean room delivery.',
      ctaTitle: 'Ready for Your Vehicle Transformation?',
      ctaSubtitle: 'Schedule your private consultation appointment in the Canton of Zurich.',
      ctaButton: 'Book Consultation',
      steps: [
        {
          number: '01',
          title: 'Consultation & Specification',
          description: 'We discuss your styling vision. You examine physical material swatches (Satin, Matte, Gloss, PPF) directly on your Porsche 911, BMW M4, AMG GT, RS6 or Cayenne.',
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
      slogan: 'REDEFINE YOUR DRIVE',
      tagline: 'PRECISION. PROTECTION. PERSONALIZATION.',
      description: 'Swiss atelier for exclusive car wrapping, paint protection film (PPF), custom design, company branding, and commercial graphics – for private cars, corporate vehicles, and service fleets.',
      exploreServicesBtn: 'Explore Services',
      requestQuoteBtn: 'Request a Quote',
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
      description: 'Five specialized styling and protection services tailored for Porsche 911, BMW M4, Mercedes-AMG GT, Audi RS6, Porsche Cayenne, and BMW M3.',
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
          subtitle: 'Reference Model: Porsche 911 Carrera S',
          category: 'Full Body Customization',
          vehicleModel: 'Porsche 911 Carrera S',
          description: "Transform your Porsche 911 Carrera S's aesthetic with seamless full body wrapping. Every panel, handle, and edge is meticulously prepared and wrapped.",
          finishes: ['Gloss', 'Matte', 'Satin', 'Metallic', 'Color-Shift', 'Velvet & Textured'],
          keyFeatures: [
            'Precision door jamb & handle edge tucking on Porsche 911',
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
          subtitle: 'Reference Model: BMW M4 Competition',
          category: 'Panel Styling',
          vehicleModel: 'BMW M4 Competition',
          description: 'Elevate key features of your BMW M4 Competition with high-contrast panel wraps, forged carbon bonnets, and custom M racing stripes.',
          finishes: ['Gloss Piano Black', 'Forged Carbon', 'Satin Dark Grey', 'Custom Striping'],
          keyFeatures: [
            'BMW M4 Gloss Black panoramic roof & carbon styling',
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
          subtitle: 'Reference Model: Mercedes-AMG GT 63 S',
          category: 'Styling Detail',
          vehicleModel: 'Mercedes-AMG GT 63 S',
          description: 'Replace factory brightwork on the Mercedes-AMG GT 63 S with a refined stealth blackout look across window surrounds, Panamericana grille, and badging.',
          finishes: ['Satin Obsidian Black', 'Gloss Piano Black', 'Matte Charcoal'],
          keyFeatures: [
            'Mercedes-AMG GT Full window trim blackout kit',
            'Front grille & Panamericana surround wrapping',
            'Badges, emblems & exhaust tip accents',
            'Durable against Swiss winter salt & washing'
          ],
          turnaround: '1 Business Day',
          warranty: '3-Year Atelier Guarantee',
        },
        {
          id: 'ppf',
          title: 'Paint Protection Film (PPF)',
          subtitle: 'Reference Model: Audi RS6 Avant',
          category: 'Paint Protection',
          vehicleModel: 'Audi RS6 Avant',
          description: "Shield your Audi RS6 Avant's factory paint from stone chips, gravel, and road debris with optically clear or stealth matte 200-micron polyurethane film.",
          finishes: ['Optically Clear Gloss PPF', 'Stealth Satin Matte PPF', 'Hydrophobic Coating'],
          keyFeatures: [
            'Heat-activated self-healing top layer on Audi RS6',
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
          subtitle: 'Reference Model: Porsche Cayenne Turbo GT',
          category: 'Glass Protection',
          vehicleModel: 'Porsche Cayenne Turbo GT',
          description: 'Enhance cabin privacy and eliminate interior solar heat buildup on the Porsche Cayenne Turbo GT with high-performance nano-ceramic glass tinting.',
          finishes: ['Ceramic 5% Privacy', 'Ceramic 15% Dark', 'Ceramic 35% Medium', 'Ceramic 70% Light'],
          keyFeatures: [
            'Up to 99% UV ray radiation protection in SUV cabin',
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
      subtitle: '360° Visual Configuration & Palette Selector (Porsche 911 & BMW M3)',
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
      description: 'Explore our portfolio of luxury automotive wraps executed for Porsche 911, BMW M4, Mercedes-AMG GT, BMW 5 Series, Porsche Cayenne, and BMW M3 vehicles.',
      sliderTitle: 'Featured Transformation — Drag Slider',
      sliderBefore: 'Factory Stock Paint',
      sliderAfter: 'Atelier Wrapped Finish',
      transformationSubtitle: 'Identical vehicle, identical camera angle & lighting — compare before and after finish transformations',
      dragHint: 'Drag handle to compare',
      mode3D: '3D Studio Engine',
      mode2D: 'Studio HD View',
      categories: {
        all: 'All Vehicles',
        fullWraps: 'Porsche 911',
        partialWraps: 'BMW M4',
        chromeDelete: 'Mercedes-AMG GT',
        ppf: 'BMW 5 Series',
        cayenne: 'Porsche Cayenne',
        windowTinting: 'BMW M3',
      },
      services: {
        fullWraps: {
          name: 'Full Wrap: Porsche 911',
          title: 'Porsche 911 Carrera S: Factory White vs. Satin Obsidian Black',
          beforeLabel: 'Factory Paint: Carrara White Gloss',
          afterLabel: 'Wrap Finish: Satin Obsidian Black',
          desc: 'Complete color transformation including seamless door jamb execution and knifeless edge tucking.',
          turnaround: '4 Days',
          vehicle: 'Porsche 911 Carrera S (992)'
        },
        partialWraps: {
          name: 'Partial Wrap: BMW M4',
          title: 'BMW M4 Competition: Monotone vs. Forged Carbon Roof',
          beforeLabel: 'Monotone Factory Paint',
          afterLabel: 'Forged Carbon Roof & Accents',
          desc: 'High-contrast accenting of vehicle roof, mirror caps, and front splitter accents.',
          turnaround: '2 Days',
          vehicle: 'BMW M4 Competition'
        },
        chromeDelete: {
          name: 'Chrome Delete: AMG GT',
          title: 'Mercedes-AMG GT 63 S: OEM Chrome vs. Piano Shadowline',
          beforeLabel: 'Factory Trim: Chrome Moldings & Badging',
          afterLabel: 'Piano Black Gloss Shadowline',
          desc: 'Total blackout treatment for window surrounds, grille frames, and model designations.',
          turnaround: '1 Day',
          vehicle: 'Mercedes-AMG GT 63 S'
        },
        ppf: {
          name: 'PPF Armor: BMW 5 Series',
          title: 'BMW 5 Series Sedan: Unprotected Paint vs. 200μm Stealth PPF',
          beforeLabel: 'Unprotected Factory Gloss Paint',
          afterLabel: '200μm Stealth Matte PPF',
          desc: '200-micron self-healing hydrophobic paint protection film shielding against gravel impact on BMW 5 Series Sedan.',
          turnaround: '5 Days',
          vehicle: 'BMW 5 Series Sedan'
        },
        cayenne: {
          name: 'Full Spec: Porsche Cayenne',
          title: 'Porsche Cayenne Turbo GT: Factory vs. Liquid Gold & Tint',
          beforeLabel: 'Unprotected Factory Paint',
          afterLabel: 'Liquid Quartz Gold & Ceramic Shield',
          desc: 'Full body wrap in Liquid Gold combined with ceramic heat-rejection window tinting on Porsche Cayenne Turbo GT.',
          turnaround: '4 Days',
          vehicle: 'Porsche Cayenne Turbo GT'
        },
        windowTinting: {
          name: 'Ceramic Tint: BMW M3',
          title: 'BMW M3 Competition (G80): Clear Glass vs. 15% Ceramic Shield',
          beforeLabel: 'Factory Glass: Clear Untinted',
          afterLabel: '15% Nano-Ceramic Thermal Tint',
          desc: 'ASTRA-compliant ceramic tinting delivering 99% UV rejection and 92% IR thermal shielding.',
          turnaround: '1 Day',
          vehicle: 'BMW M3 Competition (G80)'
        }
      },
      inspectBtn: 'Inspect Specs',
      modalClose: 'Close',
      modalBefore: 'Before Wrap',
      modalAfter: 'After Transformation',
      modalInstruction: 'Drag middle handle to compare factory vs wrapped finish on identical vehicle',
      requestQuoteForSpec: 'Request Quote For This Model',
      turnaroundLabel: 'Turnaround',
      studioLabel: 'Studio',
      specsHeader: 'Specification Highlights',
    },
    about: {
      badge: 'Canton of Zurich Atelier',
      titleLine1: 'Precision. Protection.',
      titleLine2: 'Personalization.',
      p1: 'JD CAR WRAPPING ATELIER was founded to deliver premier automotive customization and paint protection to owners of Porsche 911, BMW M4, Mercedes-AMG GT, Audi RS6, Porsche Cayenne, and BMW M3 vehicles.',
      p2: "Operating strictly by private appointment from our state-of-the-art facility in the Canton of Zurich, we combine European precision engineering, dust-free climate control, and knifeless tape technology.",
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
      description: 'Tailored styling and paint protection packages crafted for Porsche 911, BMW M4, Mercedes-AMG GT, Audi RS6, Porsche Cayenne, and BMW M3.',
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
          quote: 'Full PPF application on my Audi RS6 Avant gave me complete confidence on high-speed alpine passes. Zero stone chip damage.',
          name: 'Nathan Bennett',
          role: 'Audi RS6 Avant Owner — Zurich'
        },
        {
          quote: 'Sleek chrome delete blackout transformed the profile of my AMG GT instantly. Extraordinary Swiss craft standards.',
          name: 'Imogen Price',
          role: 'Mercedes-AMG GT 63 S Owner — Zurich'
        },
        {
          quote: 'Meticulous dust-free clean room execution on my BMW M4. The customizer online matched the physical vinyl sample 100%.',
          name: 'Callum Henderson',
          role: 'BMW M4 Competition Owner — Zurich'
        },
        {
          quote: 'Razor-sharp knifeless tape execution and flawless stealth look for my BMW M3. Outstanding team of craftsmen.',
          name: 'Lukas Weber',
          role: 'BMW M3 Competition Owner — Zurich'
        },
        {
          quote: 'Outstanding nano-ceramic window tinting on our Porsche Cayenne. Perfect heat rejection and pristine optical clarity.',
          name: 'Sophie Miller',
          role: 'Porsche Cayenne Turbo GT Owner — Zurich'
        }
      ]
    },
    faq: {
      counter: '01 / 08',
      title: 'Atelier FAQ — Autofolierung Zürich',
      script: 'Expertise & Transparency',
      items: [
        {
          question: 'How long does a full vehicle wrap take for Porsche 911, BMW M4, or Audi RS6?',
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
          answer: 'Vinyl wrapping is designed to transform the aesthetic color, finish, and texture of your vehicle. Paint Protection Film (PPF) is an optically clear, self-healing 200-micron armor engineered specifically to absorb rock chip impacts.'
        },
        {
          question: 'Can I choose a custom color or bespoke design for my vehicle?',
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
        vehicle: '1. Vehicle Information (Porsche 911, BMW M4, AMG GT, Audi RS6, Cayenne, M3)',
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
        disclaimerText: 'The author reserves the right not to be responsible for the topicality, correctness, completeness or quality of the information provided.',
      },
      privacyContent: {
        heading: 'Privacy Policy according to Swiss FADP & EU GDPR',
        intro: 'We take the protection of your personal data very seriously. We handle your data confidentially and in accordance with statutory Swiss data protection regulations.',
        collectionHeader: 'Collection and Storage of Personal Data',
        collectionText: 'When you submit an inquiry form or message via WhatsApp, your submitted details (name, email, phone, vehicle data) are stored for processing your inquiry.',
        rightsHeader: 'Your Rights',
        rightsText: 'You have the right at any time to request information free of charge about your stored personal data.',
      }
    }
  }
};
