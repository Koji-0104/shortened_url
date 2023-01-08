class HomeController < ApplicationController
  def index
    @current_time = Time.zone.now
    @news = New.where('end_day >=?', Time.now)
               .or(New.where(end_day: nil))
               .where('start_day <=?', Time.now)
  end
end
