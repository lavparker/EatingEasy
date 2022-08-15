class Api::UsersController < ApplicationController
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
