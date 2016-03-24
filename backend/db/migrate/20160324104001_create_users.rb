class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :email
      t.string :token
      t.string :password_digest

      t.timestamps null: false
    end
    add_reference :tasks, :user, index: true
  end
end
