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
        # Use params note id to find the relevant note
        @note = Note.find(params[:tag][:note_id])
        # Use params tag name to find tag (if it exists)
        @tag = Tag.find_by(name: params[:tag][:name])

        # If tag exists already, create tagging
        # Return tag and tagging, or errors
        if @tag && @tag.user_id == current_user.id
            @tagging = @tag.taggings.create(note_id: @note.id)
            if @tagging
                render json: {:tag => @tag, :tagging => @tagging}
            else
                render json: @tagging.errors.full_messages, status: 422
            end
        # If tag doesn't exist, create it with the tags association (which creates a tagging as well)
        # Return tag and tagging, or errors
        else
            
            @new_tag = @note.tags.create(name: params[:tag][:name], user_id: current_user.id)
            if @new_tag.id != nil
                #returns the first element in the collection for tagging (it should always be one item)
                render json: {:tag => @new_tag, :tagging => @new_tag.taggings[0]}
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
        # @note.taggings.where query returns a collection, so we specify the first element and save it to @tagging
        
        @tagging = @note.taggings.where(tag_id: params[:tag][:tag_id])[0]
        
        if @tagging.destroy    
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