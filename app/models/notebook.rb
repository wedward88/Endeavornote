# == Schema Information
#
# Table name: notebooks
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Notebook < ApplicationRecord
    validates :name, presence: true
    validates :user_id, presence: true

    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User

    has_many :notes,
        primary_key: :id,
        foreign_key: :notebook_id,
        class_name: :Note
end
