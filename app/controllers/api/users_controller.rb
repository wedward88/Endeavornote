class Api::UsersController < ApplicationController

    def create
        @user = User.new(user_params)
        
        if @user.save
            login!(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: 418
        end
    end

    private

    def user_params
        params.require(:user).permit(:email, :password)
    end
end