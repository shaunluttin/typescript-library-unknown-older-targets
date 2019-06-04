
    git clone git@github.com:shaunluttin/typescript-library-unknown-older-targets.git

    cd library-ts3.5
    npm install
    npm run build

    cd ../consumer-ts2.0
    npm install
    npm run build // Good! There is no error because unknown is an alias for any.

    cd ../consumer-ts3.1
    npm install
    npm run build // Good! There is an error because unknown is not assignable to number.
