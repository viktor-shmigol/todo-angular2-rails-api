# frozen_string_literal: true
class ApplicationController < ActionController::API
  decent_configuration do
    strategy DecentExposure::StrongParametersStrategy
  end
end
