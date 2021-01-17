const originalPlatforms = [
    {
      "id": 3,
      "abbreviation": "Linux",
      "alternative_name": "GNU/Linux",
      "category": 4,
      "created_at": 1297555200,
      "name": "Linux",
      "platform_logo": 380,
      "platform_family": 4,
      "slug": "linux",
      "summary": "Linux is a free and open-source (FOSS/FLOSS) Operating System. In a more precise and complex definition, Linux is an open-source OS kernel on which a large variety of Operating Systems (known as Linux distributions) are built.",
      "updated_at": 1392940800,
      "url": "https://www.igdb.com/platforms/linux",
      "versions": [
        44
      ],
      "websites": [
        1
      ],
      "checksum": "b810fb9c-65f7-b297-3658-da9c4d52bf11"
    },
    {
      "id": 4,
      "abbreviation": "N64",
      "alternative_name": "N64",
      "category": 1,
      "created_at": 1297555200,
      "generation": 5,
      "name": "Nintendo 64",
      "platform_logo": 260,
      "platform_family": 5,
      "slug": "n64",
      "updated_at": 1565136000,
      "url": "https://www.igdb.com/platforms/n64",
      "versions": [
        51,
        122
      ],
      "websites": [
        35
      ],
      "checksum": "647c6004-3c75-3b8d-8259-79bd3d5e5a28"
    },
    {
      "id": 5,
      "abbreviation": "Wii",
      "alternative_name": "Revolution",
      "category": 1,
      "created_at": 1297555200,
      "generation": 7,
      "name": "Wii",
      "platform_logo": 326,
      "platform_family": 5,
      "slug": "wii",
      "updated_at": 1565136000,
      "url": "https://www.igdb.com/platforms/wii",
      "versions": [
        72,
        283
      ],
      "checksum": "a588baba-4edb-7649-8516-c2946f410812"
    },
    {
      "id": 6,
      "abbreviation": "PC",
      "alternative_name": "mswin",
      "category": 4,
      "created_at": 1297555200,
      "name": "PC (Microsoft Windows)",
      "platform_logo": 203,
      "slug": "win",
      "updated_at": 1470009600,
      "url": "https://www.igdb.com/platforms/win",
      "versions": [
        1,
        13,
        14,
        15,
        124
      ],
      "websites": [
        2
      ],
      "checksum": "5aae54d0-390e-a4ec-a9ee-4ad4cc346992"
    },
    {
      "id": 7,
      "abbreviation": "PS1",
      "category": 1,
      "created_at": 1297555200,
      "generation": 5,
      "name": "PlayStation",
      "platform_logo": 278,
      "platform_family": 1,
      "slug": "ps",
      "updated_at": 1392076800,
      "url": "https://www.igdb.com/platforms/ps",
      "versions": [
        57
      ],
      "checksum": "ff70e8cc-2bd3-9b66-886f-06f32a061b3d"
    },
    {
      "id": 8,
      "abbreviation": "PS2",
      "alternative_name": "PS2",
      "category": 1,
      "created_at": 1297555200,
      "generation": 6,
      "name": "PlayStation 2",
      "platform_logo": 254,
      "platform_family": 1,
      "slug": "ps2",
      "updated_at": 1414972800,
      "url": "https://www.igdb.com/platforms/ps2",
      "versions": [
        58,
        114
      ],
      "checksum": "be3e025c-d4ed-b795-443c-a8cb55fbfe17"
    },
    {
      "id": 9,
      "abbreviation": "PS3",
      "category": 1,
      "created_at": 1297555200,
      "generation": 7,
      "name": "PlayStation 3",
      "platform_logo": 79,
      "platform_family": 1,
      "slug": "ps3",
      "updated_at": 1391558400,
      "url": "https://www.igdb.com/platforms/ps3",
      "versions": [
        4,
        5,
        6
      ],
      "websites": [
        3
      ],
      "checksum": "d516c27e-955e-2ff7-c31b-7d65305b2617"
    },
    {
      "id": 11,
      "abbreviation": "XBOX",
      "category": 1,
      "created_at": 1297555200,
      "generation": 6,
      "name": "Xbox",
      "platform_logo": 266,
      "platform_family": 2,
      "slug": "xbox",
      "updated_at": 1392076800,
      "url": "https://www.igdb.com/platforms/xbox",
      "versions": [
        77
      ],
      "checksum": "226780a3-83ed-dcf9-6757-77091acc172d"
    },
    {
      "id": 12,
      "abbreviation": "X360",
      "alternative_name": "xbx360",
      "category": 1,
      "created_at": 1297555200,
      "generation": 7,
      "name": "Xbox 360",
      "platform_logo": 250,
      "platform_family": 2,
      "slug": "xbox360",
      "summary": "Xbox 360 brings you a total games and entertainment experience. The largest library of games, including titles that get you right into the thick of it with Kinect. Plus, your whole family can watch HD movies, TV shows, live events, music, sports and more—across all your devices. Xbox 360 is the center of your games and entertainment universe.",
      "updated_at": 1392854400,
      "url": "https://www.igdb.com/platforms/xbox360",
      "versions": [
        2,
        3,
        83
      ],
      "websites": [
        4
      ],
      "checksum": "8e1d2b32-0aaf-0992-eaf7-bff2c0ad2863"
    },
    {
      "id": 13,
      "abbreviation": "DOS",
      "category": 4,
      "created_at": 1297641600,
      "name": "PC DOS",
      "platform_logo": 38,
      "slug": "dos",
      "updated_at": 1392076800,
      "url": "https://www.igdb.com/platforms/dos",
      "versions": [
        56
      ],
      "checksum": "b2f74f34-7e3d-78b5-1639-bc038cb99679"
    },
    {
      "id": 14,
      "abbreviation": "Mac",
      "alternative_name": "Mac OS",
      "category": 4,
      "created_at": 1297641600,
      "name": "Mac",
      "platform_logo": 100,
      "slug": "mac",
      "updated_at": 1394236800,
      "url": "https://www.igdb.com/platforms/mac",
      "versions": [
        45,
        141,
        142,
        143,
        144,
        145,
        146,
        147,
        148,
        149,
        150,
        151
      ],
      "websites": [
        5
      ],
      "checksum": "19c9dcae-80a2-e137-50ff-11b823738827"
    },
    {
      "id": 15,
      "abbreviation": "C64",
      "category": 6,
      "created_at": 1297814400,
      "name": "Commodore C64/128",
      "platform_logo": 300,
      "slug": "c64",
      "updated_at": 1468454400,
      "url": "https://www.igdb.com/platforms/c64",
      "versions": [
        36
      ],
      "checksum": "90d35a92-186e-98b5-7688-514c36c23da7"
    },
    {
      "id": 16,
      "abbreviation": "Amiga",
      "category": 6,
      "created_at": 1297814400,
      "name": "Amiga",
      "slug": "amiga",
      "updated_at": 1417392000,
      "url": "https://www.igdb.com/platforms/amiga",
      "versions": [
        19,
        109,
        110,
        111,
        112,
        113
      ],
      "checksum": "5f67821e-ed83-7d0a-5870-5b2233de8e9a"
    },
    {
      "id": 18,
      "abbreviation": "NES",
      "alternative_name": "NES",
      "category": 1,
      "created_at": 1297900800,
      "generation": 3,
      "name": "Nintendo Entertainment System (NES)",
      "platform_logo": 229,
      "platform_family": 5,
      "slug": "nes",
      "updated_at": 1424044800,
      "url": "https://www.igdb.com/platforms/nes",
      "versions": [
        53,
        175
      ],
      "checksum": "c046c748-bea6-8418-904c-7e787a652a08"
    },
    {
      "id": 19,
      "abbreviation": "SNES",
      "alternative_name": "SNES, Super Nintendo",
      "category": 1,
      "created_at": 1297900800,
      "generation": 4,
      "name": "Super Nintendo Entertainment System (SNES)",
      "platform_logo": 535,
      "platform_family": 5,
      "slug": "snes--1",
      "updated_at": 1591142400,
      "url": "https://www.igdb.com/platforms/snes--1",
      "versions": [
        68,
        95,
        97,
        139,
        177,
        391
      ],
      "websites": [
        209
      ],
      "checksum": "abefad85-f090-9223-53c2-127cadfaa3f1"
    },
    {
      "id": 20,
      "abbreviation": "NDS",
      "alternative_name": "DS",
      "category": 5,
      "created_at": 1297900800,
      "generation": 7,
      "name": "Nintendo DS",
      "platform_logo": 245,
      "platform_family": 5,
      "slug": "nds",
      "updated_at": 1502668800,
      "url": "https://www.igdb.com/platforms/nds",
      "versions": [
        52,
        190,
        191,
        192
      ],
      "checksum": "75523597-5342-d7b4-c365-68315bd5932b"
    },
    {
      "id": 21,
      "abbreviation": "NGC",
      "alternative_name": "Dolphin",
      "category": 1,
      "created_at": 1297987200,
      "generation": 6,
      "name": "Nintendo GameCube",
      "platform_logo": 262,
      "slug": "ngc",
      "updated_at": 1565136000,
      "url": "https://www.igdb.com/platforms/ngc",
      "versions": [
        54,
        121,
        125
      ],
      "checksum": "f5e41a21-04c5-610e-f6ef-0254008461c7"
    },
    {
      "id": 22,
      "abbreviation": "GBC",
      "category": 5,
      "created_at": 1300147200,
      "generation": 5,
      "name": "Game Boy Color",
      "platform_logo": 273,
      "platform_family": 5,
      "slug": "gbc",
      "updated_at": 1589587200,
      "url": "https://www.igdb.com/platforms/gbc",
      "versions": [
        41
      ],
      "checksum": "332ae991-5092-56f0-ac02-39de64097f27"
    },
    {
      "id": 23,
      "abbreviation": "DC",
      "category": 1,
      "created_at": 1300147200,
      "generation": 6,
      "name": "Dreamcast",
      "platform_logo": 270,
      "slug": "dc",
      "updated_at": 1392076800,
      "url": "https://www.igdb.com/platforms/dc",
      "versions": [
        16
      ],
      "checksum": "586e0e57-9a37-fbde-c59d-4726c8d229a6"
    },
    {
      "id": 24,
      "abbreviation": "GBA",
      "alternative_name": "GBA",
      "category": 5,
      "created_at": 1300147200,
      "generation": 6,
      "name": "Game Boy Advance",
      "platform_logo": 255,
      "platform_family": 5,
      "slug": "gba",
      "updated_at": 1471478400,
      "url": "https://www.igdb.com/platforms/gba",
      "versions": [
        40,
        193,
        194
      ],
      "checksum": "2741e85f-e65d-4668-6cdb-36fca54e5dd4"
    },
    {
      "id": 25,
      "abbreviation": "ACPC",
      "alternative_name": "Colour Personal Computer",
      "category": 6,
      "created_at": 1300147200,
      "name": "Amstrad CPC",
      "platform_logo": 114,
      "slug": "acpc",
      "updated_at": 1468454400,
      "url": "https://www.igdb.com/platforms/acpc",
      "versions": [
        20
      ],
      "checksum": "98553ead-7abe-3404-745d-cf7c17010f01"
    },
    {
      "id": 26,
      "abbreviation": "ZXS",
      "category": 6,
      "created_at": 1300147200,
      "name": "ZX Spectrum",
      "platform_logo": 371,
      "slug": "zxs",
      "updated_at": 1468540800,
      "url": "https://www.igdb.com/platforms/zxs",
      "versions": [
        79
      ],
      "checksum": "f73944f5-3aee-6709-e02f-ed9b896a85cc"
    },
    {
      "id": 27,
      "abbreviation": "MSX",
      "category": 6,
      "created_at": 1300147200,
      "name": "MSX",
      "platform_logo": 307,
      "slug": "msx",
      "updated_at": 1468540800,
      "url": "https://www.igdb.com/platforms/msx",
      "versions": [
        47
      ],
      "checksum": "7954204a-0502-4940-48c1-d525148f76fd"
    },
    {
      "id": 29,
      "abbreviation": "Genesis",
      "alternative_name": "Sega Genesis",
      "category": 1,
      "created_at": 1300924800,
      "generation": 4,
      "name": "Sega Mega Drive/Genesis",
      "platform_logo": 293,
      "platform_family": 3,
      "slug": "smd",
      "updated_at": 1400112000,
      "url": "https://www.igdb.com/platforms/smd",
      "versions": [
        64
      ],
      "checksum": "2b0bf08d-bdb2-5d1b-ce0c-0056ef3b35d7"
    },
    {
      "id": 30,
      "abbreviation": "Sega32",
      "category": 1,
      "created_at": 1300924800,
      "generation": 4,
      "name": "Sega 32X",
      "platform_logo": 279,
      "platform_family": 3,
      "slug": "sega32",
      "updated_at": 1555977600,
      "url": "https://www.igdb.com/platforms/sega32",
      "versions": [
        61
      ],
      "checksum": "d47b5ebe-fc4e-7719-a5d9-ad5eeebc6ede"
    },
    {
      "id": 32,
      "abbreviation": "Saturn",
      "alternative_name": "JVC Saturn, Hi-Saturn, Samsung Saturn, V-Saturn",
      "category": 1,
      "created_at": 1301961600,
      "generation": 5,
      "name": "Sega Saturn",
      "platform_logo": 49,
      "platform_family": 3,
      "slug": "saturn",
      "updated_at": 1540771200,
      "url": "https://www.igdb.com/platforms/saturn",
      "versions": [
        65
      ],
      "websites": [
        6
      ],
      "checksum": "f4fddc54-c402-d538-ac88-e3d711bf3bb2"
    },
    {
      "id": 33,
      "abbreviation": "Game Boy",
      "category": 5,
      "created_at": 1302307200,
      "generation": 4,
      "name": "Game Boy",
      "platform_logo": 274,
      "platform_family": 5,
      "slug": "gb",
      "updated_at": 1475625600,
      "url": "https://www.igdb.com/platforms/gb",
      "versions": [
        39,
        181,
        182
      ],
      "checksum": "d9a54cf1-7327-083d-7176-ab6143f4c78f"
    },
    {
      "id": 34,
      "abbreviation": "Android",
      "alternative_name": "Infocusa3",
      "category": 4,
      "created_at": 1302566400,
      "name": "Android",
      "platform_logo": 376,
      "slug": "android",
      "updated_at": 1556150400,
      "url": "https://www.igdb.com/platforms/android",
      "versions": [
        7,
        8,
        9,
        10,
        11,
        12,
        236,
        237,
        238,
        239,
        320
      ],
      "websites": [
        7
      ],
      "checksum": "fe27cf28-ec61-df1a-e378-ae233b2eea73"
    },
    {
      "id": 35,
      "abbreviation": "Game Gear",
      "category": 5,
      "created_at": 1303862400,
      "generation": 4,
      "name": "Sega Game Gear",
      "platform_logo": 287,
      "platform_family": 3,
      "slug": "gamegear",
      "updated_at": 1469404800,
      "url": "https://www.igdb.com/platforms/gamegear",
      "versions": [
        62
      ],
      "checksum": "22dce350-99d3-3eb0-65a0-7e41ff3d1425"
    },
    {
      "id": 36,
      "abbreviation": "xla",
      "category": 3,
      "created_at": 1317600000,
      "name": "Xbox Live Arcade",
      "platform_logo": 19,
      "platform_family": 2,
      "slug": "xla",
      "updated_at": 1391904000,
      "url": "https://www.igdb.com/platforms/xla",
      "versions": [
        31
      ],
      "websites": [
        8
      ],
      "checksum": "751be340-d180-7a2d-c46a-07b150d07265"
    },
    {
      "id": 37,
      "abbreviation": "3DS",
      "alternative_name": "3DS",
      "category": 5,
      "created_at": 1317600000,
      "generation": 8,
      "name": "Nintendo 3DS",
      "platform_logo": 240,
      "platform_family": 5,
      "slug": "3ds",
      "updated_at": 1473984000,
      "url": "https://www.igdb.com/platforms/3ds",
      "versions": [
        50
      ],
      "websites": [
        9
      ],
      "checksum": "acee0d28-d3b8-b891-fc1c-768782c775a4"
    },
    {
      "id": 38,
      "abbreviation": "PSP",
      "alternative_name": "PSP",
      "category": 5,
      "created_at": 1317600000,
      "generation": 7,
      "name": "PlayStation Portable",
      "platform_logo": 214,
      "platform_family": 1,
      "slug": "psp",
      "updated_at": 1552780800,
      "url": "https://www.igdb.com/platforms/psp",
      "versions": [
        59,
        276,
        277,
        278,
        279
      ],
      "checksum": "f2350669-a77c-261f-d54e-d3bf715cd835"
    },
    {
      "id": 39,
      "abbreviation": "iOS",
      "category": 4,
      "created_at": 1317686400,
      "name": "iOS",
      "platform_logo": 248,
      "slug": "ios",
      "updated_at": 1391644800,
      "url": "https://www.igdb.com/platforms/ios",
      "versions": [
        43
      ],
      "checksum": "fefe4a2b-7c90-0e89-e811-902ea1cf2b58"
    },
    {
      "id": 41,
      "abbreviation": "WiiU",
      "category": 1,
      "created_at": 1317686400,
      "generation": 8,
      "name": "Wii U",
      "platform_logo": 239,
      "platform_family": 5,
      "slug": "wiiu",
      "updated_at": 1489968000,
      "url": "https://www.igdb.com/platforms/wiiu",
      "versions": [
        73
      ],
      "websites": [
        10
      ],
      "checksum": "13712d1c-3c5d-44d8-2d54-b2adc47f5416"
    },
    {
      "id": 42,
      "abbreviation": "NGage",
      "category": 5,
      "created_at": 1317686400,
      "generation": 6,
      "name": "N-Gage",
      "platform_logo": 258,
      "slug": "ngage",
      "updated_at": 1392076800,
      "url": "https://www.igdb.com/platforms/ngage",
      "versions": [
        49,
        118
      ],
      "checksum": "83080796-a527-e31c-e7ac-7a75a8ff9299"
    },
    {
      "id": 44,
      "abbreviation": "zod",
      "category": 5,
      "created_at": 1317686400,
      "name": "Tapwave Zodiac",
      "platform_logo": 46,
      "slug": "zod",
      "updated_at": 1392076800,
      "url": "https://www.igdb.com/platforms/zod",
      "versions": [
        69
      ],
      "checksum": "7916e6bf-353a-6f27-a8de-a429204d17d9"
    },
    {
      "id": 45,
      "abbreviation": "psn",
      "alternative_name": "PSN",
      "category": 3,
      "created_at": 1318118400,
      "name": "PlayStation Network",
      "platform_logo": 385,
      "platform_family": 1,
      "slug": "psn",
      "updated_at": 1391904000,
      "url": "https://www.igdb.com/platforms/psn",
      "versions": [
        32
      ],
      "checksum": "7cbd1c11-bc49-3efd-fbc1-382a6479e11e"
    },
    {
      "id": 46,
      "abbreviation": "Vita",
      "alternative_name": "PS Vita",
      "category": 5,
      "created_at": 1321660800,
      "generation": 8,
      "name": "PlayStation Vita",
      "platform_logo": 232,
      "platform_family": 1,
      "slug": "psvita",
      "updated_at": 1552780800,
      "url": "https://www.igdb.com/platforms/psvita",
      "versions": [
        60,
        274,
        275
      ],
      "websites": [
        34
      ],
      "checksum": "7185535c-37aa-02e0-1764-b81181c990cb"
    },
    {
      "id": 47,
      "abbreviation": "VC",
      "category": 3,
      "created_at": 1326240000,
      "name": "Virtual Console (Nintendo)",
      "platform_logo": 384,
      "platform_family": 5,
      "slug": "vc",
      "updated_at": 1514678400,
      "url": "https://www.igdb.com/platforms/vc",
      "versions": [
        71
      ],
      "checksum": "856ee409-588c-ad7b-e793-5e49821c88fc"
    },
    {
      "id": 48,
      "abbreviation": "PS4",
      "alternative_name": "PS4",
      "category": 1,
      "created_at": 1326499200,
      "generation": 8,
      "name": "PlayStation 4",
      "platform_logo": 231,
      "platform_family": 1,
      "slug": "ps4--1",
      "summary": "The PlayStation 4 system opens the door to an incredible journey through immersive new gaming worlds and a deeply connected gaming community. PS4 puts gamers first with an astounding launch line-up and over 180 games in development. Play amazing top-tier blockbusters and innovative indie hits on PS4. Developer inspired, gamer focused.",
      "updated_at": 1433116800,
      "url": "https://www.igdb.com/platforms/ps4--1",
      "versions": [
        17,
        178,
        179
      ],
      "websites": [
        11
      ],
      "checksum": "1dfa9b83-5f1d-56ce-01a1-06fcdfbb5bc0"
    },
    {
      "id": 49,
      "abbreviation": "XONE",
      "alternative_name": "Xbone",
      "category": 1,
      "created_at": 1326499200,
      "generation": 8,
      "name": "Xbox One",
      "platform_logo": 329,
      "platform_family": 2,
      "slug": "xboxone",
      "summary": "Welcome to a new generation of games and entertainment. Where games push the boundaries of realism. And television obeys your every command. Where listening to music while playing a game is a snap. And you can jump from TV to movies to music to a game in an instant. Where your experience is custom tailored to you. And the entertainment you love is all in one place. Welcome to the all-in-one, Xbox One",
      "updated_at": 1429920000,
      "url": "https://www.igdb.com/platforms/xboxone",
      "versions": [
        78,
        180,
        185,
        188
      ],
      "websites": [
        12
      ],
      "checksum": "d2560055-3c6f-d1f6-c5a4-483d9a15498a"
    },
    {
      "id": 50,
      "abbreviation": "3DO",
      "category": 1,
      "created_at": 1326758400,
      "generation": 5,
      "name": "3DO Interactive Multiplayer",
      "platform_logo": 282,
      "slug": "3do",
      "updated_at": 1392076800,
      "url": "https://www.igdb.com/platforms/3do",
      "versions": [
        18
      ],
      "checksum": "08a54368-0ef0-5578-3166-cb9642f254cf"
    },
    {
      "id": 51,
      "abbreviation": "fds",
      "alternative_name": "Famicom Disk System",
      "category": 1,
      "created_at": 1339200000,
      "generation": 3,
      "name": "Family Computer Disk System",
      "platform_logo": 299,
      "platform_family": 5,
      "slug": "fds",
      "updated_at": 1540771200,
      "url": "https://www.igdb.com/platforms/fds",
      "versions": [
        38
      ],
      "checksum": "b8e85b13-7900-937b-67e7-f3b7c71cb75c"
    },
    {
      "id": 52,
      "abbreviation": "Arcade",
      "created_at": 1339977600,
      "name": "Arcade",
      "slug": "arcade",
      "updated_at": 1391817600,
      "url": "https://www.igdb.com/platforms/arcade",
      "versions": [
        22
      ],
      "checksum": "60b83ee0-5185-3f09-c6ea-f773857bd11b"
    },
    {
      "id": 53,
      "abbreviation": "MSX2",
      "category": 6,
      "created_at": 1340064000,
      "name": "MSX2",
      "platform_logo": 308,
      "slug": "msx2",
      "updated_at": 1468540800,
      "url": "https://www.igdb.com/platforms/msx2",
      "versions": [
        48
      ],
      "checksum": "d6f6cc07-f15c-1fab-6372-734d874684c8"
    },
    {
      "id": 55,
      "abbreviation": "Mobile",
      "created_at": 1340668800,
      "name": "Mobile",
      "slug": "mobile",
      "updated_at": 1391817600,
      "url": "https://www.igdb.com/platforms/mobile",
      "versions": [
        46
      ],
      "checksum": "e91716cf-1c47-cbdf-f20a-357079f3f4ab"
    },
    {
      "id": 56,
      "abbreviation": "WiiWare",
      "created_at": 1341014400,
      "name": "WiiWare",
      "slug": "wiiware",
      "updated_at": 1391817600,
      "url": "https://www.igdb.com/platforms/wiiware",
      "versions": [
        74
      ],
      "checksum": "5be5f9c4-60e2-53b0-eff4-fd4b7788f18a"
    },
    {
      "id": 57,
      "abbreviation": "WonderSwan",
      "category": 5,
      "created_at": 1342224000,
      "generation": 5,
      "name": "WonderSwan",
      "platform_logo": 263,
      "slug": "wonderswan",
      "updated_at": 1392076800,
      "url": "https://www.igdb.com/platforms/wonderswan",
      "versions": [
        76,
        84,
        117
      ],
      "checksum": "9020bab8-6b12-4070-5463-58e57497c4f9"
    },
    {
      "id": 58,
      "abbreviation": "SFAM",
      "alternative_name": "SFC",
      "category": 1,
      "created_at": 1351209600,
      "generation": 4,
      "name": "Super Famicom",
      "platform_logo": 271,
      "platform_family": 5,
      "slug": "sfam",
      "updated_at": 1399766400,
      "url": "https://www.igdb.com/platforms/sfam",
      "versions": [
        67,
        98
      ],
      "checksum": "98c18388-67d3-e46a-77bc-49287d3da1e9"
    },
    {
      "id": 59,
      "abbreviation": "Atari2600",
      "category": 1,
      "created_at": 1372204800,
      "generation": 2,
      "name": "Atari 2600",
      "platform_logo": 309,
      "slug": "atari2600",
      "updated_at": 1392076800,
      "url": "https://www.igdb.com/platforms/atari2600",
      "versions": [
        24
      ],
      "checksum": "cd1b72f5-0b7c-669f-a50e-2729293c3703"
    },
    {
      "id": 60,
      "abbreviation": "Atari7800",
      "alternative_name": "Atari 7800 ProSystem",
      "category": 1,
      "created_at": 1372204800,
      "generation": 3,
      "name": "Atari 7800",
      "platform_logo": 303,
      "slug": "atari7800",
      "updated_at": 1392076800,
      "url": "https://www.igdb.com/platforms/atari7800",
      "versions": [
        26
      ],
      "checksum": "75e3ee56-5254-ea30-b5be-131e33ff2004"
    },
    {
      "id": 61,
      "abbreviation": "Lynx",
      "category": 5,
      "created_at": 1372204800,
      "generation": 4,
      "name": "Atari Lynx",
      "platform_logo": 290,
      "slug": "lynx",
      "updated_at": 1392076800,
      "url": "https://www.igdb.com/platforms/lynx",
      "versions": [
        29,
        189
      ],
      "checksum": "28a85ec7-a1de-6e5b-9373-e0bbd3bafa13"
    },
    {
      "id": 62,
      "abbreviation": "Jaguar",
      "category": 1,
      "created_at": 1372204800,
      "generation": 5,
      "name": "Atari Jaguar",
      "platform_logo": 286,
      "slug": "jaguar",
      "updated_at": 1392076800,
      "url": "https://www.igdb.com/platforms/jaguar",
      "versions": [
        28
      ],
      "checksum": "70557c0a-1cac-d093-d287-67d8e5a201b0"
    },
    {
      "id": 63,
      "abbreviation": "Atari-ST",
      "category": 6,
      "created_at": 1372291200,
      "name": "Atari ST/STE",
      "platform_logo": 367,
      "slug": "atari-st",
      "updated_at": 1468454400,
      "url": "https://www.igdb.com/platforms/atari-st",
      "versions": [
        30
      ],
      "checksum": "34e7481c-c27b-bef7-d2cf-f2e48ffcb5d7"
    },
    {
      "id": 64,
      "abbreviation": "SMS",
      "alternative_name": "SMS",
      "category": 1,
      "created_at": 1372464000,
      "generation": 3,
      "name": "Sega Master System",
      "platform_logo": 298,
      "platform_family": 3,
      "slug": "sms",
      "updated_at": 1515628800,
      "url": "https://www.igdb.com/platforms/sms",
      "versions": [
        63
      ],
      "checksum": "627a8cab-1069-7514-5d7d-f63dfb09446e"
    },
    {
      "id": 65,
      "abbreviation": "Atari8bit",
      "category": 6,
      "created_at": 1372464000,
      "name": "Atari 8-bit",
      "platform_logo": 373,
      "slug": "atari8bit",
      "updated_at": 1468540800,
      "url": "https://www.igdb.com/platforms/atari8bit",
      "versions": [
        27,
        104
      ],
      "checksum": "37adef88-b15f-3963-a417-687e5e0a6260"
    },
    {
      "id": 66,
      "abbreviation": "Atari5200",
      "alternative_name": "Atari 5200 SuperSystem",
      "category": 1,
      "created_at": 1372464000,
      "generation": 2,
      "name": "Atari 5200",
      "platform_logo": 304,
      "slug": "atari5200",
      "summary": "the mother text",
      "updated_at": 1416700800,
      "url": "https://www.igdb.com/platforms/atari5200",
      "versions": [
        25
      ],
      "checksum": "b5e86dec-98fe-d680-de33-8fef3dae5435"
    },
    {
      "id": 67,
      "abbreviation": "intellivision",
      "category": 1,
      "created_at": 1372464000,
      "generation": 2,
      "name": "Intellivision",
      "platform_logo": 312,
      "slug": "intellivision",
      "updated_at": 1392076800,
      "url": "https://www.igdb.com/platforms/intellivision",
      "versions": [
        42
      ],
      "checksum": "84a4defd-0a29-ca54-0a07-67b61a4ddc98"
    },
    {
      "id": 68,
      "abbreviation": "colecovision",
      "category": 1,
      "created_at": 1372464000,
      "generation": 2,
      "name": "ColecoVision",
      "platform_logo": 311,
      "slug": "colecovision",
      "updated_at": 1392076800,
      "url": "https://www.igdb.com/platforms/colecovision",
      "versions": [
        35
      ],
      "checksum": "85231b96-19bb-f7cb-608b-736c5120b70f"
    },
    {
      "id": 69,
      "abbreviation": "bbcmicro",
      "category": 6,
      "created_at": 1372464000,
      "name": "BBC Microcomputer System",
      "platform_logo": 294,
      "slug": "bbcmicro",
      "updated_at": 1468454400,
      "url": "https://www.igdb.com/platforms/bbcmicro",
      "versions": [
        33
      ],
      "checksum": "eb595073-1be1-9246-0e2e-570cc7c05a87"
    },
    {
      "id": 70,
      "abbreviation": "vectrex",
      "category": 1,
      "created_at": 1372464000,
      "generation": 2,
      "name": "Vectrex",
      "platform_logo": 305,
      "slug": "vectrex",
      "updated_at": 1392076800,
      "url": "https://www.igdb.com/platforms/vectrex",
      "versions": [
        70
      ],
      "checksum": "5140484a-7fd8-2a13-2542-a9207d7c9fd4"
    },
    {
      "id": 71,
      "abbreviation": "vic-20",
      "category": 6,
      "created_at": 1372464000,
      "name": "Commodore VIC-20",
      "platform_logo": 313,
      "slug": "vic-20",
      "updated_at": 1429142400,
      "url": "https://www.igdb.com/platforms/vic-20",
      "versions": [
        37
      ],
      "checksum": "3e43a9f4-b55b-69e8-7222-64487c29bd47"
    },
    {
      "id": 72,
      "abbreviation": "Ouya",
      "category": 1,
      "created_at": 1373328000,
      "generation": 8,
      "name": "Ouya",
      "platform_logo": 236,
      "slug": "ouya",
      "summary": "The Ouya (/ˈuːjə/ oo-yə), stylized OUYA, is a microconsole running its own version of the Android operating system, developed by Ouya Inc. Julie Uhrman founded the project in 2012. She brought in designer Yves Béhar to collaborate on the design of the project, and Muffi Ghadiali as product manager to put together the engineering team. Development was funded via Kickstarter, raising $8.5 million and becoming the website's second-highest-earning project in its history.\n\nUnits started to ship to Kickstarter backers on March 28, 2013. The console was released to the general public on June 25, 2013, and features an exclusive Ouya store for applications and games designed specifically for the Ouya platform, of which the majority are casual games targeted at or used by a mass audience of casual gamers. Out of the box, Ouya supports media apps such as TwitchTV and XBMC media player. It runs a modified version of Android 4.1 Jelly Bean, and is open to rooting without voiding the warranty (developer models ordered during the Kickstarter campaign for $699 or $1,337 come pre-rooted). The console's hardware design allows it to be easily opened up, requiring only a standard screwdriver for easy modding and possible hardware addons.\n\nAll systems can be used as development kits, allowing any Ouya owner to also be a developer, without the need for licensing fees. All games are required to have some kind of free-to-play aspect, whether that be completely free, has a free trial, or has purchasable upgrades, levels, or other in-game items. The Ouya is classified as part of the eighth generation of video game consoles and as such is a rival competing against the PlayStation 4, Xbox One, and Wii U.",
      "updated_at": 1438905600,
      "url": "https://www.igdb.com/platforms/ouya",
      "versions": [
        55
      ],
      "websites": [
        13
      ],
      "checksum": "ec1994ca-3247-830f-8452-b664a411ade3"
    },
    {
      "id": 73,
      "abbreviation": "blackberry",
      "category": 4,
      "created_at": 1384387200,
      "name": "BlackBerry OS",
      "platform_logo": 40,
      "slug": "blackberry",
      "updated_at": 1392076800,
      "url": "https://www.igdb.com/platforms/blackberry",
      "versions": [
        34
      ],
      "checksum": "6fdda0e4-4884-2e33-fd1a-de3521c9b804"
    },
    {
      "id": 74,
      "abbreviation": "Win Phone",
      "alternative_name": "WP",
      "category": 4,
      "created_at": 1384387200,
      "name": "Windows Phone",
      "platform_logo": 363,
      "slug": "winphone",
      "updated_at": 1572739200,
      "url": "https://www.igdb.com/platforms/winphone",
      "versions": [
        224,
        225,
        226,
        227
      ],
      "checksum": "007cbe18-41ed-e3d5-8292-4e9ad3b684ef"
    },
    {
      "id": 75,
      "abbreviation": "Apple][",
      "alternative_name": "apple ][",
      "category": 6,
      "created_at": 1387756800,
      "name": "Apple II",
      "platform_logo": 315,
      "slug": "appleii",
      "summary": "The Apple II is an 8-bit home computer, one of the first highly successful mass-produced microcomputer products, designed primarily by Steve Wozniak, manufactured by Apple Computer (now Apple Inc.) and introduced in 1977. It is the first model in a series of computers which were produced until Apple IIe production ceased in November 1993.",
      "updated_at": 1468454400,
      "url": "https://www.igdb.com/platforms/appleii",
      "versions": [
        21
      ],
      "checksum": "c54c78dd-0a6b-0c3e-9948-931ac9dd0845"
    },
    {
      "id": 77,
      "abbreviation": "x1",
      "category": 6,
      "created_at": 1390867200,
      "name": "Sharp X1",
      "platform_logo": 297,
      "slug": "x1",
      "updated_at": 1468454400,
      "url": "https://www.igdb.com/platforms/x1",
      "versions": [
        66
      ],
      "checksum": "c3265f1f-9c3e-fc18-b8e9-cf288b499e95"
    },
    {
      "id": 78,
      "abbreviation": "segacd",
      "alternative_name": "Mega CD",
      "category": 1,
      "created_at": 1391904000,
      "generation": 4,
      "name": "Sega CD",
      "platform_logo": 284,
      "platform_family": 3,
      "slug": "segacd",
      "updated_at": 1391904000,
      "url": "https://www.igdb.com/platforms/segacd",
      "versions": [
        80
      ],
      "checksum": "68c11f76-6ea3-f708-1c6e-f5a390d37c54"
    },
    {
      "id": 79,
      "abbreviation": "neogeomvs",
      "alternative_name": "Neo Geo Multi Video System",
      "category": 2,
      "created_at": 1392076800,
      "name": "Neo Geo MVS",
      "platform_logo": 70,
      "slug": "neogeomvs",
      "updated_at": 1525996800,
      "url": "https://www.igdb.com/platforms/neogeomvs",
      "versions": [
        81
      ],
      "checksum": "8e1fb3fd-a38a-28cc-f8a4-3404ddec3dec"
    },
    {
      "id": 80,
      "abbreviation": "neogeoaes",
      "alternative_name": "AES",
      "category": 1,
      "created_at": 1392076800,
      "generation": 4,
      "name": "Neo Geo AES",
      "platform_logo": 69,
      "slug": "neogeoaes",
      "updated_at": 1399680000,
      "url": "https://www.igdb.com/platforms/neogeoaes",
      "versions": [
        82
      ],
      "checksum": "496c2bad-bcc8-ebda-a3c9-2756cffd7f1d"
    },
    {
      "id": 82,
      "abbreviation": "browser",
      "alternative_name": "Internet",
      "category": 3,
      "created_at": 1395273600,
      "name": "Web browser",
      "platform_logo": 381,
      "slug": "browser",
      "updated_at": 1553299200,
      "url": "https://www.igdb.com/platforms/browser",
      "versions": [
        86
      ],
      "checksum": "42d5444b-505c-d210-5992-c06b7010651a"
    },
    {
      "id": 84,
      "abbreviation": "sg1000",
      "alternative_name": "Sega Game 1000",
      "category": 1,
      "created_at": 1397433600,
      "generation": 3,
      "name": "SG-1000",
      "platform_logo": 223,
      "platform_family": 3,
      "slug": "sg1000",
      "updated_at": 1397865600,
      "url": "https://www.igdb.com/platforms/sg1000",
      "versions": [
        91,
        92
      ],
      "checksum": "74499c7d-f3b4-21f3-3d3e-5a3c836bb45d"
    },
    {
      "id": 85,
      "abbreviation": "donner30",
      "category": 6,
      "created_at": 1399680000,
      "name": "Donner Model 30",
      "slug": "donner30",
      "updated_at": 1468540800,
      "url": "https://www.igdb.com/platforms/donner30",
      "versions": [
        93
      ],
      "checksum": "c11154b6-9734-c8fa-a9d3-9b56ffb1e4d9"
    },
    {
      "id": 86,
      "abbreviation": "turbografx16",
      "category": 1,
      "created_at": 1400803200,
      "generation": 4,
      "name": "TurboGrafx-16/PC Engine",
      "platform_logo": 296,
      "slug": "turbografx16--1",
      "updated_at": 1441152000,
      "url": "https://www.igdb.com/platforms/turbografx16--1",
      "versions": [
        99
      ],
      "checksum": "a865ae03-6878-7704-642b-b2fa9e99389b"
    },
    {
      "id": 87,
      "abbreviation": "virtualboy",
      "category": 1,
      "created_at": 1400803200,
      "generation": 5,
      "name": "Virtual Boy",
      "platform_logo": 280,
      "platform_family": 5,
      "slug": "virtualboy",
      "updated_at": 1515542400,
      "url": "https://www.igdb.com/platforms/virtualboy",
      "versions": [
        100
      ],
      "checksum": "b962021c-d370-c3b0-32cd-7320a3628d46"
    },
    {
      "id": 88,
      "abbreviation": "odyssey",
      "alternative_name": "Magnavox Odyssey; Odysee; Odisea; Odissea",
      "category": 1,
      "created_at": 1407542400,
      "generation": 1,
      "name": "Odyssey",
      "slug": "odyssey--1",
      "updated_at": 1591228800,
      "url": "https://www.igdb.com/platforms/odyssey--1",
      "versions": [
        101,
        167,
        168,
        169,
        170,
        171
      ],
      "websites": [
        211
      ],
      "checksum": "26859452-7553-fa16-0833-3a62209ac679"
    },
    {
      "id": 89,
      "abbreviation": "microvision",
      "category": 5,
      "created_at": 1407542400,
      "generation": 2,
      "name": "Microvision",
      "platform_logo": 314,
      "slug": "microvision--1",
      "updated_at": 1407542400,
      "url": "https://www.igdb.com/platforms/microvision--1",
      "versions": [
        102
      ],
      "checksum": "0d3ccf60-cdd5-5609-4f6b-fc6522e86a18"
    },
    {
      "id": 90,
      "abbreviation": "cpet",
      "category": 6,
      "created_at": 1407542400,
      "name": "Commodore PET",
      "platform_logo": 543,
      "slug": "cpet",
      "updated_at": 1591228800,
      "url": "https://www.igdb.com/platforms/cpet",
      "versions": [
        103
      ],
      "websites": [
        216
      ],
      "checksum": "2fa2cd86-55c7-cfa7-9569-e8f0422c8d0b"
    },
    {
      "id": 91,
      "abbreviation": "astrocade",
      "created_at": 1411603200,
      "name": "Bally Astrocade",
      "slug": "astrocade",
      "updated_at": 1411603200,
      "url": "https://www.igdb.com/platforms/astrocade",
      "versions": [
        105
      ],
      "checksum": "5880bf88-b946-090b-f88f-112fe310923d"
    },
    {
      "id": 93,
      "abbreviation": "C16",
      "category": 6,
      "created_at": 1414195200,
      "name": "Commodore 16",
      "platform_logo": 544,
      "slug": "c16",
      "updated_at": 1591228800,
      "url": "https://www.igdb.com/platforms/c16",
      "versions": [
        107
      ],
      "websites": [
        213
      ],
      "checksum": "20b27390-3144-d56a-1e32-dbe983708599"
    },
    {
      "id": 94,
      "abbreviation": "C+4",
      "category": 6,
      "created_at": 1414195200,
      "name": "Commodore Plus/4",
      "platform_logo": 310,
      "slug": "c-plus-4",
      "updated_at": 1468454400,
      "url": "https://www.igdb.com/platforms/c-plus-4",
      "versions": [
        108
      ],
      "checksum": "ea138789-6bbe-bcca-dff5-7e20e762f65a"
    },
    {
      "id": 95,
      "abbreviation": "pdp1",
      "alternative_name": "Programmed Data Processor-1",
      "category": 6,
      "created_at": 1418515200,
      "name": "PDP-1",
      "slug": "pdp1",
      "updated_at": 1591228800,
      "url": "https://www.igdb.com/platforms/pdp1",
      "versions": [
        115
      ],
      "websites": [
        212
      ],
      "checksum": "f5fdcfb5-aaaa-1af3-98d1-ffb5cb063a18"
    },
    {
      "id": 96,
      "abbreviation": "pdp10",
      "category": 6,
      "created_at": 1418515200,
      "name": "PDP-10",
      "slug": "pdp10",
      "updated_at": 1418515200,
      "url": "https://www.igdb.com/platforms/pdp10",
      "versions": [
        116
      ],
      "checksum": "aadf131a-55fe-8481-d377-8c6eefe18415"
    },
    {
      "id": 97,
      "abbreviation": "pdp-8",
      "category": 6,
      "created_at": 1424390400,
      "name": "PDP-8",
      "slug": "pdp-8--1",
      "updated_at": 1424390400,
      "url": "https://www.igdb.com/platforms/pdp-8--1",
      "versions": [
        119
      ],
      "checksum": "eab6eb03-90f9-c8ea-fb65-a98533fb31b6"
    },
    {
      "id": 98,
      "abbreviation": "gt40",
      "created_at": 1424390400,
      "name": "DEC GT40",
      "slug": "gt40",
      "updated_at": 1424390400,
      "url": "https://www.igdb.com/platforms/gt40",
      "versions": [
        120
      ],
      "checksum": "479fe519-86c9-0bd1-0c72-311b125e7886"
    },
    {
      "id": 99,
      "abbreviation": "famicom",
      "alternative_name": "Famicom",
      "category": 1,
      "created_at": 1428796800,
      "generation": 3,
      "name": "Family Computer (FAMICOM)",
      "platform_logo": 277,
      "platform_family": 5,
      "slug": "famicom",
      "updated_at": 1502668800,
      "url": "https://www.igdb.com/platforms/famicom",
      "versions": [
        123
      ],
      "checksum": "615074d5-3aee-23d6-fc3c-6059bdc62712"
    },
    {
      "id": 100,
      "abbreviation": "analogueelectronics",
      "created_at": 1437868800,
      "name": "Analogue electronics",
      "slug": "analogueelectronics",
      "updated_at": 1437868800,
      "url": "https://www.igdb.com/platforms/analogueelectronics",
      "versions": [
        126
      ],
      "checksum": "01951a13-ac9d-9f80-2b02-f9a818d83326"
    },
    {
      "id": 101,
      "abbreviation": "nimrod",
      "category": 6,
      "created_at": 1437868800,
      "name": "Ferranti Nimrod Computer",
      "platform_logo": 386,
      "slug": "nimrod",
      "updated_at": 1437868800,
      "url": "https://www.igdb.com/platforms/nimrod",
      "versions": [
        127
      ],
      "checksum": "9210f8a2-3f26-bea5-592a-dc573e2e8731"
    },
    {
      "id": 102,
      "abbreviation": "edsac",
      "alternative_name": "Electronic Delay Storage Automatic Calculator",
      "category": 6,
      "created_at": 1437868800,
      "name": "EDSAC",
      "platform_logo": 389,
      "slug": "edsac--1",
      "updated_at": 1437868800,
      "url": "https://www.igdb.com/platforms/edsac--1",
      "versions": [
        128
      ],
      "checksum": "60d0cce1-2d5c-720a-da36-96be6f562d2d"
    },
    {
      "id": 103,
      "abbreviation": "pdp-7",
      "created_at": 1437868800,
      "name": "PDP-7",
      "slug": "pdp-7--1",
      "updated_at": 1437868800,
      "url": "https://www.igdb.com/platforms/pdp-7--1",
      "versions": [
        129
      ],
      "checksum": "e828d5a4-68ad-b75c-dc50-f8ea7df31036"
    },
    {
      "id": 104,
      "abbreviation": "hp2100",
      "category": 6,
      "created_at": 1437955200,
      "name": "HP 2100",
      "slug": "hp2100",
      "updated_at": 1437955200,
      "url": "https://www.igdb.com/platforms/hp2100",
      "versions": [
        130
      ],
      "checksum": "17f8a2f3-c014-058a-2827-375e11bcb851"
    },
    {
      "id": 105,
      "abbreviation": "hp3000",
      "category": 6,
      "created_at": 1437955200,
      "name": "HP 3000",
      "platform_logo": 369,
      "slug": "hp3000",
      "updated_at": 1437955200,
      "url": "https://www.igdb.com/platforms/hp3000",
      "versions": [
        131
      ],
      "checksum": "d4ac96e8-e4ba-b0dc-22ac-22b73d19ba83"
    },
    {
      "id": 106,
      "abbreviation": "sdssigma7",
      "category": 6,
      "created_at": 1437955200,
      "name": "SDS Sigma 7",
      "slug": "sdssigma7",
      "updated_at": 1437955200,
      "url": "https://www.igdb.com/platforms/sdssigma7",
      "versions": [
        132
      ],
      "checksum": "2b8bbf36-b6ff-0242-80f4-7d1c6a0423e0"
    },
    {
      "id": 107,
      "abbreviation": "call-a-computer",
      "category": 6,
      "created_at": 1437955200,
      "name": "Call-A-Computer time-shared mainframe computer system",
      "slug": "call-a-computer",
      "updated_at": 1437955200,
      "url": "https://www.igdb.com/platforms/call-a-computer",
      "versions": [
        133
      ],
      "checksum": "47311af8-783b-05f5-0d26-0848d099a399"
    },
    {
      "id": 108,
      "abbreviation": "pdp11",
      "category": 6,
      "created_at": 1438041600,
      "name": "PDP-11",
      "slug": "pdp11",
      "updated_at": 1438041600,
      "url": "https://www.igdb.com/platforms/pdp11",
      "versions": [
        134
      ],
      "checksum": "ad20351c-ef97-5b68-3166-ebe599a36a0a"
    },
    {
      "id": 109,
      "abbreviation": "cdccyber70",
      "category": 6,
      "created_at": 1438041600,
      "name": "CDC Cyber 70",
      "platform_logo": 374,
      "slug": "cdccyber70",
      "updated_at": 1438041600,
      "url": "https://www.igdb.com/platforms/cdccyber70",
      "versions": [
        135
      ],
      "checksum": "30a78a03-7d24-5580-2167-22682ab2208c"
    },
    {
      "id": 110,
      "abbreviation": "plato",
      "alternative_name": "Programmed Logic for Automatic Teaching Operations",
      "category": 6,
      "created_at": 1438473600,
      "name": "PLATO",
      "platform_logo": 375,
      "slug": "plato--1",
      "updated_at": 1468454400,
      "url": "https://www.igdb.com/platforms/plato--1",
      "versions": [
        136
      ],
      "checksum": "46476609-7e40-6759-25f6-daecc85fb708"
    },
    {
      "id": 111,
      "abbreviation": "imlac-pds1",
      "created_at": 1438473600,
      "name": "Imlac PDS-1",
      "slug": "imlac-pds1",
      "updated_at": 1438473600,
      "url": "https://www.igdb.com/platforms/imlac-pds1",
      "versions": [
        137
      ],
      "checksum": "f6058e7f-0a66-beda-fe89-0c4f46a7864b"
    },
    {
      "id": 112,
      "abbreviation": "microcomputer",
      "created_at": 1438732800,
      "name": "Microcomputer",
      "slug": "microcomputer--1",
      "updated_at": 1438732800,
      "url": "https://www.igdb.com/platforms/microcomputer--1",
      "versions": [
        138
      ],
      "checksum": "49f7f77d-42a9-0cae-368f-6f9475275e1f"
    },
    {
      "id": 113,
      "category": 3,
      "created_at": 1439337600,
      "name": "OnLive Game System",
      "platform_logo": 383,
      "slug": "onlive-game-system",
      "updated_at": 1439683200,
      "url": "https://www.igdb.com/platforms/onlive-game-system",
      "versions": [
        140
      ],
      "websites": [
        15
      ],
      "checksum": "1fc33df6-3737-8f0c-416b-fa128bd6e8b3"
    },
    {
      "id": 114,
      "category": 1,
      "created_at": 1441238400,
      "generation": 5,
      "name": "Amiga CD32",
      "platform_logo": 283,
      "slug": "amiga-cd32",
      "updated_at": 1589587200,
      "url": "https://www.igdb.com/platforms/amiga-cd32",
      "versions": [
        152
      ],
      "checksum": "bd4ad4b9-f009-41cf-12e3-a10ce8ef69eb"
    },
    {
      "id": 115,
      "category": 6,
      "created_at": 1441238400,
      "name": "Apple IIGS",
      "platform_logo": 295,
      "slug": "apple-iigs",
      "updated_at": 1441238400,
      "url": "https://www.igdb.com/platforms/apple-iigs",
      "versions": [
        153
      ],
      "checksum": "0b68ee2c-4b62-f6a4-8e27-8c1b55047bbe"
    },
    {
      "id": 116,
      "category": 6,
      "created_at": 1441238400,
      "name": "Acorn Archimedes",
      "platform_logo": 388,
      "slug": "acorn-archimedes",
      "updated_at": 1591228800,
      "url": "https://www.igdb.com/platforms/acorn-archimedes",
      "versions": [
        154
      ],
      "websites": [
        214
      ],
      "checksum": "1991c292-b1d6-8639-c74f-0b81cccc8845"
    },
    {
      "id": 117,
      "category": 1,
      "created_at": 1441238400,
      "name": "Philips CD-i",
      "platform_logo": 288,
      "slug": "philips-cd-i",
      "updated_at": 1441238400,
      "url": "https://www.igdb.com/platforms/philips-cd-i",
      "versions": [
        155
      ],
      "checksum": "bca1c0c7-303a-5342-2e3c-2c121b40b24a"
    },
    {
      "id": 118,
      "category": 6,
      "created_at": 1441238400,
      "name": "FM Towns",
      "platform_logo": 365,
      "slug": "fm-towns",
      "updated_at": 1441238400,
      "url": "https://www.igdb.com/platforms/fm-towns",
      "versions": [
        156
      ],
      "checksum": "d52c2758-3294-d5e8-960c-e3efffbd99d1"
    },
    {
      "id": 119,
      "category": 5,
      "created_at": 1441238400,
      "generation": 5,
      "name": "Neo Geo Pocket",
      "platform_logo": 390,
      "slug": "neo-geo-pocket",
      "updated_at": 1559260800,
      "url": "https://www.igdb.com/platforms/neo-geo-pocket",
      "versions": [
        157
      ],
      "checksum": "6e94bca9-34ed-5b21-ae12-cdac79d5333b"
    },
    {
      "id": 120,
      "category": 5,
      "created_at": 1441238400,
      "generation": 5,
      "name": "Neo Geo Pocket Color",
      "platform_logo": 269,
      "slug": "neo-geo-pocket-color",
      "updated_at": 1559260800,
      "url": "https://www.igdb.com/platforms/neo-geo-pocket-color",
      "versions": [
        158
      ],
      "checksum": "959ffbb9-21df-b836-9df4-259fcd34e244"
    },
    {
      "id": 121,
      "category": 6,
      "created_at": 1441238400,
      "name": "Sharp X68000",
      "platform_logo": 306,
      "slug": "sharp-x68000",
      "updated_at": 1441238400,
      "url": "https://www.igdb.com/platforms/sharp-x68000",
      "versions": [
        159
      ],
      "checksum": "3a2f2fc9-7b6c-39f1-1a45-cca745eb8c09"
    },
    {
      "id": 122,
      "category": 1,
      "created_at": 1441411200,
      "name": "Nuon",
      "platform_logo": 268,
      "slug": "nuon",
      "updated_at": 1588809600,
      "url": "https://www.igdb.com/platforms/nuon",
      "versions": [
        160
      ],
      "websites": [
        172
      ],
      "checksum": "bd7c0b27-2608-a3e7-8e11-23f6deebc71d"
    },
    {
      "id": 123,
      "category": 5,
      "created_at": 1441411200,
      "generation": 5,
      "name": "WonderSwan Color",
      "platform_logo": 261,
      "slug": "wonderswan-color",
      "updated_at": 1559260800,
      "url": "https://www.igdb.com/platforms/wonderswan-color",
      "versions": [
        161
      ],
      "checksum": "02c7af50-640e-3d96-6158-2ac84a8d397e"
    },
    {
      "id": 124,
      "category": 5,
      "created_at": 1441411200,
      "name": "SwanCrystal",
      "platform_logo": 319,
      "slug": "swancrystal",
      "updated_at": 1441411200,
      "url": "https://www.igdb.com/platforms/swancrystal",
      "versions": [
        162
      ],
      "checksum": "9d836c39-3419-65f8-02ff-9fe73e6b6716"
    },
    {
      "id": 125,
      "category": 6,
      "created_at": 1445126400,
      "name": "PC-8801",
      "platform_logo": 542,
      "slug": "pc-8801",
      "updated_at": 1591228800,
      "url": "https://www.igdb.com/platforms/pc-8801",
      "versions": [
        163
      ],
      "websites": [
        217
      ],
      "checksum": "797fd579-99d7-5f97-3a07-07dcda8cf60e"
    },
    {
      "id": 126,
      "category": 6,
      "created_at": 1449705600,
      "name": "TRS-80",
      "platform_logo": 372,
      "slug": "trs-80",
      "updated_at": 1449705600,
      "url": "https://www.igdb.com/platforms/trs-80",
      "versions": [
        164
      ],
      "checksum": "fb10fc8e-0aeb-b55f-43a1-01b02aab3981"
    },
    {
      "id": 127,
      "category": 1,
      "created_at": 1457395200,
      "generation": 2,
      "name": "Fairchild Channel F",
      "platform_logo": 316,
      "slug": "fairchild-channel-f",
      "updated_at": 1506384000,
      "url": "https://www.igdb.com/platforms/fairchild-channel-f",
      "versions": [
        165,
        212
      ],
      "checksum": "cba12692-9a22-154e-879f-1e9ca57e8b4b"
    },
    {
      "id": 128,
      "abbreviation": "supergrafx",
      "category": 6,
      "created_at": 1457395200,
      "name": "PC Engine SuperGrafx",
      "platform_logo": 364,
      "slug": "supergrafx",
      "updated_at": 1457395200,
      "url": "https://www.igdb.com/platforms/supergrafx",
      "versions": [
        166
      ],
      "checksum": "bd228661-6787-7a75-a143-bba16c962d8b"
    },
    {
      "id": 129,
      "abbreviation": "ti-99",
      "alternative_name": "Texas Instruments TI-99/4A",
      "category": 6,
      "created_at": 1459296000,
      "name": "Texas Instruments TI-99",
      "platform_logo": 540,
      "slug": "ti-99",
      "updated_at": 1591228800,
      "url": "https://www.igdb.com/platforms/ti-99",
      "versions": [
        172,
        427
      ],
      "websites": [
        218
      ],
      "checksum": "b941f047-24e3-0297-b162-ea548b94b6f9"
    },
    {
      "id": 130,
      "abbreviation": "Switch",
      "alternative_name": "NX",
      "category": 1,
      "created_at": 1465948800,
      "generation": 8,
      "name": "Nintendo Switch",
      "platform_logo": 534,
      "platform_family": 5,
      "slug": "switch",
      "updated_at": 1550534400,
      "url": "https://www.igdb.com/platforms/switch",
      "versions": [
        173,
        282
      ],
      "websites": [
        16
      ],
      "checksum": "d28b6757-c24a-73c6-50e7-f8e6487c78af"
    },
    {
      "id": 131,
      "alternative_name": "Nintendo Super Disc",
      "category": 1,
      "created_at": 1468454400,
      "generation": 4,
      "name": "Nintendo PlayStation",
      "platform_logo": 529,
      "platform_family": 5,
      "slug": "nintendo-playstation",
      "updated_at": 1591142400,
      "url": "https://www.igdb.com/platforms/nintendo-playstation",
      "versions": [
        174
      ],
      "websites": [
        210
      ],
      "checksum": "f87b4f47-b252-5243-5b0c-604e45dbb9cf"
    },
    {
      "id": 132,
      "category": 3,
      "created_at": 1469664000,
      "name": "Amazon Fire TV",
      "platform_logo": 325,
      "slug": "amazon-fire-tv",
      "updated_at": 1469664000,
      "url": "https://www.igdb.com/platforms/amazon-fire-tv",
      "versions": [
        176
      ],
      "checksum": "db7a1f28-dc0d-68b1-c31e-94f43b9643b1"
    },
    {
      "id": 133,
      "alternative_name": "Magnavox Odyssey²",
      "category": 6,
      "created_at": 1477267200,
      "name": "Philips Videopac G7000",
      "platform_logo": 112,
      "slug": "philips-videopac-g7000",
      "updated_at": 1477267200,
      "url": "https://www.igdb.com/platforms/philips-videopac-g7000",
      "versions": [
        183
      ],
      "checksum": "854e7971-1e3d-0534-ad7a-03ca8ca2cd69"
    },
    {
      "id": 134,
      "category": 6,
      "created_at": 1479427200,
      "name": "Acorn Electron",
      "platform_logo": 301,
      "slug": "acorn-electron",
      "updated_at": 1479427200,
      "url": "https://www.igdb.com/platforms/acorn-electron",
      "versions": [
        184
      ],
      "checksum": "ec7fd022-fcf9-8bf8-a73b-09080d9d3515"
    },
    {
      "id": 135,
      "category": 2,
      "created_at": 1492041600,
      "name": "Hyper Neo Geo 64",
      "platform_logo": 117,
      "slug": "hyper-neo-geo-64",
      "updated_at": 1492041600,
      "url": "https://www.igdb.com/platforms/hyper-neo-geo-64",
      "versions": [
        186
      ],
      "checksum": "fedca8ca-3a51-84db-1d6a-36a2536d3fe0"
    },
    {
      "id": 136,
      "category": 1,
      "created_at": 1492041600,
      "generation": 4,
      "name": "Neo Geo CD",
      "platform_logo": 281,
      "slug": "neo-geo-cd",
      "updated_at": 1492041600,
      "url": "https://www.igdb.com/platforms/neo-geo-cd",
      "versions": [
        187
      ],
      "checksum": "3bd8bf69-4802-e911-1902-086e159e2ea4"
    },
    {
      "id": 137,
      "alternative_name": "n3DS",
      "category": 5,
      "created_at": 1504569600,
      "generation": 8,
      "name": "New Nintendo 3DS",
      "platform_logo": 235,
      "platform_family": 5,
      "slug": "new-nintendo-3ds",
      "updated_at": 1591574400,
      "url": "https://www.igdb.com/platforms/new-nintendo-3ds",
      "versions": [
        195
      ],
      "websites": [
        17
      ],
      "checksum": "df7e06e4-3fce-4055-b28c-30703fba98bb"
    },
    {
      "id": 138,
      "category": 1,
      "created_at": 1505174400,
      "generation": 2,
      "name": "VC 4000",
      "platform_logo": 134,
      "slug": "vc-4000",
      "updated_at": 1505174400,
      "url": "https://www.igdb.com/platforms/vc-4000",
      "versions": [
        196
      ],
      "websites": [
        18
      ],
      "checksum": "cf5360d1-3a2e-8ee0-08bc-826a27bfe060"
    },
    {
      "id": 139,
      "category": 1,
      "created_at": 1505174400,
      "generation": 2,
      "name": "1292 Advanced Programmable Video System",
      "platform_logo": 136,
      "slug": "1292-advanced-programmable-video-system",
      "updated_at": 1505174400,
      "url": "https://www.igdb.com/platforms/1292-advanced-programmable-video-system",
      "versions": [
        197,
        213
      ],
      "checksum": "8433ae84-dbc7-122b-ec12-f1858bad1c5f"
    },
    {
      "id": 140,
      "category": 6,
      "created_at": 1505520000,
      "name": "AY-3-8500",
      "platform_logo": 128,
      "slug": "ay-3-8500",
      "updated_at": 1510012800,
      "url": "https://www.igdb.com/platforms/ay-3-8500",
      "versions": [
        198,
        201,
        202,
        203,
        204
      ],
      "checksum": "c28c6efe-d331-48a3-6980-d106f530dd5c"
    },
    {
      "id": 141,
      "category": 6,
      "created_at": 1505520000,
      "name": "AY-3-8610",
      "slug": "ay-3-8610",
      "updated_at": 1510012800,
      "url": "https://www.igdb.com/platforms/ay-3-8610",
      "versions": [
        199
      ],
      "checksum": "d0a3d734-27aa-db05-4436-dc38739f7f9a"
    },
    {
      "id": 142,
      "category": 1,
      "created_at": 1505520000,
      "generation": 1,
      "name": "PC-50X Family",
      "platform_logo": 132,
      "slug": "pc-50x-family",
      "updated_at": 1505520000,
      "url": "https://www.igdb.com/platforms/pc-50x-family",
      "versions": [
        200,
        205
      ],
      "checksum": "ea364197-612c-e075-99f9-b95970ed4c58"
    },
    {
      "id": 143,
      "category": 1,
      "created_at": 1505779200,
      "name": "AY-3-8760",
      "slug": "ay-3-8760",
      "updated_at": 1505779200,
      "url": "https://www.igdb.com/platforms/ay-3-8760",
      "versions": [
        206
      ],
      "checksum": "69436aa6-6d7d-bb63-d775-444b6893301b"
    },
    {
      "id": 144,
      "category": 1,
      "created_at": 1505779200,
      "name": "AY-3-8710",
      "slug": "ay-3-8710",
      "updated_at": 1505779200,
      "url": "https://www.igdb.com/platforms/ay-3-8710",
      "versions": [
        207
      ],
      "checksum": "5438ffcf-1f05-47e9-e082-15bafd1dc92f"
    },
    {
      "id": 145,
      "category": 1,
      "created_at": 1505779200,
      "name": "AY-3-8603",
      "slug": "ay-3-8603",
      "updated_at": 1505779200,
      "url": "https://www.igdb.com/platforms/ay-3-8603",
      "versions": [
        208
      ],
      "checksum": "0124f86d-b875-8d9e-8c78-95c7fc47de08"
    },
    {
      "id": 146,
      "category": 1,
      "created_at": 1505779200,
      "name": "AY-3-8605",
      "slug": "ay-3-8605",
      "updated_at": 1505779200,
      "url": "https://www.igdb.com/platforms/ay-3-8605",
      "versions": [
        209
      ],
      "checksum": "3c9b3a84-dc54-3c94-0ee0-5cb97809d2a5"
    },
    {
      "id": 147,
      "category": 1,
      "created_at": 1505779200,
      "name": "AY-3-8606",
      "slug": "ay-3-8606",
      "updated_at": 1505779200,
      "url": "https://www.igdb.com/platforms/ay-3-8606",
      "versions": [
        210
      ],
      "checksum": "49428df3-7b02-316e-2390-95a230795394"
    },
    {
      "id": 148,
      "category": 1,
      "created_at": 1505779200,
      "name": "AY-3-8607",
      "slug": "ay-3-8607",
      "updated_at": 1505779200,
      "url": "https://www.igdb.com/platforms/ay-3-8607",
      "versions": [
        211
      ],
      "checksum": "b148a659-dc31-1245-8623-321ce9008d75"
    },
    {
      "id": 149,
      "category": 6,
      "created_at": 1508976000,
      "name": "PC-98",
      "platform_logo": 366,
      "slug": "pc-98",
      "updated_at": 1508976000,
      "url": "https://www.igdb.com/platforms/pc-98",
      "versions": [
        214
      ],
      "checksum": "da17ec85-249b-d4ca-f876-8376319ba319"
    },
    {
      "id": 150,
      "category": 6,
      "created_at": 1508976000,
      "name": "Turbografx-16/PC Engine CD",
      "platform_logo": 291,
      "slug": "turbografx-16-slash-pc-engine-cd",
      "updated_at": 1508976000,
      "url": "https://www.igdb.com/platforms/turbografx-16-slash-pc-engine-cd",
      "versions": [
        215
      ],
      "checksum": "109a66c1-a8f6-22d4-dcd8-993d3837bf8e"
    },
    {
      "id": 151,
      "alternative_name": "Tandy Color Computer",
      "category": 6,
      "created_at": 1510012800,
      "name": "TRS-80 Color Computer",
      "platform_logo": 541,
      "slug": "trs-80-color-computer",
      "updated_at": 1591228800,
      "url": "https://www.igdb.com/platforms/trs-80-color-computer",
      "versions": [
        216
      ],
      "websites": [
        19
      ],
      "checksum": "9bd8e911-be9c-a1ad-d8a9-fbf2888cf9ff"
    },
    {
      "id": 152,
      "alternative_name": "Fujitsu Micro 7",
      "category": 6,
      "created_at": 1510012800,
      "name": "FM-7",
      "platform_logo": 538,
      "slug": "fm-7",
      "updated_at": 1591228800,
      "url": "https://www.igdb.com/platforms/fm-7",
      "versions": [
        217
      ],
      "websites": [
        20
      ],
      "checksum": "63b1a9d7-a511-8002-0575-4b57876ddb42"
    },
    {
      "id": 153,
      "category": 6,
      "created_at": 1510012800,
      "name": "Dragon 32/64",
      "platform_logo": 302,
      "slug": "dragon-32-slash-64",
      "updated_at": 1510012800,
      "url": "https://www.igdb.com/platforms/dragon-32-slash-64",
      "versions": [
        218
      ],
      "websites": [
        21
      ],
      "checksum": "d11981c1-fbb1-100c-d63f-92021aa7fb0f"
    },
    {
      "id": 154,
      "category": 6,
      "created_at": 1510012800,
      "name": "Amstrad PCW",
      "platform_logo": 547,
      "slug": "amstrad-pcw",
      "updated_at": 1510012800,
      "url": "https://www.igdb.com/platforms/amstrad-pcw",
      "versions": [
        219
      ],
      "websites": [
        22
      ],
      "checksum": "af7ef1c3-c78b-1349-e129-0eafe14ba16f"
    },
    {
      "id": 155,
      "category": 6,
      "created_at": 1510012800,
      "name": "Tatung Einstein",
      "platform_logo": 368,
      "slug": "tatung-einstein",
      "updated_at": 1510012800,
      "url": "https://www.igdb.com/platforms/tatung-einstein",
      "versions": [
        220
      ],
      "websites": [
        23
      ],
      "checksum": "e7061776-b061-c4e7-b04e-cac5d68c38d1"
    },
    {
      "id": 156,
      "category": 6,
      "created_at": 1510012800,
      "name": "Thomson MO5",
      "platform_logo": 537,
      "slug": "thomson-mo5",
      "updated_at": 1510012800,
      "url": "https://www.igdb.com/platforms/thomson-mo5",
      "versions": [
        221
      ],
      "websites": [
        24
      ],
      "checksum": "5f4cdd4c-4bc0-2a7d-9842-5d1c5350ab4f"
    },
    {
      "id": 157,
      "category": 6,
      "created_at": 1510012800,
      "name": "NEC PC-6000 Series",
      "platform_logo": 370,
      "slug": "nec-pc-6000-series",
      "updated_at": 1510012800,
      "url": "https://www.igdb.com/platforms/nec-pc-6000-series",
      "versions": [
        222
      ],
      "websites": [
        25
      ],
      "checksum": "f781f28a-65e0-c00d-bf2d-3fdb80c54231"
    },
    {
      "id": 158,
      "alternative_name": "Commodore Dynamic Total Vision",
      "category": 6,
      "created_at": 1510012800,
      "name": "Commodore CDTV",
      "platform_logo": 292,
      "slug": "commodore-cdtv",
      "updated_at": 1522972800,
      "url": "https://www.igdb.com/platforms/commodore-cdtv",
      "versions": [
        223
      ],
      "websites": [
        26
      ],
      "checksum": "5d48648e-283c-e2df-df7d-6d3cbc7e0a58"
    },
    {
      "id": 159,
      "category": 5,
      "created_at": 1516752000,
      "generation": 7,
      "name": "Nintendo DSi",
      "platform_logo": 246,
      "platform_family": 5,
      "slug": "nintendo-dsi",
      "updated_at": 1559260800,
      "url": "https://www.igdb.com/platforms/nintendo-dsi",
      "versions": [
        228,
        229
      ],
      "checksum": "3e006565-8164-029f-abd3-6a9c97a22441"
    },
    {
      "id": 160,
      "category": 3,
      "created_at": 1517961600,
      "name": "Nintendo eShop",
      "platform_logo": 382,
      "slug": "nintendo-eshop",
      "updated_at": 1517961600,
      "url": "https://www.igdb.com/platforms/nintendo-eshop",
      "versions": [
        230
      ],
      "websites": [
        27
      ],
      "checksum": "1d34de6a-6ee6-7151-332f-e2815d06309f"
    },
    {
      "id": 161,
      "alternative_name": "WMR",
      "created_at": 1518652800,
      "name": "Windows Mixed Reality",
      "slug": "windows-mixed-reality",
      "updated_at": 1518652800,
      "url": "https://www.igdb.com/platforms/windows-mixed-reality",
      "versions": [
        231
      ],
      "websites": [
        28
      ],
      "checksum": "3315a4c6-f926-c8db-48e5-0cd8381ff229"
    },
    {
      "id": 162,
      "abbreviation": "Oculus VR",
      "created_at": 1518652800,
      "name": "Oculus VR",
      "platform_logo": 158,
      "slug": "oculus-vr",
      "updated_at": 1561939200,
      "url": "https://www.igdb.com/platforms/oculus-vr",
      "versions": [
        232
      ],
      "websites": [
        29
      ],
      "checksum": "057824a0-6272-5702-4a11-6e774def955e"
    },
    {
      "id": 163,
      "abbreviation": "Steam VR",
      "created_at": 1518652800,
      "name": "SteamVR",
      "platform_logo": 159,
      "slug": "steam-vr",
      "updated_at": 1561939200,
      "url": "https://www.igdb.com/platforms/steam-vr",
      "versions": [
        233
      ],
      "websites": [
        30
      ],
      "checksum": "e2c8f5f7-2c50-5d2d-b9b9-1135281d38f4"
    },
    {
      "id": 164,
      "created_at": 1518652800,
      "name": "Daydream",
      "platform_logo": 160,
      "slug": "daydream",
      "updated_at": 1518652800,
      "url": "https://www.igdb.com/platforms/daydream",
      "versions": [
        234
      ],
      "websites": [
        31
      ],
      "checksum": "1f46c07d-381d-e92f-1b49-88d04abe2f19"
    },
    {
      "id": 165,
      "abbreviation": "PlayStation VR",
      "created_at": 1518652800,
      "name": "PlayStation VR",
      "platform_logo": 161,
      "slug": "playstation-vr",
      "updated_at": 1561939200,
      "url": "https://www.igdb.com/platforms/playstation-vr",
      "versions": [
        235
      ],
      "websites": [
        32
      ],
      "checksum": "0bb54d08-658c-34d7-1a65-22cf35f8a8dd"
    },
    {
      "id": 166,
      "category": 5,
      "created_at": 1534896000,
      "name": "Pokémon mini",
      "platform_logo": 267,
      "platform_family": 5,
      "slug": "pokemon-mini",
      "updated_at": 1534982400,
      "url": "https://www.igdb.com/platforms/pokemon-mini",
      "versions": [
        272
      ],
      "websites": [
        33
      ],
      "checksum": "9ea7c3e7-d03a-b228-b380-5bb17ea9be9f"
    },
    {
      "id": 167,
      "abbreviation": "PS5",
      "alternative_name": "PS5",
      "category": 1,
      "created_at": 1543449600,
      "generation": 9,
      "name": "PlayStation 5",
      "platform_logo": 463,
      "platform_family": 1,
      "slug": "ps5",
      "updated_at": 1602028800,
      "url": "https://www.igdb.com/platforms/ps5",
      "versions": [
        273
      ],
      "checksum": "f4eea0c7-9561-26c2-962a-499c7d377903"
    },
    {
      "id": 169,
      "abbreviation": "Series X",
      "category": 1,
      "created_at": 1565222400,
      "generation": 9,
      "name": "Xbox Series",
      "platform_logo": 561,
      "platform_family": 2,
      "slug": "series-x",
      "updated_at": 1603238400,
      "url": "https://www.igdb.com/platforms/series-x",
      "versions": [
        284
      ],
      "websites": [
        36,
        105,
        238
      ],
      "checksum": "98496e66-2edc-77a1-7d7c-6f518c65f469"
    },
    {
      "id": 170,
      "abbreviation": "Stadia",
      "alternative_name": "Stadia",
      "category": 3,
      "created_at": 1565222400,
      "name": "Google Stadia",
      "platform_logo": 328,
      "slug": "stadia",
      "updated_at": 1574294400,
      "url": "https://www.igdb.com/platforms/stadia",
      "versions": [
        285
      ],
      "websites": [
        37
      ],
      "checksum": "7538c37c-07ef-0ad1-a943-e5bf5f551670"
    },
    {
      "id": 203,
      "alternative_name": "Google Stadia",
      "created_at": 1572652800,
      "name": "Stadia",
      "slug": "stadia--1",
      "updated_at": 1572739200,
      "url": "https://www.igdb.com/platforms/stadia--1",
      "versions": [
        318,
        319
      ],
      "websites": [
        70
      ],
      "checksum": "f7f1f94a-7d2b-1176-f6f1-82877437b64d"
    },
    {
      "id": 236,
      "category": 6,
      "created_at": 1573776000,
      "name": "Exidy Sorcerer",
      "slug": "exidy-sorcerer",
      "updated_at": 1591228800,
      "url": "https://www.igdb.com/platforms/exidy-sorcerer",
      "versions": [
        353
      ],
      "websites": [
        215
      ],
      "checksum": "49bd449a-ff99-0083-8954-5812a35c1c5c"
    },
    {
      "id": 237,
      "category": 6,
      "created_at": 1573776000,
      "name": "Sol-20",
      "slug": "sol-20",
      "updated_at": 1591228800,
      "url": "https://www.igdb.com/platforms/sol-20",
      "versions": [
        354
      ],
      "websites": [
        219
      ],
      "checksum": "c608e02f-1a92-d010-b161-4a368220bdfe"
    },
    {
      "id": 238,
      "alternative_name": "Digital Versatile Disc Player",
      "category": 1,
      "created_at": 1575331200,
      "name": "DVD Player",
      "platform_logo": 426,
      "slug": "dvd-player",
      "updated_at": 1575504000,
      "url": "https://www.igdb.com/platforms/dvd-player",
      "versions": [
        355
      ],
      "websites": [
        104
      ],
      "checksum": "5a8e8d2e-b79e-37a9-7368-e3acbd6407f7"
    },
    {
      "id": 239,
      "category": 1,
      "created_at": 1575331200,
      "name": "Blu-ray Player",
      "platform_logo": 427,
      "slug": "blu-ray-player",
      "updated_at": 1575504000,
      "url": "https://www.igdb.com/platforms/blu-ray-player",
      "versions": [
        356
      ],
      "websites": [
        103
      ],
      "checksum": "57f6c9cb-871e-d913-c5e9-9204991a94e7"
    },
    {
      "id": 240,
      "category": 1,
      "created_at": 1581811200,
      "generation": 7,
      "name": "Zeebo",
      "platform_logo": 429,
      "slug": "zeebo",
      "updated_at": 1582156800,
      "url": "https://www.igdb.com/platforms/zeebo",
      "versions": [
        357
      ],
      "websites": [
        106
      ],
      "checksum": "d23d6c26-1eb4-4ff6-2e33-93bd082ec6d9"
    },
    {
      "id": 274,
      "category": 1,
      "created_at": 1587686400,
      "generation": 5,
      "name": "PC-FX",
      "platform_logo": 548,
      "slug": "pc-fx",
      "updated_at": 1591142400,
      "url": "https://www.igdb.com/platforms/pc-fx",
      "versions": [
        392
      ],
      "websites": [
        139
      ],
      "checksum": "a880243d-9f81-4fcf-fdf7-da0fe028be95"
    },
    {
      "id": 306,
      "created_at": 1590710400,
      "name": "Satellaview",
      "platform_family": 5,
      "slug": "satellaview",
      "updated_at": 1590710400,
      "url": "https://www.igdb.com/platforms/satellaview",
      "versions": [
        423
      ],
      "websites": [
        205
      ],
      "checksum": "e8d12cc5-95c1-e390-8163-b1d79e697bc4"
    },
    {
      "id": 307,
      "alternative_name": "Tricotronic",
      "category": 5,
      "created_at": 1590710400,
      "generation": 2,
      "name": "Game & Watch",
      "platform_logo": 531,
      "platform_family": 5,
      "slug": "game-and-watch",
      "updated_at": 1591142400,
      "url": "https://www.igdb.com/platforms/game-and-watch",
      "versions": [
        424
      ],
      "websites": [
        206
      ],
      "checksum": "561c8bcc-6794-35cd-0c62-ae3ef538b072"
    },
    {
      "id": 308,
      "category": 1,
      "created_at": 1590710400,
      "generation": 5,
      "name": "Playdia",
      "platform_logo": 532,
      "slug": "playdia",
      "updated_at": 1591142400,
      "url": "https://www.igdb.com/platforms/playdia",
      "versions": [
        425
      ],
      "websites": [
        208
      ],
      "checksum": "3465b908-1432-e94c-dc31-72cb0099f969"
    },
    {
      "id": 309,
      "category": 5,
      "created_at": 1590710400,
      "generation": 8,
      "name": "Evercade",
      "platform_logo": 528,
      "slug": "evercade",
      "updated_at": 1591142400,
      "url": "https://www.igdb.com/platforms/evercade",
      "versions": [
        426
      ],
      "websites": [
        207
      ],
      "checksum": "12fbb7c4-acc5-fa90-2a02-6de3810375a7"
    },
    {
      "id": 339,
      "alternative_name": "Kids Computer Pico",
      "category": 1,
      "created_at": 1595808000,
      "generation": 4,
      "name": "Sega Pico",
      "platform_family": 3,
      "slug": "sega-pico",
      "updated_at": 1595808000,
      "url": "https://www.igdb.com/platforms/sega-pico",
      "versions": [
        456
      ],
      "checksum": "6e867a5b-a071-fc7b-945b-a0622f64a4bc"
    },
    {
      "id": 372,
      "category": 3,
      "created_at": 1606521600,
      "name": "OOParts",
      "slug": "ooparts",
      "updated_at": 1606521600,
      "url": "https://www.igdb.com/platforms/ooparts",
      "versions": [
        490
      ],
      "websites": [
        271
      ],
      "checksum": "f9404506-a3f2-b59b-238c-4707efe0d428"
    },
    {
      "id": 373,
      "alternative_name": "ZX81",
      "category": 6,
      "created_at": 1607024002,
      "name": "Sinclair ZX81",
      "slug": "sinclair-zx81",
      "updated_at": 1607031405,
      "url": "https://www.igdb.com/platforms/sinclair-zx81",
      "versions": [
        491
      ],
      "checksum": "d0da431e-930b-56d8-74fa-c4c6a2e10e07"
    },
    {
      "id": 374,
      "category": 6,
      "created_at": 1607297122,
      "name": "Sharp MZ-2200",
      "slug": "sharp-mz-2200",
      "updated_at": 1607330038,
      "url": "https://www.igdb.com/platforms/sharp-mz-2200",
      "versions": [
        492
      ],
      "checksum": "318d54ca-5fd2-f9a2-51ac-b410927450b3"
    }
  ]

const platformsWithId = {
    '3': {
      id: 3,
      abbreviation: 'Linux',
      alternative_name: 'GNU/Linux',
      category: 4,
      created_at: 1297555200,
      name: 'Linux',
      platform_logo: 380,
      platform_family: 4,
      slug: 'linux',
      summary: 'Linux is a free and open-source (FOSS/FLOSS) Operating System. In a more precise and complex definition, Linux is an open-source OS kernel on which a large variety of Operating Systems (known as Linux distributions) are built.',
      updated_at: 1392940800,
      url: 'https://www.igdb.com/platforms/linux',
      versions: [ 44 ],
      websites: [ 1 ],
      checksum: 'b810fb9c-65f7-b297-3658-da9c4d52bf11'
    },
    '4': {
      id: 4,
      abbreviation: 'N64',
      alternative_name: 'N64',
      category: 1,
      created_at: 1297555200,
      generation: 5,
      name: 'Nintendo 64',
      platform_logo: 260,
      platform_family: 5,
      slug: 'n64',
      updated_at: 1565136000,
      url: 'https://www.igdb.com/platforms/n64',
      versions: [ 51, 122 ],
      websites: [ 35 ],
      checksum: '647c6004-3c75-3b8d-8259-79bd3d5e5a28'
    },
    '5': {
      id: 5,
      abbreviation: 'Wii',
      alternative_name: 'Revolution',
      category: 1,
      created_at: 1297555200,
      generation: 7,
      name: 'Wii',
      platform_logo: 326,
      platform_family: 5,
      slug: 'wii',
      updated_at: 1565136000,
      url: 'https://www.igdb.com/platforms/wii',
      versions: [ 72, 283 ],
      checksum: 'a588baba-4edb-7649-8516-c2946f410812'
    },
    '6': {
      id: 6,
      abbreviation: 'PC',
      alternative_name: 'mswin',
      category: 4,
      created_at: 1297555200,
      name: 'PC (Microsoft Windows)',
      platform_logo: 203,
      slug: 'win',
      updated_at: 1470009600,
      url: 'https://www.igdb.com/platforms/win',
      versions: [ 1, 13, 14, 15, 124 ],
      websites: [ 2 ],
      checksum: '5aae54d0-390e-a4ec-a9ee-4ad4cc346992'
    },
    '7': {
      id: 7,
      abbreviation: 'PS1',
      category: 1,
      created_at: 1297555200,
      generation: 5,
      name: 'PlayStation',
      platform_logo: 278,
      platform_family: 1,
      slug: 'ps',
      updated_at: 1392076800,
      url: 'https://www.igdb.com/platforms/ps',
      versions: [ 57 ],
      checksum: 'ff70e8cc-2bd3-9b66-886f-06f32a061b3d'
    },
    '8': {
      id: 8,
      abbreviation: 'PS2',
      alternative_name: 'PS2',
      category: 1,
      created_at: 1297555200,
      generation: 6,
      name: 'PlayStation 2',
      platform_logo: 254,
      platform_family: 1,
      slug: 'ps2',
      updated_at: 1414972800,
      url: 'https://www.igdb.com/platforms/ps2',
      versions: [ 58, 114 ],
      checksum: 'be3e025c-d4ed-b795-443c-a8cb55fbfe17'
    },
    '9': {
      id: 9,
      abbreviation: 'PS3',
      category: 1,
      created_at: 1297555200,
      generation: 7,
      name: 'PlayStation 3',
      platform_logo: 79,
      platform_family: 1,
      slug: 'ps3',
      updated_at: 1391558400,
      url: 'https://www.igdb.com/platforms/ps3',
      versions: [ 4, 5, 6 ],
      websites: [ 3 ],
      checksum: 'd516c27e-955e-2ff7-c31b-7d65305b2617'
    },
    '11': {
      id: 11,
      abbreviation: 'XBOX',
      category: 1,
      created_at: 1297555200,
      generation: 6,
      name: 'Xbox',
      platform_logo: 266,
      platform_family: 2,
      slug: 'xbox',
      updated_at: 1392076800,
      url: 'https://www.igdb.com/platforms/xbox',
      versions: [ 77 ],
      checksum: '226780a3-83ed-dcf9-6757-77091acc172d'
    },
    '12': {
      id: 12,
      abbreviation: 'X360',
      alternative_name: 'xbx360',
      category: 1,
      created_at: 1297555200,
      generation: 7,
      name: 'Xbox 360',
      platform_logo: 250,
      platform_family: 2,
      slug: 'xbox360',
      summary: 'Xbox 360 brings you a total games and entertainment experience. The largest library of games, including titles that get you right into the thick of it with Kinect. Plus, your whole family can watch HD movies, TV shows, live events, music, sports and more—across all your devices. Xbox 360 is the center of your games and entertainment universe.',
      updated_at: 1392854400,
      url: 'https://www.igdb.com/platforms/xbox360',
      versions: [ 2, 3, 83 ],
      websites: [ 4 ],
      checksum: '8e1d2b32-0aaf-0992-eaf7-bff2c0ad2863'
    },
    '13': {
      id: 13,
      abbreviation: 'DOS',
      category: 4,
      created_at: 1297641600,
      name: 'PC DOS',
      platform_logo: 38,
      slug: 'dos',
      updated_at: 1392076800,
      url: 'https://www.igdb.com/platforms/dos',
      versions: [ 56 ],
      checksum: 'b2f74f34-7e3d-78b5-1639-bc038cb99679'
    },
    '14': {
      id: 14,
      abbreviation: 'Mac',
      alternative_name: 'Mac OS',
      category: 4,
      created_at: 1297641600,
      name: 'Mac',
      platform_logo: 100,
      slug: 'mac',
      updated_at: 1394236800,
      url: 'https://www.igdb.com/platforms/mac',
      versions: [
         45, 141, 142, 143,
        144, 145, 146, 147,
        148, 149, 150, 151
      ],
      websites: [ 5 ],
      checksum: '19c9dcae-80a2-e137-50ff-11b823738827'
    },
    '15': {
      id: 15,
      abbreviation: 'C64',
      category: 6,
      created_at: 1297814400,
      name: 'Commodore C64/128',
      platform_logo: 300,
      slug: 'c64',
      updated_at: 1468454400,
      url: 'https://www.igdb.com/platforms/c64',
      versions: [ 36 ],
      checksum: '90d35a92-186e-98b5-7688-514c36c23da7'
    },
    '16': {
      id: 16,
      abbreviation: 'Amiga',
      category: 6,
      created_at: 1297814400,
      name: 'Amiga',
      slug: 'amiga',
      updated_at: 1417392000,
      url: 'https://www.igdb.com/platforms/amiga',
      versions: [ 19, 109, 110, 111, 112, 113 ],
      checksum: '5f67821e-ed83-7d0a-5870-5b2233de8e9a'
    },
    '18': {
      id: 18,
      abbreviation: 'NES',
      alternative_name: 'NES',
      category: 1,
      created_at: 1297900800,
      generation: 3,
      name: 'Nintendo Entertainment System (NES)',
      platform_logo: 229,
      platform_family: 5,
      slug: 'nes',
      updated_at: 1424044800,
      url: 'https://www.igdb.com/platforms/nes',
      versions: [ 53, 175 ],
      checksum: 'c046c748-bea6-8418-904c-7e787a652a08'
    },
    '19': {
      id: 19,
      abbreviation: 'SNES',
      alternative_name: 'SNES, Super Nintendo',
      category: 1,
      created_at: 1297900800,
      generation: 4,
      name: 'Super Nintendo Entertainment System (SNES)',
      platform_logo: 535,
      platform_family: 5,
      slug: 'snes--1',
      updated_at: 1591142400,
      url: 'https://www.igdb.com/platforms/snes--1',
      versions: [ 68, 95, 97, 139, 177, 391 ],
      websites: [ 209 ],
      checksum: 'abefad85-f090-9223-53c2-127cadfaa3f1'
    },
    '20': {
      id: 20,
      abbreviation: 'NDS',
      alternative_name: 'DS',
      category: 5,
      created_at: 1297900800,
      generation: 7,
      name: 'Nintendo DS',
      platform_logo: 245,
      platform_family: 5,
      slug: 'nds',
      updated_at: 1502668800,
      url: 'https://www.igdb.com/platforms/nds',
      versions: [ 52, 190, 191, 192 ],
      checksum: '75523597-5342-d7b4-c365-68315bd5932b'
    },
    '21': {
      id: 21,
      abbreviation: 'NGC',
      alternative_name: 'Dolphin',
      category: 1,
      created_at: 1297987200,
      generation: 6,
      name: 'Nintendo GameCube',
      platform_logo: 262,
      slug: 'ngc',
      updated_at: 1565136000,
      url: 'https://www.igdb.com/platforms/ngc',
      versions: [ 54, 121, 125 ],
      checksum: 'f5e41a21-04c5-610e-f6ef-0254008461c7'
    },
    '22': {
      id: 22,
      abbreviation: 'GBC',
      category: 5,
      created_at: 1300147200,
      generation: 5,
      name: 'Game Boy Color',
      platform_logo: 273,
      platform_family: 5,
      slug: 'gbc',
      updated_at: 1589587200,
      url: 'https://www.igdb.com/platforms/gbc',
      versions: [ 41 ],
      checksum: '332ae991-5092-56f0-ac02-39de64097f27'
    },
    '23': {
      id: 23,
      abbreviation: 'DC',
      category: 1,
      created_at: 1300147200,
      generation: 6,
      name: 'Dreamcast',
      platform_logo: 270,
      slug: 'dc',
      updated_at: 1392076800,
      url: 'https://www.igdb.com/platforms/dc',
      versions: [ 16 ],
      checksum: '586e0e57-9a37-fbde-c59d-4726c8d229a6'
    },
    '24': {
      id: 24,
      abbreviation: 'GBA',
      alternative_name: 'GBA',
      category: 5,
      created_at: 1300147200,
      generation: 6,
      name: 'Game Boy Advance',
      platform_logo: 255,
      platform_family: 5,
      slug: 'gba',
      updated_at: 1471478400,
      url: 'https://www.igdb.com/platforms/gba',
      versions: [ 40, 193, 194 ],
      checksum: '2741e85f-e65d-4668-6cdb-36fca54e5dd4'
    },
    '25': {
      id: 25,
      abbreviation: 'ACPC',
      alternative_name: 'Colour Personal Computer',
      category: 6,
      created_at: 1300147200,
      name: 'Amstrad CPC',
      platform_logo: 114,
      slug: 'acpc',
      updated_at: 1468454400,
      url: 'https://www.igdb.com/platforms/acpc',
      versions: [ 20 ],
      checksum: '98553ead-7abe-3404-745d-cf7c17010f01'
    },
    '26': {
      id: 26,
      abbreviation: 'ZXS',
      category: 6,
      created_at: 1300147200,
      name: 'ZX Spectrum',
      platform_logo: 371,
      slug: 'zxs',
      updated_at: 1468540800,
      url: 'https://www.igdb.com/platforms/zxs',
      versions: [ 79 ],
      checksum: 'f73944f5-3aee-6709-e02f-ed9b896a85cc'
    },
    '27': {
      id: 27,
      abbreviation: 'MSX',
      category: 6,
      created_at: 1300147200,
      name: 'MSX',
      platform_logo: 307,
      slug: 'msx',
      updated_at: 1468540800,
      url: 'https://www.igdb.com/platforms/msx',
      versions: [ 47 ],
      checksum: '7954204a-0502-4940-48c1-d525148f76fd'
    },
    '29': {
      id: 29,
      abbreviation: 'Genesis',
      alternative_name: 'Sega Genesis',
      category: 1,
      created_at: 1300924800,
      generation: 4,
      name: 'Sega Mega Drive/Genesis',
      platform_logo: 293,
      platform_family: 3,
      slug: 'smd',
      updated_at: 1400112000,
      url: 'https://www.igdb.com/platforms/smd',
      versions: [ 64 ],
      checksum: '2b0bf08d-bdb2-5d1b-ce0c-0056ef3b35d7'
    },
    '30': {
      id: 30,
      abbreviation: 'Sega32',
      category: 1,
      created_at: 1300924800,
      generation: 4,
      name: 'Sega 32X',
      platform_logo: 279,
      platform_family: 3,
      slug: 'sega32',
      updated_at: 1555977600,
      url: 'https://www.igdb.com/platforms/sega32',
      versions: [ 61 ],
      checksum: 'd47b5ebe-fc4e-7719-a5d9-ad5eeebc6ede'
    },
    '32': {
      id: 32,
      abbreviation: 'Saturn',
      alternative_name: 'JVC Saturn, Hi-Saturn, Samsung Saturn, V-Saturn',
      category: 1,
      created_at: 1301961600,
      generation: 5,
      name: 'Sega Saturn',
      platform_logo: 49,
      platform_family: 3,
      slug: 'saturn',
      updated_at: 1540771200,
      url: 'https://www.igdb.com/platforms/saturn',
      versions: [ 65 ],
      websites: [ 6 ],
      checksum: 'f4fddc54-c402-d538-ac88-e3d711bf3bb2'
    },
    '33': {
      id: 33,
      abbreviation: 'Game Boy',
      category: 5,
      created_at: 1302307200,
      generation: 4,
      name: 'Game Boy',
      platform_logo: 274,
      platform_family: 5,
      slug: 'gb',
      updated_at: 1475625600,
      url: 'https://www.igdb.com/platforms/gb',
      versions: [ 39, 181, 182 ],
      checksum: 'd9a54cf1-7327-083d-7176-ab6143f4c78f'
    },
    '34': {
      id: 34,
      abbreviation: 'Android',
      alternative_name: 'Infocusa3',
      category: 4,
      created_at: 1302566400,
      name: 'Android',
      platform_logo: 376,
      slug: 'android',
      updated_at: 1556150400,
      url: 'https://www.igdb.com/platforms/android',
      versions: [
          7,   8,   9,  10,  11,
         12, 236, 237, 238, 239,
        320
      ],
      websites: [ 7 ],
      checksum: 'fe27cf28-ec61-df1a-e378-ae233b2eea73'
    },
    '35': {
      id: 35,
      abbreviation: 'Game Gear',
      category: 5,
      created_at: 1303862400,
      generation: 4,
      name: 'Sega Game Gear',
      platform_logo: 287,
      platform_family: 3,
      slug: 'gamegear',
      updated_at: 1469404800,
      url: 'https://www.igdb.com/platforms/gamegear',
      versions: [ 62 ],
      checksum: '22dce350-99d3-3eb0-65a0-7e41ff3d1425'
    },
    '36': {
      id: 36,
      abbreviation: 'xla',
      category: 3,
      created_at: 1317600000,
      name: 'Xbox Live Arcade',
      platform_logo: 19,
      platform_family: 2,
      slug: 'xla',
      updated_at: 1391904000,
      url: 'https://www.igdb.com/platforms/xla',
      versions: [ 31 ],
      websites: [ 8 ],
      checksum: '751be340-d180-7a2d-c46a-07b150d07265'
    },
    '37': {
      id: 37,
      abbreviation: '3DS',
      alternative_name: '3DS',
      category: 5,
      created_at: 1317600000,
      generation: 8,
      name: 'Nintendo 3DS',
      platform_logo: 240,
      platform_family: 5,
      slug: '3ds',
      updated_at: 1473984000,
      url: 'https://www.igdb.com/platforms/3ds',
      versions: [ 50 ],
      websites: [ 9 ],
      checksum: 'acee0d28-d3b8-b891-fc1c-768782c775a4'
    },
    '38': {
      id: 38,
      abbreviation: 'PSP',
      alternative_name: 'PSP',
      category: 5,
      created_at: 1317600000,
      generation: 7,
      name: 'PlayStation Portable',
      platform_logo: 214,
      platform_family: 1,
      slug: 'psp',
      updated_at: 1552780800,
      url: 'https://www.igdb.com/platforms/psp',
      versions: [ 59, 276, 277, 278, 279 ],
      checksum: 'f2350669-a77c-261f-d54e-d3bf715cd835'
    },
    '39': {
      id: 39,
      abbreviation: 'iOS',
      category: 4,
      created_at: 1317686400,
      name: 'iOS',
      platform_logo: 248,
      slug: 'ios',
      updated_at: 1391644800,
      url: 'https://www.igdb.com/platforms/ios',
      versions: [ 43 ],
      checksum: 'fefe4a2b-7c90-0e89-e811-902ea1cf2b58'
    },
    '41': {
      id: 41,
      abbreviation: 'WiiU',
      category: 1,
      created_at: 1317686400,
      generation: 8,
      name: 'Wii U',
      platform_logo: 239,
      platform_family: 5,
      slug: 'wiiu',
      updated_at: 1489968000,
      url: 'https://www.igdb.com/platforms/wiiu',
      versions: [ 73 ],
      websites: [ 10 ],
      checksum: '13712d1c-3c5d-44d8-2d54-b2adc47f5416'
    },
    '42': {
      id: 42,
      abbreviation: 'NGage',
      category: 5,
      created_at: 1317686400,
      generation: 6,
      name: 'N-Gage',
      platform_logo: 258,
      slug: 'ngage',
      updated_at: 1392076800,
      url: 'https://www.igdb.com/platforms/ngage',
      versions: [ 49, 118 ],
      checksum: '83080796-a527-e31c-e7ac-7a75a8ff9299'
    },
    '44': {
      id: 44,
      abbreviation: 'zod',
      category: 5,
      created_at: 1317686400,
      name: 'Tapwave Zodiac',
      platform_logo: 46,
      slug: 'zod',
      updated_at: 1392076800,
      url: 'https://www.igdb.com/platforms/zod',
      versions: [ 69 ],
      checksum: '7916e6bf-353a-6f27-a8de-a429204d17d9'
    },
    '45': {
      id: 45,
      abbreviation: 'psn',
      alternative_name: 'PSN',
      category: 3,
      created_at: 1318118400,
      name: 'PlayStation Network',
      platform_logo: 385,
      platform_family: 1,
      slug: 'psn',
      updated_at: 1391904000,
      url: 'https://www.igdb.com/platforms/psn',
      versions: [ 32 ],
      checksum: '7cbd1c11-bc49-3efd-fbc1-382a6479e11e'
    },
    '46': {
      id: 46,
      abbreviation: 'Vita',
      alternative_name: 'PS Vita',
      category: 5,
      created_at: 1321660800,
      generation: 8,
      name: 'PlayStation Vita',
      platform_logo: 232,
      platform_family: 1,
      slug: 'psvita',
      updated_at: 1552780800,
      url: 'https://www.igdb.com/platforms/psvita',
      versions: [ 60, 274, 275 ],
      websites: [ 34 ],
      checksum: '7185535c-37aa-02e0-1764-b81181c990cb'
    },
    '47': {
      id: 47,
      abbreviation: 'VC',
      category: 3,
      created_at: 1326240000,
      name: 'Virtual Console (Nintendo)',
      platform_logo: 384,
      platform_family: 5,
      slug: 'vc',
      updated_at: 1514678400,
      url: 'https://www.igdb.com/platforms/vc',
      versions: [ 71 ],
      checksum: '856ee409-588c-ad7b-e793-5e49821c88fc'
    },
    '48': {
      id: 48,
      abbreviation: 'PS4',
      alternative_name: 'PS4',
      category: 1,
      created_at: 1326499200,
      generation: 8,
      name: 'PlayStation 4',
      platform_logo: 231,
      platform_family: 1,
      slug: 'ps4--1',
      summary: 'The PlayStation 4 system opens the door to an incredible journey through immersive new gaming worlds and a deeply connected gaming community. PS4 puts gamers first with an astounding launch line-up and over 180 games in development. Play amazing top-tier blockbusters and innovative indie hits on PS4. Developer inspired, gamer focused.',
      updated_at: 1433116800,
      url: 'https://www.igdb.com/platforms/ps4--1',
      versions: [ 17, 178, 179 ],
      websites: [ 11 ],
      checksum: '1dfa9b83-5f1d-56ce-01a1-06fcdfbb5bc0'
    },
    '49': {
      id: 49,
      abbreviation: 'XONE',
      alternative_name: 'Xbone',
      category: 1,
      created_at: 1326499200,
      generation: 8,
      name: 'Xbox One',
      platform_logo: 329,
      platform_family: 2,
      slug: 'xboxone',
      summary: 'Welcome to a new generation of games and entertainment. Where games push the boundaries of realism. And television obeys your every command. Where listening to music while playing a game is a snap. And you can jump from TV to movies to music to a game in an instant. Where your experience is custom tailored to you. And the entertainment you love is all in one place. Welcome to the all-in-one, Xbox One',
      updated_at: 1429920000,
      url: 'https://www.igdb.com/platforms/xboxone',
      versions: [ 78, 180, 185, 188 ],
      websites: [ 12 ],
      checksum: 'd2560055-3c6f-d1f6-c5a4-483d9a15498a'
    },
    '50': {
      id: 50,
      abbreviation: '3DO',
      category: 1,
      created_at: 1326758400,
      generation: 5,
      name: '3DO Interactive Multiplayer',
      platform_logo: 282,
      slug: '3do',
      updated_at: 1392076800,
      url: 'https://www.igdb.com/platforms/3do',
      versions: [ 18 ],
      checksum: '08a54368-0ef0-5578-3166-cb9642f254cf'
    },
    '51': {
      id: 51,
      abbreviation: 'fds',
      alternative_name: 'Famicom Disk System',
      category: 1,
      created_at: 1339200000,
      generation: 3,
      name: 'Family Computer Disk System',
      platform_logo: 299,
      platform_family: 5,
      slug: 'fds',
      updated_at: 1540771200,
      url: 'https://www.igdb.com/platforms/fds',
      versions: [ 38 ],
      checksum: 'b8e85b13-7900-937b-67e7-f3b7c71cb75c'
    },
    '52': {
      id: 52,
      abbreviation: 'Arcade',
      created_at: 1339977600,
      name: 'Arcade',
      slug: 'arcade',
      updated_at: 1391817600,
      url: 'https://www.igdb.com/platforms/arcade',
      versions: [ 22 ],
      checksum: '60b83ee0-5185-3f09-c6ea-f773857bd11b'
    },
    '53': {
      id: 53,
      abbreviation: 'MSX2',
      category: 6,
      created_at: 1340064000,
      name: 'MSX2',
      platform_logo: 308,
      slug: 'msx2',
      updated_at: 1468540800,
      url: 'https://www.igdb.com/platforms/msx2',
      versions: [ 48 ],
      checksum: 'd6f6cc07-f15c-1fab-6372-734d874684c8'
    },
    '55': {
      id: 55,
      abbreviation: 'Mobile',
      created_at: 1340668800,
      name: 'Mobile',
      slug: 'mobile',
      updated_at: 1391817600,
      url: 'https://www.igdb.com/platforms/mobile',
      versions: [ 46 ],
      checksum: 'e91716cf-1c47-cbdf-f20a-357079f3f4ab'
    },
    '56': {
      id: 56,
      abbreviation: 'WiiWare',
      created_at: 1341014400,
      name: 'WiiWare',
      slug: 'wiiware',
      updated_at: 1391817600,
      url: 'https://www.igdb.com/platforms/wiiware',
      versions: [ 74 ],
      checksum: '5be5f9c4-60e2-53b0-eff4-fd4b7788f18a'
    },
    '57': {
      id: 57,
      abbreviation: 'WonderSwan',
      category: 5,
      created_at: 1342224000,
      generation: 5,
      name: 'WonderSwan',
      platform_logo: 263,
      slug: 'wonderswan',
      updated_at: 1392076800,
      url: 'https://www.igdb.com/platforms/wonderswan',
      versions: [ 76, 84, 117 ],
      checksum: '9020bab8-6b12-4070-5463-58e57497c4f9'
    },
    '58': {
      id: 58,
      abbreviation: 'SFAM',
      alternative_name: 'SFC',
      category: 1,
      created_at: 1351209600,
      generation: 4,
      name: 'Super Famicom',
      platform_logo: 271,
      platform_family: 5,
      slug: 'sfam',
      updated_at: 1399766400,
      url: 'https://www.igdb.com/platforms/sfam',
      versions: [ 67, 98 ],
      checksum: '98c18388-67d3-e46a-77bc-49287d3da1e9'
    },
    '59': {
      id: 59,
      abbreviation: 'Atari2600',
      category: 1,
      created_at: 1372204800,
      generation: 2,
      name: 'Atari 2600',
      platform_logo: 309,
      slug: 'atari2600',
      updated_at: 1392076800,
      url: 'https://www.igdb.com/platforms/atari2600',
      versions: [ 24 ],
      checksum: 'cd1b72f5-0b7c-669f-a50e-2729293c3703'
    },
    '60': {
      id: 60,
      abbreviation: 'Atari7800',
      alternative_name: 'Atari 7800 ProSystem',
      category: 1,
      created_at: 1372204800,
      generation: 3,
      name: 'Atari 7800',
      platform_logo: 303,
      slug: 'atari7800',
      updated_at: 1392076800,
      url: 'https://www.igdb.com/platforms/atari7800',
      versions: [ 26 ],
      checksum: '75e3ee56-5254-ea30-b5be-131e33ff2004'
    },
    '61': {
      id: 61,
      abbreviation: 'Lynx',
      category: 5,
      created_at: 1372204800,
      generation: 4,
      name: 'Atari Lynx',
      platform_logo: 290,
      slug: 'lynx',
      updated_at: 1392076800,
      url: 'https://www.igdb.com/platforms/lynx',
      versions: [ 29, 189 ],
      checksum: '28a85ec7-a1de-6e5b-9373-e0bbd3bafa13'
    },
    '62': {
      id: 62,
      abbreviation: 'Jaguar',
      category: 1,
      created_at: 1372204800,
      generation: 5,
      name: 'Atari Jaguar',
      platform_logo: 286,
      slug: 'jaguar',
      updated_at: 1392076800,
      url: 'https://www.igdb.com/platforms/jaguar',
      versions: [ 28 ],
      checksum: '70557c0a-1cac-d093-d287-67d8e5a201b0'
    },
    '63': {
      id: 63,
      abbreviation: 'Atari-ST',
      category: 6,
      created_at: 1372291200,
      name: 'Atari ST/STE',
      platform_logo: 367,
      slug: 'atari-st',
      updated_at: 1468454400,
      url: 'https://www.igdb.com/platforms/atari-st',
      versions: [ 30 ],
      checksum: '34e7481c-c27b-bef7-d2cf-f2e48ffcb5d7'
    },
    '64': {
      id: 64,
      abbreviation: 'SMS',
      alternative_name: 'SMS',
      category: 1,
      created_at: 1372464000,
      generation: 3,
      name: 'Sega Master System',
      platform_logo: 298,
      platform_family: 3,
      slug: 'sms',
      updated_at: 1515628800,
      url: 'https://www.igdb.com/platforms/sms',
      versions: [ 63 ],
      checksum: '627a8cab-1069-7514-5d7d-f63dfb09446e'
    },
    '65': {
      id: 65,
      abbreviation: 'Atari8bit',
      category: 6,
      created_at: 1372464000,
      name: 'Atari 8-bit',
      platform_logo: 373,
      slug: 'atari8bit',
      updated_at: 1468540800,
      url: 'https://www.igdb.com/platforms/atari8bit',
      versions: [ 27, 104 ],
      checksum: '37adef88-b15f-3963-a417-687e5e0a6260'
    },
    '66': {
      id: 66,
      abbreviation: 'Atari5200',
      alternative_name: 'Atari 5200 SuperSystem',
      category: 1,
      created_at: 1372464000,
      generation: 2,
      name: 'Atari 5200',
      platform_logo: 304,
      slug: 'atari5200',
      summary: 'the mother text',
      updated_at: 1416700800,
      url: 'https://www.igdb.com/platforms/atari5200',
      versions: [ 25 ],
      checksum: 'b5e86dec-98fe-d680-de33-8fef3dae5435'
    },
    '67': {
      id: 67,
      abbreviation: 'intellivision',
      category: 1,
      created_at: 1372464000,
      generation: 2,
      name: 'Intellivision',
      platform_logo: 312,
      slug: 'intellivision',
      updated_at: 1392076800,
      url: 'https://www.igdb.com/platforms/intellivision',
      versions: [ 42 ],
      checksum: '84a4defd-0a29-ca54-0a07-67b61a4ddc98'
    },
    '68': {
      id: 68,
      abbreviation: 'colecovision',
      category: 1,
      created_at: 1372464000,
      generation: 2,
      name: 'ColecoVision',
      platform_logo: 311,
      slug: 'colecovision',
      updated_at: 1392076800,
      url: 'https://www.igdb.com/platforms/colecovision',
      versions: [ 35 ],
      checksum: '85231b96-19bb-f7cb-608b-736c5120b70f'
    },
    '69': {
      id: 69,
      abbreviation: 'bbcmicro',
      category: 6,
      created_at: 1372464000,
      name: 'BBC Microcomputer System',
      platform_logo: 294,
      slug: 'bbcmicro',
      updated_at: 1468454400,
      url: 'https://www.igdb.com/platforms/bbcmicro',
      versions: [ 33 ],
      checksum: 'eb595073-1be1-9246-0e2e-570cc7c05a87'
    },
    '70': {
      id: 70,
      abbreviation: 'vectrex',
      category: 1,
      created_at: 1372464000,
      generation: 2,
      name: 'Vectrex',
      platform_logo: 305,
      slug: 'vectrex',
      updated_at: 1392076800,
      url: 'https://www.igdb.com/platforms/vectrex',
      versions: [ 70 ],
      checksum: '5140484a-7fd8-2a13-2542-a9207d7c9fd4'
    },
    '71': {
      id: 71,
      abbreviation: 'vic-20',
      category: 6,
      created_at: 1372464000,
      name: 'Commodore VIC-20',
      platform_logo: 313,
      slug: 'vic-20',
      updated_at: 1429142400,
      url: 'https://www.igdb.com/platforms/vic-20',
      versions: [ 37 ],
      checksum: '3e43a9f4-b55b-69e8-7222-64487c29bd47'
    },
    '72': {
      id: 72,
      abbreviation: 'Ouya',
      category: 1,
      created_at: 1373328000,
      generation: 8,
      name: 'Ouya',
      platform_logo: 236,
      slug: 'ouya',
      summary: "The Ouya (/ˈuːjə/ oo-yə), stylized OUYA, is a microconsole running its own version of the Android operating system, developed by Ouya Inc. Julie Uhrman founded the project in 2012. She brought in designer Yves Béhar to collaborate on the design of the project, and Muffi Ghadiali as product manager to put together the engineering team. Development was funded via Kickstarter, raising $8.5 million and becoming the website's second-highest-earning project in its history.\n" +
        '\n' +
        "Units started to ship to Kickstarter backers on March 28, 2013. The console was released to the general public on June 25, 2013, and features an exclusive Ouya store for applications and games designed specifically for the Ouya platform, of which the majority are casual games targeted at or used by a mass audience of casual gamers. Out of the box, Ouya supports media apps such as TwitchTV and XBMC media player. It runs a modified version of Android 4.1 Jelly Bean, and is open to rooting without voiding the warranty (developer models ordered during the Kickstarter campaign for $699 or $1,337 come pre-rooted). The console's hardware design allows it to be easily opened up, requiring only a standard screwdriver for easy modding and possible hardware addons.\n" +
        '\n' +
        'All systems can be used as development kits, allowing any Ouya owner to also be a developer, without the need for licensing fees. All games are required to have some kind of free-to-play aspect, whether that be completely free, has a free trial, or has purchasable upgrades, levels, or other in-game items. The Ouya is classified as part of the eighth generation of video game consoles and as such is a rival competing against the PlayStation 4, Xbox One, and Wii U.',
      updated_at: 1438905600,
      url: 'https://www.igdb.com/platforms/ouya',
      versions: [ 55 ],
      websites: [ 13 ],
      checksum: 'ec1994ca-3247-830f-8452-b664a411ade3'
    },
    '73': {
      id: 73,
      abbreviation: 'blackberry',
      category: 4,
      created_at: 1384387200,
      name: 'BlackBerry OS',
      platform_logo: 40,
      slug: 'blackberry',
      updated_at: 1392076800,
      url: 'https://www.igdb.com/platforms/blackberry',
      versions: [ 34 ],
      checksum: '6fdda0e4-4884-2e33-fd1a-de3521c9b804'
    },
    '74': {
      id: 74,
      abbreviation: 'Win Phone',
      alternative_name: 'WP',
      category: 4,
      created_at: 1384387200,
      name: 'Windows Phone',
      platform_logo: 363,
      slug: 'winphone',
      updated_at: 1572739200,
      url: 'https://www.igdb.com/platforms/winphone',
      versions: [ 224, 225, 226, 227 ],
      checksum: '007cbe18-41ed-e3d5-8292-4e9ad3b684ef'
    },
    '75': {
      id: 75,
      abbreviation: 'Apple][',
      alternative_name: 'apple ][',
      category: 6,
      created_at: 1387756800,
      name: 'Apple II',
      platform_logo: 315,
      slug: 'appleii',
      summary: 'The Apple II is an 8-bit home computer, one of the first highly successful mass-produced microcomputer products, designed primarily by Steve Wozniak, manufactured by Apple Computer (now Apple Inc.) and introduced in 1977. It is the first model in a series of computers which were produced until Apple IIe production ceased in November 1993.',
      updated_at: 1468454400,
      url: 'https://www.igdb.com/platforms/appleii',
      versions: [ 21 ],
      checksum: 'c54c78dd-0a6b-0c3e-9948-931ac9dd0845'
    },
    '77': {
      id: 77,
      abbreviation: 'x1',
      category: 6,
      created_at: 1390867200,
      name: 'Sharp X1',
      platform_logo: 297,
      slug: 'x1',
      updated_at: 1468454400,
      url: 'https://www.igdb.com/platforms/x1',
      versions: [ 66 ],
      checksum: 'c3265f1f-9c3e-fc18-b8e9-cf288b499e95'
    },
    '78': {
      id: 78,
      abbreviation: 'segacd',
      alternative_name: 'Mega CD',
      category: 1,
      created_at: 1391904000,
      generation: 4,
      name: 'Sega CD',
      platform_logo: 284,
      platform_family: 3,
      slug: 'segacd',
      updated_at: 1391904000,
      url: 'https://www.igdb.com/platforms/segacd',
      versions: [ 80 ],
      checksum: '68c11f76-6ea3-f708-1c6e-f5a390d37c54'
    },
    '79': {
      id: 79,
      abbreviation: 'neogeomvs',
      alternative_name: 'Neo Geo Multi Video System',
      category: 2,
      created_at: 1392076800,
      name: 'Neo Geo MVS',
      platform_logo: 70,
      slug: 'neogeomvs',
      updated_at: 1525996800,
      url: 'https://www.igdb.com/platforms/neogeomvs',
      versions: [ 81 ],
      checksum: '8e1fb3fd-a38a-28cc-f8a4-3404ddec3dec'
    },
    '80': {
      id: 80,
      abbreviation: 'neogeoaes',
      alternative_name: 'AES',
      category: 1,
      created_at: 1392076800,
      generation: 4,
      name: 'Neo Geo AES',
      platform_logo: 69,
      slug: 'neogeoaes',
      updated_at: 1399680000,
      url: 'https://www.igdb.com/platforms/neogeoaes',
      versions: [ 82 ],
      checksum: '496c2bad-bcc8-ebda-a3c9-2756cffd7f1d'
    },
    '82': {
      id: 82,
      abbreviation: 'browser',
      alternative_name: 'Internet',
      category: 3,
      created_at: 1395273600,
      name: 'Web browser',
      platform_logo: 381,
      slug: 'browser',
      updated_at: 1553299200,
      url: 'https://www.igdb.com/platforms/browser',
      versions: [ 86 ],
      checksum: '42d5444b-505c-d210-5992-c06b7010651a'
    },
    '84': {
      id: 84,
      abbreviation: 'sg1000',
      alternative_name: 'Sega Game 1000',
      category: 1,
      created_at: 1397433600,
      generation: 3,
      name: 'SG-1000',
      platform_logo: 223,
      platform_family: 3,
      slug: 'sg1000',
      updated_at: 1397865600,
      url: 'https://www.igdb.com/platforms/sg1000',
      versions: [ 91, 92 ],
      checksum: '74499c7d-f3b4-21f3-3d3e-5a3c836bb45d'
    },
    '85': {
      id: 85,
      abbreviation: 'donner30',
      category: 6,
      created_at: 1399680000,
      name: 'Donner Model 30',
      slug: 'donner30',
      updated_at: 1468540800,
      url: 'https://www.igdb.com/platforms/donner30',
      versions: [ 93 ],
      checksum: 'c11154b6-9734-c8fa-a9d3-9b56ffb1e4d9'
    },
    '86': {
      id: 86,
      abbreviation: 'turbografx16',
      category: 1,
      created_at: 1400803200,
      generation: 4,
      name: 'TurboGrafx-16/PC Engine',
      platform_logo: 296,
      slug: 'turbografx16--1',
      updated_at: 1441152000,
      url: 'https://www.igdb.com/platforms/turbografx16--1',
      versions: [ 99 ],
      checksum: 'a865ae03-6878-7704-642b-b2fa9e99389b'
    },
    '87': {
      id: 87,
      abbreviation: 'virtualboy',
      category: 1,
      created_at: 1400803200,
      generation: 5,
      name: 'Virtual Boy',
      platform_logo: 280,
      platform_family: 5,
      slug: 'virtualboy',
      updated_at: 1515542400,
      url: 'https://www.igdb.com/platforms/virtualboy',
      versions: [ 100 ],
      checksum: 'b962021c-d370-c3b0-32cd-7320a3628d46'
    },
    '88': {
      id: 88,
      abbreviation: 'odyssey',
      alternative_name: 'Magnavox Odyssey; Odysee; Odisea; Odissea',
      category: 1,
      created_at: 1407542400,
      generation: 1,
      name: 'Odyssey',
      slug: 'odyssey--1',
      updated_at: 1591228800,
      url: 'https://www.igdb.com/platforms/odyssey--1',
      versions: [ 101, 167, 168, 169, 170, 171 ],
      websites: [ 211 ],
      checksum: '26859452-7553-fa16-0833-3a62209ac679'
    },
    '89': {
      id: 89,
      abbreviation: 'microvision',
      category: 5,
      created_at: 1407542400,
      generation: 2,
      name: 'Microvision',
      platform_logo: 314,
      slug: 'microvision--1',
      updated_at: 1407542400,
      url: 'https://www.igdb.com/platforms/microvision--1',
      versions: [ 102 ],
      checksum: '0d3ccf60-cdd5-5609-4f6b-fc6522e86a18'
    },
    '90': {
      id: 90,
      abbreviation: 'cpet',
      category: 6,
      created_at: 1407542400,
      name: 'Commodore PET',
      platform_logo: 543,
      slug: 'cpet',
      updated_at: 1591228800,
      url: 'https://www.igdb.com/platforms/cpet',
      versions: [ 103 ],
      websites: [ 216 ],
      checksum: '2fa2cd86-55c7-cfa7-9569-e8f0422c8d0b'
    },
    '91': {
      id: 91,
      abbreviation: 'astrocade',
      created_at: 1411603200,
      name: 'Bally Astrocade',
      slug: 'astrocade',
      updated_at: 1411603200,
      url: 'https://www.igdb.com/platforms/astrocade',
      versions: [ 105 ],
      checksum: '5880bf88-b946-090b-f88f-112fe310923d'
    },
    '93': {
      id: 93,
      abbreviation: 'C16',
      category: 6,
      created_at: 1414195200,
      name: 'Commodore 16',
      platform_logo: 544,
      slug: 'c16',
      updated_at: 1591228800,
      url: 'https://www.igdb.com/platforms/c16',
      versions: [ 107 ],
      websites: [ 213 ],
      checksum: '20b27390-3144-d56a-1e32-dbe983708599'
    },
    '94': {
      id: 94,
      abbreviation: 'C+4',
      category: 6,
      created_at: 1414195200,
      name: 'Commodore Plus/4',
      platform_logo: 310,
      slug: 'c-plus-4',
      updated_at: 1468454400,
      url: 'https://www.igdb.com/platforms/c-plus-4',
      versions: [ 108 ],
      checksum: 'ea138789-6bbe-bcca-dff5-7e20e762f65a'
    },
    '95': {
      id: 95,
      abbreviation: 'pdp1',
      alternative_name: 'Programmed Data Processor-1',
      category: 6,
      created_at: 1418515200,
      name: 'PDP-1',
      slug: 'pdp1',
      updated_at: 1591228800,
      url: 'https://www.igdb.com/platforms/pdp1',
      versions: [ 115 ],
      websites: [ 212 ],
      checksum: 'f5fdcfb5-aaaa-1af3-98d1-ffb5cb063a18'
    },
    '96': {
      id: 96,
      abbreviation: 'pdp10',
      category: 6,
      created_at: 1418515200,
      name: 'PDP-10',
      slug: 'pdp10',
      updated_at: 1418515200,
      url: 'https://www.igdb.com/platforms/pdp10',
      versions: [ 116 ],
      checksum: 'aadf131a-55fe-8481-d377-8c6eefe18415'
    },
    '97': {
      id: 97,
      abbreviation: 'pdp-8',
      category: 6,
      created_at: 1424390400,
      name: 'PDP-8',
      slug: 'pdp-8--1',
      updated_at: 1424390400,
      url: 'https://www.igdb.com/platforms/pdp-8--1',
      versions: [ 119 ],
      checksum: 'eab6eb03-90f9-c8ea-fb65-a98533fb31b6'
    },
    '98': {
      id: 98,
      abbreviation: 'gt40',
      created_at: 1424390400,
      name: 'DEC GT40',
      slug: 'gt40',
      updated_at: 1424390400,
      url: 'https://www.igdb.com/platforms/gt40',
      versions: [ 120 ],
      checksum: '479fe519-86c9-0bd1-0c72-311b125e7886'
    },
    '99': {
      id: 99,
      abbreviation: 'famicom',
      alternative_name: 'Famicom',
      category: 1,
      created_at: 1428796800,
      generation: 3,
      name: 'Family Computer (FAMICOM)',
      platform_logo: 277,
      platform_family: 5,
      slug: 'famicom',
      updated_at: 1502668800,
      url: 'https://www.igdb.com/platforms/famicom',
      versions: [ 123 ],
      checksum: '615074d5-3aee-23d6-fc3c-6059bdc62712'
    },
    '100': {
      id: 100,
      abbreviation: 'analogueelectronics',
      created_at: 1437868800,
      name: 'Analogue electronics',
      slug: 'analogueelectronics',
      updated_at: 1437868800,
      url: 'https://www.igdb.com/platforms/analogueelectronics',
      versions: [ 126 ],
      checksum: '01951a13-ac9d-9f80-2b02-f9a818d83326'
    },
    '101': {
      id: 101,
      abbreviation: 'nimrod',
      category: 6,
      created_at: 1437868800,
      name: 'Ferranti Nimrod Computer',
      platform_logo: 386,
      slug: 'nimrod',
      updated_at: 1437868800,
      url: 'https://www.igdb.com/platforms/nimrod',
      versions: [ 127 ],
      checksum: '9210f8a2-3f26-bea5-592a-dc573e2e8731'
    },
    '102': {
      id: 102,
      abbreviation: 'edsac',
      alternative_name: 'Electronic Delay Storage Automatic Calculator',
      category: 6,
      created_at: 1437868800,
      name: 'EDSAC',
      platform_logo: 389,
      slug: 'edsac--1',
      updated_at: 1437868800,
      url: 'https://www.igdb.com/platforms/edsac--1',
      versions: [ 128 ],
      checksum: '60d0cce1-2d5c-720a-da36-96be6f562d2d'
    },
    '103': {
      id: 103,
      abbreviation: 'pdp-7',
      created_at: 1437868800,
      name: 'PDP-7',
      slug: 'pdp-7--1',
      updated_at: 1437868800,
      url: 'https://www.igdb.com/platforms/pdp-7--1',
      versions: [ 129 ],
      checksum: 'e828d5a4-68ad-b75c-dc50-f8ea7df31036'
    },
    '104': {
      id: 104,
      abbreviation: 'hp2100',
      category: 6,
      created_at: 1437955200,
      name: 'HP 2100',
      slug: 'hp2100',
      updated_at: 1437955200,
      url: 'https://www.igdb.com/platforms/hp2100',
      versions: [ 130 ],
      checksum: '17f8a2f3-c014-058a-2827-375e11bcb851'
    },
    '105': {
      id: 105,
      abbreviation: 'hp3000',
      category: 6,
      created_at: 1437955200,
      name: 'HP 3000',
      platform_logo: 369,
      slug: 'hp3000',
      updated_at: 1437955200,
      url: 'https://www.igdb.com/platforms/hp3000',
      versions: [ 131 ],
      checksum: 'd4ac96e8-e4ba-b0dc-22ac-22b73d19ba83'
    },
    '106': {
      id: 106,
      abbreviation: 'sdssigma7',
      category: 6,
      created_at: 1437955200,
      name: 'SDS Sigma 7',
      slug: 'sdssigma7',
      updated_at: 1437955200,
      url: 'https://www.igdb.com/platforms/sdssigma7',
      versions: [ 132 ],
      checksum: '2b8bbf36-b6ff-0242-80f4-7d1c6a0423e0'
    },
    '107': {
      id: 107,
      abbreviation: 'call-a-computer',
      category: 6,
      created_at: 1437955200,
      name: 'Call-A-Computer time-shared mainframe computer system',
      slug: 'call-a-computer',
      updated_at: 1437955200,
      url: 'https://www.igdb.com/platforms/call-a-computer',
      versions: [ 133 ],
      checksum: '47311af8-783b-05f5-0d26-0848d099a399'
    },
    '108': {
      id: 108,
      abbreviation: 'pdp11',
      category: 6,
      created_at: 1438041600,
      name: 'PDP-11',
      slug: 'pdp11',
      updated_at: 1438041600,
      url: 'https://www.igdb.com/platforms/pdp11',
      versions: [ 134 ],
      checksum: 'ad20351c-ef97-5b68-3166-ebe599a36a0a'
    },
    '109': {
      id: 109,
      abbreviation: 'cdccyber70',
      category: 6,
      created_at: 1438041600,
      name: 'CDC Cyber 70',
      platform_logo: 374,
      slug: 'cdccyber70',
      updated_at: 1438041600,
      url: 'https://www.igdb.com/platforms/cdccyber70',
      versions: [ 135 ],
      checksum: '30a78a03-7d24-5580-2167-22682ab2208c'
    },
    '110': {
      id: 110,
      abbreviation: 'plato',
      alternative_name: 'Programmed Logic for Automatic Teaching Operations',
      category: 6,
      created_at: 1438473600,
      name: 'PLATO',
      platform_logo: 375,
      slug: 'plato--1',
      updated_at: 1468454400,
      url: 'https://www.igdb.com/platforms/plato--1',
      versions: [ 136 ],
      checksum: '46476609-7e40-6759-25f6-daecc85fb708'
    },
    '111': {
      id: 111,
      abbreviation: 'imlac-pds1',
      created_at: 1438473600,
      name: 'Imlac PDS-1',
      slug: 'imlac-pds1',
      updated_at: 1438473600,
      url: 'https://www.igdb.com/platforms/imlac-pds1',
      versions: [ 137 ],
      checksum: 'f6058e7f-0a66-beda-fe89-0c4f46a7864b'
    },
    '112': {
      id: 112,
      abbreviation: 'microcomputer',
      created_at: 1438732800,
      name: 'Microcomputer',
      slug: 'microcomputer--1',
      updated_at: 1438732800,
      url: 'https://www.igdb.com/platforms/microcomputer--1',
      versions: [ 138 ],
      checksum: '49f7f77d-42a9-0cae-368f-6f9475275e1f'
    },
    '113': {
      id: 113,
      category: 3,
      created_at: 1439337600,
      name: 'OnLive Game System',
      platform_logo: 383,
      slug: 'onlive-game-system',
      updated_at: 1439683200,
      url: 'https://www.igdb.com/platforms/onlive-game-system',
      versions: [ 140 ],
      websites: [ 15 ],
      checksum: '1fc33df6-3737-8f0c-416b-fa128bd6e8b3'
    },
    '114': {
      id: 114,
      category: 1,
      created_at: 1441238400,
      generation: 5,
      name: 'Amiga CD32',
      platform_logo: 283,
      slug: 'amiga-cd32',
      updated_at: 1589587200,
      url: 'https://www.igdb.com/platforms/amiga-cd32',
      versions: [ 152 ],
      checksum: 'bd4ad4b9-f009-41cf-12e3-a10ce8ef69eb'
    },
    '115': {
      id: 115,
      category: 6,
      created_at: 1441238400,
      name: 'Apple IIGS',
      platform_logo: 295,
      slug: 'apple-iigs',
      updated_at: 1441238400,
      url: 'https://www.igdb.com/platforms/apple-iigs',
      versions: [ 153 ],
      checksum: '0b68ee2c-4b62-f6a4-8e27-8c1b55047bbe'
    },
    '116': {
      id: 116,
      category: 6,
      created_at: 1441238400,
      name: 'Acorn Archimedes',
      platform_logo: 388,
      slug: 'acorn-archimedes',
      updated_at: 1591228800,
      url: 'https://www.igdb.com/platforms/acorn-archimedes',
      versions: [ 154 ],
      websites: [ 214 ],
      checksum: '1991c292-b1d6-8639-c74f-0b81cccc8845'
    },
    '117': {
      id: 117,
      category: 1,
      created_at: 1441238400,
      name: 'Philips CD-i',
      platform_logo: 288,
      slug: 'philips-cd-i',
      updated_at: 1441238400,
      url: 'https://www.igdb.com/platforms/philips-cd-i',
      versions: [ 155 ],
      checksum: 'bca1c0c7-303a-5342-2e3c-2c121b40b24a'
    },
    '118': {
      id: 118,
      category: 6,
      created_at: 1441238400,
      name: 'FM Towns',
      platform_logo: 365,
      slug: 'fm-towns',
      updated_at: 1441238400,
      url: 'https://www.igdb.com/platforms/fm-towns',
      versions: [ 156 ],
      checksum: 'd52c2758-3294-d5e8-960c-e3efffbd99d1'
    },
    '119': {
      id: 119,
      category: 5,
      created_at: 1441238400,
      generation: 5,
      name: 'Neo Geo Pocket',
      platform_logo: 390,
      slug: 'neo-geo-pocket',
      updated_at: 1559260800,
      url: 'https://www.igdb.com/platforms/neo-geo-pocket',
      versions: [ 157 ],
      checksum: '6e94bca9-34ed-5b21-ae12-cdac79d5333b'
    },
    '120': {
      id: 120,
      category: 5,
      created_at: 1441238400,
      generation: 5,
      name: 'Neo Geo Pocket Color',
      platform_logo: 269,
      slug: 'neo-geo-pocket-color',
      updated_at: 1559260800,
      url: 'https://www.igdb.com/platforms/neo-geo-pocket-color',
      versions: [ 158 ],
      checksum: '959ffbb9-21df-b836-9df4-259fcd34e244'
    },
    '121': {
      id: 121,
      category: 6,
      created_at: 1441238400,
      name: 'Sharp X68000',
      platform_logo: 306,
      slug: 'sharp-x68000',
      updated_at: 1441238400,
      url: 'https://www.igdb.com/platforms/sharp-x68000',
      versions: [ 159 ],
      checksum: '3a2f2fc9-7b6c-39f1-1a45-cca745eb8c09'
    },
    '122': {
      id: 122,
      category: 1,
      created_at: 1441411200,
      name: 'Nuon',
      platform_logo: 268,
      slug: 'nuon',
      updated_at: 1588809600,
      url: 'https://www.igdb.com/platforms/nuon',
      versions: [ 160 ],
      websites: [ 172 ],
      checksum: 'bd7c0b27-2608-a3e7-8e11-23f6deebc71d'
    },
    '123': {
      id: 123,
      category: 5,
      created_at: 1441411200,
      generation: 5,
      name: 'WonderSwan Color',
      platform_logo: 261,
      slug: 'wonderswan-color',
      updated_at: 1559260800,
      url: 'https://www.igdb.com/platforms/wonderswan-color',
      versions: [ 161 ],
      checksum: '02c7af50-640e-3d96-6158-2ac84a8d397e'
    },
    '124': {
      id: 124,
      category: 5,
      created_at: 1441411200,
      name: 'SwanCrystal',
      platform_logo: 319,
      slug: 'swancrystal',
      updated_at: 1441411200,
      url: 'https://www.igdb.com/platforms/swancrystal',
      versions: [ 162 ],
      checksum: '9d836c39-3419-65f8-02ff-9fe73e6b6716'
    },
    '125': {
      id: 125,
      category: 6,
      created_at: 1445126400,
      name: 'PC-8801',
      platform_logo: 542,
      slug: 'pc-8801',
      updated_at: 1591228800,
      url: 'https://www.igdb.com/platforms/pc-8801',
      versions: [ 163 ],
      websites: [ 217 ],
      checksum: '797fd579-99d7-5f97-3a07-07dcda8cf60e'
    },
    '126': {
      id: 126,
      category: 6,
      created_at: 1449705600,
      name: 'TRS-80',
      platform_logo: 372,
      slug: 'trs-80',
      updated_at: 1449705600,
      url: 'https://www.igdb.com/platforms/trs-80',
      versions: [ 164 ],
      checksum: 'fb10fc8e-0aeb-b55f-43a1-01b02aab3981'
    },
    '127': {
      id: 127,
      category: 1,
      created_at: 1457395200,
      generation: 2,
      name: 'Fairchild Channel F',
      platform_logo: 316,
      slug: 'fairchild-channel-f',
      updated_at: 1506384000,
      url: 'https://www.igdb.com/platforms/fairchild-channel-f',
      versions: [ 165, 212 ],
      checksum: 'cba12692-9a22-154e-879f-1e9ca57e8b4b'
    },
    '128': {
      id: 128,
      abbreviation: 'supergrafx',
      category: 6,
      created_at: 1457395200,
      name: 'PC Engine SuperGrafx',
      platform_logo: 364,
      slug: 'supergrafx',
      updated_at: 1457395200,
      url: 'https://www.igdb.com/platforms/supergrafx',
      versions: [ 166 ],
      checksum: 'bd228661-6787-7a75-a143-bba16c962d8b'
    },
    '129': {
      id: 129,
      abbreviation: 'ti-99',
      alternative_name: 'Texas Instruments TI-99/4A',
      category: 6,
      created_at: 1459296000,
      name: 'Texas Instruments TI-99',
      platform_logo: 540,
      slug: 'ti-99',
      updated_at: 1591228800,
      url: 'https://www.igdb.com/platforms/ti-99',
      versions: [ 172, 427 ],
      websites: [ 218 ],
      checksum: 'b941f047-24e3-0297-b162-ea548b94b6f9'
    },
    '130': {
      id: 130,
      abbreviation: 'Switch',
      alternative_name: 'NX',
      category: 1,
      created_at: 1465948800,
      generation: 8,
      name: 'Nintendo Switch',
      platform_logo: 534,
      platform_family: 5,
      slug: 'switch',
      updated_at: 1550534400,
      url: 'https://www.igdb.com/platforms/switch',
      versions: [ 173, 282 ],
      websites: [ 16 ],
      checksum: 'd28b6757-c24a-73c6-50e7-f8e6487c78af'
    },
    '131': {
      id: 131,
      alternative_name: 'Nintendo Super Disc',
      category: 1,
      created_at: 1468454400,
      generation: 4,
      name: 'Nintendo PlayStation',
      platform_logo: 529,
      platform_family: 5,
      slug: 'nintendo-playstation',
      updated_at: 1591142400,
      url: 'https://www.igdb.com/platforms/nintendo-playstation',
      versions: [ 174 ],
      websites: [ 210 ],
      checksum: 'f87b4f47-b252-5243-5b0c-604e45dbb9cf'
    },
    '132': {
      id: 132,
      category: 3,
      created_at: 1469664000,
      name: 'Amazon Fire TV',
      platform_logo: 325,
      slug: 'amazon-fire-tv',
      updated_at: 1469664000,
      url: 'https://www.igdb.com/platforms/amazon-fire-tv',
      versions: [ 176 ],
      checksum: 'db7a1f28-dc0d-68b1-c31e-94f43b9643b1'
    },
    '133': {
      id: 133,
      alternative_name: 'Magnavox Odyssey²',
      category: 6,
      created_at: 1477267200,
      name: 'Philips Videopac G7000',
      platform_logo: 112,
      slug: 'philips-videopac-g7000',
      updated_at: 1477267200,
      url: 'https://www.igdb.com/platforms/philips-videopac-g7000',
      versions: [ 183 ],
      checksum: '854e7971-1e3d-0534-ad7a-03ca8ca2cd69'
    },
    '134': {
      id: 134,
      category: 6,
      created_at: 1479427200,
      name: 'Acorn Electron',
      platform_logo: 301,
      slug: 'acorn-electron',
      updated_at: 1479427200,
      url: 'https://www.igdb.com/platforms/acorn-electron',
      versions: [ 184 ],
      checksum: 'ec7fd022-fcf9-8bf8-a73b-09080d9d3515'
    },
    '135': {
      id: 135,
      category: 2,
      created_at: 1492041600,
      name: 'Hyper Neo Geo 64',
      platform_logo: 117,
      slug: 'hyper-neo-geo-64',
      updated_at: 1492041600,
      url: 'https://www.igdb.com/platforms/hyper-neo-geo-64',
      versions: [ 186 ],
      checksum: 'fedca8ca-3a51-84db-1d6a-36a2536d3fe0'
    },
    '136': {
      id: 136,
      category: 1,
      created_at: 1492041600,
      generation: 4,
      name: 'Neo Geo CD',
      platform_logo: 281,
      slug: 'neo-geo-cd',
      updated_at: 1492041600,
      url: 'https://www.igdb.com/platforms/neo-geo-cd',
      versions: [ 187 ],
      checksum: '3bd8bf69-4802-e911-1902-086e159e2ea4'
    },
    '137': {
      id: 137,
      alternative_name: 'n3DS',
      category: 5,
      created_at: 1504569600,
      generation: 8,
      name: 'New Nintendo 3DS',
      platform_logo: 235,
      platform_family: 5,
      slug: 'new-nintendo-3ds',
      updated_at: 1591574400,
      url: 'https://www.igdb.com/platforms/new-nintendo-3ds',
      versions: [ 195 ],
      websites: [ 17 ],
      checksum: 'df7e06e4-3fce-4055-b28c-30703fba98bb'
    },
    '138': {
      id: 138,
      category: 1,
      created_at: 1505174400,
      generation: 2,
      name: 'VC 4000',
      platform_logo: 134,
      slug: 'vc-4000',
      updated_at: 1505174400,
      url: 'https://www.igdb.com/platforms/vc-4000',
      versions: [ 196 ],
      websites: [ 18 ],
      checksum: 'cf5360d1-3a2e-8ee0-08bc-826a27bfe060'
    },
    '139': {
      id: 139,
      category: 1,
      created_at: 1505174400,
      generation: 2,
      name: '1292 Advanced Programmable Video System',
      platform_logo: 136,
      slug: '1292-advanced-programmable-video-system',
      updated_at: 1505174400,
      url: 'https://www.igdb.com/platforms/1292-advanced-programmable-video-system',
      versions: [ 197, 213 ],
      checksum: '8433ae84-dbc7-122b-ec12-f1858bad1c5f'
    },
    '140': {
      id: 140,
      category: 6,
      created_at: 1505520000,
      name: 'AY-3-8500',
      platform_logo: 128,
      slug: 'ay-3-8500',
      updated_at: 1510012800,
      url: 'https://www.igdb.com/platforms/ay-3-8500',
      versions: [ 198, 201, 202, 203, 204 ],
      checksum: 'c28c6efe-d331-48a3-6980-d106f530dd5c'
    },
    '141': {
      id: 141,
      category: 6,
      created_at: 1505520000,
      name: 'AY-3-8610',
      slug: 'ay-3-8610',
      updated_at: 1510012800,
      url: 'https://www.igdb.com/platforms/ay-3-8610',
      versions: [ 199 ],
      checksum: 'd0a3d734-27aa-db05-4436-dc38739f7f9a'
    },
    '142': {
      id: 142,
      category: 1,
      created_at: 1505520000,
      generation: 1,
      name: 'PC-50X Family',
      platform_logo: 132,
      slug: 'pc-50x-family',
      updated_at: 1505520000,
      url: 'https://www.igdb.com/platforms/pc-50x-family',
      versions: [ 200, 205 ],
      checksum: 'ea364197-612c-e075-99f9-b95970ed4c58'
    },
    '143': {
      id: 143,
      category: 1,
      created_at: 1505779200,
      name: 'AY-3-8760',
      slug: 'ay-3-8760',
      updated_at: 1505779200,
      url: 'https://www.igdb.com/platforms/ay-3-8760',
      versions: [ 206 ],
      checksum: '69436aa6-6d7d-bb63-d775-444b6893301b'
    },
    '144': {
      id: 144,
      category: 1,
      created_at: 1505779200,
      name: 'AY-3-8710',
      slug: 'ay-3-8710',
      updated_at: 1505779200,
      url: 'https://www.igdb.com/platforms/ay-3-8710',
      versions: [ 207 ],
      checksum: '5438ffcf-1f05-47e9-e082-15bafd1dc92f'
    },
    '145': {
      id: 145,
      category: 1,
      created_at: 1505779200,
      name: 'AY-3-8603',
      slug: 'ay-3-8603',
      updated_at: 1505779200,
      url: 'https://www.igdb.com/platforms/ay-3-8603',
      versions: [ 208 ],
      checksum: '0124f86d-b875-8d9e-8c78-95c7fc47de08'
    },
    '146': {
      id: 146,
      category: 1,
      created_at: 1505779200,
      name: 'AY-3-8605',
      slug: 'ay-3-8605',
      updated_at: 1505779200,
      url: 'https://www.igdb.com/platforms/ay-3-8605',
      versions: [ 209 ],
      checksum: '3c9b3a84-dc54-3c94-0ee0-5cb97809d2a5'
    },
    '147': {
      id: 147,
      category: 1,
      created_at: 1505779200,
      name: 'AY-3-8606',
      slug: 'ay-3-8606',
      updated_at: 1505779200,
      url: 'https://www.igdb.com/platforms/ay-3-8606',
      versions: [ 210 ],
      checksum: '49428df3-7b02-316e-2390-95a230795394'
    },
    '148': {
      id: 148,
      category: 1,
      created_at: 1505779200,
      name: 'AY-3-8607',
      slug: 'ay-3-8607',
      updated_at: 1505779200,
      url: 'https://www.igdb.com/platforms/ay-3-8607',
      versions: [ 211 ],
      checksum: 'b148a659-dc31-1245-8623-321ce9008d75'
    },
    '149': {
      id: 149,
      category: 6,
      created_at: 1508976000,
      name: 'PC-98',
      platform_logo: 366,
      slug: 'pc-98',
      updated_at: 1508976000,
      url: 'https://www.igdb.com/platforms/pc-98',
      versions: [ 214 ],
      checksum: 'da17ec85-249b-d4ca-f876-8376319ba319'
    },
    '150': {
      id: 150,
      category: 6,
      created_at: 1508976000,
      name: 'Turbografx-16/PC Engine CD',
      platform_logo: 291,
      slug: 'turbografx-16-slash-pc-engine-cd',
      updated_at: 1508976000,
      url: 'https://www.igdb.com/platforms/turbografx-16-slash-pc-engine-cd',
      versions: [ 215 ],
      checksum: '109a66c1-a8f6-22d4-dcd8-993d3837bf8e'
    },
    '151': {
      id: 151,
      alternative_name: 'Tandy Color Computer',
      category: 6,
      created_at: 1510012800,
      name: 'TRS-80 Color Computer',
      platform_logo: 541,
      slug: 'trs-80-color-computer',
      updated_at: 1591228800,
      url: 'https://www.igdb.com/platforms/trs-80-color-computer',
      versions: [ 216 ],
      websites: [ 19 ],
      checksum: '9bd8e911-be9c-a1ad-d8a9-fbf2888cf9ff'
    },
    '152': {
      id: 152,
      alternative_name: 'Fujitsu Micro 7',
      category: 6,
      created_at: 1510012800,
      name: 'FM-7',
      platform_logo: 538,
      slug: 'fm-7',
      updated_at: 1591228800,
      url: 'https://www.igdb.com/platforms/fm-7',
      versions: [ 217 ],
      websites: [ 20 ],
      checksum: '63b1a9d7-a511-8002-0575-4b57876ddb42'
    },
    '153': {
      id: 153,
      category: 6,
      created_at: 1510012800,
      name: 'Dragon 32/64',
      platform_logo: 302,
      slug: 'dragon-32-slash-64',
      updated_at: 1510012800,
      url: 'https://www.igdb.com/platforms/dragon-32-slash-64',
      versions: [ 218 ],
      websites: [ 21 ],
      checksum: 'd11981c1-fbb1-100c-d63f-92021aa7fb0f'
    },
    '154': {
      id: 154,
      category: 6,
      created_at: 1510012800,
      name: 'Amstrad PCW',
      platform_logo: 547,
      slug: 'amstrad-pcw',
      updated_at: 1510012800,
      url: 'https://www.igdb.com/platforms/amstrad-pcw',
      versions: [ 219 ],
      websites: [ 22 ],
      checksum: 'af7ef1c3-c78b-1349-e129-0eafe14ba16f'
    },
    '155': {
      id: 155,
      category: 6,
      created_at: 1510012800,
      name: 'Tatung Einstein',
      platform_logo: 368,
      slug: 'tatung-einstein',
      updated_at: 1510012800,
      url: 'https://www.igdb.com/platforms/tatung-einstein',
      versions: [ 220 ],
      websites: [ 23 ],
      checksum: 'e7061776-b061-c4e7-b04e-cac5d68c38d1'
    },
    '156': {
      id: 156,
      category: 6,
      created_at: 1510012800,
      name: 'Thomson MO5',
      platform_logo: 537,
      slug: 'thomson-mo5',
      updated_at: 1510012800,
      url: 'https://www.igdb.com/platforms/thomson-mo5',
      versions: [ 221 ],
      websites: [ 24 ],
      checksum: '5f4cdd4c-4bc0-2a7d-9842-5d1c5350ab4f'
    },
    '157': {
      id: 157,
      category: 6,
      created_at: 1510012800,
      name: 'NEC PC-6000 Series',
      platform_logo: 370,
      slug: 'nec-pc-6000-series',
      updated_at: 1510012800,
      url: 'https://www.igdb.com/platforms/nec-pc-6000-series',
      versions: [ 222 ],
      websites: [ 25 ],
      checksum: 'f781f28a-65e0-c00d-bf2d-3fdb80c54231'
    },
    '158': {
      id: 158,
      alternative_name: 'Commodore Dynamic Total Vision',
      category: 6,
      created_at: 1510012800,
      name: 'Commodore CDTV',
      platform_logo: 292,
      slug: 'commodore-cdtv',
      updated_at: 1522972800,
      url: 'https://www.igdb.com/platforms/commodore-cdtv',
      versions: [ 223 ],
      websites: [ 26 ],
      checksum: '5d48648e-283c-e2df-df7d-6d3cbc7e0a58'
    },
    '159': {
      id: 159,
      category: 5,
      created_at: 1516752000,
      generation: 7,
      name: 'Nintendo DSi',
      platform_logo: 246,
      platform_family: 5,
      slug: 'nintendo-dsi',
      updated_at: 1559260800,
      url: 'https://www.igdb.com/platforms/nintendo-dsi',
      versions: [ 228, 229 ],
      checksum: '3e006565-8164-029f-abd3-6a9c97a22441'
    },
    '160': {
      id: 160,
      category: 3,
      created_at: 1517961600,
      name: 'Nintendo eShop',
      platform_logo: 382,
      slug: 'nintendo-eshop',
      updated_at: 1517961600,
      url: 'https://www.igdb.com/platforms/nintendo-eshop',
      versions: [ 230 ],
      websites: [ 27 ],
      checksum: '1d34de6a-6ee6-7151-332f-e2815d06309f'
    },
    '161': {
      id: 161,
      alternative_name: 'WMR',
      created_at: 1518652800,
      name: 'Windows Mixed Reality',
      slug: 'windows-mixed-reality',
      updated_at: 1518652800,
      url: 'https://www.igdb.com/platforms/windows-mixed-reality',
      versions: [ 231 ],
      websites: [ 28 ],
      checksum: '3315a4c6-f926-c8db-48e5-0cd8381ff229'
    },
    '162': {
      id: 162,
      abbreviation: 'Oculus VR',
      created_at: 1518652800,
      name: 'Oculus VR',
      platform_logo: 158,
      slug: 'oculus-vr',
      updated_at: 1561939200,
      url: 'https://www.igdb.com/platforms/oculus-vr',
      versions: [ 232 ],
      websites: [ 29 ],
      checksum: '057824a0-6272-5702-4a11-6e774def955e'
    },
    '163': {
      id: 163,
      abbreviation: 'Steam VR',
      created_at: 1518652800,
      name: 'SteamVR',
      platform_logo: 159,
      slug: 'steam-vr',
      updated_at: 1561939200,
      url: 'https://www.igdb.com/platforms/steam-vr',
      versions: [ 233 ],
      websites: [ 30 ],
      checksum: 'e2c8f5f7-2c50-5d2d-b9b9-1135281d38f4'
    },
    '164': {
      id: 164,
      created_at: 1518652800,
      name: 'Daydream',
      platform_logo: 160,
      slug: 'daydream',
      updated_at: 1518652800,
      url: 'https://www.igdb.com/platforms/daydream',
      versions: [ 234 ],
      websites: [ 31 ],
      checksum: '1f46c07d-381d-e92f-1b49-88d04abe2f19'
    },
    '165': {
      id: 165,
      abbreviation: 'PlayStation VR',
      created_at: 1518652800,
      name: 'PlayStation VR',
      platform_logo: 161,
      slug: 'playstation-vr',
      updated_at: 1561939200,
      url: 'https://www.igdb.com/platforms/playstation-vr',
      versions: [ 235 ],
      websites: [ 32 ],
      checksum: '0bb54d08-658c-34d7-1a65-22cf35f8a8dd'
    },
    '166': {
      id: 166,
      category: 5,
      created_at: 1534896000,
      name: 'Pokémon mini',
      platform_logo: 267,
      platform_family: 5,
      slug: 'pokemon-mini',
      updated_at: 1534982400,
      url: 'https://www.igdb.com/platforms/pokemon-mini',
      versions: [ 272 ],
      websites: [ 33 ],
      checksum: '9ea7c3e7-d03a-b228-b380-5bb17ea9be9f'
    },
    '167': {
      id: 167,
      abbreviation: 'PS5',
      alternative_name: 'PS5',
      category: 1,
      created_at: 1543449600,
      generation: 9,
      name: 'PlayStation 5',
      platform_logo: 463,
      platform_family: 1,
      slug: 'ps5',
      updated_at: 1602028800,
      url: 'https://www.igdb.com/platforms/ps5',
      versions: [ 273 ],
      checksum: 'f4eea0c7-9561-26c2-962a-499c7d377903'
    },
    '169': {
      id: 169,
      abbreviation: 'Series X',
      category: 1,
      created_at: 1565222400,
      generation: 9,
      name: 'Xbox Series',
      platform_logo: 561,
      platform_family: 2,
      slug: 'series-x',
      updated_at: 1603238400,
      url: 'https://www.igdb.com/platforms/series-x',
      versions: [ 284 ],
      websites: [ 36, 105, 238 ],
      checksum: '98496e66-2edc-77a1-7d7c-6f518c65f469'
    },
    '170': {
      id: 170,
      abbreviation: 'Stadia',
      alternative_name: 'Stadia',
      category: 3,
      created_at: 1565222400,
      name: 'Google Stadia',
      platform_logo: 328,
      slug: 'stadia',
      updated_at: 1574294400,
      url: 'https://www.igdb.com/platforms/stadia',
      versions: [ 285 ],
      websites: [ 37 ],
      checksum: '7538c37c-07ef-0ad1-a943-e5bf5f551670'
    },
    '203': {
      id: 203,
      alternative_name: 'Google Stadia',
      created_at: 1572652800,
      name: 'Stadia',
      slug: 'stadia--1',
      updated_at: 1572739200,
      url: 'https://www.igdb.com/platforms/stadia--1',
      versions: [ 318, 319 ],
      websites: [ 70 ],
      checksum: 'f7f1f94a-7d2b-1176-f6f1-82877437b64d'
    },
    '236': {
      id: 236,
      category: 6,
      created_at: 1573776000,
      name: 'Exidy Sorcerer',
      slug: 'exidy-sorcerer',
      updated_at: 1591228800,
      url: 'https://www.igdb.com/platforms/exidy-sorcerer',
      versions: [ 353 ],
      websites: [ 215 ],
      checksum: '49bd449a-ff99-0083-8954-5812a35c1c5c'
    },
    '237': {
      id: 237,
      category: 6,
      created_at: 1573776000,
      name: 'Sol-20',
      slug: 'sol-20',
      updated_at: 1591228800,
      url: 'https://www.igdb.com/platforms/sol-20',
      versions: [ 354 ],
      websites: [ 219 ],
      checksum: 'c608e02f-1a92-d010-b161-4a368220bdfe'
    },
    '238': {
      id: 238,
      alternative_name: 'Digital Versatile Disc Player',
      category: 1,
      created_at: 1575331200,
      name: 'DVD Player',
      platform_logo: 426,
      slug: 'dvd-player',
      updated_at: 1575504000,
      url: 'https://www.igdb.com/platforms/dvd-player',
      versions: [ 355 ],
      websites: [ 104 ],
      checksum: '5a8e8d2e-b79e-37a9-7368-e3acbd6407f7'
    },
    '239': {
      id: 239,
      category: 1,
      created_at: 1575331200,
      name: 'Blu-ray Player',
      platform_logo: 427,
      slug: 'blu-ray-player',
      updated_at: 1575504000,
      url: 'https://www.igdb.com/platforms/blu-ray-player',
      versions: [ 356 ],
      websites: [ 103 ],
      checksum: '57f6c9cb-871e-d913-c5e9-9204991a94e7'
    },
    '240': {
      id: 240,
      category: 1,
      created_at: 1581811200,
      generation: 7,
      name: 'Zeebo',
      platform_logo: 429,
      slug: 'zeebo',
      updated_at: 1582156800,
      url: 'https://www.igdb.com/platforms/zeebo',
      versions: [ 357 ],
      websites: [ 106 ],
      checksum: 'd23d6c26-1eb4-4ff6-2e33-93bd082ec6d9'
    },
    '274': {
      id: 274,
      category: 1,
      created_at: 1587686400,
      generation: 5,
      name: 'PC-FX',
      platform_logo: 548,
      slug: 'pc-fx',
      updated_at: 1591142400,
      url: 'https://www.igdb.com/platforms/pc-fx',
      versions: [ 392 ],
      websites: [ 139 ],
      checksum: 'a880243d-9f81-4fcf-fdf7-da0fe028be95'
    },
    '306': {
      id: 306,
      created_at: 1590710400,
      name: 'Satellaview',
      platform_family: 5,
      slug: 'satellaview',
      updated_at: 1590710400,
      url: 'https://www.igdb.com/platforms/satellaview',
      versions: [ 423 ],
      websites: [ 205 ],
      checksum: 'e8d12cc5-95c1-e390-8163-b1d79e697bc4'
    },
    '307': {
      id: 307,
      alternative_name: 'Tricotronic',
      category: 5,
      created_at: 1590710400,
      generation: 2,
      name: 'Game & Watch',
      platform_logo: 531,
      platform_family: 5,
      slug: 'game-and-watch',
      updated_at: 1591142400,
      url: 'https://www.igdb.com/platforms/game-and-watch',
      versions: [ 424 ],
      websites: [ 206 ],
      checksum: '561c8bcc-6794-35cd-0c62-ae3ef538b072'
    },
    '308': {
      id: 308,
      category: 1,
      created_at: 1590710400,
      generation: 5,
      name: 'Playdia',
      platform_logo: 532,
      slug: 'playdia',
      updated_at: 1591142400,
      url: 'https://www.igdb.com/platforms/playdia',
      versions: [ 425 ],
      websites: [ 208 ],
      checksum: '3465b908-1432-e94c-dc31-72cb0099f969'
    },
    '309': {
      id: 309,
      category: 5,
      created_at: 1590710400,
      generation: 8,
      name: 'Evercade',
      platform_logo: 528,
      slug: 'evercade',
      updated_at: 1591142400,
      url: 'https://www.igdb.com/platforms/evercade',
      versions: [ 426 ],
      websites: [ 207 ],
      checksum: '12fbb7c4-acc5-fa90-2a02-6de3810375a7'
    },
    '339': {
      id: 339,
      alternative_name: 'Kids Computer Pico',
      category: 1,
      created_at: 1595808000,
      generation: 4,
      name: 'Sega Pico',
      platform_family: 3,
      slug: 'sega-pico',
      updated_at: 1595808000,
      url: 'https://www.igdb.com/platforms/sega-pico',
      versions: [ 456 ],
      checksum: '6e867a5b-a071-fc7b-945b-a0622f64a4bc'
    },
    '372': {
      id: 372,
      category: 3,
      created_at: 1606521600,
      name: 'OOParts',
      slug: 'ooparts',
      updated_at: 1606521600,
      url: 'https://www.igdb.com/platforms/ooparts',
      versions: [ 490 ],
      websites: [ 271 ],
      checksum: 'f9404506-a3f2-b59b-238c-4707efe0d428'
    },
    '373': {
      id: 373,
      alternative_name: 'ZX81',
      category: 6,
      created_at: 1607024002,
      name: 'Sinclair ZX81',
      slug: 'sinclair-zx81',
      updated_at: 1607031405,
      url: 'https://www.igdb.com/platforms/sinclair-zx81',
      versions: [ 491 ],
      checksum: 'd0da431e-930b-56d8-74fa-c4c6a2e10e07'
    },
    '374': {
      id: 374,
      category: 6,
      created_at: 1607297122,
      name: 'Sharp MZ-2200',
      slug: 'sharp-mz-2200',
      updated_at: 1607330038,
      url: 'https://www.igdb.com/platforms/sharp-mz-2200',
      versions: [ 492 ],
      checksum: '318d54ca-5fd2-f9a2-51ac-b410927450b3'
    }
  }


// const convert = platforms.reduce((acc, curr) => (acc[curr.id]=curr, acc), {})

module.exports = {platformsWithId, originalPlatforms}