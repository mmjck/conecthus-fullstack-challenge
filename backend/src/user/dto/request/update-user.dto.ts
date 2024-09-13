import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import {
    IsEmail,
    IsOptional,
    IsString,
    Matches,
    MaxLength,
    MinLength,
} from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @IsString()
    @IsOptional()
    @Matches(/^[a-zA-Z]+$/, { message: 'Must contain only letters.' })
    name: string;

    @IsEmail({}, { message: 'Invalid email.' })
    @IsOptional()
    email: string;

    @MinLength(6, { message: 'Password must be at least 6 characters long.' })
    @MaxLength(6, { message: 'Password must not exceed 6 characters.' })
    @Matches(/^[a-zA-Z0-9]+$/, {
        message: 'Password must contain only letters and numbers.',
    })
    @IsOptional()
    @IsString()
    password: string;

    @IsString()
    @IsOptional()
    registration: string;
}
