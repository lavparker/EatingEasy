class Api::UsersController < ApplicationController
    skip_before_action :verify_authenticity_token, only: [:create]
    before_action :require_logged_in, only: [:index, :show]
     def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      redirect_to users_url
    else
      flash.now[:errors] = @user.errors.full_messages
      render :new
    end
  end

  private
    def user_params
        params.require(:user).permit(:first_name, :last_name, :email, :username, :password)
    end

end