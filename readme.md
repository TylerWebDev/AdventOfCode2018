# Tyler Web Dev Advent of Code 2018

[Advent of Code](http://adventofcode.com)

Within this repository you'll find 25 folders for the 25 days of the Advent of Code.

## Contributing

If you want to contribute, create a folder inside the given day and contribute a solution in your language of choice.
Please do not commit directly into the `Day<n>` folders, but rather make a folder inside and place your solutions therein.

## Running

### Elixir
> Elixir is a dynamic, functional language built to run on the Erlang VM. It excels at distributed and concurrent programming.

[Get Elixir](http://elixir-lang.github.io/)

Formatter
```
mix format
```
Tests
```
mix test
```
Exercises
```
mix deps.get
mix advent1.run
mix advent2.run
```

### Rust
> Rust is a systems programming language that runs blazingly fast, prevents segfaults, and guarantees thread safety.

[Get Rust](https://www.rust-lang.org/en-US/)

Formatter
```
cargo fmt
```
Tests
```
cargo test
```
Exercises
```
cargo build
cargo run --bin day1
cargo run --bin day2
```
