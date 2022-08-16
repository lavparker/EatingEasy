class Api::SessionsController < ApplicationController
  # before_action :require_logged_in, only: [:destroy]

  # def create
  #   # @user = User.find_by_credentials(
  #   #   params[:user][:username],
  #   #   params[:user][:password]
  #   # )

  #   # if @user
  #   #   login!(@user)
  #   #   redirect_to users_url
  #   # else
  #   #   flash.now[:errors] = ['Invalid username or password'], status: 401
  #   #   render :new
  #   # end
  # end

  # def destroy
    
  #   logout!
  #   render json: {}

  #   # render a Render a 404 message if there is no current_user to logout.

  # end
end
