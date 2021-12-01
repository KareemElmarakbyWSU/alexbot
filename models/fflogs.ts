import got from "got";
import FormData from "form-data";
import { GraphQLClient, gql } from "graphql-request";
import { CharacterDataResponse } from "./fflogsTypes";

class FFLogs {
  client: GraphQLClient;
  clientId: string = "";
  clientSecret: string = "";

  constructor() {
    this.client = new GraphQLClient("https://www.fflogs.com/api/v2/client");
  }

  async initialize(clientId: string, clientSecret: string) {
    this.clientId = clientId;
    this.clientSecret = clientSecret;
    await this.authenticate();
  }

  async authenticate() {
    const form = new FormData();
    form.append("grant_type", "client_credentials");
    const response = await got.post<{ access_token: string }>(
      "https://www.fflogs.com/oauth/token",
      {
        headers: {
          authorization: `Basic ${Buffer.from(
            `${this.clientId}:${this.clientSecret}`
          ).toString("base64")}`,
        },
        body: form,
        responseType: "json",
      }
    );
    this.client.setHeader(
      "authorization",
      `Bearer ${response.body["access_token"]}`
    );
  }

  async fetchCharacterData(id: number) {
    const query = gql`
      query ($id: Int) {
        characterData {
          character(id: $id) {
            id
            name
            zoneRankings
          }
        }
      }
    `;
    return await this.client.request<CharacterDataResponse>(query, {
      id,
    });
  }
}

export const fflogs = new FFLogs();
