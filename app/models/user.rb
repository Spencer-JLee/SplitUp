class User < ApplicationRecord
    validates :username, :email, :password_digest, :session_token, presence: true
    validates :username, :email, :session_token, uniqueness: true
    validates :password, length: { minimum: 6, allow_nil: true}

    attr_reader :password
    before_validation :ensure_session_token

    def self.find_by_credentials(email, password)
        @user = User.find_by(email: email)

        if @user && @user.is_password?(password)
            @user
        else 
            nil
        end
    end

    def is_password?(password)
        password_object = BCrypt::Password.new(self.password_digest)
        password_object.is_password?(password)
    end

    def generate_session_token
        SecureRandom.urlsafe_base64
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def ensure_session_token
        self.session_token ||= generate_session_token
    end

    def reset_session_token!
        self.session_token = generate_session_token
        self.save!
        self.session_token
    end

    has_many :expense_members,
        class_name: :ExpenseMember,
        foreign_key: :user_id,
        dependent: :destroy

    has_many :expenses,
        through: :expense_members,
        source: :expense

    has_many :friends,
        class_name: :Friend,
        foreign_key: :user_id

    has_many :friendships,
        through: :friends,
        source: :user

    has_many :inverse_friends,
        class_name: :Friend,
        foreign_key: :friend_id

    has_many :inverse_friendships,
        through: :inverse_friends,
        source: :user
end
