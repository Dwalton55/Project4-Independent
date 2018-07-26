class Discipline < ApplicationRecord
  has_many :bundles, dependent: :destroy
  has_many :programs, source: :package, through: :bundles
  has_many :posts
end
