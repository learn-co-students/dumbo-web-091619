Rails Many-to-Many
===

## SWBATs
- Write migrations to change a one-to-many to a many-to-many relationship
- Use ActiveRecord helpers for `has_many` and `has_many_through` to establish relationships

### PSA

**Problem Statement:** We need to update our one-to-many domain model to a many-to-many and let users create new instances on the join table.

### Migrations

In our previous example, we've been working with a domain where a Student has many Labs and a Lab belongs to a Student. Based on new requirements for our application, we need to update our domain model so a Student can have many Labs and a Lab can also have many Students.

First, we'll need to update our schema to remove the current relationship between a Lab and a Student. We can generate the migration for it like so:

`$ rails g migration RemoveStudentFromLab student_id:integer`

```rb
class RemoveStudentFromLab < ActiveRecord::Migration[6.0]
  def change
    remove_column :labs, :student_id, :integer
  end
end
```

Next, we'll need to create a new model to join between our Lab and Student models. Let's call it StudentLab for simplicity. Let's use `rails g resource` to create the model, migration, controller and view folder:

`$ rails g resource StudentLab student:belongs_to lab:belongs_to`

We'll also need to update the associations in our Student and Lab models:

```rb
# app/models/lab.rb
class Lab < ApplicationRecord
  has_many :student_labs
  has_many :students, through: :student_labs
end

# app/models/student.rb
class Student < ApplicationRecord
  has_many :student_labs
  has_many :students, through: :student_labs
end
```

### Adding a Create Form

After setting up our new model and establishing the relationships for our domain, our next problem is giving users of our Rails application an interface to create new instances on our join model. Luckily, this is a problem we've already solved in Rails! We just need to follow RESTful convention and create the right routes, controller methods, and corresponding view file.

```rb
# config/routes.rb
Rails.application.routes.draw do
  resources :student_labs, only: [:new, :create]
  resources :students
  resources :labs
end

# app/controllers/student_labs_controller.rb
class StudentLabsController < ApplicationController
  def new
    @student_lab = StudentLab.new
    @students = Student.all
    @labs = Lab.all
  end

  def create
    student_lab = StudentLab.create(student_lab_params)
    redirect_to student_path(student_lab.student)
  end

  private
  
  def student_lab_params
    params.require(:student_lab).permit(:student_id, :lab_id)
  end
end
```

```erb
<%= form_for @student_lab do |f| %>
  <%= f.label :student %>
  <%= f.collection_select :student, @students, :id, :name %>
  <%= f.label :lab %>
  <%= f.collection_select :lab, @labs, :id, :name %>
  <%= f.submit %>
<% end %>
```

Important things to note: make sure to follow naming conventions for models with more than one word in the name! The class names should be camel cased (StudentLab) and the file names should be snake case (student_lab).