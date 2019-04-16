var foo;
(function (foo) {
    var MaxLevelOfDetail = foo.MaxLevelOfDetail;
    function main() {
        console.log(MaxLevelOfDetail);
    }
    foo.main = main;
})(foo || (foo = {}));
foo.main();
