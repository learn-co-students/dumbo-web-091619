Rails Forms
===

## SWBATs
- Create a new Rails app from scratch
- Use Rails generators to create models/migrations/controllers/views
- Explain how routes in Rails interact with the controller
- Use ActionView helpers like `link_to`, `button_to` and `form_for` to help write HTML
- Use strong params to allow creating/updating models with mass assignment

## Outline
Build full CRUD for one model
- Create our model
- Work on CRUD, focus on routes and ActionView helpers
  - [ ] Create
    - HTML form vs `form_tag` vs `form_for`
    - Strong Params
  - [ ] Read
    - `link_to` and path helpers
  - [ ] Update
    - reusable `form_for`
  - [ ] Delete
    - `button_to`

### Generators

Rails generators help make developing Rails apps faster by writing a lot of boilerplate code for you. You should get comfortable knowing which generator to use based on what specific problem you're trying to solve in your application. Here are some commonly used generators:

- `rails g migration`: Create a migration file, similar to `rails db:create_migration`
  - ex: `rails g migration create_student name age:integer`
- `rails g model`: Creates a model with any attributes you specify, and a migration for that model. Model names must be _singular_.
  - ex: `rails g model Student name age:integer`
- `rails g controller`: Create a controller and any methods you specify, along with the corresponding routes and views. Controller names should be _plural_.
  - ex: `rails g controller students index show`
- `rails g resource`: Create the model, migration, and controller for a given model. Resource name should be _singular_.
  - ex: `rails g resource Student name age:integer`
- `rails g scaffold`: don't use this! It generates a lot of boilerplate code that you won't need, and makes too many assumptions about how we want our app to work.

If you ever need to 'undo' a generator and remove all the files it created, you can also run the destroy command (ex. `rails d model student`).

More on generators: [The Rails Command Line — Ruby on Rails Guides](https://guides.rubyonrails.org/command_line.html#rails-generate)

### Routes
There are two ways we primarily define routes:

- Using `resources`: Rails will automatically create the RESTful routes for a given model.
  - ex. `resources :students, only: [:index, show]` will create the following routes: 
    - `get '/students', to: 'students#index', as: 'students'`
    - `get '/students/:id', to: 'students#show', as: 'student'`

- Custom routes: You need to specify the HTTP verb + path, controller + method, and optionally the path helper. These are helpful if you need to create routes outside of the seven RESTful routes provided by resources.
  - ex: `patch /students/:id/toggle, to: 'students#toggle', as: 'toggle_student'`

More on routes: [Rails Routing from the Outside In — Ruby on Rails Guides](https://guides.rubyonrails.org/routing.html)

### Action View helpers
Action View is one of the core libraries in Rails. It comes with a lot of helper methods that make it easier to write HTML strings. Some examples you'll see frequently:

- `link_to`: generates an `<a>` (anchor) tag

```erb
<%= link_to 'Students', students_path %>
# => "<a href="/students">Students</a>"
```

- `button_to`: generates a `<form>` tag with a submit button

```erb
<%= button_to 'Delete', @student, method: :delete %>
# => "<form class="button_to" method="post" action="/students/1">
#       <input type="hidden" name="_method" value="delete">
#       <input type="submit" value="Delete">
#       <input type="hidden" name="authenticity_token" value="...">
#     </form>"
```

- `form_for`: helps generate HTML forms. For an edit form, use an existing instance of a model; for a create form, use a new instance of a model (`@student = Student.new`). Based on what is passed as the first argument to `form_for`, it will generate the correct method and action in the `<form>` tag.

```erb
<%= form_for @student do |form_builder| %>
  <%= form_builder.text_field :name %>
  <%= form_builder.number_field :age %>
  <%= form_builder.submit %>
<% end %>

# => "<form class="new_student" id="new_student" action="/students"  method="post">
#  <input type="hidden" name="authenticity_token" value="...">
#  <input type="text" name="student[name]" id="student_name">
#  <input type="number" name="student[age]" id="student_age">
#  <input type="submit" name="commit" value="Create Student">
# </form>"

```

Link To/Button To: [ActionView::Helpers::UrlHelper](https://api.rubyonrails.org/v5.2.3/classes/ActionView/Helpers/UrlHelper.html#method-i-link_to)
Form For: [form_for (ActionView::Helpers::FormHelper) - APIdock](https://apidock.com/rails/ActionView/Helpers/FormHelper/form_for)

### Strong Params

Rails does not allow mass assignment by default. If you want to use mass assignment to create/update an instance of your model, you have to whitelist specific params them using by calling the permit method on the params hash and passing in the specific keys you want to permit. This protects us from malicious users changing the names on input fields to try and update fields in our models we don't want them to update.

Typically, this is how you will see strong params used in a controller:

```rb
class StudentsController < ApplicationController

  def create
    # call the student params method to return the whitelisted params
    student = Student.create(student_params) 
    
    redirect_to student_path(student)
  end

  # private methods can only be called from within the same class
  private

  def student_params
    # params.require: will throw an error if the key isn't present in the params hash
    # params.permit: whitelist these keys for mass assignment
    params.require(:student).permit(:name, :age, :favorite_food)
  end

end

```