import { Injectable } from '@nestjs/common';
import { PokeResponse } from './interfaces/poke-response.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { Model } from 'mongoose';
import { FetchAdapter } from 'src/common/adapter/fetch.adapter';

@Injectable()
export class SeedService {
  constructor(
    @InjectModel(Pokemon.name) // Inject the Pokemon model to interact with the MongoDB collection
    private readonly pokemonModel: Model<Pokemon>,
    private readonly httpAdapter: FetchAdapter,
  ) {}

  async executeSeed() {
    await this.pokemonModel.deleteMany({});
    const data = await this.httpAdapter.get<PokeResponse>(
      'https://pokeapi.co/api/v2/pokemon?limit=650',
    );

    const pokemons = data.results.map(({ name, url }) => {
      const segments = url.split('/');

      const pokemonNo = segments.at(-2);

      return {
        name,
        no: +pokemonNo!,
      };
    });

    return await this.pokemonModel.insertMany(pokemons);
  }
}
