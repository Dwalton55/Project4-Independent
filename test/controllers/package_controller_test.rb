require 'test_helper'

class PackageControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get package_index_url
    assert_response :success
  end

  test "should get show" do
    get package_show_url
    assert_response :success
  end

  test "should get create" do
    get package_create_url
    assert_response :success
  end

  test "should get update" do
    get package_update_url
    assert_response :success
  end

  test "should get delete" do
    get package_delete_url
    assert_response :success
  end

end
