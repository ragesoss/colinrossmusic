	Amplitude.init({
  bindings: {
    37: 'prev',
    39: 'next',
    32: 'play_pause'
  },
  debug: true,
  visualization: 'michaelbromley_visualization',
  songs: [
	{
		"name": "Judy O.",
		"artist": "Colin Ross",
		"album": "Refractions",
		"url": "/colinrossmusic/music/refractions/1 - Judy O..mp3",
		"cover_art_url": "/colinrossmusic/music/refractions/refractions-cover.jpg"
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
