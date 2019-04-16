`MaxLevelOfDetail` is not in the output `*.js` files, because it is declared inside a `declare namespace`.

`declare` means *a declaration is defined somewhere else (somewhere written in an external javascript file or part of the runtime environment)*. [source](https://stackoverflow.com/a/53289927/27211)

Replacing `declare namespace` with `namespace` includes `MaxLevelOfDetail` in the output `*.js` files.
