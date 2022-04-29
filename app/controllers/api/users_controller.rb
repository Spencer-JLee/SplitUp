class Api::UsersController < ApplicationController
    skip_before_action :verify_authenticity_token

    def index
        @users = User.allow_nil

        render :index
    end

    def create
        @user = User.new(user_params)

        if @user.save
            login!(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: 401
        end
    end

    private
    def user_params
        params.require(:user).permit(:username, :email, :password)
    end
end
