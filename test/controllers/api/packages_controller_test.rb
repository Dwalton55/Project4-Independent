require 'test_helper'

class Api::PackagesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_packages_index_url
    assert_response :success
  end

  test "should get show" do
    get api_packages_show_url
    assert_response :success
  end

  test "should get create" do
    get api_packages_create_url
    assert_response :success
  end

  test "should get update" do
    get api_packages_update_url
    assert_response :success
  end

  test "should get delete" do
    get api_packages_delete_url
    assert_response :success
  end

end
