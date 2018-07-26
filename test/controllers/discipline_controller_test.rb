require 'test_helper'

class DisciplineControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get discipline_index_url
    assert_response :success
  end

  test "should get show" do
    get discipline_show_url
    assert_response :success
  end

  test "should get create" do
    get discipline_create_url
    assert_response :success
  end

  test "should get update" do
    get discipline_update_url
    assert_response :success
  end

  test "should get delete" do
    get discipline_delete_url
    assert_response :success
  end

end
