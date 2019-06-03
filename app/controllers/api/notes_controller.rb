class Api::NotesController < ApplicationController

    def index
        @notebooks = current_user.notebooks
        @notes = current_user.notes

        render :index
    end

    def show
        @note = Note.find(params[:id])
        render :show
    end

    def create
        @note = Note.new(note_params)
        if @notebook.save
            render json: @notebook
        else
            render json: @notebook.errors.full_messages, status: 422
        end
    end

    def update
        @note = Note.find(params[:id])
        if @note.update(note_params)
            render json: @note
        else
            render json: @note.errors.full_messages, status: 422
        end
    end

    def destroy
        @notebook = Notebook.find(params[:notebook_id])
        @note = Note.find(params[:id])

        if @notebook.id == @note.notebook_id
            if @note.destroy
                render json: @note
            else
                render json: @note.errors.full_messages, status: 418
            end
        else
            render json: ['This is not your note to delete!'], status: 418
        end
        
    end

    private

    def note_params
        params.require(:note).permit(:title, :body, :user_id, :notebook_id)
    end
end