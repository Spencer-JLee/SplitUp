class Api::FriendsController < ApplicationController
    skip_before_action :verify_authenticity_token
    def create
        @user = User.find_by(email: params[:email])
        if @user
            @friend = Friend.new(user_id: current_user.id, friend_id: @user.id)
            @inverse_friend = Friend.new(user_id: @user.id, friend_id: current_user.id)
            if @friend.save && @inverse_friend.save
                render :show
            else
                render json: ['This action is not available'], status: 401
            end
        else
            render json: ['Not a valid user'], status: 401
        end
    end

    def destroy
        @friend = Friend.find_by(user_id: current_user.id, friend_id: params[:id].to_i)
        @inverse_friend = Friend.find_by(user_id: params[:id].to_i, friend_id: current_user.id)
        if @friend && @inverse_friend
            @friend.destroy
            @inverse_friend.destroy
            render :show
        else
            render json: ['Friend not found']
        end
    end

    private

    def friend_params
        params.require(:friend).permit(:email)
    end
end
