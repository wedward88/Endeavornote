class Api::NotebooksController < ApplicationController

    def index
        @user = current_user
        @notebooks = @user.notebooks.includes(:notes)
        render :index
    end

    def show
        @notebook = Notebook.find(params[:id])
        render :show
    end

    def create
        @notebook = Notebook.new(notebook_params)
        if @notebook.save
            render json: @notebook
        else
            render json: @notebook.errors.full_messages, status: 422
        end
    end

    def update
        @notebook = Notebook.find(params[:id])
        if @notebook.update(notebook_params)
            render json: @notebook
        else
            render json: @notebook.errors.full_messages, status: 422
        end
    end

    def destroy
        @user = User.find(params[:user_id])
        @notebook = Notebook.find(params[:id])

        if @user.id == @notebook.user_id
            if @notebook.destroy
                render json: @notebook
            else
                render json: @notebook.errors.full_messages, status: 418
            end
        else
            render json: ['This is not your notebook to delete!'], status: 418
        end
        
    end

    private

    def notebook_params
        params.require(:notebook).permit(:name, :user_id)
    end
end