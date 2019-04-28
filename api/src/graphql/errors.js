import { createError } from 'apollo-errors';

// Mask any internal errors
export const UnknownError = createError('UnknownError', {
  message: 'An unknown error has occurred',
});

// User should be logged in but isn't
export const UnauthorizedError = createError('UnauthorizedError', {
  message: 'You must login to do that',
});

// User is trying to perform an admin function
export const ForbiddenError = createError('ForbiddenError', {
  message: 'You are not allowed to do that',
});

// Data already exists
export const DataAlreadyExists = createError('DataAlreadyExists', {
  message: 'The data already exists',
});

// The given data is invalid
export const InvalidDataError = createError('InvalidDataError', {
  message: 'The data specified is invalid',
});

// The user does not have a client
export const AdminIsNotCreated = createError('AdminIsNotCreated', {
  message: 'The user does not have an admin entry',
});

// The server wasn't able to find the specified user
export const UserNotFound = createError('UserNotFound', {
  message: 'This user does not exist',
});

// The user already exists with the given data
export const UserAlreadyExists = createError('UserAlreadyExists', {
  message: 'An user already exists with the given data',
});

// Returns if the Roadmap name already exists
export const RoadmapAlreadyExists = createError('RoadmapAlreadyExists', {
  message: 'An roadmap already exists with the given name',
});
