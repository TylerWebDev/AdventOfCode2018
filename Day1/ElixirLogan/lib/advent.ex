defmodule Advent do
  def one(input) do
    String.split(input, "\n")
    |> Enum.map(&String.to_integer(&1))
    |> Enum.sum()
  end

  def two(input) do
    input
  end
end
