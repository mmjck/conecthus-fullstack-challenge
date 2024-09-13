import { Type } from 'class-transformer';
import { IsInt, IsOptional, IsPositive, IsString } from 'class-validator';

export class PaginationQueryDto {
  @IsOptional()
  @IsPositive()
  @Type(() => Number)
  readonly limit?: number;

  @IsOptional()
  @IsInt()
  @Type(() => Number)
  readonly page?: number;

  @IsOptional()
  @IsString()
  @Type(() => String)
  readonly q?: number;
}
