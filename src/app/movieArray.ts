export class movie{
    constructor(public id:string,
                public title:string,
                public desc:string,
                public genre:string[],
                public imdb:string,
                public releasedate:string,
                public pic:string,
                public slide:string[],
                public mlink:string
                ){}           
}

export let moviearray:movie[]=[
    {   id:'0',
        title:'Supergirl',
        desc:"To avert a disaster, Kara Danvers reveals her powers and true identity: She is Superman's cousin, now known as Supergirl, protector of National City",
        genre:['Action','Superhero Fiction','Drama','Adventure','Science Fiction'],
        imdb:'7.2',
        releasedate:'8 July 2015',
        pic:'../assets/images/supergirl-banner.jpg',
        slide: ['../assets/images/sg-1.jpg','../assets/images/sg-2.jpg','../assets/images/sg-3.jpg','../assets/images/sg-4.jpg'],
        mlink: 'https://openloadmov.net/episodes/supergirl-1x1/'
    },
    {   id:'1',
        title:'Wanda Vision',
        desc:" Part loving homage to TV history, part off-kilter mystery, WandaVision is a wonderfully weird and strikingly bold step into the small screen for the MCU  ",
        genre:['Sitcom','Mystery','Superhero fiction','Drama','Romance'],
        imdb:'8.0',
        releasedate:'15 January 2021',
        pic:'../assets/images/wanda-banner.jpg',
        slide: ['../assets/images/wanda-2.jpg','../assets/images/wanda-1.jpg','../assets/images/wanda-3.jpg','../assets/images/wanda-4.jpg'],
        mlink: 'https://openloadmov.net/episodes/wandavision-1x1/'
    },
    {   id:'2',
        title:'Black Panther',
        desc:" Marvel Studios' “Black Panther” follows T'Challa who, after the death of his father, the King of Wakanda, returns home to the isolated,technologically advanced African nation to succeed to the throne and take his rightful place as king",
        genre:['Action','Superhero Fiction','Superhero','Science Fiction'],
        imdb:'7.3',
        releasedate:'8 July 2022',
        pic:'../assets/images/black-banner.png',
        slide: ['../assets/images/bp-1.jpg','../assets/images/bp-2.jpg','../assets/images/bp-3.jpg','../assets/images/bp-4.jpg'],
        mlink: 'https://openloadmov.net/movies/black-panther-2018/'
    },
    {  
        id:'3',
        title:'Demon Slayer',
        desc:"A family is attacked by demons and only two members survive - Tanjiro and his sister Nezuko, who is turning into a demon slowly. Tanjiro sets out to become a demon slayer to avenge his family and cure his sister.",
        genre:['Anime','Action','Fantasy','Adventure','Historical Drama'],
        imdb:'8.7',
        releasedate:'16 October 2020',
        pic:'../assets/images/cartoons/demon-slayer.jpg',
        slide: ['../assets/images/ds-1.jpg','../assets/images/ds-2.jpg','../assets/images/ds-3.jpg','../assets/images/ds-4.jpg'],
        mlink: 'https://openloadmov.net/movies/demon-slayer-kimetsu-no-yaiba-the-movie-mugen-train-2020/'
    },
    {   id:'4',
        title:'Wanda Vision',
        desc:" Part loving homage to TV history, part off-kilter mystery, WandaVision is a wonderfully weird and strikingly bold step into the small screen for the MCU  ",
        genre:['Sitcom','Mystery','Superhero fiction','Drama','Romance'],
        imdb:'8.0',
        releasedate:'15 January 2021',
        pic:'../assets/images/series/wanda.png',
        slide: ['../assets/images/wanda-2.jpg','../assets/images/wanda-1.jpg','../assets/images/wanda-3.jpg','../assets/images/wanda-4.jpg'],
        mlink: 'https://openloadmov.net/episodes/wandavision-1x1/'
    },
    {  
        id:'5',
        title:'Bloodshot',
        desc:"Ray Garrison, an elite soldier killed in battle, is resurrected and given superhuman abilities. As he sets out to get revenge, he uncovers secrets about his life and the people supposedly helping him.",
        genre:['Action','Superhero','Drama','Adventure','Science Fiction'],
        imdb:'6.7',
        releasedate:'13 March 2020',
        pic:'../assets/images/movies/blood-shot.jpg',
        slide: ['../assets/images/bs-1.jpg','../assets/images/bs-2.jpg','../assets/images/bs-3.jpg','../assets/images/bs-4.jpg'],
        mlink: 'https://openloadmov.net/movies/bloodshot-2020/'
    },
    {  
        id:'6',
        title:'The Dark Knight',
        desc:"After Gordon, Dent and Batman begin an assault on Gotham's organised crime, the mobs hire the Joker, a psychopathic criminal mastermind who offers to kill Batman and bring the city to its knees",
        genre:['Action','Crime Film','Mystery','Superhero','Thriller'],
        imdb:'9.0',
        releasedate:'18 July 2008',
        pic:'../assets/images/movies/bat-man.jpg',
        slide: ['../assets/images/tdk-1.jpeg','../assets/images/tdk-2.jpg','../assets/images/tdk-3.jpg','../assets/images/tdk-4.jpg'],
        mlink: 'https://openloadmov.net/movies/the-dark-knight-2008/'
    },
    {   id:'7',
        title:'Supergirl',
        desc:"To avert a disaster, Kara Danvers reveals her powers and true identity: She is Superman's cousin, now known as Supergirl, protector of National City",
        genre:['Action','Superhero Fiction','Drama','Adventure','Science Fiction'],
        imdb:'6.2',
        releasedate:'8 July 2015',
        pic:'../assets/images/series/supergirl.jpg',
        slide: ['../assets/images/sg-1.jpg','../assets/images/sg-2.jpg','../assets/images/sg-3.jpg','../assets/images/sg-4.jpg'],
        mlink: 'https://openloadmov.net/episodes/supergirl-1x1/'
    },
    {  
        id:'8',
        title:'Captain Marvel',
        desc:"Amidst a mission, Vers, a Kree warrior, gets separated from her team and is stranded on Earth. However, her life takes an unusual turn after she teams up with Fury, a S.H.I.E.L.D. agent.",
        genre:['Action','Superhero Fiction','Adventure','Science Fiction'],
        imdb:'6.8',
        releasedate:'8 March 2019',
        pic:'../assets/images/movies/captain-marvel.png',
        slide: ['../assets/images/cm-1.jpg','../assets/images/cm-2.jpg','../assets/images/cm-3.jpg','../assets/images/cm-4.jpg'],
        mlink: 'https://openloadmov.net/movies/captain-marvel-2019/'
    },
    {  
        id:'9',
        title:'Loki',
        desc:"Loki, the God of Mischief, steps out of his brother's shadow to embark on an adventure that takes place after the events of 'Avengers: Endgame'",
        genre:['Superheroo Fiction','Crime','Procedural Drama','Fantasy Television'],
        imdb:'8.4',
        releasedate:'9 June 2021',
        pic:'../assets/images/series/loki.jpg',
        slide: ['../assets/images/loki-3.jpg','../assets/images/loki-2.jpg','../assets/images/loki-1.jpg','../assets/images/loki-4.jpg'],
        mlink: 'https://openloadmov.net/tvseries/money-heist/'
    },
    {  
        id:'10',
        title:'Squid Game',
        desc:"Hundreds of cash-strapped contestants accept an invitation to compete in children's games for a tempting prize, but the stakes are deadly.",
        genre:['Drama','Thriller','Action Fiction'],
        imdb:'8.3',
        releasedate:'17 September 2021',
        pic:'../assets/images/series/squid.jpg',
        slide: ['../assets/images/sq-1.jpg','../assets/images/sq-2.jpg','../assets/images/sq-3.jpg','../assets/images/sq-4.jpeg'],
        mlink: 'https://openloadmov.net/episodes/star-trek-discovery-1x1/'
    },
    {  
        id:'11',
        title:'Brooklyn Nine Nine',
        desc:"A woman attempts to enter high society by becoming the 'queen' of a luxury 100th floor penthouse apartment in Gangnam.",
        genre:['Sitcom','Comedy','Police Prodecural'],
        imdb:'8.2',
        releasedate:'17 September 2013',
        pic:'../assets/images/series/brooklyn.jpg',
        slide: ['../assets/images/b99-4.jpg','../assets/images/b99-2.jpg','../assets/images/b99-3.jpg','../assets/images/b99-1.jpg'],
        mlink: 'https://openloadmov.net/episodes/brooklyn-nine-nine-1x1/'
    },
    {  
        id:'12',
        title:'The Flash',
        desc:"Barry Allen, a forensic scientist with the Central City police force, is struck by lightning in a freak accident. When he wakes up after nine months, he discovers that he can achieve great speeds.",
        genre:['Superhero','Mystery','Superhero fiction','Action','Drama'],
        imdb:'7.6',
        releasedate:'7 October 2014',
        pic:'../assets/images/series/flash.jpg',
        slide: ['../assets/images/flash-1.jpg','../assets/images/flash-2.jpg','../assets/images/flash-3.jpg','../assets/images/flash-4.jpg'],
        mlink: 'https://openloadmov.net/tvseries/the-flash/'
    },
    {  
        id:'13',
        title:'Money Heist',
        desc:"A criminal mastermind who goes by 'The Professor' has a plan to pull off the biggest heist in recorded history -- to print billions of euros in the Royal Mint of Spain. To help him carry out the ambitious plan, he recruits eight people with certain abilities and who have nothing to lose.",
        genre:['Heist','Thriller','Drama','Crime Film'],
        imdb:'8.2',
        releasedate:'2 May 2017',
        pic:'../assets/images/series/money.jpg',
        slide: ['../assets/images/mh-1.jpg','../assets/images/mh-2.jpg','../assets/images/mh-3.jpg','../assets/images/mh-4.jpg'],
        mlink: 'https://openloadmov.net/tvseries/money-heist/'
    },
    {  
        id:'14',
        title:'Wanda Vision',
        desc:" Part loving homage to TV history, part off-kilter mystery, WandaVision is a wonderfully weird and strikingly bold step into the small screen for the MCU  ",
        genre:['Sitcom','Mystery','Superhero fiction','Drama','Romance'],
        imdb:'8.0',
        releasedate:'15 January 2021',
        pic:'../assets/images/series/wanda.png',
        slide: ['../assets/images/wanda-1.jpg','../assets/images/wanda-2.jpg','../assets/images/wanda-3.jpg','../assets/images/wanda-4.jpg'],
        mlink: 'https://openloadmov.net/episodes/wandavision-1x1/'
    },
    {  
        id:'15',
        title:'The Falcon & the Winter Soldier',
        desc:"In 1980s Indiana, a group of young friends witness supernatural forces and secret government exploits. As they search for answers, the children unravel a series of extraordinary mysteries.",
        genre:['Adventure','Superhero','Action','Sci-Fi'],
        imdb:'8.7',
        releasedate:'5 Septermber 1996',
        pic:'../assets/images/series/the-falcon.webp',
        slide: ['../assets/images/tf-3.jpeg','../assets/images/tf-2.jpg','../assets/images/tf-1.jpg','../assets/images/tf-4.jpg'],
        mlink: 'https://openloadmov.net/episodes/the-falcon-and-the-winter-soldier-1x1/'
    },
    {  
        id:'16',
        title:'Money Heist',
        desc:"A criminal mastermind who goes by 'The Professor' has a plan to pull off the biggest heist in recorded history -- to print billions of euros in the Royal Mint of Spain. To help him carry out the ambitious plan, he recruits eight people with certain abilities and who have nothing to lose.",
        genre:['Heist','Thriller','Drama','Crime Film'],
        imdb:'8.2',
        releasedate:'2 May 2017',
        pic:'../assets/images/money-banner.jpg',
        slide: ['../assets/images/mh-1.jpg','../assets/images/mh-2.jpg','../assets/images/mh-3.jpg','../assets/images/mh-4.jpg'],
        mlink: 'https://openloadmov.net/tvseries/money-heist/'
    },
    {  
        id:'17',
        title:'Stranger Things',
        desc:"In 1980s Indiana, a group of young friends witness supernatural forces and secret government exploits. As they search for answers, the children unravel a series of extraordinary mysteries.",
        genre:['Supernatural','Horror Fiction','Drama','Sci-Fi'],
        imdb:'8.7',
        releasedate:'5 Septermber 1996',
        pic:'../assets/images/series/stranger-thing.jpg',
        slide: ['../assets/images/st-1.jpg','../assets/images/st-2.jpg','../assets/images/st-4.jpg','../assets/images/st-3.jpg'],
        mlink: 'https://openloadmov.net/movies/captain-marvel-2019/'
    },
    {   id:'18',
        title:'Black Panther',
        desc:" Marvel Studios' “Black Panther” follows T'Challa who, after the death of his father, the King of Wakanda, returns home to the isolated,technologically advanced African nation to succeed to the throne and take his rightful place as king",
        genre:['Action','Superhero Fiction','Superhero','Science Fiction'],
        imdb:'7.3',
        releasedate:'8 July 2022',
        pic:'../assets/images/black-banner.jpg',
        slide: ['../assets/images/bp-1.jpg','../assets/images/bp-2.jpg','../assets/images/bp-3.jpg','../assets/images/bp-4.jpg'],
        mlink: 'https://openloadmov.net/movies/black-panther-2018/'
    },
        {   
        id:'19',
        title:'DragonBall',
        desc:" Dragon Ball is a Japanese media franchise created by Akira Toriyama in 1984. The initial manga, written and illustrated by Toriyama, was serialized in Weekly Shōnen Jump from 1984 to 1995, with the 519 individual chapters collected into 42 tankōbon volumes by its publisher Shueisha",
        genre:["Anime","Action","Martial Arts","Sci-Fi"],
        imdb:'8.3',
        releasedate:'5 July 2015',
        pic:'../assets/images/cartoons/dragon.jpg',
        slide: ['../assets/images/db-2.jpg','../assets/images/db-1.jpg','../assets/images/db-3.jpg','../assets/images/db-4.jpg'],
        mlink: 'https://openloadmov.net/movies/black-panther-2018/'
    },

    {   
        id:'20',
        title:'Weathering With You',
        desc:"Set during a period of exceptionally rainy weather, high-school boy Hodaka Morishima runs away from his troubled rural home to Tokyo and befriends an orphan girl who can manipulate the weather.",
        genre:["Anime","Romance","Drama","Fantasy"],
        imdb:'7.5',
        releasedate:'11 October 2019',
        pic:'../assets/images/cartoons/weathering.jpg',
        slide: ['../assets/images/bp-1.jpg','../assets/images/bp-2.jpg','../assets/images/bp-3.jpg','../assets/images/bp-4.jpg'],
        mlink: 'https://openloadmov.net/movies/black-panther-2018/'
    },

    {   
        id:'21',
        title:'Your Name',
        desc:"Two teenagers share a profound, magical connection upon discovering they are swapping bodies. Things manage to become even more complicated when the boy and girl decide to meet in person.",
        genre:["Anime","Romance","Drama","Fantasy"],
        imdb:'8.5',
        releasedate:"26 August 2016",
        pic:'../assets/images/cartoons/your-name.jpg',
        slide: ['../assets/images/bp-1.jpg','../assets/images/bp-2.jpg','../assets/images/bp-3.jpg','../assets/images/bp-4.jpg'],
        mlink: 'https://openloadmov.net/movies/black-panther-2018/'
    },
    {   
        id:'22',
        title:'Over the moon',
        desc:"Over the Moon is a 2020 computer-animated musical fantasy film directed by Glen Keane and co-directed by John Kahrs, from a screenplay by Audrey Wells with additional screenplay material by Alice Wu and Jennifer Yee McDevitt.",
        genre:["Musical","Sci-Fi","Fantasy"],
        imdb:'6.5',
        releasedate:"16 October 2020",
        pic:'../assets/images/cartoons/over-the-moon.jpg',
        slide: ['../assets/images/bp-1.jpg','../assets/images/bp-2.jpg','../assets/images/bp-3.jpg','../assets/images/bp-4.jpg'],
        mlink: 'https://openloadmov.net/movies/black-panther-2018/'
    },

    {   
        id:'23',
        title:'Croods',
        desc:"Searching for a safer habitat, the prehistoric Crood family discovers an idyllic, walled-in paradise that meets all of its needs. Unfortunately, they must also learn to live with the Bettermans -- a family that's a couple of steps above the Croods on the evolutionary ladder. ",
        genre:["Animation","Comedy","Adventure","Fantasy"],
        imdb:'7.2',
        releasedate:"19 April 2013",
        pic:'../assets/images/cartoons/croods.jpg',
        slide: ['../assets/images/bp-1.jpg','../assets/images/bp-2.jpg','../assets/images/bp-3.jpg','../assets/images/bp-4.jpg'],
        mlink: 'https://openloadmov.net/movies/black-panther-2018/'
    },



];


export let mylist:movie[] = [];
export let searchlist:movie[] = [];
