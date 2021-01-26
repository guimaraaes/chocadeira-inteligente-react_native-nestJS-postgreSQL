import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateProcess{
    @ApiProperty()
    @IsNotEmpty()
    data_inicio: string;

    @ApiProperty()
    @IsNotEmpty()
    temperatura: number;

    @ApiProperty()
    @IsNotEmpty()
    umidade: number;

    @ApiProperty()
    @IsNotEmpty()
    viragem: string;

}

export class EditProcess{
     @ApiProperty()
    @IsNotEmpty()
    temperatura: number;

    @ApiProperty()
    @IsNotEmpty()
    umidade: number;

    @ApiProperty()
    @IsNotEmpty()
    viragem: string;
}

export class CreateHistory{
    @ApiProperty()
    @IsNotEmpty()
    data: string;

    @ApiProperty()
    @IsNotEmpty()
    temperatura: number;

    @ApiProperty()
    @IsNotEmpty()
    umidade: number;
}