class Api::CommentsController < ApplicationController
    skip_before_action :verify_authenticity_token

    def create
        @comment = Comment.new(comment_params)
        if @comment.save
            render :show
        else
            render json: @comment.errors.full_messages, status: 401
        end
    end

    def destroy
        @comment = Comment.find(params[:id])

        if @comment.destroy
            render :show
        else  
            render json: ["That action is not available"], status: 401
        end
    end

    private

    def comment_params
        params.require(:comment).permit(:author_id, :expense_id, :body)
    end
end
