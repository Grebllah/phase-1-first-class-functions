const receivesAFunction = (callback) => {
    callback()
}
const returnsANamedFunction = () => function inner() {}
const returnsAnAnonymousFunction = () => function() {}
