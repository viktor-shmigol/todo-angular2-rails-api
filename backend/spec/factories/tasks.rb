# frozen_string_literal: true
FactoryGirl.define do
  factory :task do
    sequence(:name) { |n| "task#{n}" }
    description 'description'
  end
end
