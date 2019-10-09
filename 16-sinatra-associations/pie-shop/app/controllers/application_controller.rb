require './config/environment'

class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
  end

  helpers do
    def link_to(text, url)
      "<a href='#{url}'>#{text}</a>"
    end

    def text_field(name, value)
      "<input type='text' name='#{name}' value='#{value}'>"
    end
  end

  get "/" do
    erb :welcome
  end

end
