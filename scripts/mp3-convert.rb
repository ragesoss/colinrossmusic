LOCATION = 'mp3'

`mkdir #{LOCATION}`

def convert_file(filename)
  newfile = LOCATION + '/' + flac_to_mp3(filename)
  `ffmpeg -i "#{filename}" -ab 320k "#{newfile}"`
end
  
def flac_to_mp3(filename)
  puts filename
  puts filename.gsub '.flac', '.mp3'
  filename.gsub '.flac', '.mp3'
end

Dir.glob('*.flac').each do|f|
  convert_file(f)
end
