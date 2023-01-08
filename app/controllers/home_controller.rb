class HomeController < ApplicationController
  def index
    @current_time = Time.zone.now
    @news = New.where('start_day <=?', Time.now)
               .where('end_day >=?', Time.now)
  end
end
