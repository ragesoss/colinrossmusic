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
      "name": "Frustration Boogie",
      "artist": "Colin Ross",
      "album": "Refried Boogie",
      "url": "/colinrossmusic/music/refried-boogie/1 - Frustration Boogie.mp3",
      "cover_art_url": "/colinrossmusic/music/refried-boogie/cover.jpg"
    },
    {
      "name": "Trouble Boogie",
      "artist": "Colin Ross",
      "album": "Refried Boogie",
      "url": "/colinrossmusic/music/refried-boogie/10 - Trouble Boogie.mp3",
      "cover_art_url": "/colinrossmusic/music/refried-boogie/cover.jpg"
    },
    {
      "name": "Rollem",
      "artist": "Colin Ross",
      "album": "Refried Boogie",
      "url": "/colinrossmusic/music/refried-boogie/11 - Rollem.mp3",
      "cover_art_url": "/colinrossmusic/music/refried-boogie/cover.jpg"
    },
    {
      "name": "E-minus Blues",
      "artist": "Colin Ross",
      "album": "Refried Boogie",
      "url": "/colinrossmusic/music/refried-boogie/2 - E-minus Blues.mp3",
      "cover_art_url": "/colinrossmusic/music/refried-boogie/cover.jpg"
    },
    {
      "name": "Rippin' Ray",
      "artist": "Colin Ross",
      "album": "Refried Boogie",
      "url": "/colinrossmusic/music/refried-boogie/3 - Rippin' Ray.mp3",
      "cover_art_url": "/colinrossmusic/music/refried-boogie/cover.jpg"
    },
    {
      "name": "Refried Boogie",
      "artist": "Colin Ross",
      "album": "Refried Boogie",
      "url": "/colinrossmusic/music/refried-boogie/4 - Refried Boogie.mp3",
      "cover_art_url": "/colinrossmusic/music/refried-boogie/cover.jpg"
    },
    {
      "name": "Slippin' Into Night",
      "artist": "Colin Ross",
      "album": "Refried Boogie",
      "url": "/colinrossmusic/music/refried-boogie/5 - Slippin' Into Night.mp3",
      "cover_art_url": "/colinrossmusic/music/refried-boogie/cover.jpg"
    },
    {
      "name": "Red Dog Shuffle",
      "artist": "Colin Ross",
      "album": "Refried Boogie",
      "url": "/colinrossmusic/music/refried-boogie/6 - Red Dog Shuffle.mp3",
      "cover_art_url": "/colinrossmusic/music/refried-boogie/cover.jpg"
    },
    {
      "name": "Steppin'",
      "artist": "Colin Ross",
      "album": "Refried Boogie",
      "url": "/colinrossmusic/music/refried-boogie/7 - Steppin'.mp3",
      "cover_art_url": "/colinrossmusic/music/refried-boogie/cover.jpg"
    },
    {
      "name": "Crawdad Breath",
      "artist": "Colin Ross",
      "album": "Refried Boogie",
      "url": "/colinrossmusic/music/refried-boogie/8 - Crawdad Breath.mp3",
      "cover_art_url": "/colinrossmusic/music/refried-boogie/cover.jpg"
    },
    {
      "name": "Otis' Blues",
      "artist": "Colin Ross",
      "album": "Refried Boogie",
      "url": "/colinrossmusic/music/refried-boogie/9 - Otis' Blues.mp3",
      "cover_art_url": "/colinrossmusic/music/refried-boogie/cover.jpg"
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
