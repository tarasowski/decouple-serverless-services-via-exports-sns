exports.lambdaHandler = async (event) => {
    console.log(JSON.stringify(event))
    return 'Lambda was triggered'
};
