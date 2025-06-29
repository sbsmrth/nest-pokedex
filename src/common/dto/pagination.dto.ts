import { IsOptional, Min, IsPositive, IsNumber } from 'class-validator';

export class PaginationDto {
  @IsNumber()
  @IsOptional()
  @Min(1)
  limit?: number;

  @IsNumber()
  @IsOptional()
  @IsPositive()
  offset?: number;
}
