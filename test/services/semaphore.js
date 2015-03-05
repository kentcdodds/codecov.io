var semaphore = require("../../lib/services/semaphore");

describe("semaphore service", function(){

  it ("can detect semaphore", function(){
    process.env.SEMAPHORE = "true";
    expect(semaphore.detect()).to.be(true);
  });

  it ("can get semaphore env info", function(){
    process.env.SEMAPHORE_BUILD_NUMBER = "1234";
    process.env.REVISION = "5678";
    process.env.BRANCH_NAME = "master";
    expect(semaphore.configuration()).to.eql({
      service : 'semaphore',
      buildId :  '1234',
      commitId : '5678',
      build : '1234',
      branch : 'master'
    });
  });

});
