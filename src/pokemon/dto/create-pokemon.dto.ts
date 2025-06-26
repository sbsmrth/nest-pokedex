import { IsInt, IsString, Min, MinLength } from 'class-validator';

export class CreatePokemonDto {
  // should have at least 1 chartacter
  @IsInt()
  @Min(1)
  no: number;

  @IsString()
  @MinLength(1)
  name: string;
}
