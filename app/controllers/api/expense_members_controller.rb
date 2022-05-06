class Api::ExpenseMembersController < ApplicationController
    skip_before_action :verify_authenticity_token

    def create
        @expense_member = ExpenseMember.new(expense_member_params)

        if @expense_member.save
            render :show
        else
            render json: @expense_member.errors.full_messages, status: 401
        end
    end

    def update
        @expense_member = ExpenseMember.find_by(user_id: params[:user_id], expense_id: params[:expense_id])

        if @expense_member.update(expense_member_params)
            render :show
        else
            render json: @expense_member.errors.full_messages, status: 401
        end
    end


    def destroy
        @expense_member = ExpenseMember.find_by(user_id: params[:user_id], expense_id: params[:expense_id])
        if @expense_member && @expense_member.destroy
            render json: ['Expense member deleted']
        else
            render json: ['Expense member cannot be deleted'], status: 401
        end
    end

    private
    def expense_member_params
        params.require(:expenseMember).permit(:expense_id, :user_id, :balance)
    end
end
