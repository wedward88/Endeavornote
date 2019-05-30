class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
        if @user
            login!(@user)
            render 'api/users/show'
        else
            render json: ['Invalid email address, password, or combination.'], status: 401
        end
    end

    def check_email
        @user = User.find_by(email: params[:user][:email])
        
        if @user
            
            render json: { email: @user.email }
        else
            render json: ['Email is not registered with Endeavornote!'], status: 418
        end
    end

    def destroy
        if current_user
            logout!
            render json: {}
        else
            render json: ['No user currently logged in.'], status: 418
        end
    end
end