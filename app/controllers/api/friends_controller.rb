class Api::FriendsController < ApplicationController
    def create
        @user = User.find_by(email: params[:email])
        if @user
            @friend = Friend.new(user_id: current_user.id, friend_id: @user.id)
            if @friend.save
                render :show
            else
                render json: ['This action is not available'], status: 401
            end
        else
            render json: ['Not a valid user'], status: 401
        end
    end

    def destroy
        @friend = Friend.find_by(user_id: current_user.id, friend_id: params[:id])
        if @friend
            @friend.destroy
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
