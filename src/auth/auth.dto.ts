import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class AuthLogIn {
    @ApiProperty()
    @IsNotEmpty({message: 'Insira um e-mail'})
    email: string;

    @ApiProperty()
    @IsNotEmpty({message: 'Insira uma senha'})
    // @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {message: 'Senha muito fraca'})
    senha: string;
}