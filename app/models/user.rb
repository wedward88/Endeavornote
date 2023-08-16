# == Schema Information
#
# Table name: users
#
#  id                  :bigint           not null, primary key
#  email               :string           not null
#  password_digest     :string           not null
#  session_token       :string           not null
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#  default_notebook_id :integer
#

class User < ApplicationRecord
    validates :email, :session_token, presence: true, uniqueness: true
    validates :password_digest, presence: true
    validates :password, length: { minimum: 6, allow_nil: true }
    before_validation :ensure_session_token, :ensure_default_notebook

    attr_reader :password

    has_many :notebooks,
        primary_key: :id,
        foreign_key: :user_id,
        inverse_of: :user,
        class_name: :Notebook

    has_many :tags,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :Tag

    has_many :taggings,
        through: :tags,
        source: :taggings

    has_many :notes,
        through: :notebooks,
        source: :notes

    belongs_to :default_notebook,
        foreign_key: :default_notebook_id,
        class_name: :Notebook


    def ensure_default_notebook
        unless self.default_notebook
            self.default_notebook = self.notebooks.new(name: 'First Notebook!')
        end
    end

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        if user && user.is_password?(password)
            user
        else
            nil
        end
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
        self.session_token = self.class.generate_session_token
        self.save!
        self.session_token
    end

    private

    def self.generate_session_token
        SecureRandom::urlsafe_base64
    end

    def ensure_session_token
        self.session_token ||= self.class.generate_session_token
    end
end
