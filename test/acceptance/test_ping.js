const assert = require('chai').assert,
    mockApi = new MockApi();

describe('ping', () => {
    describe('/ping', () => {
        it('should respond with version information on a ping', done => {
            mockApi.waitForResponse((args, complete) => {
                assert.isTrue(/^Concierge(-bot)? [0-9]+\.[0-9]+\.[0-9]+ @ \S+ \(\S+ \S+, \S+ \S+\)$/.test(args[0]));
                complete();
            }, done);
            mockApi.mockSendToModules('/ping');
        });
    });
});
