module ControllerMacros
  def login_as_user
    before(:each) do
      @user = create(:user)
      allow_any_instance_of(V1::BaseController).to receive(:current_user).and_return(@user)
    end
  end
end
