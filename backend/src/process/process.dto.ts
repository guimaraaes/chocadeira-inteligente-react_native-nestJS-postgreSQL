import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";
 
export class ProcessParam{

    @ApiProperty()
    @IsNotEmpty()
    temperatura: number;

    @ApiProperty()
    @IsNotEmpty()
    umidade: number;

    @ApiProperty()
    @IsNotEmpty()
    viragem: Date;

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