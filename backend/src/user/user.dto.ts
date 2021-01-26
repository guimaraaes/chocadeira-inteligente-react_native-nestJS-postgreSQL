import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateUser{
    @ApiProperty()
    @IsNotEmpty()
    nome: string;

    @ApiProperty()
    @IsNotEmpty()
    cpf: string;

    @ApiProperty()
    @IsNotEmpty()
    email: string;

    @ApiProperty()
    @IsNotEmpty()
    senha: string;
}

export class EditUser{
    @ApiProperty()
    @IsNotEmpty()
    email: string;

    @ApiProperty()
    @IsNotEmpty()
    senha: string;
}