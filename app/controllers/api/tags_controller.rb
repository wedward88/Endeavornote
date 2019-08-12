class Api::TagsController < ApplicationController

    def index
        @tags = current_user.tags
        render :index
    end

    def show
        @tag = Tag.find(params[:id])
        render :show
    end

    def create

        @note = Note.find(params[:tag][:note_id])
        @tag = Tag.find_by(name: params[:tag][:name])

        if @tag && @tag.user_id == current_user.id
            @tagging = @tag.taggings.create(note_id: @note.id)
            if @tagging
                render json: {:tag => @tag, :tagging => @tagging}
            else
                render json: @tagging.errors.full_messages, status: 422
            end
        else
            @new_tag = @note.tags.create(name: params[:tag][:name], user_id: current_user.id)
            if @new_tag.id != nil
                render json: {:tag => @new_tag, :tagging => @new_tag.taggings}
            else
                render json: @new_tag.errors.full_messages, status: 422
            end
        end
    end

    def update
        @tag = Tag.find(params[:id])

        if @tag.update(tag_params)
            render json: @tag
        else
            render json: @tag.errors.full_messages, status: 422
        end
    end

    def destroy_tagging
        @note = Note.find(params[:tag][:note_id])
        @tagging = @note.taggings.where(tag_id: params[:tag][:id])

        if @tagging.delete
            render json: @tagging
        else
            render json: @tagging.errors.full_messages, status: 422
        end
    end

    def destroy
        @note = Note.find(params[:tag][:note_id])
        @tag = Tag.find(params[:id])

        if @tag.user_id == current_user.id
            if @note.taggings.where(tag_id: @tag.id).delete_all
                @tag.destroy
                render json: @tag
            else
                render json: @tag.errors.full_messages, status: 418
            end
        else
            render json: ['This is not your tag to delete!'], status: 418
        end
    end

    private

    def tag_params
        params.require(:tag).permit(:name, :note_id)
    end

end