import request from 'supertest';

export function prepareQuery(query, variables) {
  return JSON.stringify({
    query,
    variables,
  });
}

export function graphqlRequest(app, query, token) {
  return new Promise(async resolve => {
    let response = null;
    if (token) {
      response = await request(app)
        .post('/graphql')
        .set('Authorization', 'bearer ' + token)
        .send(JSON.parse(query));
    } else {
      response = await request(app)
        .post('/graphql')
        .send(JSON.parse(query));
    }

    const result = response.body;
    resolve({
      raw: result,
      data: result.data,
      errors: result.errors,
      statusCode: response.statusCode,
      success: !result.hasOwnProperty('errors'),
    });
  });
}

export function buildQuery({ type, name, params, fields }) {
  const keys = Object.keys(params);
  const rootArgs = keys
    .reduce((acc, _, i) => acc + `, $${keys[i]}: ${params[keys[i]][1]}`, '')
    .substring(2);
  const args = keys.map(x => `${x}: $${x}`).join(', ');
  const query = `
    ${type} ${name}_Query(${rootArgs}) {
      ${name}(${args}) {
        ${fields.join(', ')}
      }
    }
  `;
  const variables = keys.reduce((acc, key) => {
    acc[key] = params[key][0];
    return acc;
  }, {});
  return JSON.stringify({ query, variables });
}

export function buildInputQuery({ name, input, params, fields, fieldsRaw }) {
  input = input || name[0].toUpperCase() + name.substring(1) + 'Input!';
  const hasFields = fieldsRaw || fields;
  const query = `
    mutation ${name}_Query($input: ${input}) {
      ${name}(input: $input) ${(hasFields && '{') || ''}
        ${fieldsRaw || (fields && fields.join(', ')) || ''}
      ${(hasFields && '}') || ''}
    }
  `;
  const variables = {
    input: {
      ...params,
    },
  };
  return JSON.stringify({ query, variables });
}

export function getSchemaType(schema) {
  return type => schema._typeMap[type];
}
