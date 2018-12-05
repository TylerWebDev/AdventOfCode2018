defmodule AdventTest do
  use ExUnit.Case
  doctest Advent

  # 1
  test "one can sum the numbers properly" do
    assert Advent.one("+1\n-1\n+2\n-2") === 0
  end
end
