import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from './nav-bar/nav-bar';
import { CommonModule } from '@angular/common';
import { ReadMore } from './read-more/read-more';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [NavBar, RouterOutlet, CommonModule,ReadMore,FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('juba_portfolio');
lang= signal('fr')
  experiences = [
    {
      title: `Observateur Régional des Thonidés en Méditerranée`,
      paragraph: `En tant qu’Observateur Régional des thonidés avec l'ICCAT, j’ai participé aux campagnes de suivi scientifique de la pêche au Thon en Méditerranée. Mon rôle consistait à observer, collecter des données précises sur les captures, les engins de pêche et l’effort de pêche, afin d’assurer le respect des réglementations internationales et de contribuer à la gestion durable des stocks.`,
      image:`image1.jpg`
    },
    {
      title: `Enseignant Vacataire `,
      paragraph: `J'ai occupé le poste d'assistant TP pour le module de Systématique des Organisme marins, ensuite chargé du TD du module Halieutique 1, actuellement chargé des TP du module Biodiversité au sein de l'université de Tipaza, où j'accompagne les étudiants pour leur apprendre les base d'un bon oceanographe chercheur sur terrain en en laboratoire.`,
      image:`image2.jpg`
    },
    {
      title: `Manager d’un magasin d’animaux marins`,
      paragraph: `J’ai assuré la gestion quotidienne du magasin : organisation des stocks, suivi de la qualité de l’eau et du bien-être des espèces, relation avec les fournisseurs et conseil auprès de la clientèle. J’ai également encadré une petite équipe et veillé à la bonne tenue du magasin.`,
      image:`image3.jpg`
    },
    {
      title: `Expert biodiversité – Naturadex Islands`,
      paragraph: `
Au sein de la plateforme tunisienne de science participative Naturadex, j’interviens comme expert en biodiversité. Je contribue à la validation scientifique des observations, notamment en confirmant les identifications d’espèces, et j’apporte un appui technique pour garantir la fiabilité des données. Cette expérience m’a permis de mettre mes compétences taxonomiques au service d’une communauté engagée et de renforcer mon intérêt pour la valorisation de la science participative.`,
      image:`natura.jpg`
    },
    {
      title: `Rédacteur et membre du réseau DORIS`,
      paragraph: `En tant que membre du réseau DORIS, je participe à la rédaction et à la mise à jour de fiches naturalistes sur les espèces marines. Mon rôle consiste à partager des données d’observation fiables, à contribuer à l’amélioration des connaissances et à valoriser la biodiversité marine auprès d’une large communauté de plongeurs et de passionnés. Cette expérience m’a permis de perfectionner mes compétences en rédaction scientifique et en vulgarisation, tout en intégrant un réseau collaboratif reconnu.`,
      image:`doris.jpg`
    }
  ]

  volunteering = [
    {
      title: `PAA _ Plogging Association Algeria `,
      paragraph: `Responsable du comité Rédaction et Traduction, je supervise tous les contenus écrits de l’association (publications et articles) et veille au développement professionnel des membres à travers des formations et workshops. Je joue également un rôle essentiel dans le magazine officiel en tant que Rédacteur en chef.`,
      image: `paa.jpg`,
  },
    {
      title: `Club scientifique ORCA`,
      paragraph: `Étant le responsable du département Projets, ou on a pu organiser plusieurs sessions de formation dédiée aux étudiants, ainsi que différents projets en relation avec l’environnement et la biodiversité.`,
      image: `orca.jpeg`,
  },
    {
      title: `AYN – Algerian Youth for Nature`,
      paragraph: `Membre fondateur de l’association AYN, une organisation à but non lucratif œuvrant pour la résolution des problématiques environnementales, et responsable du Pôle scientifique, où je pilote des projets scientifiques à court et long terme, intégrant à la fois la recherche, la sensibilisation et la vulgarisation.`,
      image: `ayn.jpg`,
  },
    {
      title: `Hope Dose Foundation`,
      paragraph: `En tant que membre fondateur de Hope Dose Fondation, une organisation à but non lucratif qui soutient les personnes atteintes de cancer en Algérie, je contribue à des causes humanitaires sensibles, reflétant un engagement qui dépasse le cadre environnemental.`,
      image: `hope.jpg`,
  },
  {
    title: `Organisateur de l'événement ‘’Vitamine Sea’’`,
    paragraph: `Pour célébrer la journée mondiale de l'océan, des activités de nettoyage de la plage et des fonds marins, de la sensibilisation aux enjeux du littoral et de l'importance de le préserver. Une exposition faite par moi-même sur la Biodiversité marine.`,
    image: `vitamine.jpg`,
  },
  {
    title: `Organisation de l’événement ‘’Marine Pollution’’`,
    paragraph: `Au temps que responsable de l'événement, j'ai présenté une conférence sur la pollution marine présente, plusieurs activités pédagogiques, de la vulgarisation et sensibilisation.`,
    image: `mp.jpg`,
},
  {
    title: `Organisation de la journée mondiale de la mer `,
    paragraph: `Cette journée nous a permis de nettoyer la plage du phare et collecter plus de 120kg de plastique.`,
    image: `jm.jpg`,
},
  {
    title: `Intervenant lors de la journée mondiale de l'aquaculture`,
    paragraph: `Présentation d'une conférence sur l'impact de l'aquaculture sur l'environnement marins ainsi que la Biodiversité. Avec une immersion totale au sein de la collection d'espèce marine. Sensibilisation et vulgarisation.`,
    image: `ja.jpg`,
},
  {
    title: `Responsable de la série ‘’Un jour Une espèce’’ `,
    paragraph: `Une série qui a pour objectif la sensibilisation et la vulgarisation au profil de la Biodiversité marine Algérienne.`,
    image: `unjour.jpg`,
},
  ]
  
  projects = [
    {
      title: `PINA`,
      paragraph: `Tout a commencé par une question simple, mais lourde de sens : Comment préserver la biodiversité marine si l’information est éparpillée, incomplète, parfois même inaccessible ?
De cette réflexion est née l’idée du projet PINA – Portail d’Information sur la Nature Marine Algérienne.
Notre ambition, moi et Ghalmi Rachida était claire : créer un lieu centralisé où chercheurs, étudiants, gestionnaires et passionnés pouvaient accéder à une base de données fiable sur les espèces marines de notre littoral. 
Aujourd’hui, PINA avance pas à pas, pour devenir bien plus qu’une base de données, mais un outil dynamique qui met la science au service de la conservation.`,
      image:`pina.jpg`
    },
    {
      title: `Comming soon`,
      paragraph: ``,
      image:`book1.jpg`
    },
    {
      title: `Comming soon`,
      paragraph: ``,
      image:`book2.jpg`
    },
    {
      title: `Comming soon`,
      paragraph: ``,
      image:`book3.jpg`
    },
    {
      title: `Comming soon`,
      paragraph: ``,
      image:`book4.jpg`
    }
  ]

  certs = ['C1', 'C2','C3','C4','C5','C6','C7','C8','C9','C10','C11','C12','C13','C14','C15','C16','C17','C18'  ]

Eexperiences = [
  {
    title: `Regional Tuna Observer in the Mediterranean`,
    paragraph: `As a Regional Tuna Observer with ICCAT, I participated in scientific monitoring campaigns of tuna fishing in the Mediterranean. My role was to observe, collect precise data on catches, fishing gear, and fishing effort, in order to ensure compliance with international regulations and contribute to the sustainable management of stocks.`,
    image: `image1.jpg`
  },
  {
    title: `Adjunct Teacher`,
    paragraph: `I held the position of lab assistant for the Marine Organisms Systematics module, then led the practical sessions for the Fisheries 1 module. I am currently in charge of the Biodiversity module lab work at the University of Tipaza, where I guide students to teach them the basics of being a good oceanography researcher both in the field and in the laboratory.`,
    image: `image2.jpg`
  },
  {
    title: `Manager of a Marine Animals Store`,
    paragraph: `I handled the daily management of the store: stock organization, monitoring of water quality and species welfare, relations with suppliers, and customer advice. I also supervised a small team and ensured the proper operation of the store.`,
    image: `image3.jpg`
  },
  {
    title: `Biodiversity Expert – Naturadex Islands`,
    paragraph: `
Within the Tunisian citizen science platform Naturadex, I act as a biodiversity expert. I contribute to the scientific validation of observations, particularly by confirming species identifications, and provide technical support to ensure data reliability. This experience allowed me to put my taxonomic skills at the service of an engaged community and strengthen my interest in promoting citizen science.`,
    image: `natura.jpg`
  },
  {
    title: `Writer and Member of the DORIS Network`,
    paragraph: `As a member of the DORIS network, I participate in writing and updating naturalist fact sheets on marine species. My role is to share reliable observation data, contribute to improving knowledge, and promote marine biodiversity to a wide community of divers and enthusiasts. This experience helped me refine my scientific writing and outreach skills while being part of a recognized collaborative network.`,
    image: `doris.jpg`
  }
]

Evolunteering = [
  {
    title: `PAA _ Plogging Association Algeria`,
    paragraph: `Head of the Writing and Translation Committee, I supervise all written content of the association: social media posts, articles, and I always ensure the professional development of my members by organizing training sessions and workshops for them. I also play a key role in the official magazine project as Editor-in-Chief.`,
    image: `paa.jpg`,
  },
  {
    title: `Scientific Club ORCA`,
    paragraph: `As the Head of the Projects Department, we managed to organize several training sessions dedicated to students, as well as various projects related to the environment and biodiversity.`,
    image: `orca.jpeg`,
  },
  {
    title: `AYN – Algerian Youth for Nature`,
    paragraph: `Founding member of the AYN association, a non-profit organization working to solve environmental issues, and Head of the Scientific Department, where I lead short- and long-term scientific projects integrating research, awareness, and science communication.`,
    image: `ayn.jpg`,
  },
  {
    title: `Hope Dose Foundation`,
    paragraph: `As a founding member of Hope Dose Foundation, a non-profit organization supporting people with cancer in Algeria, I contribute to sensitive humanitarian causes, reflecting a commitment that goes beyond the environmental field.`,
    image: `hope.jpg`,
  },
  {
    title: `Organizer of the "Vitamin Sea" Event`,
    paragraph: `To celebrate World Ocean Day, activities included beach and seabed clean-ups, awareness campaigns about coastal issues, and the importance of preservation. An exhibition about marine biodiversity created by myself was also presented.`,
    image: `vitamine.jpg`,
  },
  {
    title: `Organization of the "Marine Pollution" Event`,
    paragraph: `As the event manager, I presented a conference on marine pollution and led several educational, outreach, and awareness activities.`,
    image: `mp.jpg`,
  },
  {
    title: `Organization of World Sea Day`,
    paragraph: `This day allowed us to clean the lighthouse beach and collect more than 120 kg of plastic.`,
    image: `jm.jpg`,
  },
  {
    title: `Speaker on World Aquaculture Day`,
    paragraph: `Presentation of a conference on the impact of aquaculture on the marine environment and biodiversity. Included a full immersion in the marine species collection, with awareness and outreach activities.`,
    image: `ja.jpg`,
  },
  {
    title: `Head of the Series "One Day One Species"`,
    paragraph: `A series aimed at raising awareness and promoting Algerian marine biodiversity.`,
    image: `unjour.jpg`,
  },
]

Eprojects = [
  {
    title: `PINA`,
    paragraph: `It all started with a simple yet meaningful question: how can we preserve marine biodiversity if information is scattered, incomplete, and sometimes inaccessible?
From this reflection was born the idea of the PINA project – Information Portal on Algerian Marine Nature.
The ambition was clear: to create a centralized place where researchers, students, managers, and enthusiasts could access a reliable database on the marine species of our coastline. A platform that is interactive, intelligent, and open*, aiming to fill a scientific gap and strengthen sustainable ecosystem management. Today, PINA is progressing step by step to become more than just a database, but a dynamic tool that puts science at the service of conservation.`,
    image: `pina.jpg`
  },
  {
    title: `Coming soon`,
    paragraph: ``,
    image: `book1.jpg`
  },
  {
    title: `Coming soon`,
    paragraph: ``,
    image: `book2.jpg`
  },
  {
    title: `Coming soon`,
    paragraph: ``,
    image: `book3.jpg`
  },
  {
    title: `Coming soon`,
    paragraph: ``,
    image: `book4.jpg`
  }
]


  sec1 = signal(0)
  main = signal(1)
  sec2 = signal(2)
scrollLeft() {
  if (this.sec1() > 0) {
    this.sec1.update(v => v - 1);
  } else {
    this.sec1.set(this.certs.length - 1);
  }

  if (this.sec2() > 0) {
    this.sec2.update(v => v - 1);
  } else {
    this.sec2.set(this.certs.length - 1);
  }

  if (this.main() > 0) {
    this.main.update(v => v - 1);
  }
  else {
    this.main.set(this.certs.length - 1);
  }
}

scrollRight() {
  if (this.sec1() < this.certs.length - 1) {
    this.sec1.update(v => v + 1);
  } else {
    this.sec1.set(0);
  }

  if (this.sec2() < this.certs.length - 1) {
    this.sec2.update(v => v + 1);
  } else {
    this.sec2.set(0);
  }

  if (this.main() < this.certs.length - 1) {
    this.main.update(v => v + 1);
  } else {
    this.main.set(0);
  }
}
  changeByDots(ind:number) {
    this.main.set(ind)
    if (ind>0) {
    this.sec1.set( ind-1);
  } else {
    this.sec1.set(this.certs.length - 1);
  }

  if (ind<this.certs.length - 1) {
    this.sec2.set(ind+1)
  } else {
    this.sec2.set(0);
  }
}
startX = 0;

  isExpanded: boolean = false;
  toggleMore() {
    this.isExpanded = !this.isExpanded;
    console.log('clicked')
  }
  
onTouchStart(event: TouchEvent) {
  this.startX = event.touches[0].clientX;
}

onTouchEnd(event: TouchEvent) {
  const endX = event.changedTouches[0].clientX;
  const diffX = this.startX - endX;

  // Swipe threshold to avoid false triggers
  const threshold = 50;

  if (Math.abs(diffX) > threshold) {
    if (diffX > 0) {
      // Swiped left
      this.scrollRight();
    } else {
      // Swiped right
      this.scrollLeft();
    }
  }
}

  
  


  
}
