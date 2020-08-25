{ pkgs ? import <nixpkgs> {} }:

with pkgs;
let
  gems = bundlerEnv {
    name = "cos316-web";
    inherit ruby;
    gemdir = ./.;
  };

in stdenv.mkDerivation {
  name = "cost316-web";
  buildInputs = [ gems ruby ];
  builder = writeText "builder.sh" ''
    source ${stdenv}/setup
    cp -r $src/* .
    jekyll build
    mkdir -p $out
    cp -r _site/* $out/
    '';
  src = ./.;
}
