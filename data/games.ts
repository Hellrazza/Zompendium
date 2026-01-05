import { Background } from "@react-navigation/elements";

export const GAMES = {
    waw: {
        title: 'World at War',
        background: require('@/assets/images/wawBG.jpg'),
        maps: [
            {id: 'nacht', title: 'Nacht der Untoten'},
            {id: 'verruckt', title: 'Verruckt'},
            {id: 'shi-no-numa', title: 'Shi No Numa'},
            {id: 'der-riese', title: 'Der Riese'},
        ],
    },
    bo1: {
        title: 'Black Ops',
        background: require('@/assets/images/boBG.jpg'),
        maps: [
            { id: 'kino', title: 'Kino Der Toten'},
            { id: 'five', title: 'FIVE'},
            { id: 'ascension', title: 'Ascension'},
            { id: 'cotd', title: 'Call of the Dead'},
            { id: 'shangri-la', title: 'Shangri-La'},
            { id: 'moon', title: 'Moon'},
        ],
    },
    bo2: {
        title: 'Black Ops 2',
        background: require('@/assets/images/bo2BG.jpg'),
        maps: [
            { id: 'tranzit', title: 'Tranzit'},
            { id: 'nuketown', title: 'Nuketown'},
            { id: 'die-rise', title: 'Die Rise'},
            { id: 'motd', title: 'Mob of the Dead'},
            { id: 'buried', title: 'Buried'},
            { id: 'origins', title: 'Origins', background: require('@/assets/images/originsBG.jpg'), easterEggs: ["Little Lost Girl", "Ice Staff", "Fire Staff", "Wind Staff", "Lightning Staff"]},
        ],
    },
    bo4: {
        title: 'Black Ops 4',
        background: require('@/assets/images/bo4BG.jpg'),
        maps: [
            { id: 'voyage', title: 'Voyage of Despair'},
            { id: 'ix', title: 'IX'},
            { id: 'botd', title: 'Blood of the Dead'},
            { id: 'classified', title: 'Classified'},
            { id: 'dotn', title: 'Dead of the Night'},
            { id: 'ancient-evil', title: 'Ancient Evil'},
            { id: 'alpha-omega', title: 'Alpha Omega'},
            { id: 'tag', title: 'Tag Der Toten'},
        ],
    },
} as const;