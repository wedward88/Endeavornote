# == Schema Information
#
# Table name: tags
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Tag < ApplicationRecord

    validates :name, uniqueness: true

    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User

    has_many :taggings,
        primary_key: :id,
        foreign_key: :tag_id,
        class_name: :Tagging

    has_many :notes,
        through: :taggings,
        source: :note
end
