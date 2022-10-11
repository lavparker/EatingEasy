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
        # print reservation_params
        print params 
        @reservation = Reservation.new(params[:reservation])
        if @reservation.save!
            render :show
        else
            render json: @reservation.errors.full_messages, status: 422
        end
    end

    def update
        @reservation = Reservation.find(params[:id])

        if @reservation && @reservation.update(params)
            render :show
        else
            render json: @reservation.errors.full_messages, status: 422
        end
    end

    def destroy
        @reservation = Reservation.find(params[:id])

        if @reservation 
            @reservation.delete
            render json: ['This reservation has been cancelled']
        else
            render json: ['Error: This cancellation request could not be completed'] , status: 422
        end
    end

    private

    def reservation_params
        params.require(:reservation).permit(:restaurant_id, :party_size, :date, :time)
    end 

end
