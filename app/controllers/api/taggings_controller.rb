class Api::TaggingsController < ApplicationController

    def index
        @taggings = current_user.taggings
        render :index
    end

end