# frozen_string_literal: true
class Task < ActiveRecord::Base
  belongs_to :user
  validates :name, :description, presence: true
end
