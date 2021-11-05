const AWS = require('aws-sdk');

module.exports.handle = async (event) => {
    const publishObject = {
        email: "glauber17230@gmail.com",
        password: "102030"
    }
    const params = {
        TopicArn: 'arn:aws:sns:us-east-2:268769556228:send-email',
        Message: `{"email": "glauber17230@gmail.com", "password": "102030"}`,
    }

    var publishTextPromise = new AWS.SNS({apiVersion: '2010-03-31'}).publish(params).promise();

    await publishTextPromise.then(
        function(data) {
          console.log(`Message ${params.Message} sent to the topic ${params.TopicArn}`);
          console.log("MessageID is " + data.MessageId);
        }).catch(
          function(err) {
          console.error(err, err.stack);
        });
        

    return(200,params)
}


