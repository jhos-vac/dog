import { Controller, Post, Body, Get } from '@nestjs/common';
import { get } from 'http';
import { CreatedogDto, } from './dto/create-dog.dto';

@Controller('dogs')
export class DogsController {

    @Post()
    async creat  (@Body() createdogDto: CreatedogDto) {
        console.log (createdogDto)
        return `this action creat a dog ${createdogDto.name}`
        
    }
}
