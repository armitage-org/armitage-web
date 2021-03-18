import feathers from "@feathersjs/client";

const restClient = feathers.rest(API_URL);
const app = feathers();
app.configure(restClient.fetch(window.fetch));
app.configure(feathers.authentication());

export const apiClient = app;
