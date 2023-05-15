class Api::ReservationsController < ApplicationController
    skip_before_action :verify_authenticity_token
    before_action :require_logged_in!, only: [:index, :create, :show, :update, :destroy]

    #to show all of the current user's Reservations 
    def index
        @reservations = current_user.reservations
        render :index
    end

    def show
        @reservation = Reservation.find(params[:id])
        render :show
    end

    def create
        # debugger
  
      
        @user = User.find(reservation_params[:user_id])
      
        @reservation = Reservation.new(reservation_params)
        @reservation.user = @user
        if @reservation.save
            # console.log("in the create reservation non error controller")

            render :show
        else
            # console.log("in the create reservation controller")
            # console.log(@reservation.errors.full_messages);
            # debugger
            render json: @reservation.errors.full_messages, status: 422
        end
    end

    def update
        @reservation = Reservation.find(params[:id])

        if @reservation && @reservation.update(reservation_params)
            render :show
        else
            # render json: @reservation.errors.full_messages, status: 422
            render json: ['Error: This update request could not be completed'] , status: 422
        end
    end

    def destroy
        # debugger
        @reservation = Reservation.find_by(id: params[:id])

        if @reservation 
            # debugger
            @reservation.destroy
            render json: @reservation.id
            # render json: ['This reservation has been cancelled']
        else
            # debugger
            render json: ['Error: This cancellation request could not be completed'] , status: 422
        end
    end

    private

    def reservation_params
        params.require(:reservation).permit(:restaurant_id, :party_size, :date, :time, :first_name, :last_name, :phone_number, :email, :user_id, :special_requests)
    end 

end
