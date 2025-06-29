import { Injectable } from '@nestjs/common';
import { PokeResponse } from './interfaces/poke-response.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { Model } from 'mongoose';

@Injectable()
export class SeedService {
  constructor(
    @InjectModel(Pokemon.name) // Inject the Pokemon model to interact with the MongoDB collection
    private readonly pokemonModel: Model<Pokemon>,
  ) {}

  async executeSeed() {
    await this.pokemonModel.deleteMany({});
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=650');
    const data = (await res.json()) as PokeResponse;

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
