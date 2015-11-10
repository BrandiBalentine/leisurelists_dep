require 'test_helper'

class UserTest < ActiveSupport::TestCase
  test "first_name is required" do
    brandi = users(:brandi)
    brandi.first_name = nil
    assert !brandi.save
  end

  test "last_name is required" do
    brandi = users(:brandi)
    brandi.last_name = nil
    assert !brandi.save
  end

  test "email is required" do
    brandi = users(:brandi)
    brandi.email = nil
    assert !brandi.save
  end

  test "password_digest is required" do
    brandi = users(:brandi)
    brandi.password_digest = nil
    assert !brandi.save
  end
end
