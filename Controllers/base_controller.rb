require "sinatra/base"


class BaseController < Sinatra::Base
  #registering title helper
  helpers ApplicationHelper


  #set folder for templates to "../views", but make the path absolute
  set :views, File.expand_path("../../views", __FILE__)

  #set static file diractory
  set :public_folder, File.expand_path("../../public", __FILE__)

  #turn off logging for testing
  configure :production, :development do
    set :logging, disable
  end

end