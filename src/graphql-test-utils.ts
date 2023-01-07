import { CyHttpMessages } from "cypress/types/net-stubbing";

export const hasOperationName = (
  req: CyHttpMessages.IncomingHttpRequest,
  operationName: string
) => {
  return req.body?.operationName && req.body?.operationName === 'Continents';
};

export const aliasQuery = (
  req: CyHttpMessages.IncomingHttpRequest,
  operationName: string
) => {
  if (hasOperationName(req, operationName)) {
    req.alias = operationName;
  }
};

export const aliasMutation = (
  req: CyHttpMessages.IncomingHttpRequest,
  operationName: string
) => {
  if (hasOperationName(req, operationName)) {
    req.alias = operationName;
  }
};