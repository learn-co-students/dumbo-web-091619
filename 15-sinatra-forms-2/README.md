Sinatra CR(UD) Part 2
===

## SWBATs
- Make a CRUD app using Sinatra
- Explain REST
- Demonstrate how REST is used with CRUD
- Configure Sinatra to accept HTTP verbs other than GET and POST
- Use nested params to isolate params coming from form fields
- Render a delete button

## Outline
- Review our app
- Part 1: Update
  - Update form
  - Method override
  - Nested params
- Part 2: Delete
  - Delete button
- *If there's time*
  - View helpers!
  - Search form!

### REST & CRUD
- [x] Create
  - [x] GET '/movies/new' -> Show the user a form to create a new movie
  - [x] POST '/movies' -> Create a new movie in our database
- [x] Read
  - [x] GET '/movies' -> Show all movies
  - [x] GET '/movies/:id' -> Show one movie
- [ ] Update
  - [ ] GET '/movies/:id/edit' -> Show the user a form to edit an existing movie movie
  - [ ] PATCH '/movies/:id' -> Update the movie in our database
- [ ] Delete
  - [ ] DELETE '/movies/:id' -> Delete the movie from our database


### HTML Forms and HTTP verbs

In the last lecture, we saw that we can use forms to make two kinds of HTTP requests, `GET` and `POST`, by changing the form's `method` attribute:

```html
<form method="post" action="/students">
  <!--form fields here-->
</form>
```

We know based on RESTful convention that in order to update or delete something in our application, we need to use other HTTP verbs: `PUT` or `PATCH` for updating, and `DELETE` for deleting. 

Unfortunately, [HTML forms don't support any methods other than GET or POST](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#attr-method). In order to get around this, Sinatra (and other frameworks that follow RESTful conventions) use a special hidden field on the form that changes the HTTP verb in the server before it reaches our controller. This is commonly referred to as the *method override*. It looks like this in the form:

```html
<form method="post" action="/students/:id">
  <input type="hidden" name="_method" value="put">
  <!--form fields here-->
</form>
```

We also need to add one additional line of configuration to tell Sinatra to look for this special `_method` key in the params hash, and use its value to change the HTTP verb for the request. You can **either** set this up in the ApplicationController, or the `config.ru` file (no need to to both!):


```rb
# in config.ru

use Rack::MethodOverride # this will tell our application to look for the _method key in params
run ApplicationController

```

--OR--

```rb
# in application_controller.rb
class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
    set :method_override, true # this will tell our application to look for the _method key in params
  end

  # route etc
  # ...

end
```

### Working with Nested Params

Consider the following HTML form:

```erb
<h1>Edit <%= @movie.title %></h1>
<form method="POST" action="/movies/<%= @movie.id %>">
  <input type="hidden" name="_method" value="put">
  <input type="text" name="title" value="<%= @movie.title %>">
  <input type="number" name="runtime" value="<%= @movie.runtime %>">
  <input type="submit">
</form>
```

When this form is submitted, we'll need a few pieces of information in order to find and update a movie in our database: 
- The movie's ID
- Any fields from the form to update specific attributes for the movie

Currently, when the form is submitted, all of the information we need is grouped together in the params hash:

```rb
  params = {
    "_method"=>"put",
    "title"=>"The Star Wars",
    "runtime"=>"900",
    "id"=>"1"
  }
```
Ideally, we'd like to keep the information separate so we can (1) find the film, then (2) use mass assignment to update the movie using all the fields from the form. Something like the example below - with all our form fields _nested_ in their own key in the params hash - would be great:

```rb
  params = {
    "_method"=>"put",
    "id"=>"1",
    "movie" => {
      "title"=>"The Star Wars",
      "runtime"=>"900"
    }
  }
```

In order to get our params hash looking the way we want it, we need to update the `name` attributes for our form's input fields:

```erb
<h1>Edit <%= @movie.title %></h1>
<form method="POST" action="/movies/<%= @movie.id %>">
  <input type="hidden" name="_method" value="put">
  <input type="text" name="movie[title]" value="<%= @movie.title %>">
  <input type="number" name="movie[runtime]" value="<%= @movie.runtime %>">
  <input type="submit">
</form>
```

With our new changes to the form, the params will come out exactly as we need them, and we can update our route like so:

```rb
  put '/movies/:id' do
    movie = Movie.find(params[:id])
    movie.update(params[:movie]) # nested params hash
    redirect to "/movies/#{movie.id}"
  end
```

