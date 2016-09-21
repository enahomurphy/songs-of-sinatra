

class HomeController < BaseController

  get "/" do
    erb :index, :layout => false
  end

  get "/blog" do
    title "Blog"
    erb :blog
  end

  get "/contact" do
    erb :contact
  end

  get "/about" do
    erb :about
  end
end