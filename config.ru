require 'sinatra/base'

Dir.glob('./{Helpers,Controllers,Extensions}/*.rb') { |file| require file}

map "/" do
  run HomeController
end