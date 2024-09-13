import {
    IsEmail,
    IsString,
    Matches,
    MaxLength,
    MinLength,
} from 'class-validator';

export class CreateUserDto {
    @IsString()
    @Matches(/^[a-zA-Z]+$/, { message: 'Must contain only letters.' })
    name: string;

    @IsEmail({}, { message: 'Invalid email.' })
    email: string;

    @MinLength(6, { message: 'Password must be at least 6 characters long.' })
    @MaxLength(6, { message: 'Password must not exceed 6 characters.' })
    @Matches(/^[a-zA-Z0-9]+$/, {
        message: 'Password must contain only letters and numbers.',
    })
    @IsString()
    password: string;

    @IsString()
    @Matches(/^[A-Z0-9]+$/, { message: 'Must be alphanumeric.' })
    registration: string;
}
