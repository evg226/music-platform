import {Controller, Get} from "@nestjs/common";

@Controller('/tracks')
export class TrackController {

    create () {
        return "create";
    }

    @Get()
    gellAll () {
        return "List of all tracks";
    }

    @Get()
    getOne() {
        return "List one track";
    }

    delete () {
        return "delete";
    }
}