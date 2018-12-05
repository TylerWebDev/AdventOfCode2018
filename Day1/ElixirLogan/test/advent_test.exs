defmodule AdventTest do
  use ExUnit.Case
  doctest Advent

  # 1
  test "one can sum the numbers properly" do
    assert Advent.one("+1\n-1\n+2\n-2") === 0
  end

  # 2
  test "two can find the repeated frequency ex1" do
    # 0,1,0
    assert Advent.two("+1\n-1") === 0
  end

  test "two can find the repeated frequency ex2" do
    # 0,3,6,10,8,4,7,10
    assert Advent.two("+3\n+3\n+4\n-2\n-4") === 10
  end
end
