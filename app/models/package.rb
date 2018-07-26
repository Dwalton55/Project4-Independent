class Package < ApplicationRecord
    has_many :bundles, dependent: :destroy

    has_many :programs, source: :discipline, through: :bundles
end
