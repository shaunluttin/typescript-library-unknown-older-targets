
    git clone git@github.com:shaunluttin/typescript-library-unknown-older-targets.git

    cd library-ts3.5
    npm install
    .\node_modules\.bin\tsc

    cd ../consumer-ts2.0
    npm install
    .\node_modules\.bin\tsc

    cd ../consumer-ts3.1
    npm install
    .\node_modules\.bin\tsc // error because unknown is not assignable to number
