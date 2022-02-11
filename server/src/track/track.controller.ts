import {Controller, Delete, Post, Get, Param} from "@nestjs/common";

@Controller('tracks')
export class TrackController {

    @Post()
    create () {
        return "create";
    }

    @Get()
    gellAll () {
        return {message:"List of all tracks"};
    }

    @Get(':id')
    getOne( @Param('id') id ) {
        return `One track #${id}`;
    }

    @Delete(':id')
    delete (@Param('id') id ) {
        return `delete ${id}`;
    }
}