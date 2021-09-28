const jsonData = [
    {
        "id": 337167,
        "title": "Fifty Shades Freed",
        "tagline": "Don't miss the climax",
        "vote_average": 6.1,
        "vote_count": 1195,
        "release_date": "2018-02-07",
        "poster_path": "https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg",
        "overview": "Believing they have left behind shadowy figures from their past, newlyweds Christian and Ana fully embrace an inextricable connection and shared life of luxury. But just as she steps into her role as Mrs. Grey and he relaxes into an unfamiliar stability, new threats could jeopardize their happy ending before it even begins.",
        "budget": 55000000,
        "revenue": 136906000,
        "genres": [
            "Drama",
            "Romance"
        ],
        "runtime": 106
    },
    {
        id: 300668,
        title: "Annihilation",
        tagline: "Fear What's Inside.",
        vote_average: 6.4,
        vote_count: 1291,
        release_date: "2018-02-22",
        poster_path: "https://image.tmdb.org/t/p/w500/d3qcpfNwbAMCNqWDHzPQsUYiUgS.jpg",
        overview: "A biologist signs up for a dangerous, secret expedition into a mysterious zone where the laws of nature don't apply.",
        budget: 40000000,
        revenue: 13258603,
        genres: [
            "Mystery",
            "Science Fiction",
            "Drama"
        ],
        runtime: 115
    },
    {
        "id": 181808,
        "title": "Star Wars: The Last Jedi",
        "tagline": "The Saga Continues",
        "vote_average": 7.1,
        "vote_count": 4732,
        "release_date": "2017-12-13",
        "poster_path": "https://image.tmdb.org/t/p/w500/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg",
        "overview": "Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.",
        "budget": 200000000,
        "revenue": 1325937250,
        "genres": [
            "Fantasy",
            "Adventure",
            "Science Fiction"
        ],
        "runtime": 152
    },
    {
        "id": 284054,
        "title": "Black Panther",
        "tagline": "Long live the king",
        "vote_average": 7.3,
        "vote_count": 3788,
        "release_date": "2018-02-13",
        "poster_path": "https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg",
        "overview": "King T'Challa returns home from America to the reclusive, technologically advanced African nation of Wakanda to serve as his country's new leader. However, T'Challa soon finds that he is challenged for the throne by factions within his own country as well as without. Using powers reserved to Wakandan kings, T'Challa assumes the Black Panther mantel to join with girlfriend Nakia, the queen-mother, his princess-kid sister, members of the Dora Milaje (the Wakandan 'special forces'), and an American secret agent, to prevent Wakanda from being dragged into a world war.",
        "budget": 200000000,
        "revenue": 1245257672,
        "genres": [
            "Action",
            "Adventure",
            "Fantasy",
            "Science Fiction"
        ],
        "runtime": 134
    },
    {
        "id": 354912,
        "title": "Coco",
        "tagline": "The celebration of a lifetime",
        "vote_average": 7.8,
        "vote_count": 3619,
        "release_date": "2017-10-27",
        "poster_path": "https://image.tmdb.org/t/p/w500/eKi8dIrr8voobbaGzDpe8w0PVbC.jpg",
        "overview": "Despite his family’s baffling generations-old ban on music, Miguel dreams of becoming an accomplished musician like his idol, Ernesto de la Cruz. Desperate to prove his talent, Miguel finds himself in the stunning and colorful Land of the Dead following a mysterious chain of events. Along the way, he meets charming trickster Hector, and together, they set off on an extraordinary journey to unlock the real story behind Miguel's family history.",
        "budget": 175000000,
        "revenue": 700920729,
        "genres": [
            "Adventure",
            "Comedy",
            "Family",
            "Animation"
        ],
        "runtime": 105
    },
    {
        "id": 333339,
        "title": "Ready Player One",
        "tagline": "A better reality awaits.",
        "vote_average": 8.1,
        "vote_count": 617,
        "release_date": "2018-03-28",
        "poster_path": "https://image.tmdb.org/t/p/w500/pU1ULUq8D3iRxl1fdX2lZIzdHuI.jpg",
        "overview": "When the creator of a popular video game system dies, a virtual contest is created to compete for his fortune.",
        "budget": 175000000,
        "revenue": 0,
        "genres": [
            "Adventure",
            "Science Fiction",
            "Action"
        ],
        "runtime": 140
    },
    {
        "id": 338970,
        "title": "Tomb Raider",
        "tagline": "Her legend begins",
        "vote_average": 6.2,
        "vote_count": 817,
        "release_date": "2018-03-08",
        "poster_path": "https://image.tmdb.org/t/p/w500/ePyN2nX9t8SOl70eRW47Q29zUFO.jpg",
        "overview": "Lara Croft, the fiercely independent daughter of a missing adventurer, must push herself beyond her limits when she finds herself on the island where her father disappeared.",
        "budget": 94000000,
        "revenue": 126025000,
        "genres": [
            "Action",
            "Adventure"
        ],
        "runtime": 118
    },
    {
        "id": 284053,
        "title": "Thor: Ragnarok",
        "tagline": "No Hammer. No Problem.",
        "vote_average": 7.4,
        "vote_count": 5349,
        "release_date": "2017-10-25",
        "poster_path": "https://image.tmdb.org/t/p/w500/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg",
        "overview": "Thor is imprisoned on the other side of the universe and finds himself in a race against time to get back to Asgard to stop Ragnarok, the prophecy of destruction to his homeworld and the end of Asgardian civilization, at the hands of an all-powerful new threat, the ruthless Hela.",
        "budget": 180000000,
        "revenue": 854229371,
        "genres": [
            "Action",
            "Adventure",
            "Fantasy"
        ],
        "runtime": 130
    },
    {
        "id": 321612,
        "title": "Beauty and the Beast",
        "tagline": "Be our guest.",
        "vote_average": 6.8,
        "vote_count": 7861,
        "release_date": "2017-03-16",
        "poster_path": "https://image.tmdb.org/t/p/w500/tWqifoYuwLETmmasnGHO7xBjEtt.jpg",
        "overview": "A live-action adaptation of Disney's version of the classic tale of a cursed prince and a beautiful young woman who helps him break the spell.",
        "budget": 160000000,
        "revenue": 1263521126,
        "genres": [
            "Family",
            "Fantasy",
            "Romance"
        ],
        "runtime": 129
    },
    {
        "id": 399055,
        "title": "The Shape of Water",
        "tagline": "A Fairy Tale for Troubled Times",
        "vote_average": 7.3,
        "vote_count": 3200,
        "release_date": "2017-12-01",
        "poster_path": "https://image.tmdb.org/t/p/w500/k4FwHlMhuRR5BISY2Gm2QZHlH5Q.jpg",
        "overview": "An other-worldly story, set against the backdrop of Cold War era America circa 1962, where a mute janitor working at a lab falls in love with an amphibious man being held captive there and devises a plan to help him escape.",
        "budget": 19500000,
        "revenue": 185545281,
        "genres": [
            "Drama",
            "Fantasy",
            "Romance"
        ],
        "runtime": 123
    },
    {
        id: 228150,
        title: "Fury",
        tagline: "War never ends quietly.",
        vote_average: 7.4,
        vote_count: 4936,
        release_date: "2014-10-15",
        poster_path: "https://image.tmdb.org/t/p/w500/pfte7wdMobMF4CVHuOxyu6oqeeA.jpg",
        overview: "Last months of World War II in April 1945. As the Allies make their final push in the European Theater, a battle-hardened U.S. Army sergeant in the 2nd Armored Division named Wardaddy commands a Sherman tank called 'Fury' and its five-man crew on a deadly mission behind enemy lines. Outnumbered and outgunned, Wardaddy and his men face overwhelming odds in their heroic attempts to strike at the heart of Nazi Germany.",
        budget: 68000000,
        revenue: 211817906,
        genres: [
            "War",
            "Drama",
            "Action"
        ],
        runtime: 135
    },
    {
        "id": 141052,
        "title": "Justice League",
        "tagline": "",
        "vote_average": 6.4,
        "vote_count": 3960,
        "release_date": "2017-11-15",
        "poster_path": "https://image.tmdb.org/t/p/w500/eifGNCSDuxJeS1loAXil5bIGgvC.jpg",
        "overview": "Fuelled by his restored faith in humanity and inspired by Superman's selfless act, Bruce Wayne and Diana Prince assemble a team of metahumans consisting of Barry Allen, Arthur Curry and Victor Stone to face the catastrophic threat of Steppenwolf and the Parademons who are on the hunt for three Mother Boxes on Earth.",
        "budget": 500000000,
        "revenue": 655894816,
        "genres": [
            "Action",
            "Adventure",
            "Fantasy",
            "Science Fiction"
        ],
        "runtime": 120
    },
    {
        "id": 268896,
        "title": "Pacific Rim: Uprising",
        "tagline": "Rise Up",
        "vote_average": 6,
        "vote_count": 318,
        "release_date": "2018-03-21",
        "poster_path": "https://image.tmdb.org/t/p/w500/v5HlmJK9bdeHxN2QhaFP1ivjX3U.jpg",
        "overview": "It has been ten years since The Battle of the Breach and the oceans are still, but restless. Vindicated by the victory at the Breach, the Jaeger program has evolved into the most powerful global defense force in human history. The PPDC now calls upon the best and brightest to rise up and become the next generation of heroes when the Kaiju threat returns.",
        "budget": 150000000,
        "revenue": 150613316,
        "genres": [
            "Action",
            "Fantasy",
            "Science Fiction",
            "Adventure"
        ],
        "runtime": 111
    },
    {
        id: 399035,
        title: "The Commuter",
        tagline: "Lives are on the line",
        vote_average: 5.8,
        vote_count: 655,
        release_date: "2018-01-11",
        poster_path: "https://image.tmdb.org/t/p/w500/rDeGK6FIUfVcXmuBdEORPAGPMNg.jpg",
        overview: "A businessman on his daily commute home gets unwittingly caught up in a criminal conspiracy that threatens not only his life but the lives of those around him.",
        budget: 30000000,
        revenue: 105652788,
        genres: [
            "Action",
            "Crime",
            "Drama"
        ],
        runtime: 104
    }
]

export default jsonData;