class Api::ExpensesController < ApplicationController

    skip_before_action :verify_authenticity_token

    def index
        @expenses = Expense.all 

        render :index
    end

    def show
        @expense = Expense.find(params[:id])

        render :show
    end

    def create
        @expense = Expense.new(expense_params)

        if @expense.save
            render :show
        else
            render json: @expense.errors.full_messages, status: 401
        end
    end

    def update
        @expense = Expense.find(params[:id])

        if @expense.update(expense_params)
            render :show
        else
            render json: @expense.errors.full_messages, status: 401
        end
    end

    def destroy
        @expense = Expense.find(params[:id])
        @expense.destroy
        render json: ['Expense deleted']
    end

    private
    def expense_params
        params.require(:expense).permit(:owner_id, :amount, :description, :split_option)
    end
end
