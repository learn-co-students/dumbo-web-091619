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

    #   <%= collection_select(:baker_id, @bakers, :id, :nickname) %>
    def collection_select(name, collection, value_field, text_field)
      binding.pry
      str = "<select name='#{name.to_s}'>"
      collection.each do |item|
        str += "<option value='#{item.send(value_field)}'> #{item.send(text_field)} </option>"
      end
      str += "</select>"
      str
    end
    
  end

  get "/" do
    erb :welcome
  end

end
