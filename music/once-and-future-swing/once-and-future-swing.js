	Amplitude.init({
  bindings: {
    37: 'prev',
    39: 'next',
    32: 'play_pause'
  },
  debug: true,
  // visualization: 'michaelbromley_visualization',
  songs: [
    {
      "name": "E-Minus Blues",
      "artist": "Colin Ross Band",
      "album": "The Once and Future Swing",
      "url": "/colinrossmusic/music/once-and-future-swing/1 - E-Minus Blues.mp3",
      "cover_art_url": "/colinrossmusic/music/once-and-future-swing/cover.jpg"
    },
    {
      "name": "Summertime - Moondance",
      "artist": "Colin Ross Band",
      "album": "The Once and Future Swing",
      "url": "/colinrossmusic/music/once-and-future-swing/2 - Summertime - Moondance.mp3",
      "cover_art_url": "/colinrossmusic/music/once-and-future-swing/cover.jpg"
    },
    {
      "name": "Sophisticated Lady",
      "artist": "Colin Ross Band",
      "album": "The Once and Future Swing",
      "url": "/colinrossmusic/music/once-and-future-swing/3 - Sophisticated Lady.mp3",
      "cover_art_url": "/colinrossmusic/music/once-and-future-swing/cover.jpg"
    },
    {
      "name": "My Piano Man",
      "artist": "Colin Ross Band",
      "album": "The Once and Future Swing",
      "url": "/colinrossmusic/music/once-and-future-swing/4 - My Piano Man.mp3",
      "cover_art_url": "/colinrossmusic/music/once-and-future-swing/cover.jpg"
    },
    {
      "name": "One For My Baby",
      "artist": "Colin Ross Band",
      "album": "The Once and Future Swing",
      "url": "/colinrossmusic/music/once-and-future-swing/5 - One For My Baby.mp3",
      "cover_art_url": "/colinrossmusic/music/once-and-future-swing/cover.jpg"
    },
    {
      "name": "Night and Day",
      "artist": "Colin Ross Band",
      "album": "The Once and Future Swing",
      "url": "/colinrossmusic/music/once-and-future-swing/6 - Night and Day.mp3",
      "cover_art_url": "/colinrossmusic/music/once-and-future-swing/cover.jpg"
    },
    {
      "name": "Black Night",
      "artist": "Colin Ross Band",
      "album": "The Once and Future Swing",
      "url": "/colinrossmusic/music/once-and-future-swing/7 - Black Night.mp3",
      "cover_art_url": "/colinrossmusic/music/once-and-future-swing/cover.jpg"
    },
    {
      "name": "Dr. Longjohn",
      "artist": "Colin Ross Band",
      "album": "The Once and Future Swing",
      "url": "/colinrossmusic/music/once-and-future-swing/8 - Dr. Longjohn.mp3",
      "cover_art_url": "/colinrossmusic/music/once-and-future-swing/cover.jpg"
    },
    {
      "name": "Woo Woo",
      "artist": "Colin Ross Band",
      "album": "The Once and Future Swing",
      "url": "/colinrossmusic/music/once-and-future-swing/9 - Woo Woo.mp3",
      "cover_art_url": "/colinrossmusic/music/once-and-future-swing/cover.jpg"
    },
    {
      "name": "The Fourth Street Slide",
      "artist": "Colin Ross Band",
      "album": "The Once and Future Swing",
      "url": "/colinrossmusic/music/once-and-future-swing/10 - The Fourth Street Slide.mp3",
      "cover_art_url": "/colinrossmusic/music/once-and-future-swing/cover.jpg"
    },
    {
      "name": "Walkin",
      "artist": "Colin Ross Band",
      "album": "The Once and Future Swing",
      "url": "/colinrossmusic/music/once-and-future-swing/11 - Walkin.mp3",
      "cover_art_url": "/colinrossmusic/music/once-and-future-swing/cover.jpg"
    },
    {
      "name": "Born To Be Blue",
      "artist": "Colin Ross Band",
      "album": "The Once and Future Swing",
      "url": "/colinrossmusic/music/once-and-future-swing/12 - Born To Be Blue.mp3",
      "cover_art_url": "/colinrossmusic/music/once-and-future-swing/cover.jpg"
    }
  ],
  waveforms: {
      sample_rate: 100
  },
  visualizations: [
    {
      object: MichaelBromleyVisualization,
      params: {

      }
    },
    {
      object: FrequencyAnalyzerVisualization,
      params: {
        type: 'dynamic'
      }
    }
  ]
	});
