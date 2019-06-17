# == Schema Information
#
# Table name: notes
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  body        :text             not null
#  notebook_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Note < ApplicationRecord
    validates :title, :body, :notebook_id, presence: true

    belongs_to :notebook,
        primary_key: :id,
        foreign_key: :notebook_id,
        class_name: :Notebook

    has_many :taggings,
        primary_key: :id,
        foreign_key: :note_id,
        class_name: :Tagging
    
    has_one :user,
        through: :notebook,
        source: :user

    has_many :tags,
        through: :taggings,
        source: :tag

end
