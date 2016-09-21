
module ApplicationHelper
  def title (name = nil)
    @title = name if name
    @title ? "controller Demo - #{name}" : "controller demo"
  end
end
