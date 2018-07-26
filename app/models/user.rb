class User < ApplicationRecord
  belongs_to :package
  has_many :posts
end
