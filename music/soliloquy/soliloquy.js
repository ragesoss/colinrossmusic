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
      "name": "In the Key of G Major",
      "artist": "Colin Ross",
      "album": "Soliloquy",
      "url": "/colinrossmusic/music/soliloquy/1 - In the Key of G Major.mp3",
      "cover_art_url": "/colinrossmusic/music/soliloquy/cover.jpg"
    },
    {
      "name": "In the Key of C Major",
      "artist": "Colin Ross",
      "album": "Soliloquy",
      "url": "/colinrossmusic/music/soliloquy/10 - In the Key of C Major.mp3",
      "cover_art_url": "/colinrossmusic/music/soliloquy/cover.jpg"
    },
    {
      "name": "In the Key of F# minor",
      "artist": "Colin Ross",
      "album": "Soliloquy",
      "url": "/colinrossmusic/music/soliloquy/11 - In the Key of F# minor.mp3",
      "cover_art_url": "/colinrossmusic/music/soliloquy/cover.jpg"
    },
    {
      "name": "In the Key of Bb minor",
      "artist": "Colin Ross",
      "album": "Soliloquy",
      "url": "/colinrossmusic/music/soliloquy/12 - In the Key of Bb minor.mp3",
      "cover_art_url": "/colinrossmusic/music/soliloquy/cover.jpg"
    },
    {
      "name": "In the Key of A Major",
      "artist": "Colin Ross",
      "album": "Soliloquy",
      "url": "/colinrossmusic/music/soliloquy/13 - In the Key of A Major.mp3",
      "cover_art_url": "/colinrossmusic/music/soliloquy/cover.jpg"
    },
    {
      "name": "unlisted",
      "artist": "Colin Ross",
      "album": "Soliloquy",
      "url": "/colinrossmusic/music/soliloquy/14 - unlisted.mp3",
      "cover_art_url": "/colinrossmusic/music/soliloquy/cover.jpg"
    },
    {
      "name": "In the Key of A minor",
      "artist": "Colin Ross",
      "album": "Soliloquy",
      "url": "/colinrossmusic/music/soliloquy/2 - In the Key of A minor.mp3",
      "cover_art_url": "/colinrossmusic/music/soliloquy/cover.jpg"
    },
    {
      "name": "In the Key of Eb Major",
      "artist": "Colin Ross",
      "album": "Soliloquy",
      "url": "/colinrossmusic/music/soliloquy/3 - In the Key of Eb Major.mp3",
      "cover_art_url": "/colinrossmusic/music/soliloquy/cover.jpg"
    },
    {
      "name": "In the Key of F Major",
      "artist": "Colin Ross",
      "album": "Soliloquy",
      "url": "/colinrossmusic/music/soliloquy/4 - In the Key of F Major.mp3",
      "cover_art_url": "/colinrossmusic/music/soliloquy/cover.jpg"
    },
    {
      "name": "In the Key of Gb Major",
      "artist": "Colin Ross",
      "album": "Soliloquy",
      "url": "/colinrossmusic/music/soliloquy/5 - In the Key of Gb Major.mp3",
      "cover_art_url": "/colinrossmusic/music/soliloquy/cover.jpg"
    },
    {
      "name": "In the Key of Ab Major",
      "artist": "Colin Ross",
      "album": "Soliloquy",
      "url": "/colinrossmusic/music/soliloquy/6 - In the Key of Ab Major.mp3",
      "cover_art_url": "/colinrossmusic/music/soliloquy/cover.jpg"
    },
    {
      "name": "In the Key of B minor",
      "artist": "Colin Ross",
      "album": "Soliloquy",
      "url": "/colinrossmusic/music/soliloquy/7 - In the Key of B minor.mp3",
      "cover_art_url": "/colinrossmusic/music/soliloquy/cover.jpg"
    },
    {
      "name": "In the Key of E Major",
      "artist": "Colin Ross",
      "album": "Soliloquy",
      "url": "/colinrossmusic/music/soliloquy/8 - In the Key of E Major.mp3",
      "cover_art_url": "/colinrossmusic/music/soliloquy/cover.jpg"
    },
    {
      "name": "In the Key of Bb Major",
      "artist": "Colin Ross",
      "album": "Soliloquy",
      "url": "/colinrossmusic/music/soliloquy/9 - In the Key of Bb Major.mp3",
      "cover_art_url": "/colinrossmusic/music/soliloquy/cover.jpg"
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
