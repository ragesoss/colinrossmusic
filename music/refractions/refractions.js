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
      "name": "Judy O.",
      "artist": "Colin Ross",
      "album": "Refractions",
      "url": "/colinrossmusic/music/refractions/1 - Judy O..mp3",
      "cover_art_url": "/colinrossmusic/music/refractions/cover.jpg"
    },
    {
      "name": "Souljourn",
      "artist": "Colin Ross",
      "album": "Refractions",
      "url": "/colinrossmusic/music/refractions/2 - Souljourn.mp3",
      "cover_art_url": "/colinrossmusic/music/refractions/cover.jpg"
    },
    {
      "name": "Pas de Deux",
      "artist": "Colin Ross",
      "album": "Refractions",
      "url": "/colinrossmusic/music/refractions/3 - Pas de Deux.mp3",
      "cover_art_url": "/colinrossmusic/music/refractions/cover.jpg"
    },
    {
      "name": "Beaty's Blues",
      "artist": "Colin Ross",
      "album": "Refractions",
      "url": "/colinrossmusic/music/refractions/4 - Beaty's Blues.mp3",
      "cover_art_url": "/colinrossmusic/music/refractions/cover.jpg"
    },
    {
      "name": "Highland Theme",
      "artist": "Colin Ross",
      "album": "Refractions",
      "url": "/colinrossmusic/music/refractions/5 - Highland Theme.mp3",
      "cover_art_url": "/colinrossmusic/music/refractions/cover.jpg"
    },
    {
      "name": "Etherea",
      "artist": "Colin Ross",
      "album": "Refractions",
      "url": "/colinrossmusic/music/refractions/6 - Etherea.mp3",
      "cover_art_url": "/colinrossmusic/music/refractions/cover.jpg"
    },
    {
      "name": "Dr. Longjohn",
      "artist": "Colin Ross",
      "album": "Refractions",
      "url": "/colinrossmusic/music/refractions/7 - Dr. Longjohn.mp3",
      "cover_art_url": "/colinrossmusic/music/refractions/cover.jpg"
    },
    {
      "name": "2 a.m.",
      "artist": "Colin Ross",
      "album": "Refractions",
      "url": "/colinrossmusic/music/refractions/8 - 2 a.m..mp3",
      "cover_art_url": "/colinrossmusic/music/refractions/cover.jpg"
    },
    {
      "name": "Unborn Child",
      "artist": "Colin Ross",
      "album": "Refractions",
      "url": "/colinrossmusic/music/refractions/9 - Unborn Child.mp3",
      "cover_art_url": "/colinrossmusic/music/refractions/cover.jpg"
    },
    {
      "name": "Knockin' on Your Door",
      "artist": "Colin Ross",
      "album": "Refractions",
      "url": "/colinrossmusic/music/refractions/10 - Knockin' on Your Door.mp3",
      "cover_art_url": "/colinrossmusic/music/refractions/cover.jpg"
    },
    {
      "name": "San Juan",
      "artist": "Colin Ross",
      "album": "Refractions",
      "url": "/colinrossmusic/music/refractions/11 - San Juan.mp3",
      "cover_art_url": "/colinrossmusic/music/refractions/cover.jpg"
    },
    {
      "name": "Refractions",
      "artist": "Colin Ross",
      "album": "Refractions",
      "url": "/colinrossmusic/music/refractions/12 - Refractions.mp3",
      "cover_art_url": "/colinrossmusic/music/refractions/cover.jpg"
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
