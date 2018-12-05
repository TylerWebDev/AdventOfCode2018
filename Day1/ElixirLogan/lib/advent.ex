defmodule Advent do
  def one(input) do
    String.split(input, "\n")
    |> Enum.map(&String.to_integer(&1))
    |> Enum.sum()
  end

  def two(input) do
    String.split(input, "\n")
    |> Enum.map(&String.to_integer(&1))
    |> Stream.cycle()
    |> Enum.reduce_while({[0], 0}, fn number, {frequencies, frequency} ->
      new_frequency = frequency + number

      if Enum.member?(frequencies, new_frequency) do
        {:halt, new_frequency}
      else
        {:cont, {[new_frequency | frequencies], new_frequency}}
      end
    end)
  end
end
