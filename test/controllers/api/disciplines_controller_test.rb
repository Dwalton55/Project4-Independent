require 'test_helper'

class Api::DisciplinesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_disciplines_index_url
    assert_response :success
  end

  test "should get show" do
    get api_disciplines_show_url
    assert_response :success
  end

  test "should get create" do
    get api_disciplines_create_url
    assert_response :success
  end

  test "should get update" do
    get api_disciplines_update_url
    assert_response :success
  end

  test "should get delete" do
    get api_disciplines_delete_url
    assert_response :success
  end

end
