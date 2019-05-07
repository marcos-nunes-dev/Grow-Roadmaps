const getConfig = require('next/config').default();
const config = getConfig ? getConfig.publicRuntimeConfig : {};

module.exports = {
  // Server API URL
  api_url: config.api_url,
  // Server GraphQL URL
  graphql_url: config.graphql_url,
  // Server GraphQL Subscriptions URL
  graphql_subscriptions_url: config.graphql_subscriptions_url
};