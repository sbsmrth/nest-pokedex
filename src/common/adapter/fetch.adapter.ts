import { Injectable } from '@nestjs/common';
import { HttpAdapter } from '../interfaces/http-adapter.interface';

@Injectable()
export class FetchAdapter implements HttpAdapter {
  private readonly fetch: typeof fetch = globalThis.fetch;

  async get<T>(url: string): Promise<T> {
    try {
      const response = await this.fetch(url);
      const data = (await response.json()) as T;
      return data;
    } catch (error) {
      throw new Error(`Failed to fetch from ${url}: ${error}`);
    }
  }
}
