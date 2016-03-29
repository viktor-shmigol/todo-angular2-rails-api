# frozen_string_literal: true
class TasksController < ApplicationController
  expose(:task)
  expose(:tasks) { current_user.tasks.order(created_at: :desc) }

  def index
    render json: tasks, status: :ok
  end

  def create
    return render json: task, status: :created if task.update(task_params)
    render json: { errors: task.errors.full_messages }, status: 422
  end

  def destroy
    task.destroy
    head(204)
  end

  alias update create

  private

  def task_params
    params.require(:task).permit(:name, :description, :done).merge(user_id: current_user.id)
  end
end
