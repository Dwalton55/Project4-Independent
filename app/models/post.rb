class Post < ApplicationRecord
  belongs_to :user
  belongs_to :discipline
end
