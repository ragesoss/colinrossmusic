# Make an array of Amplitude song objects like this:
# {
#   "name": "Judy O.",
#   "artist": "Colin Ross",
#   "album": "Refractions",
#   "url": "/colinrossmusic/music/refractions/1 - Judy O..mp3",
#   "cover_art_url": "/colinrossmusic/music/refractions/refractions-cover.jpg"
# }
require 'json'

def album_json(directory, album_title, artist)
  # get mp3 files
  mp3_files = Dir["#{directory}/*.mp3"]
  album_array = []

  # loop through them
  mp3_files.each do |mp3|
    album_array << mp3_to_json(mp3, directory, album_title, artist)
  end
  JSON.pretty_generate album_array
end

def mp3_to_json(mp3, directory, album_title, artist)
  {
    "name": title_from_filename(directory, mp3),
    "artist": artist,
    "album": album_title,
    "url": "/colinrossmusic/music/#{mp3}",
    "cover_art_url": "/colinrossmusic/music/#{directory}/cover.jpg"
  }
end

def title_from_filename(directory, mp3)
  mp3.gsub("#{directory}/", '').gsub(/\d+ - /, '').gsub('.mp3', '')
end

directory, album_title, artist = ARGV

puts album_json(directory, album_title, artist)