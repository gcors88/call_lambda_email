const AWS = require('aws-sdk');

module.exports.handle = async (event) => {
    const publishObject = {
        email: process.env.EMAIL,
        password: process.env.PASSWORD
    }
    const params = {
        TopicArn: process.env.TOPIC_ARN,
        Message: `OLÁ O EMAIL CHEGOU`,
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


