/*
 * ============================================================
 * 3rd YEAR CHEMISTRY APP
 * SYLLABUS DATABASE
 * ============================================================
 *
 * Structure:
 *
 * Course
 *   └── Chapter
 *         └── Topics[]
 *
 * Resources are NOT stored here.
 * Resources will be managed separately through resources.js.
 *
 * This makes the syllabus independent from uploaded files.
 * ============================================================
 */

const SYLLABUS_DATA = [

  // ==========================================================
  // CHEM 310F
  // ==========================================================

  {
    id: "chem-310f",

    // Used by the UI as the large course code
    code: "310F",

    // Full course name
    title: "Physical Chemistry III (Selected Topics in Physical Chemistry)",

    credits: 4,

    type: "Core Theory",

    chapters: [

      {
        id: "c310f-1",
        title: "Electric properties of molecules",

        topics: [
          "Polar and non-polar molecules",
          "Bond moment and dipole moment",
          "Polarization and polarizability",
          "Clausius-Mossotti equation",
          "Debye equation",
          "Dependence of polarizability on frequency",
          "Measurement of dipole moment: Ebert's method",
          "Measurement of dipole moment: Vapour-temperature method",
          "Measurement of dipole moment: Refraction method",
          "Application of dipole moment in elucidation of ionic character",
          "Application of dipole moment in bond moment and geometry of molecules",
          "Application of dipole moment in resonance structure",
          "Determination of bond length"
        ]
      },

      {
        id: "c310f-2",
        title: "Magnetic properties of substances",

        topics: [
          "Magnetic permeability and susceptibility",
          "Paramagnetic substances",
          "Diamagnetic substances",
          "Ferromagnetic substances",
          "Theories of paramagnetism",
          "Theories of diamagnetism",
          "Measurement of magnetic susceptibility: Gouy method",
          "Measurement of magnetic susceptibility: Bhatnagar-Mathur method",
          "Measurement of magnetic susceptibility: Quincke's method",
          "Curie's balance",
          "Application of magnetic susceptibility measurements"
        ]
      },

      {
        id: "c310f-3",
        title: "Photochemistry",

        topics: [
          "Dark and photochemical reactions",
          "Laws of photochemistry",
          "Consequences of light absorption",
          "Primary and secondary photochemical processes",
          "Potential energy curves for primary photochemical processes",
          "Quantum efficiency",
          "Determination of quantum yield",
          "Factors affecting quantum efficiency",
          "Reasons for low quantum yield",
          "Reasons for high quantum yield",
          "Fluorescence",
          "Phosphorescence",
          "Chemiluminescence",
          "Applications of fluorescence and phosphorescence",
          "Photosensitization",
          "Mechanism and kinetics of photochemical reactions",
          "Photochemical chain reactions",
          "Hydrogen-chlorine reaction",
          "Hydrogen-bromine reaction",
          "Non-chain photochemical reactions",
          "Dissociation of hydrogen iodide",
          "Photolysis of acetaldehyde",
          "Lasers and their applications"
        ]
      },

      {
        id: "c310f-4",
        title: "Catalysis",

        topics: [
          "Types of catalysis",
          "Characteristics of catalysis",
          "Theory of homogeneous catalysis",
          "Kinetics of homogeneous catalysis",
          "Function of a catalyst in terms of Gibbs free energy of activation",
          "Theory of heterogeneous catalysis",
          "Kinetics of heterogeneous catalysis",
          "Effect of temperature on heterogeneous reactions",
          "Acid-base catalysis",
          "Mechanism of acid-base catalysis",
          "Kinetics of acid-base catalysis"
        ]
      },

      {
        id: "c310f-5",
        title: "Surface chemistry",

        topics: [
          "Adsorption",
          "Absorption",
          "Sorption",
          "Physisorption",
          "Chemisorption",
          "Freundlich adsorption isotherm",
          "Langmuir adsorption isotherm",
          "BET adsorption isotherm",
          "Measurement of surface area of adsorbent",
          "Heat of adsorption",
          "Gibbs adsorption equation",
          "Surface excess",
          "Applications of adsorption",
          "Surface films"
        ]
      },

      {
        id: "c310f-6",
        title: "Colloids",

        topics: [
          "Colloidal dispersions",
          "Classification of colloids",
          "Lyophilic colloids",
          "Lyophobic colloids",
          "Preparation of sols",
          "Properties of sols",
          "Optical properties",
          "Tyndall effect",
          "Brownian movement",
          "Determination of Avogadro's number",
          "Stability of sols",
          "Electrical properties",
          "Electrophoresis",
          "Electro-osmosis",
          "Streaming potential",
          "Sedimentation potential",
          "Origin of charge",
          "Electrical double layer",
          "Zeta potential",
          "Emulsions",
          "Gels",
          "Micelles",
          "Applications of colloids"
        ]
      },

      {
        id: "c310f-7",
        title: "Phase diagram",

        topics: [
          "Phases, components and degrees of freedom",
          "Phase rule",
          "Two-component systems",
          "Vapour pressure diagrams",
          "Isopleths",
          "Tie line",
          "Lever rule",
          "Temperature-composition diagrams",
          "Distillation of mixtures",
          "Azeotropes",
          "Liquid-liquid phase diagrams",
          "Liquid-solid phase diagrams",
          "Phase separation",
          "Critical solution temperature",
          "Partially miscible liquids",
          "Eutectic melting",
          "Distillation of partially miscible liquids",
          "Incongruent melting",
          "Three-component systems",
          "Triangular phase diagrams"
        ]
      }
    ]
  },


  // ==========================================================
  // CHEM 312H
  // ==========================================================

  {
    id: "chem-312h",
    code: "312H",
    title: "Polymer Chemistry",
    credits: 2,
    type: "Core Theory",

    chapters: [

      {
        id: "c312h-1",
        title: "Polymer Structure",

        topics: [
          "Definition of polymer",
          "Difference between polymers and macromolecules",
          "Classification of polymers",
          "Degree of polymerization",
          "Nomenclature of polymers",
          "Tacticity",
          "Basic structure of polymers",
          "Linear polymers",
          "Branched polymers",
          "Moderately cross-linked polymers",
          "Molecular forces in polymers",
          "Chemical bonding in polymers"
        ]
      },

      {
        id: "c312h-2",
        title: "Polymer solutions",

        topics: [
          "Criteria for polymer solubility",
          "Size and shapes of polymers in solution",
          "Thermodynamics of polymer solution",
          "Flory-Huggins theory",
          "Fractionation of polymers by solubility"
        ]
      },

      {
        id: "c312h-3",
        title: "Molecular weight and size of polymers",

        topics: [
          "Number-average molecular weight",
          "Weight-average molecular weight",
          "Z-average molecular weight",
          "Viscosity-average molecular weight",
          "Distribution of molecular weight",
          "Determination of molecular weight by end-group analysis",
          "Determination of molecular weight by osmotic pressure measurement",
          "Determination of molecular weight by light scattering",
          "Determination of molecular weight by viscosity measurement",
          "Determination of molecular weight by ultracentrifugation"
        ]
      },

      {
        id: "c312h-4",
        title: "Polymerization",

        topics: [
          "Types of polymerization",

          "Step-reaction (condensation) polymerization",
          "Mechanism of stepwise polymerization",
          "Kinetics of stepwise polymerization",
          "Statistics of stepwise polymerization",
          "Molecular weight control",

          "Radical chain (addition) polymerization",
          "Initiation",
          "Propagation",
          "Termination",
          "Kinetics of radical polymerization",
          "Thermodynamics of radical polymerization",
          "Degree of polymerization",
          "Chain transfer",
          "Ceiling temperature",

          "Ionic polymerization",
          "Similarities and contrasts in ionic polymerization",
          "Cationic polymerization",
          "Mechanism and kinetics of cationic polymerization",
          "Anionic polymerization",
          "Mechanism and kinetics of anionic polymerization",
          "Living polymers"
        ]
      },

      {
        id: "c312h-5",
        title: "Preparation with mechanism, properties and uses",

        topics: [
          "Polyethylene",
          "Polystyrene",
          "Phenol-formaldehyde resins",
          "Melamine-formaldehyde resins",
          "Urea-formaldehyde resins",
          "Epoxy resins",
          "Polyester",
          "PVC",
          "Polyamide"
        ]
      },

      {
        id: "c312h-6",
        title: "Rheology and mechanical properties of polymers",

        topics: [
          "Flow behavior of polymers",
          "Newtonian flow",
          "Non-Newtonian flow",
          "Elasticity",
          "Viscoelasticity",
          "Viscoelastic properties of polymers",
          "Glass transition temperature (Tg)",
          "Mechanical properties of crystalline polymers",
          "Crystallinity",
          "Crystalline melting point"
        ]
      }
    ]
  },


  // ==========================================================
  // CHEM 320F
  // ==========================================================

  {
    id: "chem-320f",
    code: "320F",
    title: "Inorganic Chemistry III (Advanced Concepts)",
    credits: 4,
    type: "Core Theory",

    chapters: [

      {
        id: "c320f-1",
        title: "Quantum mechanical approach of atomic structure",

        topics: [
          "Nature of wave motion",
          "Schrödinger wave equation",
          "Interpretation of the wave function ψ",
          "Solution of the wave equation",
          "Schrödinger equation for hydrogen-like atom",
          "Separation of variables",
          "Radial functions",
          "Angular functions",
          "Probability functions",
          "Representation of symmetry orbitals"
        ]
      },

      {
        id: "c320f-2",
        title: "Detailed study of the covalent bond theories",

        topics: [
          "Nature of covalent bonding",
          "Wave mechanical principle",
          "Valence bond theory (VBT) of hydrogen molecule",
          "Hybridization",
          "VBT description using hybrid orbitals",
          "Resonance",
          "Molecular orbital theory (MOT) of homonuclear diatomic molecules",
          "MOT of heteronuclear diatomic molecules",
          "HOMO and LUMO",
          "Molecular orbitals of polyatomic molecules",
          "σ-bonding",
          "π-bonding",
          "Ligand group orbital approach",
          "Comparison of VBT and MOT"
        ]
      },

      {
        id: "c320f-3",
        title: "The chemistry of transition metals and coordination compounds",

        topics: [
          "Electronic configuration of transition elements",
          "Special properties of transition elements",
          "Nomenclature of coordination compounds",
          "Werner's theory",
          "Electronic interpretation of coordination compounds",
          "Pauling's valence bond theory",
          "Isomerism in coordination compounds",
          "Stereochemistry of 4-coordinate complexes",
          "Stereochemistry of 6-coordinate complexes",
          "Chelate complexes",
          "Examples of chelates",
          "Stabilization of unusual oxidation states by complexation",
          "Applications of coordination compounds"
        ]
      },

      {
        id: "c320f-4",
        title: "Advanced treatment of bonding in coordination compounds",

        topics: [
          "Crystal field theory",
          "Ligand field theory",
          "Octahedral complexes",
          "Tetrahedral complexes",
          "Tetragonally distorted octahedral complexes",
          "Square planar complexes",
          "Molecular orbital theory",
          "Metal-ligand σ-bonding",
          "Effect of π-bonding",
          "Ligand field stabilization energy",
          "Magnetic properties",
          "Electronic properties",
          "Spectrochemical series",
          "Structural effects of ligand field splitting",
          "Thermodynamic effects of ligand field splitting",
          "Jahn-Teller effect"
        ]
      },

      {
        id: "c320f-5",
        title: "Reaction mechanism of d-block complexes",

        topics: [
          "Ligand substitution reactions",
          "Substitution in square-planar complexes",
          "Trans effect",
          "Substitution in octahedral complexes",
          "Redox reactions",
          "Photochemical reactions"
        ]
      },

      {
        id: "c320f-6",
        title: "Origin of magnetism",

        topics: [
          "Ferromagnetism",
          "Ferrimagnetism",
          "Antiferromagnetism",
          "Diamagnetism",
          "Pascal's correction",
          "Curie's law",
          "Curie-Weiss law",
          "Molecular magnetism",
          "Spin angular momentum",
          "Orbital angular momentum",
          "Bohr magneton",
          "Spin-orbit coupling",
          "Calculation of room-temperature magnetic moment",
          "Variable-temperature magnetic moment",
          "SQUID",
          "Spin-only magnetic moment",
          "Van Vleck's equation for magnetic susceptibility",
          "Intra- and intermolecular ferromagnetism",
          "Superexchange",
          "Variation of susceptibility with temperature",
          "Mathematical formulation for spin exchange in binuclear complexes"
        ]
      }
    ]
  },


  // ==========================================================
  // CHEM 322H
  // ==========================================================

  {
    id: "chem-322h",
    code: "322H",
    title: "Inorganic Chemistry IV (Selected Topics)",
    credits: 2,
    type: "Core Theory",

    chapters: [

      {
        id: "c322h-1",
        title: "Bonding in metals and alloys",

        topics: [
          "Theory of metals",
          "Valence bond approach",
          "Band theory of metals",
          "Metallic properties",
          "Solid solutions",
          "Superstructures",
          "Intermetallic compounds"
        ]
      },

      {
        id: "c322h-2",
        title: "Non-aqueous solvent system",

        topics: [
          "Classification of solvents",
          "Properties of ionizing solvents",
          "Solubility criteria in ionizing solvents",
          "Acid-base phenomenon in non-aqueous systems",
          "Liquid ammonia",
          "Liquid sulphur dioxide",
          "Liquid hydrogen sulphide",
          "Anhydrous sulphuric acid"
        ]
      },

      {
        id: "c322h-3",
        title: "Electron deficient and nonstoichiometric compounds",

        topics: [
          "Boron hydrides",
          "Derivatives of boron hydrides",
          "Bonding and structures of boron hydrides",
          "Borohydrides",
          "Carbonaceous clusters",
          "Possible isomers of carboranes",
          "Wade's rules applied to carborane structures",
          "Metal carbides",
          "Classification of metal carbides",
          "Structure of metal carbides",
          "Formation of metal carbides",
          "Uses of metal carbides"
        ]
      },

      {
        id: "c322h-4",
        title: "Inorganic polymers",

        topics: [
          "Chain polymers",
          "Network polymers",
          "Silicon polymers",
          "Boron-nitrogen polymers",
          "Sulphur-nitrogen polymers",
          "Phosphonitrilic compounds",
          "Fluorocarbons",
          "Preparation of fluorocarbons",
          "Structure of fluorocarbons",
          "Uses of fluorocarbons",
          "Chemistry of fullerenes"
        ]
      },

      {
        id: "c322h-5",
        title: "Bioinorganic chemistry",

        topics: [
          "Metalloporphyrins",
          "Chlorophyll",
          "Cytochrome",
          "Hemoglobin",
          "Myoglobin",
          "Vitamin B coenzymes",
          "Vitamin B12 coenzymes",
          "Iron-sulfur proteins",
          "Nitrogen fixation"
        ]
      },

      {
        id: "c322h-6",
        title: "Lanthanoids and Actinoids",

        topics: [
          "Occurrence of lanthanoids",
          "Electronic configuration of lanthanoids",
          "Position in the periodic table",
          "General chemistry of lanthanoids",
          "Separation techniques",
          "Lanthanide compounds as NMR shift reagents",
          "Occurrence of actinides",
          "Electronic configurations of actinides",
          "Oxidation states of actinides",
          "General chemistry of actinides",
          "Organometallic chemistry of actinides"
        ]
      }
    ]
  },


  // ==========================================================
  // CHEM 324H
  // ==========================================================

  {
    id: "chem-324h",
    code: "324H",
    title: "Molecular Symmetry and Group Theory",
    credits: 2,
    type: "Core Theory",

    chapters: [

      {
        id: "c324h-1",
        title: "Symmetry Elements & Operations",

        topics: [
          "Identity",
          "Proper rotation axis",
          "Plane of symmetry",
          "Inversion center",
          "Improper rotation axis"
        ]
      },

      {
        id: "c324h-2",
        title: "Point Groups",

        topics: [
          "Classification of molecules into point groups",
          "Construction of complete sets of symmetry operations"
        ]
      },

      {
        id: "c324h-3",
        title: "Representations",

        topics: [
          "Non-degenerate representations",
          "Effect of symmetry operations on directions such as x",
          "Reducible representations",
          "Irreducible representations",
          "Reduction of reducible representations"
        ]
      },

      {
        id: "c324h-4",
        title: "Matrix Operations",

        topics: [
          "Combining matrices",
          "Matrix setup for symmetry operations",
          "Degenerate vectors as bases"
        ]
      },

      {
        id: "c324h-5",
        title: "Degenerate Representations",

        topics: [
          "Character sets",
          "Bases formed by degenerate vectors"
        ]
      },

      {
        id: "c324h-6",
        title: "Chemical Bonding Applications",

        topics: [
          "Hybrid orbital sets for given geometries",
          "π-bonding orbitals",
          "LCAO molecular orbitals",
          "Simple MO correlation diagrams"
        ]
      },

      {
        id: "c324h-7",
        title: "Vibrational Spectroscopy Applications",

        topics: [
          "Symmetry species for normal modes of vibration",
          "IR active modes",
          "Raman active modes",
          "Prediction of active vibrations in specific spectral regions"
        ]
      },

      {
        id: "c324h-8",
        title: "Linear Combinations",

        topics: [
          "Bond-stretching vibrations",
          "Symmetry-adapted linear combinations (SALCs)",
          "Hybrid orbital wavefunctions",
          "Normalization",
          "Orthogonality",
          "Matching central atom orbitals"
        ]
      }
    ]
  },


  // ==========================================================
  // CHEM 330F
  // ==========================================================

  {
    id: "chem-330f",
    code: "330F",
    title: "Organic Chemistry III (Advanced Organic Chemistry)",
    credits: 4,
    type: "Core Theory",

    chapters: [

      {
        id: "c330f-1",
        title: "Spectroscopy in analysis of organic compounds",

        topics: [
          "Introduction to IR spectroscopy",
          "Applications of IR spectroscopy",
          "Introduction to UV spectroscopy",
          "Applications of UV spectroscopy",
          "Introduction to NMR spectroscopy",
          "Applications of NMR spectroscopy",
          "Introduction to Mass spectrometry",
          "Applications of Mass spectrometry",
          "Structural elucidation of simple organic compounds"
        ]
      },

      {
        id: "c330f-2",
        title: "Organic reaction mechanisms",

        topics: [
          "Classes of reaction mechanism",
          "Isolation of products",
          "Trapping and detection of intermediates",
          "Isotope tracing",
          "Kinetic evidence",
          "Stereochemical evidence for reaction mechanisms"
        ]
      },

      {
        id: "c330f-3",
        title: "Broad concept of reaction mechanisms",

        topics: [
          "Nucleophilic substitution reactions in aliphatic systems",
          "SN1 reaction",
          "SN2 reaction",
          "Kinetics of SN1 and SN2 reactions",
          "Effect of solvent",
          "Effect of structure",
          "Effect of attacking reagents",
          "Effect of leaving groups",
          "Stereochemistry of SN1 and SN2 reactions",
          "Neighboring group participation",
          "Steric effect",
          "Allylic rearrangement",
          "Aromatic nucleophilic substitution reactions",

          "Elimination reactions",
          "E1 mechanism",
          "E2 mechanism",
          "E1cB mechanism",
          "Orientation in elimination reactions",
          "Competition between elimination and substitution",
          "Intramolecular cis elimination",

          "Addition reactions",
          "Addition to carbon-carbon multiple bonds",
          "Addition of halogens",
          "Addition of hydrogen halides",
          "Peroxide-initiated addition of hydrogen bromide",
          "Hydration of olefins",
          "Mechanism of nucleophilic additions",
          "Stereochemistry of nucleophilic additions",
          "Diels-Alder reactions",
          "Cis and trans hydroxylation"
        ]
      },

      {
        id: "c330f-4",
        title: "Name reactions",

        topics: [
          "Wolff-Kishner reduction",
          "Clemmensen reduction",
          "Meerwein-Ponndorf-Verley reduction",
          "Oppenauer oxidation",
          "Baeyer-Villiger oxidation",
          "Reduction with metal hydrides",
          "LiAlH4 reduction",
          "NaBH4 reduction"
        ]
      },

      {
        id: "c330f-5",
        title: "Heterocyclic compounds",

        topics: [
          "Five-membered heterocyclic compounds",
          "Six-membered heterocyclic compounds",
          "Heterocycles containing two hetero atoms",
          "Imidazole",
          "Pyrimidine",
          "Oxazole",
          "Thiazole",
          "Fused heterocyclic compounds",
          "Indole",
          "Benzofuran",
          "Benzothiophene",
          "Quinoline",
          "Isoquinoline"
        ]
      }
    ]
  },


  // ==========================================================
  // CHEM 332F
  // ==========================================================

  {
    id: "chem-332f",
    code: "332F",
    title: "Chemistry of Natural Products",
    credits: 4,
    type: "Core Theory",

    chapters: [

      {
        id: "c332f-1",
        title: "Natural products",

        topics: [
          "Definition of natural products",
          "Occurrence of natural products",
          "Importance of natural products"
        ]
      },

      {
        id: "c332f-2",
        title: "Terpenoids",

        topics: [
          "Definition of terpenoids",
          "Classification of terpenoids",
          "Essential oils",
          "Isoprene rule",
          "Isolation of terpenoids",
          "Purification of terpenoids",
          "General methods of determining structures of terpenoids",
          "Acyclic monoterpenoids",
          "Myrcene",
          "Citral",
          "Monocyclic monoterpenoids",
          "Limonene",
          "Sesquiterpenoids",
          "Farnesol",
          "Biosynthesis of monoterpenoids"
        ]
      },

      {
        id: "c332f-3",
        title: "Carbohydrates",

        topics: [
          "Definition of carbohydrates",
          "Classification of carbohydrates",
          "Monosaccharides",
          "Structure of glucose",
          "Configuration of glucose",
          "Conformation of glucose",
          "Reactions of glucose",
          "Disaccharides",
          "Structure of sucrose",
          "Conformation of sucrose",
          "Structure of maltose",
          "Conformation of maltose",
          "Polysaccharides",
          "Preliminary ideas of starch",
          "Preliminary ideas of cellulose"
        ]
      },

      {
        id: "c332f-4",
        title: "Amino acids and proteins",

        topics: [
          "Structure of α-amino acids",
          "Classification of α-amino acids",
          "Synthesis of α-amino acids",
          "Physical properties of α-amino acids",
          "Chemical properties of α-amino acids",
          "Analysis of α-amino acids",
          "Peptides",
          "Structure of peptides",
          "Synthesis of peptides",
          "General nature of proteins",
          "Structure of proteins",
          "Primary structure",
          "Secondary structure"
        ]
      },

      {
        id: "c332f-5",
        title: "Purines and nucleic acids",

        topics: [
          "Introduction to purines",
          "Purine bases",
          "Adenine",
          "Guanine",
          "Synthesis of adenine derivatives",
          "Synthesis of guanine derivatives",
          "Structural elucidation of uric acid",
          "Nucleosides",
          "Nucleotides",
          "Nucleic acids",
          "Replication of DNA"
        ]
      },

      {
        id: "c332f-6",
        title: "Alkaloids",

        topics: [
          "Occurrence of alkaloids",
          "Classification of alkaloids",
          "Extraction of alkaloids",
          "Purification of alkaloids",
          "General methods of determining alkaloid structures",
          "Structural elucidation of ephedrine",
          "Structural elucidation of atropine",
          "Structural elucidation of morphine"
        ]
      },

      {
        id: "c332f-7",
        title: "Lipids and Steroids",

        topics: [
          "Definition of lipids",
          "General classification of lipids",
          "Glycolipids",
          "Phospholipids",
          "Fats and oils",
          "Saponification number",
          "Iodine value",
          "Lipoproteins",
          "Definition of lipoproteins",
          "Classification of lipoproteins",
          "Preliminary ideas of lipoproteins",
          "Definition of steroids",
          "Diels hydrocarbon",
          "Chemistry of cholesterol",
          "Functional group determination",
          "Angular methyl group",
          "Ring size determination",
          "Steroidal glycosides",
          "Cardiotonic glycosides",
          "Saponins"
        ]
      },

      {
        id: "c332f-8",
        title: "Antibiotics",

        topics: [
          "Definition of antibiotics",
          "Structural elucidation of penicillins",
          "Synthetic methods for penicillins",
          "Degradative methods for penicillins",
          "Structural elucidation of chloramphenicol",
          "Synthetic methods for chloramphenicol",
          "Degradative methods for chloramphenicol"
        ]
      }
    ]
  },


  // ==========================================================
  // CHEM 334H
  // ==========================================================

  {
    id: "chem-334h",
    code: "334H",
    title: "Advanced Stereochemistry",
    credits: 2,
    type: "Core Theory",

    chapters: [

      {
        id: "c334h-1",
        title: "cis-trans stereoisomerism in C=C and C=N compounds",

        topics: [
          "Interconversion of cis-trans isomers",
          "Physical properties",
          "Determination of configuration by physical methods",
          "Determination of configuration by chemical methods",
          "Conformational analysis of acyclic compounds",
          "Relative configuration",
          "Absolute configuration",
          "Determination of R/S configuration",
          "Determination of D/L configuration",
          "Chemical interconversion",
          "Chemical correlation methods",
          "Physical properties of diastereoisomers",
          "Spectral properties of diastereoisomers",
          "Physical properties of conformers",
          "Spectral properties of conformers",
          "Conformation and reactivity"
        ]
      },

      {
        id: "c334h-2",
        title: "Configuration and conformation of cyclic compounds",

        topics: [
          "Three-membered ring conformational analysis",
          "Four-membered ring conformational analysis",
          "Five-membered ring conformational analysis",
          "Six-membered ring conformational analysis",
          "Di-substituted cyclohexanes",
          "Poly-substituted cyclohexanes",
          "Inositols",
          "Conformation and physical properties",
          "Reactivity in cyclohexane derivatives",
          "Reactivity in cyclohexanone derivatives",
          "Winstein-Eliel equation",
          "Curtin-Hammett principle"
        ]
      },

      {
        id: "c334h-3",
        title: "Conformational analysis of biopolymers",

        topics: [
          "Conformation of carbohydrates",
          "Anomeric effect",
          "Conformation of glycosides",
          "Conformation of starch",
          "Conformation of cellulose",
          "Effect of conformation on physical properties",
          "Conformation of proteins",
          "Conformation of nucleic acids"
        ]
      },

      {
        id: "c334h-4",
        title: "Chiral and prochiral molecules",

        topics: [
          "Pro-R",
          "Pro-S",
          "Homotopic ligands",
          "Heterotopic ligands",
          "Homotopic and heterotopic faces",
          "Enantiotopic ligands",
          "HCN addition",
          "Diastereotopic ligands",
          "Diastereotopic faces",
          "Enzymatic oxidation-reduction",
          "Prostereoisomerism in biochemical reactions",
          "Citric acid cycle",
          "Stereochemistry of molecule synthetase reaction"
        ]
      },

      {
        id: "c334h-5",
        title: "Chirality in molecules devoid of chiral centres",

        topics: [
          "Atropisomerism",
          "Chirality in biphenyls",
          "Chirality in allenes",
          "Cyclic allenes",
          "Molecules with planar chirality",
          "Cyclophanes",
          "Annulenes",
          "Chromatographic resolution",
          "Kinetic resolution",
          "Enzymatic resolution of racemic mixtures"
        ]
      },

      {
        id: "c334h-6",
        title: "Introduction and basic principles of optical rotatory dispersion curve",

        topics: [
          "Optical rotatory dispersion (ORD)",
          "Circular dichroism (CD)",
          "Octant rule",
          "α-Haloketone rule",
          "Applications of ORD and CD"
        ]
      },

      {
        id: "c334h-7",
        title: "Fused rings and bridged rings",

        topics: [
          "Norbornanes",
          "Bridged rings",
          "Strained carbocycles",
          "Bredt's rule",
          "Fused rings",
          "Decalins",
          "Hydrindanes",
          "Steroid nucleus",
          "Bridged alkaloids"
        ]
      }
    ]
  },


  // ==========================================================
  // CHEM 340F
  // ==========================================================

  {
    id: "chem-340f",
    code: "340F",
    title: "Chemical Spectroscopy",
    credits: 4,
    type: "Core Theory",

    chapters: [

      {
        id: "c340f-1",
        title: "Interaction of electromagnetic radiation with atoms and molecules",

        topics: [
          "Electromagnetic radiation",
          "Quantization of energy",
          "Absorption of radiation",
          "Emission of radiation",
          "Regions of the electromagnetic spectrum",
          "Representation of spectra",
          "Basic elements of practical spectroscopy",
          "Signal-to-noise ratio",
          "Resolving power",
          "Line width",
          "Intensity of spectral transitions",
          "Removal of line broadening"
        ]
      },

      {
        id: "c340f-2",
        title: "Microwave spectroscopy",

        topics: [
          "Absorption of radiation by rotating molecules",
          "Rotation of diatomic molecules",
          "Rotational spectra of diatomic molecules",
          "Bond length determination from rotational spectra",
          "Rotation of polyatomic molecules",
          "Stark effect",
          "Techniques and instrumentation",
          "Microwave oven"
        ]
      },

      {
        id: "c340f-3",
        title: "Vibrational spectroscopy",

        topics: [
          "Vibrating diatomic molecule",
          "Diatomic vibrating rotator",
          "Vibration-rotation spectrum of carbon monoxide",
          "Breakdown of Born-Oppenheimer approximation",
          "Interaction of rotations and vibrations",
          "Vibrations of polyatomic molecules"
        ]
      },

      {
        id: "c340f-4",
        title: "Raman spectroscopy",

        topics: [
          "Quantum theory of Raman effect",
          "Classical theory of Raman effect",
          "Pure rotational Raman spectra",
          "Vibrational Raman spectra",
          "Structure determination using Raman spectroscopy",
          "Structure determination using infrared spectroscopy",
          "Techniques and instrumentation"
        ]
      },

      {
        id: "c340f-5",
        title: "Electronic spectroscopy of atoms",

        topics: [
          "Hydrogen atom spectrum",
          "Electronic angular momentum",
          "Fine structure of hydrogen atom spectrum",
          "Many-electron atoms",
          "Spectrum of lithium",
          "Spectrum of hydrogen-like species",
          "Angular momentum of many-electron atoms",
          "Term symbols",
          "Spectrum of helium",
          "Spectrum of alkaline earths",
          "Atomic absorption spectroscopy"
        ]
      },

      {
        id: "c340f-6",
        title: "Electronic spectroscopy of molecules",

        topics: [
          "Electronic spectra of diatomic molecules",
          "Vibrational coarse structure",
          "Franck-Condon principle",
          "Dissociation energy",
          "Dissociation products",
          "Rotational fine structure of electronic-vibrational transitions",
          "Electronic angular momentum in diatomic molecules",
          "Spectrum of hydrogen molecule",
          "Chemical analysis by electronic spectroscopy",
          "Fluorescence",
          "Phosphorescence",
          "Circular dichroism (CD) spectroscopy"
        ]
      },

      {
        id: "c340f-7",
        title: "Spin Resonance Spectroscopy",

        topics: [
          "Spin and an applied magnetic field",
          "Interaction between spin and magnetic field",
          "Population of energy levels",
          "Larmor precession",
          "Relaxation times",
          "Sampling and instrumentation",
          "1H nuclear magnetic resonance spectroscopy",
          "Chemical shift",
          "Factors affecting chemical shift",
          "Chemical analysis by NMR techniques",
          "Electron spin resonance spectroscopy",
          "Position of ESR absorptions",
          "Fine structure of ESR absorptions",
          "Hyperfine structure",
          "Double resonance in ESR",
          "Techniques of ESR spectroscopy",
          "Mössbauer spectroscopy",
          "Techniques and applications of Mössbauer spectroscopy"
        ]
      }
    ]
  },


  // ==========================================================
  // CHEM 335LF
  // ==========================================================

  {
    id: "chem-335lf",
    code: "335LF",
    title: "Identification of Organic Compounds by Chemical and Spectroscopic Methods",
    credits: 4,
    type: "Core Practical",

    chapters: [

      {
        id: "c335lf-1",
        title: "Physical appearance",

        topics: [
          "Observation of physical state",
          "Observation of physical characteristics"
        ]
      },

      {
        id: "c335lf-2",
        title: "Elemental analysis",

        topics: [
          "Detection of elements present in organic compounds"
        ]
      },

      {
        id: "c335lf-3",
        title: "Solubility Test",

        topics: [
          "Determination of solubility behavior in various solvents"
        ]
      },

      {
        id: "c335lf-4",
        title: "Functional group analysis",

        topics: [
          "Functional group analysis by chemical methods",
          "Functional group analysis by IR spectroscopy",
          "Functional group analysis by UV spectroscopy",
          "Functional group analysis by NMR spectroscopy"
        ]
      },

      {
        id: "c335lf-5",
        title: "Preparation of derivatives",

        topics: [
          "Synthesis of solid derivatives",
          "Confirmation of organic compounds using derivatives"
        ]
      },

      {
        id: "c335lf-6",
        title: "Literature survey",

        topics: [
          "Consulting scientific literature",
          "Using scientific handbooks"
        ]
      },

      {
        id: "c335lf-7",
        title: "Determination of Physical Constants",

        topics: [
          "Melting point determination",
          "Boiling point determination",
          "Mixed melting point determination"
        ]
      },

      {
        id: "c335lf-8",
        title: "Naming of the identified compounds",

        topics: [
          "Structure elucidation by chemical methods",
          "Structure elucidation by spectroscopic methods",
          "Naming of identified organic compounds"
        ]
      }
    ]
  },


  // ==========================================================
  // CHEM 370LH
  // ==========================================================

  {
    id: "chem-370lh",
    code: "370LH",
    title: "Computing and Information Technology for Chemistry",
    credits: 2,
    type: "Core Practical",

    chapters: [

      {
        id: "c370lh-1",
        title: "Part A",

        topics: [
          "Introduction to Windows",
          "Introduction to MS-DOS",
          "Introduction to Microsoft Word",
          "Writing chemistry texts",
          "Chemical formulae in Microsoft Word",
          "Superscripts",
          "Subscripts",
          "Chemical symbols"
        ]
      },

      {
        id: "c370lh-2",
        title: "Part B",

        topics: [
          "Advanced word processing",
          "Tabs",
          "Tables",
          "Equation editor in chemistry",
          "Two-dimensional chemical structure drawing using Chem-Window",
          "Microsoft Excel",
          "Origin",
          "Chemical spreadsheets",
          "Function wizard",
          "Formulas",
          "Graphs in chemistry",
          "Line graphs",
          "Scatter plots"
        ]
      },

      {
        id: "c370lh-3",
        title: "Part C",

        topics: [
          "Databases using Access",
          "Use of PowerPoint",
          "Molecular structure drawing using ChemWin 1D",
          "Molecular structure drawing using ChemWin 3D",
          "Use of Internet"
        ]
      }
    ]
  }

];


// ============================================================
// HELPER FUNCTIONS
// ============================================================

/**
 * Find a course using its ID.
 *
 * Example:
 * getCourseById("chem-310f")
 */
function getCourseById(courseId) {
  return SYLLABUS_DATA.find(course => course.id === courseId);
}


/**
 * Find a chapter using its ID.
 *
 * Example:
 * getChapterById("c310f-1")
 */
function getChapterById(chapterId) {

  for (const course of SYLLABUS_DATA) {

    const chapter = course.chapters.find(
      chapter => chapter.id === chapterId
    );

    if (chapter) {
      return chapter;
    }
  }

  return null;
}


/**
 * Find a course containing a particular chapter.
 *
 * Example:
 * getCourseByChapterId("c310f-1")
 */
function getCourseByChapterId(chapterId) {

  return SYLLABUS_DATA.find(course =>
    course.chapters.some(chapter => chapter.id === chapterId)
  );
}


/**
 * Get all courses.
 */
function getAllCourses() {
  return SYLLABUS_DATA;
}


/**
 * Get total number of courses.
 */
function getCourseCount() {
  return SYLLABUS_DATA.length;
}


/**
 * Get total number of chapters.
 */
function getChapterCount() {

  return SYLLABUS_DATA.reduce(
    (total, course) => total + course.chapters.length,
    0
  );
}


/**
 * Search courses, chapters and topics.
 *
 * Example:
 *
 * searchSyllabus("photochemistry")
 */
function searchSyllabus(searchTerm) {

  if (!searchTerm || !searchTerm.trim()) {
    return [];
  }

  const query = searchTerm.toLowerCase().trim();

  const results = [];

  SYLLABUS_DATA.forEach(course => {

    course.chapters.forEach(chapter => {

      const matchingTopics = chapter.topics.filter(topic =>
        topic.toLowerCase().includes(query)
      );

      const chapterMatches =
        chapter.title.toLowerCase().includes(query);

      const courseMatches =
        course.code.toLowerCase().includes(query) ||
        course.title.toLowerCase().includes(query);

      if (
        courseMatches ||
        chapterMatches ||
        matchingTopics.length > 0
      ) {

        results.push({
          courseId: course.id,
          courseCode: course.code,
          courseTitle: course.title,

          chapterId: chapter.id,
          chapterTitle: chapter.title,

          topics: matchingTopics.length
            ? matchingTopics
            : chapter.topics
        });
      }
    });
  });

  return results;
}