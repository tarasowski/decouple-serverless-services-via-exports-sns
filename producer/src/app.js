const AWS = require('aws-sdk')
const sns = new AWS.SNS()

const SNS_TOPIC = process.env.SNS_TOPIC

module.exports.lambdaHandler = async (event) => {
    const params = {
        TopicArn: SNS_TOPIC,
        Message: 'A call from another planet (stack)'
    }
    try {
        await sns.publish(params).promise()
        return 'Message sent'
    } catch (err) {
        console.log(err)
        throw new Error(err)
    }
}