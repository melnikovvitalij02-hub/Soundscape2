// SOUNDSCAPE PRO - Музыкальная база данных
// Проверенные рабочие треки для воспроизведения в приложении

export const TRACKS_DATABASE = [
    {
        id: 'track_1',
        title: 'I GOT U',
        artist: 'Toxi',
        url: 'https://cdn13.deliciousoranges.com/s3/get/music/20240608/Toxi_-_I_GOT_U_77936633.mp3',
        backup: 'https://cdn9.deliciousoranges.com/s1/get/music/20260508/By_Indiya_Xcho_MOT_-_SHadje_81430189.mp3',
        cover: 'https://i.ytimg.com/vi/1/hqdefault.jpg',
        genre: 'Hip-Hop',
        duration: 180
    },
    {
        id: 'track_2',
        title: 'Мало',
        artist: 'Егор Крид',
        url: 'https://cdn15.deliciousoranges.com/s1/get/music/20260703/EGOR_KRID_-_Malo_20_81826468.mp3',
        backup: 'https://cdn13.deliciousoranges.com/s3/get/music/20240608/Toxi_-_I_GOT_U_77936633.mp3',
        cover: 'https://i.ytimg.com/vi/2/hqdefault.jpg',
        genre: 'Hip-Hop',
        duration: 200
    },
    {
        id: 'track_3',
        title: 'Тону',
        artist: 'HollyFlame',
        url: 'https://cdn1.deliciousoranges.com/s1/get/music/20260206/HOLLYFLAME_-_Tonu_80790537.mp3',
        backup: 'https://cdn15.deliciousoranges.com/s1/get/music/20260703/EGOR_KRID_-_Malo_20_81826468.mp3',
        cover: 'https://i.ytimg.com/vi/3/hqdefault.jpg',
        genre: 'House',
        duration: 210
    },
    {
        id: 'track_4',
        title: 'Малиновая Лада',
        artist: 'Gayazov Brother',
        url: 'https://cdn14.deliciousoranges.com/s3/get/music/20211024/GAYAZOV_BROTHER_-_MALINOVAYA_LADA_73214200.mp3',
        backup: 'https://cdn1.deliciousoranges.com/s1/get/music/20260206/HOLLYFLAME_-_Tonu_80790537.mp3',
        cover: 'https://i.ytimg.com/vi/4/hqdefault.jpg',
        genre: 'Rap',
        duration: 240
    },
    {
        id: 'track_5',
        title: 'Пошла жара',
        artist: 'Filatov & Karas ft. Gayazov Brother',
        url: 'https://cdn19.deliciousoranges.com/s2/get/music/20210604/Filatov_Karas_GAYAZOV_BROTHER_-_Poshla_zhara_72992182.mp3',
        backup: 'https://cdn14.deliciousoranges.com/s3/get/music/20211024/GAYAZOV_BROTHER_-_MALINOVAYA_LADA_73214200.mp3',
        cover: 'https://i.ytimg.com/vi/5/hqdefault.jpg',
        genre: 'House',
        duration: 220
    },
    {
        id: 'track_6',
        title: 'Пьяный туман',
        artist: 'Gayazov Brother',
        url: 'https://cdn5.deliciousoranges.com/s3/get/music/20190315/GAYAZOV_BROTHER_-_Pyanyjj_tuman_62788609.mp3',
        backup: 'https://cdn19.deliciousoranges.com/s2/get/music/20210604/Filatov_Karas_GAYAZOV_BROTHER_-_Poshla_zhara_72992182.mp3',
        cover: 'https://i.ytimg.com/vi/6/hqdefault.jpg',
        genre: 'Hip-Hop',
        duration: 250
    },
    {
        id: 'track_7',
        title: 'Мальборо',
        artist: 'Sayan',
        url: 'https://cdn12.deliciousoranges.com/s1/get/music/20260410/SAYAN_-_Malboro_81251971.mp3',
        backup: 'https://cdn5.deliciousoranges.com/s3/get/music/20190315/GAYAZOV_BROTHER_-_Pyanyjj_tuman_62788609.mp3',
        cover: 'https://i.ytimg.com/vi/7/hqdefault.jpg',
        genre: 'Trap',
        duration: 190
    },
    {
        id: 'track_8',
        title: 'Шаде',
        artist: 'By Indiya Xcho, MOT',
        url: 'https://cdn9.deliciousoranges.com/s1/get/music/20260508/By_Indiya_Xcho_MOT_-_SHadje_81430189.mp3',
        backup: 'https://cdn12.deliciousoranges.com/s1/get/music/20260410/SAYAN_-_Malboro_81251971.mp3',
        cover: 'https://i.ytimg.com/vi/8/hqdefault.jpg',
        genre: 'Hip-Hop',
        duration: 210
    }
];

export const GENRES = ['Hip-Hop', 'House', 'Trap', 'Techno', 'Lo-Fi', 'Rap', 'Dubstep'];

export const ACHIEVEMENTS = [
    { id: 'first_play', title: 'Первый шаг', desc: 'Сыграй в любую игру', icon: '🎮', reward: 50 },
    { id: 'music_lover', title: 'Меломан', desc: 'Слушай музыку 30 минут', icon: '🎵', reward: 100 },
    { id: 'beat_master', title: 'Мастер битов', desc: 'Создай свой первый бит', icon: '🎹', reward: 150 },
    { id: 'collector', title: 'Коллекционер', desc: 'Собери 50 песен в плейлист', icon: '💎', reward: 200 }
];

export const LEADERBOARD_MOCK = [
    { rank: 1, name: 'SoundWizard', xp: 15000, badge: '👑' },
    { rank: 2, name: 'BeatMaster', xp: 12500, badge: '🥈' },
    { rank: 3, name: 'RhythmKing', xp: 11000, badge: '🥉' },
    { rank: 4, name: 'MusicLover', xp: 9500, badge: '⭐' },
    { rank: 5, name: 'SonicNinja', xp: 8200, badge: '🎵' }
];
