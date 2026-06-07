export interface LivretSection {
  id: string
  title: string
  content: string
}

export const livretSections: LivretSection[] = [
  {
    id: 'symboles',
    title: 'Les symboles de la République',
    content: `Le 14 juillet 1789, le peuple de Paris s'empare de la prison royale de la Bastille. Un an plus tard, le 14 juillet 1790, lors de la fête de la Fédération, cette date du 14 juillet est devenue la date de la fête nationale. À cette époque, a été composé l'hymne national, La Marseillaise. La Marianne est devenue le symbole de la République. Sa statue, placée dans toutes les mairies, rappelle la Révolution française. Le drapeau tricolore, bleu, blanc, rouge, date également de la Révolution. La langue de la République est le français.`,
  },
  {
    id: 'marseillaise',
    title: 'La Marseillaise',
    content: `Hymne national français composé par Rouget de Lisle en 1792. Il a été chanté pour la première fois par des volontaires marseillais durant la Révolution française, d'où son nom "La Marseillaise". Elle est devenue l'hymne national officiel en 1795. Son couplet le plus célèbre commence par "Allons enfants de la Patrie, Le jour de gloire est arrivé !"`,
  },
  {
    id: 'devise',
    title: 'La devise de la République',
    content: `La République garantit le respect des principes de liberté, d'égalité et de fraternité. Ces trois mots constituent sa devise.

- La liberté : Les libertés fondamentales sont garanties : liberté de pensée, liberté de croyance, liberté de s'exprimer, liberté de se réunir...
- L'égalité : Tous les citoyens ont les mêmes droits et les mêmes devoirs quel que soit leur sexe, leur origine, leur religion, leurs opinions ou leur orientation sexuelle.
- La fraternité : La France est fondée sur la volonté de vivre ensemble des citoyens français. Cette volonté se traduit par la solidarité entre les citoyens.`,
  },
  {
    id: 'liberte-expression',
    title: 'La liberté d\'expression',
    content: `La liberté d'expression est un droit fondamental. Cependant, elle a des limites, pour respecter les droits des autres. Il est ainsi interdit de diffuser des injures, des propos diffamatoires, des provocations à la haine, ou de faire l'apologie de crimes contre l'humanité. La loi du 29 juillet 1881 garantit la liberté de la presse tout en fixant ses limites.`,
  },
  {
    id: 'laicite',
    title: 'La laïcité',
    content: `La laïcité est un principe fondamental de la République. Elle signifie que les affaires religieuses et les affaires publiques sont clairement séparées. Ce principe est consacré par la loi de 1905 qui sépare les Églises de l'État. Pour préserver l'ordre public, l'État peut restreindre le droit de manifester sa religion en public. L'État garantit par ailleurs la liberté religieuse. Chacun est libre de croire ou de ne pas croire et d'adopter la religion qu'il souhaite.

La loi du 15 mars 2004 interdit de porter à l'école des signes ou des tenues qui manifestent ostensiblement l'appartenance à une religion. L'école est une institution publique qui forme tous les citoyens : elle doit donc être neutre face aux religions.`,
  },
  {
    id: 'egalite-femmes-hommes',
    title: 'L\'égalité entre les femmes et les hommes',
    content: `L'égalité entre les femmes et les hommes fait partie des valeurs essentielles de la République. La loi accorde les mêmes droits aux femmes et aux hommes. L'administration peut refuser la nationalité française à une personne ne respectant pas l'égalité femmes-hommes, même si cette personne est mariée avec un(e) Français(e). L'adhésion à ces valeurs est évaluée au cours de l'entretien réglementaire.`,
  },
  {
    id: 'discrimination',
    title: 'La lutte contre les discriminations',
    content: `Un employeur ne peut refuser d'embaucher un salarié en raison de ses origines, de son âge, de son handicap, de son appartenance à une ethnie ou à une religion, de son sexe ou de son orientation sexuelle. Toute décision (embauche, promotion, etc.) de l'employeur doit être fondée sur des raisons professionnelles et non personnelles.

La France condamne les discriminations fondées sur un motif prévu par la loi et qui entraînent une différence de traitement. Exprimer des opinions racistes à travers des propos ou des actes est répréhensible.`,
  },
  {
    id: 'suffrage-universel',
    title: 'Le suffrage universel',
    content: `La France est une démocratie. Le Président de la République, les parlementaires, les maires, sont élus au suffrage universel : cela signifie que tous les citoyens, hommes et femmes ayant au moins 18 ans et disposant de leurs droits civils et politiques, ont le droit de voter et de se présenter aux élections dans les conditions fixées par la loi.`,
  },
  {
    id: 'droits-citoyens',
    title: 'Les droits des citoyens',
    content: `• Droit de vote : Les citoyens bénéficient du droit de vote dès 18 ans.
• D'accès aux emplois publics : Tous les citoyens ont accès, de façon égale, aux emplois dans l'administration. Ils sont sélectionnés exclusivement selon leurs qualités et leurs compétences.
• Liberté de pensée, de croyance, de s'exprimer, de se réunir...`,
  },
  {
    id: 'devoirs-citoyens',
    title: 'Les devoirs des citoyens',
    content: `• Respecter la loi : « Nul n'est censé ignorer la loi ». Elle s'applique à tous.
• Contribuer au financement des services publics : Tous les citoyens doivent participer à la hauteur de leurs moyens au financement des services publics en payant des impôts. Déclarer ses revenus et payer ses impôts est obligatoire.
• Contribuer à la Défense nationale : En cas de guerre, tout citoyen peut être appelé dans l'armée à participer à la défense du pays. À partir de 16 ans, les Françaises et les Français doivent se faire recenser à la mairie pour participer à la « Journée défense et citoyenneté ».`,
  },
  {
    id: 'institutions',
    title: 'Les principales institutions de l\'État',
    content: `• Le Président de la République est élu au suffrage universel pour cinq ans. Il nomme le Gouvernement, dirigé par le Premier ministre, issu de la majorité aux élections législatives.
• Le Parlement, composé de l'Assemblée nationale et du Sénat, vote les lois et contrôle le Gouvernement. Les députés à l'Assemblée nationale sont élus tous les cinq ans lors des élections législatives. Les sénateurs sont élus au suffrage universel indirect pour un mandat de 6 ans.
• La justice est rendue par les juges. Elle règle les litiges entre les particuliers ou les entreprises, et entre les citoyens et l'administration.`,
  },
  {
    id: 'president',
    title: 'Le Président de la République',
    content: `Le Président de la République est élu au suffrage universel direct pour cinq ans (quinquennat). Il nomme le Gouvernement, dirigé par le Premier ministre, issu de la majorité aux élections législatives. Le Président est le chef de l'État, garant de la Constitution et de l'indépendance nationale.`,
  },
  {
    id: 'parlement',
    title: 'Le Parlement',
    content: `Le Parlement est composé de deux chambres :
• L'Assemblée nationale : les députés sont élus tous les cinq ans lors des élections législatives au suffrage universel direct.
• Le Sénat : les sénateurs sont élus au suffrage universel indirect pour un mandat de 6 ans.

Le Parlement vote les lois et contrôle l'action du Gouvernement.`,
  },
  {
    id: 'justice',
    title: 'La justice en France',
    content: `La justice est rendue par les juges. Elle règle les litiges entre les particuliers ou les entreprises, et entre les citoyens et l'administration. Elle sanctionne les infractions aux règles de droit par des peines prévues par la loi (emprisonnement, amende…) ou les textes réglementaires. L'indépendance de la justice est garantie. Nos institutions sont fondées sur la séparation des pouvoirs exécutif, législatif et de l'autorité judiciaire.`,
  },
  {
    id: 'constitution',
    title: 'La Constitution de la Ve République',
    content: `L'organisation de l'État est définie par un texte, la Constitution. Notre Constitution actuelle est celle de la Ve République, adoptée en 1958. La France est une démocratie et un État de droit. Son principe est : le Gouvernement du peuple, par le peuple et pour le peuple. Le pouvoir politique est soumis à la loi, c'est-à-dire qu'il doit fonctionner selon des règles prévues par la Constitution et la loi.`,
  },
  {
    id: 'commune',
    title: 'La commune',
    content: `La France compte 34 965 communes au 1er janvier 2021. Elles sont administrées par un maire et un conseil municipal. Elles sont responsables, notamment, des écoles maternelles et primaires, des activités sportives et culturelles, de l'entretien de la voierie communale. Elles tiennent l'état civil, c'est-à-dire qu'elles enregistrent les naissances, les mariages, les décès.`,
  },
  {
    id: 'departement',
    title: 'Le département',
    content: `La France compte 101 départements. Ils sont administrés par les conseils départementaux. Ils sont responsables, notamment, des collèges, de la protection de l'enfance, de l'aide aux personnes âgées.`,
  },
  {
    id: 'region',
    title: 'La région',
    content: `Les 13 régions métropolitaines sont administrées par les conseils régionaux. Elles sont chargées notamment des transports publics, de la formation professionnelle, de la construction et de l'entretien des lycées.`,
  },
  {
    id: 'union-europeenne',
    title: 'L\'Union européenne',
    content: `La France est l'un des pionniers de la construction européenne. En 1957, elle est l'un des membres fondateurs de la Communauté économique européenne. En 1992, l'Union européenne est créée. Aujourd'hui, l'Union compte 27 États membres, qui partagent des principes démocratiques.

Depuis 1992, les citoyens français sont aussi citoyens européens. Ils votent aux élections du Parlement européen tous les cinq ans. Ils sont libres de circuler, de travailler, d'étudier, de s'installer dans les autres pays de l'Union européenne.

Depuis 2000, la France partage avec 18 autres pays membres de l'Union européenne une monnaie unique : l'Euro.`,
  },
  {
    id: 'declaration-1789',
    title: 'La Déclaration des droits de l\'homme et du citoyen (1789)',
    content: `Adoptée le 26 août 1789, elle est un texte fondamental de la Révolution française. Elle énonce les droits naturels et imprescriptibles de l'Homme :

• Article 1er : « Les hommes naissent et demeurent libres et égaux en droits. »
• Article 2 : Le but de toute association politique est la conservation des droits naturels : la liberté, la propriété, la sûreté, et la résistance à l'oppression.
• Article 4 : « La liberté consiste à pouvoir faire tout ce qui ne nuit pas à autrui. »
• Article 6 : « La Loi est l'expression de la volonté générale. »
• Article 11 : « Tout Citoyen peut donc parler, écrire, imprimer librement. »`,
  },
  {
    id: 'histoire-revolution',
    title: 'La Révolution française',
    content: `En 1789, le peuple se révolte contre la monarchie absolue. En 1792, la Ière République est proclamée. Cette période est à l'origine de nos valeurs républicaines, avec la Déclaration des Droits de l'Homme et du Citoyen de 1789. Les philosophes des Lumières (Rousseau, Voltaire, Diderot) ont combattu pour la tolérance et la liberté de pensée.`,
  },
  {
    id: 'histoire-guerres',
    title: 'Les guerres mondiales',
    content: `• Première Guerre mondiale (1914-1918) : affrontement de masse touchant toute l'Europe puis les États-Unis. Plus de 9 millions de morts. Le 11 novembre est un jour férié en commémoration de la fin de la guerre.
• Seconde Guerre mondiale (1939-1945) : Adolf Hitler déclenche la guerre. Les nazis exterminent des millions de Juifs, Tziganes, homosexuels et handicapés. Plus de 50 millions de morts. Le 8 mai commémore la fin de la guerre. Le débarquement des alliés en Normandie, le 6 juin 1944, est une étape décisive dans la libération de la France.`,
  },
  {
    id: 'deportation',
    title: 'La déportation des Juifs',
    content: `Le régime de Vichy (1940-1944), mis en place par le maréchal Pétain suite à la défaite française, était un régime non démocratique. Il a collaboré avec l'Allemagne nazie et porte donc une part de responsabilité dans la déportation des Juifs.`,
  },
  {
    id: 'resistance',
    title: 'La Résistance et Charles de Gaulle',
    content: `Charles de Gaulle (1890-1970), chef de la Résistance française contre les armées allemandes, est l'artisan, avec les alliés, de la libération de la France. En 1958, il est à l'origine de nos institutions actuelles (la Ve République).`,
  },
  {
    id: 'republique',
    title: 'L\'histoire de la République',
    content: `La République est un régime politique dans lequel les dirigeants élus gouvernent au nom du peuple. Elle est fondée sur des lois que tous doivent respecter. L'avènement de la République a été progressif :
• Ière République : 1792
• IIIe République : 1875 — forme républicaine stable. Jules Ferry instaure l'enseignement public, gratuit et laïc dans les années 1880.
• Ve République : 1958 — nos institutions actuelles.`,
  },
  {
    id: 'prehistoire',
    title: 'La Préhistoire',
    content: `La grotte de Lascaux est l'une des plus importantes grottes préhistoriques en France. Elle est connue pour la qualité de ses peintures murales représentant des animaux (aurochs, chevaux, cerfs). Datée d'environ 18 000 à 15 000 av. J.-C., elle témoigne de la présence humaine sur le territoire français depuis des millénaires.`,
  },
  {
    id: 'antiquite-romaine',
    title: 'L\'Antiquité et la Gaule romaine',
    content: `À partir des années 50 av. J.-C., l'installation des Romains a eu une influence durable car les populations locales adoptent leur mode de vie et la culture latine. De nombreux vestiges témoignent de cette période, comme le théâtre romain d'Orange, dans la vallée du Rhône, qui est l'un des mieux conservés au monde.`,
  },
  {
    id: 'moyen-age',
    title: 'Le Moyen-Âge',
    content: `• Clovis (466-511) unifie les royaumes de différents peuples francs. C'est une étape importante dans la construction de l'unité du territoire français. Il adopte la religion chrétienne.
• Jeanne d'Arc (1412-1431) : pendant la guerre de Cent-Ans contre l'Angleterre, cette jeune paysanne conduit les troupes françaises à la libération d'une partie du territoire français. Cette héroïne nationale incarne le courage au service de la France.`,
  },
  {
    id: 'henri-iv',
    title: 'Henri IV et l\'édit de Nantes',
    content: `Henri IV (1553-1610), par l'édit de Nantes de 1598, accorde aux protestants la liberté d'exercer leur religion et rétablit la paix religieuse après des décennies de guerres de religion entre catholiques et protestants.`,
  },
  {
    id: 'louis-xiv',
    title: 'Louis XIV et la monarchie absolue',
    content: `Le règne de Louis XIV (1643-1715) est marqué par la monarchie absolue : le roi concentre tous les pouvoirs. À cette époque, se met en place un État puissant et centralisé. Le château de Versailles, avec sa célèbre galerie des Glaces, symbolise cette puissance.

Molière (1622-1673), le plus célèbre auteur de théâtre français, a vécu au temps de Louis XIV. On lui doit des comédies comme L'Avare, Le Misanthrope ou Le Tartuffe.`,
  },
  {
    id: 'lumieres',
    title: 'Les philosophes des Lumières',
    content: `Au 18e siècle, les philosophes des Lumières — Rousseau, Voltaire, Diderot — combattent à travers leurs œuvres pour la tolérance et la liberté de pensée. Leurs idées ont profondément influencé la Révolution française et les principes républicains. Diderot a dirigé l'Encyclopédie, vaste ouvrage visant à rassembler toutes les connaissances de l'époque.`,
  },
  {
    id: 'napoleon',
    title: 'Napoléon Ier et le Premier Empire',
    content: `Napoléon Ier (1769-1821) dirige la France pendant près de 15 ans. Il mène de nombreuses guerres en Europe à la tête de la Grande Armée. On lui doit notamment le Code civil, ensemble de lois qui constitue encore aujourd'hui le fondement du droit civil français.`,
  },
  {
    id: 'troisieme-republique',
    title: 'La IIIe République et Jules Ferry',
    content: `La IIIe République (1875) établit de façon stable la forme républicaine du Gouvernement. Jules Ferry, ministre de l'Instruction publique au début des années 1880, est à l'origine de l'enseignement public, gratuit et laïc. Les lois Ferry de 1881-1882 rendent l'école primaire obligatoire et l'école publique gratuite et laïque.`,
  },
  {
    id: 'victor-hugo',
    title: 'Victor Hugo',
    content: `Victor Hugo (1802-1885) est l'un des plus grands écrivains français. Il s'est engagé contre les inégalités sociales et la peine de mort. Il a écrit des chefs-d'œuvre comme Les Misérables et Notre-Dame de Paris. Figure majeure de la vie littéraire et politique du 19e siècle, il est inhumé au Panthéon.`,
  },
  {
    id: 'abolition-esclavage',
    title: 'L\'abolition de l\'esclavage (1848)',
    content: `L'esclavage avait été rétabli par Napoléon en 1802 dans les colonies françaises. La Seconde République proclame son abolition définitive le 27 avril 1848, sous l'impulsion de Victor Schœlcher. Cette décision libère des milliers d'esclaves dans les colonies françaises des Antilles, de l'océan Indien et d'ailleurs.`,
  },
  {
    id: 'empire-colonial',
    title: 'L\'empire colonial français',
    content: `À partir des années 1830, la France constitue un vaste empire colonial, souvent par des guerres de conquêtes, principalement aux Antilles, en Afrique et en Asie. La colonisation a profondément marqué l'histoire de ces territoires et celle de la France.`,
  },
  {
    id: 'decolonisation',
    title: 'La décolonisation française (1950-1962)',
    content: `Dans les empires coloniaux européens, les peuples revendiquent leur indépendance. La décolonisation française débute en Asie et s'étend à l'Afrique. Ce processus a donné lieu à des guerres comme celles d'Indochine (1946-1954) et d'Algérie (1954-1962).`,
  },
  {
    id: 'construction-europeenne',
    title: 'La construction européenne',
    content: `Le traité de Rome (1957) instaure la Communauté économique européenne entre six pays d'Europe, dont la France. Son objectif est d'établir une union étroite entre les peuples européens. La construction européenne a fortement contribué à installer la paix en Europe après les deux guerres mondiales.`,
  },
  {
    id: 'mai-68',
    title: 'Mai 68',
    content: `Le mouvement social de Mai 68 est initié par des étudiants. Il s'étend aux salariés et au monde ouvrier. Ces grèves et ces manifestations sont parmi les plus importantes du 20e siècle. Mai 68 a marqué un tournant dans la société française, notamment sur les plans social et culturel.`,
  },
  {
    id: 'lois-societe',
    title: 'Les grandes lois sociétales (1974-1981)',
    content: `• 1974 : L'âge de la majorité est fixé à 18 ans (auparavant 21 ans).
• 1975 : Loi sur l'interruption volontaire de grossesse (IVG), préparée par Simone Veil. Elle autorise l'avortement.
• 1981 : Abolition de la peine de mort en France, portée par Robert Badinter, ministre de la Justice.`,
  },
  {
    id: 'personnalites',
    title: 'Des personnalités naturalisées qui ont fait rayonner la France',
    content: `Au fil de son histoire, de nombreuses personnes sont venues s'installer et vivre en France. Beaucoup ont fait le choix de la nationalité française. En voici quelques-unes :
• Marie Curie (1867-1934) : physicienne née en Pologne, découvre la radioactivité, prix Nobel, inhumée au Panthéon.
• Josephine Baker (1906-1975) : artiste américaine, première chanteuse noire reconnue, résistante, inhumée au Panthéon.
• Marc Chagall (1887-1985) : peintre d'origine russe, a décoré le plafond de l'Opéra Garnier.
• Romain Gary (1914-1980) : écrivain d'origine russe, seul double lauréat du prix Goncourt.
• Dalida (1933-1987) : chanteuse d'origine égyptienne, immenses succès populaires.
• Georges Moustaki (1934-2013) : chanteur d'origine italo-grecque, grand nom de la chanson française.
• Léon Zitrone (1914-1995) : journaliste né en Russie, célèbre commentateur d'événements.`,
  },
  {
    id: 'economie-francaise',
    title: 'La puissance économique française',
    content: `La France est la sixième puissance économique mondiale. Elle compte une centaine de grands groupes de plus de 10 000 salariés, présents dans de nombreux pays. L'économie française a des secteurs d'excellence comme l'aéronautique ou le luxe, dont certaines marques sont connues dans le monde entier.

La France est également un leader mondial du transport maritime et ferroviaire. C'est la première destination touristique au monde, grâce à ses monuments et sa culture.

La France est membre permanent du Conseil de sécurité de l'Organisation des Nations Unies (ONU).`,
  },
  {
    id: 'langue-francaise',
    title: 'La langue française dans le monde',
    content: `Le français est parlé couramment par 200 millions de personnes dans le monde. Les Français ne représentent que 1% de la population mondiale mais les personnes qui parlent français sont réparties dans 70 pays.`,
  },
  {
    id: 'geographie-france',
    title: 'La géographie de la France',
    content: `La France compte 67,4 millions d'habitants (INSEE 2021). Son territoire s'étend sur 675 000 km², en métropole et outre-mer.

La France est parcourue par des fleuves importants : la Loire (le plus long), la Seine, la Garonne, le Rhône, le Rhin.

Le Mont-Blanc, sommet de la chaîne des Alpes, est la plus haute montagne d'Europe (4 810 m).

La France compte 17 agglomérations de plus de 500 000 habitants. Les dix métropoles les plus importantes sont : Paris, Lyon, Marseille, Toulouse, Lille, Bordeaux, Nice, Nantes, Strasbourg et Rennes.`,
  },
  {
    id: 'monuments',
    title: 'Quelques sites remarquables français',
    content: `• La tour Eiffel : construite par l'ingénieur Gustave Eiffel pour l'Exposition universelle de 1889. C'est un monument très fréquenté, avec plus de 7 millions de visiteurs par an. Symbole de Paris et de la France dans le monde.
• Le Mont-Saint-Michel : îlot rocheux situé en Normandie dans une baie, sur lequel s'élève une abbaye. Classé au patrimoine mondial de l'humanité par l'UNESCO.
• Les châteaux de la Loire : témoignages de la Renaissance française (Chambord, Chenonceau, Amboise…).`,
  },
  {
    id: 'outre-mer',
    title: 'Les territoires d\'outre-mer',
    content: `La France compte 12 territoires d'outre-mer :
• 5 DROM (départements et régions d'outre-mer) : Guadeloupe, Guyane, Martinique, Mayotte et La Réunion.
• 7 COM (collectivités d'outre-mer) : Nouvelle-Calédonie, Polynésie française, Saint-Barthélemy, Saint-Martin, Saint-Pierre-et-Miquelon, Terres australes et antarctiques françaises, Wallis-et-Futuna.

Dans les départements et les régions de métropole et d'outre-mer, l'État est représenté par les préfets.`,
  },
]
