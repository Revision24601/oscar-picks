import { Category } from '../types';

export const oscarCategories: Category[] = [
  {
    id: 'best-picture',
    name: 'Best Picture',
    nominees: [
      {
        id: 'bp1',
        name: 'Emilia Pérez',
        movie: 'Emilia Pérez',
        posterUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Jacques_Audiard_C%C3%A9sars_2018.jpg/800px-Jacques_Audiard_C%C3%A9sars_2018.jpg'
      },
      {
        id: 'bp2',
        name: 'The Brutalist',
        movie: 'The Brutalist',
        posterUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Brady_Corbet_Cannes_2014.jpg/800px-Brady_Corbet_Cannes_2014.jpg'
      },
      {
        id: 'bp3',
        name: 'Wicked',
        movie: 'Wicked',
        posterUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Wicked_musical_logo.svg/800px-Wicked_musical_logo.svg.png'
      },
      {
        id: 'bp4',
        name: 'Anora',
        movie: 'Anora',
        posterUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Sean_Baker_2012.jpg/800px-Sean_Baker_2012.jpg'
      },
      {
        id: 'bp5',
        name: 'A Complete Unknown',
        movie: 'A Complete Unknown',
        posterUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Bob_Dylan_-_1963.jpg/800px-Bob_Dylan_-_1963.jpg'
      },
      {
        id: 'bp6',
        name: "I'm Still Here",
        movie: "I'm Still Here",
        posterUrl: 'https://placehold.co/400x600?text=Im+Still+Here'
      }
    ]
  },
  {
    id: 'best-director',
    name: 'Best Director',
    nominees: [
      {
        id: 'bd1',
        name: 'Jacques Audiard',
        movie: 'Emilia Pérez',
        imageUrl: 'https://placehold.co/300x300?text=Jacques+Audiard'
      },
      {
        id: 'bd2',
        name: 'Sean Baker',
        movie: 'Anora',
        imageUrl: 'https://placehold.co/300x300?text=Sean+Baker'
      },
      {
        id: 'bd3',
        name: 'Brady Corbet',
        movie: 'The Brutalist',
        imageUrl: 'https://placehold.co/300x300?text=Brady+Corbet'
      },
      {
        id: 'bd4',
        name: 'Coralie Fargeat',
        movie: 'The Substance',
        imageUrl: 'https://placehold.co/300x300?text=Coralie+Fargeat'
      },
      {
        id: 'bd5',
        name: 'James Mangold',
        movie: 'A Complete Unknown',
        imageUrl: 'https://placehold.co/300x300?text=James+Mangold'
      }
    ]
  },
  {
    id: 'best-actor',
    name: 'Best Actor',
    nominees: [
      {
        id: 'ba1',
        name: 'Timothée Chalamet',
        movie: 'A Complete Unknown',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Timoth%C3%A9e_Chalamet_2017_Berlinale.jpg/800px-Timoth%C3%A9e_Chalamet_2017_Berlinale.jpg'
      },
      {
        id: 'ba2',
        name: 'Yura Borisov',
        movie: "I'm Still Here",
        imageUrl: 'https://placehold.co/300x300?text=Yura+Borisov'
      },
      {
        id: 'ba3',
        name: 'Sebastian Stan',
        movie: 'The Brutalist',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Sebastian_Stan_by_Gage_Skidmore_2.jpg/800px-Sebastian_Stan_by_Gage_Skidmore_2.jpg'
      },
      {
        id: 'ba4',
        name: 'Jeffrey Wright',
        movie: 'American Fiction',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Jeffrey_Wright_by_Gage_Skidmore.jpg/800px-Jeffrey_Wright_by_Gage_Skidmore.jpg'
      },
      {
        id: 'ba5',
        name: 'Bradley Cooper',
        movie: 'Maestro',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Bradley_Cooper_at_Palm_Springs_Film_Festival_%282009%29.jpg/800px-Bradley_Cooper_at_Palm_Springs_Film_Festival_%282009%29.jpg'
      }
    ]
  },
  {
    id: 'best-actress',
    name: 'Best Actress',
    nominees: [
      {
        id: 'bac1',
        name: 'Karla Sofía Gascón',
        movie: 'Emilia Pérez',
        imageUrl: 'https://placehold.co/300x300?text=Karla+Sofia+Gascon'
      },
      {
        id: 'bac2',
        name: 'Lily Gladstone',
        movie: 'Anora',
        imageUrl: 'https://placehold.co/300x300?text=Lily+Gladstone'
      },
      {
        id: 'bac3',
        name: 'Cynthia Erivo',
        movie: 'Wicked',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Cynthia_Erivo_by_Gage_Skidmore.jpg/800px-Cynthia_Erivo_by_Gage_Skidmore.jpg'
      },
      {
        id: 'bac4',
        name: 'Ariana Grande',
        movie: 'Wicked',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Ariana_Grande_Grammys_Red_Carpet_2020.png/800px-Ariana_Grande_Grammys_Red_Carpet_2020.png'
      },
      {
        id: 'bac5',
        name: 'Zendaya',
        movie: 'The Substance',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Zendaya_-_2019_by_Glenn_Francis.jpg/800px-Zendaya_-_2019_by_Glenn_Francis.jpg'
      }
    ]
  },
  {
    id: 'best-supporting-actor',
    name: 'Best Supporting Actor',
    nominees: [
      {
        id: 'bsa1',
        name: 'Robert De Niro',
        movie: 'The Brutalist',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Robert_De_Niro_Cannes_2016.jpg/800px-Robert_De_Niro_Cannes_2016.jpg'
      },
      {
        id: 'bsa2',
        name: 'Mark Ruffalo',
        movie: 'Poor Things',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Mark_Ruffalo_2017.jpg/800px-Mark_Ruffalo_2017.jpg'
      },
      {
        id: 'bsa3',
        name: 'Ryan Gosling',
        movie: 'The Fall Guy',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Ryan_Gosling_in_2018.jpg/800px-Ryan_Gosling_in_2018.jpg'
      }
    ]
  },
  {
    id: 'best-supporting-actress',
    name: 'Best Supporting Actress',
    nominees: [
      {
        id: 'bsac1',
        name: 'Julianne Moore',
        movie: 'The Brutalist',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Julianne_Moore_Cannes_2018_%28cropped%29.jpg/800px-Julianne_Moore_Cannes_2018_%28cropped%29.jpg'
      },
      {
        id: 'bsac2',
        name: 'Michelle Yeoh',
        movie: 'A Complete Unknown',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Michelle_Yeoh_Cannes_2017.jpg/800px-Michelle_Yeoh_Cannes_2017.jpg'
      },
      {
        id: 'bsac3',
        name: 'Viola Davis',
        movie: 'Wicked',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Viola_Davis_2016.jpg/800px-Viola_Davis_2016.jpg'
      }
    ]
  },
  {
    id: 'best-animated-feature',
    name: 'Best Animated Feature Film',
    nominees: [
      {
        id: 'baf1',
        name: 'Flow',
        movie: 'Flow',
        posterUrl: 'https://placehold.co/400x600?text=Flow'
      },
      {
        id: 'baf2',
        name: 'Inside Out 2',
        movie: 'Inside Out 2',
        posterUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Inside_Out_%282015_film%29_logo.svg/800px-Inside_Out_%282015_film%29_logo.svg.png'
      },
      {
        id: 'baf3',
        name: 'Wish',
        movie: 'Wish',
        posterUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Walt_Disney_Pictures_2011_logo.svg/800px-Walt_Disney_Pictures_2011_logo.svg.png'
      },
      {
        id: 'baf4',
        name: 'The Boy and the Heron',
        movie: 'The Boy and the Heron',
        posterUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Hayao_Miyazaki_cropped_1_Hayao_Miyazaki_201211.jpg/800px-Hayao_Miyazaki_cropped_1_Hayao_Miyazaki_201211.jpg'
      }
    ]
  },
  {
    id: 'best-international-feature',
    name: 'Best International Feature Film',
    nominees: [
      {
        id: 'bif1',
        name: 'Emilia Pérez',
        movie: 'Emilia Pérez',
        posterUrl: 'https://placehold.co/400x600?text=Emilia+Perez'
      },
      {
        id: 'bif2',
        name: "I'm Still Here",
        movie: "I'm Still Here",
        posterUrl: 'https://placehold.co/400x600?text=Im+Still+Here'
      },
      {
        id: 'bif3',
        name: 'Flow',
        movie: 'Flow',
        posterUrl: 'https://placehold.co/400x600?text=Flow'
      }
    ]
  },
  {
    id: 'best-adapted-screenplay',
    name: 'Best Adapted Screenplay',
    nominees: [
      {
        id: 'bas1',
        name: 'A Complete Unknown',
        movie: 'A Complete Unknown',
        posterUrl: 'https://placehold.co/400x600?text=A+Complete+Unknown'
      },
      {
        id: 'bas2',
        name: 'Wicked',
        movie: 'Wicked',
        posterUrl: 'https://placehold.co/400x600?text=Wicked'
      }
    ]
  },
  {
    id: 'best-original-screenplay',
    name: 'Best Original Screenplay',
    nominees: [
      {
        id: 'bos1',
        name: 'The Brutalist',
        movie: 'The Brutalist',
        posterUrl: 'https://placehold.co/400x600?text=The+Brutalist'
      },
      {
        id: 'bos2',
        name: 'Emilia Pérez',
        movie: 'Emilia Pérez',
        posterUrl: 'https://placehold.co/400x600?text=Emilia+Perez'
      }
    ]
  },
  {
    id: 'best-cinematography',
    name: 'Best Cinematography',
    nominees: [
      {
        id: 'bc1',
        name: 'Rodrigo Prieto',
        movie: 'A Complete Unknown',
        imageUrl: 'https://placehold.co/300x300?text=Rodrigo+Prieto'
      },
      {
        id: 'bc2',
        name: 'Hoyte van Hoytema',
        movie: 'The Brutalist',
        imageUrl: 'https://placehold.co/300x300?text=Hoyte+van+Hoytema'
      }
    ]
  },
  {
    id: 'best-film-editing',
    name: 'Best Film Editing',
    nominees: [
      {
        id: 'bfe1',
        name: 'Jennifer Lame',
        movie: 'The Brutalist',
        description: 'For weaving together multiple timelines'
      },
      {
        id: 'bfe2',
        name: 'Thelma Schoonmaker',
        movie: 'A Complete Unknown',
        description: 'For the rhythmic editing of musical performances'
      }
    ]
  },
  {
    id: 'best-production-design',
    name: 'Best Production Design',
    nominees: [
      {
        id: 'bpd1',
        name: 'Nathan Crowley',
        movie: 'The Brutalist',
        description: 'For the detailed architectural sets spanning decades'
      },
      {
        id: 'bpd2',
        name: 'Catherine Martin',
        movie: 'Wicked',
        description: 'For bringing Oz to life in stunning detail'
      }
    ]
  },
  {
    id: 'best-costume-design',
    name: 'Best Costume Design',
    nominees: [
      {
        id: 'bcd1',
        name: 'Colleen Atwood',
        movie: 'Wicked',
        description: 'For the magical costumes of Oz'
      },
      {
        id: 'bcd2',
        name: 'Mark Bridges',
        movie: 'A Complete Unknown',
        description: 'For the authentic 1960s period costumes'
      }
    ]
  },
  {
    id: 'best-makeup-hairstyling',
    name: 'Best Makeup and Hairstyling',
    nominees: [
      {
        id: 'bmh1',
        name: 'The Substance',
        movie: 'The Substance',
        description: 'For the transformative body horror effects'
      },
      {
        id: 'bmh2',
        name: 'Wicked',
        movie: 'Wicked',
        description: 'For the fantastical character transformations'
      }
    ]
  },
  {
    id: 'best-original-score',
    name: 'Best Original Score',
    nominees: [
      {
        id: 'bos1',
        name: 'Alexandre Desplat',
        movie: 'The Boy and the Heron',
        description: 'For the enchanting orchestral score'
      },
      {
        id: 'bos2',
        name: 'Hans Zimmer',
        movie: 'The Brutalist',
        description: 'For the epic architectural symphony'
      }
    ]
  },
  {
    id: 'best-original-song',
    name: 'Best Original Song',
    nominees: [
      {
        id: 'bsong1',
        name: 'For Good (2025 Version)',
        movie: 'Wicked',
        description: 'Music and Lyrics by Stephen Schwartz'
      },
      {
        id: 'bsong2',
        name: 'The Heart of the City',
        movie: 'The Brutalist',
        description: 'Music by Hans Zimmer, Lyrics by Tim Rice'
      }
    ]
  },
  {
    id: 'best-sound',
    name: 'Best Sound',
    nominees: [
      {
        id: 'bs1',
        name: 'A Complete Unknown',
        movie: 'A Complete Unknown',
        description: 'For the immersive folk music soundscape'
      },
      {
        id: 'bs2',
        name: 'The Substance',
        movie: 'The Substance',
        description: 'For the innovative horror sound design'
      }
    ]
  },
  {
    id: 'best-visual-effects',
    name: 'Best Visual Effects',
    nominees: [
      {
        id: 'bve1',
        name: 'Spider-Man: Beyond the Spider-Verse',
        movie: 'Spider-Man: Beyond the Spider-Verse',
        description: 'For groundbreaking animation techniques'
      },
      {
        id: 'bve2',
        name: 'The Substance',
        movie: 'The Substance',
        description: 'For innovative body horror transformations'
      }
    ]
  }
]; 