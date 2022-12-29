class HomeController < ApplicationController
  def index
    @current_time = Time.zone.now
  end

  def update
    @current_time = Time.zone.now
    respond_to do |format|
      format.js do
        render partial: 'home/form_post.js.erb'
      end
    end
  end
end
